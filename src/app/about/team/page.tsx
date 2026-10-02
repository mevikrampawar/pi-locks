import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The roles behind every PI Locks installation — founder and lead, project lead, and service and support.",
};

const ROLES = [
  {
    key: "01",
    title: "Founder & Lead",
    body: "Accountable for the standard. Owns client relationships, system architecture decisions and the commitment that nothing ships half-finished.",
    img: "photo-1581092160562-40aa08e78837",
  },
  {
    key: "02",
    title: "Project Lead",
    body: "Runs delivery on site — scheduling, coordination with other trades, install quality, testing and commissioning sign-off.",
    img: "photo-1581094794329-c8112a89af12",
  },
  {
    key: "03",
    title: "Service & Support",
    body: "Handles maintenance, MAC service and fault response. Keeps systems documented so support stays fast after handover.",
    img: "photo-1449824913935-59a10b8d2000",
  },
];

export default function Team() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <h1 className="phero__title">Team</h1>
          <p className="h-lede phero__lede">
            Experienced integrators, not a large headcount. Every role below is a
            name we can give you, and a person who will still be accountable
            after handover.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="cardgrid cardgrid--wide">
          {ROLES.map((r) => (
            <figure key={r.key} className="pcard">
              <div className="media ratio-4x5">
                <img
                  src={`https://images.unsplash.com/${r.img}?q=80&w=900&auto=format&fit=crop`}
                  alt={r.title}
                  loading="lazy"
                />
              </div>
              <div className="pcard__meta">
                <span>{r.key}</span>
              </div>
              <h2 className="pcard__title">{r.title}</h2>
              <p className="journey__body">{r.body}</p>
            </figure>
          ))}
        </div>
        <p className="consent" style={{ paddingBottom: 100, opacity: 0.6 }}>
          Individual names, credentials and photographs are confirmed with each
          team member before publication.
        </p>
      </section>

      <section className="container">
        <nav className="pagenav" aria-label="About sub-pages">
          <Link href="/about">About</Link>
          <Link href="/about/approach">Approach</Link>
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