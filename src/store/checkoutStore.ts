import { create } from "zustand";

interface CheckoutStore {
  carbonAmount: number;
  money: number;
  setCarbonAmount: (carbonAmount: number) => void;
  setMoney: (money: number) => void;
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  carbonAmount: 0,
  money: 0,
  setCarbonAmount: (carbonAmount) => set({ carbonAmount }),
  setMoney: (money) => set({ money }),
}));
