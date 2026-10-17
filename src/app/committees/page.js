import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, MessageSquareWarning, ShieldAlert, Users, Landmark, Briefcase } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Card, PageHeader, SectionHeading } from "@/components/ui";
import { antiRaggingDoc, grievanceCommittee } from "@/data/college";
import { site } from "@/data/site";

export const metadata = {
  title: "Committees",
  description: "Grievance redressal, anti-ragging and other committees of Barak Valley Engineering College.",
};

const others = [
  {
    icon: ShieldAlert,
    title: "Anti-Ragging Committee",
    text: "BVEC follows the anti-ragging regulations of AICTE and UGC. Ragging in any form is strictly prohibited.",
    link: { label: "AICTE & UGC regulations (PDF)", href: antiRaggingDoc, external: true },
  },
  {
    icon: Users,
    title: "Internal Complaints Committee",
    text: "Handles complaints of sexual harassment at the workplace. The member list has not yet been published on the official website.",
  },
  {
    icon: Landmark,
    title: "Governing Body",
    text: "The apex body overseeing the administration of the college. The member list has not yet been published on the official website.",
  },
  {
    icon: Briefcase,
    title: "Training & Placement Cell",
    text: "Coordinates industry MoUs, aptitude training and campus recruitment.",
    link: { label: "Training & Placement", href: "/placements" },
  },
];

export default function CommitteesPage() {
  return (
    <>
      <PageHeader
        title="Committees"
        description="Statutory and institutional committees that support students and staff."
        crumbs={[{ label: "Committees" }]}
      />

      <section className="container-page py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Grievance redressal"
            title="Grievance Redressal Committee"
            description={grievanceCommittee.text}
          />
          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={site.grievanceFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
            >
              <MessageSquareWarning className="size-4" aria-hidden /> Submit a grievance online
            </a>
            <a
              href={grievanceCommittee.order}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-50 dark:bg-white/5 dark:text-white dark:ring-white/15"
            >
              <FileText className="size-4" aria-hidden /> Official order
            </a>
          </div>
        </div>
        <Reveal>
          <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200/80 bg-white dark:border-white/10 dark:bg-slate-900/60">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 dark:bg-white/5">
                <tr>
                  <th scope="col" className="px-6 py-3">#</th>
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Portfolio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/10">
                {grievanceCommittee.members.map(([name, role], i) => (
                  <tr key={name}>
                    <td className="px-6 py-3 text-slate-400">{i + 1}</td>
                    <td className="px-6 py-3 font-medium text-slate-900 dark:text-white">{name}</td>
                    <td className="px-6 py-3">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p className="mt-3 text-xs text-slate-500">Composition as published on bvec.ac.in.</p>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="container-page">
          <SectionHeading eyebrow="More" title="Other committees" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {others.map(({ icon: Icon, title, text, link }, i) => (
              <Reveal key={title} delay={i * 80}>
                <Card className="h-full p-7">
                  <Icon className="size-7 text-brand-600 dark:text-brand-300" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text}</p>
                  {link &&
                    (link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300">
                        {link.label} <ArrowUpRight className="size-4" aria-hidden />
                      </a>
                    ) : (
                      <Link href={link.href} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300">
                        {link.label} <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    ))}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
