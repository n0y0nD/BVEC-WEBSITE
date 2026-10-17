import NoticeBoard from "@/components/NoticeBoard";
import { PageHeader } from "@/components/ui";

export const metadata = {
  title: "Notices",
  description: "Latest admission, academic and tender notices from BVEC.",
};

export default function NoticesPage() {
  return (
    <>
      <PageHeader
        title="Notice Board"
        description="Admission, academic and tender notices from the college office. Each notice opens the official PDF."
        crumbs={[{ label: "Notices" }]}
      />
      <section className="container-page max-w-4xl py-12">
        <NoticeBoard />
      </section>
    </>
  );
}
