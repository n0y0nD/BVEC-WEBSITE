export default function DepartmentCard({ title, description }) {
  return (
    <div className="p-8 bg-white rounded-2xl border shadow hover:shadow-lg transition min-w-[320px] shrink-0">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}
