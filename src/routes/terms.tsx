import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/aurelis/PageShell";

export const Route = createFileRoute("/terms")({
  component: Terms,
  head: () => ({
    meta: [{ title: "Terms — Aurelis Dental (Demo)" }],
  }),
});

function Terms() {
  return (
    <PageShell>
      <main id="main" className="shell max-w-2xl pt-32 pb-24 text-ivory">
        <p className="micro text-champagne">Demo website</p>
        <h1 className="mt-4 font-serif text-headline">Terms</h1>
        <p className="mt-8 text-body font-light text-mist">
          Nothing on this website is medical advice, a clinical offer, or a representation of real
          patient outcomes. Names, rooms, portraits and case studies are invented for a brand
          demonstration.
        </p>
        <p className="mt-4 text-body font-light text-mist">
          Do not use this material to make treatment decisions. Consult a licensed clinician for
          any dental care.
        </p>
        <Link to="/" className="micro mt-12 inline-block text-champagne">
          Return to the studio
        </Link>
      </main>
    </PageShell>
  );
}
