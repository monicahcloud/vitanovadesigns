"use client";

import React from "react";
import ContactForm from "@/components/contact/ContactForm";
import ContactLeftColumn from "@/components/contact/ContactLeftColumn";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-purple-500 text-white px-6 py-12 relative overflow-hidden">
      {/* Blurred pulse shapes */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-[100px] animate-pulse delay-2000 -z-10" />

      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-stretch min-h-[75vh]">
        {/* Left Column */}
        <div className="relative md:w-1/3 w-full bg-gradient-to-tr from-indigo-600 via-purple-700 to-purple-600 px-6 md:px-8 py-16 rounded-3xl flex flex-col justify-center overflow-hidden">
          <AnimatedBackground />
          <div className="relative z-10 w-full">
            <ContactLeftColumn />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-2/3 w-full flex items-center">
          <div className="w-full h-full flex items-stretch">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function AnimatedBackground() {
  return (
    <>
      <div className="absolute top-10 left-8 w-24 h-24 bg-white opacity-20 rounded-full animate-pulse-slow" />
      <div className="absolute bottom-20 right-16 w-32 h-32 border-4 border-white opacity-10 rounded-full animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white opacity-5 rounded-full animate-bounce-slow" />
    </>
  );
}
