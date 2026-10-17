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
        description="Teaching staff of the engineering departments and the Basic Sciences & Humanities group."
        crumbs={[{ label: "Faculty" }]}
      />
      <section className="container-page py-12">
        <FacultyDirectory />
      </section>
    </>
  );
}
