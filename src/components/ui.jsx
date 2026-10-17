import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/format";

const buttonStyles = {
  primary: "bg-brand-800 text-white hover:bg-brand-900",
  accent: "bg-accent-600 text-white hover:bg-accent-700",
  outline: "border border-brand-800 text-brand-800 hover:bg-brand-800 hover:text-white",
  light: "bg-white text-brand-900 hover:bg-gold-300",
  ghost: "border border-white/70 text-white hover:bg-white hover:text-brand-900",
};

export function ButtonLink({ href, variant = "primary", className, children, external, ...rest }) {
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded px-5 py-2.5 text-sm font-semibold transition-colors",
    buttonStyles[variant],
    className
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

// Serif heading with the short maroon rule used across the site.
export function SectionTitle({ title, subtitle, align = "left", light = false, className }) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <h2 className={cn("text-2xl font-bold sm:text-3xl", light && "text-white")}>{title}</h2>
      <span
        className={cn("mt-3 block h-[3px] w-14 bg-accent-600", align === "center" && "mx-auto", light && "bg-gold-400")}
        aria-hidden
      />
      {subtitle && (
        <p className={cn("mt-4 max-w-2xl", align === "center" && "mx-auto", light ? "text-brand-100" : "text-slate-600")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Inner-page banner: campus photo with a navy overlay, title and breadcrumb.
export function PageHeader({ title, description, crumbs = [] }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-900">
      <Image
        src="/images/campus/campus-aerial-2.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-25"
        priority
      />
      <div className="container-page py-10 sm:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-100">
            <li>
              <Link href="/" className="hover:text-white hover:underline">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1">
                <ChevronRight className="size-3.5" aria-hidden />
                {c.href ? (
                  <Link href={c.href} className="hover:text-white hover:underline">{c.label}</Link>
                ) : (
                  <span aria-current="page" className="text-gold-300">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-3xl text-brand-100">{description}</p>}
      </div>
    </section>
  );
}

export function Card({ className, children, ...rest }) {
  return (
    <div className={cn("rounded border border-slate-200 bg-white p-6 shadow-sm", className)} {...rest}>
      {children}
    </div>
  );
}

// Box with a navy title bar, used for notice boards and side panels.
export function Panel({ title, action, className, children }) {
  return (
    <div className={cn("flex flex-col overflow-hidden rounded border border-slate-200 bg-white shadow-sm", className)}>
      <div className="flex items-center justify-between gap-3 bg-brand-800 px-4 py-3">
        <h2 className="font-serif text-lg font-semibold text-white">{title}</h2>
        {action}
      </div>
      {children}
    </div>
  );
}

// Portrait photo, or initials when no photo is available.
export function Portrait({ src, name, className, sizes = "200px" }) {
  const initials = name
    .replace(/^(Prof\.|Dr\.)\s*/g, "")
    .replace(/^(Prof\.|Dr\.|\(Dr\.\))\s*/g, "")
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className={cn("relative overflow-hidden bg-brand-50", className)}>
      {src ? (
        <Image src={src} alt={`Photo of ${name}`} fill sizes={sizes} className="object-cover object-top" />
      ) : (
        <span className="absolute inset-0 grid grid-cols-1 place-items-center font-serif text-3xl font-bold text-brand-300" aria-hidden>
          {initials}
        </span>
      )}
    </div>
  );
}
