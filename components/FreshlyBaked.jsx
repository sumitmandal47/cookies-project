"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Cookies } from "@/data/cookiesData";

export default function FreshlyBaked() {
  const [api, setApi] = useState(null);
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/cookies/${id}`);
  };

  const next = () => api?.scrollNext();
  const prev = () => api?.scrollPrev();

  return (
    <Carousel setApi={setApi} className="w-full p-6 md:p-10 mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl md:text-6xl font-serif text-[#ff4b22]">
            Freshly baked
          </h2>

          <div className="flex gap-5">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[#ff4b22] rounded-full flex items-center justify-center text-[#ff4b22] hover:bg-[#ff4b22] hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 border border-[#ff4b22] rounded-full flex items-center justify-center text-[#ff4b22] hover:bg-[#ff4b22] hover:text-white transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <CarouselContent>
          {Cookies.map((cookie) => (
            <CarouselItem
              key={cookie.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 cursor-pointer"
              onClick={() => handleClick(cookie.id)}
            >
              <div className="relative">
              
                <span className="absolute top-4 right-4 bg-pink-100 text-[#ff4b22] font-extrabold px-3 py-1 rounded">
                  {cookie.name}
                </span>

                
                <Image
                  src={cookie.images[0]}
                  alt={cookie.title}
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover"
                />

                {/* Content */}
                <CardContent className="flex flex-col items-center justify-center text-center text-[#ff4b22]">
                  <p className="text-lg">{cookie.title}</p>
                  <p className="font-bold">${cookie.price.toFixed(2)}</p>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
}
