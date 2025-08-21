"use client";

import RippleButton from "@/components/RippleButton";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

function NavBar() {
  return (
    <header className=" sticky top-0 z-[50] bg-[#0A0826] w-full shadow-lg px-4 md:px-8 py-4 md:py-8 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" aria-label="Go to homepage" className="cursor-pointer ">
        <h1 className="md:mx-20 mx-10 text-2xl sm:text-3xl md:text-5xl font-bold uppercase bg-gradient-to-t from-indigo-900 via-purple-700 to-purple-500 bg-clip-text text-transparent">
          Vita<span className="">Nova</span>
        </h1>
      </Link>

      {/* CTA + Mobile Menu */}
      <div className="md:mx-20 flex items-center gap-2 md:gap-4">
        <RippleButton
          rippleColor="rgba(168, 85, 247, 0.4)"
          className="text-sm md:text-base bg-white text-purple-800 font-semibold md:font-bold py-2 px-3 md:px-4 rounded-lg hover:bg-purple-200 transition-all whitespace-nowrap">
          Book A Call
        </RippleButton>

        {/* Mobile Menu trigger */}
        <MobileMenu />
      </div>
    </header>
  );
}

export default NavBar;
