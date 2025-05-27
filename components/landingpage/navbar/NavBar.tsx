"use client";

import RippleButton from "@/components/RippleButton";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

function NavBar() {
  return (
    <header className="sticky top-0 z-[50] bg-[#0A0826] w-full shadow-lg px-8 py-8 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" aria-label="Go to homepage">
        <h1 className="text-4xl md:text-6xl font-bold uppercase bg-gradient-to-t from-indigo-900 via-purple-700 to-purple-500 bg-clip-text text-transparent">
          Vita<span className="">Nova</span>
        </h1>
      </Link>

      {/* CTA always visible */}
      <div className="flex items-center gap-4">
        <RippleButton
          rippleColor="rgba(168, 85, 247, 0.4)"
          className="bg-white text-purple-800 font-bold py-2 px-4 rounded-xl hover:bg-purple-200 transition-all">
          Book A Consultation
        </RippleButton>

        {/* Sheet Trigger always visible */}
        <MobileMenu />
      </div>
    </header>
  );
}

export default NavBar;
