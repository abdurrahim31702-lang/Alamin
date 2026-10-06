import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      el.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="progress-bar"
      style={{ transform: "scaleX(0)", width: "100%" }}
      aria-hidden="true"
    />
  );
}

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine || reduced) return;
    setOn(true);
    document.documentElement.classList.add("has-cursor");

    const pos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };
    let started = false;
    let raf = 0;

    const draw = () => {
      if (dot.current) dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
    };

    // Ease the ring toward the pointer, and stop looping once it has caught up.
    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18;
      ringPos.y += (pos.y - ringPos.y) * 0.18;
      draw();
      const settled = Math.abs(pos.x - ringPos.x) < 0.2 && Math.abs(pos.y - ringPos.y) < 0.2;
      raf = settled ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!started) {
        // First movement: place both parts under the pointer, then reveal (no flash at screen centre).
        started = true;
        ringPos.x = pos.x;
        ringPos.y = pos.y;
        draw();
        if (dot.current) dot.current.style.opacity = "1";
        if (ring.current) ring.current.style.opacity = "1";
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      const hover = !!t?.closest("a, button, [role='button'], input, textarea, select, [data-cursor]");
      if (ring.current) ring.current.dataset.hover = hover ? "1" : "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  if (!on) return null;

  return (
    <>
      <div ref={dot} className="cursor-dot" style={{ opacity: 0 }} aria-hidden="true" />
      <div ref={ring} className="cursor-ring" style={{ opacity: 0 }} aria-hidden="true" />
    </>
  );
}
