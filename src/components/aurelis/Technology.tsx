import { TECH } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-ink text-ivory">
      <img
        src="/images/tech-scan.jpg"
        alt="Champagne wireframe study of a dental arch in a dark studio"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="shell relative py-24 md:py-32">
        <Reveal>
          <p className="micro text-champagne">Infrastructure · 06</p>
          <h2 className="mt-5 max-w-3xl font-serif text-headline">
            Precision, powered by technology.
          </h2>
          <p className="mt-6 max-w-md text-body font-light text-mist">
            Instruments, not gadgets. Digital design, scanning and planning exist so the hand can
            be slower, and the result quieter.
          </p>
        </Reveal>

        <ol className="mt-16 divide-y divide-line border-y border-line">
          {TECH.map((item, i) => (
            <li key={item.num}>
              <Reveal delay={i * 70}>
                <article className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
                  <span className="micro text-gold md:col-span-1">{item.num}</span>
                  <h3 className="font-serif text-title md:col-span-5">{item.name}</h3>
                  <p className="text-sm font-light leading-relaxed text-mist md:col-span-6">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
