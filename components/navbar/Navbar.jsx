// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { ShoppingBag, Menu, X } from "lucide-react";

// import Logo from "@/app/assets/images/logo.png";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="w-full ">
//       <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-[#fff7e8]  ">
//         <Link href="/" className="flex items-center">
//           <Image
//             src={Logo}
//             alt="Munchies Logo"
//             priority
//             className=" w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-auto"
//           />
//         </Link>

//         <ul className="hidden md:flex gap-10 text-orange-600  text-xl">
//           <li>
//             <Link href="/shop">Shop all</Link>
//           </li>
//           <li>
//             <Link href="/munchiesBundle">Munchies bundle</Link>
//           </li>
//           <li>
//             <Link href="/nutty">Nutty</Link>
//           </li>
//           <li>
//             <Link href="/cookiesClub">Cookies Club</Link>
//           </li>
//         </ul>

//         <div className="flex items-center gap-4 text-orange-600">
//           <div className="hidden md:flex items-center gap-1 font-medium">
//             <span>US [$]</span>
//           </div>

//           <div className="relative cursor-pointer">
//             <ShoppingBag size={26} />
//             <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//               0
//             </span>
//           </div>

//           <button className="md:hidden" onClick={() => setOpen(!open)}>
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </nav>
//       {open && (
//         <div className="md:hidden bg-[#fff7e8] px-6 py-6 border-t">
//           <ul className="flex flex-col gap-6 text-orange-600  text-lg">
//             <li>
//               <Link href="/" onClick={() => setOpen(false)}>
//                 Shop all
//               </Link>
//             </li>
//             <li>
//               <Link href="/" onClick={() => setOpen(false)}>
//                 Munchies bundle
//               </Link>
//             </li>
//             <li>
//               <Link href="/" onClick={() => setOpen(false)}>
//                 Nutty
//               </Link>
//             </li>
//             <li>
//               <Link href="/" onClick={() => setOpen(false)}>
//                 Cookies Club
//               </Link>
//             </li>
//           </ul>

//           <div className="flex items-center gap-2 text-orange-600 mt-6">
//             <span>US [$]</span>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";

import Logo from "@/app/assets/images/logo.png";
import ShopAllMegaMenu from "./ShopAllMegaMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="relative w-full">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-[#fff7e8]">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Munchies Logo"
            priority
            className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-orange-600 text-xl">
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            Shop all
            {shopOpen && <ShopAllMegaMenu />}
          </li>

          <li>
            <Link href="/munchiesBundle">Munchies bundle</Link>
          </li>
          <li>
            <Link href="/nutty">Nutty</Link>
          </li>
          <li>
            <Link href="/cookiesClub">Cookies Club</Link>
          </li>
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 text-orange-600">
          <span className="hidden md:block font-medium">US [$]</span>

          <div className="relative cursor-pointer">
            <ShoppingBag size={26} />
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#fff7e8] px-6 py-6 border-t">
          <ul className="flex flex-col gap-6 text-orange-600 text-lg">
            <li>
              <Link href="/shop" onClick={() => setMobileOpen(false)}>
                Shop all
              </Link>
            </li>
            <li>
              <Link href="/munchiesBundle" onClick={() => setMobileOpen(false)}>
                Munchies bundle
              </Link>
            </li>
            <li>
              <Link href="/nutty" onClick={() => setMobileOpen(false)}>
                Nutty
              </Link>
            </li>
            <li>
              <Link href="/cookiesClub" onClick={() => setMobileOpen(false)}>
                Cookies Club
              </Link>
            </li>
          </ul>

          <div className="mt-6 text-orange-600 font-medium">US [$]</div>
        </div>
      )}
    </header>
  );
}
