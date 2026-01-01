

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { medusa } from "../lib/medusa";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function FreshlyBaked() {
  const [products, setProducts] = useState([]);
  const [api, setApi] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products`);
  };

  useEffect(() => {
    medusa.products
      .list({ limit: 6 })
      .then(({ products }) => {
        setProducts(products);
      })
      .catch(console.error);
  }, []);

  const next = () => api?.scrollNext();
  const prev = () => api?.scrollPrev();

  return (
    <Carousel setApi={setApi} className="w-full p-6 md:p-10 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl md:text-6xl font-serif text-[#ff4b22]">
            This Month&apos;s Star Cookie
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

        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 cursor-pointer"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative ">
                  <span className="absolute top-4 right-6 bg-pink-100 text-[#ff4b22] font-extrabold px-3 py-1 rounded  ">
                    {product.subtitle}
                  </span>

                  <img
                    src={product.thumbnail || "/sample.png"}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover"
                  />

                  <CardContent className="flex flex-col items-center justify-center text-center text-[#ff4b22]">
                    <div>
                      <p className="text-lg font-bold">{product.title}</p>
                      <p className="font-bold">From $2.99</p>
                    </div>
                  </CardContent>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>
      <div
        className="
         mt-10
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
        <button
          onClick={() => handleClick()}
          className="
          px-30
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
        </button>
      </div>
    </Carousel>
  );
}
