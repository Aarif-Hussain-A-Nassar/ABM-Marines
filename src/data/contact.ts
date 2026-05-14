import type { ContactInfoItem } from "@/types";

export const contactInfoItems: ContactInfoItem[] = [
  {
    icon:  "📍",
    label: "Address",
    value: "19/2084-E, Nambiapuram, Palluruthy,\nKochi - 682006, Kerala, India",
  },
  {
    icon:  "📞",
    label: "Phone",
    value: "+91 98460 79833",
    href:  "tel:+919846079833",
  },
  {
    icon:  "✉️",
    label: "Email",
    value: "abmmarineproducts@gmail.com",
    href:  "mailto:abmmarineproducts@gmail.com",
  },
  {
    icon:  "🌐",
    label: "Website",
    value: "www.abmmarine.com",
    href:  "https://www.abmmarine.com",
  },
];

export const WHATSAPP_NUMBER = "919846079833";
export const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_PRESET = `${WHATSAPP_URL}?text=Hello%20ABM%20Marine%20Products%2C%20I'm%20interested%20in%20your%20seafood%20products.`;
