export default function CTA() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Join BVEC?
        </h2>
        <p className="text-gray-600 mb-8">
          Take the first step towards an exceptional engineering education.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition shadow-lg">
            Start Your Application
          </button>
          <button className="px-8 py-4 bg-white border-2 rounded-xl hover:bg-gray-50 transition">
            Contact Admissions
          </button>
        </div>
      </div>
    </section>
  );
}
