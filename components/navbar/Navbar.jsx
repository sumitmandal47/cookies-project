
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";

import Logo from "@/app/assets/images/logo.png";
import ShopAllMegaMenu from "./ShopAllMegaMenu";
import MyBag from "../MyBag";

import { SelectCountry } from "../SelectCountry";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openBag, setOpenBag] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 font-munchies transition-all
        ${
          scrolled
            ? "border-b-2 border-[#ff4b22] shadow-sm"
            : "border-b border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-4 md:px-8 lg:px-20 bg-[#fff7e8]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Munchies Logo"
              width={350}
              height={80}
              priority
              className="w-[180px] md:w-[260px] lg:w-[350px] object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-orange-600 text-xl">
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <span>Shop all</span>
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

          <div className="flex items-center gap-4 text-orange-600">
            {/* <button
              onClick={() => setCountryOpen(true)}
              className="hidden md:block text-xl font-medium hover:underline cursor-pointer"
            >
              US [$]
            </button> */}
            <SelectCountry
               className="hidden md:block text-xl font-medium hover:underline cursor-pointer"
              open={countryOpen}
              onClose={() => setCountryOpen(false)}
            />

            <button onClick={() => setOpenBag(true)} className="relative">
              <ShoppingBag className="text-[#ff5522]" size={26} />
              <span className="absolute -top-2 -right-2 bg-[#ff5522] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <MyBag open={openBag} onClose={() => setOpenBag(false)} />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#fff7e8] px-6 py-6 border-t">
            <ul className="flex flex-col gap-6 text-orange-600 text-lg">
              <li>
                <Link href="/shop" onClick={() => setMobileOpen(false)}>
                  Shop all
                </Link>
              </li>
              <li>
                <Link
                  href="/munchiesBundle"
                  onClick={() => setMobileOpen(false)}
                >
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

            <button
              onClick={() => setCountryOpen(true)}
              className="hidden md:block text-xl font-medium hover:underline cursor-pointer"
            >
              US[$]
            </button>
            <SelectCountry
              open={countryOpen}
              onClose={() => setCountryOpen(false)}
            />
          </div>
        )}
      </header>
    </>
  );
}
