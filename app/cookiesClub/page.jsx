"use client";

import CookieIngre from "@/components/CookieIngre";
import WhyJoinSection from "@/components/WhyJoinSection";
import { Testimonials } from "@/components/Testimonials";

import CookieCard from "../../components/MonthStar";
import Move from "../../components/Move";
import JoinTheClub from "../../components/JoinTheClub";

export default function CookieClubHero() {
  return (
    <>
      <JoinTheClub/>
      <WhyJoinSection />
      <CookieIngre />

      <Testimonials />
      <Move/>
      <CookieCard/>
      
      
    </>
  );
}
