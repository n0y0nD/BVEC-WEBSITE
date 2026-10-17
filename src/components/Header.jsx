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
          <div className="hidden shrink-0 flex-col items-end gap-2 lg:flex">
            <Link
              href="/admissions"
              className="rounded bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-700"
            >
              Admissions 2026
            </Link>
            <span className="text-xs text-slate-500">Under DTE, Govt. of Assam</span>
          </div>
        </div>
      </header>

      <Navbar />
      <NewsTicker />
    </>
  );
}
