import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen font-sans">
      {/* Navbar (Exact Replica) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 md:px-12 md:py-10 flex justify-between items-center transition-all duration-300 mix-blend-difference text-white">
        <Link href="/" className="text-3xl font-medium tracking-wide">
          PI LOCKS
        </Link>
        <div className="hidden lg:flex items-center space-x-12">
          <Link href="#services" className="text-sm font-medium hover:opacity-70 transition-opacity">Services</Link>
          <Link href="#projects" className="text-sm font-medium hover:opacity-70 transition-opacity">Portfolio</Link>
          <Link href="#contact" className="text-sm font-medium hover:opacity-70 transition-opacity">Contact</Link>
          <div className="flex space-x-8 ml-8">
            <Link href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">Customer Care</Link>
            <Link href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">Emergency 24/7</Link>
          </div>
        </div>
        <button className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5">
          <span className="w-6 h-0.5 bg-white block"></span>
          <span className="w-6 h-0.5 bg-white block"></span>
          <span className="w-6 h-0.5 bg-white block"></span>
        </button>
      </nav>

      {/* Hero Section (Replicating Strand Hero) */}
      <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-between">
        {/* Abstract Video / Image Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-data-center-racks-with-blinking-lights-1589-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Center Logo / Giant Text */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow pt-32">
          <h1 className="text-[15vw] md:text-[12vw] font-bold text-white tracking-tighter leading-none opacity-90">
            PI LOCKS
          </h1>
        </div>

        {/* Hero Text Bottom */}
        <div className="relative z-10 w-full px-8 md:px-12 pb-16 md:pb-24 text-white">
          <h2 className="text-4xl md:text-6xl font-light leading-[1.1] mb-8">
            Secure.<br />
            <span className="font-bold">Connect. Control.</span>
          </h2>
          <p className="text-lg md:text-xl font-light max-w-lg mb-8 opacity-90">
            For over 10 years, Pi Locks has embraced a comprehensive vision of physical security and structured cabling.
          </p>
          <Link href="#contact" className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Recent Projects Section (Replicating "A Half-Century of Strand") */}
      <section id="services" className="py-24 md:py-32 px-8 md:px-12 bg-white">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-light leading-[1.1] max-w-2xl">
              A Decade of Pi Locks:<br />
              Explore Our Core Services
            </h2>
            <Link href="#services" className="mt-8 md:mt-0 inline-flex items-center justify-center border border-black text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-black hover:text-white transition-colors">
              View All Services
            </Link>
          </div>

          {/* Horizontal Slider Layout */}
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-12">
            {[
              { title: "Access Control & Physical Security", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop", type: "Core Service" },
              { title: "Structured Cabling & Fiber", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop", type: "Infrastructure" },
              { title: "IP Surveillance / CCTV", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop", type: "Monitoring" },
              { title: "Commercial AV & Alarms", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop", type: "Other Services" },
            ].map((item, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] snap-center group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-2xl bg-gray-100">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">{item.type}</div>
                <h3 className="text-3xl font-light">{item.title}</h3>
                <div className="mt-4 text-sm font-medium underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">Learn More</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committed Section (Impact Replica) */}
      <section className="relative w-full h-[70vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2938&auto=format&fit=crop" alt="Impact" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-4xl md:text-7xl font-light text-white leading-[1.1] mb-8">
            Committed to Building<br />Secure Environments
          </h2>
          <Link href="#contact" className="inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">
            Our Impact
          </Link>
        </div>
      </section>

      {/* By The Numbers (Strand By The Numbers Replica) */}
      <section className="py-24 md:py-32 px-8 md:px-12 bg-black text-white">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-20 text-center md:text-left">Pi Locks By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-12">
            {[
              { num: "10", label: "Years of excellence" },
              { num: "5K", label: "Data drops & fibers installed" },
              { num: "2K", label: "Access doors secured" },
              { num: "24/7", label: "Emergency service available" },
              { num: "100%", label: "Fully licensed & certified" },
              { num: "Metro", label: "Vancouver & BC Service Area" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col border-t border-white/20 pt-8">
                <span className="text-5xl md:text-8xl font-light tracking-tighter mb-4">{stat.num}</span>
                <span className="text-sm md:text-base font-light opacity-70 leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-20 md:mt-32 text-center md:text-left">
            <Link href="#contact" className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-full font-medium text-sm hover:bg-white hover:text-black transition-colors">
              Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* News / Projects Grid (News Replica) */}
      <section id="projects" className="py-24 md:py-32 px-8 md:px-12 bg-gray-50">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-light mb-16">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { date: "07.29.26", title: "Commercial Access Control System", loc: "Coquitlam", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" },
              { date: "04.16.26", title: "Data Center Cabling Retrofit", loc: "Metro Vancouver", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" },
              { date: "02.03.26", title: "Integrated Security Upgrade", loc: "Vancouver", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
            ].map((news, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-gray-200">
                  <Image src={news.img} alt={news.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">{news.date}</div>
                <h3 className="text-2xl font-light leading-snug mb-4">{news.title}</h3>
                <div className="flex justify-between items-center text-sm font-medium uppercase tracking-wide text-gray-400">
                  <span>{news.loc}</span>
                  <span className="text-black group-hover:underline underline-offset-4">Read More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section (Get In Touch Replica) */}
      <section id="contact" className="py-24 md:py-32 px-8 md:px-12 bg-white border-t border-gray-200">
        <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-6">
              Get In Touch<br />With Us
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8">
              Have a question or inquiry?<br />
              Fill out the form below.
            </p>
          </div>
          <div className="lg:w-2/3">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-300 pb-12">
                <div className="relative">
                  <input type="text" id="fname" className="w-full text-xl font-light bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black peer placeholder-transparent" placeholder="First Name" />
                  <label htmlFor="fname" className="absolute left-0 -top-3.5 text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm">First Name</label>
                </div>
                <div className="relative">
                  <input type="text" id="lname" className="w-full text-xl font-light bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black peer placeholder-transparent" placeholder="Last Name" />
                  <label htmlFor="lname" className="absolute left-0 -top-3.5 text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm">Last Name</label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-300 pb-12">
                <div className="relative">
                  <input type="email" id="email" className="w-full text-xl font-light bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black peer placeholder-transparent" placeholder="Email Address" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm">Email Address</label>
                </div>
                <div className="relative">
                  <input type="tel" id="phone" className="w-full text-xl font-light bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-black peer placeholder-transparent" placeholder="Phone Number" />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-sm">Phone Number</label>
                </div>
              </div>
              <div className="relative border-b border-gray-300 pb-12">
                <select id="project" className="w-full text-xl font-light bg-transparent py-4 focus:outline-none appearance-none">
                  <option value="" disabled selected>Project Type</option>
                  <option value="access">Access Control & Security</option>
                  <option value="cabling">Structured Cabling & Fiber</option>
                  <option value="cctv">IP Surveillance / CCTV</option>
                  <option value="other">Other Services</option>
                </select>
                <div className="absolute right-0 top-6 pointer-events-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <input type="checkbox" id="privacy" className="mt-1 w-5 h-5 border-gray-300 rounded text-black focus:ring-black" />
                <label htmlFor="privacy" className="text-sm font-light text-gray-600 leading-relaxed">
                  We will only use this information to answer your enquiry. Please tick the box to consent to your data being stored in line with the guidelines in our privacy policy.
                  <br /><br />
                  I have read and agree to the privacy policy.
                </label>
              </div>
              <button type="button" className="bg-black text-white px-12 py-4 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors uppercase tracking-widest">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer (Strand Footer Replica) */}
      <footer className="bg-white text-black border-t border-gray-200 pt-24 pb-12 px-8 md:px-12">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
            <div className="lg:col-span-2">
              <h2 className="text-5xl font-medium tracking-tighter mb-4">PI LOCKS</h2>
              <p className="text-lg font-light text-gray-600 max-w-sm">
                Secure. Connect. Control.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Information</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><Link href="#services" className="hover:underline underline-offset-4">Services</Link></li>
                <li><Link href="mailto:info@pilocks.ca" className="hover:underline underline-offset-4">Customer Care</Link></li>
                <li><Link href="#contact" className="hover:underline underline-offset-4">Contact</Link></li>
                <li><Link href="#projects" className="hover:underline underline-offset-4">Portfolio</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">About Us</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><Link href="#" className="hover:underline underline-offset-4">Approach</Link></li>
                <li><Link href="#" className="hover:underline underline-offset-4">Team</Link></li>
                <li><Link href="#" className="hover:underline underline-offset-4">Impact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Connect With Us</h4>
              <ul className="space-y-4 text-sm font-light">
                <li><a href="mailto:info@pilocks.ca" className="hover:underline underline-offset-4">info@pilocks.ca</a></li>
                <li><a href="tel:7787300914" className="hover:underline underline-offset-4">778-730-0914</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-12 border-t border-gray-200 text-sm font-light">
            <div className="mb-8 md:mb-0">
              <h4 className="font-bold mb-2">Pi Locks</h4>
              <p className="text-gray-600">
                #1 - 1322 Ketch Court<br />
                Coquitlam, BC<br />
                V3K 6W1
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-gray-500">
              <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link>
              <span>© {new Date().getFullYear()} Pi Locks</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
