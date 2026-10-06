import { useEffect, useRef } from "react";
import { SITE } from "@/lib/content";
import { useBooking } from "@/lib/booking-store";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { scrollToId } from "@/lib/scroll";
import { Button } from "./Button";

function goGallery() {
  scrollToId("gallery");
}

export function Hero() {
  const { openWith } = useBooking();
  const reduced = usePrefersReducedMotion();
  const wrap = useRef<HTMLElement>(null);
  const visual = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const root = wrap.current;
    const card = visual.current;
    if (!root || !card) return;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf = 0;

    const tick = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      const { x, y } = current;
      card.style.transform = `perspective(1600px) rotateY(${x * 8}deg) rotateX(${-y * 5}deg) translate3d(${x * 10}px, ${y * 8}px, 0)`;
      const settled = Math.abs(target.x - x) < 0.001 && Math.abs(target.y - y) < 0.001;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };
    const wake = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width - 0.5;
      target.y = (e.clientY - r.top) / r.height - 0.5;
      wake();
    };
    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      wake();
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section
      ref={wrap}
      className="relative flex min-h-dvh flex-col overflow-hidden bg-ink text-ivory"
      aria-label="Hero"
    >
      <img
        src="/images/hero-studio.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/55 to-ink" />

      <div className="shell relative grid flex-1 items-end gap-8 pb-8 pt-28 lg:grid-cols-12 lg:items-center lg:pb-16 lg:pt-24">
        <div className="lg:col-span-6">
          <p className="micro text-champagne">Cosmetic dentistry / India</p>
          <h1 className="mt-6 font-serif text-display text-ivory">
            The art
            <br />
            of your smile.
          </h1>
          <p className="mt-8 max-w-md text-body font-light text-mist">
            Precision cosmetic dentistry where advanced technology meets the art of facial harmony.
          </p>
          <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button magnetic arrow onClick={() => openWith()}>
              Book a private consultation
            </Button>
            <Button variant="line" onClick={goGallery}>
              Explore smile transformations
            </Button>
          </div>
        </div>

        <div className="relative h-[58vw] min-h-72 lg:col-span-6 lg:h-[78vh]">
          <div
            ref={visual}
            className="h-full w-full will-change-transform"
          >
            <img
              src="/images/hero-porcelain.jpg"
              alt="A single porcelain veneer standing in studio light, photographed for this demo"
              className="hero-float h-full w-full object-contain object-center"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <div className="shell relative flex shrink-0 items-end justify-between gap-6 pb-8">
        <p className="micro text-mist/70">Est. 2026 · Private studio · {SITE.location}</p>
        <p className="micro hidden text-mist sm:block">Scroll to explore</p>
        <p className="micro text-champagne">01 / 09</p>
      </div>
    </section>
  );
}
