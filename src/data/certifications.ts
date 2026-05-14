import type { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    abbr:  "BRCGS",
    name:  "Brand Reputation Compliance Global Standards",
    desc:  "One of the world's most recognized global food safety standards, reflecting our commitment to product safety, quality, and operational excellence.",
    color: "var(--cyan-400)",
    icon:  "🏆",
    logo:  "/BRCGS.svg",
  },
  {
    abbr:  "USFDA",
    name:  "US Food & Drug Administration",
    desc:  "Registered with the USFDA, allowing us to export premium seafood products directly to the United States market.",
    color: "var(--blue-400)",
    icon:  "🇺🇸",
    logo:  "/FDA.png",
  },
  {
    abbr:   "BAP",
    name:   "Best Aquaculture Practices",
    desc:   "Certification affirming our commitment to responsible aquaculture — covering environmental, social, food safety, and animal welfare standards.",
    color:  "var(--teal-400)",
    icon:   "🌿",
    logo:   "/Best Aquaculture.svg",
    logoBg: "#0A1628",  // dark navy — needed because the SVG uses white fill
  },
  {
    abbr:  "FSSAI",
    name:  "Food Safety & Standards Authority of India",
    desc:  "India's apex food safety regulator approval ensures we meet all domestic food safety standards before every export.",
    color: "var(--cyan-400)",
    icon:  "🇮🇳",
    logo:  "/fssai.png",
  },
  {
    abbr:  "EIC",
    name:  "Export Inspection Council of India",
    desc:  "Government of India body that certifies our seafood meets international quality and safety standards required for export.",
    color: "var(--blue-400)",
    icon:  "🏅",
    logo:  "/EIC.png",
  },
  {
    abbr:   "HACCP",
    name:   "Hazard Analysis Critical Control Points",
    desc:   "International standard for food safety management — ensuring hazards are identified and controlled throughout the entire supply chain.",
    color:  "var(--teal-400)",
    icon:   "🛡️",
    logo:   "/HACCP.png",
    logoBg: "#0A1628",
  },
];
