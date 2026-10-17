"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import FacultyCard from "./FacultyCard";
import { faculty, facultyDepartments } from "@/data/faculty";
import { cn } from "@/lib/format";

const deptNames = Object.fromEntries(facultyDepartments.map((d) => [d.code, d.label]));

function Grid({ people, showDept = false }) {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {people.map((f) => (
        <li key={f.email || f.name}>
          <FacultyCard person={{ ...f, deptName: deptNames[f.dept] }} showDept={showDept} />
        </li>
      ))}
    </ul>
  );
}

export default function FacultyDirectory() {
  const [dept, setDept] = useState("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faculty.filter(
      (f) =>
        (dept === "All" || f.dept === dept) &&
        (!q || [f.name, f.role, f.area, f.research].some((v) => v?.toLowerCase().includes(q)))
    );
  }, [dept, query]);

  // With no filter or search, show everyone under department headings.
  const grouped = dept === "All" && !query.trim();
  const groups = facultyDepartments
    .filter((d) => d.code !== "All")
    .map((d) => ({ ...d, people: faculty.filter((f) => f.dept === d.code) }));

  return (
    <div>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by department">
          {facultyDepartments.map((d) => (
            <button
              key={d.code}
              type="button"
              onClick={() => setDept(d.code)}
              aria-pressed={dept === d.code}
              className={cn(
                "rounded border px-3 py-1.5 text-sm font-medium transition-colors",
                dept === d.code
                  ? "border-brand-800 bg-brand-800 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:border-brand-800 hover:text-brand-800"
              )}
            >
              {d.label}
            </button>
          ))}
        </div>
        <label className="relative block lg:w-72">
          <span className="sr-only">Search faculty</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or research area"
            className="w-full rounded border border-slate-300 py-2 pl-9 pr-3 text-sm focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </label>
      </div>

      <p className="mt-5 text-sm text-slate-500" aria-live="polite">
        Showing {results.length} {results.length === 1 ? "member" : "members"}
      </p>

      {grouped ? (
        groups.map((g) => (
          <section key={g.code} className="mt-8">
            <h2 className="border-b-2 border-brand-800 pb-2 text-xl font-bold">
              {g.title} <span className="text-base font-normal text-slate-500">({g.people.length})</span>
            </h2>
            <Grid people={g.people} />
          </section>
        ))
      ) : (
        <Grid people={results} showDept={dept === "All"} />
      )}

      {results.length === 0 && (
        <p className="mt-6 rounded border border-dashed border-slate-300 p-10 text-center text-slate-500">No faculty match your search.</p>
      )}
    </div>
  );
}
