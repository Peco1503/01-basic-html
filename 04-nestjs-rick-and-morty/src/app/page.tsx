import { paths } from "@/const/paths";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center pt-10">
      <p className="px-6 py-4 text-black">
        Welcome to the Rick and Morty Universe, oh yeaaah
      </p>
      <img src="/assets/rick.jpg" alt="Rick" className="h-auto w-1/2" />
    </div>
  );
}
