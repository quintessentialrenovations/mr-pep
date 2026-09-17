import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calendar, FlaskConical, Library, LoaderCircle, Scale, Send, ShieldAlert } from "lucide-react";
import { kb } from "@/data/kb";
import { CONSULT_URL } from "@/data/consult";
import { askFromFeatured } from "@/data/goals";
import { askDrPep } from "@/lib/ask-dr-pep";
import { composeClarify, retrieveAsk, shouldClarify } from "@/lib/retrieve";
import { hydrateAdult, useDesk } from "@/lib/desk-store";
import { AgeGate } from "@/components/age-gate";
import { FeelPicker, HeardPills } from "@/components/feel";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MarkdownLite } from "@/components/markdown-lite";
import { CopyNote, RetrievedViews } from "@/components/library-cards";

const copy = {
  en: {
    kicker: "For you · educational, not a checkout",
    titleA: "Let us know how you feel.",
    titleB: "What questions do you have around health, longevity, peptides, mitochondrial support?",
    lede: "Tap how you feel below, or type it in your words. We'll ask a couple of questions, then sequence what the books discuss, including mitochondrial support. A clinician decides what you actually use.",
    status: "ISSCA-grounded",
    banner:
      "Educational only — not a prescription. Not affiliated with ISSCA or any clinic. No liability. Approved GLP-1s follow the label. Research peptides are not approved drugs. A clinician decides.",
    ask: "Conversation",
    ph: "I'm tired, my joints hurt, I want more energy…",
    send: "Ask",
    consult: "Schedule a consult",
    library: "Matching cards",
    browse: "Full library",
  },
  es: {
    kicker: "Para ti · educativo, no es el checkout",
    titleA: "Cuentanos como te sientes.",
    titleB: "Que preguntas tienes sobre salud, longevidad, peptidos, apoyo mitocondrial?",
    lede: "Toca como te sientes, o escribelo. Primero unas preguntas, luego la secuencia de los libros, incluido el apoyo mitocondrial. Un clinico decide que usas.",
    status: "Basado en ISSCA",
    banner:
      "Solo educativo. No estamos afiliados a ISSCA ni a ninguna clinica. Sin responsabilidad. Los GLP-1 aprobados siguen la ficha tecnica. Un clinico decide.",
    ask: "Conversacion",
    ph: "Estoy cansado, me duelen las articulaciones, quiero mas energia…",
    send: "Preguntar",
    consult: "Agendar consulta",
    library: "Fichas que coinciden",
    browse: "Biblioteca",
  },
};

