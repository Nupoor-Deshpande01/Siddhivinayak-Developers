import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Siddhivinayak Developers | Luxury Real Estate Builder",
  description: "Experience premium architectural masterpieces and bespoke residential estates by Siddhivinayak Developers, a benchmark of trust and design excellence.",
  keywords: ["Siddhivinayak Developers", "Luxury Real Estate", "Pune Builder", "Premium Apartments", "Villa Estates"],
  authors: [{ name: "Siddhivinayak Developers" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${cormorantGaramond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
