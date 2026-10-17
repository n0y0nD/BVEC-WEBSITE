import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/data/site";
import { departments } from "@/data/departments";

const columns = [
  {
    title: "Explore",
    span: "lg:col-span-2",
    links: [
      { href: "/about", label: "About BVEC" },
      { href: "/admissions", label: "Admissions" },
      { href: "/faculty", label: "Faculty" },
      { href: "/notices", label: "Notices" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Departments",
    span: "lg:col-span-3",
    links: departments.map((d) => ({ href: `/departments/${d.slug}`, label: d.name })),
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-950 text-slate-400">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {site.status}. <span className="text-slate-300">{site.motto}.</span>
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className={col.span}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{col.title}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
              <span>
                {site.address.line2}, {site.address.line3}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">{site.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Barak Valley Engineering College. All rights reserved.</p>
          <p className="text-slate-500">UI/UX project by Nayanjyoti Das.</p>
        </div>
      </div>
    </footer>
  );
}
