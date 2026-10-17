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
    return notices.filter((n) => (category === "All" || n.category === category) && (!q || n.title.toLowerCase().includes(q)));
  }, [category, query]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by category">
          {noticeCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={cn(
                "rounded border px-3 py-1.5 text-sm font-medium transition-colors",
                category === c
                  ? "border-brand-800 bg-brand-800 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-brand-800 hover:text-brand-800"
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="relative block sm:w-72">
          <span className="sr-only">Search notices</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notices…"
            className="w-full rounded border border-slate-300 py-2 pl-9 pr-3 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </label>
      </div>

      <p className="mt-5 text-sm text-slate-500" aria-live="polite">
        {results.length} {results.length === 1 ? "notice" : "notices"}
      </p>

      <div className="mt-2 rounded border border-slate-200 bg-white">
        {results.map((n) => (
          <NoticeItem key={n.id} notice={n} />
        ))}
        {results.length === 0 && <p className="p-8 text-center text-slate-500">No notices found. Try a different search or category.</p>}
      </div>
    </div>
  );
}
