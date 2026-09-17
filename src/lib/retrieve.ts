import { kb } from "@/data/kb";
import { GOAL_PRIORITY, GOALS } from "@/data/goals";
import type { GoalGuide, HardStop, PeptideCard, Retrieved } from "@/data/types";

const STOP = new Set([
  "i",
  "im",
  "am",
  "my",
  "me",
  "the",
  "a",
  "an",
  "or",
  "and",
  "to",
  "of",
  "if",
  "that",
  "this",
  "what",
  "something",
  "can",
  "use",
  "want",
  "for",
  "with",
  "etc",
  "hi",
  "hello",
  "is",
  "are",
  "be",
  "it",
  "in",
  "on",
  "at",
  "do",
  "does",
  "some",
  "any",
  "please",
  "would",
  "could",
  "should",
  "you",
  "your",
  "we",
  "they",
  "from",
  "about",
  "just",
  "also",
  "very",
  "really",
  "little",
  "bit",
  "these",
  "those",
  "here",
  "there",
  "dont",
  "need",
  "know",
  "names",
  "name",
  "peptide",
  "peptides",
  "help",
  "maybe",
  "like",
  "have",
  "has",
  "been",
  "was",
  "were",
  "will",
]);

export function norm(s: string) {
  return (s || "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[–—]/g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9+.\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function compactPhrase(s: string) {
  return norm(s)
    .split(" ")
    .filter((t) => t.length > 1 && !STOP.has(t))
    .join(" ");
}

function hasKw(n: string, k: string) {
  const key = norm(k);
  if (!key) return false;
  if (key.length <= 3) return new RegExp(`(?:^| )${key}(?: |$)`).test(n);
  return n.includes(key);
}

function keywordHit(n: string, compactQ: string, k: string) {
  if (hasKw(n, k)) return true;
  const ck = compactPhrase(k);
  if (ck.length >= 6 && compactQ.includes(ck)) return true;
  return false;
}

function signalHit(n: string, signals: string[]) {
  return signals.some((src) => {
    try {
      return new RegExp(src, "i").test(n);
    } catch {
      return false;
    }
  });
}

export function findHardStop(q: string): HardStop | null {
  const n = norm(q);
  for (const s of kb.hard_stops) {
    if (s.triggers.some((t) => n.includes(norm(t)))) return s;
  }
  if (/\b(inyect|inyecta|que me pongo|que me inyecto)\b/.test(n)) return kb.hard_stops[0] ?? null;
  if (/\b(i will|im going to) (inject|pin|take)\b/.test(n)) return kb.hard_stops[0] ?? null;
  if (/\b(inject|pin)\b.{0,24}\b(tonight|today|now)\b/.test(n)) return kb.hard_stops[0] ?? null;
  if (/\bwhat (should|do) i (inject|pin)\b/.test(n)) return kb.hard_stops[0] ?? null;
  return null;
}

const GENERIC_TOK = new Set([
  "peptide",
  "peptides",
  "copper",
  "skin",
  "support",
  "fat",
  "research",
  "mitochondrial",
  "derived",
  "wound",
  "daily",
  "nightly",
  "analog",
  "analogue",
  "not",
  "the",
  "and",
  "for",
  "with",
  "from",
  "body",
  "protection",
  "compound",
  "human",
  "plus",
  "minus",
]);

const SHORT_NAMES = new Set(["bpc", "kpv", "ghk", "hcg", "nad", "mots", "ss31", "ta1", "cjc", "ll37", "tb500", "vip", "fgl", "dsip"]);

function distinctiveKeys(p: PeptideCard): string[] {
  const raw = [p.id, p.name, ...(p.aliases || [])];
  const out: string[] = [];
  for (const r of raw) {
    const k = norm(r);
    if (!k) continue;
    if (k.split(" ").length <= 4 && k.length >= 3 && !GENERIC_TOK.has(k)) out.push(k);
    for (const tok of k.split(/[\s/+-]+/)) {
      if (GENERIC_TOK.has(tok) || tok.length < 3) continue;
      if (SHORT_NAMES.has(tok) || /[0-9]/.test(tok) || tok.length >= 5) out.push(tok);
    }
  }
  return [...new Set(out)];
}

export function findPeptides(q: string): PeptideCard[] {
  const n = ` ${norm(q)} `;
  const hits: PeptideCard[] = [];
  for (const p of kb.peptides) {
    const matched = distinctiveKeys(p).some((k) => {
      if (k.length <= 5) return n.includes(` ${k} `);
      return n.includes(k);
    });
    if (matched) hits.push(p);
  }
  return [...new Map(hits.map((p) => [p.id, p])).values()];
}

export function matchGoals(q: string): GoalGuide[] {
  const n = norm(q);
  const c = compactPhrase(q);
  const hit = GOALS.filter((g) => g.keywords.some((k) => keywordHit(n, c, k)) || signalHit(n, g.signals));
  return hit.sort(
    (a, b) => GOAL_PRIORITY.indexOf(a.id as (typeof GOAL_PRIORITY)[number]) - GOAL_PRIORITY.indexOf(b.id as (typeof GOAL_PRIORITY)[number]),
  );
}

export function intent(q: string) {
  const n = norm(q);
  if (matchGoals(q).length) return "goal";
  const scores: Record<string, number> = {};
  for (const it of kb.intents) {
    scores[it.id] = it.examples.reduce((a, e) => a + (n.includes(norm(e)) ? 1 : 0), 0);
  }
  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  return best && best[1] > 0 ? best[0] : "what";
}

export type Retrieval = {
  hardStop: HardStop | null;
  items: Retrieved[];
  intent: string;
  context: string;
  goals: GoalGuide[];
  map: string;
};

function peptideById(id: string) {
  return kb.peptides.find((p) => p.id === id);
}

function peptidesFromGoals(goals: GoalGuide[], cap: number): PeptideCard[] {
  const seen = new Set<string>();
  const out: PeptideCard[] = [];
  const maxLen = Math.max(0, ...goals.map((g) => g.peptideIds.length));
  for (let i = 0; i < maxLen; i++) {
    for (const g of goals) {
      const id = g.peptideIds[i];
      if (!id) continue;
      const p = peptideById(id);
      if (!p || seen.has(p.id)) continue;
      seen.add(p.id);
      out.push(p);
      if (out.length >= cap) return out;
    }
  }
  return out;
}

function combinedGoal(goals: GoalGuide[]): GoalGuide {
  const ids = goals.map((g) => g.id).join("+");
  const titles = goals.map((g) => g.title).join(" · ");
  const sequence = [
    "You named more than one thing. We'll sequence them so a clinician can choose — not open everything on day one.",
    goals.map((g, i) => `${i + 1}. ${g.title}: ${g.sequence}`).join(" "),
    "Typical order here: protect function (injury / joints) → quiet fluid or gut inflammation → extra weight with a labeled medicine if a prescriber agrees → appearance last. Sleep, protein, and movement sit under all of it. Mitochondrial support in the books is that foundation, not an extra glow vial.",
  ].join(" ");
  return {
    id: `combined:${ids}`,
    title: `Several things at once (${titles})`,
    plain: goals.map((g) => g.plain).join(" "),
    keywords: [],
    signals: [],
    chip: { en: "Several of these", es: "Varias de estas" },
    hint: { en: "Sequence, don't stack", es: "Secuencia, no apilar" },
    utterance: goals.map((g) => g.utterance).join(". "),
    firstDo: goals.flatMap((g) => g.firstDo).slice(0, 6),
    peptideIds: [...new Set(goals.flatMap((g) => g.peptideIds))],
    stackIds: [...new Set(goals.flatMap((g) => g.stackIds))],
    protocolIds: [...new Set(goals.flatMap((g) => g.protocolIds))],
    sequence,
    caution: goals.map((g) => g.caution).join(" "),
    source: goals.map((g) => g.source).join(" · "),
    clarify: goals.flatMap((g) => g.clarify || []).slice(0, 2),
  };
}

export function retrieve(q: string): Retrieval {
  const hardStop = findHardStop(q);
  const n = norm(q);
  const it = intent(q);
  const items: Retrieved[] = [];
  const goals = matchGoals(q);

  if (goals.length >= 2) items.push({ kind: "goal", card: combinedGoal(goals) });
  else if (goals.length === 1) items.push({ kind: "goal", card: goals[0]! });

  if (/tb-?500/.test(n) && /bpc/.test(n) && (/vs|versus|diferenc|compare| o | or /.test(n) || it === "compare")) {
    items.push({ kind: "compare", id: "bpc-tb" });
  }

  const named = findPeptides(q);
  const fromGoals = peptidesFromGoals(goals, 5);
  const peptides = [...new Map([...fromGoals, ...named].map((p) => [p.id, p])).values()].slice(0, 5);
  for (const p of peptides) items.push({ kind: "peptide", card: p });

  const stackIds = new Set(goals.flatMap((g) => g.stackIds));
  const protocolIds = new Set(goals.flatMap((g) => g.protocolIds));

  if (/longevity|anti-?aging|longevidad/.test(n) && !goals.length) {
    for (const s of kb.stacks.filter((s) => s.category === "longevity" || s.category === "mito")) {
      items.push({ kind: "stack", card: s });
    }
  } else if (/mito|mitochond|mots|ss-?31|nad\b|humanin|cardiolipin/.test(n) && !goals.length) {
    for (const s of kb.stacks.filter((s) => s.category === "mito")) items.push({ kind: "stack", card: s });
  } else if ((/stack|combin|junto/.test(n) || it === "stack") && !peptides.length && !goals.length) {
    for (const s of kb.stacks) items.push({ kind: "stack", card: s });
  }

  let stackCount = 0;
  for (const s of kb.stacks) {
    if (!stackIds.has(s.id)) continue;
    if (goals.length && stackCount >= 2) break;
    items.push({ kind: "stack", card: s });
    stackCount += 1;
  }
  let protocolCount = 0;
  for (const p of kb.protocols) {
    if (!protocolIds.has(p.id)) continue;
    if (goals.length && protocolCount >= 2) break;
    items.push({ kind: "protocol", card: p });
    protocolCount += 1;
  }

  if (/injur|tendon|post-?op|post op|surgery|rehab|lesion|ligament/.test(n) && !goals.length) {
    for (const p of kb.protocols.filter((p) => /bpc|tb|injur|surg|tendon/i.test(p.id + p.name))) {
      items.push({ kind: "protocol", card: p });
    }
    for (const s of kb.stacks.filter((s) => s.category === "injury")) items.push({ kind: "stack", card: s });
  }

  if (/gut|ibd|leaky|intestino|sibo|gastr/.test(n) && !goals.some((g) => g.id === "gut")) {
    for (const p of kb.protocols.filter((p) => /gut|ibd|kpv/i.test(p.id + p.name))) {
      items.push({ kind: "protocol", card: p });
    }
    for (const s of kb.stacks.filter((s) => s.category === "gut")) items.push({ kind: "stack", card: s });
  }

  if (/safety|side effect|contraindic|who should not|warning|peligro|embaraz/.test(n) || it === "safety") {
    items.push({ kind: "safety" });
  }

  if (/cycle|washout|descanso|ciclo/.test(n) && !peptides.length && !goals.length) {
    items.push({ kind: "safety" });
  }

  const uniq: Retrieved[] = [];
  const seen = new Set<string>();
  for (const itm of items) {
    const k =
      itm.kind === "peptide"
        ? `p:${itm.card.id}`
        : itm.kind === "stack"
          ? `s:${itm.card.id}`
          : itm.kind === "protocol"
            ? `r:${itm.card.id}`
            : itm.kind === "compare"
              ? `c:${itm.id}`
              : itm.kind === "goal"
                ? `g:${itm.card.id}`
                : itm.kind;
    if (seen.has(k)) continue;
    seen.add(k);
    uniq.push(itm);
  }

  const capped = uniq.slice(0, 10);
  const map = composeGoalAnswer(goals);
  let context = formatContext(capped, hardStop, goals, map);
  if (!context && !hardStop) context = emptyInvite(q);
  return { hardStop, items: capped, intent: it, goals, map, context };
}

export function composeGoalAnswer(goals: GoalGuide[]): string {
  if (!goals.length) return "";
  const parts: string[] = [];
  parts.push(
    "Here is a working map from the books — educational, not a prescription. A clinician decides what you actually use.",
  );
  if (goals.length > 1) {
    parts.push(
      "You named more than one thing. Sequence them. Function first, extra weight if a prescriber agrees, appearance last. People do combine peptides; talk stacking through with a clinician rather than starting GLP-1 + BPC-157 + TB-500 + GHK-Cu + GH on day one.",
    );
  }
  goals.forEach((g, i) => {
    const named = g.peptideIds
      .slice(0, 2)
      .map(peptideById)
      .filter((p): p is PeptideCard => Boolean(p));
    const doseBits = named.map((p) => {
      const d = p.dosing[0];
      const dose = d ? `${d.label}: ${d.text} (${d.source} ${d.chapter} p.${d.pages})` : "No ISSCA dosing table on this card.";
      return `- ${p.name} — ${p.regulatory.split(".")[0]}. ${dose}`;
    });
    parts.push(
      [
        `${i + 1}. ${g.title}`,
        g.plain,
        `Start with: ${g.firstDo.join(" ")}`,
        `How this is usually sequenced: ${g.sequence}`,
        doseBits.length ? `What the books actually list in this lane:\n${doseBits.join("\n")}` : "",
        `Caution: ${g.caution}`,
        `(${g.source})`,
      ]
        .filter(Boolean)
        .join("\n"),
    );
  });
  parts.push(
    "Share this with a clinician. Do not self-prescribe. Research peptides are not approved drugs. Approved GLP-1s follow the label. Volumes 1–2 take precedence; magazine faculty stacks are extra context. Mr. Pep is not affiliated with ISSCA. No liability — educational compilation only.",
  );
  return parts.join("\n\n");
}

export function composeClarify(goals: GoalGuide[]): string {
  const titles = goals.map((g) => g.title).join(" · ") || "what you described";
  const qs = [...new Set(goals.flatMap((g) => g.clarify || []))].slice(0, 2);
  const questions = qs.length
    ? qs
    : [
        "How long has this been going on?",
        "Are you already on a GLP-1, a peptide, or another medicine for this?",
      ];
  return [
    `I heard: ${titles}.`,
    "Two things that change the protocol. Answer these, then I will build it with you:",
    questions.map((c, i) => `${i + 1}. ${c}`).join("\n"),
    "Reply in your words. I will not lay out ranges or a stack until you do.",
  ].join("\n\n");
}

export function shouldClarify(goals: GoalGuide[], assistantTurns: number) {
  return assistantTurns === 0 && goals.length > 0;
}

export function emptyInvite(_q: string): string {
  return [
    "I heard you. Two things that change the protocol — answer these, then I will build it:",
    "1. Is this mainly extra weight / diabetes, tiredness, sore joints, slow healing, glow, longevity, gut, or mitochondrial support?",
    "2. How long has it been going on, and are you already on a GLP-1, peptide, or other medicine for this?",
    "You can also tap overweight, tired, sore joints, slow healing, glow, longevity, gut, or mitochondrial support.",
  ].join("\n\n");
}

/** Keep follow-up answers in the same lane as the first complaint. */
export function retrieveAsk(question: string, priorUser: string[] = []) {
  const immediate = retrieve(question);
  if (immediate.hardStop) return immediate;
  if (!priorUser.length) return immediate;
  const corpus = retrieve([question, ...priorUser].join(" \n "));
  if (corpus.hardStop) return immediate;
  if (corpus.goals.length > immediate.goals.length) return corpus;
  if (!immediate.goals.length && !immediate.items.length && corpus.items.length) return corpus;
  return immediate;
}

function formatContext(items: Retrieved[], hardStop: HardStop | null, goals: GoalGuide[], map: string) {
  const bits: string[] = [];
  if (hardStop) bits.push(`HARD STOP (${hardStop.id}): ${hardStop.reply}`);
  if (goals.length) {
    bits.push(
      [
        "GOAL TRIAGE — they already described a body complaint. Never say 'tell me in everyday words'.",
        `Matched goals: ${goals.map((g) => g.id).join(", ")}`,
        "This is the PROTOCOL turn. They already answered clarifying questions. Do NOT re-ask. Build the sequenced protocol now.",
        "People do stack appearance peptides. Do not scold. Sequence + discuss stacking with a clinician. Phasing into GH-support (CJC + ipamorelin) after foundations can be reasonable. Flag edema if puffiness is in play.",
        "Mitochondrial support belongs in glow, longevity, tiredness, and recovery: sleep, protein, zone-2; MOTS-c / SS-31 / NAD as literacy with no invented milligrams.",
        "One cited range per option. Never invent doses.",
      ].join("\n"),
    );
    if (map) bits.push(`PREFERRED MAP (keep citations, do not add doses not listed):\n${map}`);
  }
  for (const it of items) {
    if (it.kind === "goal") {
      const g = it.card;
      bits.push(
        [
          `GOAL ${g.title}`,
          g.plain,
          `Start with: ${g.firstDo.join(" | ")}`,
          `Sequence: ${g.sequence}`,
          `Caution: ${g.caution}`,
          `Source: ${g.source}`,
        ].join("\n"),
      );
    } else if (it.kind === "peptide") {
      const p = it.card;
      bits.push(
        [
          `PEPTIDE ${p.name} [${p.desk ?? "core"}]`,
          `Class: ${p.class_name}`,
          `Regulatory: ${p.regulatory}`,
          `What: ${p.what_it_is}`,
          `Dosing (quote exactly, do not merge ranges):`,
          ...p.dosing.map((d) => `- ${d.label}: ${d.text} (${d.source} ${d.chapter} p.${d.pages})`),
          `Cycle: ${p.cycle}`,
          `Not for: ${p.not_for.join("; ")}`,
          `Contraindications: ${p.contraindications.join("; ")}`,
          `Citations: ${p.citations.join("; ")}`,
        ].join("\n"),
      );
    } else if (it.kind === "stack") {
      bits.push(`STACK ${it.card.name}\n${it.card.items.join("\n")}\nDuration: ${it.card.duration}\nUse when: ${it.card.use_when}\n${it.card.source}`);
    } else if (it.kind === "protocol") {
      bits.push(`PROTOCOL ${it.card.name}\n${it.card.steps.join("\n")}\nTimeline: ${it.card.timeline}\n${it.card.source}`);
    } else if (it.kind === "compare") {
      bits.push(
        "COMPARE BPC-157 vs TB-500 (Vol 1 Ch.5 p.72): BPC VEGF/NO, 15aa, t½ 4–6h, oral possible, 250–500 mcg daily in that table, GI/local tendon, onset 1–2 wks. TB-500 actin/migration, 43aa, t½ 8–12h, injection, 2–5 mg twice weekly with 4–6 mg/week load, systemic/muscle, onset 2–4 wks. Complementary. Vol 2 Stack A: BPC 500 mcg/day + TB-500 2–5 mg/week 4–6 weeks.",
      );
    } else if (it.kind === "safety") {
      bits.push(
        [
          "SAFETY",
          kb.meta.legal.full,
          "Avoid: " + kb.safety.universal_avoid.join("; "),
          "GLP-1: " + kb.safety.glp1_boxed_style.join("; "),
          "Non-response: " + kb.safety.nonresponse_tree.join(" → "),
          kb.safety.storage,
          kb.safety.quality,
        ].join("\n"),
      );
    }
  }
  return bits.join("\n\n---\n\n");
}

export function deterministicAnswer(q: string): string {
  const r = retrieve(q);
  if (r.hardStop) return r.hardStop.reply + "\n\n" + kb.meta.legal.short;
  if (r.map) return r.map;
  return r.context || emptyInvite(q);
}
