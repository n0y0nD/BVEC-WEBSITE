import { Mail, MapPin, Navigation } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Card, PageHeader, SectionTitle } from "@/components/ui";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Barak Valley Engineering College, Nirala, Sribhumi, Assam.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" description="Reach the college office for admissions, academics or any other query." crumbs={[{ label: "Contact" }]} />

      <section className="container-page grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-5">
          <Card className="flex gap-4">
            <MapPin className="mt-1 size-6 shrink-0 text-accent-600" aria-hidden />
            <div>
              <h2 className="text-lg font-bold">Address</h2>
              <address className="mt-1 not-italic">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </address>
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-accent-700 hover:underline">
                Maps & directions
              </a>
            </div>
          </Card>
          <Card className="flex gap-4">
            <Mail className="mt-1 size-6 shrink-0 text-accent-600" aria-hidden />
            <div>
              <h2 className="text-lg font-bold">Email</h2>
              <dl className="mt-1 space-y-1.5">
                {site.emails.map((e) => (
                  <div key={e.value}>
                    <dt className="text-sm text-slate-500">{e.label}</dt>
                    <dd>
                      <a href={`mailto:${e.value}`} className="text-brand-700 hover:underline">{e.value}</a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Card>
          <Card className="flex gap-4">
            <Navigation className="mt-1 size-6 shrink-0 text-accent-600" aria-hidden />
            <div>
              <h2 className="text-lg font-bold">Getting Here</h2>
              <ul className="mt-1 space-y-1">
                {site.distances.map((d) => (
                  <li key={d.place}>
                    <span className="font-semibold text-brand-900">{d.distance}</span> from {d.place}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        <Card className="p-6 sm:p-8">
          <SectionTitle title="Send a Message" />
          <p className="mt-4 text-sm text-slate-600">Fill in the form and your email app will open with a message to the Principal&apos;s office, ready to send.</p>
          <ContactForm email={site.email} />
        </Card>
      </section>

      <section className="container-page pb-14">
        <iframe
          title="Map showing the location of BVEC"
          src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
          className="h-96 w-full rounded border border-slate-200"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
