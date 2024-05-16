import { paths } from "@/const/paths";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center pt-10">
      <p className="text-black">use the navbar</p>
      <img src="/rick.jpg" alt="Rick" />
    </div>
  );
}
