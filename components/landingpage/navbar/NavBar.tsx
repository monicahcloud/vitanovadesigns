"use client";

import React from "react";
import QuoteButton from "./QuoteButton";
import Links from "./Links";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

function NavBar() {
  return (
    <header className="sticky top-0 z-[50] bg-[#0A0826] w-full shadow-lg px-8 py-8 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-4xl md:text-6xl font-bold uppercase bg-gradient-to-t from-indigo-900 via-purple-700 to-purple-500 bg-clip-text text-transparent">
        Vita<span className="">Nova</span>
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-lg">
        <Links />
        <QuoteButton />
      </nav>

      {/* Mobile Nav Trigger */}
      <div className="md:hidden">
        <Sheet>
          <SheetTitle></SheetTitle>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0A0826] text-white">
            <nav className="flex flex-col gap-6 mt-8 text-lg">
              <Links />
              <QuoteButton />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default NavBar;
