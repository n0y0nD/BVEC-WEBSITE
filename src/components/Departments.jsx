import DepartmentCard from "./DepartmentCard";

export default function Departments() {
  const departments = [
    {
      title: "Computer Science & Engineering",
      description: "Modern computing, AI, software development and research.",
    },
    {
      title: "Electrical Engineering",
      description: "Power systems, machines, and industrial electronics.",
    },
    {
      title: "Mechanical Engineering",
      description: "Design, manufacturing, and thermal sciences.",
    },
    {
      title: "Civil Engineering",
      description: "Infrastructure, construction, and sustainable design.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Departments
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {departments.map((dept, index) => (
            <DepartmentCard
              key={index}
              title={dept.title}
              description={dept.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
