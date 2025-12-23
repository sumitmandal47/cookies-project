"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { CardContent } from "@/components/ui/card";

import image1 from "../assets/images/cookie1.png";

const collections = [
  "Gift-Worthy Goodies",
  "Unique Indulgences",
  "Seasonal Sensations",
  "Nutty & Nice",
  "Better with Milk",
  "Classic Comforts",
];

const categories = [
  "Chocolate-based",
  "Nutty",
  "Fruit and Spice",
  "Unique Flavors",
  "Indulgent",
  "Health-Conscious",
];

export default function Nutty() {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <div className="bg-[#fff6e6] min-h-screen p-8">
        <h1 className="text-4xl md:text-6xl font-serif text-[#ff4b22] mb-8">
          Shop all products
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          {/* Collections */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-[#ff4b22] text-[#ff4b22]"
              >
                Collections <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-[#fff6e6] border-[#ff4b22]">
              {collections.map((item) => (
                <DropdownMenuCheckboxItem
                  key={item}
                  checked={selected.includes(item)}
                  onCheckedChange={(checked) =>
                    checked
                      ? setSelected((p) => [...p, item])
                      : setSelected((p) => p.filter((i) => i !== item))
                  }
                  className="text-[#ff4b22]"
                >
                  {item}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Categories */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-[#ff4b22] text-[#ff4b22]"
              >
                Categories <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-[#fff6e6] border-[#ff4b22]">
              {categories.map((item) => (
                <DropdownMenuCheckboxItem
                  key={item}
                  checked={selected.includes(item)}
                  onCheckedChange={(checked) =>
                    checked
                      ? setSelected((p) => [...p, item])
                      : setSelected((p) => p.filter((i) => i !== item))
                  }
                  className="text-[#ff4b22]"
                >
                  {item}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {selected.length > 0 && (
            <Button
              variant="ghost"
              onClick={() => setSelected([])}
              className="text-[#ff4b22] underline"
            >
              Clear all
            </Button>
          )}
        </div>

        {/* Product Card */}
        <div className="w-64">
          <div className="relative">
            <Image
              src={image1}
              alt="Gift Set"
              width={300}
              height={300}
              className="rounded-lg"
            />
            <span className="absolute top-2 right-2 bg-pink-100 text-[#ff4b22] px-3 py-1 text-sm rounded-md">
              GIFT SET
            </span>
          </div>

          <CardContent>
            <h2 className="text-lg font-semibold text-[#ff4b22]">
              Deluxe Cookie Set
            </h2>
            <p className="text-sm text-gray-600">from $2.99</p>
          </CardContent>
        </div>
      </div>

     
    </>
  );
}
