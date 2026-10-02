import Image from "next/image";

export default function About() {
  return (
    <div className="bg-white text-black min-h-screen">
      
      {/* About Hero */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-8 md:px-12 bg-black text-white">
        <div className="max-w-[1920px] mx-auto">
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter uppercase mb-16">
            About Us
          </h1>
          <p className="text-2xl md:text-4xl font-light max-w-3xl leading-snug">
            We are dedicated to defining the standard in physical security and structured cabling.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-24 md:py-32 px-8 md:px-12 border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-medium uppercase tracking-widest">Approach</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-2xl md:text-4xl font-light leading-relaxed mb-12">
              Our methodology centers on robust, scalable, and sophisticated low-voltage solutions for contractors, real estate, and enterprise clients. We combine precision engineering with practical execution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Target Verticals</h3>
                <ul className="space-y-2 text-lg font-light text-gray-700">
                  <li>General & Electrical Contractors</li>
                  <li>Architects & Interior Designers</li>
                  <li>Commercial Real Estate</li>
                  <li>Multi-Family Residential</li>
                  <li>Retail & Industrial TI</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Core Services</h3>
                <ul className="space-y-2 text-lg font-light text-gray-700">
                  <li>Access Control & Security</li>
                  <li>Structured Cabling & Fiber</li>
                  <li>IP Surveillance / CCTV</li>
                  <li>Commercial AV & Alarms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 md:py-32 px-8 md:px-12 border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-medium uppercase tracking-widest">Team</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl font-light leading-relaxed mb-16 max-w-2xl">
              Our certified professionals bring over a decade of specialized experience to every deployment. [Placeholder for future team members]
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group">
                  <div className="relative aspect-square bg-gray-100 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder image */}
                  </div>
                  <h3 className="text-xl font-medium mb-1">Team Member {item}</h3>
                  <p className="text-sm font-light text-gray-500 uppercase tracking-widest">Position</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact & History placeholders */}
      <section id="impact" className="py-24 md:py-32 px-8 md:px-12 border-b border-gray-200 bg-gray-50">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-medium uppercase tracking-widest">Impact</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-2xl md:text-4xl font-light leading-relaxed">
              We are committed to building secure environments that protect people, data, and assets across British Columbia.
            </p>
          </div>
        </div>
      </section>

      <section id="history" className="py-24 md:py-32 px-8 md:px-12">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-medium uppercase tracking-widest">History</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl font-light leading-relaxed max-w-2xl text-gray-600">
              Founded on a commitment to technical excellence and client partnership, Pi Locks has grown into a premier provider of integrated security and infrastructure solutions across Metro Vancouver. [History content placeholder]
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}