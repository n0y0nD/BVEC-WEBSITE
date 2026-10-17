"use client";

import { useMemo, useState } from "react";
import { Search, UserRound } from "lucide-react";
import { faculty, facultyDepartments } from "@/data/faculty";
import { cn } from "@/lib/format";

export default function FacultyDirectory() {
  const [dept, setDept] = useState("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faculty.filter(
      (f) =>
        (dept === "All" || f.dept === dept) &&
        (!q || [f.name, f.role, f.area, f.dept].some((v) => v?.toLowerCase().includes(q)))
    );
  }, [dept, query]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by department">
          {facultyDepartments.map((d) => (
            <button
              key={d.code}
              type="button"
              onClick={() => setDept(d.code)}
              aria-pressed={dept === d.code}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition",
                dept === d.code
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10 dark:hover:bg-white/10"
              )}
            >
              {d.label}
            </button>
          ))}
        </div>
        <label className="relative block lg:w-72">
          <span className="sr-only">Search faculty</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or role"
            className="w-full rounded-full border-0 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-white/5 dark:text-white dark:ring-white/10"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-slate-500" aria-live="polite">
        Showing {results.length} {results.length === 1 ? "member" : "members"}
      </p>

      <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.map((f) => (
          <li
            key={f.name}
            className="group rounded-3xl border border-slate-200/80 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/60"
          >
            <span className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-brand-100 to-indigo-100 text-brand-600 ring-4 ring-white dark:from-brand-500/20 dark:to-indigo-500/20 dark:text-brand-300 dark:ring-slate-900">
              <UserRound className="size-9" aria-hidden />
            </span>
            <h3 className="mt-4 font-sans text-base font-semibold">{f.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{f.role}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">{f.dept}</span>
              {f.area && (
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-white/10 dark:text-slate-300">{f.area}</span>
              )}
            </div>
          </li>
        ))}
      </ul>

      {results.length === 0 && (
        <p className="mt-10 rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500 dark:border-white/15">
          No faculty match your search.
        </p>
      )}
    </div>
  );
}
