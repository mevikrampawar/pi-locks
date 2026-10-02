import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "The six PI Locks proof points — accountable turnkey delivery, commissioned handover, one scope and one team, British Columbia coverage, ongoing maintenance support and craftsmanship-first workmanship.",
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
    title: "One Scope, One Team",
    body: "Access control, cabling, surveillance, alarms, AV and door hardware are delivered by the same crew — not split across five subcontractors who each blame the other.",
  },
  {
    key: "04",
    title: "British Columbia Coverage",
    body: "Headquartered in Coquitlam, serving all of British Columbia with a primary focus on Metro Vancouver.",
  },
  {
    key: "05",
    title: "Maintenance & MAC Support",
    body: "Low-voltage maintenance and move, add, change work continues after handover. The system is never handed over and abandoned.",
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
            Proof in this industry is not a number on a wall — it is whether the
            system still works, and still makes sense, two years after handover.
            These are the standards we hold every installation to.
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
        <div className="pagefoot">
          <Button href="/contact">Start Your Project</Button>
        </div>
      </section>
    </>
  );
}