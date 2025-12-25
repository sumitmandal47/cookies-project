"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Cookies } from "@/data/cookiesData";

export default function CookieDetails({ params }) {
  const router = useRouter();

  // ✅ unwrap params Promise
  const { id } = use(params);

  const cookie = Cookies.find((c) => c.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(cookie?.images[0]);

  if (!cookie) {
    return (
      <div className="p-10 text-center">
        <p className="text-2xl text-red-500">Cookie not found</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-6 py-3 border rounded-full"
        >
          Back to home
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen mx-auto p-6 md:p-10 w-screen  bg-[#fff6e6]   ">
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {cookie.images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt="thumb"
                width={80}
                height={80}
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer rounded-lg border-2 ${
                  selectedImage === img
                    ? "border-[#ff4b22]"
                    : "border-transparent hover:border-[#ff4b22]"
                }`}
              />
            ))}
          </div>

          <Image
            src={selectedImage}
            alt={cookie.title}
            width={450}
            height={450}
            className="rounded-2xl object-contain"
          />
        </div>

        {/* RIGHT */}
        <div className="text-[#ff4b22]">
          <p className="text-sm mb-2">HOME / COOKIES / {cookie.title}</p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {cookie.title}
          </h1>

          <p className="text-3xl font-semibold mb-4">
            ${cookie.price.toFixed(2)}
          </p>

          <p className="mb-6">{cookie.information}</p>

          <button className="w-full border border-[#ff4b22] py-4 rounded-full text-2xl hover:bg-[#ff4b22] hover:text-white transition">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import { useState, use } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { Plus, X, ChevronDown } from "lucide-react";
// import { DM_Serif_Display, Inter } from "next/font/google";

// // --- FONTS ---
// const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
// const sans = Inter({ subsets: ["latin"] });

// // --- MOCK DATA ---
// const MOCK_COOKIE = {
//   id: 1,
//   title: "Choco Lover's Bundle",
//   price: 3.99,
//   description:
//     "Chocoholics rejoice! Our Choco Lover's Bundle features our most indulgent chocolate creations, from triple chocolate chunk to dark chocolate fudge, perfect for satisfying your cravings.",
//   images: ["/cookie-stack.jpg", "/cookie-bite.jpg", "/cookie-flat.jpg"],
//   otherFlavors: [
//     { name: "Special Fall Cinnamon", price: 2.99, img: "/cinnamon.jpg" },
//     { name: "Dark Chocolate Walnuts", price: 2.99, img: "/walnut.jpg" },
//   ],
// };




// const AccordionItem = ({ title }) => (
//   <div className="border-b border-[#ff4b22]/30 py-4 flex justify-between items-center cursor-pointer group">
//     <span className={`text-2xl text-[#ff4b22] ${serif.className}`}>
//       {title}
//     </span>
//     <button className="border border-[#ff4b22] rounded-full p-1 text-[#ff4b22] group-hover:bg-[#ff4b22] group-hover:text-white transition">
//       <Plus size={16} />
//     </button>
//   </div>
// );

// const UpsellCard = ({ item }) => (
//   <div className="flex items-center gap-4 mb-4 last:mb-0">
//     <div className="w-16 h-16 bg-[#fff] border border-[#ff4b22]/20 rounded-lg overflow-hidden shrink-0 relative">
//       {/* Placeholder for image */}
//       <div className="w-full h-full bg-orange-100 flex items-center justify-center text-[#ff4b22] text-xs">
//         IMG
//       </div>
//     </div>
//     <div className="flex-1">
//       <h4 className="text-[#ff4b22] font-bold leading-tight">{item.name}</h4>
//       <p className="text-[#ff4b22] text-sm">4-Pack / ${item.price}</p>
//     </div>
//     <button className="px-4 py-1 border border-[#ff4b22] text-[#ff4b22] rounded-full text-sm hover:bg-[#ff4b22] hover:text-white transition">
//       Add +
//     </button>
//   </div>
// );

// // --- MAIN PAGE COMPONENT ---

// export default function CookieDetails({ params }) {
//   // Use React.use() to unwrap params in Next.js 15+
//   // const { id } = use(params);

//   const cookie = MOCK_COOKIE;
//   const [selectedImage, setSelectedImage] = useState(0);

//   return (
//     <div className={`min-h-screen bg-[#fff9f0] ${sans.className}`}>
     
      

//       <main className="max-w-7xl mx-auto p-6 md:p-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//           {/* LEFT COLUMN: Gallery */}
//           <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-6 h-fit sticky top-10">
//             {/* Thumbnails */}
//             <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
//               {[0, 1, 2].map((idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => setSelectedImage(idx)}
//                   className={`w-20 h-20 shrink-0 rounded-lg border-2 cursor-pointer overflow-hidden relative ${
//                     selectedImage === idx
//                       ? "border-[#ff4b22]"
//                       : "border-transparent"
//                   }`}
//                 >
//                   <div className="w-full h-full bg-[#eedcc0] flex items-center justify-center text-[#9c7b5c]">
//                     Thumb
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Main Image */}
//             <div className="flex-1 bg-[#eedcc0] rounded-3xl relative aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden">
//               <div className="absolute top-6 right-6 bg-[#ff4b22]/10 text-[#ff4b22] px-3 py-1 font-black italic tracking-widest text-xs rounded uppercase z-10">
//                 Gift Set
//               </div>
//               <div className="text-[#9c7b5c] font-bold text-2xl">
//                 Main Cookie Image
//               </div>
//             </div>
//           </div>

//           {/* RIGHT COLUMN: Product Info */}
//           <div className="lg:col-span-5 text-[#ff4b22]">
//             <p className="text-xs md:text-sm mb-4 opacity-80">
//               Home / Chocolate Lovers Paradise / {cookie.title}
//             </p>

//             <h1
//               className={`text-5xl md:text-7xl leading-[0.9] mb-4 ${serif.className}`}
//             >
//               {cookie.title}
//             </h1>

//             <p className="text-2xl font-medium mb-6">${cookie.price}</p>

//             <p className="text-lg leading-relaxed opacity-90 mb-8">
//               {cookie.description}
//             </p>

//             {/* Dropdown Selector */}
//             <div className="relative mb-6">
//               <button className="w-fit border border-[#ff4b22] px-6 py-3 rounded-xl flex items-center gap-12 text-lg hover:bg-[#fff0e6] transition">
//                 <span>4-pack</span>
//                 <ChevronDown size={20} />
//               </button>
//             </div>

//             {/* Main CTA */}
//             <button
//               className={`w-full border border-[#ff4b22] text-[#ff4b22] text-3xl py-4 rounded-full mb-10 hover:bg-[#ff4b22] hover:text-white transition-all duration-300 ${serif.className}`}
//             >
//               Add to cart
//             </button>

//             {/* Upsell Section */}
//             <div className="bg-[#fcebf4] p-6 rounded-2xl mb-10">
//               <h3 className={`text-2xl mb-4 ${serif.className}`}>
//                 Taste our other flavors too
//               </h3>
//               {cookie.otherFlavors.map((flavor, i) => (
//                 <UpsellCard key={i} item={flavor} />
//               ))}
//             </div>

//             {/* Accordions */}
//             <div className="flex flex-col gap-2">
//               <AccordionItem title="Ingredients" />
//               <AccordionItem title="Shipping" />
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }