"use client";

import Image from "next/image";
import cookie1 from "../app/assets/images/cookie1.png";
import Allcookies from "../app/assets/images/Allcookies.png";

const CookieBox = () => {
  return (
    <section className="w-full px-4 md:px-20 py-10">
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#ff5522] font-normal mb-8">
        Build your box
      </h1>

     
      <div
        className="
        flex gap-6
        overflow-x-auto
        md:overflow-visible
        md:flex-row
      "
      >
        
        <div className="min-w-[280px] md:min-w-[400px]">
          <Image
            src={Allcookies}
            alt="All Cookies"
            className="rounded-lg w-full "
            priority
          />
        </div>

      
        <div
          className="
          relative
          min-w-[280px]
          max-w-[320px]
          md:max-w-[360px]
          flex flex-col items-center
          rounded-2xl
        "
        >
          
          <span
            className="
            absolute top-4 right-4
            text-[#ff5522]
            bg-pink-100
            text-sm
            font-extrabold
            px-3 py-1
            rounded
          "
          >
            GOURMET COOKIE
          </span>

         
          <Image
            src={cookie1}
            alt="Cookie"
            className="rounded-2xl w-full h-auto"
          />

          
          <h2 className="text-[#ff5522] font-semibold text-base md:text-lg text-center mt-4 px-4">
            Dark Chocolate Peanut Butter Chip
          </h2>

          <h4 className="text-[#ff5522] font-semibold text-lg mt-1">$2.11</h4>

        
          <button
            className="
            mt-6 mb-6
            w-[90%]
            border-2 border-[#ff4b22]
            text-[#ff5522]
            py-3 md:py-4
            text-xl md:text-2xl
            rounded-full
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

export default CookieBox;
