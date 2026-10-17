import { notices } from "@/data/notices";
import { formatDate } from "@/lib/format";

// Scrolling "Latest News" strip under the navigation bar.
export default function NewsTicker() {
  const items = notices.slice(0, 8);
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <div className="container-page flex items-stretch">
        <span className="relative z-10 flex shrink-0 items-center bg-accent-600 py-2 pl-3 pr-2 text-xs font-bold uppercase tracking-wider text-white">
          Latest News
          {/* Arrow notch pointing at the scrolling text */}
          <span className="absolute -right-2 top-0 h-full w-2 bg-accent-600 [clip-path:polygon(0_0,100%_50%,0_100%)]" aria-hidden />
        </span>
        <div className="relative flex-1 overflow-hidden py-2 pl-3">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap pl-6 text-sm hover:[animation-play-state:paused]">
            {[...items, ...items].map((n, i) => (
              <a
                key={`${n.id}-${i}`}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-900 hover:text-accent-600 hover:underline"
                aria-hidden={i >= items.length}
                tabIndex={i >= items.length ? -1 : undefined}
              >
                <span className="mr-2 text-gold-500" aria-hidden>◆</span>
                {n.title} <span className="text-slate-500">({formatDate(n.date)})</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
