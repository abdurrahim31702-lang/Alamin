import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/content";
import { useBooking } from "@/lib/booking-store";
import { cn } from "@/lib/cn";
import { scrollToId, scrollToTop } from "@/lib/scroll";
import { Button } from "./Button";

function go(href: string) {
  if (href.startsWith("/")) return;
  scrollToId(href);
}

export function Navbar() {
  const { openWith } = useBooking();
  const [compact, setCompact] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-luxury",
        compact
          ? "border-b border-line bg-ink/78 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div
        className={cn(
          "shell grid grid-cols-[1fr_auto] items-center gap-4 transition-[height] duration-500 ease-luxury lg:grid-cols-[1fr_auto_1fr]",
          compact ? "h-16" : "h-[var(--nav-h)]",
        )}
      >
        <Link
          to="/"
          className="justify-self-start font-serif text-xl tracking-[0.22em] text-ivory uppercase"
          onClick={scrollToTop}
        >
          {SITE.wordmark}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="micro text-mist transition-colors hover:text-ivory"
              onClick={(e) => {
                e.preventDefault();
                go(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Button
            variant="line"
            className="hidden sm:inline-flex"
            magnetic
            onClick={() => openWith()}
          >
            Book consultation
          </Button>
          <Dialog.Root open={menu} onOpenChange={setMenu}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="flex size-11 items-center justify-center border border-line lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-4" strokeWidth={1.4} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-overlay bg-ink/70" />
              <Dialog.Content className="fixed inset-0 z-overlay flex flex-col bg-ink text-ivory">
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <div className="shell flex h-16 items-center justify-between">
                  <p className="font-serif tracking-[0.22em] uppercase">{SITE.wordmark}</p>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="flex size-11 items-center justify-center border border-line"
                      aria-label="Close menu"
                    >
                      <X className="size-4" strokeWidth={1.4} />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="shell flex flex-1 flex-col justify-center gap-2 pb-16">
                  {NAV.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="font-serif text-headline text-ivory"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenu(false);
                        window.setTimeout(() => go(item.href), 80);
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                  <button
                    type="button"
                    className="mt-10 self-start font-serif text-title text-champagne"
                    onClick={() => {
                      setMenu(false);
                      openWith();
                    }}
                  >
                    Book consultation
                  </button>
                  <p className="micro mt-10 text-mist/70">{SITE.demoNotice}</p>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
