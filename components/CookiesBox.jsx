
"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import cookie1 from "../app/assets/images/cookie1.png";
import Allcookies from "../app/assets/images/Allcookies.png";


const CookiesBox = () => {
  return (
    <section className="w-full bg-[#fff7e8] px-4 md:px-12 py-10">
      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-8
        items-center
        max-w-7xl
        mx-auto
      "
      >
        {/* LEFT – Image Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <div className="col-span-2 relative">
            <Image
              src={Allcookies}
              alt="Cookies box"
              className="rounded-2xl w-full h-auto"
              priority
            />

            <PlusIcon className="top-[40%] left-[45%]" />
            <PlusIcon className="top-[25%] left-[65%]" />
            <PlusIcon className="top-[55%] left-[30%]" />
          </div>
        </div>

        {/* RIGHT – Product Info */}
        <div className="flex flex-col items-start justify-center text-left">
          <div className="  ">
            <span className="text-sm font-bold text-[#ff5522] bg-pink-100 rounded  absolute px-2 py-2 items-end ">
              GOURMET COOKIE
            </span>
            <Image
              src={cookie1}
              alt="Cookie stack"
              className="rounded-2xl w-full h-auto"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-serif text-[#ff5522] mb-2">
            Dark Chocolate Peanut Butter Chip
          </h2>

          <p className="text-[#ff5522] mb-6 items-center">
            from <span className="font-semibold">$2.99</span>
          </p>

          <button
            className="
            border-2
            border-[#ff5522]
            text-[#ff5522]
            px-10
            py-4
            w-full
            rounded-full
            text-lg
            md:text-xl
            hover:bg-[#ff5522]
            hover:text-white
            transition
          "
          >
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookiesBox;

/* Plus Icon Component */
const PlusIcon = ({ className }) => (
  <span
    className={`
      absolute
      ${className}
      w-10
      h-10
      bg-[#ff5522]
      text-white
      rounded-full
      flex
      items-center
      justify-center
      shadow-md
      cursor-pointer
    `}
  >
    <Plus size={18} />
  </span>
);
