import Link from "next/link";
import Button from "@/components/button";
import Carousel from "@/components/carousel";
import HeroMark from "@/components/hero-mark";

const IMG = {
  rack: "photo-1558494949-ef010cbdcc31",
  board: "photo-1551434678-e076c223a692",
  cctv: "photo-1557597774-9d273605dfa9",
  office: "photo-1497366216548-37526070297c",
  engineer: "photo-1581092160562-40aa08e78837",
  site: "photo-1581094794329-c8112a89af12",
  tower: "photo-1486406146926-c627a92ad1ab",
  strata: "photo-1560518883-ce09059eeffa",
  hospital: "photo-1519494026892-80bbd2d6fd0d",
  school: "photo-1580582932707-520aed937b7b",
  resi: "photo-1545324418-cc1a3fa10c00",
  keys: "photo-1521791136064-7986c2920216",
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

/* Capability showcase — what we build, by sector. No client names. */
const SLIDES = [
  {
    tag: "Commercial",
    title: "Cloud-Managed Access Control",
    img: IMG.rack,
  },
  {
    tag: "Commercial",
    title: "Structured Cabling & Fibre Backbone",
    img: IMG.board,
  },
  {
    tag: "Institutional",
    title: "IP Surveillance & Video Analytics",
    img: IMG.cctv,
  },
  {
    tag: "Residential",
    title: "Strata Entry & Intercom Systems",
    img: IMG.strata,
  },
  {
    tag: "Infrastructure",
    title: "IT Infrastructure & Rack Build",
    img: IMG.office,
  },
];

/*
  "Our Standard" — the six proof points from the PI Locks content
  profile. Deliberately NOT a stats band: PI Locks is a new company and
  no project counts, years, or certifications are published as fact.
*/
const STANDARD = [
  {
    key: "01",
    title: "Accountable Turnkey Delivery",
    body: "One partner, full responsibility — from first consultation through design, installation, commissioning and handover.",
  },
  {
    key: "02",
    title: "Commissioned & Documented",
    body: "Every system is fully programmed, tested, labelled and delivered with as-built documentation before it leaves site.",
  },
  {
    key: "03",
    title: "Trusted Brand Ecosystem",
    body: "Installations built on proven OEM platforms — Salto, Avigilon, ICT, Axis, 2N, Panduit and Eaton.",
  },
  {
    key: "04",
    title: "Responsive Ongoing Support",
    body: "Service and maintenance that continues long after handover, through our Coquitlam base.",
  },
  {
    key: "05",
    title: "Compliance-Aware Delivery",
    body: "Systems specified and installed with applicable codes and standards in mind. Certification claims confirmed on request.",
  },
  {
    key: "06",
    title: "Craftsmanship-First Workmanship",
    body: "Quality of finish on every device, cable run and rack — the part of the job that actually lasts.",
  },
];

const SECTORS = [
  {
    tag: "Healthcare",
    title: "Nursecall, Access & Unified Video",
    body: "UL-listed compliant nursecall, hardwired and wireless, from independent living through to acute care — with wander management tied to access control and alerts routed to signage and PA.",
    img: IMG.hospital,
  },
  {
    tag: "Education",
    title: "Lockdown, Mass Notification & Entry",
    body: "Two-way audio, text, strobe and display notification purpose-built for campuses, plus intercom-driven visitor management and elevator floor control.",
    img: IMG.school,
  },
  {
    tag: "Commercial",
    title: "Tenant Fit-Out & Building Systems",
    body: "Structured cabling, switching, power backup and monitoring delivered inside live tenancies without disruption to trading hours.",
    img: IMG.tower,
  },
  {
    tag: "Residential",
    title: "Strata Entry & In-Suite Control",
    body: "IP intercoms with video, mobile resident apps and cloud control — visitor entry, delivery management and elevator access put in residents' hands.",
    img: IMG.resi,
  },
];

const JOURNEY = [
  { key: "01", title: "Design Consultation", body: "We scope the requirement and the standards before anything is specified." },
  { key: "02", title: "Proposal Detail", body: "A line-by-line proposal with system spec and clear budget ranges." },
  { key: "03", title: "Solution Build", body: "Installation by our own trained crews — no subcontracted unknowns." },
  { key: "04", title: "Project Handover", body: "Commissioned, documented and demonstrated against the agreed scope." },
  { key: "05", title: "Ongoing Service", body: "Responsive support and maintenance for the life of the system." },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section className="hero">
        <div className="hero__media">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={u(IMG.tower, 2400)}
            aria-hidden="true"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-abstract-blue-particles-network-connection-27948-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="hero__mark">
          <HeroMark />
        </div>
        <div className="cue" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </section>

      {/* ------------------------------------------------------- statement */}
      <section className="statement">
        <div className="container">
          <div className="statement__grid">
            <div className="statement__col">
              <h2 className="h-display h-section reveal">
                Quality You Can <strong>Lock Down.</strong>
              </h2>
              <p className="h-lede reveal">
                PI Locks designs, builds and services premium electronic access
                and security systems — one accountable turnkey partner, from
                first consultation to lifetime support.
              </p>
              <div className="reveal">
                <Button href="/about">Learn About Us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ band */}
      <section className="band">
        <div className="media ratio-16x9">
          <img
            src={u(IMG.tower, 2400)}
            alt="Commercial tower exterior"
            loading="lazy"
          />
        </div>
        <div className="band__cap">
          <div className="container">
            <h2 className="h-card reveal">
              Premium Systems,
              <br />
              Delivered to Perfection
            </h2>
            <div className="reveal">
              <Button href="/portfolio" variant="outline-light">
                Explore Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- capability carousel */}
      <section className="slider">
        <div className="container">
          <div className="slider__head">
            <h2 className="h-section reveal">What We Build</h2>
          </div>
          <Carousel label="Capabilities">
            {SLIDES.map((s) => (
              <article key={s.title} className="slider__item">
                <Link href="/portfolio" className="block">
                  <div className="media ratio-3x2">
                    <img src={u(s.img)} alt={s.title} loading="lazy" />
                  </div>
                  <div className="slider__copy">
                    <p className="slider__tag">{s.tag}</p>
                    <h3 className="h-card">{s.title}</h3>
                    <span className="btn btn--dark btn--static">
                      <span>Learn More</span>
                      <i className="btn__arrow" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </i>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ---------------------------------------------------- our standard */}
      <section className="numbers">
        <div className="container">
          <h2 className="eyebrow reveal">Our Standard</h2>
          <div className="numbers__list">
            {STANDARD.map((s) => (
              <div key={s.key} className="numbers__row">
                <div className="numbers__key">{s.key}</div>
                <div className="numbers__val">
                  <h3 className="numbers__title">{s.title}</h3>
                  <p className="numbers__body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="numbers__cta">
            <Button href="/about/approach" variant="outline-light">
              Our Approach
            </Button>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- sectors */}
      <section className="news">
        <div className="container">
          <div className="news__head">
            <h2 className="h-section reveal">Sectors We Build For</h2>
          </div>
          <div className="news__list">
            {SECTORS.map((s) => (
              <article key={s.title} className="news__item">
                <Link href="/portfolio">
                  <div className="media ratio-4x3">
                    <img src={u(s.img, 1200)} alt={s.title} loading="lazy" />
                  </div>
                </Link>
                <div className="news__meta">
                  <p className="news__date">{s.tag}</p>
                  <h3 className="news__title">{s.title}</h3>
                  <p className="news__body">{s.body}</p>
                  <span className="news__link">
                    <Button href="/portfolio">View Typical Scope</Button>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- journey */}
      <section className="news">
        <div className="container">
          <div className="news__head">
            <h2 className="h-section reveal">The Project Journey</h2>
          </div>
          <ol className="journey">
            {JOURNEY.map((j) => (
              <li key={j.key} className="journey__step reveal">
                <span className="journey__key">{j.key}</span>
                <h3 className="journey__title">{j.title}</h3>
                <p className="journey__body">{j.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------------------------------------------- get in touch */}
      <section className="detail">
        <div className="container">
          <div className="enquiry">
            <div>
              <h2 className="h-section reveal">
                Start Your
                <br />
                Project
              </h2>
              <p
                className="reveal"
                style={{
                  marginTop: 24,
                  fontSize: "2rem",
                  fontWeight: 300,
                  color: "#868686",
                }}
              >
                Have a question or inquiry?
                <br />
                Tell us what you are building.
              </p>
            </div>

            <form className="reveal">
              <div className="field-pair">
                <label className="field">
                  <span className="sr-only">First Name</span>
                  <input type="text" name="firstName" placeholder="First Name" required />
                </label>
                <label className="field">
                  <span className="sr-only">Last Name</span>
                  <input type="text" name="lastName" placeholder="Last Name" required />
                </label>
              </div>

              <div className="field-pair">
                <label className="field">
                  <span className="sr-only">Company</span>
                  <input type="text" name="company" placeholder="Company" />
                </label>
                <label className="field">
                  <span className="sr-only">Email</span>
                  <input type="email" name="email" placeholder="Email" required />
                </label>
              </div>

              <label className="field field--block" style={{ marginBottom: 40 }}>
                <span className="sr-only">Service</span>
                <select name="service" defaultValue="" required>
                  <option value="" disabled>
                    Service Required
                  </option>
                  <option>Electronic Access Control</option>
                  <option>CCTV &amp; Video Surveillance</option>
                  <option>Door Intercom &amp; Entry Systems</option>
                  <option>Structured Cabling &amp; Fibre</option>
                  <option>Telephony &amp; PA</option>
                  <option>Audio-Video Systems</option>
                  <option>IT Infrastructure</option>
                  <option>Design Consulting</option>
                </select>
              </label>

              <label className="field__row" style={{ marginBottom: 16 }}>
                <input type="checkbox" name="consent" required style={{ display: "none" }} />
                <span className="field__box" aria-hidden="true" />
                <span>
                  We will only use this information to answer your enquiry.
                </span>
              </label>
              <p className="consent">
                Please tick the box to consent to your data being stored in line
                with the guidelines in our{" "}
                <Link href="/privacy-policy" style={{ textDecoration: "underline" }}>
                  privacy policy
                </Link>
                .
              </p>
              <label className="field__row" style={{ marginTop: 24 }}>
                <input type="checkbox" name="agree" required style={{ display: "none" }} />
                <span className="field__box" aria-hidden="true" />
                <span>I have read and agree to the privacy policy.</span>
              </label>

              <div style={{ marginTop: 48 }}>
                <Button href="/contact" variant="dark">
                  Continue to Enquiry Form
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}