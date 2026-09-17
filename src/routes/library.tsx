import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { kb } from "@/data/kb";
import { GOALS } from "@/data/goals";
import { peptideSkim } from "@/data/skim";
import { GoalView, PeptideView, ProtocolView, SafetyView, StackView } from "@/components/library-cards";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/library")({ component: LibraryPage });

const TABS = ["feel", "peptides", "stacks", "protocols", "safety"] as const;

function LibraryPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("peptides");
  const [openId, setOpenId] = useState<string | null>(kb.peptides[0]?.id ?? null);
  const peptide = kb.peptides.find((p) => p.id === openId);
  const stack = kb.stacks.find((s) => s.id === openId);
  const protocol = kb.protocols.find((p) => p.id === openId);
  const goal = GOALS.find((g) => g.id === openId);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/bpx-wordmark.jpg" alt="BPX" className="h-8 w-auto" />
            <span className="font-display text-sm font-semibold">Library</span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link to="/terms">Terms</Link>
          </Button>
        </div>
      </header>
      <main className="mx-auto grid max-w-6xl gap-4 px-4 py-6 lg:grid-cols-[340px_1fr]">
        <aside>
          <p className="mb-3 text-center text-sm leading-relaxed text-muted">
            Skim what it does in plain language. Open a card for ranges, cycling, and cautions — not a shopping list.
          </p>
          <div className="mb-3 flex flex-wrap justify-center gap-1">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTab(t);
                  if (t === "feel") setOpenId(GOALS[0]?.id ?? null);
                  if (t === "peptides") setOpenId(kb.peptides[0]?.id ?? null);
                  if (t === "stacks") setOpenId(kb.stacks[0]?.id ?? null);
                  if (t === "protocols") setOpenId(kb.protocols[0]?.id ?? null);
                }}
                className={cn(
                  "min-h-9 rounded-full px-3 py-2 text-xs font-semibold",
                  tab === t ? "bg-navy text-navy-foreground" : "bg-card text-muted shadow-[var(--shadow-border)]",
                )}
              >
                {t === "feel" ? "how you feel" : t}
              </button>
            ))}
          </div>
          <div className="flex max-h-[70vh] flex-col gap-2 overflow-y-auto">
            {tab === "feel"
              ? GOALS.filter((g) => g.id !== "puffiness").map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setOpenId(g.id)}
                    className={cn(
                      "rounded-lg bg-card p-3 text-left shadow-[var(--shadow-border)]",
                      openId === g.id ? "ring-2 ring-ring" : "",
                    )}
                  >
                    <span className="block font-display text-sm font-semibold">{g.chip.en}</span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{g.hint.en}</span>
                  </button>
                ))
              : null}
            {tab === "peptides"
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
            {tab === "stacks"
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
            {tab === "protocols"
              ? kb.protocols.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setOpenId(p.id)}
                    className={cn(
                      "rounded-lg bg-card p-3 text-left shadow-[var(--shadow-border)]",
                      openId === p.id ? "ring-2 ring-ring" : "",
                    )}
                  >
                    <span className="block font-display text-sm font-semibold leading-snug">{p.name}</span>
                    <span className="mt-1 block text-sm leading-snug text-muted">{p.timeline}</span>
                  </button>
                ))
              : null}
          </div>
        </aside>
        <section className="rounded-xl bg-card p-5 shadow-[var(--shadow-border)]">
          {tab === "safety" ? <SafetyView /> : null}
          {tab === "feel" && goal ? <GoalView card={goal} /> : null}
          {tab === "peptides" && peptide ? <PeptideView card={peptide} /> : null}
          {tab === "stacks" && stack ? <StackView card={stack} /> : null}
          {tab === "protocols" && protocol ? <ProtocolView card={protocol} /> : null}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
