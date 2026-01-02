import Image from "next/image";
import img1 from "../app/assets/images/cookie7.png";

import img2 from "../app/assets/images/cookie8.png";

import img3 from "../app/assets/images/cookie9.png";

const categories = [
  {
    title: "Signature cookies",
    image: img1,
  },
  {
    title: "Nutty & nice",
    image: img2,
  },
  {
    title: "Bundles",
    image: img3,
  },
];

export function CookieCategories() {
  return (
    <div className="max-w-7xl mx-auto  ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((item, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden ">
            <Image
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-105 md:h-125"
            />

            <div className="absolute bottom-6 ">
              <button
                className="
                    px-10 py-3
                    border-2 border-[#ff4b22]
                   text-[#ff4b22]
                     rounded-full bg-[#fff6ed] items-center text-2xl font-serif hover:bg-[#ff4b22] hover:text-white transition-al duration-300"
              >
                {item.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
