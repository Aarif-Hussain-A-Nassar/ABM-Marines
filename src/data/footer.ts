import type { FooterLink, FooterMarket } from "@/types";

export const quickLinks: FooterLink[] = [
  { href: "/",               label: "Home" },
  { href: "#about",          label: "About" },
  { href: "#products",       label: "Products" },
  { href: "#sustainability", label: "Commitment" },
  { href: "#infrastructure", label: "Facilities" },
  { href: "#global-reach",  label: "Global" },
  { href: "#certifications", label: "Certs" },
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
