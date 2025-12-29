"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { medusa } from "../lib/medusa";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
// import { ProductCategoriesResource } from "@medusajs/medusa-js";
import { useEffect, useState } from "react";

function CategoryDropdown() {
  const [categories, setCategories] = useState({
    categories: [],
    isLoading: false,
  });

  useEffect(() => {
    setCategories((prev) => ({ ...prev, isLoading: true }));

    medusa.productCategories
      .list({
        limit: 10,
      })
      .then(({ product_categories }) => {
        setCategories({
          categories: product_categories,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error("Failed to fetch categories", error);
      });
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-[#ff4b22] text-[#ff4b22]">
          Categories <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {categories.categories.map((category) => (
          <DropdownMenuItem
            key={category.id}
            onClick={() => {}}
            onSelect={(e) => {
              e.preventDefault(); 
            }}
          >
            {category.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default CategoryDropdown;
