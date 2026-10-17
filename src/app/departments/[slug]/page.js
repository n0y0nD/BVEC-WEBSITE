import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FacultyCard from "@/components/FacultyCard";
import { ButtonLink, PageHeader, SectionTitle } from "@/components/ui";
import { departments, getDepartment } from "@/data/departments";
import { facultyByDept } from "@/data/faculty";

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

  const team = facultyByDept(dept.code);
  const facts = [
    ["Programme", "B.Tech (4 years)"],
    ["Started", dept.started],
    ["Annual intake", `${dept.intake} students`],
    ["Head of Department", dept.hod],
    ["Faculty members", team.length],
  ];

  return (
    <>
      <PageHeader title={`Department of ${dept.name}`} description={dept.tagline} crumbs={[{ label: "Departments", href: "/departments" }, { label: dept.code }]} />

      <section className="container-page grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1fr_300px]">
        <div>
          <SectionTitle title="About the Department" />
          <div className="mt-6 space-y-4">
            {dept.about.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          {dept.vision && (
            <>
              <h2 className="mt-10 text-2xl font-bold">Vision</h2>
              <blockquote className="mt-4 border-l-4 border-gold-500 bg-slate-50 p-4 italic text-slate-700">{dept.vision}</blockquote>
            </>
          )}

          <h2 className="mt-10 text-2xl font-bold">Mission</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-accent-700">
            {dept.mission.map((m) => (
              <li key={m} className="pl-1">{m}</li>
            ))}
          </ol>

          <h2 className="mt-10 text-2xl font-bold">Areas of Study</h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {dept.focusAreas.map((a) => (
              <li key={a} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-accent-600" aria-hidden /> {a}
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-6">
          <div className="rounded border border-slate-200 bg-white shadow-sm">
            <h2 className="bg-brand-800 px-4 py-3 font-serif text-lg font-semibold text-white">At a Glance</h2>
            <dl className="divide-y divide-slate-100 text-sm">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 px-4 py-2.5">
                  <dt className="text-slate-500">{k}</dt>
                  <dd className="text-right font-semibold text-brand-900">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded border border-slate-200 bg-white shadow-sm">
            <h2 className="bg-brand-800 px-4 py-3 font-serif text-lg font-semibold text-white">Career Paths</h2>
            <ul className="space-y-1.5 p-4 text-sm">
              {dept.careers.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="size-1.5 bg-accent-600" aria-hidden /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded border border-slate-200 bg-brand-50 p-4">
            <p className="text-sm">Admission to the first year is through the Assam CEE; lateral entry to the second year is through JLEE.</p>
            <ButtonLink href="/admissions" variant="accent" className="mt-3 w-full">Admission guide</ButtonLink>
          </div>
        </aside>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container-page">
          <SectionTitle title="Faculty" />
          <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {team.map((f) => (
              <li key={f.email || f.name}>
                <FacultyCard person={f} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="text-lg font-bold">Other Departments</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {departments
            .filter((d) => d.slug !== dept.slug)
            .map((d) => (
              <li key={d.slug}>
                <Link href={`/departments/${d.slug}`} className="inline-flex items-center gap-1 rounded border border-slate-300 px-3 py-2 text-sm font-medium text-brand-800 hover:border-brand-800 hover:bg-brand-50">
                  {d.name} <ArrowRight className="size-3.5" aria-hidden />
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
