import { Mail } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NewsTicker from "./NewsTicker";
import { site } from "@/data/site";

const topLinks = [
  { href: "/downloads#aicte", label: "AICTE Approval" },
  { href: "/committees", label: "Anti-Ragging" },
  { href: "/downloads#rti", label: "RTI" },
  { href: site.grievanceFormUrl, label: "Grievance", external: true },
  { href: site.libraryUrl, label: "Library", external: true },
];

export default function Header() {
  return (
    <>
      {/* Utility bar */}
      <div className="bg-brand-950 text-xs text-brand-100">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5">
          <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
            <Mail className="size-3.5" aria-hidden /> {site.email}
          </a>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {topLinks.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                    {l.label}
                  </a>
                ) : (
                  <Link href={l.href} className="hover:text-white hover:underline">{l.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Masthead */}
      <header className="border-b-4 border-gold-500 bg-white">
        <div className="container-page flex items-center justify-between gap-6 py-4">
          <Logo />
          <div className="hidden shrink-0 border-l border-slate-200 pl-6 text-right lg:block">
            <p className="font-serif text-lg italic text-accent-700">“Minds Towards Innovation”</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Estd. 2017</p>
            <p className="mt-0.5 text-xs text-slate-500">Under DTE, Govt. of Assam</p>
          </div>
        </div>
      </header>

      <Navbar />
      <NewsTicker />
    </>
  );
}
