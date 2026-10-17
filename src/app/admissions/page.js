import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, ClipboardList, FileCheck2, FileText, GraduationCap, PenLine, School } from "lucide-react";
import NoticeItem from "@/components/NoticeItem";
import Reveal from "@/components/Reveal";
import { ButtonLink, Card, PageHeader, SectionHeading } from "@/components/ui";
import { departments } from "@/data/departments";
import { notices } from "@/data/notices";
import { pmVidyalaxmiUrl } from "@/data/college";

export const metadata = {
  title: "Admissions",
  description: "How to get admission to the B.Tech programmes at BVEC through Assam CEE and JLEE.",
};

const steps = [
  { icon: PenLine, title: "Register for Assam CEE", text: "Apply for the Assam Combined Entrance Examination when the official notification is released." },
  { icon: ClipboardList, title: "Appear for the exam", text: "Take the CEE and check your rank when results are announced." },
  { icon: School, title: "Counselling & choice filling", text: "Take part in centralised counselling and select BVEC and your preferred branch." },
  { icon: FileCheck2, title: "Report to the college", text: "Once a seat is allotted, report to BVEC with your original documents and complete admission." },
];

const routes = [
  {
    icon: GraduationCap,
    title: "First year B.Tech",
    exam: "Assam CEE",
    points: [
      "Passed Class 12 (or equivalent) with Physics and Mathematics, plus Chemistry / Biology / a technical vocational subject.",
      "Minimum marks as per the CEE notification and AICTE norms.",
      "Seats are allotted through counselling based on CEE rank.",
    ],
  },
  {
    icon: ArrowRight,
    title: "Lateral entry (2nd year)",
    exam: "JLEE",
    points: [
      "Diploma in engineering in a relevant branch, or B.Sc. as per the notification.",
      "Admission directly into the third semester.",
      "Seats are allotted through JLEE counselling.",
    ],
  },
];

const documents = [
  "CEE / JLEE admit card and rank card",
  "Seat allotment letter",
  "Class 10 & 12 (or Diploma) mark sheets and certificates",
  "Permanent Residence Certificate (PRC)",
  "Caste certificate (if applicable)",
  "Income certificate (for fee waiver / scholarships, if applicable)",
  "Migration and transfer certificates",
  "Recent passport-size photographs",
];

const faqs = [
  {
    q: "Which programmes can I apply for?",
    a: `BVEC offers B.Tech in ${departments.map((d) => d.name).join(", ")}. Each has 60 seats per year.`,
  },
  {
    q: "Is there a separate entrance test for BVEC?",
    a: "No. First-year admission is only through the Assam Combined Entrance Examination (CEE), and lateral entry is through JLEE.",
  },
  {
    q: "Which university awards the degree?",
    a: "The B.Tech degree is awarded by Assam Science and Technology University (ASTU), Guwahati.",
  },
  {
    q: "Where can I find the exact dates and eligibility?",
    a: "Dates, fees and eligibility can change every year. Always check the official CEE / JLEE notification and the Notices page.",
  },
  {
    q: "Is financial help available?",
    a: "Students can apply for education loans through the Government of India's PM Vidyalaxmi portal. Scholarship notices are posted on the Notices page.",
  },
];

export default function AdmissionsPage() {
  const admissionNotices = notices.filter((n) => n.category === "Admission").slice(0, 5);
  return (
    <>
      <PageHeader
        title="Admissions"
        description="Everything you need to know about joining a B.Tech programme at BVEC — from the entrance exam to your first day on campus."
        crumbs={[{ label: "Admissions" }]}
      />

      <section className="container-page py-20">
        <SectionHeading eyebrow="How it works" title="Four steps to BVEC" />
        <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 90}>
              <Card className="relative h-full pt-10">
                <span className="absolute -top-5 left-6 grid size-10 place-items-center rounded-full bg-brand-600 font-display text-sm font-bold text-white shadow-lg shadow-brand-600/30 ring-4 ring-white dark:ring-slate-950">
                  {i + 1}
                </span>
                <Icon className="size-7 text-brand-600 dark:text-brand-300" aria-hidden />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text}</p>
              </Card>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="container-page">
          <SectionHeading eyebrow="Eligibility" title="Two ways to join" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {routes.map(({ icon: Icon, title, exam, points }, i) => (
              <Reveal key={title} delay={i * 100}>
                <Card className="h-full p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <span className="rounded-full bg-accent-500/10 px-3 py-1 text-xs font-bold text-accent-600 ring-1 ring-accent-500/20 dark:text-accent-400">
                      via {exam}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                  <ul className="mt-5 space-y-3">
                    {points.map((p) => (
                      <li key={p} className="flex gap-3 text-slate-600 dark:text-slate-400">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Eligibility rules are set by the official CEE / JLEE notification each year — please confirm the latest criteria there.
          </p>
        </div>
      </section>

      <section className="container-page max-w-4xl py-20">
        <SectionHeading eyebrow="2026 admissions" title="Latest admission notices" />
        <div className="mt-10 space-y-3">
          {admissionNotices.map((n) => (
            <NoticeItem key={n.id} notice={n} />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold">
          <Link href="/notices" className="inline-flex items-center gap-1 text-brand-600 hover:underline dark:text-brand-300">
            All notices <ArrowRight className="size-4" />
          </Link>
          <a href={pmVidyalaxmiUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-600 hover:underline dark:text-brand-300">
            PM Vidyalaxmi education loans <ArrowUpRight className="size-4" />
          </a>
        </div>
      </section>

      <section className="container-page grid gap-12 border-t border-slate-200/80 py-20 lg:grid-cols-2 dark:border-white/10">
        <div>
          <SectionHeading align="left" eyebrow="Checklist" title="Documents to bring" description="Carry the originals and a set of self-attested photocopies when you report." />
          <ul className="mt-8 grid gap-3">
            {documents.map((d) => (
              <li key={d} className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-900/60">
                <FileText className="size-5 shrink-0 text-brand-600 dark:text-brand-300" aria-hidden />
                <span className="text-slate-700 dark:text-slate-300">{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="FAQ" title="Common questions" />
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 open:shadow-lg open:shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/60"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="size-5 shrink-0 text-slate-400 transition group-open:rotate-180" aria-hidden />
                </summary>
                <p className="mt-3 text-slate-600 dark:text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>
          <Card className="mt-8 bg-brand-50 dark:bg-brand-500/10">
            <h3 className="font-bold">Still have questions?</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">The college office can help with admission queries.</p>
            <ButtonLink href="/contact" className="mt-4">Contact admissions</ButtonLink>
          </Card>
        </div>
      </section>
    </>
  );
}
