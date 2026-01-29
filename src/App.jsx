import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import QuickAccess from "./components/QuickAccess";
import FeaturedDepartments from "./components/FeaturedDepartments";
import Notices from "./components/Notices";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <QuickAccess />
      <FeaturedDepartments />
      <Notices />
      <CTA />
      <Footer />
    </>
  );
}
