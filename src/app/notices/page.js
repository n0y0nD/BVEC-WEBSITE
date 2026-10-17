import NoticeBoard from "@/components/NoticeBoard";
import { PageHeader } from "@/components/ui";

export const metadata = {
  title: "Notices",
  description: "Latest notices, exam schedules, admission updates and events at BVEC.",
};

export default function NoticesPage() {
  return (
    <>
      <PageHeader
        title="Notice board"
        description="Exam schedules, admission updates, events and announcements from the college office."
        crumbs={[{ label: "Notices" }]}
      />
      <section className="container-page max-w-4xl py-16">
        <NoticeBoard />
      </section>
    </>
  );
}
