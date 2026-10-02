import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { kb } from "@/data/kb";
import { peptideSkim } from "@/data/skim";
import { PeptideView, StackView } from "@/components/library-cards";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/protocols")({
  head: () => ({
    meta: [
      { title: "Protocols - Mr. Pep" },
      {
        name: "description",
        content:
          "Educational metabolic and GLP-1 protocol reference grounded in ISSCA Volumes 1-2, plus a browse of every compound. Not a prescription.",
      },
    ],
  }),
  component: ProtocolsPage,
});

const METABOLIC_PEPTIDES = ["glp1", "tesamorelin-mito", "cjc-ipam"];
const METABOLIC_STACKS = ["glp-t2d", "metabolic-v2-1"];

const BROWSE_TABS = ["peptides", "stacks"] as const;

const timeline = [
  {
    period: "0-24 hours",
    emoji: "💊",
    desc: "A labeled GLP-1 begins acting on appetite and blood-sugar signaling. Some people notice less hunger; many notice nothing on day one. Response is individual.",
  },
  {
    period: "First few days",
    emoji: "📉",
    desc: "Appetite suppression is often most noticeable. Nausea or fullness can appear as the body adjusts. A prescriber manages side effects and decides whether to hold or change anything.",
  },
  {
    period: "Weeks 1-2",
    emoji: "🔥",
    desc: "The body settles on the starting dose before any titration a clinician may choose. Protein and resistance training start now, not later, so you do not lose muscle with the fat.",
  },
  {
    period: "Weeks 3-6",
    emoji: "⚡",
    desc: "Early shifts in weight and blood-sugar patterns may appear. Volume 2 treats this as a slow, monitored process, not a crash. Dose changes stay with the prescriber and the label.",
  },
  {
    period: "Long term",
    emoji: "🧠",
    desc: "The Volume 2 objective is metabolic clarity, not the fastest possible weight loss. Muscle, sleep, and labs matter as much as the scale. A clinician owns the plan.",
  },
];

function ProtocolsPage() {
  const peptides = kb.peptides.filter((p) => METABOLIC_PEPTIDES.includes(p.id));
  const stacks = kb.stacks.filter((s) => METABOLIC_STACKS.includes(s.id));

  const [browseTab, setBrowseTab] = useState<(typeof BROWSE_TABS)[number]>("peptides");
  const [openId, setOpenId] = useState<string | null>(kb.peptides[0]?.id ?? null);
  const openPeptide = kb.peptides.find((p) => p.id === openId);
  const openStack = kb.stacks.find((s) => s.id === openId);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/bpx-wordmark.jpg" alt="BPX" className="h-8 w-auto" />
            <span className="font-display text-sm font-semibold">Protocols</span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link to="/terms">Terms</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3 py-1.5">
            <BookOpen className="size-3.5 text-primary" />
            <span className="text-xs font-semibold text-primary">Education center</span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">
            Metabolic protocols, the way the books frame them.
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            ISSCA's metabolic chapter is about labeled GLP-1 medicines, semaglutide, tirzepatide,
            liraglutide, used under a prescriber and according to the label, not a research "fat
            peptide" from a chat. Protein and lifting are mandatory so you do not melt muscle. Mr. Pep
            shows what the compounds are and how they are sequenced. It does not hand you a personal
            dose to inject. A clinician decides that.
          </p>
        </div>

        <div className="space-y-6">
          {peptides.map((p) => (
            <div key={p.id} className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
              <PeptideView card={p} />
            </div>
          ))}
          {stacks.map((s) => (
            <div key={s.id} className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
              <StackView card={s} />
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">What the first weeks tend to look like</h2>
          <p className="mt-1 text-sm text-muted">
            A general, educational pattern, not a schedule to self-administer. Your prescriber sets
            dose, timing, and monitoring.
          </p>
          <div className="mt-6 space-y-4">
            {timeline.map((item, i) => (
              <div key={item.period} className="flex items-start gap-4">
                <div className="relative flex flex-col items-center">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/8 text-lg">
                    {item.emoji}
                  </div>
                  {i < timeline.length - 1 && <div className="mt-2 h-8 w-px bg-border" />}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-sm font-bold">{item.period}</h3>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold">Browse every compound</h2>
          <p className="mt-1 text-sm text-muted">
            The full library, not just the metabolic set. Pick a compound to open its ranges, cycling,
            and cautions. This is reference reading, not a shopping list or a prescription.
          </p>

          <div className="mt-4 grid gap-4 lg:grid-cols-[340px_1fr]">
            <aside>
              <div className="mb-3 flex flex-wrap gap-1">
                {BROWSE_TABS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setBrowseTab(t);
                      if (t === "peptides") setOpenId(kb.peptides[0]?.id ?? null);
                      if (t === "stacks") setOpenId(kb.stacks[0]?.id ?? null);
                    }}
                    className={cn(
                      "min-h-9 rounded-full px-3 py-2 text-xs font-semibold",
                      browseTab === t
                        ? "bg-navy text-navy-foreground"
                        : "bg-card text-muted shadow-[var(--shadow-border)]",
                    )}
                  >
                    {t === "peptides" ? "compounds" : "stacks"}
                  </button>
                ))}
              </div>
              <div className="flex max-h-[70vh] flex-col gap-2 overflow-y-auto">
                {browseTab === "peptides"
                  ? kb.peptides.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setOpenId(p.id)}
                        className={cn(
                          "rounded-lg bg-card p-3 text-left shadow-[var(--shadow-border)]",
                          openId === p.id ? "ring-2 ring-ring" : "",
                        )}
                      >
                        <span className="flex items-start justify-between gap-2">
                          <span className="font-display text-sm font-semibold leading-snug">{p.name}</span>
                          <Badge>{p.desk ?? "core"}</Badge>
                        </span>
                        <span className="mt-1 block text-sm leading-snug text-muted">
                          {peptideSkim(p.id, p.good_for[0])}
                        </span>
                      </button>
                    ))
                  : null}
                {browseTab === "stacks"
                  ? kb.stacks.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setOpenId(s.id)}
                        className={cn(
                          "rounded-lg bg-card p-3 text-left shadow-[var(--shadow-border)]",
                          openId === s.id ? "ring-2 ring-ring" : "",
                        )}
                      >
                        <span className="flex items-start justify-between gap-2">
                          <span className="font-display text-sm font-semibold leading-snug">{s.name}</span>
                          <Badge>{s.category}</Badge>
                        </span>
                        <span className="mt-1 block text-sm leading-snug text-muted">{s.use_when}</span>
                      </button>
                    ))
                  : null}
              </div>
            </aside>
            <section className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
              {browseTab === "peptides" && openPeptide ? <PeptideView card={openPeptide} /> : null}
              {browseTab === "stacks" && openStack ? <StackView card={openStack} /> : null}
            </section>
          </div>
        </div>

        <p className="rounded-xl border border-border bg-card p-4 text-xs leading-relaxed text-muted">
          Educational only, not a prescription and not personal medical advice. Approved GLP-1
          medicines must be used only under a licensed prescriber, according to the product label.
          Research or compounded peptides are not approved drugs. A clinician decides what you actually
          use.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