export function Desk() {
  const adult = useDesk((s) => s.adult);
  const setAdult = useDesk((s) => s.setAdult);
  const lang = useDesk((s) => s.lang);
  const setLang = useDesk((s) => s.setLang);
  const messages = useDesk((s) => s.messages);
  const add = useDesk((s) => s.add);
  const clear = useDesk((s) => s.clear);
  const pinned = useDesk((s) => s.pinned);
  const setPinned = useDesk((s) => s.setPinned);
  const busy = useDesk((s) => s.busy);
  const setBusy = useDesk((s) => s.setBusy);
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [mobileLib, setMobileLib] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const t = copy[lang];

  useEffect(() => {
    hydrateAdult();
  }, []);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  function toggleFeel(id: string) {
    setSelected((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  }

  async function submit(text: string) {
    const question = text.trim();
    if (!question || busy) return;
    setQ("");
    setSelected([]);
    add({ id: crypto.randomUUID(), role: "user", text: question });
    const prior = useDesk
      .getState()
      .messages.filter((m) => m.role === "user")
      .map((m) => m.text);
    const r = retrieveAsk(question, prior);
    const askedBefore = useDesk.getState().messages.some((m) => m.role === "assistant");
    const clarifying = shouldClarify(r.goals, askedBefore ? 1 : 0);
    setPinned(clarifying ? [] : r.items);
    setBusy(true);
    try {
      const history = useDesk
        .getState()
        .messages.filter((m) => m.role === "user" || m.role === "assistant")
        .slice(-6)
        .map((m) => ({ role: m.role, content: m.text }));
      const res = await askDrPep({ data: { question, history } });
      add({
        id: crypto.randomUUID(),
        role: "assistant",
        text: res.text,
        usedModel: res.usedModel,
        hardStop: res.hardStop,
      });
      if (!res.clarify && r.items.length) setPinned(r.items);
    } catch {
      add({
        id: crypto.randomUUID(),
        role: "assistant",
        text: clarifying ? composeClarify(r.goals) : r.map || r.context || kb.meta.legal.short,
        usedModel: false,
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!adult ? <AgeGate onAdult={setAdult} /> : null}

      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="/bpx-wordmark.jpg" alt="BPX" className="h-8 w-auto" />
            <span className="hidden border-l border-border pl-2 text-xs font-semibold uppercase tracking-wide text-muted sm:block">
              Mr. Pep
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            <Link to="/library" className="hidden sm:block">
              <Button variant="ghost" size="sm">
                <Library className="size-4" />
                Library
              </Button>
            </Link>
            <Link to="/mito" className="hidden sm:block">
              <Button variant="ghost" size="sm">
                <FlaskConical className="size-4" />
                Mitochondria
              </Button>
            </Link>
            <Link to="/terms" className="hidden sm:block">
              <Button variant="ghost" size="sm">
                <Scale className="size-4" />
                Terms
              </Button>
            </Link>
            <div className="flex overflow-hidden rounded-full bg-card shadow-[var(--shadow-border)]">
              <button
                type="button"
                className={`min-h-9 px-3 py-2 text-xs font-bold ${lang === "en" ? "bg-navy text-navy-foreground" : "text-muted"}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`min-h-9 px-3 py-2 text-xs font-bold ${lang === "es" ? "bg-navy text-navy-foreground" : "text-muted"}`}
                onClick={() => setLang("es")}
              >
                ES
              </button>
            </div>
            <Button size="sm" asChild>
              <a
                href={CONSULT_URL || "#consult"}
                target={CONSULT_URL ? "_blank" : undefined}
                rel={CONSULT_URL ? "noreferrer" : undefined}
              >
                <Calendar className="size-4" />
                {t.consult}
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 pb-24 sm:pb-10">
        <section className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{t.kicker}</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.titleA}
          </h1>
          <p className="mx-auto mt-2 max-w-2xl font-display text-lg font-semibold leading-snug text-primary sm:text-xl">
            {t.titleB}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted">{t.lede}</p>
          <aside className="mx-auto mt-5 flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-card p-4 text-left shadow-[var(--shadow-border)]">
            <img src="/bpx-mark.jpg" alt="" className="size-12 rounded-lg object-cover" />
            <div>
              <p className="font-display text-base font-semibold">Mr. Pep</p>
              <p className="text-xs text-muted">
                <span className="mr-1 inline-block size-2 rounded-full bg-ok" />
                {t.status}
              </p>
            </div>
          </aside>
        </section>

        <div className="mb-4 rounded-lg bg-warn-bg px-4 py-3 text-center text-sm text-warn">{t.banner}</div>

        <div className={pinned.length ? "grid gap-4 lg:grid-cols-[1.15fr_0.85fr]" : "mx-auto max-w-3xl"}>
          <section className="flex min-h-[560px] flex-col rounded-xl bg-card shadow-[var(--shadow-border)]">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">{t.ask}</p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  clear();
                  setSelected([]);
                }}
              >
                Clear
              </Button>
            </div>
            <div ref={logRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.length === 0 ? (
                <FeelPicker
                  lang={lang}
                  selected={selected}
                  onToggle={toggleFeel}
                  onAsk={(question) => void submit(question)}
                  disabled={busy}
                />
              ) : null}
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[92%] rounded-lg px-3 py-3 text-sm ${
                    m.role === "user" ? "ml-auto bg-accent" : "bg-background shadow-[var(--shadow-border)]"
                  }`}
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    {m.role === "user" ? "You" : "Mr. Pep"}
                  </p>
                  {m.hardStop ? (
                    <p className="mb-2 flex items-center gap-1 text-destructive">
                      <ShieldAlert className="size-4" /> Safety stop
                    </p>
                  ) : null}
                  {m.role === "assistant" ? <MarkdownLite text={m.text} /> : <p>{m.text}</p>}
                  {m.role === "assistant" ? (
                    <div className="mt-3">
                      <CopyNote text={m.text} />
                    </div>
                  ) : null}
                </div>
              ))}
              {busy ? (
                <p className="flex items-center gap-2 text-sm text-muted">
                  <LoaderCircle className="size-4 animate-spin text-primary" /> Looking that up…
                </p>
              ) : null}
            </div>
            <HeardPills text={q.trim() ? q : askFromFeatured(selected)} lang={lang} />
            <form
              className="flex gap-2 border-t border-border p-3"
              onSubmit={(e) => {
                e.preventDefault();
                void submit(q);
              }}
            >
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.ph}
                className="h-11 min-h-11 flex-1 rounded-md bg-background px-3 text-sm shadow-[var(--shadow-border)] outline-none ring-ring focus:ring-2"
              />
              <Button type="submit" disabled={busy}>
                <Send className="size-4" />
                {t.send}
              </Button>
            </form>
          </section>

          {pinned.length ? (
          <aside className="hidden rounded-xl bg-card p-4 shadow-[var(--shadow-border)] lg:block">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">{t.library}</p>
              <Link to="/library" className="text-xs font-semibold text-primary">
                {t.browse}
              </Link>
            </div>
            <div className="max-h-[640px] overflow-y-auto pr-1">
              <RetrievedViews items={pinned} />
            </div>
          </aside>
          ) : null}
        </div>
      </main>

      <button
        type="button"
        className="fixed bottom-4 right-4 z-30 flex h-12 items-center gap-2 rounded-full bg-navy px-4 text-sm font-semibold text-navy-foreground shadow-[var(--shadow-border)] lg:hidden"
        onClick={() => setMobileLib(true)}
      >
        <Library className="size-4" /> Cards
        {pinned.length ? <Badge className="bg-primary text-primary-foreground">{pinned.length}</Badge> : null}
      </button>

      {mobileLib ? (
        <div className="fixed inset-0 z-40 bg-navy/50 lg:hidden" onClick={() => setMobileLib(false)}>
          <div
            className="absolute inset-x-0 bottom-0 max-h-[80vh] overflow-y-auto rounded-t-xl bg-card p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="font-display font-semibold">Matching cards</p>
              <Button variant="ghost" size="sm" onClick={() => setMobileLib(false)}>
                Close
              </Button>
            </div>
            <RetrievedViews items={pinned} />
          </div>
        </div>
      ) : null}
      <SiteFooter />
    </div>
  );
}
