import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";
import ContactDetails, { CONTACT, SERVICES } from "@/components/contact-details";
import { img } from "@/lib/media";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to PI Locks about access control, CCTV, intercom, structured cabling and low-voltage systems. Based in Coquitlam, serving Metro Vancouver and British Columbia.",
};

export default function Contact() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <h1 className="phero__title">Contact</h1>
          <p className="h-lede phero__lede">
            Tell us what you are building. We will come back with honest scope,
            an honest specification and an honest budget range.
          </p>
        </div>
      </section>

      <section className="band">
        <div className="media ratio-16x9">
          <img
            src={img.commercial}
            alt="Daylit lobby in a contemporary commercial building"
            loading="lazy"
          />
        </div>
      </section>

      <section className="container">
        <div className="contact">
          {/*
            No form. The site is statically exported, so the previous form had
            nowhere to post and silently discarded every enquiry. Direct
            contact details are shown instead, with the service list so people
            know what to ask about.
          */}
          <div className="contact__main">
            <div className="contact__lead">
              <h2 className="h-section">Speak With Us Directly</h2>
              <p className="contact__lede">
                Call during business hours for the fastest response on scope,
                scheduling and pricing. Email is best for drawings, tender
                packages and anything that needs a written record.
              </p>
            </div>

            <div className="contact__direct">
              <a className="contact__direct-item" href={CONTACT.phoneHref}>
                <span className="contact__direct-label">Telephone</span>
                <span className="contact__direct-value">{CONTACT.phone}</span>
              </a>
              <a className="contact__direct-item" href={CONTACT.emailHref}>
                <span className="contact__direct-label">Email</span>
                <span className="contact__direct-value">{CONTACT.email}</span>
              </a>
              <a
                className="contact__direct-item"
                href={CONTACT.mapHref}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="contact__direct-label">Headquarters</span>
                <span className="contact__direct-value">
                  {CONTACT.addressLines[0]}
                  <br />
                  {CONTACT.addressLines[1]}
                </span>
              </a>
            </div>

            <div className="contact__scopefix">
              <h3 className="h-title-sm">What We Take On</h3>
              <ul className="contact__scope">
                {SERVICES.map((s) => (
                  <li key={s} className="contact__scope-item">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact__actions">
              <Button href={CONTACT.phoneHref} variant="dark">
                Call {CONTACT.phone}
              </Button>
              <Button href={CONTACT.emailHref} variant="outline">
                Email {CONTACT.email}
              </Button>
            </div>

            <p className="contact__fine">
              Information you send is used only to respond to your enquiry. See
              our{" "}
              <Link href="/privacy-policy" className="link">
                privacy policy
              </Link>
              .
            </p>
          </div>

          <ContactDetails />
        </div>
      </section>
    </>
  );
}