
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate hook
import image1 from "@/assets/images/cookie1.png";
import image2 from "@/assets/images/cookie1.png";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  pack: string;
  price: number;
  image: string;
  qty: number;
}

export default function MyBag() {
  const navigate = useNavigate(); // ✅ initialize navigation

  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "Ultimate Chocolate Chip Pack",
      pack: "4-Pack",
      price: 2.76,
      image: image1,
      qty: 1,
    },
  ]);

  const [suggestions] = useState([
    {
      id: 2,
      name: "Matcha Dream",
      pack: "8-Pack",
      price: 2.76,
      image: image2,
    },
  ]);

  const increaseQty = (id: number) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  const decreaseQty = (id: number) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );

  const removeItem = (id: number) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  const addSuggestion = (suggestion: any) =>
    setCart((prev) => [...prev, { ...suggestion, qty: 1 }]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleGoToCheckout = () => {
    navigate("/checkout"); // ✅ Go to checkout route
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="border-[#ff4d22] text-white">
          <ShoppingBag className="text-[#ff4d22] w-6 h-6 cursor-pointer" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-[#fff8f0] w-[400px] flex flex-col p-0"
      >
        <SheetHeader className="flex flex-row justify-between items-center border-b p-4">
          <SheetTitle className="text-3xl font-serif text-orange-600">
            My Bag ({cart.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {cart.map((item) => (
            <Card
              key={item.id}
              className="flex items-center justify-between p-4 shadow-none border rounded-xl bg-[#fff8f0]"
            >
              <Image
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md border"
              />

              <div className="flex1 justify-between px-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-orange-600">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.pack}</p>
                  </div>
                  <p className="text-orange-600 font-bold">
                    €{item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-2 border rounded-lg w-fit">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 text-lg font-bold text-orange-600"
                  >
                    −
                  </button>
                  <span className="px-4">{item.qty}</span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 text-lg font-bold text-orange-600"
                  >
                    +
                  </button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="text-orange-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}

          {/* Suggestions */}
          <div>
            <div className="flex justify-between">
              <h3 className="text-2xl font-serif text-[#ff4b22] mb-3">
                You might also like
              </h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-[#ff4b22] hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-[#ff4b22] hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4 p-10 border shadow-none bg-[#fff8f0] rounded">
                <Image
                  src={suggestions[0].image}
                  alt={suggestions[0].name}
                  className="w-16 h-20 object-contain rounded"
                />
                <div className="flex-col">
                  <h3 className="text-orange-600 font-medium">
                    {suggestions[0].name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {suggestions[0].pack} / €{suggestions[0].price.toFixed(2)}
                  </p>
                </div>
                <Button
                  className="bg-[#fff8f0]"
                  variant="outline"
                  onClick={() => addSuggestion(suggestions[0])}
                >
                  Add +
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <SheetFooter className="border-t p-4 flex flex-col gap-3">
          <div className="flex justify-between">
            <p className="text-orange-600 font-medium">Subtotal</p>
            <p className="text-orange-600 font-semibold">
              €{subtotal.toFixed(2)}
            </p>
          </div>
          <p className="text-sm text-gray-600">
            Taxes and shipping calculated at checkout
          </p>
          <Button
            onClick={handleGoToCheckout} 
            className="w-full bg-[#ff4d22] text-white text-lg py-6 rounded-full hover:bg-[#ffff] hover:text-[#ff4d22] border-2 border-[#ff4d22]"
          >
            Go to checkout
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
