// College details. Content sourced from the official website, https://www.bvec.ac.in/
export const OFFICIAL_SITE = "https://www.bvec.ac.in";

// Builds a link to a document hosted on the official website.
export const officialDoc = (path) => `${OFFICIAL_SITE}/${encodeURI(path)}`;

export const site = {
  name: "Barak Valley Engineering College",
  shortName: "BVEC",
  motto: "Minds Towards Innovation",
  established: 2017,
  description:
    "Barak Valley Engineering College (BVEC) is a Government of Assam engineering college at Nirala, Sribhumi, approved by AICTE and affiliated to Assam Science and Technology University.",
  url: "https://bvec.ac.in",
  status:
    "A Govt. of Assam institution, approved by AICTE, New Delhi and affiliated to Assam Science and Technology University (ASTU)",
  address: {
    line1: "Barak Valley Engineering College",
    line2: "Nirala, District: Sribhumi (formerly Karimganj)",
    line3: "Assam – 788701, India",
  },
  email: "principal@bvec.ac.in",
  emails: [
    { label: "Principal's office", value: "principal@bvec.ac.in" },
    { label: "Training & Placement", value: "tpo@bvec.ac.in" },
    { label: "Hostel warden", value: "hostelwarden@bvec.ac.in" },
    { label: "Library", value: "Library@bvec.ac.in" },
  ],
  mapQuery: "Barak Valley Engineering College, Nirala, Assam",
  mapUrl:
    "https://www.google.co.in/maps/place/Barak+Valley+Engineering+College/@24.7958126,92.4662784,14z/data=!4m5!3m4!1s0x374e2a23ec67508b:0xc81a2f646e8e4f46!8m2!3d24.7958126!4d92.4837879",
  libraryUrl: "https://sites.google.com/bvec.ac.in/library-bvec/home",
  grievanceFormUrl: "https://forms.gle/DNEPZzuvUUzSzP6WA",
  distances: [
    { place: "Badarpur railway junction", distance: "15 km" },
    { place: "Badarpur ASTC bus station", distance: "22 km" },
    { place: "Kumbhirgram Airport, Silchar", distance: "60 km" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/departments", label: "Departments" },
  { href: "/admissions", label: "Admissions" },
  { href: "/faculty", label: "Faculty" },
  { href: "/notices", label: "Notices" },
  {
    label: "Campus",
    children: [
      { href: "/administration", label: "Administration" },
      { href: "/placements", label: "Training & Placement" },
      { href: "/facilities", label: "Hostels & Library" },
      { href: "/committees", label: "Committees" },
      { href: "/downloads", label: "Downloads & RTI" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

// Every internal page, for the sitemap.
export const allPages = navLinks.flatMap((l) => (l.children ? l.children : [l])).map((l) => l.href);

export const stats = [
  { value: "2017", label: "Year established" },
  { value: "4", label: "B.Tech programmes" },
  { value: "240", label: "Seats every year" },
  { value: "10 LPA", label: "Highest placement" },
];
