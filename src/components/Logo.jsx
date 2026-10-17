import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/bvec-logo.png";

// College emblem with the full name, as shown in the masthead.
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 sm:gap-4" aria-label="Barak Valley Engineering College — home">
      <Image src={logo} alt="" width={76} height={76} className="size-14 shrink-0 sm:size-[76px]" priority />
      <span className="leading-tight">
        <span className="block font-serif text-lg font-bold uppercase tracking-wide text-brand-900 sm:text-2xl lg:text-[1.7rem]">
          Barak Valley Engineering College
        </span>
        <span className="mt-1 block text-xs text-slate-600 sm:text-sm">
          A Govt. of Assam Institution · Approved by AICTE, New Delhi · Affiliated to ASTU
        </span>
        <span className="hidden text-xs text-slate-500 sm:block sm:text-sm">Nirala, Sribhumi, Assam – 788701</span>
      </span>
    </Link>
  );
}
