import { useBooking } from "@/lib/booking-store";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const { openWith } = useBooking();

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-ink text-ivory">
      <img
        src="/images/hero-studio.jpg"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="shell relative flex min-h-[80vh] flex-col items-start justify-end py-24 md:py-32">
        <Reveal>
          <p className="micro text-champagne">By private appointment</p>
          <h2 className="mt-6 max-w-5xl font-serif text-display">
            Ready to redefine
            <br />
            your smile?
          </h2>
          <Button className="mt-12" magnetic arrow onClick={() => openWith()}>
            Book a private consultation
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
