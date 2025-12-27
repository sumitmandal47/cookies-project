import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    text: "These chocolate chips are hands down the best I've ever tried! If you're a fan of chocolate in your baked goods, you need these in your pantry!",
    author: "Jane",
    role: "Home Baker",
  },
  {
    text: "The flavor was spot on—rich and velvety without being overly sweet. They melted beautifully!",
    author: "Olivia",
    role: "Pastry Chef",
  },
  {
    text: "These chocolate chips are a game-changer! Definitely going to be my go-to for all my baking from now on!",
    author: "John",
    role: "Food Blogger",
  },
  {
    text: "Love the quality and taste. Perfect balance of sweetness!",
    author: "Sophia",
    role: "Verified Buyer",
  },
  {
    text: "Absolutely delicious and perfect for cookies!",
    author: "Liam",
    role: "Cookie Enthusiast",
  },
];

export function Testimonials() {
  const [api, setApi] = useState(null);

  const next = () => api?.scrollNext();
  const prev = () => api?.scrollPrev();

  return (
    <div className="w-full py-20 bg-[#fff6e6]">
      <Carousel setApi={setApi} className="w-full px-4 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-[#ff4b22] font-semibold tracking-wider uppercase text-sm">
              Community Love
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#ff4b22]">
              Testimonials
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 border border-[#ff4b22]/30 rounded-full flex items-center justify-center text-[#ff4b22] hover:bg-[#ff4b22] hover:text-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-[#ff4b22]/30 rounded-full flex items-center justify-center text-[#ff4b22] hover:bg-[#ff4b22] hover:text-white transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Cards */}
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, i) => (
            <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <Card className="border border-[#ff4b22]/20 rounded-2xl h-full bg-[#fff6e6] hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex flex-col justify-between h-full p-8">
                    {/* Top: Stars & Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            fill="#ff4b22"
                            className="text-[#ff4b22]"
                          />
                        ))}
                      </div>
                      <Quote className="text-[#ff4b22]/20 w-10 h-10" />
                    </div>

                    {/* Middle: Content */}
                    <p className="text-lg text-[#ff4b22]/80 font-medium leading-relaxed mb-8">
                      {testimonial.text}
                    </p>

                    {/* Bottom: Author */}
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-[#ff4b22]/10 flex items-center justify-center">
                        <User className="text-[#ff4b22] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#ff4b22]">
                          {testimonial.author}
                        </h4>
                        <p className="text-sm text-[#ff4b22]/60">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
