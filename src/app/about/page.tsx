import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "PI Locks was founded to set a higher bar for systems installation — experienced integrators taking full accountability for design, installation, commissioning and support.",
};

const SECTORS = [
  {
    name: "Healthcare",
    body: "Nursecall, access control and unified video for independent living through to acute care.",
  },
  {
    name: "Education",
    body: "Lockdown, mass notification and controlled entry across campuses and community facilities.",
  },
  {
    name: "Commercial",
    body: "Tenant fit-out, structured cabling and building systems delivered around live trading hours.",
  },
  {
    name: "Residential",
    body: "Strata entry, intercom and in-suite control with resident apps and visitor management.",
  },
];

export default function About() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <h1 className="phero__title">About</h1>
          <p className="h-lede phero__lede">
            PI Locks was founded to set a higher bar for systems installation — a
            team of experienced integrators who take full accountability for
            design, installation, commissioning and support.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="prose">
          <h2 className="prose__label">The PI Promise</h2>
          <div className="prose__body">
            <p>
              What does &ldquo;premium&rdquo; mean here? It means the system
              arrives fully designed, installed, tested, documented and
              commissioned — ready to use on day one, and backed by responsive
              service long after handover.
            </p>
            <p>
              No half-finished installations. No loose ends. That&rsquo;s the PI
              Locks standard.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="prose">
          <h2 className="prose__label">Sectors</h2>
          <div className="prose__body">
            <ul className="ticks ticks--lg">
              {SECTORS.map((s) => (
                <li key={s.name} className="tick">
                  <strong>{s.name}</strong> — {s.body}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="cardgrid">
          {[
            { href: "/about/approach", n: "01", t: "Approach", b: "How we scope, specify and deliver." },
            { href: "/about/team", n: "02", t: "Team", b: "The roles behind every installation." },
            { href: "/about/impact", n: "03", t: "Impact", b: "Our six proof points." },
            { href: "/about/history", n: "04", t: "History", b: "Why PI Locks exists." },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="pcard">
              <div className="pcard__meta">
                <span>{c.n}</span>
                <span aria-hidden="true">&rarr;</span>
              </div>
              <h3 className="pcard__title">{c.t}</h3>
              <p className="journey__body">{c.b}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container">
        <nav className="pagenav" aria-label="About sub-pages">
          <Link href="/about/approach">Approach</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/about/impact">Impact</Link>
          <Link href="/about/history">History</Link>
        </nav>
        <div style={{ paddingBottom: 120 }}>
          <Button href="/contact">Work With Us</Button>
        </div>
      </section>
    </>
  );
}