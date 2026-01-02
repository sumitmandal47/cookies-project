import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  isBagOpen: false,

  cart: [],

  openBag: () => set({ isBagOpen: true }),
  closeBag: () => set({ isBagOpen: false }),

  addToCart: (item) => {
    const cart = get().cart;
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      set({
        cart: cart.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        ),
        isBagOpen: true,
      });
    } else {
      set({
        cart: [...cart, { ...item, qty: 1 }],
        isBagOpen: true,
      });
    }
  },

  increaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((i) =>
        i.id === id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
      ),
    })),

  removeItem: (id) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== id),
    })),
}));
