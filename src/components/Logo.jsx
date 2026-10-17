import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/bvec-logo.png";

export default function Logo({ inverted = false }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="BVEC home">
      <span className="relative grid size-11 place-items-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 transition group-hover:scale-105 dark:ring-white/10">
        <Image src={logo} alt="" width={40} height={40} className="size-10" priority />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-extrabold tracking-tight ${inverted ? "text-white" : "text-slate-900 dark:text-white"}`}>
          BVEC
        </span>
        <span className={`block text-[11px] font-medium ${inverted ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>
          Barak Valley Engineering College
        </span>
      </span>
    </Link>
  );
}
