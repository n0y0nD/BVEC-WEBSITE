import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/format";

const buttonStyles = {
  primary:
    "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-brand-700/30",
  secondary:
    "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 dark:bg-white/5 dark:text-white dark:ring-white/15 dark:hover:bg-white/10",
  light: "bg-white text-brand-800 shadow-lg hover:bg-brand-50",
  ghost: "text-white ring-1 ring-white/30 hover:bg-white/10",
};

export function ButtonLink({ href, variant = "primary", className, children, ...rest }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5",
        buttonStyles[variant],
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function Eyebrow({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-brand-100 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-500/20",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "center", className }) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  );
}

export function PageHeader({ title, description, crumbs = [] }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-slate-50 dark:border-white/10 dark:bg-slate-900/40">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -top-24 right-0 -z-10 size-96 rounded-full bg-brand-400/20 blur-3xl" aria-hidden />
      <div className="container-page py-14 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <Link href="/" className="hover:text-brand-600 dark:hover:text-brand-300">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1">
                <ChevronRight className="size-3.5" aria-hidden />
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand-600 dark:hover:text-brand-300">{c.label}</Link>
                ) : (
                  <span aria-current="page" className="font-medium text-slate-700 dark:text-slate-200">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">{description}</p>
        )}
      </div>
    </section>
  );
}

export function Card({ className, children, ...rest }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/60",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
