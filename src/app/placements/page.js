import { Building, Handshake, Mail, TrendingUp, Trophy } from "lucide-react";
import Reveal from "@/components/Reveal";
import { ButtonLink, Card, PageHeader, SectionHeading } from "@/components/ui";
import { placement } from "@/data/college";

export const metadata = {
  title: "Training & Placement",
  description: "Placement record, recruiters and industry MoUs of Barak Valley Engineering College.",
};

export default function PlacementsPage() {
  const stats = [
    { icon: Trophy, value: placement.highest, label: "Highest package" },
    { icon: TrendingUp, value: placement.average, label: "Average package every year" },
    { icon: Handshake, value: `${placement.mous.length}+`, label: "Industry MoUs" },
  ];

  return (
    <>
      <PageHeader
        title="Training & Placement"
        description="Helping students become industry ready through training, mentoring and campus recruitment."
        crumbs={[{ label: "Training & Placement" }]}
      />

      <section className="container-page py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <Card className="h-full text-center">
                <Icon className="mx-auto size-7 text-brand-600 dark:text-brand-300" aria-hidden />
                <p className="mt-4 font-display text-3xl font-extrabold text-slate-900 dark:text-white">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-12 pb-20 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <SectionHeading align="left" eyebrow="Training & Placement Cell" title="Preparing the leaders of tomorrow" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {placement.about.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <a href={`mailto:${placement.email}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-600 hover:underline dark:text-brand-300">
            <Mail className="size-4" aria-hidden /> {placement.email}
          </a>
        </Reveal>
        <div className="space-y-6">
          <Card className="p-7">
            <div className="flex items-center gap-2">
              <Building className="size-5 text-brand-600 dark:text-brand-300" aria-hidden />
              <h2 className="text-lg font-bold">Recruiters include</h2>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {placement.recruiters.map((r) => (
                <li key={r} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">{r}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-7">
            <div className="flex items-center gap-2">
              <Handshake className="size-5 text-brand-600 dark:text-brand-300" aria-hidden />
              <h2 className="text-lg font-bold">MoUs with</h2>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {placement.mous.map((r) => (
                <li key={r} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">{r}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Aptitude and interview mentoring with T.I.M.E.</p>
          </Card>
          <Card className="bg-brand-50 p-7 dark:bg-brand-500/10">
            <h2 className="text-lg font-bold">Explore the programmes</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">See what each department teaches and the careers it leads to.</p>
            <ButtonLink href="/departments" className="mt-5 w-full">Departments</ButtonLink>
          </Card>
        </div>
      </section>
    </>
  );
}
