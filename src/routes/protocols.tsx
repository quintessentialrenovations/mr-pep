import { Link, createFileRoute } from "@tanstack/react-router";
import { kb } from "@/data/kb";
import { PeptideView, StackView } from "@/components/library-cards";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/protocols")({ component: ProtocolsPage });

const PEPTIDE_IDS = ["glp1", "tesamorelin-mito", "cjc-ipam"];
const STACK_IDS = ["glp-t2d", "metabolic-v2-1"];

function ProtocolsPage() {
  const peptides = PEPTIDE_IDS.map((id) => kb.peptides.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );
  const stacks = STACK_IDS.map((id) => kb.stacks.find((s) => s.id === id)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s),
  );

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
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Metabolic literacy</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight">Metabolic & GLP-1 protocols.</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            GLP-1 receptor agonists changed the metabolic conversation by acting on appetite, gastric emptying, and glucose
            signaling — but they are approved drugs that follow their label under a clinician, not a lever to pull at home.
            The cards below explain what the books discuss around metabolic support and growth-hormone-axis signaling. If a
            card has no ISSCA dose, Mr. Pep will say so instead of inventing milligrams. Nothing here is a prescription and no
            doses are stated.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { n: "01", t: "Foundations first", d: "Protein, sleep, resistance training and zone-2 carry the metabolic load before any signal." },
            { n: "02", t: "Label-bound signals", d: "Approved GLP-1s follow the label. A clinician sets the plan, titration, and monitoring — not a card." },
            { n: "03", t: "Preserve, don't chase", d: "Protect lean mass while weight moves. If gains vanish on a wash-out, foundations did the work." },
          ].map((s) => (
            <div key={s.n} className="rounded-xl bg-card p-5 text-center shadow-[var(--shadow-border)]">
              <p className="font-display text-2xl text-primary">{s.n}</p>
              <h2 className="mt-2 font-display text-lg font-semibold">{s.t}</h2>
              <p className="mt-2 text-sm text-muted">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-card p-6 shadow-[var(--shadow-border)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">What the first weeks look like</p>
          <h2 className="mt-2 font-display text-xl font-semibold">A qualitative timeline — no doses, no promises.</h2>
          <p className="mt-2 text-sm text-muted">
            Individual response varies widely. This is a general, educational picture of how a clinician-managed metabolic
            plan often unfolds — not a schedule to self-administer.
          </p>
          <div className="mt-5 space-y-4">
            {[
              {
                w: "Week 1–2",
                t: "Settling in",
                d: "Appetite signaling shifts and portions often feel smaller. Some notice mild nausea or fullness. Hydration, protein, and slower meals matter most here.",
              },
              {
                w: "Week 3–4",
                t: "Finding rhythm",
                d: "Eating patterns start to feel more predictable. This is where lean-mass protection — protein and resistance training — earns its keep so weight loss isn't muscle loss.",
              },
              {
                w: "Week 5–8",
                t: "Steady state",
                d: "Habits and appetite tend to stabilize. Clinicians watch tolerance, energy, and body composition, adjusting the plan to the person rather than a template.",
              },
              {
                w: "Beyond",
                t: "Maintenance mindset",
                d: "The durable wins are behavioral. If results depend entirely on a signal, the foundation underneath still needs building. A clinician decides what continues.",
              },
            ].map((row) => (
              <div key={row.w} className="flex flex-col gap-1 border-l-2 border-primary pl-4 sm:flex-row sm:items-baseline sm:gap-4">
                <p className="w-24 shrink-0 font-display text-sm font-semibold text-primary">{row.w}</p>
                <div>
                  <p className="font-display text-sm font-semibold">{row.t}</p>
                  <p className="mt-0.5 text-sm text-muted">{row.d}</p>
                </div>
              </div>
            ))}
          </div>
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
        <div className="rounded-lg bg-warn-bg px-4 py-3 text-center text-sm text-warn">
          Educational only — not a prescription and not medical advice. No specific doses are provided here. Approved GLP-1
          medications follow their label; research peptides are not approved drugs. Not affiliated with ISSCA or any clinic.
          A licensed clinician decides what you actually use.
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
