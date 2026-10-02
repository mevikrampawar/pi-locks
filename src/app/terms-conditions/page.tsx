import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing use of the PI Locks website and the quotations, proposals and services we provide.",
};

const UPDATED = "Last updated: draft — review required before launch";

export default function TermsConditions() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <h1 className="phero__title">Terms</h1>
          <p className="h-lede phero__lede">{UPDATED}</p>
        </div>
      </section>

      <section className="container">
        <div className="prose">
          <h2 className="prose__label">Draft Notice</h2>
          <div className="prose__body">
            <p>
              This document is a structural draft. It has not been reviewed and
              must be completed and approved by the business owner before the
              website goes live.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">Website Use</h2>
          <div className="prose__body">
            <p>
              Content on this site is provided for general information. Images
              and specifications shown are representative of typical work and do
              not constitute a contract or a guaranteed specification for any
              particular project.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">Quotes &amp; Proposals</h2>
          <div className="prose__body">
            <p>
              Budget ranges and proposals are estimates based on the information
              available at the time of quoting. Final scope and pricing are set
              out in a written proposal or contract signed by both parties.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">Standards &amp; Certification</h2>
          <div className="prose__body">
            <p>
              Where systems are described as compliant or listed, that statement
              refers to the applicable product or system standard at the time of
              specification. Specific certification, dealer or listing claims are
              provided on request for a given project.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">Intellectual Property</h2>
          <div className="prose__body">
            <p>
              The PI Locks name, logo and site content belong to PI Locks. Brand
              names referenced on this site belong to their respective owners and
              are used to describe platforms we install.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">Liability</h2>
          <div className="prose__body">
            <p>
              To the extent permitted by law, PI Locks is not liable for indirect
              or consequential loss arising from reliance on general information
              published on this site.
            </p>
          </div>
        </div>

        <div className="prose">
          <h2 className="prose__label">Contact</h2>
          <div className="prose__body">
            <p>
              PI Locks
              <br />
              #1 - 1322 Ketch Court
              <br />
              Coquitlam, BC V3K 6W1
              <br />
              <a href="mailto:info@pilocks.ca" className="link">
                info@pilocks.ca
              </a>
              <br />
              <a href="tel:+17787300914" className="link">
                778-730-0914
              </a>
            </p>
          </div>
        </div>

        <nav className="pagenav" aria-label="Legal">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>
    </>
  );
}