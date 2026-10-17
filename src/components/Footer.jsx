import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import logo from "../../public/images/bvec-logo.png";
import { site } from "@/data/site";
import { departments } from "@/data/departments";

const columns = [
  {
    title: "Quick Links",
    links: [
      { href: "/about", label: "About BVEC" },
      { href: "/administration", label: "Administration" },
      { href: "/admissions", label: "Admissions" },
      { href: "/faculty", label: "Faculty" },
      { href: "/notices", label: "Notices" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    title: "Departments",
    links: departments.map((d) => ({ href: `/departments/${d.slug}`, label: d.name })),
  },
  {
    title: "Important",
    links: [
      { href: "/downloads#aicte", label: "AICTE Approval" },
      { href: "/downloads#rti", label: "Right to Information" },
      { href: "/committees", label: "Committees" },
      { href: "/placements", label: "Training & Placement" },
      { href: site.grievanceFormUrl, label: "Online Grievance", external: true },
      { href: site.libraryUrl, label: "Central Library", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-gold-500 bg-brand-950 text-sm text-brand-100">
      <div className="container-page grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src={logo} alt="" width={56} height={56} className="size-14 rounded-full bg-white p-0.5" />
            <p className="font-serif text-lg font-bold leading-tight text-white">Barak Valley Engineering College</p>
          </div>
          <ul className="mt-5 space-y-3">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {site.address.line2}, {site.address.line3}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
          </ul>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-serif text-base font-semibold text-white">{col.title}</h3>
            <span className="mt-2 block h-0.5 w-10 bg-gold-500" aria-hidden />
            <ul className="mt-4 space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
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
        ))}
      </div>

      <div className="bg-black/30">
        <div className="container-page flex flex-col items-center justify-between gap-1 py-4 text-xs text-brand-200 sm:flex-row">
          <p>© {new Date().getFullYear()} Barak Valley Engineering College, Nirala, Sribhumi. All rights reserved.</p>
          <p>
            Content from{" "}
            <a href="https://www.bvec.ac.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              bvec.ac.in
            </a>{" "}
            · UI/UX project by Nayanjyoti Das
          </p>
        </div>
      </div>
    </footer>
  );
}
