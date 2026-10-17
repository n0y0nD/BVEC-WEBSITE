import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Building2,
  FileText,
  FlaskConical,
  Hammer,
  Home,
  GraduationCap,
  Library,
  Megaphone,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";
import logo from "../../public/images/bvec-logo.png";
import Reveal from "@/components/Reveal";
import DeptIcon from "@/components/DeptIcon";
import NoticeItem from "@/components/NoticeItem";
import { ButtonLink, Card, Eyebrow, SectionHeading } from "@/components/ui";
import { site, stats } from "@/data/site";
import { departments } from "@/data/departments";
import { notices } from "@/data/notices";
import { documents, principal } from "@/data/college";

const quickLinks = [
  {
    href: "/admissions",
    icon: GraduationCap,
    title: "Admissions",
    text: "Eligibility, the Assam CEE & JLEE process and the documents you need.",
  },
  {
    href: "/departments",
    icon: Building2,
    title: "Departments",
    text: "Four B.Tech programmes in computing, electronics, civil and mechanical.",
  },
  {
    href: "/notices",
    icon: Megaphone,
    title: "Notices",
    text: "Admission, academic and tender notices, each linked to the official PDF.",
  },
  {
    href: "/faculty",
    icon: Users,
    title: "Faculty",
    text: "Meet the 30+ teachers across the engineering and science departments.",
  },
];

const campus = [
  { icon: Home, title: "Solar-lit hostels", text: "Separate boys' and girls' hostels with 80 seats, solar lighting and 24×7 security." },
  { icon: Library, title: "Central library", text: "In the Civil Engineering building, with an online catalogue and ONOS access." },
  { icon: FlaskConical, title: "Computer centre", text: "A well-equipped computer centre run by CSE for students of every branch." },
  { icon: Hammer, title: "Central workshop", text: "Hands-on experience of basic manufacturing processes for all branches." },
];

const keyDocs = [documents.academic[0], documents.aicte[0], documents.academic[1]];

const highlights = [
  { icon: ShieldCheck, text: "Run by the Directorate of Technical Education, Govt. of Assam" },
  { icon: Award, text: "Approved by AICTE, New Delhi" },
  { icon: BookOpen, text: "Affiliated to Assam Science and Technology University (ASTU)" },
];

