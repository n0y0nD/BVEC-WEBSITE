export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Barak Valley Engineering College</h3>
            <p className="text-gray-400 text-sm">
              Empowering minds, building futures.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About</li>
              <li>Departments</li>
              <li>Admissions</li>
              <li>Faculty</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Notices</li>
              <li>Alumni</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-400">
              Barak Valley Engineering College, Assam
            </p>
          </div>
        </div>

        <div class="mt-12 pt-8 border-t border-white/10">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p class="text-sm text-gray-400">© 2026 BVEC. All rights reserved.</p>
                    <p class="text-xs text-gray-500">This is a UI/UX Project made by NAYANJYOTI DAS.</p>
                </div>
            </div>
      </div>
    </footer>
  );
}
