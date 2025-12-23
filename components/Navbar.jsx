"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";

import Logo from "@/app/assets/images/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full ">
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-[#fff7e8]  ">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Munchies Logo"
            priority
            className=" w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-auto"
          />
        </Link>

        <ul className="hidden md:flex gap-10 text-orange-600  text-xl">
          <li>
            <Link href="/">Shop all</Link>
          </li>
          <li>
            <Link href="/">Munchies bundle</Link>
          </li>
          <li>
            <Link href="/">Nutty</Link>
          </li>
          <li>
            <Link href="/">Cookies Club</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4 text-orange-600">
          <div className="hidden md:flex items-center gap-1 font-medium">
            <span>US [$]</span>
          </div>

          <div className="relative cursor-pointer">
            <ShoppingBag size={26} />
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-[#fff7e8] px-6 py-6 border-t">
          <ul className="flex flex-col gap-6 text-orange-600  text-lg">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Shop all
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Munchies bundle
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Nutty
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Cookies Club
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2 text-orange-600 mt-6">
            <span>US [$]</span>
          </div>
        </div>
      )}
    </header>
  );
}
