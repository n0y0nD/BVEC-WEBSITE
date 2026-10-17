import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import NoticeItem from "@/components/NoticeItem";
import { ButtonLink, Card, PageHeader, Panel, SectionTitle } from "@/components/ui";
import { departments } from "@/data/departments";
import { notices } from "@/data/notices";
import { pmVidyalaxmiUrl } from "@/data/college";

export const metadata = {
  title: "Admissions",
  description: "How to get admission to the B.Tech programmes at BVEC through Assam CEE and JLEE.",
};

const steps = [
  ["Register for Assam CEE", "Apply for the Assam Combined Entrance Examination when the official notification is released."],
  ["Appear for the exam", "Take the CEE and check your rank when results are announced."],
  ["Counselling & choice filling", "Take part in DTE Assam counselling and select BVEC and your preferred branch."],
  ["Report to the college", "Once a seat is allotted, report to BVEC with your original documents and complete admission."],
];

const routes = [
  {
    title: "First Year B.Tech — via Assam CEE",
    points: [
      "Passed Class 12 (or equivalent) with Physics and Mathematics, plus Chemistry / Biology / a technical vocational subject.",
      "Minimum marks as per the CEE notification and AICTE norms.",
      "Seats are allotted through counselling based on CEE rank.",
    ],
  },
  {
    title: "Lateral Entry (2nd Year) — via JLEE",
    points: [
      "Diploma in engineering in a relevant branch, or B.Sc. as per the notification.",
      "Admission directly into the third semester.",
      "Seats are allotted through JLEE counselling.",
    ],
  },
];

const documentsList = [
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
  ["Is there a separate entrance test for BVEC?", "No. First-year admission is only through the Assam CEE, and lateral entry is through JLEE."],
  ["Which university awards the degree?", "The B.Tech degree is awarded by Assam Science and Technology University (ASTU), Guwahati."],
  ["Where can I find the exact dates and eligibility?", "Dates, fees and eligibility can change every year. Always check the official CEE / JLEE notification and the Notices page."],
  ["Is financial help available?", "Students can apply for education loans through the Government of India's PM Vidyalaxmi portal. Scholarship notices are posted on the Notices page."],
];

export default function AdmissionsPage() {
  const admissionNotices = notices.filter((n) => n.category === "Admission").slice(0, 6);
  return (
    <>
      <PageHeader title="Admissions" description="How to join a B.Tech programme at Barak Valley Engineering College." crumbs={[{ label: "Admissions" }]} />

      <section className="container-page grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1fr_360px]">
        <div>
          <SectionTitle title="Admission Procedure" />
          <ol className="mt-8 space-y-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="grid grid-cols-1 size-10 shrink-0 place-items-center rounded-full bg-brand-800 font-serif font-bold text-white">{i + 1}</span>
                <div>
                  <p className="font-serif text-lg font-bold text-brand-900">{t}</p>
                  <p className="text-slate-600">{d}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 text-2xl font-bold">Seat Intake</h2>
          <div className="mt-4 overflow-x-auto rounded border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-800 text-white">
                <tr>
                  <th scope="col" className="px-4 py-2.5 font-semibold">Programme</th>
                  <th scope="col" className="px-4 py-2.5 font-semibold">Duration</th>
                  <th scope="col" className="px-4 py-2.5 text-right font-semibold">Seats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {departments.map((d) => (
                  <tr key={d.slug} className="even:bg-slate-50">
                    <td className="px-4 py-2.5">
                      <Link href={`/departments/${d.slug}`} className="font-medium text-brand-800 hover:underline">B.Tech in {d.name}</Link>
                    </td>
                    <td className="px-4 py-2.5">4 years</td>
                    <td className="px-4 py-2.5 text-right font-semibold">{d.intake}</td>
                  </tr>
                ))}
                <tr className="bg-brand-50 font-semibold">
                  <td className="px-4 py-2.5" colSpan={2}>Total</td>
                  <td className="px-4 py-2.5 text-right">{departments.reduce((s, d) => s + d.intake, 0)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Panel
          title="Admission Notices"
          action={<Link href="/notices" className="text-xs font-semibold uppercase tracking-wide text-gold-300 hover:text-white">All</Link>}
          className="self-start"
        >
          {admissionNotices.map((n) => (
            <NoticeItem key={n.id} notice={n} compact />
          ))}
        </Panel>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container-page">
          <SectionTitle title="Eligibility" />
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {routes.map((r) => (
              <Card key={r.title} className="border-t-4 border-t-brand-800">
                <h3 className="text-xl font-bold">{r.title}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-accent-600">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-500">Eligibility rules are set by the official CEE / JLEE notification each year — please confirm the latest criteria there.</p>
        </div>
      </section>

      <section className="container-page grid grid-cols-1 gap-12 py-14 lg:grid-cols-2">
        <div>
          <SectionTitle title="Documents Required" subtitle="Carry the originals and a set of self-attested photocopies when you report." />
          <ul className="mt-6 rounded border border-slate-200">
            {documentsList.map((d) => (
              <li key={d} className="flex items-center gap-3 border-b border-slate-200 px-4 py-2.5 last:border-b-0">
                <FileText className="size-4 shrink-0 text-accent-600" aria-hidden /> {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle title="Frequently Asked Questions" />
          <div className="mt-6 divide-y divide-slate-200 rounded border border-slate-200">
            {faqs.map(([q, a]) => (
              <details key={q} className="group px-4 py-3">
                <summary className="cursor-pointer list-none font-semibold text-brand-900 [&::-webkit-details-marker]:hidden">
                  <span className="mr-2 inline-block text-accent-600 transition-transform group-open:rotate-90">›</span>
                  {q}
                </summary>
                <p className="mt-2 pl-4 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={pmVidyalaxmiUrl} external variant="outline">PM Vidyalaxmi education loans</ButtonLink>
            <ButtonLink href="/contact">Contact the office <ArrowRight className="size-4" /></ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
