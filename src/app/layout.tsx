import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABM Marine — Premier Marine Services Worldwide",
  description:
    "ABM Marine provides world-class marine services including ship chandelling, crew management, technical services, and logistics to the global shipping industry.",
  keywords: "marine services, ship chandelling, crew management, ship agency, marine logistics, ABM Marine",
  openGraph: {
    title: "ABM Marine — Premier Marine Services Worldwide",
    description: "Your trusted partner for comprehensive marine services delivered globally.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
