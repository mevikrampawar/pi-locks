/*
  Single source of truth for how PI Locks is reached.

  This replaces the enquiry forms that used to sit on the homepage and the
  contact route. The site is statically exported, so those forms had no
  backend to post to and no submission ever reached the business. Direct
  contact details are both more honest and more useful.
*/

export const CONTACT = {
  phone: "778-730-0914",
  phoneHref: "tel:+17787300914",
  email: "info@pilocks.ca",
  emailHref: "mailto:info@pilocks.ca",
  addressLines: ["#1 - 1322 Ketch Court", "Coquitlam, BC V3K 6W1"],
  mapHref:
    "https://maps.google.com/?q=1322+Ketch+Court+Coquitlam+BC",
  hours: ["Monday – Friday", "9:00 AM – 5:00 PM"],
  area: "Metro Vancouver and British Columbia",
} as const;

export const SERVICES = [
  "Access Control & Physical Security",
  "Structured Cabling & Fibre",
  "IP Surveillance / CCTV",
  "Alarm Systems",
  "Commercial AV",
  "Door Hardware & Locks",
  "Low-Voltage Maintenance / MAC",
] as const;

export default function ContactDetails({
  variant = "plain",
}: {
  variant?: "plain" | "compact";
}) {
  if (variant === "compact") {
    return (
      <div className="reach">
        <a className="reach__item" href={CONTACT.phoneHref}>
          <span className="reach__label">Call</span>
          <span className="reach__value">{CONTACT.phone}</span>
        </a>
        <a className="reach__item" href={CONTACT.emailHref}>
          <span className="reach__label">Email</span>
          <span className="reach__value">{CONTACT.email}</span>
        </a>
        <a
          className="reach__item"
          href={CONTACT.mapHref}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="reach__label">Visit</span>
          <span className="reach__value">
            {CONTACT.addressLines[0]}, {CONTACT.addressLines[1]}
          </span>
        </a>
      </div>
    );
  }

  return (
    <aside className="contact__aside">
      <div className="cinfo">
        <h2 className="cinfo__label">Headquarters</h2>
        <p className="cinfo__body">
          <a
            href={CONTACT.mapHref}
            target="_blank"
            rel="noreferrer noopener"
            className="link"
          >
            {CONTACT.addressLines[0]}
            <br />
            {CONTACT.addressLines[1]}
          </a>
        </p>
      </div>

      <div className="cinfo">
        <h2 className="cinfo__label">Contact</h2>
        <p className="cinfo__body">
          <a href={CONTACT.phoneHref} className="link">
            {CONTACT.phone}
          </a>
          <br />
          <a href={CONTACT.emailHref} className="link">
            {CONTACT.email}
          </a>
        </p>
      </div>

      <div className="cinfo">
        <h2 className="cinfo__label">Hours</h2>
        <p className="cinfo__body">
          {CONTACT.hours[0]}
          <br />
          {CONTACT.hours[1]}
        </p>
      </div>

      <div className="cinfo">
        <h2 className="cinfo__label">Service Area</h2>
        <p className="cinfo__body">
          {CONTACT.area}
          <br />
          Canada.
        </p>
      </div>
    </aside>
  );
}