

"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const countries = [
  { name: "United States", currency: "[$]" },
  { name: "Denmark", currency: "[DKK]" },
  { name: "France", currency: "[€]" },
  { name: "Germany", currency: "[€]" },
  { name: "Spain", currency: "[€]" },
  { name: "Japan", currency: "[¥]" },
  { name: "United Kingdom", currency: "[£]" },
  { name: "Canada", currency: "[CA$]" },
  { name: "Argentina", currency: "[$]" },
  { name: "South Africa", currency: "[$]" },
  { name: "Mexico", currency: "[$]" },
  { name: "Malaysia", currency: "[$]" },
  { name: "Australia", currency: "[$]" },
  { name: "New Zealand", currency: "[$]" },
  { name: "Algeria", currency: "[$]" },
];

export function SelectCountry() {
  const [selected, setSelected] = useState({
    name: "United States",
    currency: "[$]",
  });

  const sortedCountries = [...countries].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Sheet>
      {/* Trigger */}
      <SheetTrigger asChild>
        <button className="text-[#ff4d22] font-semibold cursor-pointer">
          {selected.name} {selected.currency}
        </button>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent className="bg-[#fff6e6] text-[#ff4d22] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-serif mb-4">
            Select your country
          </SheetTitle>
        </SheetHeader>

        <ul className="space-y-2">
          {sortedCountries.map((c) => (
            <li key={c.name}>
              <SheetClose asChild>
                <button
                  onClick={() => setSelected(c)}
                  className={`w-full flex justify-between px-3 py-2 rounded-md transition ${
                    selected.name === c.name
                      ? "bg-pink-200"
                      : "hover:bg-pink-100"
                  }`}
                >
                  <span>{c.name}</span>
                  <span>{c.currency}</span>
                </button>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
