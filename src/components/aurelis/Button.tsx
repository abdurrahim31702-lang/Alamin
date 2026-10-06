import {
  useRef,
  type ButtonHTMLAttributes,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "line" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  magnetic?: boolean;
  arrow?: boolean;
  children: ReactNode;
};

export function Button({
  variant = "solid",
  magnetic = false,
  arrow = false,
  className,
  children,
  onMouseMove,
  onMouseLeave,
  ...rest
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  function handleMove(e: ReactMouseEvent<HTMLButtonElement>) {
    onMouseMove?.(e);
    if (!magnetic || !ref.current) return;
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
  }

  function handleLeave(e: ReactMouseEvent<HTMLButtonElement>) {
    onMouseLeave?.(e);
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <button
      ref={ref}
      type={rest.type ?? "button"}
      className={cn(
        variant === "solid" && "btn-solid",
        variant === "line" && "btn-line",
        variant === "ghost" && "btn-ghost",
        "will-change-transform",
        className,
      )}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      <span className="flex flex-col items-stretch gap-2">
        <span className="flex items-center justify-center gap-2.5">
          <span>{children}</span>
          {arrow ? (
            <ArrowUpRight className="size-3.5 shrink-0" strokeWidth={1.4} aria-hidden="true" />
          ) : null}
        </span>
        {variant === "ghost" ? <span className="ghost-rule" aria-hidden="true" /> : null}
      </span>
    </button>
  );
}
