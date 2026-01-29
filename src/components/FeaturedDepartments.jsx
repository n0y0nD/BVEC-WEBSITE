const depts = [
  {
    title: "Computer Science & Engineering",
    desc: "AI, ML, and Software Development.",
  },
  {
    title: "Electronics & Telecommunication",
    desc: "Circuits, embedded systems & communication.",
  },
  {
    title: "Mechanical Engineering",
    desc: "Design, manufacturing & automation.",
  },
  {
    title: "Civil Engineering",
    desc: "Infrastructure, construction, and sustainable design.",
  }
];

export default function FeaturedDepartments() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured Departments
          </h2>
          <p className="text-gray-600">
            Explore our top engineering programs
          </p>
        </div>

        <div className="flex flex-nowrap gap-6 overflow-x-auto w-full py-4">
          {depts.map((d, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl border shadow-sm
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{d.title}</h3>
              <p className="text-gray-600 mb-6">{d.desc}</p>
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
