import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";
import { img } from "@/lib/media";

export const metadata: Metadata = {
  title: "About",
  description:
    "PI Locks was founded to set a higher bar for systems installation — experienced integrators taking full accountability for design, installation, commissioning and support.",
};

const CLIENTS = [
  {
    name: "General & Electrical Contractors",
    body: "Low-voltage scope installed by our own crews, documented and handed over clean.",
  },
  {
    name: "Architects & Interior Designers",
    body: "Early involvement, clear specification and as-built documentation your consultant can rely on.",
  },
  {
    name: "Commercial Real Estate & Property Managers",
    body: "One service relationship across access, CCTV, cabling and maintenance.",
  },
  {
    name: "Multi-Family Residential & Strata",
    body: "Entry, intercom and common-area systems that suit existing building wiring where possible.",
  },
  {
    name: "Retail, Industrial & Office TI",
    body: "Fit-out low voltage delivered around live trading hours and existing building systems.",
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

      <section className="band">
        <div className="media ratio-16x9">
          <img
            src={img.office}
            alt="Contemporary West Coast mixed-use development"
            loading="lazy"
          />
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
          <h2 className="prose__label">Who We Work For</h2>
          <div className="prose__body">
            <ul className="ticks ticks--lg">
              {CLIENTS.map((c) => (
                <li key={c.name} className="tick">
                  <strong>{c.name}</strong> — {c.body}
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
        <div className="pagefoot">
          <Button href="/contact">Work With Us</Button>
        </div>
      </section>
    </>
  );
}