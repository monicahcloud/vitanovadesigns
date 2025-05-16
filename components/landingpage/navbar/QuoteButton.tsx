"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function QuoteButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      className="bg-[#52039c] text-white hover:bg-[#360168c7] border-b-purple-300 text-2xl"
      onClick={() => router.push("/quote")}>
      Free Consultation
    </Button>
  );
}
