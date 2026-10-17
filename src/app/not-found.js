import { ButtonLink } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-serif text-7xl font-bold text-brand-200">404</p>
      <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-600">The page may have moved, or the link may be wrong.</p>
      <div className="mt-6 flex gap-3">
        <ButtonLink href="/">Go to the home page</ButtonLink>
        <ButtonLink href="/contact" variant="outline">Contact us</ButtonLink>
      </div>
    </section>
  );
}
