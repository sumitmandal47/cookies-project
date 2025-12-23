

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Cookies } from "@/data/cookiesData";
import Image from "next/image";


export function CookieDetails() {
  const { id } = useParams<{ id: string }>();
  const cookie = Cookies.find((c) => c.id === Number(id));
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(cookie?.images[0]);

  if (!cookie) {
    return (
      <div className="p-10 text-center">
        <p className="text-2xl text-red-500">Cookie not found</p>
        <Button onClick={() => navigate("/")}>Back to Cookies</Button>
      </div>
    );
  }

  const otherCookies = Cookies.filter((c) => c.id !== cookie.id).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto p-10 relative bg-[#fff6e6] rounded-2xl">
      <div className="flex-col gap-4  absolute ">
        {cookie.images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt="thumb"
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 object-contain rounded-lg cursor-pointer border-2 transition  ${
              selectedImage === img
                ? "border-[#ff4b22]"
                : "border-transparent hover:border-[#ff4b22]"
            }`}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="flex flex-col items-center gap-6">
          <Image
            src={selectedImage}
            alt={cookie.title}
            className="rounded-2xl bg-[#fff6e6] shadow-lg   object-contain"
          />
        </div>

        <div className="flex flex-col justify-start text-[#ff4b22]">
          <p className="text-sm font-semibold tracking-wide mb-2">
            HOME / COOKIES / {cookie.title}
          </p>
          <h1 className="text-6xl font-serif font-bold mb-4">{cookie.title}</h1>
          <p className="text-3xl font-semibold mb-4">
            ${cookie.price.toFixed(2)}
          </p>
          <p className="text-lg leading-relaxed mb-8">{cookie.information}</p>

          <div className="flex items-center  mb-10">
            <select className="border-1 border-[#ff4b22] text-[#ff4b22] rounded-md px-8 py-4 text-lg bg-[#fff6e6]  ">
              <option>4-pack</option>
              <option>6-pack</option>
              <option>8-pack</option>
            </select>
          </div>
          <div>
            <button
             
              className="text-[#ff4b22] border border-[#ff4b22] px-4 py-5 w-full text-4xl font-normal rounded-full hover:bg-[#ff4b22] hover:text-white transition  cursor-pointer"
            >
              Add to cart
            </button>
          </div>

          <div className="mt-16 bg-pink-100 p-6 rounded-xl">
            <h2 className="text-4xl font-serif text-[#ff4b22] mb-6">
              Taste our other flavors too
            </h2>

            <div className="flex-col gap-6">
              {otherCookies.map((other) => (
                <div
                  key={other.id}
                  className="flex items-center justify-between p-4 rounded-xl  transition cursor-pointer"
                  onClick={() => navigate(`/cookies/${other.id}`)}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={other.images[0]}
                      alt={other.title}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <div>
                      <p className=" text-[#ff4b22]">{other.title}</p>
                      <p className="text-sm text-[#ff4b22] opacity-80">
                        8-Pack / ${other.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button className="border border-[#ff4b22] text-[#ff4b22] px-6 py-4 rounded-full hover:bg-[#ff4b22] hover:text-white transition">
                    Add +
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* Accordion Sections */}
          <Accordion type="single" collapsible>
            <AccordionItem value="description">
              <AccordionTrigger className="text-[#ff4b22] text-2xl">
                Description
              </AccordionTrigger>
              <AccordionContent className="text-lg text-[#ff4b22]">
                {cookie.information ||
                  "Delicious handmade cookie made with love!"}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ingredients">
              <AccordionTrigger className="text-[#ff4b22] text-2xl">
                Ingredients
              </AccordionTrigger>
              <AccordionContent className="text-lg text-[#ff4b22]">
                {cookie.ingredients ||
                  "Flour, butter, sugar, chocolate chips, eggs, and love."}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="shipping">
              <AccordionTrigger className="text-[#ff4b22] text-2xl">
                Shipping
              </AccordionTrigger>
              <AccordionContent className="text-lg text-[#ff4b22]">
                Ships fresh within 2–3 business days in eco-friendly packaging.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

