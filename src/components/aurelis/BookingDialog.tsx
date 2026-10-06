import { useEffect, useId, useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { TREATMENTS } from "@/lib/content";
import { useBooking } from "@/lib/booking-store";
import { Button } from "./Button";

const STORAGE_KEY = "aurelis-demo-inquiries";

export function BookingDialog() {
  const { open, treatment, close, openWith } = useBooking();
  const formId = useId();
  const [sent, setSent] = useState(false);
  const [choice, setChoice] = useState(treatment ?? "");

  useEffect(() => {
    if (open) {
      setSent(false);
      setChoice(treatment ?? "");
    }
  }, [open, treatment]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const record = {
      at: new Date().toISOString(),
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      treatment: String(data.get("treatment") ?? ""),
      note: String(data.get("note") ?? ""),
      demo: true,
    };
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as unknown[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev].slice(0, 20)));
    } catch {
      /* demo storage is best-effort */
    }
    setSent(true);
  }

  return (
    <Dialog.Root open={open} onOpenChange={(v) => (v ? openWith(choice) : close())}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-overlay bg-ink/80 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed inset-0 z-overlay overflow-y-auto bg-ink text-ivory md:inset-4 md:border md:border-line"
          aria-describedby={`${formId}-desc`}
        >
          <div className="shell relative flex min-h-full flex-col py-10 md:py-16">
            <div className="mb-12 flex items-start justify-between gap-6">
              <p className="micro text-champagne">Private consultation · Demo enquiry</p>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="flex size-11 items-center justify-center border border-line text-ivory transition-colors hover:border-champagne"
                  aria-label="Close consultation form"
                >
                  <X className="size-4" strokeWidth={1.4} />
                </button>
              </Dialog.Close>
            </div>

            <Dialog.Title className="font-serif text-headline text-ivory">
              Request a private
              <br />
              consultation.
            </Dialog.Title>
            <Dialog.Description
              id={`${formId}-desc`}
              className="mt-6 max-w-xl text-body font-light text-mist"
            >
              This form stores a local demo enquiry on your device. Aurelis Dental is a fictional
              studio — no message is sent to a clinic, and nothing here is medical advice.
            </Dialog.Description>

            {sent ? (
              <div className="mt-16 max-w-lg" role="status" aria-live="polite">
                <p className="micro text-champagne">Enquiry recorded locally</p>
                <p className="mt-6 font-serif text-title text-ivory">Thank you.</p>
                <p className="mt-4 text-body font-light text-mist">
                  In a real studio this would reach a concierge. Here, it remains a demonstration of
                  the booking ritual.
                </p>
                <Button className="mt-10" onClick={close}>
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-16">
                <label className="block">
                  <span className="micro text-mist">Full name</span>
                  <input className="field mt-2" name="name" required autoComplete="name" />
                </label>
                <label className="block">
                  <span className="micro text-mist">Email</span>
                  <input
                    className="field mt-2"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                </label>
                <label className="block">
                  <span className="micro text-mist">Phone</span>
                  <input
                    className="field mt-2"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91"
                  />
                </label>
                <label className="block">
                  <span className="micro text-mist">Interest</span>
                  <select
                    className="field mt-2"
                    name="treatment"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                  >
                    <option value="">A general conversation</option>
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block md:col-span-2">
                  <span className="micro text-mist">Note — optional</span>
                  <textarea className="field mt-2 min-h-24 resize-y" name="note" rows={3} />
                </label>
                <label className="flex items-start gap-3 md:col-span-2">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 size-4 shrink-0 accent-champagne"
                  />
                  <span className="text-sm font-light leading-relaxed text-mist">
                    I understand this is a demonstration website and not a real clinic, and that no
                    clinical relationship is created by submitting this form.
                  </span>
                </label>
                <div className="md:col-span-2">
                  <Button type="submit" magnetic arrow>
                    Submit demo enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
