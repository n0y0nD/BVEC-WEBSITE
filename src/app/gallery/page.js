import GalleryAlbum from "@/components/GalleryAlbum";
import { PageHeader, SectionTitle } from "@/components/ui";
import { galleryAlbums } from "@/data/gallery";

export const metadata = {
  title: "Photo Gallery",
  description: "Photos of campus life at Barak Valley Engineering College.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Photo Gallery" description="Campus life, celebrations and events at BVEC." crumbs={[{ label: "Photo Gallery" }]} />
      <div className="container-page space-y-14 py-14">
        {galleryAlbums.map((album) => (
          <section key={album.title}>
            <SectionTitle title={album.title} />
            <GalleryAlbum photos={album.photos} />
          </section>
        ))}
      </div>
    </>
  );
}
