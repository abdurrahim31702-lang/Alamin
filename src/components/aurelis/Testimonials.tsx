import { TESTIMONIALS } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="relative bg-ivory text-ink">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <p className="micro text-gold-deep">Voices · 09</p>
          <h2 className="mt-5 font-serif text-headline">Held, not performed.</h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.attrib} delay={i * 90}>
              <article>
              <p className="micro text-gold-deep">Demo testimonial</p>
              <blockquote className="mt-6 font-serif text-2xl leading-snug italic text-ink md:text-3xl">
                “{t.quote}”
              </blockquote>
              <p className="mt-8 micro text-stone">{t.attrib} · Composite</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
