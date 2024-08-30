import "./globals.css";

import localFont from "next/font/local";
import type { Metadata } from "next";

const cpmono = localFont({
  src: [
    {
      path: "./cpmono/CPMono_v07_Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./cpmono/CPMono_v07_Black.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./cpmono/CPMono_v07_Plain.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./cpmono/CPMono_v07_Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "literally me",
  description: "literally me joaorceschini",
  keywords: [
    "literally",
    "me",
    "literally me",
    "ryan gosling",
    "bocchi",
    "jesse pinkman",
    "tyler durden",
    "real",
    "cowboy bebop",
    "lain",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cpmono.className} antialiased`}>{children}</body>
    </html>
  );
}
