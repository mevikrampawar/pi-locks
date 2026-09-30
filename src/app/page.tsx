import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center transition-all duration-300">
        <Link href="/" className="text-2xl md:text-3xl font-light tracking-tighter uppercase">
          Pi Locks
        </Link>
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium">
          <Link href="#services" className="hover:opacity-50 transition-opacity">Services</Link>
          <Link href="#projects" className="hover:opacity-50 transition-opacity">Projects</Link>
          <Link href="#contact" className="hover:opacity-50 transition-opacity">Contact</Link>
        </div>
        <button className="md:hidden flex flex-col gap-2 w-8 z-50">
          <span className="w-full h-px bg-white"></span>
          <span className="w-full h-px bg-white"></span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-zinc-950">
        {/* Placeholder for a dramatic dark hero image or video */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          {/* This would be an architectural or abstract security image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 w-full px-6 md:px-12 flex flex-col items-start mt-32">
          <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-light tracking-tighter uppercase">
            Secure.<br />
            <span className="ml-[10vw]">Connect.</span><br />
            <span className="ml-[20vw]">Control.</span>
          </h1>
        </div>
        
        <div className="absolute bottom-12 left-6 md:left-12 z-10 max-w-sm">
          <p className="text-sm md:text-base font-light opacity-80 uppercase tracking-widest leading-relaxed">
            Metro Vancouver & British Columbia
            <br />Physical Security & Access Control
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white text-black py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <h2 className="text-sm md:text-base font-medium uppercase tracking-[0.2em] lg:w-1/4 pt-2">
            The Standard
          </h2>
          <div className="lg:w-3/4">
            <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
              We define the standard for <span className="italic font-normal">structured cabling</span> and <span className="italic font-normal">access control</span> across British Columbia. Integrating precision engineering with modern security needs.
            </p>
            
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/20 pt-12">
              <div>
                <h3 className="text-6xl font-light mb-4">10+</h3>
                <p className="text-sm uppercase tracking-widest opacity-60">Years Experience</p>
              </div>
              <div>
                <h3 className="text-6xl font-light mb-4">24/7</h3>
                <p className="text-sm uppercase tracking-widest opacity-60">Emergency Service</p>
              </div>
              <div>
                <h3 className="text-6xl font-light mb-4">BC</h3>
                <p className="text-sm uppercase tracking-widest opacity-60">Service Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-zinc-950 text-white py-32 md:py-48 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter uppercase">Expertise</h2>
            <p className="max-w-md text-lg font-light opacity-70">
              Delivering robust, scalable, and sophisticated low-voltage solutions for contractors, real estate, and enterprise clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/20">
            {/* Service 1 */}
            <div className="bg-zinc-950 p-12 lg:p-20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <div className="relative z-10">
                <span className="text-sm uppercase tracking-widest opacity-50 mb-8 block">01</span>
                <h3 className="text-3xl md:text-4xl font-light mb-6">Access Control & Physical Security</h3>
                <p className="font-light opacity-70 leading-relaxed max-w-sm">
                  Card and fob readers, cloud-managed access, mobile credentials, smart locks, and advanced intercom systems.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-zinc-950 p-12 lg:p-20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <div className="relative z-10">
                <span className="text-sm uppercase tracking-widest opacity-50 mb-8 block">02</span>
                <h3 className="text-3xl md:text-4xl font-light mb-6">Structured Cabling & Fiber</h3>
                <p className="font-light opacity-70 leading-relaxed max-w-sm">
                  Cat6/6A data drops, high-speed fiber backbones, comprehensive server rack cleanup, and precision patch panel dressing.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-zinc-950 p-12 lg:p-20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <div className="relative z-10">
                <span className="text-sm uppercase tracking-widest opacity-50 mb-8 block">03</span>
                <h3 className="text-3xl md:text-4xl font-light mb-6">IP Surveillance / CCTV</h3>
                <p className="font-light opacity-70 leading-relaxed max-w-sm">
                  High-definition security cameras, cloud & AI-driven analytics, and secure NVR setups for round-the-clock monitoring.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-zinc-950 p-12 lg:p-20 group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <div className="relative z-10">
                <span className="text-sm uppercase tracking-widest opacity-50 mb-8 block">04</span>
                <h3 className="text-3xl md:text-4xl font-light mb-6">Comprehensive Low-Voltage</h3>
                <p className="font-light opacity-70 leading-relaxed max-w-sm">
                  Alarm systems, commercial AV integrations, specialized door hardware, and ongoing MAC (Move, Add, Change) maintenance services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Verticals */}
      <section className="bg-white text-black py-32 md:py-48 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-12">
              Partnerships <br />Built on <span className="italic">Trust</span>
            </h2>
            <ul className="space-y-8">
              {[
                "General & Electrical Contractors",
                "Architects & Interior Designers",
                "Commercial Real Estate & Property Managers",
                "Multi-Family Residential & Strata",
                "Retail, Industrial & Office TI"
              ].map((vertical, idx) => (
                <li key={idx} className="flex items-center gap-6 group cursor-default">
                  <span className="text-xs tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  <span className="text-xl md:text-2xl font-light group-hover:translate-x-4 transition-transform duration-300">{vertical}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative min-h-[500px]">
            {/* Abstract/Architectural placeholder image */}
            <div className="absolute inset-0 bg-gray-200">
               <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32 md:py-48 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-light tracking-tighter uppercase mb-24">Portfolio</h2>
          
          <div className="space-y-32">
            {/* Project 1 */}
            <div className="group flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-3/5 w-full aspect-[4/3] relative overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out" />
              </div>
              <div className="lg:w-2/5 w-full flex flex-col justify-center">
                <p className="text-sm uppercase tracking-widest opacity-50 mb-6">Coquitlam, BC</p>
                <h3 className="text-4xl md:text-5xl font-light mb-6 leading-tight">Commercial Access Control System</h3>
                <p className="font-light opacity-70 leading-relaxed mb-8">
                  A large-scale deployment of smart locks, cloud-managed mobile credentials, and comprehensive door hardware securing a prime commercial facility.
                </p>
                <button className="self-start uppercase tracking-widest text-sm font-medium border-b border-white pb-1 hover:opacity-50 transition-opacity">
                  View Details
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-3/5 w-full aspect-[4/3] relative overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2934&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out" />
              </div>
              <div className="lg:w-2/5 w-full flex flex-col justify-center lg:items-end lg:text-right">
                <p className="text-sm uppercase tracking-widest opacity-50 mb-6">Metro Vancouver, BC</p>
                <h3 className="text-4xl md:text-5xl font-light mb-6 leading-tight">Data Center Cabling Retrofit</h3>
                <p className="font-light opacity-70 leading-relaxed mb-8 lg:ml-auto">
                  Precision fiber backbone installation and Cat6A data drop implementation, complemented by meticulous server rack dressing for optimal performance.
                </p>
                <button className="self-start lg:self-end uppercase tracking-widest text-sm font-medium border-b border-white pb-1 hover:opacity-50 transition-opacity">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-zinc-950 pt-32 pb-12 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
            <div className="md:w-1/2">
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter uppercase mb-8">
                Initiate <br />a Project
              </h2>
              <a href="mailto:info@pilocks.ca" className="inline-block text-2xl md:text-4xl font-light border-b border-white/30 hover:border-white transition-colors pb-2">
                info@pilocks.ca
              </a>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm uppercase tracking-widest leading-relaxed">
              <div>
                <h4 className="opacity-50 mb-6">Headquarters</h4>
                <p>
                  #1 - 1322 Ketch Court<br />
                  Coquitlam, BC V3K 6W1
                </p>
              </div>
              <div>
                <h4 className="opacity-50 mb-6">Contact</h4>
                <p>
                  T. <a href="tel:7787300914" className="hover:opacity-70 transition-opacity">778-730-0914</a><br />
                  Mon-Fri 9:00 - 5:00
                </p>
              </div>
              <div className="sm:col-span-2">
                <h4 className="opacity-50 mb-6">Service Area</h4>
                <p>All over British Columbia, primarily focusing on Metro Vancouver</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs uppercase tracking-widest opacity-40 gap-4">
            <p>&copy; {new Date().getFullYear()} Pi Locks. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
