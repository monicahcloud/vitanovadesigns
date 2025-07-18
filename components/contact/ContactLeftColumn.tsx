import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactLeftColumn() {
  return (
    <div className="relative w-full h-full overflow-hidden  p-6 md:p-10 text-white flex flex-col justify-between gap-10">
      {/* Floating SVG Blob Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] opacity-20 animate-spin-slow"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#3b82f6"
            d="M49.8,-67.2C62.3,-57.7,69.4,-41.6,71.3,-26C73.2,-10.5,69.9,4.7,63.4,19.2C56.9,33.7,47.2,47.6,34.6,56.9C21.9,66.2,5.9,70.8,-9.5,73C-24.8,75.2,-39.5,75.1,-51.5,67.4C-63.4,59.8,-72.7,44.6,-76.6,28.3C-80.6,12,-79.1,-5.4,-72.8,-22.5C-66.4,-39.6,-55.2,-56.5,-40.2,-65.7C-25.2,-74.9,-6.3,-76.4,10.5,-76.4C27.3,-76.5,54.7,-75.6,49.8,-67.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Headline + Subtext */}
      <div className="z-10 space-y-4 max-w-md">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
          Let&apos;s Grow Your Brand Together.
        </h1>
        <p className="text-white/80 text-base md:text-lg">
          Whether you have a question, opportunity, or just want to say hi —
          we&apos;re all ears. Drop us a message and we&apos;ll respond shortly.
        </p>
      </div>

      {/* <div className="z-10 flex justify-center items-center">
        <div className="logo-wrapper">
          <div className="logo-ring" />
          <div className="logo-inner">
            <Logo />
          </div>
        </div>
      </div> */}

      {/* Contact Info */}
      <div className="z-10  text-white/90 text-md sm:text-base">
        <div className="flex items-start gap-3">
          <Phone className="mt-1" />
          <a
            href="tel:+14047707133"
            className="text-primary underline hover:opacity-80 transition">
            (404) 770-7133
          </a>
        </div>

        <div className="flex items-start gap-3 break-words">
          <Mail className="mt-1" />
          <a
            href="mailto:monicahcloud@vitanovadesigns.cloud"
            className="break-all text-primary underline hover:opacity-80 transition">
            monicahcloud@vitanovadesigns.cloud
          </a>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-1" /> <span>Atlanta, GA</span>
        </div>
      </div>
    </div>
  );
}
