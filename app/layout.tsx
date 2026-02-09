import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Rajdhani } from "next/font/google";

import "./globals.css";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const _rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "RideIndia - Open Motorcycle Community for Indian Riders",
  description:
    "Join India's largest motorcycle community. Share rides, plan group trips, discover breathtaking destinations, and connect with fellow riders across the country.",
  keywords:
    "motorcycle, India, riders, community, Ladakh, Spiti, group rides, Royal Enfield, adventure riding",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${_inter.variable} ${_rajdhani.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
