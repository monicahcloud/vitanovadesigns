import ChurchPackagesPage from "./ChurchPackages";

export const metadata = {
  title: "Church Website Packages | Vita Nova Designs",
  description:
    "Affordable, powerful website packages tailored for churches of all sizes. Build your online presence with Vita Nova Designs.",
  keywords: [
    "church website design",
    "affordable church web packages",
    "Vita Nova Designs",
    "church online presence",
    "faith-based website design",
    "small church websites",
    "nonprofit web design",
  ],
  openGraph: {
    title: "Church Website Packages | Vita Nova Designs",
    description:
      "Three website packages designed for churches at every stage — Seed, Grow, and Flourish. Let's grow your digital ministry.",
    url: "https://vitanovadesigns.cloud/church-packages",
    siteName: "Vita Nova Designs",
    images: [
      {
        url: "https://vitanovadesigns.cloud/og-church-packages.png",
        width: 1200,
        height: 630,
        alt: "Church Website Packages by Vita Nova Designs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Website Packages | Vita Nova Designs",
    description:
      "Custom websites for churches of all sizes. Explore Seed, Grow, and Flourish packages — built with purpose.",
    images: ["https://vitanovadesigns.cloud/og-church-packages.png"],
  },
};

export default function Page() {
  return <ChurchPackagesPage />;
}
