import { officialDoc } from "./site";

// Content sourced from https://www.bvec.ac.in/

export const aboutText = [
  "Barak Valley Engineering College is the first state government engineering college in the Barak Valley region of Assam and the fifth state engineering college in Assam. The initiative for setting up the college was taken in 2009 by the Government of Assam, and it started full-fledged operation in 2017 under the purview of the Directorate of Technical Education (DTE), Assam.",
  "The campus is situated in Nirala, in the south-east of Sribhumi (formerly Karimganj) district. It is spread across about 60 bighas of land, surrounded by foothills and greenery, and is connected to the National Highway by PWD rural roads.",
];

export const principal = {
  name: "Prof. (Dr.) Krishna Lal Baishnab",
  title: "Principal",
  email: "principal@bvec.ac.in",
  photo: "/images/staff/principal.jpg",
  bio: [
    "Dr. Krishna Lal Baishnab, Professor of Electronics and Communication Engineering (on lien), joined as the Principal of Barak Valley Engineering College on 29 May 2026. He obtained his B.Tech from Regional Engineering College (now NIT) Silchar, followed by M.Tech and Ph.D. degrees from IIT Kharagpur and NIT Silchar respectively.",
    "He has an academic and administrative career of over 28 years at NIT Silchar, where he served in several key capacities, including Registrar (in-charge) for nearly two years.",
    "He has led several sponsored R&D projects in VLSI and semiconductor design and has published over 150 research papers in reputed SCI journals and international conferences. Under his leadership, a VLSI chip was designed and fabricated as part of the “Atmanirbhar Bharat” initiative and unveiled by the Hon’ble Prime Minister of India at SEMICON-2025.",
    "Fifteen Ph.D. scholars have completed their doctoral degrees under his supervision.",
  ],
  highlights: [
    { value: "28+", label: "Years at NIT Silchar" },
    { value: "150+", label: "Research papers" },
    { value: "15", label: "Ph.D.s guided" },
  ],
  message: [
    "It gives me immense pleasure to extend my warm greetings to all students, faculty members, staff, parents, alumni, and well-wishers of Barak Valley Engineering College (BVEC).",
    "At BVEC, we are committed to nurturing competent, innovative, and socially responsible engineers who can meet the challenges of an ever-evolving technological world. Guided by our vision of advancing technical education in Assam through excellence, collaboration, and innovation, we strive to provide a dynamic learning environment supported by modern infrastructure, dedicated faculty, and strong industry-academia interaction.",
    "Our mission is to develop technically proficient professionals with analytical, leadership, and ethical values while fostering research, creativity, and lifelong learning. Beyond academics, we encourage students to participate in sports, cultural activities, technical events, and community engagement to ensure their holistic development.",
    "We also aspire to contribute to the region's growth by promoting skill development, strengthening partnerships with industry and academic institutions, and encouraging innovation and entrepreneurship. Through these efforts, we aim to prepare graduates who are not only successful professionals but also responsible citizens committed to serving society.",
  ],
};

export const nonTeachingStaff = [
  { name: "Javed Hussain Mazumdar", role: "Senior Assistant", email: "javedmazumdar@bvec.ac.in", photo: "/images/staff/javed-hussain-mazumdar.jpg" },
  { name: "Mridul Rabha", role: "Senior Assistant", email: "mridulrabha@bvec.ac.in", photo: "/images/staff/mridul-rabha.jpg" },
  { name: "Shakul Alam Barbhuiya", role: "Senior Assistant", email: "sab@bvec.ac.in", photo: "/images/staff/shakul-alam-barbhuiya.jpg" },
  { name: "Arindam Roy", role: "Junior Assistant", email: "arindamroy@bvec.ac.in", photo: "/images/staff/arindam-roy.jpg" },
  { name: "Bidya Ratan Yadav", role: "Junior Assistant", email: "bidya@bvec.ac.in", photo: "/images/staff/bidya-ratan-yadav.jpg" },
  { name: "Pratyush Nath", role: "Junior Assistant", email: "pratyushnath@bvec.ac.in", photo: "/images/staff/pratyush-nath.jpg" },
  { name: "Titan Ghosh", role: "Junior Assistant", email: "titanghosh@bvec.ac.in", photo: "/images/staff/titan-ghosh.jpg" },
];

export const placement = {
  highest: "10 LPA",
  average: "3.6 – 4.2 LPA",
  recruiters: ["TCS", "Cognizant", "Mindtree", "Atlan"],
  mous: ["Ziroh Labs", "C-DAC", "MSME"],
  email: "tpo@bvec.ac.in",
  about: [
    "BVEC places strong emphasis on industry–academia collaboration. The college has Memoranda of Understanding with Ziroh Labs, C-DAC and MSME, among others, so students are exposed to current industry trends alongside their curriculum.",
    "Multinational companies, tech firms and some of India's best start-ups have recruited BVEC students, including TCS, Cognizant, Mindtree and Atlan. The highest package recorded to date is 10 LPA, with an average package of 3.6 LPA to 4.2 LPA every year.",
    "Because aptitude tests are now part of nearly every recruitment process, the college holds mentoring sessions on interviews, aptitude and soft skills in collaboration with T.I.M.E. and other platforms.",
  ],
};

