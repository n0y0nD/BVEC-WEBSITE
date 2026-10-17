import { site, allPages } from "@/data/site";
import { departments } from "@/data/departments";

export default function sitemap() {
  const pages = allPages;
  const deptPages = departments.map((d) => `/departments/${d.slug}`);
  return [...pages, ...deptPages].map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: path === "/notices" ? "daily" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
