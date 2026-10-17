import { Mail, Phone } from "lucide-react";
import DocList from "@/components/DocList";
import { Card, PageHeader, SectionTitle } from "@/components/ui";
import { documents, rti } from "@/data/college";

export const metadata = {
  title: "Downloads & RTI",
  description: "Academic documents, AICTE approvals, college magazine, NSS reports and RTI officers of BVEC.",
};

const groups = [
  { id: "academic", title: "Academic Calendar, Regulations & Syllabus", items: documents.academic },
  { id: "aicte", title: "AICTE Extension of Approval", items: documents.aicte },
  { id: "publications", title: "College Magazine & NSS Reports", items: documents.publications },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHeader title="Downloads & RTI" description="Official documents of the college. Each opens as a PDF on bvec.ac.in." crumbs={[{ label: "Downloads & RTI" }]} />

      <section className="container-page grid grid-cols-1 gap-10 py-14 lg:grid-cols-2">
        {groups.map((g) => (
          <div key={g.id} id={g.id} className="scroll-mt-16">
            <SectionTitle title={g.title} className="[&_h2]:text-xl [&_h2]:sm:text-2xl" />
            <div className="mt-5">
              <DocList items={g.items} />
            </div>
          </div>
        ))}
      </section>

      <section id="rti" className="scroll-mt-16 bg-slate-50 py-14">
        <div className="container-page">
          <SectionTitle title="Right to Information" subtitle="Requests under the Right to Information Act, 2005 may be addressed to:" />
          <div className="mt-8 grid grid-cols-1 max-w-4xl gap-6 md:grid-cols-2">
            {rti.map((p) => (
              <Card key={p.heading} className="border-t-4 border-t-brand-800">
                <p className="text-xs font-bold uppercase tracking-wider text-accent-700">{p.heading}</p>
                <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
                <p className="text-slate-600">{p.role}</p>
                <a href={`mailto:${p.email}`} className="mt-3 flex items-center gap-2 text-sm text-brand-700 hover:underline">
                  <Mail className="size-4" aria-hidden /> {p.email}
                </a>
                {p.phone && (
                  <a href={`tel:${p.phone.replace(/\s/g, "")}`} className="mt-1 flex items-center gap-2 text-sm text-brand-700 hover:underline">
                    <Phone className="size-4" aria-hidden /> {p.phone}
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
