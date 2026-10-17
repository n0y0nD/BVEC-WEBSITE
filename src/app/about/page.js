import Image from "next/image";
import { MapPin } from "lucide-react";
import { ButtonLink, Card, PageHeader, SectionTitle } from "@/components/ui";
import { site } from "@/data/site";
import { aboutText } from "@/data/college";

export const metadata = {
  title: "About",
  description: "History, vision, mission, approvals and location of Barak Valley Engineering College.",
};

const timeline = [
  { year: "2009", text: "The Government of Assam takes the initiative to set up an engineering college in the Barak Valley." },
  { year: "2017", text: "BVEC begins full operation under DTE Assam, with Computer Science, Electronics & Telecommunication and the science departments." },
  { year: "2020", text: "The Civil and Mechanical Engineering departments start their B.Tech programmes." },
  { year: "Today", text: "Four B.Tech programmes with 60 seats each, affiliated to ASTU and approved by AICTE." },
];

const mission = [
  "Develop technically proficient professionals with analytical, leadership and ethical values.",
  "Foster research, creativity and lifelong learning.",
  "Encourage sports, cultural, technical and community activities for holistic development.",
  "Promote skill development, industry partnerships, innovation and entrepreneurship for the region's growth.",
];

const recognition = [
  ["Government of Assam", "Run under the Directorate of Technical Education (DTE), Assam."],
  ["AICTE approved", "Approved by the All India Council for Technical Education, New Delhi."],
  ["Affiliated to ASTU", "B.Tech degrees are awarded by Assam Science and Technology University, Guwahati."],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About the College" description="The first state government engineering college in the Barak Valley." crumbs={[{ label: "About" }]} />

      <section className="container-page grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionTitle title="Our History" />
          <p className="mt-6">{aboutText[0]}</p>
          <p className="mt-4">{aboutText[1]}</p>
          <p className="mt-4">
            Students are admitted to the first year through the Assam Combined Entrance Examination (CEE), and to the
            second year through the Joint Lateral Entrance Examination (JLEE). The college offers B.Tech degrees in
            Computer Science, Electronics & Telecommunication, Civil and Mechanical Engineering.
          </p>
        </div>
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden rounded border border-slate-200">
            <Image src="/images/campus/campus-aerial-1.jpg" alt="Aerial view of the BVEC campus" fill sizes="(min-width: 1024px) 420px, 100vw" className="object-cover" />
          </div>
          <figcaption className="mt-2 text-sm text-slate-500">The BVEC campus at Nirala, Sribhumi.</figcaption>
        </figure>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container-page grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-t-4 border-t-brand-800">
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="mt-3">
              Advancing technical education in Assam through excellence, collaboration and innovation — nurturing
              competent, innovative and socially responsible engineers.
            </p>
          </Card>
          <Card className="border-t-4 border-t-accent-600">
            <h2 className="text-2xl font-bold">Mission</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent-600">
              {mission.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Card>
        </div>
        <p className="container-page mt-3 text-sm text-slate-500">From the Principal&apos;s message.</p>
      </section>

      <section className="container-page grid grid-cols-1 gap-12 py-14 lg:grid-cols-2">
        <div>
          <SectionTitle title="Milestones" />
          <ol className="mt-8 space-y-0 border-l-2 border-brand-200">
            {timeline.map((t) => (
              <li key={t.year} className="relative pb-6 pl-6 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-accent-600" aria-hidden />
                <p className="font-serif text-lg font-bold text-brand-800">{t.year}</p>
                <p className="mt-1">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionTitle title="Approvals & Affiliation" />
          <ul className="mt-8 space-y-3">
            {recognition.map(([t, d]) => (
              <li key={t} className="rounded border border-slate-200 border-l-4 border-l-gold-500 bg-white p-4">
                <p className="font-serif font-bold text-brand-900">{t}</p>
                <p className="mt-1 text-sm text-slate-600">{d}</p>
              </li>
            ))}
          </ul>
          <ButtonLink href="/downloads#aicte" variant="outline" className="mt-6">View AICTE approval letters</ButtonLink>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container-page">
          <SectionTitle title="Getting to the Campus" subtitle="The campus at Nirala is connected to the National Highway by PWD rural roads." />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {site.distances.map((d) => (
              <Card key={d.place} className="flex items-center gap-4">
                <MapPin className="size-8 shrink-0 text-accent-600" aria-hidden />
                <div>
                  <p className="font-serif text-2xl font-bold text-brand-900">{d.distance}</p>
                  <p className="text-sm text-slate-600">from {d.place}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
