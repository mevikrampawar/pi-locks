import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/components/contact-details";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PI Locks collects, uses and protects personal information you share with us.",
};

const UPDATED = "Last updated: draft — review required before launch";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <h1 className="phero__title">Privacy</h1>
          <p className="h-lede phero__lede">{UPDATED}</p>
        </div>
      </section>

      <section className="container">
        <div className="prose">
          <h2 className="prose__label">Draft Notice</h2>
          <div className="prose__body">
            <p>
              This document is a structural draft prepared for PI Locks. It is not
              legal advice and has not yet been reviewed. Before the site goes
              live, it must be completed and approved by the business owner.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">What We Collect</h2>
          <div className="prose__body">
            <p>
              When you contact us by phone or email we hold the information you
              give us: your name, company, email address, phone number and the
              details of your project.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">How We Use It</h2>
          <div className="prose__body">
            <p>
              We use that information only to respond to you, to prepare and
              quote for your project, and to maintain a record of our business
              correspondence.
            </p>
            <p>
              We do not sell personal information and we do not share it with
              third parties for their own marketing.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">Retention</h2>
          <div className="prose__body">
            <p>
              Records are retained for as long as needed to support an ongoing
              or prospective business relationship. Retention periods are
              confirmed in the approved policy.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">Your Rights</h2>
          <div className="prose__body">
            <p>
              You can ask to see the personal information we hold about you, ask
              us to correct it, or ask us to delete it. Contact us at{" "}
              <a href={CONTACT.emailHref} className="link">
                {CONTACT.email}
              </a>{" "}
              and we will respond.
            </p>
            <p>
              PI Locks is based in British Columbia, Canada. Where applicable,
              BC&nbsp;PIPA applies to the personal information we hold.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">Contact</h2>
          <div className="prose__body">
            <address className="contactblock">
              <span className="contactblock__org">PI Locks</span>
              {CONTACT.addressLines.map((l) => (
                <span key={l}>{l}</span>
              ))}
              <a href={CONTACT.emailHref} className="link">
                {CONTACT.email}
              </a>
              <a href={CONTACT.phoneHref} className="link">
                {CONTACT.phone}
              </a>
            </address>
          </div>
        </div>

        <nav className="pagenav" aria-label="Legal">
          <Link href="/terms-conditions">Terms &amp; Conditions</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>
    </>
  );
}