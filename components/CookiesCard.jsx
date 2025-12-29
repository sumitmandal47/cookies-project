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


export default function CookieCard() {
  const [api, setApi] = useState(null);
  const router = useRouter();

  const next = () => api?.scrollNext();
  const prev = () => api?.scrollPrev();

  const handleClick = (id) => {
    router.push(`/cookies/${id}`);
  };


  return (
    <Carousel setApi={setApi} className="w-full p-6 md:p-10 mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-[#ff4b22]">
            This Month&apos;s Star Cookie
          </h2>

          <div className="flex gap-4">
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

        
        <CarouselContent>
          {Cookies.map((cookie) => (
            <CarouselItem
              key={cookie.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 cursor-pointer"
              onClick={() => handleClick(cookie.id)}
            >
              <div className="relative">
                
                <span className="absolute top-4 right-4 bg-pink-100 text-[#ff4b22] font-bold px-3 py-1 rounded">
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
                <CardContent className="flex flex-col items-center text-center text-[#ff4b22]">
                  <p className="text-lg">{cookie.title}</p>
                  <p className="font-bold">${cookie.price.toFixed(2)}</p>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <div
        className="
         
          border
          border-[#ff5522]
          rounded-full
          py-4
          text-center
          cursor-pointer
          transition-all
          duration-300
          hover:bg-[#ff5522]
          group
        "
      >
        <h2
          className="
            text-[#ff5522]
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-serif
            transition-colors
            duration-300
            group-hover:text-white
          "
        >
          Where to buy
        </h2>
      </div>
    </Carousel>
  );
}
