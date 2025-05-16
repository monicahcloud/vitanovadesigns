"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../app/assets/images/hero1.png";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center h-12 min-w-[170px] gap-3">
      <Image
        src={logo}
        alt="VitaNova Logo"
        className="w-40 h-auto block"
        style={{ maxWidth: "200px" }}
        priority
      />
      {/* <h1 className="text-3xl font-extrabold tracking-wider uppercase text-white">
        VITA<span className="text-[#7C87f8]">Nova</span>
      </h1> */}
    </Link>
  );
}

export default Logo;
