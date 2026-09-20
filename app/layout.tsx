import type { Metadata } from "next";
import { Galindo, Poppins, Carlito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const galindo = Galindo({ subsets: ["latin"], weight: "400", variable: "--font-galindo", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });
const carlito = Carlito({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-carlito", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://festival.afrifoodnetwork.com"),
  title: { default: "African Food & Drinks Festival | Celebrating African Food & Culture", template: "%s - African Food & Drinks Festival" },
  description: "The African Food and Drinks Festival is one of the largest gatherings of the biggest African food influencers, bloggers, chefs & thousands of food lovers globally.",
  icons: { icon: "/img/AFN-Logo1.png" },
  openGraph: { siteName: "African Food & Drinks Festival", images: ["/img/Hero-2-scaled.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${galindo.variable} ${poppins.variable} ${carlito.variable}`}>
      <body style={{ ["--font-display" as string]: "var(--font-galindo)", ["--font-body" as string]: "var(--font-carlito)", ["--font-ui" as string]: "var(--font-poppins)" }}>
        <div className="page-frame" aria-hidden />
        <Header />
        <main className="relative z-[2]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
