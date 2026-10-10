import type { Metadata } from "next";
import { Fraunces, Manrope, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hindi = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SLSG Enterprise — Food Carrying Leaf Plates | Made in Araku, India",
  description:
    "Eco-friendly food carrying plates from Araku Valley, Andhra Pradesh by SLSG Enterprise. Pattal, thali plates, buffet trays for shaadi, functions, catering and festivals.",
  openGraph: {
    title: "SLSG Enterprise — Food Carrying Leaf Plates | Made in Araku, India",
    description:
      "Natural leaf plates from Araku by SLSG Enterprise for Indian weddings, buffets, pooja and festivals.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${hindi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
