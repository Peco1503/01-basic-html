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
          <nav className="flex items-center justify-between bg-black px-2 py-2">
            <Link href={paths.home}>
              <img
                src="/assets/title.png"
                alt="Rick and Morty"
                className="h-8 w-auto md:h-10 lg:h-12 xl:h-14"
              />
            </Link>
            <div className="flex items-center gap-10">
              <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800">
                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                  <Link
                    href={paths.allCharacters}
                    className="text-rick-and-morty-green font-creepster"
                  >
                    All Characters
                  </Link>
                </span>
              </button>
              <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-purple-200 group-hover:from-purple-500 group-hover:to-pink-500 dark:text-white dark:focus:ring-purple-800">
                <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                  <Link
                    href={paths.favoriteCharacters}
                    className="text-rick-and-morty-green font-creepster"
                  >
                    Favorite Characters
                  </Link>
                </span>
              </button>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
