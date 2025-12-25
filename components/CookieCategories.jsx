

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
              className="object-cover w-full h-[420px] md:h-[500px]"
            />

            <div className="absolute bottom-6 ">
              <button
               
                className="text-[#ff5522] bg-[#fff6e6] border-2 items-center p-4 m-8 hover:bg-[#ff5522] hover:text-white rounded-full  font-normal text-3xl cursor-pointer border-[#ff4b22]"
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
