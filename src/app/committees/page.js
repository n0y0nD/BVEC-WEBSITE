import Link from "next/link";
import { ButtonLink, Card, PageHeader, SectionTitle } from "@/components/ui";
import { antiRaggingDoc, grievanceCommittee } from "@/data/college";
import { site } from "@/data/site";

export const metadata = {
  title: "Committees",
  description: "Grievance redressal, anti-ragging and other committees of Barak Valley Engineering College.",
};

export default function CommitteesPage() {
  return (
    <>
      <PageHeader title="Committees" description="Statutory and institutional committees of the college." crumbs={[{ label: "Committees" }]} />

      <section className="container-page py-14">
        <SectionTitle title="Grievance Redressal Committee" subtitle={grievanceCommittee.text} />
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={site.grievanceFormUrl} external variant="accent">Submit a grievance online</ButtonLink>
          <ButtonLink href={grievanceCommittee.order} external variant="outline">Official order (PDF)</ButtonLink>
        </div>
        <div className="mt-8 overflow-x-auto rounded border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-800 text-white">
              <tr>
                <th scope="col" className="w-16 px-4 py-2.5 font-semibold">Sl. No.</th>
                <th scope="col" className="px-4 py-2.5 font-semibold">Name</th>
                <th scope="col" className="px-4 py-2.5 font-semibold">Portfolio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {grievanceCommittee.members.map(([name, role], i) => (
                <tr key={name} className="even:bg-slate-50">
                  <td className="px-4 py-2.5">{i + 1}</td>
                  <td className="px-4 py-2.5 font-medium text-brand-900">{name}</td>
                  <td className="px-4 py-2.5">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">Composition as published on bvec.ac.in.</p>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container-page grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-t-4 border-t-accent-600">
            <h2 className="text-xl font-bold">Anti-Ragging Committee</h2>
            <p className="mt-2">BVEC follows the anti-ragging regulations of AICTE and UGC. Ragging in any form is strictly prohibited.</p>
            <a href={antiRaggingDoc} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-accent-700 hover:underline">
              AICTE & UGC anti-ragging regulations (PDF)
            </a>
          </Card>
          <Card className="border-t-4 border-t-brand-800">
            <h2 className="text-xl font-bold">Training & Placement Cell</h2>
            <p className="mt-2">Coordinates industry MoUs, aptitude training and campus recruitment.</p>
            <Link href="/placements" className="mt-3 inline-block font-semibold text-accent-700 hover:underline">Training & Placement</Link>
          </Card>
          <Card>
            <h2 className="text-xl font-bold">Internal Complaints Committee</h2>
            <p className="mt-2 text-slate-600">Handles complaints of sexual harassment at the workplace. The member list has not yet been published on the official website.</p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold">Governing Body</h2>
            <p className="mt-2 text-slate-600">The apex body overseeing the administration of the college. The member list has not yet been published on the official website.</p>
          </Card>
        </div>
      </section>
    </>
  );
}
