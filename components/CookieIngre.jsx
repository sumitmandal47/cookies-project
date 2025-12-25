

"use client";

import Image from "next/image";
import cookie8 from "../app/assets/images/cookie8.png";

const CookieIngre = () => {
  return (
    <section className="w-full px-4 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT : TEXT */}
        <div className="border-2 border-[#ff5522] p-6 md:p-10 rounded-xl h-full flex items-center">
          <p
            className="
              text-[#ff5522]
              text-xl
              sm:text-2xl
              md:text-4xl
              lg:text-5xl
              leading-relaxed
              font-normal
            "
          >
            Every batch is crafted with the finest ingredients, mixed to
            perfection, and baked with love to create a treat that&apos;s not
            just delicious, but memorable.
          </p>
        </div>

        {/* RIGHT : IMAGE */}
        <div className="flex justify-center h-full">
          <Image
            src={cookie8}
            alt="Ingredients cookie"
            className="rounded-2xl w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CookieIngre;
