import { CASES } from "@/lib/content";
import { BeforeAfter } from "./BeforeAfter";
import { Reveal } from "./Reveal";

export function CaseStudies() {
  return (
    <section id="gallery" className="relative bg-bone text-ink">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <p className="micro text-gold-deep">Smile transformations · 05</p>
          <h2 className="mt-5 font-serif text-headline">Smiles, refined.</h2>
          <p className="mt-6 max-w-lg text-body font-light text-stone">
            Fictional composites assembled for this demonstration. Drag the divider. These are not
            patient results and do not represent clinical outcomes.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-20">
          {CASES.map((c, i) => (
            <Reveal key={c.num} delay={i * 80}>
              <article>
              <BeforeAfter src={c.image} alt={c.alt} />
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <p className="micro text-gold-deep">
                    Case {c.num} · Demo case study
                  </p>
                  <h3 className="mt-2 font-serif text-title">{c.title}</h3>
                  <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-stone">
                    {c.rationale}
                  </p>
                </div>
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
