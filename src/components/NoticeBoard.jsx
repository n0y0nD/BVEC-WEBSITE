"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import NoticeItem from "./NoticeItem";
import { noticeCategories, notices } from "@/data/notices";
import { cn } from "@/lib/format";

export default function NoticeBoard() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notices.filter(
      (n) =>
        (category === "All" || n.category === category) &&
        (!q || n.title.toLowerCase().includes(q))
    );
  }, [category, query]);

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search notices</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" aria-hidden />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search notices…"
          className="w-full rounded-2xl border-0 bg-white py-3.5 pl-12 pr-4 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-white/5 dark:text-white dark:ring-white/10"
        />
      </label>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {noticeCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition",
              category === c
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10 dark:hover:bg-white/10"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-slate-500" aria-live="polite">
        {results.length} {results.length === 1 ? "notice" : "notices"}
      </p>

      <div className="mt-3 space-y-3">
        {results.map((n) => (
          <NoticeItem key={n.id} notice={n} />
        ))}
      </div>

      {results.length === 0 && (
        <p className="mt-6 rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500 dark:border-white/15">
          No notices found. Try a different search or category.
        </p>
      )}
    </div>
  );
}
