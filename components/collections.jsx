
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
import { useEffect, useState } from "react";

function CollectionDropdown() {
  const [collections, setCollections] = useState({
    collections: [],
    isLoading: false,
  });

  useEffect(() => {
    setCollections((prev) => ({ ...prev, isLoading: true }));

    medusa.collections
      .list({ limit: 10 })
      .then(({ collections }) => {
        setCollections({
          collections: collections ?? [],
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error("Failed to fetch collections", error);
        setCollections({ collections: [], isLoading: false });
      });
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-[#ff4b22] text-[#ff4b22]">
          Collections <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        {collections.isLoading && (
          <DropdownMenuItem disabled>Loading...</DropdownMenuItem>
        )}

        {!collections.isLoading && collections.collections.length === 0 && (
          <DropdownMenuItem disabled>No collections found</DropdownMenuItem>
        )}

        {!collections.isLoading &&
          collections.collections.map((collection) => (
            <DropdownMenuItem
              key={collection.id}
              onSelect={(e) => {
                e.preventDefault(); 
               
              }}
            >
              {collection.title}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CollectionDropdown;
