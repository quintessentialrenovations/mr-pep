import { Link } from "@tanstack/react-router";
import { LEGAL_SHORT } from "@/data/legal";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl space-y-3 px-4 py-6 text-center">
        <p className="text-xs leading-relaxed text-muted">{LEGAL_SHORT}</p>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold">
          <Link to="/terms" className="text-primary">
            Terms & Disclaimers
          </Link>
          <Link to="/library" className="text-muted">
            Library
          </Link>
          <Link to="/mito" className="text-muted">
            Mitochondria
          </Link>
        </nav>
      </div>
    </footer>
  );
}