export default function HomePage() {
  const latest = notices.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-18 overflow-hidden pt-18">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
        <div className="absolute -left-32 top-10 -z-10 size-[28rem] rounded-full bg-brand-400/25 blur-3xl dark:bg-brand-600/20" aria-hidden />
        <div className="absolute -right-24 bottom-0 -z-10 size-[26rem] rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-600/15" aria-hidden />

        <div className="container-page grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div>
            <Reveal>
              <Eyebrow>
                <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
                First state govt. engineering college of the Barak Valley
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Barak Valley{" "}
                <span className="bg-gradient-to-r from-brand-600 via-indigo-500 to-brand-500 bg-clip-text text-transparent dark:from-brand-300 dark:via-indigo-300 dark:to-brand-400">
                  Engineering
                </span>{" "}
                College
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {site.status}. Nirala, Sribhumi, Assam – 788701.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/departments">
                Explore programmes <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="/admissions" variant="secondary">
                Admission guide
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-6 -z-10 rounded-full bg-gradient-to-br from-brand-500/30 to-indigo-500/30 blur-2xl" aria-hidden />
            <div className="animate-float rounded-[2.5rem] border border-white/60 bg-white/70 p-8 shadow-2xl shadow-brand-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <Image src={logo} alt="BVEC emblem — Minds Towards Innovation, Estd. 2017" className="mx-auto w-full max-w-xs rounded-full bg-white" priority />
              <p className="mt-6 text-center font-display text-lg font-semibold italic text-slate-700 dark:text-slate-200">
                “{site.motto}”
              </p>
            </div>
            <div className="absolute -left-4 top-10 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block dark:border-white/10 dark:bg-slate-900">
              <p className="text-xs text-slate-500">Established</p>
              <p className="font-display text-xl font-bold text-slate-900 dark:text-white">2017</p>
            </div>
            <div className="absolute -bottom-5 -right-4 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:block dark:border-white/10 dark:bg-slate-900">
              <p className="text-xs text-slate-500">B.Tech seats / year</p>
              <p className="font-display text-xl font-bold text-slate-900 dark:text-white">240</p>
            </div>
          </Reveal>
        </div>

        {/* Notice ticker */}
        <div className="border-y border-slate-200/80 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-900/50">
          <div className="container-page flex items-center gap-4 py-3">
            <Link
              href="/notices"
              className="flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white"
            >
              <Megaphone className="size-3.5" aria-hidden /> Latest
            </Link>
            <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
              <div className="animate-marquee flex w-max gap-12 whitespace-nowrap text-sm text-slate-600 hover:[animation-play-state:paused] dark:text-slate-300">
                {[...notices.slice(0, 8), ...notices.slice(0, 8)].map((n, i) => (
                  <a
                    key={`${n.id}-${i}`}
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-700 dark:hover:text-brand-300"
                    aria-hidden={i >= 8}
                    tabIndex={i >= 8 ? -1 : undefined}
                  >
                    {n.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-page py-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-200/80 lg:grid-cols-4 dark:border-white/10 dark:bg-white/10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-white p-6 text-center sm:p-8 dark:bg-slate-950">
              <p className="font-display text-3xl font-extrabold text-brand-600 sm:text-4xl dark:text-brand-400">{s.value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quick access */}
      <section className="container-page pb-24">
        <SectionHeading eyebrow="Quick access" title="Everything you need, in one place" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map(({ href, icon: Icon, title, text }, i) => (
            <Reveal key={href} delay={i * 80}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-brand-500/30"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-300">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-300">
                  Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900/40">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About BVEC"
              title="A government engineering college for the Barak Valley"
              description="The first state government engineering college in the Barak Valley and the fifth in Assam. Set up on the initiative of the Government of Assam in 2009, BVEC began full operation in 2017 on a 60-bigha campus at Nirala."
            />
            <ul className="mt-8 space-y-4">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-brand-600 shadow-sm ring-1 ring-slate-200 dark:bg-white/5 dark:text-brand-300 dark:ring-white/10">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="pt-1 text-slate-700 dark:text-slate-300">{text}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/about" variant="secondary" className="mt-9">
              More about the college <ArrowRight className="size-4" />
            </ButtonLink>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {campus.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <Card className="h-full">
                  <Icon className="size-7 text-brand-600 dark:text-brand-300" aria-hidden />
                  <h3 className="mt-4 text-base font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">{text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="container-page py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Academics"
            title="Four B.Tech programmes"
            description="Each programme runs for four years under ASTU, with 60 seats per branch."
          />
          <ButtonLink href="/departments" variant="secondary" className="shrink-0">
            All departments <ArrowRight className="size-4" />
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((d, i) => (
            <Reveal key={d.slug} delay={i * 80}>
              <Link
                href={`/departments/${d.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/60"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${d.color}`} aria-hidden />
                <div className="flex items-center justify-between">
                  <span className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${d.color}`}>
                    <DeptIcon name={d.icon} className="size-6" />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-slate-400">{d.code}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug">{d.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{d.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 dark:text-white">
                  View department
                  <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Notices + events */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900/40">
        <div className="container-page grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex items-end justify-between gap-4">
              <SectionHeading align="left" eyebrow="Stay updated" title="Latest notices" />
              <Link href="/notices" className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 hover:underline sm:inline-flex dark:text-brand-300">
                View all <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 space-y-3">
              {latest.map((n, i) => (
                <Reveal key={n.id} delay={i * 60}>
                  <NoticeItem notice={n} />
                </Reveal>
              ))}
            </div>
            <ButtonLink href="/notices" variant="secondary" className="mt-6 sm:hidden">
              View all notices
            </ButtonLink>
          </div>

          <div>
            <SectionHeading align="left" eyebrow="Documents" title="Quick downloads" />
            <Card className="mt-8 divide-y divide-slate-100 p-2 dark:divide-white/10">
              {keyDocs.map((d) => (
                <a
                  key={d.url}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl p-4 transition hover:bg-slate-50 dark:hover:bg-white/5"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
                    <FileText className="size-5" aria-hidden />
                  </span>
                  <span className="font-semibold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                    {d.title}
                  </span>
                </a>
              ))}
            </Card>
            <Link href="/downloads" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300">
              All documents <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Principal */}
      <section className="container-page pt-24">
        <Reveal>
          <Card className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
            <span className="grid size-24 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-indigo-600 font-display text-3xl font-bold text-white shadow-xl shadow-brand-600/30">
              KLB
            </span>
            <div>
              <Quote className="size-8 text-brand-300 dark:text-brand-500/50" aria-hidden />
              <p className="mt-3 text-lg leading-relaxed text-slate-700 sm:text-xl dark:text-slate-300">
                At BVEC, we are committed to nurturing competent, innovative, and socially responsible engineers who can
                meet the challenges of an ever-evolving technological world.
              </p>
              <p className="mt-5 font-semibold text-slate-900 dark:text-white">{principal.name}</p>
              <p className="text-sm text-slate-500">Principal, {site.name}</p>
              <Link href="/administration#message" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300">
                Read the full message <ArrowRight className="size-4" />
              </Link>
            </div>
          </Card>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-800 to-indigo-900 px-6 py-16 text-center shadow-2xl shadow-brand-900/20 sm:px-16">
            <div className="bg-grid absolute inset-0 -z-10 opacity-30" aria-hidden />
            <div className="absolute -right-20 -top-20 -z-10 size-72 rounded-full bg-accent-400/30 blur-3xl" aria-hidden />
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to join BVEC?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-brand-100">
              Admission is through Assam CEE for the first year and JLEE for lateral entry. Our admissions guide walks you through every stage.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/admissions" variant="light">
                Start your application <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact the office
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
