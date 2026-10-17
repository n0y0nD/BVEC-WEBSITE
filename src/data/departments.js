// Department data. Each department gets its own page at /departments/[slug].
export const departments = [
  {
    slug: "computer-science-engineering",
    code: "CSE",
    name: "Computer Science & Engineering",
    icon: "Code",
    color: "from-blue-500 to-indigo-600",
    tagline: "Software, systems and intelligent machines.",
    summary:
      "Build a strong foundation in programming, algorithms and computer systems, then go further into AI, data and the web.",
    overview:
      "The Department of Computer Science & Engineering offers a four-year B.Tech programme under Assam Science and Technology University. Students learn how computers work from the hardware up, how to design efficient software, and how to apply computing to real problems in the region and beyond.",
    intake: 60,
    focusAreas: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Artificial Intelligence & Machine Learning",
      "Web & Software Engineering",
    ],
    careers: [
      "Software Engineer",
      "Data Analyst",
      "Network Engineer",
      "Higher studies (M.Tech / MS)",
      "Public sector & GATE",
    ],
  },
  {
    slug: "electronics-telecommunication-engineering",
    code: "ETE",
    name: "Electronics & Telecommunication Engineering",
    icon: "CircuitBoard",
    color: "from-violet-500 to-fuchsia-600",
    tagline: "Circuits, signals and the systems that connect us.",
    summary:
      "Learn to design electronic circuits, embedded devices and the communication systems behind mobile and internet networks.",
    overview:
      "The Department of Electronics & Telecommunication Engineering offers a four-year B.Tech programme under Assam Science and Technology University. The curriculum covers analog and digital electronics, signal processing, embedded systems and modern communication technology.",
    intake: 60,
    focusAreas: [
      "Analog & Digital Electronics",
      "Signals & Systems",
      "Microprocessors & Embedded Systems",
      "Analog & Digital Communication",
      "VLSI Design",
      "Wireless & Optical Communication",
    ],
    careers: [
      "Embedded Systems Engineer",
      "Telecom Engineer",
      "VLSI / Hardware Design",
      "Higher studies (M.Tech / MS)",
      "Public sector & GATE",
    ],
  },
  {
    slug: "civil-engineering",
    code: "CE",
    name: "Civil Engineering",
    icon: "Landmark",
    color: "from-amber-500 to-orange-600",
    tagline: "Infrastructure for a growing region.",
    summary:
      "Plan, design and build roads, bridges, buildings and water systems that are safe and sustainable.",
    overview:
      "The Department of Civil Engineering offers a four-year B.Tech programme under Assam Science and Technology University. Students study structures, materials, soil, water and transport, with an emphasis on building infrastructure that suits the conditions of the Barak Valley and the North-East.",
    intake: 60,
    focusAreas: [
      "Structural Analysis & Design",
      "Geotechnical Engineering",
      "Surveying",
      "Transportation Engineering",
      "Water Resources & Hydraulics",
      "Environmental Engineering",
    ],
    careers: [
      "Site / Structural Engineer",
      "Public Works & Govt. services",
      "Construction Management",
      "Higher studies (M.Tech / MS)",
      "Public sector & GATE",
    ],
  },
  {
    slug: "mechanical-engineering",
    code: "ME",
    name: "Mechanical Engineering",
    icon: "Cog",
    color: "from-emerald-500 to-teal-600",
    tagline: "Design, energy and manufacturing.",
    summary:
      "From thermodynamics to machine design and manufacturing, learn how machines and energy systems are built.",
    overview:
      "The Department of Mechanical Engineering was started in 2020 and offers a four-year B.Tech programme under Assam Science and Technology University. The programme covers mechanics, thermal sciences, design and manufacturing, preparing students for industry and research.",
    intake: 60,
    focusAreas: [
      "Engineering Mechanics",
      "Thermodynamics & Heat Transfer",
      "Fluid Mechanics & Machinery",
      "Machine Design",
      "Manufacturing Technology",
      "CAD / CAM & Automation",
    ],
    careers: [
      "Design Engineer",
      "Production / Plant Engineer",
      "Automobile & Energy sectors",
      "Higher studies (M.Tech / MS)",
      "Public sector & GATE",
    ],
  },
];

export function getDepartment(slug) {
  return departments.find((d) => d.slug === slug);
}