export const hostel = {
  email: "hostelwarden@bvec.ac.in",
  seats: 80,
  text: [
    "The campus has two in-campus hostels, one for boys and one for girls, within easy reach of every other building. Round-the-clock security is provided across the campus and hostels.",
    "Every room, corridor and bathroom has solar-powered lighting — the first of its kind in Assam. Rooms are spacious, furnished and shared by two boarders.",
  ],
  features: [
    "80 seats across both hostels, two per room",
    "Solar-powered lighting throughout",
    "24×7 security",
    "Kitchen and dining hall in each hostel",
    "Common room for hostel activities",
    "Two-bed sick room in each hostel",
    "Rooms for differently abled residents",
    "Two guest rooms",
  ],
  documents: [
    { title: "Hostel rules and regulations", url: officialDoc("pdf/RULES AND REGULATIONS FOR HOSTEL RESIDENTS.pdf") },
    { title: "Hostel Committee", url: officialDoc("upload/documents/Hostel Committee.pdf") },
    { title: "Food Committee", url: officialDoc("upload/documents/Food Committee.pdf") },
  ],
};

export const grievanceCommittee = {
  text: "Processes and addresses grievances from the public and stakeholders. Grievances can be registered by email, in person to any member, or through the online form.",
  order: officialDoc("upload/documents/Grievance.pdf"),
  members: [
    ["Dr. Diganta Goswami", "Chairman"],
    ["Mr. Mridul Roy", "Member"],
    ["Dr. Satyajit Das", "Member"],
    ["Mr. Baharul Hussain", "Member"],
    ["Smt. Jayashree Das", "Member"],
    ["Dr. Md. Zakir Hussain", "Member"],
    ["Dr. Debajit Sarma", "Member"],
    ["Dr. Barnana Baruah", "Member"],
    ["Mr. Javed Hussain Mazumder", "Member"],
    ["Mr. Pratyush Nath", "Member"],
  ],
};

export const documents = {
  academic: [
    { title: "Academic Calendar July – December 2026", url: officialDoc("upload/notification/1787742496.pdf") },
    { title: "Academic Regulations for B.E. 1st Semester", url: officialDoc("pdf/Academic Regulations_B.E._1st Semester.pdf") },
    { title: "1st Semester Syllabus", url: officialDoc("pdf/GU_B.E._1st_sem_syllabus.pdf") },
    { title: "2nd Semester Syllabus", url: officialDoc("pdf/GU_B.E._2nd_sem_syllabus.pdf") },
  ],
  aicte: [
    { title: "Extension of Approval 2026-27", url: officialDoc("upload/documents/AICTE/EOA Report 2026-27.pdf") },
    { title: "Extension of Approval 2025-26", url: officialDoc("upload/documents/AICTE/EOA Report 2025-2026.pdf") },
    { title: "Extension of Approval 2024-25", url: officialDoc("upload/documents/AICTE/EOA Report 2024-25.pdf") },
    { title: "Extension of Approval 2023-24", url: officialDoc("upload/documents/AICTE/EoA 2023-24.pdf") },
    { title: "Extension of Approval 2022-23", url: officialDoc("upload/documents/AICTE/EoA 2022-23.pdf") },
  ],
  publications: [
    { title: "VIBGYOR college magazine — Vol. IV (2024-25)", url: officialDoc("upload/documents/magazine/VIBGYOR_2024-25.pdf") },
    { title: "VIBGYOR college magazine — Vol. III (2023-24)", url: officialDoc("upload/documents/magazine/VIBGYOR_2023-24.pdf") },
    { title: "NSS Activity Report 2025", url: officialDoc("upload/documents/NSS/NSS ACTIVITY REPORT_2025_BVEC.pdf") },
  ],
};

export const rti = [
  {
    heading: "State Public Information Officer (SPIO)",
    name: "Mr. Kamal Hassan Laskar",
    role: "Assistant Professor, ETE",
    email: "kamal.laskar@bvec.ac.in",
    phone: "+91 76379 57921",
  },
  {
    heading: "First Appellate Authority (FAA)",
    name: "Prof. Krishna Lal Baishnab",
    role: "Principal, BVEC",
    email: "principal@bvec.ac.in",
  },
];

export const pmVidyalaxmiUrl = "https://pmvidyalaxmi.co.in";
export const antiRaggingDoc = officialDoc("upload/notification/1726687156.pdf");
