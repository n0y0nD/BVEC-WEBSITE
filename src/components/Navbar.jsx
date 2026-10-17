"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/format";

function isActive(pathname, link) {
  if (link.children) return link.children.some((c) => pathname.startsWith(c.href));
  return link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
}

const pill = (active) =>
  cn(
    "rounded-full px-3.5 py-2 text-sm font-medium transition",
    active
      ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
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
        className={cn(pill(isActive(pathname, link)), "inline-flex items-center gap-1")}
      >
        {link.label}
        <ChevronDown className={cn("size-4 transition", open && "rotate-180")} aria-hidden />
      </button>
      {open && (
        <div className="absolute right-0 top-full pt-2">
          <ul className="w-60 rounded-2xl border border-slate-200/80 bg-white p-2 shadow-xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900">
            {link.children.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname.startsWith(c.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-3 py-2 text-sm font-medium transition",
                    pathname.startsWith(c.href)
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                  )}
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileLinks = navLinks.flatMap((l) => (l.children ? l.children : [l]));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-slate-200/80 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85"
          : "border-transparent bg-white/0 dark:bg-slate-950/0"
      )}
    >
      <nav className="container-page flex h-18 items-center justify-between gap-4" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <Dropdown key={link.label} link={link} pathname={pathname} />
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link) ? "page" : undefined}
                  className={pill(isActive(pathname, link))}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link
            href="/admissions"
            className="ml-1 hidden items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 transition hover:bg-brand-700 sm:inline-flex lg:hidden xl:inline-flex"
          >
            Apply now <ArrowRight className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full text-slate-700 transition hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-white/10"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-y-auto transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[calc(100dvh-4.5rem)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <ul className="container-page space-y-1 pb-6 pt-2">
          {mobileLinks.map((link) => {
            const active = isActive(pathname, link);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition",
                    active
                      ? "bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-2 sm:hidden">
            <Link
              href="/admissions"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 font-semibold text-white"
            >
              Apply now <ArrowRight className="size-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
