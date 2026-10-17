import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Card, PageHeader } from "@/components/ui";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Barak Valley Engineering College, Nirala, Sribhumi, Assam.",
};

export default function ContactPage() {
  const details = [
    {
      icon: MapPin,
      label: "Address",
      value: (
        <>
          {site.address.line1}
          <br />
          {site.address.line2}
          <br />
          {site.address.line3}
        </>
      ),
    },
    { icon: Phone, label: "Phone", value: <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brand-600">{site.phone}</a> },
    { icon: Mail, label: "Email", value: <a href={`mailto:${site.email}`} className="hover:text-brand-600">{site.email}</a> },
    { icon: Clock, label: "Office hours", value: site.officeHours },
  ];

  return (
    <>
      <PageHeader
        title="Contact us"
        description="Questions about admissions, academics or anything else? Reach the college office using the details below."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          {details.map(({ icon: Icon, label, value }) => (
            <Card key={label} className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
                <p className="mt-1 text-slate-800 dark:text-slate-200">{value}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Send a message</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Fill in the form and your email app will open with the message ready to send.
          </p>
          <ContactForm email={site.email} />
        </Card>
      </section>

      <section className="container-page pb-20">
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-sm dark:border-white/10">
          <iframe
            title="Map showing the location of BVEC"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
            className="h-96 w-full grayscale-[30%] dark:opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
