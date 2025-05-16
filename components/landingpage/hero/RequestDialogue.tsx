"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CountryCodeSelect } from "./CountryCodeSelect";
import { useState } from "react";

export function RequestDialogue() {
  const [phoneCountry, setPhoneCountry] = useState("US");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-[#FFD600] text-[#0A0826] font-bold px-6 py-3 rounded-full shadow"
          size="lg">
          REQUEST A PROPOSAL
        </Button>
      </DialogTrigger>

      <DialogContent className="w-screen h-screen max-w-none rounded-3xl overflow-auto flex flex-col justify-center items-center">
        <form className="w-screen max-w-3xl bg-white rounded-3xl p-8 md:p-12">
          <DialogHeader className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="w-10 h-10 border-2 border-white -ml-0">
                <AvatarImage src="/avatar1.jpg" alt="Expert 1" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar className="w-10 h-10 border-2 border-white -ml-4">
                <AvatarImage src="/avatar2.jpg" alt="Expert 2" />
                <AvatarFallback>CD</AvatarFallback>
              </Avatar>
            </div>
            <DialogTitle>Book a call with our experts</DialogTitle>
            <DialogDescription>
              to discuss your goals and build a project plan
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="fullname" className="mb-1">
                Full name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullname"
                required
                placeholder="Full name"
                className="border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-black bg-transparent"
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-1">
                Company email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Email"
                className="border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-black bg-transparent"
              />
            </div>

            <div className="flex items-end gap-2">
              <div className="w-24">
                <CountryCodeSelect
                  value={phoneCountry}
                  onChange={setPhoneCountry}
                />
              </div>
              <Input
                type="tel"
                required
                placeholder="201-555-0123"
                className="flex-1 border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-black bg-transparent"
              />
            </div>

            <div>
              <Label htmlFor="budget" className="mb-1">
                What is your budget? <span className="text-red-500">*</span>
              </Label>
              <Select required>
                <SelectTrigger className="border-0 border-b border-gray-200 rounded-none bg-transparent px-0 focus:ring-0 focus:border-black">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under_10k">Under $10k</SelectItem>
                  <SelectItem value="10k_50k">$10k - $50k</SelectItem>
                  <SelectItem value="50k_plus">$50k+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="about" className="mb-1">
                About project <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="about"
                required
                placeholder="Tell us about your project..."
                className="border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-black bg-transparent resize-none"
                rows={2}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <Button
              type="submit"
              className="bg-[#493CFF] text-white rounded-full px-8 py-3 font-bold flex items-center gap-2">
              REQUEST A QUOTE
              <span className="inline-block rounded-full border border-white p-1 ml-2">
                <svg width="18" height="18" fill="none">
                  <path
                    d="M6 14l6-5-6-5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Button>
            <span className="text-xs text-gray-500">
              🛡️ By submitting the form I agree with the{" "}
              <a href="#" className="underline text-[#493CFF]">
                Privacy Policy
              </a>
            </span>
          </div>
          <DialogClose asChild>
            <button
              type="button"
              className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-black">
              ×
            </button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
