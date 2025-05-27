import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/landingpage/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - VitaNova Designs and Marketing LLC",
    absolute: "VitaNova Designs and Marketing LLC",
  },
  description:
    "VitaNova Designs and Marketing LLC offers expert branding, web design, and digital marketing services to help businesses grow online. We specialize in creative design, social media strategy, and custom marketing solutions tailored to your brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${jbMono.variable} antialiased`}>
        <Navbar /> {/* 👈 Navbar added here */}
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
