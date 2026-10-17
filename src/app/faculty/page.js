import { Info } from "lucide-react";
import FacultyDirectory from "@/components/FacultyDirectory";
import { PageHeader } from "@/components/ui";

export const metadata = {
  title: "Faculty",
  description: "Faculty directory of Barak Valley Engineering College, by department.",
};

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        title="Faculty"
        description="Our teachers bring together academic depth and practical experience to guide students through every semester."
        crumbs={[{ label: "Faculty" }]}
      />
      <section className="container-page py-16">
        <div className="mb-8 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
          <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
          <p>The profiles below are placeholders that show the directory layout. The official faculty list will be added here.</p>
        </div>
        <FacultyDirectory />
      </section>
    </>
  );
}
