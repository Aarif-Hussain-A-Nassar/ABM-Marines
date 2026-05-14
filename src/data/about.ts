import type { TimelineItem, HighlightItem } from "@/types";

export const timelineItems: TimelineItem[] = [
  {
    year:  "2004",
    title: "Founded in Kochi",
    desc:  "Established by Mr. P.A. Xavier and three industry veterans near Kochi's fishing harbors, Kerala.",
  },
  {
    year:  "2008",
    title: "First Global Export",
    desc:  "Expanded to international markets, building early partnerships in Europe and the Far East.",
  },
  {
    year:  "2015",
    title: "HACCP & USFDA",
    desc:  "Achieved critical international certifications, unlocking North American and global premium markets.",
  },
  {
    year:  "2024",
    title: "Global Network",
    desc:  "Supplying premium frozen seafood to Europe, USA, Far East, and Australia with trusted consistency.",
  },
];

export const highlights: HighlightItem[] = [
  { icon: "🌊", text: "Kerala Seafood Heritage" },
  { icon: "🏭", text: "Modern Processing Facility" },
  { icon: "🚢", text: "Global Export Network" },
  { icon: "🤝", text: "Direct Fishermen Partnerships" },
];

export const coreValues = ["Quality", "Trust", "Sustainability", "Innovation"] as const;
