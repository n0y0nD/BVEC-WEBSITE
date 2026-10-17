"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/format";

function isActive(pathname, link) {
  if (link.children) return link.children.some((c) => pathname.startsWith(c.href));
  return link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
}

const itemCls = (active) =>
  cn(
    "flex h-12 items-center gap-1 border-b-[3px] px-3.5 text-[13px] font-semibold uppercase tracking-wide transition-colors",
    active ? "border-gold-400 text-white" : "border-transparent text-brand-100 hover:bg-brand-900 hover:text-white"
  );

function Dropdown({ link, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <li ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={itemCls(isActive(pathname, link))}
      >
        {link.label}
        <ChevronDown className="size-4" aria-hidden />
      </button>
      {open && (
        <ul className="absolute left-0 top-full z-50 w-64 border-t-[3px] border-gold-400 bg-white py-1 shadow-lg">
          {link.children.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                onClick={() => setOpen(false)}
                aria-current={pathname.startsWith(c.href) ? "page" : undefined}
                className={cn(
                  "block border-l-[3px] px-4 py-2.5 text-sm transition-colors",
                  pathname.startsWith(c.href)
                    ? "border-accent-600 bg-brand-50 font-semibold text-brand-900"
                    : "border-transparent text-slate-700 hover:border-accent-600 hover:bg-brand-50 hover:text-brand-900"
                )}
              >
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mobileLinks = navLinks.flatMap((l) => (l.children ? l.children : [l]));

  return (
    <nav className="sticky top-0 z-40 bg-brand-800 shadow-md" aria-label="Main">
      <div className="container-page">
        <div className="hidden items-center justify-between lg:flex">
        <ul className="flex items-center">
          {navLinks.map((link) =>
            link.children ? (
              <Dropdown key={link.label} link={link} pathname={pathname} />
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link) ? "page" : undefined}
                  className={itemCls(isActive(pathname, link))}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <Link
          href="/admissions"
          className="rounded bg-accent-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-accent-700"
        >
          Admissions 2026
        </Link>
        </div>

        <div className="flex h-12 items-center justify-between lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            Menu
          </button>
          <Link href="/admissions" className="rounded bg-accent-600 px-3 py-1.5 text-xs font-semibold text-white">
            Admissions 2026
          </Link>
        </div>
      </div>

      {open && (
        <ul id="mobile-menu" className="max-h-[70vh] overflow-y-auto border-t border-brand-700 bg-brand-900 py-2 lg:hidden">
          {mobileLinks.map((link) => {
            const active = isActive(pathname, link);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block border-l-4 px-5 py-3 text-sm font-medium",
                    active ? "border-gold-400 bg-brand-800 text-white" : "border-transparent text-brand-100 hover:bg-brand-800"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
