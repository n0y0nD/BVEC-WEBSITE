import { FileText } from "lucide-react";

// A list of links to PDF documents on the official website.
export default function DocList({ items }) {
  return (
    <ul className="rounded border border-slate-200 bg-white">
      {items.map((d) => (
        <li key={d.url} className="border-b border-slate-200 last:border-b-0">
          <a
            href={d.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 py-3 hover:bg-brand-50"
          >
            <FileText className="size-5 shrink-0 text-accent-600" aria-hidden />
            <span className="flex-1 font-medium text-slate-800 group-hover:text-brand-800 group-hover:underline">{d.title}</span>
            <span className="text-xs font-semibold text-slate-400">PDF</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
