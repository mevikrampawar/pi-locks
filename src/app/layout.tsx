import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pi Locks | Secure. Connect. Control.",
  description: "Premier security, structured cabling, and access control solutions across Metro Vancouver and British Columbia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="bg-white text-black font-sans min-h-screen flex flex-col selection:bg-black selection:text-white">
        
        {/* Exact Replica Navbar */}
        <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6 md:px-12 md:py-10 flex justify-between items-center mix-blend-difference text-white pointer-events-auto">
          <Link href="/" className="text-3xl font-medium tracking-wide uppercase z-50">
            PI LOCKS
          </Link>
          <div className="hidden lg:flex items-center space-x-12 z-50">
            <Link href="/portfolio" className="text-sm font-medium hover:opacity-70 transition-opacity">Portfolio</Link>
            <Link href="/about" className="text-sm font-medium hover:opacity-70 transition-opacity">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:opacity-70 transition-opacity">Contact</Link>
            <div className="flex space-x-8 ml-8">
              <Link href="mailto:info@pilocks.ca" className="text-sm font-medium hover:opacity-70 transition-opacity">Customer Care</Link>
              <Link href="tel:7787300914" className="text-sm font-medium hover:opacity-70 transition-opacity">Emergency 24/7</Link>
            </div>
          </div>
          <button className="lg:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-50">
            <span className="w-6 h-0.5 bg-white block"></span>
            <span className="w-6 h-0.5 bg-white block"></span>
            <span className="w-6 h-0.5 bg-white block"></span>
          </button>
        </nav>

        <main className="flex-grow">
          {children}
        </main>

        {/* Exact Replica Footer */}
        <footer className="bg-white text-black border-t border-gray-200 pt-24 pb-12 px-8 md:px-12 z-50 relative">
          <div className="max-w-[1920px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
              <div className="lg:col-span-2">
                <h2 className="text-5xl font-medium tracking-tighter mb-4 uppercase">PI LOCKS</h2>
                <p className="text-lg font-light text-gray-600 max-w-sm">
                  Secure. Connect. Control.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Information</h4>
                <ul className="space-y-4 text-sm font-light">
                  <li><Link href="/portfolio" className="hover:underline underline-offset-4">Portfolio</Link></li>
                  <li><Link href="/about" className="hover:underline underline-offset-4">About</Link></li>
                  <li><Link href="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">About Us</h4>
                <ul className="space-y-4 text-sm font-light">
                  <li><Link href="/about#approach" className="hover:underline underline-offset-4">Approach</Link></li>
                  <li><Link href="/about#team" className="hover:underline underline-offset-4">Team</Link></li>
                  <li><Link href="/about#impact" className="hover:underline underline-offset-4">Impact</Link></li>
                  <li><Link href="/about#history" className="hover:underline underline-offset-4">History</Link></li>
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
      </body>
    </html>
  );
}
