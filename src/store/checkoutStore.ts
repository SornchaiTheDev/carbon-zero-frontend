import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CheckoutStore {
  carbonAmount: number;
  money: number;
  fee: number;
  setCarbonAmount: (carbonAmount: number) => void;
  setMoney: (money: number) => void;
  setFee: (fee: number) => void;
}

export const useCheckoutStore = create<
  CheckoutStore,
  [["zustand/persist", CheckoutStore]]
>(
  persist(
    (set) => ({
      carbonAmount: 0,
      money: 0,
      fee: 0,
      setCarbonAmount: (carbonAmount) => set({ carbonAmount }),
      setMoney: (money) => set({ money }),
      setFee: (fee) => set({ fee }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
