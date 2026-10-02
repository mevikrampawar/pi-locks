import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "PI Locks core services — access control and physical security, structured cabling and fibre, IP surveillance and CCTV, plus alarms, commercial AV, door hardware and low-voltage maintenance.",
};

/*
  The four service groups below mirror the client's own service breakdown.
  Every bullet is drawn from that breakdown — no vendor platforms, dealer
  statuses or listing claims are stated here because none have been supplied
  or verified.
*/
const SERVICES = [
  {
    key: "01",
    name: "Access Control & Physical Security",
    body: "Electronic access and entry systems for contractors, architects, property managers and strata across British Columbia — specified, installed, commissioned and handed over documented.",
    scope: [
      "Card and fob readers",
      "Cloud-based access control",
      "Mobile credentials",
      "Smart locks",
      "Intercom and entry systems",
    ],
  },
  {
    key: "02",
    name: "Structured Cabling & Fiber",
    body: "The back-of-house backbone that every other system depends on — dressed, labelled and tested so it is maintainable by whoever comes next.",
    scope: [
      "Cat6 / Cat6A data drops",
      "Fibre backbone",
      "Server rack cleanup",
      "Patch panel dressing",
    ],
  },
  {
    key: "03",
    name: "IP Surveillance / CCTV",
    body: "Camera, recording and analytics infrastructure for commercial, industrial, office and multi-family sites — designed around what you actually need to see and be alerted to.",
    scope: [
      "Security cameras",
      "Cloud and AI analytics",
      "NVR setups",
    ],
  },
  {
    key: "04",
    name: "Other Services",
    body: "The supporting scope that usually gets missed on a fit-out — and the ongoing work that keeps installed systems healthy.",
    scope: [
      "Alarm systems",
      "Commercial AV",
      "Door hardware and locks",
      "Low-voltage maintenance",
      "Move, add, change (MAC) services",
    ],
  },
];

const DELIVERY = [
  {
    key: "01",
    title: "Design Consultation",
    body: "We scope the requirement and the standards before anything is specified.",
  },
  {
    key: "02",
    title: "Proposal Detail",
    body: "A line-by-line proposal with system spec and clear budget ranges.",
  },
  {
    key: "03",
    title: "Solution Build",
    body: "Installation by our own trained crews — no subcontracted unknowns.",
  },
  {
    key: "04",
    title: "Project Handover",
    body: "Commissioned, documented and demonstrated against the agreed scope.",
  },
  {
    key: "05",
    title: "Ongoing Service",
    body: "Responsive support and maintenance for the life of the system.",
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <h1 className="phero__title">Services</h1>
          <p className="h-lede phero__lede">
            Four core service groups, delivered turnkey across British Columbia —
            primarily Metro Vancouver.
          </p>
        </div>
      </section>

      <section className="container">
        <ol className="svc-list">
          {SERVICES.map((s) => (
            <li key={s.key} className="svc reveal">
              <div className="svc__head">
                <span className="svc__key">{s.key}</span>
                <h2 className="detail__title">{s.name}</h2>
              </div>
              <div className="svc__grid">
                <div className="detail">
                  <p>{s.body}</p>
                  <div className="svc__block">
                    <h3 className="svc__label">Scope</h3>
                    <ul className="chips">
                      {s.scope.map((i) => (
                        <li key={i} className="chip">
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="svc__cta">
                    <Button href="/contact">Consult With Us</Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container">
        <div className="prose">
          <h2 className="prose__label">How We Deliver</h2>
          <div className="prose__body">
            <p>
              Every service above runs through the same process, so the outcome
              does not depend on which trade you came to us for.
            </p>
          </div>
        </div>

        <ol className="journey journey--stack">
          {DELIVERY.map((d) => (
            <li key={d.key} className="journey__step reveal">
              <span className="journey__key">{d.key}</span>
              <h3 className="journey__title">{d.title}</h3>
              <p className="journey__body">{d.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container">
        <nav className="pagenav" aria-label="Related pages">
          <Link href="/about">About</Link>
          <Link href="/about/approach">Approach</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>
    </>
  );
}