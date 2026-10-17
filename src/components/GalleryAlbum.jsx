"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Photo grid for one album. Clicking a photo opens it full screen;
// arrow keys move between photos and Esc closes.
export default function GalleryAlbum({ photos }) {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const move = useCallback((d) => setOpen((i) => (i + d + photos.length) % photos.length), [photos.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);

  return (
    <>
      <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {photos.map((p, i) => (
          <li key={p.src}>
            <button type="button" onClick={() => setOpen(i)} className="group block w-full text-left">
              <div className="relative aspect-[4/3] overflow-hidden rounded border border-slate-200 bg-slate-100">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-2 text-sm text-slate-600 group-hover:text-brand-800">{p.alt}</p>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[open].alt}
          className="fixed inset-0 z-50 flex flex-col bg-black/90"
          onClick={close}
        >
          <div className="flex items-center justify-between p-4 text-sm text-white">
            <span>
              {open + 1} / {photos.length}
            </span>
            <button type="button" onClick={close} aria-label="Close" className="grid size-10 place-items-center rounded hover:bg-white/10">
              <X className="size-6" />
            </button>
          </div>
          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={photos[open].src} alt={photos[open].alt} fill sizes="100vw" className="object-contain" />
            {photos.length > 1 && (
              <>
                <button type="button" onClick={() => move(-1)} aria-label="Previous photo" className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30">
                  <ChevronLeft className="size-6" />
                </button>
                <button type="button" onClick={() => move(1)} aria-label="Next photo" className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30">
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}
          </div>
          <p className="p-4 text-center text-white">{photos[open].alt}</p>
        </div>
      )}
    </>
  );
}
