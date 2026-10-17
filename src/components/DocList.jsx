import { ArrowUpRight, FileText } from "lucide-react";

// A list of links to PDF documents on the official website.
export default function DocList({ items }) {
  return (
    <ul className="divide-y divide-slate-100 overflow-hidden rounded-3xl border border-slate-200/80 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-slate-900/60">
      {items.map((d) => (
        <li key={d.url}>
          <a
            href={d.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-5 py-4 transition hover:bg-slate-50 dark:hover:bg-white/5"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300">
              <FileText className="size-5" aria-hidden />
            </span>
            <span className="flex-1 font-medium text-slate-800 group-hover:text-brand-700 dark:text-slate-200 dark:group-hover:text-brand-300">
              {d.title}
            </span>
            <ArrowUpRight className="size-4 shrink-0 text-slate-400" aria-hidden />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
