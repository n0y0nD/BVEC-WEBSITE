import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="container-page relative isolate flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
      <p className="font-display text-8xl font-extrabold text-brand-600/20 dark:text-brand-400/20">404</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">We couldn&apos;t find that page</h1>
      <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
        The page may have moved, or the link may be wrong. Head back home to keep exploring.
      </p>
      <ButtonLink href="/" className="mt-8">
        <ArrowLeft className="size-4" /> Back to home
      </ButtonLink>
    </section>
  );
}
