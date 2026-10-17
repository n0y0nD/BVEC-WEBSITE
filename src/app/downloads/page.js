import { Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import DocList from "@/components/DocList";
import { Card, PageHeader, SectionHeading } from "@/components/ui";
import { documents, rti } from "@/data/college";

export const metadata = {
  title: "Downloads & RTI",
  description: "Academic documents, AICTE approvals, college magazine, NSS reports and RTI officers of BVEC.",
};

const groups = [
  { id: "academic", eyebrow: "Academics", title: "Calendar, regulations & syllabus", items: documents.academic },
  { id: "aicte", eyebrow: "AICTE", title: "Extension of Approval", items: documents.aicte },
  { id: "publications", eyebrow: "Publications", title: "Magazine & NSS reports", items: documents.publications },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="Downloads & RTI"
        description="Official documents from the college. Each opens as a PDF on bvec.ac.in."
        crumbs={[{ label: "Downloads & RTI" }]}
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.id} delay={i * 80} id={g.id} className="scroll-mt-24">
            <SectionHeading align="left" eyebrow={g.eyebrow} title={g.title} className="[&_h2]:text-2xl" />
            <div className="mt-6">
              <DocList items={g.items} />
            </div>
          </Reveal>
        ))}
      </section>

      <section id="rti" className="scroll-mt-24 bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="Right to Information"
            title="RTI officers"
            description="Requests under the Right to Information Act, 2005 may be addressed to:"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {rti.map((p) => (
              <Card key={p.heading} className="p-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">{p.heading}</p>
                <h3 className="mt-3 text-xl font-bold">{p.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">{p.role}</p>
                <a href={`mailto:${p.email}`} className="mt-4 flex items-center gap-2 text-sm hover:text-brand-600">
                  <Mail className="size-4 text-brand-600 dark:text-brand-300" aria-hidden /> {p.email}
                </a>
                {p.phone && (
                  <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="mt-2 flex items-center gap-2 text-sm hover:text-brand-600">
                    <Phone className="size-4 text-brand-600 dark:text-brand-300" aria-hidden /> {p.phone}
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
