import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  ClipboardList,
  FileBadge,
  GraduationCap,
  Library,
  MessageSquareWarning,
  ShieldAlert,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import NoticeItem from "@/components/NoticeItem";
import { ButtonLink, Panel, Portrait, SectionTitle } from "@/components/ui";
import { site, stats } from "@/data/site";
import { departments, supportingDepartments } from "@/data/departments";
import { notices } from "@/data/notices";
import { faculty } from "@/data/faculty";
import { aboutText, documents, principal } from "@/data/college";
import { featuredPhotos, heroSlides } from "@/data/gallery";

const quickLinks = [
  { href: "/admissions", icon: GraduationCap, label: "Admissions" },
  { href: documents.academic[0].url, icon: CalendarDays, label: "Academic Calendar", external: true },
  { href: "/downloads#academic", icon: BookOpenCheck, label: "Syllabus & Regulations" },
  { href: documents.aicte[0].url, icon: FileBadge, label: "AICTE Approval", external: true },
  { href: "/committees", icon: ShieldAlert, label: "Anti-Ragging" },
  { href: site.grievanceFormUrl, icon: MessageSquareWarning, label: "Online Grievance", external: true },
  { href: site.libraryUrl, icon: Library, label: "Central Library", external: true },
  { href: "/downloads#rti", icon: ClipboardList, label: "RTI" },
];

const heads = faculty.filter((f) => f.role.includes("HoD"));

