export default function Contact() {
  return (
    <div className="bg-white text-black pt-32 pb-24 md:pt-48 md:pb-32 px-8 md:px-12 min-h-screen">
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter uppercase mb-24">
          Contact
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Exact Replica Form Side */}
          <div className="lg:w-2/3 order-2 lg:order-1">
            <form className="space-y-12">
              <h2 className="text-3xl md:text-4xl font-light mb-12">Get In Touch With Us</h2>
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

          {/* Sidebar / Info */}
          <div className="lg:w-1/3 order-1 lg:order-2">
            <div className="sticky top-40 space-y-12">
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Headquarters</h4>
                <p className="text-xl font-light leading-relaxed">
                  #1 - 1322 Ketch Court<br />
                  Coquitlam, BC<br />
                  V3K 6W1
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Contact</h4>
                <p className="text-xl font-light leading-relaxed">
                  <a href="mailto:info@pilocks.ca" className="hover:underline underline-offset-4">info@pilocks.ca</a><br />
                  <a href="tel:7787300914" className="hover:underline underline-offset-4">778-730-0914</a>
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-sm uppercase tracking-widest">Hours</h4>
                <p className="text-xl font-light leading-relaxed">
                  Mon-Fri (9:00 AM to 5:00 PM)<br />
                  <em>Emergency Service Available</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}