

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

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
  const [selected, setSelected] = useState("United States");

  // Sort alphabetically by country name
  const sortedCountries = [...countries].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Sheet>
      {/* Trigger button */}
      <SheetTrigger asChild>
        <button className="text-[#ff4d22] font-semibold cursor-pointer">
          {selected}
        </button>
      </SheetTrigger>

      {/* Drawer content */}
      <SheetContent className="bg-[#fff6e6] text-[#ff4d22] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-[#ff4d22] text-2xl font-serif mb-4">
            Select your country
          </SheetTitle>
        </SheetHeader>

        <ul className="space-y-2">
          {sortedCountries.map((c) => (
            <li key={c.name}>
              <button
                onClick={() => setSelected(c.name)}
                className={`w-full text-left px-3 py-2 rounded-md transition ${
                  selected === c.name
                    ? "bg-pink-200" // highlight
                    : "hover:bg-pink-100"
                }`}
              >
                {c.name} {c.currency}
              </button>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
