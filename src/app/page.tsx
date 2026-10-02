import Link from "next/link";
import Button from "@/components/button";
import Carousel from "@/components/carousel";
import ContactDetails from "@/components/contact-details";
import HeroMark from "@/components/hero-mark";
import { img } from "@/lib/media";
import { HERO_VIDEO } from "@/lib/media";

/*
  Capability showcase — drawn directly from the client's service breakdown.
  No client names, no project claims.
*/
const SLIDES = [
  {
    tag: "Access Control",
    title: "Card & Fob Readers, Cloud Access, Mobile Credentials",
    img: img.accessRack,
  },
  {
    tag: "Access Control",
    title: "Smart Locks & Intercom Entry Systems",
    img: img.smartLock,
  },
  {
    tag: "Structured Cabling",
    title: "Cat6 / Cat6A Data Drops & Fibre Backbone",
    img: img.patchPanel,
  },
  {
    tag: "Surveillance",
    title: "IP Cameras, NVR Setups & Cloud / AI Analytics",
    img: img.cameras,
  },
  {
    tag: "Other Services",
    title: "Alarm Systems, Commercial AV & Door Hardware",
    img: img.av,
  },
  {
    tag: "Ongoing",
    title: "Low-Voltage Maintenance & MAC Services",
    img: img.technician,
  },
];

/*
  "Our Standard" — deliberately NOT a stats band. The client has not published
  certifications, project counts or years in business, so none are claimed here.
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
    title: "One Scope, One Team",
    body: "Access control, cabling, surveillance, alarms, AV and door hardware are delivered by the same crew — not split across five subcontractors.",
  },
  {
    key: "04",
    title: "British Columbia Coverage",
    body: "Headquartered in Coquitlam, serving all of British Columbia with a primary focus on Metro Vancouver.",
  },
  {
    key: "05",
    title: "Maintenance & MAC Support",
    body: "Low-voltage maintenance and move, add, change work continues after handover — the system is never handed over and abandoned.",
  },
  {
    key: "06",
    title: "Craftsmanship-First Workmanship",
    body: "Quality of finish on every device, cable run, rack and patch panel — the part of the job that actually lasts.",
  },
];

/* The five client types PI Locks works for. */
const CLIENTS = [
  {
    tag: "General & Electrical Contractors",
    title: "A Subcontractor Who Finishes the Job",
    body: "Access control, cabling, surveillance and low-voltage scope installed by our own crews, documented and handed over clean — so your GC does not chase loose ends. We work inside your construction schedule and leave the site ready.",
    img: img.gc,
  },
  {
    tag: "Architects & Interior Designers",
    title: "Systems That Match the Design Intent",
    body: "Early involvement, clear specification and scope-consultant-grade documentation. We work from your drawings, flag anything that will not work in the space, and hand over as-builts your consultant can rely on.",
    img: img.designer,
  },
  {
    tag: "Commercial Real Estate & Property Managers",
    title: "One Vendor Across Multiple Buildings",
    body: "Access, CCTV and cabling managed as a single service relationship instead of a patchwork of vendors. Routine service, maintenance and MAC work handled from a single point of contact in Coquitlam.",
    img: img.property,
  },
  {
    tag: "Multi-Family Residential & Strata",
    title: "Entry, Intercom & Common-Area Systems",
    body: "Entry control, intercom, parking and common-area coverage for strata corporations — installed to suit existing building wiring where possible, and documented so the next contractor can pick it up.",
    img: img.strata,
  },
  {
    tag: "Retail, Industrial & Office TI",
    title: "Low-Voltage Fit-Out, Delivered to Programme",
    body: "Tenant-improvement low voltage delivered around live trading hours and existing building systems — cabling, access, cameras, alarms and AV coordinated as one package on one schedule.",
    img: img.tenant,
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
            poster={img.heroPoster}
            aria-hidden="true"
          >
            <source src={HERO_VIDEO.src} type="video/mp4" />
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
            src={img.band}
            alt="Completed commercial interior with integrated low-voltage systems"
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
                    <img src={s.img} alt={s.title} loading="lazy" />
                  </div>
                  <div className="slider__copy">
                    <p className="slider__tag">{s.tag}</p>
                    <h3 className="h-card">{s.title}</h3>
                    <span className="btn btn--dark btn--static">
                      <span>View Services</span>
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

      {/* --------------------------------------------------- client types */}
      <section className="news">
        <div className="container">
          <div className="news__head">
            <h2 className="h-section reveal">Who We Work For</h2>
          </div>
          <div className="news__list">
            {CLIENTS.map((c) => (
              <article key={c.title} className="news__item">
                <Link href="/contact">
                  <div className="media ratio-4x3">
                    <img src={c.img} alt={c.title} loading="lazy" />
                  </div>
                </Link>
                <div className="news__meta">
                  <p className="news__date">{c.tag}</p>
                  <h3 className="news__title">{c.title}</h3>
                  <p className="news__body">{c.body}</p>
                  <span className="news__link">
                    <Button href="/contact">Discuss Your Project</Button>
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
            <div className="enquiry__intro">
              <h2 className="h-section reveal">
                Start Your
                <br />
                Project
              </h2>
              <p className="enquiry__lede reveal">
                Tell us what you are building. One accountable partner from
                first consultation through commissioning, handover and the
                service that follows.
              </p>
              <div className="enquiry__actions reveal">
                <Button href="/contact" variant="dark">
                  Discuss Your Project
                </Button>
                <Button href="/portfolio" variant="outline">
                  View Capabilities
                </Button>
              </div>
            </div>

            <div className="enquiry__reach reveal">
              <ContactDetails variant="compact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}