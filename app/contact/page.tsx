"use client";

import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactLeftColumn from "@/components/contact/ContactLeftColumn";

export default function ContactPage() {
  return (
    // Bringing back the original vibrant background theme
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-purple-500 px-6 py-20 relative overflow-hidden flex items-center justify-center">
      {/* Blurred pulse shapes from your original design */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-[100px] animate-pulse delay-2000 -z-10" />

      <section className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row shadow-2xl rounded-[3rem] overflow-hidden bg-white">
        {/* Left Column: Original Vibrant Gradient + Wider for Email */}
        <div className="lg:w-[40%] w-full bg-gradient-to-tr from-indigo-600 via-purple-700 to-purple-600 p-10 md:p-14 text-white relative flex flex-col justify-center">
          <ContactLeftColumn />
        </div>

        {/* Right Column: Newer Clean Form Layout */}
        <div className="lg:w-[60%] w-full p-10 md:p-16 flex items-center bg-white">
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
