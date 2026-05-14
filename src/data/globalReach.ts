import type { GlobalStat, ExportMarket } from "@/types";

export const globalStats: GlobalStat[] = [
  { value: "4+",    label: "Export Markets",  icon: "🌍" },
  { value: "20+",   label: "Years of Export", icon: "📅" },
  { value: "100%",  label: "Quality Assured", icon: "✅" },
  { value: "EU",    label: "Approval No.763", icon: "🏅" },
];

export const exportMarkets: ExportMarket[] = [
  { region: "Europe",        flag: "🇪🇺", flagCode: "eu", products: "Cuttlefish, Squid, Octopus, Prawns",    color: "var(--blue-400)" },
  { region: "United States", flag: "🇺🇸", flagCode: "us", products: "Shrimp, Reef Cod, Value-Added Products", color: "var(--cyan-400)" },
  { region: "Far East",      flag: "🌏",  flagCode: "jp", products: "Octopus, Cuttlefish, Tiger Prawns",       color: "var(--teal-400)" },
  { region: "Australia",     flag: "🇦🇺", flagCode: "au", products: "Prawns, Mixed Seafood Packs",             color: "var(--blue-400)" },
];
