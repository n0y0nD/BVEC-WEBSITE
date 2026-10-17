import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase, CheckCircle2, Clock, GraduationCap, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import DeptIcon from "@/components/DeptIcon";
import { ButtonLink, Card } from "@/components/ui";
import { departments, getDepartment } from "@/data/departments";

export function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dept = getDepartment(slug);
  if (!dept) return {};
  return { title: dept.name, description: dept.summary };
}

export default async function DepartmentPage({ params }) {
  const { slug } = await params;
  const dept = getDepartment(slug);
  if (!dept) notFound();

  const others = departments.filter((d) => d.slug !== dept.slug);
  const facts = [
    { icon: GraduationCap, label: "Degree", value: "B.Tech" },
    { icon: Clock, label: "Duration", value: "4 years · 8 semesters" },
    { icon: Users, label: "Annual intake", value: `${dept.intake} students` },
  ];

  return (
    <>
      <section className={`relative isolate overflow-hidden bg-gradient-to-br ${dept.color} text-white`}>
        <div className="bg-grid absolute inset-0 -z-10 opacity-40" aria-hidden />
        <div className="absolute inset-0 -z-10 bg-slate-950/40" aria-hidden />
        <div className="container-page py-16 sm:py-24">
          <Link href="/departments" className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white">
            <ArrowLeft className="size-4" aria-hidden /> All departments
          </Link>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
            <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
              <DeptIcon name={dept.icon} className="size-8" />
            </span>
            <div>
              <p className="text-sm font-bold tracking-widest text-white/70">DEPARTMENT OF</p>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">{dept.name}</h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-lg text-white/85">{dept.tagline}</p>
        </div>
      </section>

      <section className="container-page relative z-10 -mt-8 grid gap-4 sm:grid-cols-3">
        {facts.map(({ icon: Icon, label, value }) => (
          <Card key={label} className="flex items-center gap-4 shadow-lg">
            <Icon className="size-6 text-brand-600 dark:text-brand-300" aria-hidden />
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
              <p className="font-semibold text-slate-900 dark:text-white">{value}</p>
            </div>
          </Card>
        ))}
      </section>

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">About the department</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{dept.overview}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-14 text-2xl font-bold sm:text-3xl">What you will study</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {dept.focusAreas.map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-slate-900/60">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" aria-hidden />
                  <span className="font-medium text-slate-800 dark:text-slate-200">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <aside className="space-y-6">
          <Card className="p-7">
            <div className="flex items-center gap-2">
              <Briefcase className="size-5 text-brand-600 dark:text-brand-300" aria-hidden />
              <h2 className="text-lg font-bold">Career paths</h2>
            </div>
            <ul className="mt-4 space-y-2.5">
              {dept.careers.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <span className="size-1.5 rounded-full bg-brand-500" aria-hidden /> {c}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="bg-brand-50 p-7 dark:bg-brand-500/10">
            <h2 className="text-lg font-bold">Interested in {dept.code}?</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Admission to the first year is through the Assam CEE. Lateral entry to the second year is through JLEE.
            </p>
            <ButtonLink href="/admissions" className="mt-5 w-full">
              Admission guide <ArrowRight className="size-4" />
            </ButtonLink>
          </Card>
        </aside>
      </section>

      <section className="border-t border-slate-200/80 bg-slate-50 py-16 dark:border-white/10 dark:bg-slate-900/40">
        <div className="container-page">
          <h2 className="text-xl font-bold">Other departments</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((d) => (
              <Link
                key={d.slug}
                href={`/departments/${d.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60"
              >
                <span className={`grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white ${d.color}`}>
                  <DeptIcon name={d.icon} className="size-5" />
                </span>
                <span className="font-semibold text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">{d.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
