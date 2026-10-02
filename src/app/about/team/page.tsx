import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The roles behind every PI Locks installation — leadership, project delivery, and service and support.",
};

/*
  Roles, not headshots.

  This page previously used stock photographs with captions naming them as
  PI Locks roles. Stock imagery presented as named staff is misleading, and it
  also forced a duplicate photograph onto two routes. Roles are described
  plainly instead; real portraits and names can be added here when they are
  cleared to publish.
*/
const ROLES = [
  {
    key: "01",
    title: "Founder & Lead",
    body: "Accountable for the standard. Owns client relationships, system architecture decisions and the commitment that nothing ships half-finished.",
  },
  {
    key: "02",
    title: "Project Lead",
    body: "Runs delivery on site — scheduling, coordination with other trades, install quality, testing and commissioning sign-off.",
  },
  {
    key: "03",
    title: "Service & Support",
    body: "Handles maintenance, MAC service and fault response. Keeps systems documented so support stays fast after handover.",
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
        <div className="rolelist">
          {ROLES.map((r) => (
            <article key={r.key} className="rolelist__item reveal">
              <span className="rolelist__key">{r.key}</span>
              <div>
                <h2 className="h-title-sm rolelist__title">{r.title}</h2>
                <p className="rolelist__body">{r.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <nav className="pagenav" aria-label="About sub-pages">
          <Link href="/about">About</Link>
          <Link href="/about/approach">Approach</Link>
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