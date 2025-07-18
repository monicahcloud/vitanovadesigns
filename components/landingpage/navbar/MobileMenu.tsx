import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Top level dropdown (like SERVICES)
const TopLevelDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-3xl font-extrabold uppercase hover:text-cyan-400 transition-colors mb-4">
        {title}
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="pl-4 mt-4 space-y-8">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Mobile Menu Sheet
const MobileMenu = () => {
  const [open, setOpen] = useState(false); // control open state

  // Close sheet when a link is clicked
  const handleClose = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTitle></SheetTitle>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <AlignRight className="size-8 text-white" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="fixed top-0 right-0 !w-[700px] !max-w-[95vw] !h-screen bg-gradient-to-br from-[#0A0826]/90 to-purple-900/90 backdrop-blur-lg text-white p-10 z-[9999] flex flex-col overflow-y-auto">
        {/* Close & CTA */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/contact"
            onClick={handleClose}
            className="border px-6 py-3 text-lg font-bold">
            Request a Quote
          </Link>
          {/* <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <X className="size-8 text-white" />
            </Button>
          </SheetTrigger> */}
        </div>

        {/* MegaMenu */}
        <div className="flex flex-col space-y-12">
          <TopLevelDropdown title="Services">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-base">
              {[
                {
                  href: "/services/design",
                  title: "Design / Development",
                  items: [
                    "AI System Integration & Automation",
                    "UI/UX",
                    "Web/Mobile Application",
                    "Landing Page Design",
                    "Optimization",
                    "Content Marketing Strategy",
                  ],
                },
                {
                  href: "/services/marketing",
                  title: "Marketing / Branding",
                  items: [
                    "Content Marketing",
                    "Pitch Deck Design",
                    "Content & Conversion Rate Optimization (CRO)",
                    "SEO & Conversion Strategy",
                    "Customer Journey Research",
                    "Brand Messaging",
                    "Visual Presentations",
                  ],
                },
                {
                  href: "/services/business",
                  title: "Business Solutions",
                  items: [
                    "Key Performance Indicator (KPI) Development & Tracking",
                    "Business Intelligence (BI) Reporting & Insights",
                    "Consulting & Strategy",
                    "Systems & Automation",
                  ],
                },
              ].map(({ href, title, items }) => (
                <div key={title} className="space-y-3 break-words">
                  <Link
                    href={href}
                    onClick={handleClose}
                    className="text-cyan-400 font-bold uppercase block hover:underline whitespace-normal leading-snug">
                    {title}
                  </Link>
                  <ul className="space-y-1 text-sm text-gray-200">
                    {items.map((item) => (
                      <li key={item} className="break-words">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TopLevelDropdown>

          <Link
            href="/about"
            onClick={handleClose}
            className="text-3xl font-extrabold uppercase hover:text-cyan-400 transition-colors">
            ABOUT
          </Link>

          <Link
            href="/contact"
            onClick={handleClose}
            className="text-3xl font-extrabold uppercase hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </div>
        {/* VITANOVA on side vertically */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 translate-x-1/2 text-[150px] font-extrabold opacity-10 select-none pointer-events-none leading-none rotate-270">
          VITANOVA
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
