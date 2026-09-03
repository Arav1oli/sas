import type { Metadata } from "next";
import { Libre_Caslon_Text, Public_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { JsonLd, attorneyOrgSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Solari & Stock Lawyers - Sutherland Shire Family, Property & Wills Lawyers",
    template: "%s | Solari & Stock Lawyers",
  },
  description:
    "Your local Sutherland Shire law firm, specialising in family law, property law, commercial law and estate law. Based in Miranda.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${caslon.variable} ${publicSans.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={attorneyOrgSchema()} />
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
