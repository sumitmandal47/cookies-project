"use client";

export default function Marquee() {
  return (
    <div className=" relative w-full overflow-hidden  py-7  mb-10 ">
      {/* Moving Track */}
      <div className="px-20">
        <div className="flex w-max animate-marquee gap-20">
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>
    </div>
  );
}

function MarqueeItem() {
  return (
    <div className="flex gap-20 text-[#ff5522] text-5xl md:text-7xl font-extrabold uppercase whitespace-nowrap ">
      <span>Cookies</span>
      <span>100% Vegan</span>
      <span>Healthy Ingredients</span>
    </div>
  );
}
