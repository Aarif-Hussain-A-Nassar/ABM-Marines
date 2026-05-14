import type { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    abbr:  "HACCP",
    name:  "Hazard Analysis Critical Control Points",
    desc:  "International standard for food safety management — ensuring risks are identified and controlled throughout the supply chain.",
    color: "var(--cyan-400)",
    icon:  "🛡️",
  },
  {
    abbr:  "USFDA",
    name:  "US Food & Drug Administration",
    desc:  "Registered with the USFDA, allowing us to export premium seafood products directly to the United States market.",
    color: "var(--blue-400)",
    icon:  "🇺🇸",
  },
  {
    abbr:  "BRCGS",
    name:  "Brand Reputation Compliance Global Stds",
    desc:  "One of the most recognized global food safety standards, reflecting our commitment to product safety, quality, and operational criteria.",
    color: "var(--teal-400)",
    icon:  "🏆",
  },
  {
    abbr:  "FSSAI",
    name:  "Food Safety & Standards Authority India",
    desc:  "India's apex food safety regulator approval ensures we meet all domestic food safety standards before export.",
    color: "var(--cyan-400)",
    icon:  "🇮🇳",
  },
  {
    abbr:  "EU Approved",
    name:  "European Union Approval No. 763",
    desc:  "EU market approval enabling us to supply seafood products to all member states of the European Union.",
    color: "var(--blue-400)",
    icon:  "🇪🇺",
  },
  {
    abbr:  "BAP",
    name:  "Best Aquaculture Practices",
    desc:  "Certification affirming our commitment to responsible aquaculture including environmental, social, food safety, and animal welfare standards.",
    color: "var(--teal-400)",
    icon:  "🌿",
  },
];
