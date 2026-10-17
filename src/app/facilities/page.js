import { ArrowUpRight, CheckCircle2, HeartPulse, Library, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import DocList from "@/components/DocList";
import { Card, PageHeader, SectionHeading } from "@/components/ui";
import { hostel } from "@/data/college";
import { site } from "@/data/site";

export const metadata = {
  title: "Hostels & Library",
  description: "Hostels, central library and health centre at Barak Valley Engineering College.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Hostels & Library"
        description="Life on a green, 60-bigha campus surrounded by hillocks and water bodies."
        crumbs={[{ label: "Hostels & Library" }]}
      />

      <section id="hostels" className="container-page grid scroll-mt-24 gap-12 py-20 lg:grid-cols-2">
        <Reveal>
          <SectionHeading align="left" eyebrow="Hostels" title={`${hostel.seats} seats, two in-campus hostels`} />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {hostel.text.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <a href={`mailto:${hostel.email}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-600 hover:underline dark:text-brand-300">
            <Mail className="size-4" aria-hidden /> {hostel.email}
          </a>
        </Reveal>
        <Reveal delay={100}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {hostel.features.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-slate-900/60">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" aria-hidden />
                <span className="font-medium text-slate-800 dark:text-slate-200">{f}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 text-lg font-bold">Hostel documents</h3>
          <div className="mt-4">
            <DocList items={hostel.documents} />
          </div>
        </Reveal>
      </section>

      <section id="library" className="scroll-mt-24 bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-600 text-white">
                <Library className="size-6" aria-hidden />
              </span>
              <h2 className="mt-6 text-2xl font-bold">Central library</h2>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                The Central Library is in the Civil Engineering building. Its website has the online catalogue and access
                to One Nation One Subscription (ONOS) resources.
              </p>
              <a
                href={site.libraryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Visit the library website <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-rose-500 text-white">
                <HeartPulse className="size-6" aria-hidden />
              </span>
              <h2 className="mt-6 text-2xl font-bold">Health centre</h2>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                A health centre on campus provides basic medical support. Each hostel also has its own two-bed sick room.
              </p>
            </Card>
          </Reveal>
        </div>
      </section>
    </>
  );
}
