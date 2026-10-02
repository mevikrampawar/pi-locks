import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "History",
  description:
    "Why PI Locks exists — founded to set a higher bar for systems installation, with full accountability from design through to lifetime support.",
};

export default function History() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <h1 className="phero__title">History</h1>
          <p className="h-lede phero__lede">
            PI Locks is a new company. What we bring is not an anniversary — it
            is a team of experienced integrators and a specific standard.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="prose">
          <h2 className="prose__label">Why We Exist</h2>
          <div className="prose__body">
            <p>
              Too many low-voltage installations arrive incomplete. Cabling that
              was never dressed or labelled. Panels that were never patched to
              the drawing. Systems that were energised but never commissioned —
              and nobody left behind who knows how they work.
            </p>
            <p>
              PI Locks was founded to set a higher bar. Not more volume, not more
              headcount — more accountability. The same team that designs the
              system installs it, commissions it, documents it and then services
              it.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="prose">
          <h2 className="prose__label">The Founding Idea</h2>
          <div className="prose__body">
            <p>
              One accountable turnkey partner, from first consultation to
              lifetime support. A system that arrives fully designed, installed,
              tested, documented and commissioned — ready to use on day one, and
              backed by responsive service long after handover.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="prose">
          <h2 className="prose__label">What Changes Next</h2>
          <div className="prose__body">
            <p>
              This section is written to be updated as PI Locks grows. Founding
              date, first delivery milestones, team expansion and completed
              project case studies get added here as they become real — with
              client permission, and never ahead of the facts.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <nav className="pagenav" aria-label="About sub-pages">
          <Link href="/about">About</Link>
          <Link href="/about/approach">Approach</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/about/impact">Impact</Link>
        </nav>
        <div style={{ paddingBottom: 120 }}>
          <Button href="/contact">Work With Us</Button>
        </div>
      </section>
    </>
  );
}