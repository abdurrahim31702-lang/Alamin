import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/content";

const LINKS = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#treatments", label: "Treatments" },
  { href: "#gallery", label: "Smile Gallery" },
  { href: "#technology", label: "Technology" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-ivory">
      <div className="shell grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-2xl tracking-[0.18em] uppercase">{SITE.name}</p>
          <p className="mt-3 font-serif text-xl italic text-mist">{SITE.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-5" aria-label="Footer">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="micro text-mist hover:text-ivory">
              {l.label}
            </a>
          ))}
          <Link to="/privacy" className="micro text-mist hover:text-ivory">
            Privacy
          </Link>
          <Link to="/terms" className="micro text-mist hover:text-ivory">
            Terms
          </Link>
        </nav>
        <p className="micro self-end text-gold md:col-span-2 md:text-right">Est. 2026</p>
      </div>
      <div className="shell flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
        <p className="micro text-champagne">{SITE.demoNotice}</p>
        <p className="micro text-mist/70">Fictional studio · no clinical services offered</p>
      </div>
    </footer>
  );
}
