import Link from "next/link";
import MegaMenu from "@/components/MegaMenu";
import design from "../../../app/assets/images/design2.png";
import develop from "../../../app/assets/images/develop2.png";
import marketing from "../../../app/assets/images/develop2.png";
export const links = [
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    hasSubMenu: true,
    subMenu: [
      {
        name: "Design",
        href: "/services/design",
        description: [
          "AI System Integration & Automation",
          "UI/UX",
          "Web",
          "Mobile App Design",
          "Landing Page Design",
          "Branding",
        ],
        icon: design,
      },
      {
        name: "Development",
        href: "/services/development",
        description: [
          "Web Development",
          "Software Development",
          "CMS Development",
          "Webflow Development",
          "MVP Development",
        ],
        icon: develop,
      },
      {
        name: "Marketing/UX",
        href: "/services/marketing",
        description: [
          "Content Marketing",
          "Pitch Deck Design",
          "SEO",
          "Content & CRO",
        ],
        icon: marketing,
      },
    ],
  },
  { name: "Contact", href: "/contact" },
];

function Links() {
  return (
    <nav className="flex gap-6">
      {links.map((link) =>
        link.hasSubMenu ? (
          <MegaMenu key={link.name} title={link.name} subMenu={link.subMenu} />
        ) : (
          <Link
            key={link.name}
            href={link.href}
            className="text-3xl hover:text-purple-900">
            {link.name}
          </Link>
        )
      )}
    </nav>
  );
}

export default Links;
