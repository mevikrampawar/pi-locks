import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="bg-white text-black pt-32 pb-24 md:pt-48 md:pb-32 px-8 md:px-12 min-h-screen">
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-6xl md:text-8xl font-light tracking-tighter uppercase mb-24">
          Portfolio
        </h1>
        
        {/* Exact Replica Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {[
            { title: "Commercial Access Control System", loc: "Coquitlam", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" },
            { title: "Data Center Cabling Retrofit", loc: "Metro Vancouver", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop" },
            { title: "Multi-Family Residential Security", loc: "Vancouver", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop" },
            { title: "Retail Tenant Improvement", loc: "Burnaby", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" },
          ].map((project, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
                <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">{project.loc}</div>
                  <h3 className="text-3xl font-light">{project.title}</h3>
                </div>
                <div className="text-sm font-medium border-b border-black pb-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Learn More</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}