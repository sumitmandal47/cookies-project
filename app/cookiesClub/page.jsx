"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import cookieImg from "../assets/images/cookie10.png";
import CookieIngre from "@/components/CookieIngre";
import WhyJoinSection from "@/components/WhyJoinSection";
import { Testimonials } from "@/components/Testimonials";

export default function CookieClubHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12 py-10 w-full">
        {/* Image */}
        <div className="flex items-center justify-center">
          <Image
            src={cookieImg}
            alt="Cookies"
            priority
            className="rounded-xl w-full max-w-md md:max-w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="bg-pink-100 flex flex-col justify-center px-6 md:px-10 py-8 rounded-2xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif text-[#ff4b22] mb-6">
            Welcome to The <br /> Munchies Cookie Club!
          </h1>

          <p className="text-base sm:text-lg text-[#ff4b22] mb-8">
            Are you a cookie lover with a craving for something truly special?
            This is your gateway to a world of mouthwatering, freshly baked
            cookies, delivered straight to you.
          </p>

          <div className="flex justify-center md:justify-start">
            <Button className="bg-[#ff4b22] hover:bg-[#e24d28] text-white text-base sm:text-lg px-8 py-6 rounded-full">
              Join the club
            </Button>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <WhyJoinSection />
      <CookieIngre />
      <Testimonials />
      
      
    </>
  );
}
