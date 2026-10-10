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
  icons: {
    icon: [
      { url: "/icon.svg?v=4", type: "image/svg+xml" },
      { url: "/icon-32.png?v=4", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png?v=4", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico?v=4", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png?v=4", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico?v=4",
  },
  openGraph: {
    title: "SLSG Enterprise — Food Carrying Leaf Plates | Made in Araku, India",
    description:
      "Natural leaf plates from Araku by SLSG Enterprise for Indian weddings, buffets, pooja and festivals.",
    type: "website",
    images: [{ url: "/images/slsg-logo.png" }],
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
