import { useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function BeforeAfter({ src, alt, className }: Props) {
  const [value, setValue] = useState(62);

  return (
    <div className={cn("ba-wrap relative overflow-hidden bg-charcoal", className)}>
      <img
        src={src}
        alt=""
        draggable={false}
        loading="lazy"
        decoding="async"
        className="aspect-3/4 w-full object-cover opacity-90 saturate-50 contrast-75 brightness-75 sepia"
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-ivory"
        style={{ left: `${value}%` }}
        aria-hidden="true"
      >
        {/* grab handle so the divider reads as draggable */}
        <span className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/70 bg-ink/50 backdrop-blur-sm">
          <span className="h-3 w-px bg-ivory/80" />
          <span className="ml-1 h-3 w-px bg-ivory/80" />
        </span>
      </div>
      <label className="absolute inset-0 cursor-ew-resize">
        <span className="sr-only">Reveal refined result: drag or use arrow keys</span>
        <input
          type="range"
          min={4}
          max={96}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-valuetext={`${value}% refined`}
          // pan-y: let vertical swipes scroll the page, only horizontal drags move the divider
          style={{ touchAction: "pan-y" }}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </label>
      <div className="pointer-events-none absolute inset-x-4 top-4 flex justify-between">
        <span className="micro bg-ink/50 px-2 py-1 text-mist">Study</span>
        <span className="micro bg-ink/50 px-2 py-1 text-champagne">Refined</span>
      </div>
    </div>
  );
}
