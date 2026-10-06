import { useEffect, useRef, useState } from "react";
import { EXPERIENCE_STEPS } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Experience() {
  const pin = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = pin.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(0.999, Math.max(0, -rect.top / total));
      setIndex(Math.floor(p * EXPERIENCE_STEPS.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const step = EXPERIENCE_STEPS[index] ?? EXPERIENCE_STEPS[0];

  return (
    <section
      ref={pin}
      id="experience"
      className="relative bg-charcoal text-ivory"
      style={{ height: `${EXPERIENCE_STEPS.length * 85}vh` }}
    >
      <div className="sticky top-0 flex min-h-dvh items-center overflow-hidden">
        <div className="shell grid w-full items-center gap-10 py-24 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="micro text-champagne">The Aurelis experience · 08</p>
            <p className="mt-8 font-serif text-display text-champagne">{step.num}</p>
            <h2 className="mt-2 font-serif text-headline">{step.title}</h2>
            <p className="mt-6 max-w-md text-body font-light text-mist">{step.copy}</p>
            <ol className="mt-10 flex flex-wrap gap-3">
              {EXPERIENCE_STEPS.map((s, i) => (
                <li key={s.num}>
                  <span
                    aria-current={i === index ? "step" : undefined}
                    className={cn(
                      "micro block border px-2 py-1",
                      i === index ? "border-champagne text-ivory" : "border-line text-mist/70",
                    )}
                  >
                    {s.num}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative aspect-4/3 overflow-hidden lg:col-span-7">
            {EXPERIENCE_STEPS.map((s, i) => (
              <img
                key={s.num}
                src={s.image}
                alt={i === index ? s.alt : ""}
                aria-hidden={i === index ? undefined : true}
                loading="lazy"
                decoding="async"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-luxury",
                  i === index ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
