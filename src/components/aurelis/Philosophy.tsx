import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-ivory text-ink">
      <div className="shell grid gap-12 py-24 md:grid-cols-12 md:gap-10 md:py-36">
        <div className="md:col-span-7 md:pt-8">
          <Reveal>
            <p className="micro text-gold-deep">Philosophy · 02</p>
            <h2 className="mt-6 font-serif text-headline">
              Dentistry, elevated
              <br />
              to an art form.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 max-w-md text-body font-light text-stone">
              We treat the smile as architecture for the face — a matter of proportion, light, and
              restraint. Technology is present, but never loud. The result should feel inevitable,
              as if it had always belonged.
            </p>
            <p className="mt-6 max-w-md text-body font-light text-stone">
              Natural-looking ceramic, facial harmony, and a private tempo. Nothing here is rushed
              toward a trend. Precision is the luxury.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-line-dark pt-8">
              <div>
                <dt className="micro text-gold-deep">Focus</dt>
                <dd className="mt-2 font-serif text-xl italic">Harmony</dd>
              </div>
              <div>
                <dt className="micro text-gold-deep">Method</dt>
                <dd className="mt-2 font-serif text-xl italic">Proportion</dd>
              </div>
              <div>
                <dt className="micro text-gold-deep">Finish</dt>
                <dd className="mt-2 font-serif text-xl italic">Restraint</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal className="md:col-span-5 md:col-start-8 md:-mt-8" delay={80}>
          <figure className="relative">
            <div className="overflow-hidden">
              <img
                src="/images/philosophy-interior.jpg"
                alt="Sunlit limestone interior of the fictional Aurelis private studio"
                className="img-clip aspect-3/4 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
                data-in="1"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="mt-4 flex items-start justify-between gap-4">
              <span className="micro text-stone">Mumbai · private studio</span>
              <span className="micro text-gold-deep">Demo interior</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
