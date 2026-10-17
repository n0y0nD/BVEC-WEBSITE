import { Mail } from "lucide-react";
import { ButtonLink, Card, PageHeader, SectionTitle } from "@/components/ui";
import { placement } from "@/data/college";

export const metadata = {
  title: "Training & Placement",
  description: "Placement record, recruiters and industry MoUs of Barak Valley Engineering College.",
};

export default function PlacementsPage() {
  const stats = [
    [placement.highest, "Highest package"],
    [placement.average, "Average package every year"],
    [`${placement.mous.length}+`, "Industry MoUs"],
  ];

  return (
    <>
      <PageHeader title="Training & Placement" description="Training, mentoring and campus recruitment at BVEC." crumbs={[{ label: "Training & Placement" }]} />

      <section className="bg-brand-800 py-8 text-white">
        <dl className="container-page grid grid-cols-1 gap-6 text-center sm:grid-cols-3">
          {stats.map(([v, l]) => (
            <div key={l}>
              <dd className="font-serif text-3xl font-bold text-gold-300">{v}</dd>
              <dt className="mt-1 text-sm uppercase tracking-wide text-brand-100">{l}</dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <SectionTitle title="Training & Placement Cell" />
          <div className="mt-6 space-y-4">
            {placement.about.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <p className="mt-6 font-semibold text-brand-900">Training & Placement Office</p>
          <a href={`mailto:${placement.email}`} className="inline-flex items-center gap-2 text-brand-700 hover:underline">
            <Mail className="size-4" aria-hidden /> {placement.email}
          </a>
        </div>
        <div className="space-y-6">
          <Card className="border-t-4 border-t-brand-800">
            <h2 className="text-lg font-bold">Recruiters Include</h2>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {placement.recruiters.map((r) => (
                <li key={r} className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-center font-semibold text-brand-900">{r}</li>
              ))}
            </ul>
          </Card>
          <Card className="border-t-4 border-t-accent-600">
            <h2 className="text-lg font-bold">Memoranda of Understanding</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 marker:text-accent-600">
              {placement.mous.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-slate-600">Aptitude and interview mentoring with T.I.M.E.</p>
          </Card>
          <ButtonLink href="/departments" variant="outline" className="w-full">Explore the programmes</ButtonLink>
        </div>
      </section>
    </>
  );
}
