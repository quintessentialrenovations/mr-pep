import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

type Props = { onAdult: () => void };

export function AgeGate({ onAdult }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 px-4">
      <div className="w-full max-w-md rounded-xl bg-card p-6 text-center shadow-[var(--shadow-border)]">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Age verification</p>
        <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">Are you 18 or older?</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          This guide compiles ISSCA publications for education. It is not a prescription, not affiliated with ISSCA, and
          takes no liability. Research peptides are not approved drugs.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <Button className="w-full" onClick={onAdult}>
            Yes, I am 18+ and I agree to the Terms
          </Button>
          <Button variant="outline" className="w-full" type="button">
            No
          </Button>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          By continuing you accept the{" "}
          <Link to="/terms" className="font-semibold text-primary">
            Terms & Disclaimers
          </Link>
          , including no medical advice and no liability.
        </p>
      </div>
    </div>
  );
}