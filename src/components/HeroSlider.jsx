"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/format";

// Campus photo slideshow on the home page. Advances every 6 seconds; pauses on hover.
export default function HeroSlider({ slides }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  const go = (d) => setIndex((i) => (i + d + slides.length) % slides.length);

  return (
    <div
      className="relative h-full min-h-[240px] overflow-hidden rounded border border-slate-200 bg-brand-900 sm:min-h-[340px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Campus photos"
    >
      {slides.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          sizes="(min-width: 1024px) 800px, 100vw"
          priority={i === 0}
          className={cn("object-cover transition-opacity duration-700", i === index ? "opacity-100" : "opacity-0")}
          aria-hidden={i !== index}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/90 to-transparent px-5 pb-4 pt-16">
        <p className="font-serif text-xl font-bold text-white sm:text-2xl">Welcome to Barak Valley Engineering College</p>
        <p className="mt-1 text-sm text-brand-100">{slides[index].alt}</p>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 grid grid-cols-1 size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 grid grid-cols-1 size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white hover:bg-black/60"
      >
        <ChevronRight className="size-5" />
      </button>
      <div className="absolute right-4 top-4 flex gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            className={cn("h-2 rounded-full transition-all", i === index ? "w-6 bg-gold-400" : "w-2 bg-white/70")}
          />
        ))}
      </div>
    </div>
  );
}
