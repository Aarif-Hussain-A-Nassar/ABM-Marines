// ── Navigation ────────────────────────────────────────────────────────────────
export interface NavLinkItem {
  href:  string;
  label: string;
}

// ── About ─────────────────────────────────────────────────────────────────────
export interface TimelineItem {
  year:  string;
  title: string;
  desc:  string;
}
export interface HighlightItem {
  icon: string;
  text: string;
}

// ── Expertise ─────────────────────────────────────────────────────────────────
export interface ExpertiseItem {
  iconKey: string;
  title:   string;
  desc:    string;
  color:   string;
}

// ── Quality ───────────────────────────────────────────────────────────────────
export interface QualityStep {
  num:   string;
  title: string;
  desc:  string;
}

// ── Sustainability ────────────────────────────────────────────────────────────
export interface SustainabilityPillar {
  icon:  string;
  title: string;
  desc:  string;
}

// ── Global Reach ──────────────────────────────────────────────────────────────
export interface GlobalStat {
  value: string;
  label: string;
  icon:  string;
}
export interface ExportMarket {
  region:   string;
  flag:     string;
  products: string;
  color:    string;
}

// ── Certifications ────────────────────────────────────────────────────────────
export interface Certification {
  abbr:  string;
  name:  string;
  desc:  string;
  color: string;
  icon:  string;
}

// ── Products ──────────────────────────────────────────────────────────────────
export interface Product {
  id:          string;
  name:        string;
  category:    string;
  type:        "IQF" | "Block Frozen" | "Both";
  description: string;
  sizes?:      string[];
  emoji:       string;
  tags?:       string[];
}

// ── Infrastructure ────────────────────────────────────────────────────────────
export interface InfraItem {
  icon:  string;
  title: string;
  stat:  string;
  desc:  string;
}

// ── Contact ───────────────────────────────────────────────────────────────────
export interface ContactInfoItem {
  icon:   string;
  label:  string;
  value:  string;
  href?:  string;
}

// ── Footer ────────────────────────────────────────────────────────────────────
export interface FooterLink {
  href:  string;
  label: string;
}
export interface FooterMarket {
  region: string;
  flag:   string;
}
