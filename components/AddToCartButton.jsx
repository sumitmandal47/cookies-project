
"use client";

import { useCartStore } from "../store/useCartStore";

export default function AddToCartButton({ variantId }) {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <button
      onClick={() => addToCart(variantId, 1)}
      className="w-full hover:bg-[#ff4b22] hover:text-[#fff6e6]
      border border-[#ff4b22] py-4 rounded-full text-2xl font-serif
      bg-[#fff6e6] text-[#ff4b22] transition-all mb-10 "
    >
      Add to cart
    </button>
  );
}
