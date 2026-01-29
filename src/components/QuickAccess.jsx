const items = [
  { title: "Admissions", desc: "Admission process, eligibility & dates." },
  { title: "Departments", desc: "Explore engineering departments." },
  { title: "Notices", desc: "Latest announcements & updates." },
  { title: "Faculty", desc: "Meet our expert educators." },
];

export default function QuickAccess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <span className="text-blue-500 font-medium">
                Learn more →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
