import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-semibold text-rick-and-morty-green">Welcome to the Rick and Morty Wiki!</h1>
        <p className="text-lg mt-4">
          This is a wiki for all the characters in the Rick and Morty universe. You can find all the characters in the "All Characters" page and add your favorite characters to the "Favorite Characters" page.
        </p>
        <div className="mt-8 flex justify-center">
          <Image src="/rick-and-morty.jpg" alt="Rick and Morty" width={800} height={450} />
        </div>
      </div>
    </div>
  );
}