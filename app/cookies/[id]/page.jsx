
"use client"; 

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown,  } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Cookies } from "@/data/cookiesData";
import Image from "next/image";

export default function CookieDetails() {

  const params = useParams();
  const router = useRouter(); 
 
  const id = params?.id;

  const cookie = Cookies.find((c) => c.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(cookie?.images?.[0] || "");

  useEffect(() => {
    if (cookie && cookie.images) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedImage(cookie.images[0]);
      window.scrollTo(0, 0);
    }
  }, [id, cookie]);

  if (!cookie) {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center gap-4 bg-[#fff6e6]">
        <p className="text-3xl font-serif text-[#ff4b22]">
          Cookie not found 
        </p>
        <Button
          onClick={() => router.push("/")} 
          className="bg-[#ff4b22] hover:bg-[#d63a15]"
        >
          Back to Shop
        </Button>
      </div>
    );
  }

  const otherCookies = Cookies.filter((c) => c.id !== cookie.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#fff6e6] py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* --- LEFT COLUMN --- */}
        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-6 sticky top-10 h-fit">
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible py-2 md:py-0">
            {cookie.images?.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt="thumbnail"
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                  selectedImage === img
                    ? "border-[#ff4b22] scale-105"
                    : "border-transparent hover:border-[#ff4b22]/50"
                }`}
              />
            ))}
          </div>

          <div className="flex-1 bg-[#eedcc0] rounded-3xl aspect-square md:aspect-4/3 flex items-center justify-center overflow-hidden shadow-sm relative">
            <div className="absolute top-6 right-6 bg-[#ff4b22]/10 text-[#ff4b22] px-3 py-1 font-bold tracking-widest text-xs rounded uppercase z-10">
              NUTTY COOKIE
            </div>
            {selectedImage && (
              <Image
                src={selectedImage}
                alt={cookie.title}
                className="w-full h-full object-cover "
              />
            )}
          </div>
        </div>

        {/* --- RIGHT COLUMN --- */}
        <div className="lg:col-span-5 flex flex-col text-[#ff4b22]">
          <p className="text-xs md:text-sm font-bold tracking-widest mb-4">
            HOME / COOKIES / {cookie.title.toUpperCase()}
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-4 leading-none">
            {cookie.title}
          </h1>

          <p className="text-3xl font-medium mb-6">
            ${cookie.price.toFixed(2)}
          </p>

          <p className="text-lg leading-relaxed opacity-90 mb-8 font-light">
            {cookie.information}
          </p>

          <div className="relative mb-6 inline-block w-fit">
            <select className="appearance-none border border-[#ff4b22] text-[#ff4b22] rounded-xl pl-6 pr-12 py-3 text-lg bg-transparent cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff4b22]/20">
              <option>4-pack</option>
              <option>6-pack</option>
              <option>8-pack</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
          </div>

          <button className="w-full hover:bg-[#ff4b22] hover:text-[#fff6e6] border border-[#ff4b22] py-4 rounded-full text-2xl font-serif mb-12 bg-white text-[#ff4b22] transition-all duration-300 ">
            Add to cart
          </button>

          <div className="bg-[#ffe4e1] p-6 rounded-2xl mb-10">
            <h2 className="text-2xl font-serif text-[#ff4b22] mb-4">
              Taste our other flavors too
            </h2>

            <div className="flex flex-col gap-3">
              {otherCookies.map((other) => (
                <div
                  key={other.id}
                  className="flex items-center justify-between p-3 cursor-pointer group"
                  onClick={() => router.push(`/cookies/${other.id}`)} 
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={other.images[0]}
                      alt={other.title}
                      className="w-16 h-16 object-cover rounded-lg bg-[#eedcc0]"
                    />
                    <div>
                      <p className="font-bold text-[#ff4b22] leading-tight">
                        {other.title}
                      </p>
                      <p className="text-xs text-[#ff4b22] opacity-80 mt-1">
                        ${other.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="border border-[#ff4b22] rounded-full px-4 py-2 flex items-center justify-center text-[#ff4b22] hover:bg-[#ff4b22] hover:text-white transition bg-white"
                  >
                    Add +
                   
                  </button>
                </div>
              ))}
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="description"
              className="border-b-[#ff4b22]/30"
            >
              <AccordionTrigger className="text-[#ff4b22] text-xl font-serif hover:no-underline hover:opacity-70">
                Description
              </AccordionTrigger>
              <AccordionContent className="text-[#ff4b22]/80 text-base">
                {cookie.information}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="ingredients"
              className="border-b-[#ff4b22]/30"
            >
              <AccordionTrigger className="text-[#ff4b22] text-xl font-serif hover:no-underline hover:opacity-70">
                Ingredients
                
              </AccordionTrigger>
              <AccordionContent className="text-[#ff4b22]/80 text-base">
                {cookie.ingredients ||
                  "Flour, butter, sugar, chocolate chips, eggs, and love."}
                  
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping" className="border-b-[#ff4b22]/30">
              <AccordionTrigger className="text-[#ff4b22] text-xl font-serif hover:no-underline hover:opacity-70">
                Shipping
              </AccordionTrigger>
              <AccordionContent className="text-[#ff4b22]/80 text-base">
                Ships fresh within 2–3 business days in eco-friendly packaging.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}