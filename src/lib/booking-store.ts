import { create } from "zustand";

export type BookingState = {
  open: boolean;
  treatment: string | null;
  openWith: (treatment?: string) => void;
  close: () => void;
};

export const useBooking = create<BookingState>((set) => ({
  open: false,
  treatment: null,
  openWith: (treatment) => set({ open: true, treatment: treatment ?? null }),
  close: () => set({ open: false }),
}));
