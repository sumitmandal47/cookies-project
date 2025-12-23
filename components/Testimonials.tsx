

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi, 
} from "@/components/ui/carousel";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "These chocolate chips are hands down the best I've ever tried! If you're a fan of chocolate in your baked goods, you need these in your pantry!",
    author: "Jane",
  },
  {
    text: "The flavor was spot on—rich and velvety without being overly sweet. They melted beautifully!",
    author: "Olivia",
  },
  {
    text: "These chocolate chips are a game-changer! Definitely going to be my go-to for all my baking from now on!",
    author: "John",
  },
  {
    text: "Love the quality and taste. Perfect balance of sweetness!",
    author: "Sophia",
  },
  {
    text: "Absolutely delicious and perfect for cookies!",
    author: "Liam",
  },
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi | null>(null); 

  const next = () => api?.scrollNext(); 
  const prev = () => api?.scrollPrev();

  return (
    <Carousel setApi={setApi} className="w-full p-10 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-6xl font-serif text-[#ff4b22]">Testimonials</h2>
          <div className="flex gap-3">
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
          {testimonials.map((testimonial, i) => (
            <CarouselItem
              key={i}
              className="md:basis-1/3 lg:basis-1/3 sm:basis-1/2 basis-full"
            >
              <div className="p-2">
                <Card className="border border-[#ff4b22] rounded-md h-[400px] w-full bg-[#fff6e6]">
                  <CardContent className="flex flex-col items-center justify-center  h-60 text-center text-[#ff4b22]">
                    <p className="text-xl mb-4">{testimonial.text}</p>
                    <span className="font-bold">- {testimonial.author}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
}