export default function HomePage() {
  return (
    <>
      <h1 className="sr-only">Barak Valley Engineering College, Nirala, Sribhumi, Assam</h1>

      {/* Slideshow + notice board */}
      <section className="bg-slate-50 py-6">
        <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
          <div className="aspect-[16/9] lg:aspect-auto">
            <HeroSlider slides={heroSlides} />
          </div>
          <Panel
            title="Notice Board"
            action={
              <Link href="/notices" className="text-xs font-semibold uppercase tracking-wide text-gold-300 hover:text-white">
                View all
              </Link>
            }
            className="lg:h-[440px]"
          >
            <div className="max-h-[360px] flex-1 overflow-y-auto lg:max-h-none">
              {notices.slice(0, 10).map((n) => (
                <NoticeItem key={n.id} notice={n} compact />
              ))}
            </div>
          </Panel>
        </div>
      </section>

      {/* Quick links */}
      <section className="border-y border-slate-200 bg-white">
        <ul className="container-page grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          {quickLinks.map(({ href, icon: Icon, label, external }) => {
            const inner = (
              <>
                <Icon className="size-7 text-accent-600 transition-colors group-hover:text-gold-300" aria-hidden />
                <span className="mt-2 text-center text-sm font-semibold leading-tight">{label}</span>
              </>
            );
            const cls =
              "group flex h-full flex-col items-center justify-center border-slate-200 px-2 py-5 text-brand-900 transition-colors hover:bg-brand-800 hover:text-white";
            return (
              <li key={label} className="border-b border-r border-slate-200 lg:border-b-0 [&:nth-child(8)]:border-r-0">
                {external ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
                ) : (
                  <Link href={href} className={cls}>{inner}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* About + Principal */}
      <section className="py-14">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionTitle title="Welcome to BVEC" />
            <p className="mt-6">{aboutText[0]}</p>
            <p className="mt-4">{aboutText[1]}</p>
            <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded border border-slate-200 bg-slate-200 sm:grid-cols-2">
              {[
                ["Established", "2017 (initiative of 2009)"],
                ["Administered by", "DTE, Government of Assam"],
                ["Approval", "AICTE, New Delhi"],
                ["Affiliation", "Assam Science & Technology University"],
              ].map(([k, v]) => (
                <div key={k} className="bg-white px-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">{k}</dt>
                  <dd className="font-semibold text-brand-900">{v}</dd>
                </div>
              ))}
            </dl>
            <ButtonLink href="/about" variant="outline" className="mt-6">
              Read more about the college <ArrowRight className="size-4" />
            </ButtonLink>
          </div>

          <aside className="rounded border border-slate-200 bg-brand-50/60 p-6">
            <h2 className="text-xl font-bold">From the Principal&apos;s Desk</h2>
            <span className="mt-2 block h-[3px] w-14 bg-accent-600" aria-hidden />
            <div className="mt-5 flex gap-4">
              <Portrait src={principal.photo} name={principal.name} className="h-36 w-28 shrink-0 rounded-sm border-4 border-white shadow" sizes="112px" />
              <div>
                <p className="font-serif text-lg font-bold leading-snug text-brand-900">{principal.name}</p>
                <p className="text-sm text-accent-700">Principal</p>
                <a href={`mailto:${principal.email}`} className="mt-1 block text-sm text-brand-700 hover:underline">
                  {principal.email}
                </a>
              </div>
            </div>
            <blockquote className="mt-5 border-l-[3px] border-gold-500 pl-4 italic text-slate-700">
              “At BVEC, we are committed to nurturing competent, innovative, and socially responsible engineers who can
              meet the challenges of an ever-evolving technological world.”
            </blockquote>
            <Link href="/administration#message" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:underline">
              Read the full message <ArrowRight className="size-4" />
            </Link>
          </aside>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-800 py-10 text-white">
        <dl className="container-page grid grid-cols-2 gap-6 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-white/15 lg:border-r lg:last:border-r-0">
              <dd className="font-serif text-3xl font-bold text-gold-300 sm:text-4xl">{s.value}</dd>
              <dt className="mt-1 text-sm uppercase tracking-wide text-brand-100">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Departments */}
      <section className="py-14">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle title="Academic Departments" subtitle="Four B.Tech programmes under ASTU, each with an annual intake of 60 students." />
            <Link href="/departments" className="inline-flex shrink-0 items-center gap-1 font-semibold text-accent-700 hover:underline">
              All departments <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((d) => {
              const hod = faculty.find((f) => f.dept === d.code && f.role.includes("HoD"));
              return (
                <Link
                  key={d.slug}
                  href={`/departments/${d.slug}`}
                  className="group flex flex-col rounded border border-slate-200 border-t-4 border-t-brand-800 bg-white p-5 shadow-sm transition-colors hover:border-t-accent-600"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-700">Department of</p>
                  <h3 className="mt-1 text-lg font-bold leading-snug group-hover:underline">{d.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-600">{d.summary}</p>
                  <dl className="mt-4 space-y-1 border-t border-slate-100 pt-3 text-sm">
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-500">Intake</dt>
                      <dd className="font-semibold text-brand-900">{d.intake} seats</dd>
                    </div>
                    <div className="flex justify-between gap-2">
                      <dt className="text-slate-500">HoD</dt>
                      <dd className="text-right font-semibold text-brand-900">{hod?.name ?? d.hod}</dd>
                    </div>
                  </dl>
                </Link>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            <span className="font-semibold text-brand-900">Basic Sciences & Humanities: </span>
            {supportingDepartments.map((d) => d.name).join(" · ")}
          </p>
        </div>
      </section>

      {/* Heads of departments */}
      <section className="bg-slate-50 py-14">
        <div className="container-page">
          <SectionTitle title="Heads of Departments" align="center" />
          <ul className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {heads.map((h) => (
              <li key={h.email} className="text-center">
                <Portrait src={h.photo} name={h.name} className="mx-auto aspect-square w-32 rounded-full border-4 border-white shadow" sizes="128px" />
                <p className="mt-3 font-serif font-bold leading-snug text-brand-900">{h.name}</p>
                <p className="text-xs text-slate-600">
                  {h.dept === "BSH" ? h.area : departments.find((d) => d.code === h.dept)?.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <ButtonLink href="/faculty" variant="outline">Meet all faculty</ButtonLink>
          </div>
        </div>
      </section>

      {/* Campus life */}
      <section className="py-14">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionTitle title="Campus Life" subtitle="Celebrations, cultural programmes, sports and green-campus activities." />
            <Link href="/gallery" className="inline-flex shrink-0 items-center gap-1 font-semibold text-accent-700 hover:underline">
              Photo gallery <ArrowRight className="size-4" />
            </Link>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {featuredPhotos.map((p) => (
              <li key={p.src} className="group relative aspect-[4/3] overflow-hidden rounded bg-slate-100">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-brand-950/75 px-3 py-2 text-xs text-white sm:text-sm">{p.alt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Admissions call-out */}
      <section className="bg-accent-700 py-10 text-white">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Admissions</h2>
            <p className="mt-2 max-w-2xl text-accent-50">
              First-year admission is through the Assam CEE and lateral entry through JLEE, via DTE Assam counselling.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/admissions" variant="light">Admission guide</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">Contact the office</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
