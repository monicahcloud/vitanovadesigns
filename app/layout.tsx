import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "../components/landingpage/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import SEOJsonLd from "@/components/SEOJsonLd"; // ✅ normal import

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});
const jbMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://vitanovadesigns.cloud"),
  title: {
    default: "Make Your Business AI-Ready | VitaNova Designs & Marketing",
    template: "%s | VitaNova Designs & Marketing",
  },
  description:
    "AI-ready websites, system integrations, and performance marketing. We design, automate, and optimize so your business grows on autopilot.",
  keywords: [
    "AI websites",
    "AI automations",
    "web design agency",
    "marketing agency",
    "CRM integrations",
    "Next.js developer",
    "branding",
    "Atlanta marketing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://vitanovadesigns.cloud",
    siteName: "VitaNova Designs & Marketing",
    title: "Make Your Business AI-Ready",
    description:
      "Websites, automations, and analytics built to convert. One partner for site, systems, and growth.",
    images: [
      {
        url: "/og/og-default.png",
        width: 1200,
        height: 630,
        alt: "VitaNova Designs",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make Your Business AI-Ready",
    description:
      "AI-powered websites, automations, and marketing that scale results.",
    images: ["/og/og-default.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#6d28d9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${jbMono.variable} antialiased`}>
        <SEOJsonLd /> {/* ✅ clean, typed, no errors */}
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
