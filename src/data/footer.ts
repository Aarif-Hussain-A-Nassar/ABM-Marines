import type { FooterLink, FooterMarket } from "@/types";

export const quickLinks: FooterLink[] = [
  { href: "#about",          label: "About Us" },
  { href: "#expertise",      label: "Our Expertise" },
  { href: "#quality",        label: "Quality Control" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#global-reach",  label: "Global Reach" },
  { href: "#products",       label: "Products" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#contact",        label: "Contact" },
];

export const footerProducts: FooterLink[] = [
  { href: "#products", label: "Tiger Prawns" },
  { href: "#products", label: "Vannamei Shrimp" },
  { href: "#products", label: "Cuttlefish" },
  { href: "#products", label: "Squid" },
  { href: "#products", label: "Octopus" },
  { href: "#products", label: "Reef Cod (Grouper)" },
];

export const footerMarkets: FooterMarket[] = [
  { region: "Europe",        flag: "🇪🇺" },
  { region: "United States", flag: "🇺🇸" },
  { region: "Far East",      flag: "🌏" },
  { region: "Australia",     flag: "🇦🇺" },
];

export const footerCerts = ["HACCP", "USFDA", "BRCGS", "FSSAI", "EU Approved", "BAP"];

export const brandValues = ["Quality", "Trust", "Sustainability", "Innovation"];
