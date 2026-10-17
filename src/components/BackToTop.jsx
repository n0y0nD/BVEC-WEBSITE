"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Small button that appears after scrolling down and returns to the top.
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded bg-brand-800 text-white shadow-lg transition-colors hover:bg-accent-600"
    >
      <ArrowUp className="size-5" aria-hidden />
    </button>
  );
}
