import { Bandage, Bone, HeartPulse, Moon, Salad, Scale, ScanFace, Zap } from "lucide-react";
import { FEATURED, askFromFeatured } from "@/data/goals";
import { matchGoals } from "@/lib/retrieve";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ICONS = {
  weight: Scale,
  tired: Moon,
  injury: Bandage,
  joints: Bone,
  glow: ScanFace,
  longevity: HeartPulse,
  gut: Salad,
  mito: Zap,
} as const;

type Lang = "en" | "es";

type Props = {
  lang: Lang;
  selected: string[];
  onToggle: (id: string) => void;
  onAsk: (question: string) => void;
  disabled?: boolean;
};

export function FeelPicker({ lang, selected, onToggle, onAsk, disabled }: Props) {
  const ready = selected.length > 0;
  return (
    <div className="rounded-lg bg-accent p-4 text-center">
      <p className="font-display text-base font-semibold">
        {lang === "es" ? "Empieza por como te sientes" : "Start with how you feel"}
      </p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
        {lang === "es"
          ? "Toca lo que es verdad. Puedes tocar varios."
          : "Tap what is true. You can tap more than one."}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {FEATURED.map((g) => {
          const Icon = ICONS[g.id as keyof typeof ICONS] ?? Scale;
          const on = selected.includes(g.id);
          return (
            <button
              key={g.id}
              type="button"
              disabled={disabled}
              onClick={() => onToggle(g.id)}
              className={cn(
                "flex min-h-14 items-start gap-2 rounded-md px-3 py-3 text-left text-sm shadow-[var(--shadow-border)] transition-colors duration-150",
                on ? "bg-navy text-navy-foreground" : "bg-card text-foreground",
              )}
            >
              <Icon className={cn("mt-0.5 size-4 shrink-0", on ? "text-cyan" : "text-primary")} />
              <span>
                <span className="block font-semibold leading-snug">{g.chip[lang]}</span>
                <span className={cn("mt-0.5 block text-xs leading-snug", on ? "text-cyan" : "text-muted")}>
                  {g.hint[lang]}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-3">
        <Button className="w-full" disabled={!ready || disabled} onClick={() => onAsk(askFromFeatured(selected))}>
          {lang === "es" ? "Continuar" : "Continue"}
        </Button>
      </div>
    </div>
  );
}

export function HeardPills({ text, lang }: { text: string; lang: Lang }) {
  const goals = matchGoals(text);
  if (!goals.length || !text.trim()) return null;
  return (
    <p className="px-4 pb-2 text-xs text-muted">
      <span className="font-semibold uppercase tracking-wide text-primary">
        {lang === "es" ? "Te escucho: " : "Heard: "}
      </span>
      {goals.map((g) => (lang === "es" ? g.chip.es : g.chip.en)).join(" · ")}
    </p>
  );
}
