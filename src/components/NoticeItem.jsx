import { dateParts, formatDate } from "@/lib/format";

const tagStyles = {
  Exam: "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-500/20",
  Event: "bg-violet-50 text-violet-700 ring-violet-200 dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-500/20",
  Admission: "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20",
  Academic: "bg-brand-50 text-brand-700 ring-brand-200 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-500/20",
  General: "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/20",
};

export function Tag({ category }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ${tagStyles[category] ?? tagStyles.General}`}>
      {category}
    </span>
  );
}

export default function NoticeItem({ notice, showSummary = true }) {
  const { day, month } = dateParts(notice.date);
  return (
    <article className="group flex gap-5 rounded-2xl border border-slate-200/80 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-brand-500/30 dark:hover:shadow-none">
      <div className="flex w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-slate-50 py-2 text-center ring-1 ring-slate-200/70 dark:bg-white/5 dark:ring-white/10">
        <span className="font-display text-xl font-bold text-slate-900 dark:text-white">{day}</span>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{month}</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <Tag category={notice.category} />
          <time dateTime={notice.date} className="text-xs text-slate-500">
            {formatDate(notice.date)}
          </time>
        </div>
        <h3 className="mt-2 font-sans text-base font-semibold text-slate-900 transition group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
          {notice.title}
        </h3>
        {showSummary && <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{notice.summary}</p>}
      </div>
    </article>
  );
}
