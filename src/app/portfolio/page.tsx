import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected capabilities from PI Locks — electronic access control, CCTV, intercom, structured cabling and low-voltage systems across Metro Vancouver and British Columbia.",
};

const GROUPS = [
  {
    group: "Security & Access",
    items: [
      {
        name: "Electronic Access Control",
        body: "Premium electronic access for residential, commercial, education, healthcare and high-security environments — from wireless intelligent locking to full on-premises or cloud-managed platforms. Every installation is programmed, commissioned and documented before handover.",
        brands: ["Salto Systems", "Avigilon", "ICT"],
        integration: [
          "Building lockdown tied to PA / mass notification",
          "Video and licence-plate verification against CCTV",
          "Door opening modes driven from the phone system",
          "Intercom-driven elevator visitor management",
          "Intrusion alarm-point sharing",
        ],
      },
      {
        name: "CCTV & Video Surveillance",
        body: "Video monitoring and alerting — on-premises or cloud-hosted — engineered for institutional sites with full remote management and analytics.",
        brands: ["Avigilon", "Axis Communications"],
        integration: [
          "Licence-plate recognition with access authorisation",
          "Unified video / access / intercom dashboard",
          "Analytics-triggered announcements",
          "Centralised logging and reporting",
          "Fall and incident alerts fed to nursecall",
        ],
      },
      {
        name: "Door Intercom & Entry Systems",
        body: "IP intercoms with video, mobile apps and cloud control that put visitor management in the hands of staff and residents.",
        brands: ["2N", "Akuvox"],
        integration: [
          "Video verification to IP phones and apps",
          "Visitor entry and elevator floor control",
          "CCTV tie-in for larger buildings",
          "Cloud resident apps for visitors and deliveries",
        ],
      },
    ],
  },
  {
    group: "Telecom & Low Voltage",
    items: [
      {
        name: "Telephony",
        body: "On-premises, cloud or hybrid phone systems — desk phones, DECT handsets and mobile apps — designed and installed to a consistent standard.",
        brands: ["Husaria", "Yealink"],
        integration: [
          "Mobile apps for iOS and Android",
          "SIP device takeovers for upgrades",
          "Intercom video delivered to video phones",
          "Single-button door control",
          "Two-way paging via handsets",
        ],
      },
      {
        name: "Public Address & Mass Notification",
        body: "Full two-way mass notification — audio, text, strobe and display — purpose-built for education, healthcare, industrial and community environments.",
        brands: ["Valcom", "TOA"],
        integration: [
          "Lockdown initiation",
          "BMS control interfacing",
          "Mobile alarm initiation",
          "Nursecall text-to-speech and digital signage",
          "Emergency help stations tied to phones and CCTV",
        ],
      },
      {
        name: "Audio-Video Systems",
        body: "Conference rooms to gathering halls — IP-based audio and video distribution with simple tablet control and plug-and-play collaboration.",
        brands: ["Q-SYS", "Atlona", "Yealink"],
        integration: [
          "Conferencing tied to the phone system",
          "Tabletop video inputs",
          "Centralised music with paging override",
          "Tablet control of screens, blinds and lighting",
        ],
      },
    ],
  },
  {
    group: "Infrastructure & Design",
    items: [
      {
        name: "IT Infrastructure",
        body: "Structured cabling, power backup, switching, WiFi and monitoring — the back-of-house backbone that keeps every system online.",
        brands: ["Panduit", "Eaton", "TP-Link", "Hammond"],
        integration: [
          "Network monitoring and alerting",
          "Automated shutdown on power loss",
          "WiFi location reporting",
        ],
      },
      {
        name: "Design Consulting",
        body: "Independent, quality-first guidance on choosing and specifying the right building technology systems — before a single cable is pulled.",
        brands: [],
        integration: [
          "Needs analysis",
          "System specification",
          "Budget clarity",
        ],
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="phero">
        <div className="container">
          <h1 className="phero__title">Portfolio</h1>
          <p className="h-lede phero__lede">
            Selected work and capabilities. Each service below describes what we
            build, the platforms we build on, and how the systems integrate.
          </p>
        </div>
      </section>

      {GROUPS.map((g) => (
        <section key={g.group} className="container">
          <div className="prose">
            <h2 className="prose__label">{g.group}</h2>
            <div className="prose__body">
              <p>
                {g.items.length} service{g.items.length > 1 ? "s" : ""} —{" "}
                {g.items.map((i) => i.name.toLowerCase()).join(", ")}.
              </p>
            </div>
          </div>

          <div className="svc-list">
            {g.items.map((s) => (
              <article key={s.name} className="svc reveal">
                <h3 className="detail__title">{s.name}</h3>
                <div className="svc__grid">
                  <div className="detail">
                    <p>{s.body}</p>

                    {s.brands.length > 0 && (
                      <div className="svc__block">
                        <h4 className="svc__label">Partner Platforms</h4>
                        <ul className="chips">
                          {s.brands.map((b) => (
                            <li key={b} className="chip">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="svc__block">
                      <h4 className="svc__label">Integration Examples</h4>
                      <ul className="ticks">
                        {s.integration.map((i) => (
                          <li key={i} className="tick">
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginTop: 40 }}>
                      <Button href="/contact">Consult With Us</Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="container">
        <div className="band">
          <div className="media ratio-16x9">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2400&auto=format&fit=crop"
              alt="Low-voltage technician on site"
              loading="lazy"
            />
          </div>
          <div className="band__cap">
            <div className="container">
              <h2 className="h-card reveal">
                Not sure what you need?
                <br />
                Start with a consultation.
              </h2>
              <div className="reveal">
                <Button href="/contact" variant="outline-light">
                  Let&rsquo;s Scope Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <nav className="pagenav" aria-label="Related pages">
          <Link href="/about">About</Link>
          <Link href="/about/impact">Impact</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </section>
    </>
  );
}