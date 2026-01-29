export default function Stats() {
  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "2000+", label: "Students Enrolled" },
    { value: "150+", label: "Expert Faculty" },
    { value: "95%", label: "Placement Rate" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="text-center transition-transform duration-300 hover:-translate-y-1"
        >
          <div className="text-4xl font-bold text-blue-500 mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
