import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Scale } from "lucide-react";
import { DISCLAIMER_POINTS, LEGAL_EFFECTIVE, TERMS_SECTIONS } from "@/data/legal";
import { kb } from "@/data/kb";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/terms")({ component: TermsPage });

const TABS = ["disclaimers", "terms", "sources"] as const;
type Tab = (typeof TABS)[number];

function TermsPage() {
  const [tab, setTab] = useState<Tab>("disclaimers");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/bpx-wordmark.jpg" alt="BPX" className="h-8 w-auto" />
            <span className="font-display text-sm font-semibold">Terms</span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link to="/">Back to Mr. Pep</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-10">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <Scale className="size-3.5" />
            Legal
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">Terms & Disclaimers</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
            Mr. Pep is an educational compilation of ISSCA publications. Not affiliated with ISSCA or anyone else. No
            medical advice. No liability.
          </p>
          <p className="mt-2 text-xs text-muted">Effective {LEGAL_EFFECTIVE}</p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-1">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "min-h-11 rounded-full px-4 py-2 text-xs font-semibold capitalize",
                tab === t ? "bg-navy text-navy-foreground" : "bg-card text-muted shadow-[var(--shadow-border)]",
              )}
            >
              {t === "disclaimers" ? "Disclaimers" : t === "terms" ? "Terms of use" : "Sources"}
            </button>
          ))}
        </div>

        {tab === "disclaimers" ? (
          <div className="mt-8 space-y-4">
            <div className="rounded-xl bg-danger-bg p-4 text-sm leading-relaxed text-destructive">
              {kb.meta.legal.full}
            </div>
            {DISCLAIMER_POINTS.map((d) => (
              <article key={d.title} className="rounded-xl bg-card p-5 text-left shadow-[var(--shadow-border)]">
                <h2 className="font-display text-lg font-semibold">{d.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
              </article>
            ))}
          </div>
        ) : null}

        {tab === "terms" ? (
          <div className="mt-8 space-y-4">
            {TERMS_SECTIONS.map((s) => (
              <article key={s.title} className="rounded-xl bg-card p-5 text-left shadow-[var(--shadow-border)]">
                <h2 className="font-display text-base font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </article>
            ))}
          </div>
        ) : null}

        {tab === "sources" ? (
          <div className="mt-8 space-y-4">
            <p className="text-center text-sm leading-relaxed text-muted">
              Primary sources are ISSCA textbooks. Magazines are extra context only. Citing them does not mean ISSCA,
              faculty, or any publisher endorses this guide.
            </p>
            {kb.meta.sources.map((s) => (
              <article key={s.id} className="rounded-xl bg-card p-5 text-left shadow-[var(--shadow-border)]">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{s.id}</p>
                <h2 className="mt-1 font-display text-lg font-semibold">{s.name}</h2>
                <p className="mt-1 text-sm text-muted">
                  {s.publisher} · {s.year}
                  {s.id.startsWith("mag") ? " · extra context (books take precedence)" : " · primary"}
                </p>
              </article>
            ))}
          </div>
        ) : null}
      </main>
      <SiteFooter />
    </div>
  );
}
