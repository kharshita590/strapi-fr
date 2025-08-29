import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagar Palika",
  description: "Sironj Nagar Palika",
  openGraph: {
    title: "Nagar Palika",
    description: "Sironj Nagar Palika official website",
    // url: "https://your-domain.com", 
    siteName: "Nagar Palika",
    images: [
      {
        url: "/images/logo.png", 
        width: 1200,
        height: 630,
        alt: "Nagar Palika",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagar Palika",
    description: "Sironj Nagar Palika official website",
    images: ["/images/logo.png"], 
  },
};
