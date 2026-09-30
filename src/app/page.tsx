import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header / Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">Pi Locks</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-900 font-medium">Services</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-900 font-medium">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-900 font-medium">Contact</a>
            </nav>
            <div className="hidden md:flex items-center">
              <a href="tel:7787300914" className="text-blue-900 font-bold mr-4">778-730-0914</a>
              <a href="#contact" className="bg-blue-900 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800 transition">Get a Quote</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Secure. Connect. Control.
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
              Premier security, structured cabling, and access control solutions across Metro Vancouver and British Columbia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-white text-blue-900 px-8 py-3 rounded-md font-bold text-lg text-center hover:bg-gray-100 transition shadow-lg">
                Our Services
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg text-center hover:bg-white hover:text-blue-900 transition shadow-lg">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            {/* Placeholder for hero image */}
            <div className="bg-blue-800 rounded-lg h-80 w-full flex items-center justify-center border-4 border-blue-700 shadow-2xl">
              <span className="text-blue-300 flex items-center flex-col">
                <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                [Security Systems Visual]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Services & Specialisations</h3>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Access Control & Physical Security</h4>
              <p className="text-gray-600">
                Card/fob readers, cloud access, mobile credentials, smart locks, and intercoms.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Structured Cabling & Fiber</h4>
              <p className="text-gray-600">
                Cat6/6A data drops, fiber backbone, server rack cleanup, and patch panel dressing.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">IP Surveillance / CCTV</h4>
              <p className="text-gray-600">
                High-definition security cameras, cloud/AI analytics, and robust NVR setups.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl shadow-sm p-8 border border-gray-200 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Other Services</h4>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Alarm systems, commercial AV, door hardware/locks, and low-voltage maintenance/MAC services.
            </p>
          </div>
        </div>
      </section>

      {/* Target Verticals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Who We Serve</h3>
              <div className="w-24 h-1 bg-blue-900 mb-8"></div>
              <p className="text-lg text-gray-600 mb-8">
                We partner with a wide range of professionals and industries across British Columbia to deliver secure, reliable, and cutting-edge solutions.
              </p>
              <ul className="space-y-4">
                {[
                  "General Contractors & Electrical Contractors",
                  "Architects & Interior Designers",
                  "Commercial Real Estate & Property Managers",
                  "Multi-Family Residential & Strata Corporations",
                  "Retail, Industrial & Office Tenant Improvements (TI)"
                ].map((vertical, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-800 font-medium">{vertical}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              <div className="bg-gray-200 h-48 rounded-lg"></div>
              <div className="bg-gray-300 h-48 rounded-lg mt-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Featured Projects</h3>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="group rounded-xl overflow-hidden shadow-2xl bg-gray-800">
              <div className="h-64 bg-gray-700 relative">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span>[Project Image]</span>
                </div>
              </div>
              <div className="p-8">
                <div className="text-blue-400 font-bold text-sm tracking-wider uppercase mb-2">Access Control</div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">Commercial Access Control System</h4>
                <p className="text-gray-400 mb-4">Coquitlam, BC</p>
                <p className="text-gray-300">
                  Comprehensive upgrade of physical security featuring smart locks, card readers, and cloud access management for a large commercial facility.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-xl overflow-hidden shadow-2xl bg-gray-800">
              <div className="h-64 bg-gray-700 relative">
                {/* Image placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span>[Project Image]</span>
                </div>
              </div>
              <div className="p-8">
                <div className="text-blue-400 font-bold text-sm tracking-wider uppercase mb-2">Structured Cabling</div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">Data Center Cabling Retrofit</h4>
                <p className="text-gray-400 mb-4">Metro Vancouver, BC</p>
                <p className="text-gray-300">
                  Complete overhaul of data infrastructure including fiber backbone installation, server rack cleanup, and precision patch panel dressing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Metrics Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-b border-blue-800 py-12">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-2">10+</div>
              <div className="text-lg font-medium text-blue-100 uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-2">Fully</div>
              <div className="text-lg font-medium text-blue-100 uppercase tracking-wide">Licensed & Certified</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-blue-300 mb-2">24/7</div>
              <div className="text-lg font-medium text-blue-100 uppercase tracking-wide">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-10 lg:p-16 bg-blue-900 text-white">
                <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                <p className="text-blue-100 mb-10 text-lg">
                  Ready to secure your premises or upgrade your network? Contact us today for a consultation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-4 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p className="text-blue-200">778-730-0914</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-4 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-blue-200">info@pilocks.ca</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-4 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Address</h4>
                      <p className="text-blue-200 leading-relaxed">
                        #1 - 1322 Ketch Court<br/>
                        Coquitlam, BC V3K 6W1<br/>
                        <span className="text-sm mt-2 block italic">Serving all over British Columbia, primarily Metro Vancouver</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-400 mr-4 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Operating Hours</h4>
                      <p className="text-blue-200">Monday to Friday (9:00 AM to 5:00 PM)</p>
                      <p className="text-blue-300 text-sm mt-1">Emergency service available</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-10 lg:p-16">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                    <select id="service" className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500">
                      <option>Access Control & Physical Security</option>
                      <option>Structured Cabling & Fiber</option>
                      <option>IP Surveillance / CCTV</option>
                      <option>Other Services</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" rows={4} className="w-full border-gray-300 rounded-md shadow-sm p-3 border focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="button" className="w-full bg-blue-900 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-800 transition shadow-md">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">Pi Locks</h2>
              <p>Secure. Connect. Control.</p>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Pi Locks. All rights reserved.</p>
              <p className="mt-2 text-sm">Serving Metro Vancouver & British Columbia</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
