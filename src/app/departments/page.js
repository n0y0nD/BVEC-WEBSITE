import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, PageHeader, SectionTitle } from "@/components/ui";
import { departments, supportingDepartments } from "@/data/departments";
import { facultyByDept } from "@/data/faculty";

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

      <section className="container-page py-14">
        <SectionTitle title="Engineering Departments" />
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {departments.map((d) => (
            <Link
              key={d.slug}
              href={`/departments/${d.slug}`}
              className="group flex flex-col rounded border border-slate-200 border-t-4 border-t-brand-800 bg-white p-6 shadow-sm transition-colors hover:border-t-accent-600"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-accent-700">Department of</p>
              <h2 className="mt-1 text-2xl font-bold group-hover:underline">{d.name}</h2>
              <p className="mt-3 flex-1 text-slate-600">{d.summary}</p>
              <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-sm">
                <div>
                  <dt className="text-slate-500">Started</dt>
                  <dd className="font-semibold text-brand-900">{d.started}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Intake</dt>
                  <dd className="font-semibold text-brand-900">{d.intake} seats</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Faculty</dt>
                  <dd className="font-semibold text-brand-900">{facultyByDept(d.code).length}</dd>
                </div>
              </dl>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                Visit department <ArrowRight className="size-4" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container-page">
          <SectionTitle title="Basic Sciences & Humanities" subtitle="These departments teach students of every branch, mainly in the first year." />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportingDepartments.map((d) => (
              <Card key={d.name} className="border-t-4 border-t-gold-500">
                <h3 className="text-lg font-bold">{d.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{d.text}</p>
                <p className="mt-4 text-xs text-slate-500">
                  Since {d.started}
                  {d.hod && <> · HoD: {d.hod}</>}
                </p>
              </Card>
            ))}
          </div>
          <Link href="/faculty" className="mt-6 inline-flex items-center gap-1 font-semibold text-accent-700 hover:underline">
            See the faculty of these departments <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
