import Image from "next/image";
import { CheckCircle2, Mail } from "lucide-react";
import DocList from "@/components/DocList";
import { ButtonLink, Card, PageHeader, SectionTitle } from "@/components/ui";
import { hostel } from "@/data/college";
import { site } from "@/data/site";

export const metadata = {
  title: "Hostels & Library",
  description: "Hostels, central library and health centre at Barak Valley Engineering College.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader title="Hostels & Library" description="Facilities on the 60-bigha campus at Nirala." crumbs={[{ label: "Hostels & Library" }]} />

      <section id="hostels" className="container-page grid grid-cols-1 scroll-mt-16 gap-10 py-14 lg:grid-cols-2">
        <div>
          <SectionTitle title="Hostels" />
          <div className="mt-6 space-y-4">
            {hostel.text.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {hostel.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-accent-600" aria-hidden /> {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-600">For hostel queries, write to</p>
          <a href={`mailto:${hostel.email}`} className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline">
            <Mail className="size-4" aria-hidden /> {hostel.email}
          </a>
        </div>
        <div>
          <div className="relative aspect-[16/10] overflow-hidden rounded border border-slate-200">
            <Image src="/images/campus/campus-aerial-2.jpg" alt="Campus buildings at Nirala" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
          </div>
          <h3 className="mt-8 text-lg font-bold">Hostel Documents</h3>
          <div className="mt-3">
            <DocList items={hostel.documents} />
          </div>
        </div>
      </section>

      <section id="library" className="scroll-mt-16 bg-slate-50 py-14">
        <div className="container-page grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-t-4 border-t-brand-800">
            <h2 className="text-2xl font-bold">Central Library</h2>
            <p className="mt-3">
              The Central Library is in the Civil Engineering building. Its website has the online catalogue and access to
              One Nation One Subscription (ONOS) resources.
            </p>
            <ButtonLink href={site.libraryUrl} external className="mt-5">Visit the library website</ButtonLink>
          </Card>
          <Card className="border-t-4 border-t-accent-600">
            <h2 className="text-2xl font-bold">Health Centre</h2>
            <p className="mt-3">A health centre on campus provides basic medical support. Each hostel also has its own two-bed sick room.</p>
          </Card>
        </div>
      </section>
    </>
  );
}
