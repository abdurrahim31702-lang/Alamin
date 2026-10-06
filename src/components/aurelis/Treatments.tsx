import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { TREATMENTS } from "@/lib/content";
import { useBooking } from "@/lib/booking-store";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function Treatments() {
  const { openWith } = useBooking();
  const [active, setActive] = useState(0);
  const current = TREATMENTS[active] ?? TREATMENTS[0];

  return (
    <section id="treatments" className="relative bg-ink text-ivory">
      <div className="shell py-24 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="micro text-champagne">Signature treatments · 03</p>
              <h2 className="mt-5 font-serif text-headline">Six instruments.</h2>
            </div>
            <p className="max-w-sm text-sm font-light leading-relaxed text-mist">
              Each treatment is approached as a luxury object: specified, sequenced, and finished
              with the same editorial care.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-12">
          <ul className="lg:col-span-7">
            {TREATMENTS.map((t, i) => (
              <li key={t.id} className="border-t border-line last:border-b">
                <button
                  type="button"
                  className="group flex w-full items-center gap-5 py-6 text-left md:gap-8 md:py-7"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => openWith(t.name)}
                >
                  <span className="micro w-10 shrink-0 text-gold">{t.num}</span>
                  <span className="flex-1">
                    <span className="block font-serif text-title leading-none transition-transform duration-500 ease-luxury group-hover:translate-x-2">
                      {t.name}
                    </span>
                    <span className="mt-3 hidden max-w-md text-sm font-light leading-relaxed text-mist md:block">
                      {t.copy}
                    </span>
                  </span>
                  <span className="micro hidden text-mist/70 sm:block">{t.kicker}</span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-champagne transition-transform duration-500 ease-luxury group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                </button>
                <p className="pb-5 pl-16 text-sm font-light text-mist md:hidden">{t.copy}</p>
              </li>
            ))}
          </ul>

          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-24">
              <div className="relative aspect-4/5 overflow-hidden bg-charcoal">
                {TREATMENTS.map((t, i) => (
                  <img
                    key={t.id}
                    src={t.image}
                    alt={i === active ? t.alt : ""}
                    aria-hidden={i === active ? undefined : true}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-luxury",
                      i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
                    )}
                  />
                ))}
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/70 to-transparent p-6">
                  <p className="micro text-champagne">{current.num} / 06</p>
                  <p className="mt-2 font-serif text-2xl">{current.name}</p>
                </div>
              </div>
              <p className="micro mt-4 text-mist/70">Hover a treatment · click to enquire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
