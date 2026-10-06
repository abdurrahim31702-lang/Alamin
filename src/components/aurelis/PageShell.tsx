import type { ReactNode } from "react";
import { BookingDialog } from "./BookingDialog";
import { Cursor, Grain, ScrollProgress } from "./Chrome";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh bg-ink text-ivory">
      <Grain />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      {children}
      <Footer />
      <BookingDialog />
    </div>
  );
}
