

"use client";

import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Trash2 } from "lucide-react";

import { useCartStore } from "../store/useCartStore";

export default function MyBag() {
  const router = useRouter();

  const cart = useCartStore((s) => s.cart);
  const isBagOpen = useCartStore((s) => s.isBagOpen);
  const closeBag = useCartStore((s) => s.closeBag);
  const updateQty = useCartStore((s) => s.updateQty);
  const removeItem = useCartStore((s) => s.removeItem);

  const items = cart?.items || [];

  const subtotalCents = items.reduce(
    (sum, item) => sum + item.unit_price * item.quantity,
    0
  );

  const subtotal = subtotalCents / 100;

  return (
    <Sheet open={isBagOpen} onOpenChange={closeBag}>
      <SheetContent
        side="right"
        className="bg-[#fff8f0] w-[400px] flex flex-col p-0"
      >
        <SheetHeader className="flex flex-row justify-between items-center border-b border-[#ff4b22] p-4">
          <SheetTitle className="text-3xl font-serif text-[#ff4b22]">
            My Bag ({items.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {items.length === 0 && (
            <p className="text-center text-[#ff4b22]">Your bag is empty 🍪</p>
          )}

          {items.map((item) => (
            <Card
              key={item.id}
              className="flex gap-4 p-4 bg-[#fff8f0] border-[#ff4b22] rounded-xl"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-md border"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-[#ff4b22]">
                      {item.title}
                    </h3>
                    {/* <p className="text-sm text-[#ff4b22]">
                      {item.variant.title}
                    </p> */}
                  </div>

                  <p className="font-bold text-[#ff4b22]">
                    {item.unit_price}
                  </p>
                </div>

              
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() =>
                      item.quantity > 1 && updateQty(item.id, item.quantity - 1)
                    }
                    className="px-3 text-lg font-bold text-[#ff4b22]"
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQty(item.id, item.quantity + 1)}
                    className="px-3 text-lg font-bold text-[#ff4b22]"
                  >
                    +
                  </button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="w-5 h-5 text-[#ff4b22]" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

       
        <SheetFooter className="border-t border-[#ff4b22] p-4">
          <div className="flex justify-between mb-3">
            <span className="text-[#ff4b22]">Subtotal</span>
            <span className="font-semibold text-[#ff4b22]">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <Button
            onClick={() => {
              closeBag();
              router.push("/checkout");
            }}
            className="w-full py-6 rounded-full bg-[#ff4b22] text-white hover:bg-white hover:text-[#ff4b22] border border-[#ff4b22]"
          >
            Go to checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

