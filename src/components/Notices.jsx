const notices = [
  { title: "Semester End Examination Schedule Released", date: "Jan 20, 2026", tag: "Exam" },
  { title: "Annual Technical Fest - TechNova 2026", date: "Jan 18, 2026", tag: "Event" },
  { title: "Workshop on Machine Learning & AI", date: "Jan 15, 2026", tag: "General" },
];

export default function Notices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Notices</h2>
          <p className="text-gray-600">Stay informed with recent updates</p>
        </div>

        <div className="space-y-4 mb-8">
          {notices.map((n, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-6 rounded-2xl border
                         hover:shadow-lg transition-all duration-300"
            >
              <div>
                <h3 className="font-semibold mb-1">{n.title}</h3>
                <p className="text-sm text-gray-600">{n.date}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600">
                {n.tag}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
            View All Notices
          </button>
        </div>
      </div>
    </section>
  );
}
