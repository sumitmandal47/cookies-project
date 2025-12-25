
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Trash2, ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "@/app/assets/images/cookie1.png";
import image2 from "@/app/assets/images/cookie2.png";

export default function MyBag({ open, onClose }) {
  const router = useRouter();

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Ultimate Chocolate Chip Pack",
      pack: "4-Pack",
      price: 2.76,
      image: image1,
      qty: 1,
    },
  ]);

  const suggestions = [
    {
      id: 2,
      name: "Matcha Dream",
      pack: "8-Pack",
      price: 2.76,
      image: image2,
    },
  ];

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const addSuggestion = (item) => {
    setCart((prev) => [...prev, { ...item, qty: 1 }]);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="bg-[#fff8f0] w-[400px] flex flex-col p-0"
      >
        <SheetHeader className="flex flex-row justify-between items-center border-[#ff4b22] border-b p-4">
          <SheetTitle className="text-3xl font-serif text-[#ff4b22]">
            My Bag ({cart.length})
          </SheetTitle>

          {/* <button onClick={onClose}>
            <X className="text-[#ff4b22]" />
          </button> */}
        </SheetHeader>

        {/* CART */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {cart.map((item) => (
            <Card
              key={item.id}
              className="flex gap-4 p-4 bg-[#fff8f0] border-[#ff4b22] rounded-xl"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md border"
              />

              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-[#ff4b22]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#ff4b22]">{item.pack}</p>
                  </div>

                  <p className="font-bold text-[#ff4b22]">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 text-lg font-bold text-[#ff4b22]"
                  >
                    −
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
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

          {/* SUGGESTIONS */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-serif text-[#ff4b22]">
                You might also like
              </h3>

              <div className="flex gap-2 text-[#ff4b22] ">
                <Button variant="outline" size="icon">
                  <ChevronLeft />
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border-[#ff4b22] rounded-xl bg-[#fff8f0]">
              <Image
                src={suggestions[0].image}
                alt={suggestions[0].name}
                width={60}
                height={80}
              />

              <div className="flex-1">
                <h3 className="text-[#ff4b22]">{suggestions[0].name}</h3>
                <p className="text-sm text-[#ff4b22]">
                  {suggestions[0].pack} / €{suggestions[0].price.toFixed(2)}
                </p>
              </div>

              <Button
                className="text-[#ff4b22]"
                variant="outline"
                onClick={() => addSuggestion(suggestions[0])}
              >
                Add +
              </Button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <SheetFooter className="border-t border-[#ff4b22] p-4">
          <div className="flex justify-between mb-2">
            <span className="text-[#ff4b22]">Subtotal</span>
            <span className="font-semibold text-[#ff4b22]">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <Button
            onClick={() => {
              onClose();
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
