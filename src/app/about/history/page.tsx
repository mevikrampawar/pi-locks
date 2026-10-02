import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";
import { img } from "@/lib/media";

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
            PI Locks was built around one conviction: low-voltage work should be
            installed by the people who designed it, and held to a standard that
            does not move with the schedule.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="media ratio-16x9">
          <img src={img.history} alt="Contemporary townhouse architecture and landscaped entry steps" loading="lazy" />
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
            <p>
              That model shapes how we quote, how we schedule and how we staff a
              site. Scope is defined before hardware is ordered. Installation is
              performed by our own crews rather than handed down a chain of
              subcontractors. Commissioning happens before anyone is invoiced.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="prose">
          <h2 className="prose__label">How We Work Now</h2>
          <div className="prose__body">
            <p>
              Access control, structured cabling, IP surveillance, alarms,
              commercial AV and door hardware are delivered by the same team
              under one scope. Our clients deal with a single point of
              accountability rather than reconciling several vendors on the same
              project.
            </p>
            <p>
              From our Coquitlam base we serve the whole of British Columbia,
              with the bulk of our work concentrated across Metro Vancouver — and
              we stay with the systems we install.
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
        <div className="pagefoot">
          <Button href="/contact">Work With Us</Button>
        </div>
      </section>
    </>
  );
}