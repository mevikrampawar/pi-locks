import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "The six PI Locks proof points — accountable turnkey delivery, commissioned handover, trusted OEM platforms, responsive support, compliance-aware delivery and craftsmanship-first workmanship.",
};

const POINTS = [
  {
    key: "01",
    title: "Accountable Turnkey Delivery",
    body: "One partner, full responsibility. Design, supply, installation, commissioning and handover sit with us — so there is nobody to point at when something is incomplete.",
  },
  {
    key: "02",
    title: "Commissioned & Documented Handover",
    body: "Every system is tested, labelled and delivered with as-built documentation. What you receive is usable, maintainable and understandable to whoever comes next.",
  },
  {
    key: "03",
    title: "Trusted Brand Ecosystem",
    body: "Installations built on proven OEM platforms from Salto, Avigilon, ICT, Axis, 2N, Valcom, Panduit and Eaton — supported supply chains and real product roadmaps.",
  },
  {
    key: "04",
    title: "Responsive Ongoing Support",
    body: "Service does not end at handover. Responsive maintenance and MAC support run out of our Coquitlam base across Metro Vancouver and British Columbia.",
  },
  {
    key: "05",
    title: "Compliance-Aware Delivery",
    body: "Systems specified and installed with applicable codes and standards in mind. Specific certifications, dealer statuses and listing claims are provided on request.",
  },
  {
    key: "06",
    title: "Craftsmanship-First Workmanship",
    body: "Quality of finish on every device, cable run, patch panel and rack. It is the part of the job nobody photographs and everybody notices later.",
  },
];

export default function Impact() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <h1 className="phero__title">Impact</h1>
          <p className="h-lede phero__lede">
            As a new company we do not publish project counts, years in business
            or testimonials we have not yet earned. Instead, here is the standard
            we hold every installation to.
          </p>
        </div>
      </section>

      <section className="numbers">
        <div className="container">
          <h2 className="eyebrow">Our Standard</h2>
          <div className="numbers__list">
            {POINTS.map((p) => (
              <div key={p.key} className="numbers__row">
                <div className="numbers__key">{p.key}</div>
                <div className="numbers__val">
                  <h3 className="numbers__title">{p.title}</h3>
                  <p className="numbers__body">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="numbers__cta">
            <Button href="/about/approach" variant="outline-light">
              Our Approach
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <nav className="pagenav" aria-label="About sub-pages">
          <Link href="/about">About</Link>
          <Link href="/about/approach">Approach</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/about/history">History</Link>
        </nav>
        <div style={{ paddingBottom: 120 }}>
          <Button href="/contact">Start Your Project</Button>
        </div>
      </section>
    </>
  );
}