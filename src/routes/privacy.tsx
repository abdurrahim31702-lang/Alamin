import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/aurelis/PageShell";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [{ title: "Privacy — Aurelis Dental (Demo)" }],
  }),
});

function Privacy() {
  return (
    <PageShell>
      <main id="main" className="shell max-w-2xl pt-32 pb-24 text-ivory">
        <p className="micro text-champagne">Demo website</p>
        <h1 className="mt-4 font-serif text-headline">Privacy</h1>
        <p className="mt-8 text-body font-light text-mist">
          Aurelis Dental is a fictional studio created for a design demonstration. The consultation
          form stores a local record in your browser only. No account is created, no message is
          emailed, and no health information should be entered.
        </p>
        <p className="mt-4 text-body font-light text-mist">
          This page exists so the footer can complete a luxury-site ritual. It is not a legal
          policy of a real practice.
        </p>
        <Link to="/" className="micro mt-12 inline-block text-champagne">
          Return to the studio
        </Link>
      </main>
    </PageShell>
  );
}
