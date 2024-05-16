import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { paths } from "@/const/paths";

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
      <body className={`${inter.className} bg-white text-base text-slate-50`}>
        <main>
          <nav className="flex items-center justify-between bg-slate-500 px-2 py-2">
            <Link href={paths.character}>
              <img
                src="/assets/title.png"
                alt="Rick and Morty"
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex items-center gap-10">
              <Link href={paths.allCharacters}>All characters</Link>
              <Link href={paths.favoriteCharacters}>Favorite characters</Link>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
