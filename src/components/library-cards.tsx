import { Link } from "@tanstack/react-router";
import { kb } from "@/data/kb";
import { DISCLAIMER_POINTS } from "@/data/legal";
import { peptideSkim } from "@/data/skim";
import type { GoalGuide, PeptideCard, ProtocolCard, Retrieved, StackCard } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function DoseList({ card }: { card: PeptideCard }) {
  return (
    <div className="space-y-2">
      {card.dosing.map((d) => (
        <div key={d.label} className="rounded-md bg-accent p-3">
          <p className="text-xs font-semibold text-navy">{d.label}</p>
          <p className="mt-1 text-sm leading-relaxed">{d.text}</p>
          <p className="mt-1 text-xs text-muted">
            {d.source.toUpperCase()} · {d.chapter} · p.{d.pages}
          </p>
        </div>
      ))}
    </div>
  );
}

export function PeptideView({ card }: { card: PeptideCard }) {
  return (
    <article className="space-y-3">
      <Badge>{card.desk ?? "core"}</Badge>
      <h3 className="font-display text-xl font-semibold tracking-tight">{card.name}</h3>
      <p className="text-sm leading-snug text-muted">{peptideSkim(card.id, card.good_for[0])}</p>
      <p className="text-xs font-medium uppercase tracking-wide text-primary">{card.class_name}</p>
      <p className="text-sm text-warn">{card.regulatory}</p>
      <p className="text-sm leading-relaxed">{card.what_it_is}</p>
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
          Common-practice ranges — not a personal dose
        </p>
        <DoseList card={card} />
      </div>
      <p className="text-sm">
        <span className="font-semibold">Cycle / washout. </span>
        {card.cycle}
      </p>
      <ul className="list-disc pl-5 text-sm">
        {card.not_for.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <div className="rounded-md bg-danger-bg p-3 text-sm text-destructive">
        <span className="font-semibold">Flagged in the books: </span>
        {card.contraindications.join(" · ")}
      </div>
      <p className="text-xs text-muted">Sources: {card.citations.join(" · ")}</p>
    </article>
  );
}

export function StackView({ card }: { card: StackCard }) {
  return (
    <article className="space-y-2">
      <Badge>{card.category}</Badge>
      <h3 className="font-display text-lg font-semibold">{card.name}</h3>
      <ul className="list-disc pl-5 text-sm">
        {card.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p className="text-sm">
        <span className="font-semibold">Duration. </span>
        {card.duration}
      </p>
      <p className="text-sm leading-relaxed">{card.use_when}</p>
      <p className="text-xs text-muted">{card.source}</p>
    </article>
  );
}

export function ProtocolView({ card }: { card: ProtocolCard }) {
  return (
    <article className="space-y-2">
      <Badge>protocol</Badge>
      <h3 className="font-display text-lg font-semibold">{card.name}</h3>
      <ul className="list-disc pl-5 text-sm">
        {card.steps.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p className="text-sm">{card.timeline}</p>
      <p className="text-xs text-muted">{card.source}</p>
    </article>
  );
}

export function SafetyView() {
  const s = kb.safety;
  return (
    <article className="space-y-3 text-sm">
      <h3 className="font-display text-lg font-semibold">Safety rails</h3>
      <div className="rounded-md bg-danger-bg p-3 text-destructive">{kb.meta.legal.full}</div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {DISCLAIMER_POINTS.map((d) => (
          <li key={d.title} className="list-none rounded-lg bg-accent p-3">
            <p className="font-semibold">{d.title}</p>
            <p className="mt-1 text-muted">{d.body}</p>
          </li>
        ))}
      </ul>
      <p>
        Full{" "}
        <Link to="/terms" className="font-semibold text-primary">
          Terms & Disclaimers
        </Link>{" "}
        — not affiliated, no liability, books take precedence.
      </p>
      <ul className="list-disc pl-5">
        {s.universal_avoid.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <p className="font-semibold">GLP-1 hard stops (Vol 1 Ch.10)</p>
      <ul className="list-disc pl-5">
        {s.glp1_boxed_style.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <p className="font-semibold">When it does not work (Vol 1 Ch.21)</p>
      <ul className="list-disc pl-5">
        {s.nonresponse_tree.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <div className="rounded-md bg-ok-bg p-3 text-ok">{s.storage}</div>
    </article>
  );
}

export function GoalView({ card }: { card: GoalGuide }) {
  return (
    <article className="space-y-3">
      <Badge>plain language</Badge>
      <h3 className="font-display text-xl font-semibold tracking-tight">{card.title}</h3>
      <p className="text-sm leading-relaxed">{card.plain}</p>
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">Start with</p>
        <ol className="list-decimal space-y-1 pl-5 text-sm">
          {card.firstDo.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      </div>
      {card.clarify?.length ? (
        <div className="rounded-md bg-accent p-3 text-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">Worth knowing so the map fits</p>
          <ol className="list-decimal space-y-1 pl-5">
            {card.clarify.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
        </div>
      ) : null}
      <p className="text-sm leading-relaxed">
        <span className="font-semibold">How this is usually sequenced. </span>
        {card.sequence}
      </p>
      <div className="rounded-md bg-warn-bg p-3 text-sm text-warn">{card.caution}</div>
      <p className="text-xs text-muted">{card.source}</p>
    </article>
  );
}

function CompareView() {
  return (
    <article className="space-y-2 text-sm leading-relaxed">
      <h3 className="font-display text-lg font-semibold">BPC-157 vs TB-500</h3>
      <p>Volume 1 Chapter 5 comparison table (p.72):</p>
      <ul className="list-disc pl-5">
        <li>
          <strong>BPC-157</strong> — VEGF / NO, 15 aa, half-life 4–6 h, oral possible, 250–500 mcg daily in that table,
          GI and localized tendon, onset 1–2 weeks.
        </li>
        <li>
          <strong>TB-500</strong> — actin / cell migration, 43 aa, half-life 8–12 h, injection, 2–5 mg twice weekly with
          a 4–6 mg/week load, systemic / muscle / multi-site, onset 2–4 weeks.
        </li>
        <li>Complementary, not redundant. Vol 2 injury Stack A: BPC-157 500 mcg/day + TB-500 2–5 mg/week for 4–6 weeks.</li>
      </ul>
    </article>
  );
}

export function RetrievedViews({ items }: { items: Retrieved[] }) {
  if (!items.length) return <p className="text-sm text-muted">Cards that match what you said will land here.</p>;
  return (
    <div className="space-y-6">
      {items.map((it, i) => {
        if (it.kind === "goal") return <GoalView key={`g-${it.card.id}-${i}`} card={it.card} />;
        if (it.kind === "peptide") return <PeptideView key={`p-${it.card.id}-${i}`} card={it.card} />;
        if (it.kind === "stack") return <StackView key={`s-${it.card.id}-${i}`} card={it.card} />;
        if (it.kind === "protocol") return <ProtocolView key={`r-${it.card.id}-${i}`} card={it.card} />;
        if (it.kind === "compare") return <CompareView key={`c-${i}`} />;
        return <SafetyView key={`safe-${i}`} />;
      })}
    </div>
  );
}

export function CopyNote({ text }: { text: string }) {
  return (
    <Button
      variant="outline"
      size="sm"
      type="button"
      onClick={() => {
        const payload = `Mr. Pep — educational (not medical advice)\n\n${text}\n\nTalk this through with a clinician. Do not self-prescribe. Research peptides are not approved drugs. Not affiliated with ISSCA. No liability.`;
        navigator.clipboard.writeText(payload);
      }}
    >
      Copy
    </Button>
  );
}
