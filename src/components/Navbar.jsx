import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Departments",
    "Admissions",
    "Faculty",
    "Notices",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
          src="/src/assets/BVEC_LOGO.png"
          alt="BVEC LOGO"
          className="h-12 w-12 object-contain"
          />
          <span className="font-semibold text-lg">BVEC</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <li
              key={link}
              className="hover:text-blue-600 cursor-pointer transition"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 pt-2 space-y-4 bg-white">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
