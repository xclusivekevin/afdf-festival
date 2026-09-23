import type { Metadata } from "next";
import { Galindo, Poppins, Carlito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const galindo = Galindo({ subsets: ["latin"], weight: "400", variable: "--font-galindo", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const carlito = Carlito({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-carlito", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://festival.afrifoodnetwork.com"),
  title: { default: "African Food & Drinks Festival | Celebrating African Food & Culture", template: "%s - African Food & Drinks Festival" },
  description: "The African Food and Drinks Festival is one of the largest gatherings of the biggest African food influencers, bloggers, chefs & thousands of food lovers globally.",
  alternates: { canonical: "./" },
  icons: { icon: "/img/AFN-Logo1.png" },
  openGraph: { type: "website", locale: "en_GB", url: "./", siteName: "African Food & Drinks Festival" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${galindo.variable} ${poppins.variable} ${carlito.variable}`}>
      <body style={{ ["--font-display" as string]: "var(--font-galindo)", ["--font-body" as string]: "var(--font-carlito)", ["--font-ui" as string]: "var(--font-poppins)" }}>
        <div className="page-frame" aria-hidden />
        <StructuredData />
        <Header />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
