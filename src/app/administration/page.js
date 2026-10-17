import { Mail, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Card, PageHeader, SectionHeading } from "@/components/ui";
import { nonTeachingStaff, principal } from "@/data/college";

export const metadata = {
  title: "Administration",
  description: "The Principal, Principal's message and non-teaching staff of Barak Valley Engineering College.",
};

const initials = (name) =>
  name
    .split(" ")
    .filter((w) => /^[A-Z][a-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function AdministrationPage() {
  return (
    <>
      <PageHeader
        title="Administration"
        description="The leadership and office staff who run Barak Valley Engineering College."
        crumbs={[{ label: "Administration" }]}
      />

      <section id="principal" className="container-page grid scroll-mt-24 gap-12 py-20 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <Card className="p-8 text-center lg:sticky lg:top-28">
            <span className="mx-auto grid size-28 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-indigo-600 font-display text-4xl font-bold text-white shadow-xl shadow-brand-600/30">
              KLB
            </span>
            <h2 className="mt-6 text-2xl font-bold">{principal.name}</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-400">{principal.title}</p>
            <a href={`mailto:${principal.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-300">
              <Mail className="size-4" aria-hidden /> {principal.email}
            </a>
            <dl className="mt-8 grid grid-cols-3 gap-2 border-t border-slate-100 pt-6 dark:border-white/10">
              {principal.highlights.map((h) => (
                <div key={h.label}>
                  <dt className="sr-only">{h.label}</dt>
                  <dd className="font-display text-2xl font-extrabold text-brand-600 dark:text-brand-400">{h.value}</dd>
                  <dd className="mt-1 text-xs text-slate-500">{h.label}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </Reveal>
        <Reveal delay={100}>
          <SectionHeading align="left" eyebrow="Principal" title="About the Principal" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {principal.bio.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="message" className="scroll-mt-24 bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="container-page max-w-4xl">
          <SectionHeading eyebrow="From the Principal's desk" title="Principal's message" />
          <Reveal>
            <Card className="relative mt-12 p-8 sm:p-12">
              <Quote className="absolute -top-5 left-8 size-10 rounded-full bg-brand-600 p-2 text-white shadow-lg" aria-hidden />
              <div className="space-y-5 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {principal.message.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
              <p className="mt-8 font-display font-bold text-slate-900 dark:text-white">— {principal.name}</p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section id="staff" className="container-page scroll-mt-24 py-20">
        <SectionHeading eyebrow="Office" title="Non-teaching staff" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nonTeachingStaff.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 60}>
              <Card className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-50 font-display font-bold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                  {initials(s.name)}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-white">{s.name}</p>
                  <p className="text-sm text-slate-500">{s.role}</p>
                  <a href={`mailto:${s.email}`} className="block truncate text-sm text-brand-600 hover:underline dark:text-brand-300">
                    {s.email}
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
