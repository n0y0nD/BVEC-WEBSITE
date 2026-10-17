import Image from "next/image";
import { Award, BookOpen, Compass, Eye, Lightbulb, ShieldCheck, Target, Users } from "lucide-react";
import logo from "../../../public/images/bvec-logo.png";
import Reveal from "@/components/Reveal";
import { ButtonLink, Card, PageHeader, SectionHeading } from "@/components/ui";
import { site, stats } from "@/data/site";

export const metadata = {
  title: "About",
  description: "Learn about Barak Valley Engineering College — its history, vision, mission and affiliations.",
};

const values = [
  { icon: Lightbulb, title: "Innovation", text: "Encouraging students to question, experiment and build new things." },
  { icon: ShieldCheck, title: "Integrity", text: "Honest, ethical practice in learning, research and professional life." },
  { icon: Users, title: "Inclusion", text: "Affordable, accessible technical education for every student in the region." },
  { icon: Compass, title: "Responsibility", text: "Engineering that serves society and respects the environment." },
];

const timeline = [
  { year: "2017", text: "BVEC begins full operation under the Directorate of Technical Education, Assam." },
  { year: "2017", text: "First B.Tech batches admitted through the Assam Combined Entrance Examination (CEE)." },
  { year: "2020", text: "Department of Mechanical Engineering starts its B.Tech programme." },
  { year: "Today", text: "Four B.Tech programmes with 60 seats each, affiliated to ASTU and approved by AICTE." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the college"
        description={`${site.name} is a Government of Assam engineering college in Nirala, Sribhumi — built to bring quality technical education to the Barak Valley.`}
        crumbs={[{ label: "About" }]}
      />

      <section className="container-page grid items-center gap-14 py-20 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Who we are"
            title="Minds towards innovation"
            description="BVEC started its full-fledged operation in 2017 under the purview of the Directorate of Technical Education (DTE), Assam. The college is approved by AICTE, New Delhi and its B.Tech programmes are affiliated to Assam Science and Technology University (ASTU), Guwahati."
          />
          <p className="mt-5 text-slate-600 dark:text-slate-400">
            Students are admitted to the first year through the Assam Combined Entrance Examination (CEE), and to the
            second year through the Joint Lateral Entrance Examination (JLEE). The college offers B.Tech degrees in
            Computer Science, Electronics & Telecommunication, Civil and Mechanical Engineering.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-0 -z-10 rounded-full bg-brand-500/20 blur-3xl" aria-hidden />
            <Image src={logo} alt="BVEC emblem" className="w-full rounded-full bg-white p-4 shadow-2xl ring-1 ring-slate-200 dark:ring-white/10" />
          </div>
        </Reveal>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-brand-600 text-white"><Eye className="size-6" aria-hidden /></span>
              <h2 className="mt-6 text-2xl font-bold">Our vision</h2>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">
                To be a centre of excellence in technical education in the North-East, producing engineers who are
                skilled, innovative and committed to the development of society.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-accent-500 text-white"><Target className="size-6" aria-hidden /></span>
              <h2 className="mt-6 text-2xl font-bold">Our mission</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-600 marker:text-brand-500 dark:text-slate-400">
                <li>Deliver strong fundamentals through quality teaching and hands-on learning.</li>
                <li>Build problem-solving, teamwork and communication skills.</li>
                <li>Encourage research, entrepreneurship and lifelong learning.</li>
                <li>Instil ethics and a sense of responsibility towards society.</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20">
        <SectionHeading eyebrow="Our values" title="What we stand for" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <Card className="h-full">
                <Icon className="size-7 text-brand-600 dark:text-brand-300" aria-hidden />
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 dark:bg-slate-900/40">
        <div className="container-page grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Milestones" title="Our journey so far" />
            <ol className="relative mt-10 space-y-8 border-l-2 border-brand-200 pl-8 dark:border-brand-500/30">
              {timeline.map((t, i) => (
                <Reveal as="li" key={i} delay={i * 80} className="relative">
                  <span className="absolute -left-[41px] top-1 size-4 rounded-full border-4 border-white bg-brand-600 dark:border-slate-950" aria-hidden />
                  <p className="font-display text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-300">{t.year}</p>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">{t.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading align="left" eyebrow="Recognition" title="Approvals & affiliation" />
            <div className="mt-10 space-y-4">
              {[
                { icon: ShieldCheck, title: "Government of Assam", text: "Under the Directorate of Technical Education, Assam." },
                { icon: Award, title: "AICTE approved", text: "Approved by the All India Council for Technical Education, New Delhi." },
                { icon: BookOpen, title: "Affiliated to ASTU", text: "B.Tech degrees awarded by Assam Science and Technology University, Guwahati." },
              ].map(({ icon: Icon, title, text }) => (
                <Card key={title} className="flex gap-4">
                  <Icon className="mt-0.5 size-6 shrink-0 text-brand-600 dark:text-brand-300" aria-hidden />
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{text}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white p-4 text-center ring-1 ring-slate-200 dark:bg-white/5 dark:ring-white/10">
                  <p className="font-display text-2xl font-extrabold text-brand-600 dark:text-brand-400">{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="text-3xl font-bold">Want to see the programmes?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-400">Explore what you can study at BVEC and where it can take you.</p>
        <ButtonLink href="/departments" className="mt-8">Explore departments</ButtonLink>
      </section>
    </>
  );
}
