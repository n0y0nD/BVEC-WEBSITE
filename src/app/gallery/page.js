import Image from "next/image";
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
            <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
              {album.photos.map((p) => (
                <li key={p.src}>
                  <a href={p.src} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded border border-slate-200 bg-slate-100">
                      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <p className="mt-2 text-sm text-slate-600 group-hover:text-brand-800">{p.alt}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
