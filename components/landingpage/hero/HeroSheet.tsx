import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function HeroSheet() {
  return (
    <div className="relative z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-15 w-15" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[800px] bg-purple-900 text-black dark:bg-slate-900 dark:text-white">
          <SheetHeader>
            <SheetTitle>Explore Our Services</SheetTitle>
            <SheetDescription>
              Elevate your brand with VitaNova Designs & Marketing.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            <a
              href="#services"
              className="block hover:text-primary font-medium">
              Services
            </a>
            <a
              href="#portfolio"
              className="block hover:text-primary font-medium">
              Portfolio
            </a>
            <a href="#about" className="block hover:text-primary font-medium">
              About
            </a>
            <a href="#contact" className="block hover:text-primary font-medium">
              Contact
            </a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
