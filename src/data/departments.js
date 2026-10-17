// Department data. Each department gets its own page at /departments/[slug].
// About, vision and mission text is from the department pages on https://www.bvec.ac.in/
export const departments = [
  {
    slug: "computer-science-engineering",
    code: "CSE",
    name: "Computer Science & Engineering",
    tagline: "Software, systems and intelligent machines.",
    summary:
      "Build a strong foundation in programming, algorithms and computer systems, then go further into AI, data and the web.",
    started: "April 2017",
    hod: "Dr. Kausthav Pratim Kalita",
    intake: 60,
    about: [
      "The Department of Computer Science and Engineering was started in April 2017 and offers a B.Tech degree with an annual intake capacity of 60 students. Its qualified, dynamic faculty and well-structured classroom and laboratory resources help students build a clear understanding of the core concepts of Computer Science & Engineering.",
      "The department also runs a well-equipped computer centre that provides computing facilities to all students of the college, and has strong academia–industry collaboration to make students industry ready.",
    ],
    vision: null,
    mission: [
      "Provide good quality education along with state-of-the-art laboratory facilities.",
      "Enable students and faculty members to achieve the departmental goals.",
      "Continuously upgrade the curriculum and laboratories to train students in the latest technology for better employability.",
      "Involve students in research and development work, both individually and in teams.",
      "Partner with industry to give students the necessary industry exposure.",
    ],
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
    tagline: "Circuits, signals and the systems that connect us.",
    summary:
      "Learn to design electronic circuits, embedded devices and the communication systems behind mobile and internet networks.",
    started: "2017",
    hod: "Dr. Satyajit Das",
    intake: 60,
    about: [
      "The department was started in 2017 and offers a B.Tech degree with an annual intake capacity of 60 students. It emphasises technical, professional and research-oriented skills, with a curriculum at par with AICTE that covers the various areas of Electronics and Communication Engineering at the core level.",
      "Students learn experimental solutions to physical problems and system-design methods relevant to modern industry. Faculty knowledge is kept current through regular Faculty Development Programmes.",
    ],
    vision:
      "To become a centre of excellence in all fields of Electronics and Communication Engineering, across the country and the globe, with a constant focus on education where the best of teaching-learning, research and consultancy coincide.",
    mission: [
      "Create academic excellence through quality education, and carry out research and technology-oriented development in frontier areas of Electronics and Communication Engineering.",
      "Inculcate the spirit of innovation and creativity through active participation in development activities.",
      "Promote enterprising abilities for the benefit of society by building professional skills.",
      "Maintain regular interaction with industry for academia–industry collaboration, industry exposure for students, and consultancy on real problems.",
    ],
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
    tagline: "Infrastructure for a growing region.",
    summary:
      "Plan, design and build roads, bridges, buildings and water systems that are safe and sustainable.",
    started: "August 2020",
    hod: "Tarique Aman Mazumder",
    intake: 60,
    about: [
      "The Civil Engineering Department started in August 2020 and offers a B.Tech degree under Assam Science & Technology University (ASTU), Guwahati, with an annual intake capacity of 60 students. Diploma holders in the same or an allied branch can join through lateral entry.",
      "Students learn to design, build and maintain the physical and natural built environment — bridges, roads, canals, dams and buildings — preparing them for careers in state and central government projects, the railways, private construction, the armed forces, engineering services and consultancy.",
    ],
    vision:
      "To establish an outstanding centre of regional and national reputation for quality engineering education for students from across Assam, while serving the community and creating an excellent research environment.",
    mission: [
      "Offer an undergraduate course in civil engineering and industry-oriented courses that add value to student competencies.",
      "Promote quality education, research and consultancy for industrial and societal needs.",
      "Inculcate moral and ethical values and develop leadership qualities in students.",
      "Provide state-of-the-art resources for a good learning environment.",
      "Encourage higher education, competitive exams and career-enhancing courses.",
      "Establish a centre of excellence in emerging areas of research and work with industry on its problems.",
    ],
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
    tagline: "Design, energy and manufacturing.",
    summary:
      "From thermodynamics to machine design and manufacturing, learn how machines and energy systems are built.",
    started: "2020",
    hod: "Dr. Md Zakir Hussain",
    intake: 60,
    about: [
      "The Department of Mechanical Engineering was started in 2020 and offers a B.Tech degree under Assam Science & Technology University (ASTU), Guwahati, with an annual intake capacity of 60 students and a syllabus at par with the AICTE curriculum.",
      "Students learn the fundamentals of production, manufacturing, design and related core subjects. The department runs the central workshop, where students from every branch get first-hand experience of basic manufacturing processes, and its labs are equipped for hands-on experiments.",
    ],
    vision:
      "To be a Centre of Excellence in Mechanical Engineering and to produce quality mechanical engineers who can solve challenging problems across the discipline.",
    mission: [
      "Provide a platform for holistic development and create globally competent mechanical engineers.",
      "Build a culture of scientific thinking that links theory with practical applications.",
      "Prepare students for postgraduate and competitive examinations.",
      "Apply mechanical engineering to the problems of local communities and society.",
      "Collaborate with reputed institutions and industries to raise academic standards and student exposure.",
    ],
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

// Departments that teach students of every branch.
export const supportingDepartments = [
  {
    name: "Mathematics",
    started: "2017",
    text: "Provides both basic and engineering-oriented mathematics for all B.Tech students.",
  },
  {
    name: "Physics",
    started: "2017",
    hod: "Dr. Bishwajit Baruah",
    text: "One of the founding departments, imparting quality education with thorough concepts.",
  },
  {
    name: "Chemistry",
    started: "2017",
    text: "Provides basic and engineering-oriented chemistry theory and practical courses.",
  },
  {
    name: "Humanities & Commerce",
    started: "2017",
    hod: "Radab Basumatary",
    text: "Teaches English, Constitution of India, Environmental Science, Economics, Sociology, and Accountancy & Management, with a dedicated language lab.",
  },
];

export function getDepartment(slug) {
  return departments.find((d) => d.slug === slug);
}
