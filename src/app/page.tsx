import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
            {/* High-res placeholder Vancouver/Tech video */}
            <source src="https://assets.mixkit.co/videos/preview/mixkit-data-center-racks-with-blinking-lights-1589-large.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Giant PI LOCKS text (Replica of Strand massive hero text) */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-grow pt-32 pointer-events-none">
          <h1 className="text-[18vw] md:text-[15vw] font-bold text-white tracking-tighter leading-none opacity-90 uppercase">
            PI LOCKS
          </h1>
        </div>

        <div className="relative z-10 w-full px-8 md:px-12 pb-16 md:pb-24 text-white">
          <h2 className="text-4xl md:text-6xl font-light leading-[1.1] mb-8">
            Secure.<br />
            <span className="font-bold">Connect. Control.</span>
          </h2>
          <p className="text-lg md:text-xl font-light max-w-lg mb-8 opacity-90">
            For over 10 years, Pi Locks has embraced a comprehensive vision of physical security and structured cabling.
          </p>
          <Link href="/about" className="inline-flex items-center justify-center border-b border-white pb-1 font-medium text-sm hover:opacity-70 transition-opacity">
            Learn About Us
          </Link>
        </div>
      </section>

      {/* Explore Our Recent Projects (Replica of Strand Slider) */}
      <section className="py-24 md:py-32 px-8 md:px-12 bg-white text-black">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-light leading-[1.1] max-w-2xl">
              A Decade of Pi Locks:<br />
              Explore Our Recent Projects
            </h2>
            <Link href="/portfolio" className="mt-8 md:mt-0 inline-flex items-center justify-center border-b border-black pb-1 font-medium text-sm hover:opacity-70 transition-opacity">
              View Portfolio
            </Link>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-12">
            {[
              { title: "Access Control Upgrade", label: "Coquitlam", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" },
              { title: "Data Center Cabling", label: "Vancouver", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop" },
              { title: "IP Surveillance System", label: "Burnaby", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop" },
            ].map((item, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] snap-center group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-none bg-gray-100">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">{item.label}</div>
                <h3 className="text-3xl font-light mb-4">{item.title}</h3>
                <Link href="/portfolio" className="text-sm font-medium border-b border-black pb-1 opacity-0 group-hover:opacity-100 transition-opacity">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Committed to Building Section */}
      <section className="py-32 md:py-48 px-8 md:px-12 bg-gray-50 text-center">
        <h2 className="text-5xl md:text-7xl font-light text-black leading-[1.1] mb-12">
          Committed to Building<br />Secure Environments
        </h2>
        <Link href="/about#impact" className="inline-flex items-center justify-center border-b border-black pb-1 font-medium text-sm hover:opacity-70 transition-opacity uppercase tracking-widest">
          Our Impact
        </Link>
      </section>

      {/* By The Numbers (Replica) */}
      <section className="py-24 md:py-32 px-8 md:px-12 bg-black text-white">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-20 text-center md:text-left">Pi Locks By The Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-12">
            {[
              { num: "10", label: "Years of excellence" },
              { num: "5K+", label: "Drops installed across BC" },
              { num: "2K+", label: "Access doors secured" },
              { num: "100%", label: "Fully licensed & certified" },
              { num: "24/7", label: "Emergency Service" },
              { num: "Metro", label: "Vancouver primary focus" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col border-t border-white/20 pt-8">
                <span className="text-5xl md:text-8xl font-light tracking-tighter mb-4 text-white">{stat.num}</span>
                <span className="text-sm md:text-base font-light opacity-70 leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-20 md:mt-32 text-center md:text-left">
            <Link href="/about#approach" className="inline-flex items-center justify-center border-b border-white pb-1 font-medium text-sm hover:opacity-70 transition-opacity uppercase tracking-widest">
              Our Approach
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
