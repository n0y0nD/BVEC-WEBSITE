// Teaching staff as listed on the department pages of https://www.bvec.ac.in/
// `area` is the subject for the Basic Sciences & Humanities group.
const AP = "Assistant Professor";

export const faculty = [
  { name: "Dr. Kausthav Pratim Kalita", role: `${AP} & HoD`, dept: "CSE" },
  { name: "Gautam Nath", role: AP, dept: "CSE" },
  { name: "Jayashree Das", role: AP, dept: "CSE" },
  { name: "Khanjan Changmai Baruah", role: AP, dept: "CSE" },
  { name: "N Rana Singha", role: AP, dept: "CSE" },
  { name: "Shashadhar Das", role: AP, dept: "CSE" },
  { name: "Swmdwn Basumatary", role: AP, dept: "CSE" },

  { name: "Dr. Satyajit Das", role: "Associate Professor & HoD", dept: "ETE" },
  { name: "Dr. Debajit Sarma", role: AP, dept: "ETE" },
  { name: "Debasish Samajpati", role: AP, dept: "ETE" },
  { name: "Kamal Hassan Laskar", role: AP, dept: "ETE" },
  { name: "Dr. Sabyasachi Bhattacharyya", role: AP, dept: "ETE" },
  { name: "Sudip Gorlosa", role: AP, dept: "ETE" },

  { name: "Tarique Aman Mazumder", role: `${AP} & HoD`, dept: "CE" },
  { name: "Prof. Diganta Goswami", role: "Professor", dept: "CE" },
  { name: "Dr. Niranjan Borah", role: AP, dept: "CE" },
  { name: "Mohammad Imran", role: AP, dept: "CE" },
  { name: "Thaihamdau Longmailai", role: AP, dept: "CE" },
  { name: "Theophilus J Rengma", role: AP, dept: "CE" },

  { name: "Dr. Md Zakir Hussain", role: `${AP} & HoD`, dept: "ME" },
  { name: "Deepak Hojai", role: AP, dept: "ME" },
  { name: "Madhurjya Baruah", role: AP, dept: "ME" },
  { name: "Md Imtiaz Alam", role: AP, dept: "ME" },

  { name: "Anup Das", role: AP, dept: "BSH", area: "Mathematics" },
  { name: "Sabi Biswas", role: AP, dept: "BSH", area: "Mathematics" },
  { name: "Dr. Bishwajit Baruah", role: `${AP} & HoD`, dept: "BSH", area: "Physics" },
  { name: "Sayan Das", role: AP, dept: "BSH", area: "Physics" },
  { name: "Avinash Hazarika", role: AP, dept: "BSH", area: "Chemistry" },
  { name: "Radab Basumatary", role: `${AP} & HoD`, dept: "BSH", area: "Humanities" },
  { name: "Dr. Pinak Deb", role: AP, dept: "BSH", area: "Humanities" },
  { name: "Mridul Roy", role: AP, dept: "BSH", area: "Humanities" },
];

export const facultyDepartments = [
  { code: "All", label: "All departments" },
  { code: "CSE", label: "Computer Science" },
  { code: "ETE", label: "Electronics & Telecom" },
  { code: "CE", label: "Civil" },
  { code: "ME", label: "Mechanical" },
  { code: "BSH", label: "Basic Sciences & Humanities" },
];

export const facultyByDept = (code) => faculty.filter((f) => f.dept === code);
