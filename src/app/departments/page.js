import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import DeptIcon from "@/components/DeptIcon";
import { PageHeader } from "@/components/ui";
import { departments } from "@/data/departments";

export const metadata = {
  title: "Departments",
  description: "B.Tech programmes at BVEC: Computer Science, Electronics & Telecommunication, Civil and Mechanical Engineering.",
};

export default function DepartmentsPage() {
  return (
    <>
      <PageHeader
        title="Departments"
        description="Four undergraduate engineering programmes, each a four-year B.Tech under Assam Science and Technology University."
        crumbs={[{ label: "Departments" }]}
      />

      <section className="container-page grid gap-6 py-20 md:grid-cols-2">
        {departments.map((d, i) => (
          <Reveal key={d.slug} delay={(i % 2) * 100}>
            <Link
              href={`/departments/${d.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className={`absolute -right-16 -top-16 size-48 rounded-full bg-gradient-to-br opacity-15 blur-2xl transition group-hover:opacity-30 ${d.color}`} aria-hidden />
              <div className="flex items-start justify-between gap-4">
                <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${d.color}`}>
                  <DeptIcon name={d.icon} className="size-7" />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                  <Users className="size-3.5" aria-hidden /> {d.intake} seats
                </span>
              </div>
              <p className="mt-6 text-xs font-bold tracking-widest text-slate-400">B.TECH · {d.code}</p>
              <h2 className="mt-1 text-2xl font-bold">{d.name}</h2>
              <p className="mt-3 flex-1 text-slate-600 dark:text-slate-400">{d.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {d.focusAreas.slice(0, 3).map((a) => (
                  <li key={a} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10">
                    {a}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-300">
                Explore the department <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
