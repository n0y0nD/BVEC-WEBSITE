import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { site } from "@/data/site";
import "./globals.css";

const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const heading = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} (${site.shortName})`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: ["BVEC", "Barak Valley Engineering College", "Engineering college Assam", "Sribhumi", "Karimganj", "B.Tech", "ASTU"],
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: ["/images/campus/campus-aerial-1.jpg"],
  },
};

export const viewport = { themeColor: "#122e55" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
