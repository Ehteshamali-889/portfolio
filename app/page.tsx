import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">Portfolio</span>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="about" className="max-w-4xl mx-auto px-6 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ehtesham Ali
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl text-justify">
            Software Engineer with hands-on experience building scalable web and mobile applications across multiple industries. Skilled in full-stack development with strong expertise in backend systems, API integrations, and database design. Experienced in delivering business-focused solutions from concept to deployment, including admin panels, customer portals, and mobile apps. Comfortable working independently or with teams on fast-paced product development. Focused on writing clean, maintainable, and production-ready code.
          </p>
        </section>

        <section id="skills" className="bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Full-Stack Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                  <li>LAMP Stack (Linux, Apache, MySQL, PHP)</li>
                  <li>PERN Stack (PostgreSQL, Express.js, React.js, Node.js)</li>
                  <li>Mobile Development using React Native</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Technical Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>REST APIs</li>
                  <li>Database Design</li>
                  <li>Third-Party Integrations</li>
                  <li>Authentication</li>
                  <li>Admin Dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Projects Worked On</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Management Systems</h3>
              <p className="text-gray-600 text-sm">Built internal business platforms for operations, workflow automation, and reporting.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Ecommerce Platforms</h3>
              <p className="text-gray-600 text-sm">Developed scalable online stores with product management, payments, and order workflows.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Real Estate Platforms</h3>
              <p className="text-gray-600 text-sm">Created property listing systems with search, filters, lead capture, and admin management.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Cleaning Services Portals</h3>
              <p className="text-gray-600 text-sm">Built booking and service management systems with customer and staff workflows.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Ireland Application Portal</h3>
              <p className="text-gray-600 text-sm">Developed a portal where users can apply for opportunities in Ireland with form workflows and admin review.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Health Systems & Mobile Apps</h3>
              <p className="text-gray-600 text-sm">Worked on healthcare-focused systems and mobile applications for operational and user-facing needs.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Email Deliverability Systems</h3>
              <p className="text-gray-600 text-sm">Built and optimized systems focused on email sending, inbox placement, and delivery performance.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">QA / Testing Platform</h3>
              <p className="text-gray-600 text-sm">Worked on a QA project similar to Kualitee for test case management, issue tracking, and reporting.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-6">Interested in working together? Feel free to reach out.</p>
            <a href="mailto:ehteshamali1142@gmail.com" className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              Contact Me
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © 2026. All rights reserved.
        </div>
      </footer>
    </div>
  );
}