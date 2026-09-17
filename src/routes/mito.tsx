import { Link, createFileRoute } from "@tanstack/react-router";
import { kb } from "@/data/kb";
import { PeptideView, StackView } from "@/components/library-cards";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/mito")({ component: MitoPage });

function MitoPage() {
  const peptides = kb.peptides.filter((p) => p.desk === "mito" || p.id === "tesamorelin-mito");
  const stacks = kb.stacks.filter((s) => s.category === "mito" || s.category === "longevity");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/bpx-wordmark.jpg" alt="BPX" className="h-8 w-auto" />
            <span className="font-display text-sm font-semibold">Mitochondria</span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <Link to="/terms">Terms</Link>
          </Button>
        </div>
      </header>
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Longevity multiplier</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">Mitochondria first. Peptides second.</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            ISSCA Volume 2 treats mitochondrial support as a multiplier of repair, immune quieting, and endocrine preservation —
            not as a license to stack unlisted injectables. MOTS-c, SS-31, and humanin are research literacy. If a card has no
            ISSCA dose, Mr. Pep will say so instead of inventing milligrams.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { n: "01", t: "Quiet the noise", d: "Longevity Class I — BPC-157 + KPV. No GH yet." },
            { n: "02", t: "Protect the engine", d: "Sleep, protein, zone-2 and lifting. NAD talk without an IV recipe." },
            { n: "03", t: "Then signal", d: "Class II–V only when foundations hold. Wash out. If gains vanish, you compensated." },
          ].map((s) => (
            <div key={s.n} className="rounded-xl bg-card p-5 text-center shadow-[var(--shadow-border)]">
              <p className="font-display text-2xl text-primary">{s.n}</p>
              <h2 className="mt-2 font-display text-lg font-semibold">{s.t}</h2>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="space-y-8">
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
      </main>
      <SiteFooter />
    </div>
  );
}
