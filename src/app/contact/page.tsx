import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to PI Locks about access control, CCTV, intercom, structured cabling and low-voltage systems. Based in Coquitlam, serving Metro Vancouver and British Columbia.",
};

const SERVICES = [
  "Access Control & Physical Security",
  "Structured Cabling & Fibre",
  "IP Surveillance / CCTV",
  "Alarm Systems",
  "Commercial AV",
  "Door Hardware & Locks",
  "Low-Voltage Maintenance / MAC",
  "Other",
];

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

      <section className="container">
        <div className="contact">
          <form className="contact__form">
            <div className="contact__block">
              <label className="field">
                <span className="sr-only">First Name</span>
                <input type="text" name="firstName" placeholder="First Name" required />
              </label>
              <label className="field">
                <span className="sr-only">Last Name</span>
                <input type="text" name="lastName" placeholder="Last Name" required />
              </label>
            </div>

            <div className="contact__block">
              <label className="field">
                <span className="sr-only">Email</span>
                <input type="email" name="email" placeholder="Email Address" required />
              </label>
              <label className="field">
                <span className="sr-only">Phone</span>
                <input type="tel" name="phone" placeholder="Phone Number" />
              </label>
            </div>

            <label className="field-wrap field-wrap--block">
              <span className="sr-only">Project Type</span>
              <select name="project" defaultValue="">
                <option value="" disabled>
                  Project Type
                </option>
                {SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <i className="field__chev" aria-hidden="true" />
            </label>

            <label className="field-wrap">
              <span className="sr-only">Message</span>
              <textarea
                className="field"
                name="message"
                rows={6}
                placeholder="Tell us about the project"
              />
            </label>

            <div className="contact__consent">
              <label className="field__row">
                <input type="checkbox" name="privacy" required />
                <span className="field__box" aria-hidden="true" />
                <span>
                  I have read and agree to the{" "}
                  <Link href="/privacy-policy" className="link">
                    privacy policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            <div className="contact__submit">
              <Button href="/contact" variant="dark">
                Send Enquiry
              </Button>
            </div>
          </form>

          <aside className="contact__aside">
            <div className="cinfo">
              <h2 className="cinfo__label">Headquarters</h2>
              <p className="cinfo__body">
                <a
                  href="https://maps.google.com/?q=1322+Ketch+Court+Coquitlam+BC"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link"
                >
                  #1 - 1322 Ketch Court
                  <br />
                  Coquitlam, BC V3K 6W1
                </a>
              </p>
            </div>

            <div className="cinfo">
              <h2 className="cinfo__label">Contact</h2>
              <p className="cinfo__body">
                <a href="mailto:info@pilocks.ca" className="link">
                  info@pilocks.ca
                </a>
                <br />
                <a href="tel:+17787300914" className="link">
                  778-730-0914
                </a>
              </p>
            </div>

            <div className="cinfo">
              <h2 className="cinfo__label">Hours</h2>
              <p className="cinfo__body">
                Monday – Friday
                <br />
                9:00 AM – 5:00 PM
              </p>
            </div>

            <div className="cinfo">
              <h2 className="cinfo__label">Service Area</h2>
              <p className="cinfo__body">
                Metro Vancouver and British Columbia.
                <br />
                Canada.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}