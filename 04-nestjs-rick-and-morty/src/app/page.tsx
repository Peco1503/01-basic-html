import { paths } from "@/const/paths";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center pt-10">
      <p className="mb-20 text-black">use the navbar</p>
      <img src="/assets/rick.jpg" alt="Rick" className="h-auto w-1/2" />
    </div>
  );
}
