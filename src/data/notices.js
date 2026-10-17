import { officialDoc } from "./site";

// Notices published on the official website (newest first). Each links to its PDF.
// The site shows no dates, so `date` is the upload date taken from the PDF file name.
export const noticeCategories = ["All", "Admission", "Academic", "Tender", "General"];

const raw = [
  ["1791909222", "2026-10-13", "Tender", "Tender Cancellation Notice for Operation and Management of the Institute Canteen"],
  ["1791909157", "2026-10-13", "Tender", "Tender Cancellation Notice of Supply of Water Cooler and RO Water Purifier"],
  ["1791304045", "2026-10-06", "Admission", "Notice for Refund of Withdrawal Candidates of CEE 2026 & JLEE 2026 Admission"],
  ["1790789933", "2026-09-30", "Tender", "Tender Notice for supply, fitting, installation, testing and commissioning of Water Cooler and RO Water Purifier at BVEC"],
  ["1789054808", "2026-09-10", "Admission", "JLEE 2026 Spot Admission Instruction Notice"],
  ["1788961342", "2026-09-09", "Tender", "Notice Inviting Tender (NIT) for Operating and Managing the Institute Canteen"],
  ["1788949982", "2026-09-09", "Admission", "JLEE 2026 2nd Spot Admission Notice"],
  ["1788887643", "2026-09-08", "Admission", "CEE 2026 2nd Round Spot Admission Notice"],
  ["1788180132", "2026-08-31", "Tender", "Short Tender Notice for Supply, Fitting, Installation, Testing & Commissioning of Water Cooler and RO Purifier"],
  ["1787986875", "2026-08-29", "Admission", "Notice Regarding Upgradation of Seat in CEE 2026"],
  ["1787742496", "2026-08-26", "Academic", "Academic Calendar July – December 2026"],
  ["1787150301", "2026-08-19", "Admission", "Notice Regarding Spot CEE 2026 and Spot JLEE 2026 Final Admission"],
  ["1786622319", "2026-08-13", "Academic", "Induction Programme & Class Commencement for Newly Admitted Students 2026"],
  ["1786348192", "2026-08-10", "Admission", "CEE 2026 Spot Counselling Notice from DTE"],
  ["1786348148", "2026-08-10", "Admission", "JLEE 2026 Spot Counselling Notice from DTE"],
  ["1786256244", "2026-08-09", "Admission", "CEE 2nd Round Counselling cum Final Admission Extension Notice"],
  ["1786187127", "2026-08-08", "Admission", "CEE 2nd Round Counselling cum Final Admission Notice"],
  ["1785253143", "2026-07-28", "Admission", "CEE 1st Round Counselling Notice"],
  ["1785036188", "2026-07-26", "Academic", "Class Commencement of 3rd, 5th and 7th Semester (All Branches)"],
  ["1751377617", "2025-07-01", "General", "Pre-matric, Post-matric and Top Class Scholarship for Differently Abled Students"],
  ["1726687156", "2024-09-19", "General", "Information about Anti-Ragging Regulations of AICTE and UGC"],
];

export const notices = raw.map(([id, date, category, title]) => ({
  id,
  date,
  category,
  title,
  url: officialDoc(`upload/notification/${id}.pdf`),
}));

export const getNotice = (id) => notices.find((n) => n.id === id);
