import { create } from "zustand";
import { medusa } from "../lib/medusa";

export const useCartStore = create((set, get) => ({
  cart: null,
  isBagOpen: false,

  openBag: () => set({ isBagOpen: true }),
  closeBag: () => set({ isBagOpen: false }),

  getOrCreateCart: async () => {
    let cart = get().cart;

    if (!cart) {
      const { cart: newCart } = await medusa.carts.create();
      set({ cart: newCart });
      return newCart;
    }

    return cart;
  },

  addToCart: async (variantId, quantity = 1) => {
    const cart = await get().getOrCreateCart();

    const { cart: updatedCart } = await medusa.carts.lineItems.create(cart.id, {
      variant_id: variantId,
      quantity,
    });

    set({ cart: updatedCart, isBagOpen: true });
  },

  updateQty: async (lineId, quantity) => {
    const cart = get().cart;

    const { cart: updatedCart } = await medusa.carts.lineItems.update(
      cart.id,
      lineId,
      { quantity }
    );

    set({ cart: updatedCart });
  },

  removeItem: async (lineId) => {
    const cart = get().cart;

    const { cart: updatedCart } = await medusa.carts.lineItems.delete(
      cart.id,
      lineId
    );

    set({ cart: updatedCart });
  },
}));
