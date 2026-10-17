import { FileText } from "lucide-react";
import { dateParts } from "@/lib/format";

const tagStyles = {
  Tender: "bg-accent-50 text-accent-700",
  Admission: "bg-emerald-50 text-emerald-800",
  Academic: "bg-brand-50 text-brand-800",
  General: "bg-amber-50 text-amber-800",
};

export function Tag({ category }) {
  return (
    <span className={`inline-block rounded-sm px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${tagStyles[category] ?? tagStyles.General}`}>
      {category}
    </span>
  );
}

// One notice row: date block, category, title. Opens the official PDF.
export default function NoticeItem({ notice, compact = false }) {
  const { day, month, year } = dateParts(notice.date);
  return (
    <a
      href={notice.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 border-b border-slate-200 px-4 py-3 last:border-b-0 hover:bg-brand-50"
    >
      <time
        dateTime={notice.date}
        className="flex w-12 shrink-0 flex-col items-center justify-center border border-brand-200 bg-white py-1 text-center leading-none"
      >
        <span className="font-serif text-lg font-bold text-brand-800">{day}</span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase text-accent-600">{month}</span>
        {!compact && <span className="mt-0.5 text-[10px] text-slate-500">{year}</span>}
      </time>
      <div className="min-w-0 flex-1">
        <Tag category={notice.category} />
        <p className={`mt-1 font-medium text-slate-800 group-hover:text-brand-800 group-hover:underline ${compact ? "text-sm leading-snug" : ""}`}>
          {notice.title}
        </p>
        {!compact && (
          <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500">
            <FileText className="size-3.5 text-accent-600" aria-hidden /> PDF
          </p>
        )}
      </div>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
