import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Jost } from 'next/font/google';


const jost = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harmony",
  description: "The music in your skin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
