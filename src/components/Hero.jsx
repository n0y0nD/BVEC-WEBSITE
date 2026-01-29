export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="blob1"></div>
      <div className="blob2"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          BARAK VALLEY
          <br />
          ENGINEERING COLLEGE
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          (A Govt. of Assam Institution, approved by AICTE, New Delhi, Govt. of
          India) 
          <p className="text-gray-600"> 
            District: Sribhumi, Assam, 788701</p> 
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#"
            className="px-8 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Explore Programs
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          <a
            href="#"
            className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
