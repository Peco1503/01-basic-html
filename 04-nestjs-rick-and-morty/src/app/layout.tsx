import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { paths } from "@/config/paths";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick & Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-base text-slate-50`}
      >
        <main>
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}

