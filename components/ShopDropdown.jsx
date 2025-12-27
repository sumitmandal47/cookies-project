
import image1 from "../app/assets/images/cookie1.png";
import image2 from "../app/assets/images/cookie2.png";
import image3 from "../app/assets/images/cookie3.png";
import Image from "next/image";

function ShopDropdown() {
  return (
    <div
      className="absolute left-0 top-full w-screen
      bg-[#fff6e6]  border-b-[3px] border-[#ff4b22]
      z-40 animate-dropdown"
    >
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-10">
        {/* LEFT LINKS */}
        <div className="col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-[#ff4b22] mb-3">Featured</h3>
            <ul className="space-y-2 text-[#ff4b22]">
              <li>Variety packs</li>
              <li>Signature cookie assortment</li>
              <li>Chocolate lovers</li>
              <li>Seasonal sensations</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#ff4b22] mb-3">Cookies</h3>
            <ul className="space-y-2 text-[#ff4b22]">
              <li>Matcha Dream</li>
              <li>Dark Chocolate Peanut Butter</li>
              <li>Dark Chocolate Chocolate Chip</li>
              <li>Special Fall Cinnamon</li>
              <li>Two Chip Chocolate Chip</li>
              <li>Dark Chocolate Walnuts</li>
              <li className="font-semibold underline cursor-pointer">
                Shop all
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="col-span-2 grid grid-cols-3 gap-6">
          {[
            { name: "Two Chip Chocolate Chip", img: image1 },
            { name: "Caramel Chocolate Chip", img: image2 },
            { name: "Dark Chocolate Chocolate Chip", img: image3 },
          ].map((product) => (
            <div key={product.name} className="text-center">
              <Image
                src={product.img}
                alt={product.name}
                className="rounded-lg mx-auto mb-3"
              />
              <h4 className="text-[#ff4b22] mb-2 text-sm">{product.name}</h4>
              <button
                className="px-5 py-2 border border-[#ff4b22]
                rounded-full text-[#ff4b22]
                hover:bg-[#ff4b22] hover:text-white transition"
              >
                Shop now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopDropdown;
