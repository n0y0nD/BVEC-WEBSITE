import { Mail } from "lucide-react";
import { Card, PageHeader, Portrait, SectionTitle } from "@/components/ui";
import { nonTeachingStaff, principal } from "@/data/college";

export const metadata = {
  title: "Administration",
  description: "The Principal, Principal's message and non-teaching staff of Barak Valley Engineering College.",
};

export default function AdministrationPage() {
  return (
    <>
      <PageHeader title="Administration" description="The leadership and office staff of Barak Valley Engineering College." crumbs={[{ label: "Administration" }]} />

      <section id="principal" className="container-page grid grid-cols-1 scroll-mt-16 gap-10 py-14 lg:grid-cols-[280px_1fr]">
        <div>
          <Portrait src={principal.photo} name={principal.name} className="aspect-[4/5] w-full max-w-[280px] rounded border border-slate-200 shadow-sm" sizes="280px" />
          <div className="mt-4 border-l-4 border-accent-600 pl-4">
            <p className="font-serif text-xl font-bold text-brand-900">{principal.name}</p>
            <p className="text-accent-700">Principal</p>
            <a href={`mailto:${principal.email}`} className="mt-1 inline-flex items-center gap-1.5 text-sm text-brand-700 hover:underline">
              <Mail className="size-4" aria-hidden /> {principal.email}
            </a>
          </div>
        </div>
        <div>
          <SectionTitle title="The Principal" />
          <div className="mt-6 space-y-4">
            {principal.bio.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <dl className="mt-8 grid grid-cols-3 divide-x divide-slate-200 rounded border border-slate-200 bg-slate-50 text-center">
            {principal.highlights.map((h) => (
              <div key={h.label} className="px-2 py-4">
                <dd className="font-serif text-2xl font-bold text-brand-800">{h.value}</dd>
                <dt className="mt-1 text-xs text-slate-600">{h.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="message" className="scroll-mt-16 bg-slate-50 py-14">
        <div className="container-page max-w-4xl">
          <SectionTitle title="Principal's Message" />
          <Card className="mt-8 border-l-4 border-l-gold-500 p-8">
            <div className="space-y-4 text-lg leading-relaxed text-slate-700">
              {principal.message.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-serif font-bold text-brand-900">— {principal.name}</p>
            <p className="text-sm text-slate-500">Principal, Barak Valley Engineering College</p>
          </Card>
        </div>
      </section>

      <section id="staff" className="container-page scroll-mt-16 py-14">
        <SectionTitle title="Non-Teaching Staff" />
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {nonTeachingStaff.map((s) => (
            <li key={s.name} className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <Portrait src={s.photo} name={s.name} className="aspect-[4/5] w-full" sizes="(min-width: 1024px) 240px, 50vw" />
              <div className="border-t-[3px] border-accent-600 p-3">
                <p className="font-bold leading-snug text-brand-900">{s.name}</p>
                <p className="text-sm text-accent-700">{s.role}</p>
                <a href={`mailto:${s.email}`} className="mt-1 block break-all text-sm text-brand-700 hover:underline">{s.email}</a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
