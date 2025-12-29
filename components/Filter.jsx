"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const categories = [
  { id: "cat_123", name: "Cookies" },
  { id: "cat_456", name: "Gift Boxes" },
];

const collections = [
  { id: "col_123", name: "Festive" },
  { id: "col_456", name: "Nutty" },
];

export default function Filter() {
  const router = useRouter();
  const params = useSearchParams();

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(params);
    newParams.set(key, value);
    router.push(`?${newParams.toString()}`);
  };

  const clearFilters = () => {
    router.push("/products");
  };

  return (
    <div className="flex gap-4">
      {/* Collections */}
     

      {/* Categories */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-[#ff4b22] text-[#ff4b22]">
            Categories <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {categories.map((c) => (
            <DropdownMenuItem
              key={c.id}
              onClick={() => updateFilter("category", c.id)}
            >
              {c.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost" onClick={clearFilters} className="underline">
        Clear
      </Button>
    </div>
  );
}
