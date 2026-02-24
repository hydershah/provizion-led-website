/* eslint-disable react-refresh/only-export-components */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HiStar,
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
  HiClock,
  HiUserGroup,
  HiLightBulb,
  HiCurrencyDollar,
  HiThumbUp,
  HiTruck,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './VariantM.css';

/* ──── animation helpers ──── */
const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const StaggerWrap = ({ children, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    >
      {children}
    </motion.div>
  );
};

const StaggerChild = ({ children, className = '' }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 28 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    }}
  >
    {children}
  </motion.div>
);

/* ──── data ──── */
const SERVICES = [
  { icon: <HiLightBulb />, title: 'LED Channel Letters', desc: 'We build bright, beautiful channel letters that light up your storefront and bring customers through the door — rain or shine, day or night.' },
  { icon: <HiCurrencyDollar />, title: 'Monument Signs', desc: 'Solid, eye-catching monument signs that tell the neighborhood your business is here to stay. Built tough for Carolina weather.' },
  { icon: <HiShieldCheck />, title: 'Pylon & Pole Signs', desc: 'Need to be seen from the road? Our pylon signs are engineered tall and bright so drivers spot you from blocks away.' },
  { icon: <HiLocationMarker />, title: 'Wayfinding Systems', desc: 'Friendly, clear wayfinding signs that help your visitors find exactly where they need to go — no confusion, no frustration.' },
  { icon: <HiUserGroup />, title: 'Digital Displays', desc: 'Update your message anytime with dynamic digital displays. Promote specials, welcome guests, or share community events in real time.' },
  { icon: <HiTruck />, title: 'Vehicle Wraps', desc: 'Turn your trucks and vans into rolling billboards. Charlotte sees your brand everywhere you drive — that is free advertising all day long.' },
];

const PROCESS = [
  { num: '1', title: "Let's Talk", desc: 'Give us a call or fill out the form. We will come out, listen to what you need, and figure out the best sign for your space.' },
  { num: '2', title: 'We Design', desc: 'Our Charlotte design team creates custom mockups you will love. We handle permits and HOA paperwork so you do not have to worry.' },
  { num: '3', title: 'We Build', desc: 'Your sign is fabricated right here in our Charlotte shop. Quality-checked and built to last through every Carolina storm.' },
  { num: '4', title: 'We Install', desc: 'Our local crew handles installation professionally and on time. We clean up, walk you through everything, and make sure you are thrilled.' },
];

const B2B_PERKS = [
  'Volume pricing for franchises and multi-location businesses',
  'A dedicated Charlotte-based account manager who knows you by name',
  'Consistent branding across every location you operate',
  'Priority scheduling for urgent sign repairs or replacements',
  'Local installation crews who understand NC codes and permits',
];

const WHY_US = [
  { icon: <HiLocationMarker />, title: 'Charlotte Born & Raised', desc: 'We are a Charlotte company through and through. We know the neighborhoods, the codes, and the people.' },
  { icon: <HiThumbUp />, title: 'Your Neighbors Trust Us', desc: `${COMPANY.reviewCount}+ five-star reviews from Charlotte businesses. Ask around — someone you know has worked with us.` },
  { icon: <HiClock />, title: 'Fast Local Turnaround', desc: 'Because we are right here in Charlotte, most projects go from handshake to install in just 4 to 6 weeks.' },
  { icon: <HiShieldCheck />, title: '5-Year Warranty', desc: 'Every sign we build is backed by a 5-year warranty on materials, LEDs, and workmanship. We stand behind our work.' },
  { icon: <HiCurrencyDollar />, title: 'Honest, Fair Pricing', desc: 'No hidden fees, no bait-and-switch. We give you a clear quote and stick to it. That is how neighbors do business.' },
  { icon: <HiUserGroup />, title: 'One Team, Start to Finish', desc: 'Design, build, install, maintain — you deal with the same friendly team every step of the way. No runaround.' },
];

const PORTFOLIO = [
  { title: 'South End Coffee Co.', type: 'LED Channel Letters', visual: '☕', variant: 'green', location: 'South End' },
  { title: 'NoDa Brewing District Sign', type: 'Monument Sign', visual: '🍺', variant: 'amber', location: 'NoDa' },
  { title: 'Uptown Medical Center', type: 'Wayfinding System', visual: '🏥', variant: 'green', location: 'Uptown' },
  { title: 'Plaza Midwood Auto', type: 'Pylon Sign', visual: '🚗', variant: 'amber', location: 'Plaza Midwood' },
  { title: 'Ballantyne Commons Church', type: 'Digital Display', visual: '⛪', variant: 'green', location: 'Ballantyne' },
  { title: 'University City Fitness', type: 'Illuminated Sign', visual: '💪', variant: 'amber', location: 'University City' },
];

const TESTIMONIALS = [
  { text: 'ProVizion is the real deal. They came out, understood exactly what we needed, and delivered a sign that has brought us so many new customers. Best money we ever spent.', author: 'Maria S.', role: 'Owner, South End Bakery', location: 'South End, Charlotte' },
  { text: 'As a local business owner, I wanted to work with a local sign company. ProVizion made it easy from start to finish. Our monument sign looks incredible and they handled all the permitting.', author: 'James T.', role: 'Property Manager', location: 'Ballantyne, Charlotte' },
  { text: 'The team at ProVizion feels like family. They were on time, on budget, and the quality of our channel letters is outstanding. I recommend them to every business owner I know.', author: 'Lisa K.', role: 'Franchise Owner', location: 'University City, Charlotte' },
];

/* ──── Component ──── */
export default function VariantM() {
  useThemeClass('theme-vm');

  return (
    <div className="vm-page">
      <SEO
        title={`Charlotte's Local Sign Shop | ${COMPANY.name}`}
        description="Charlotte's trusted neighborhood LED sign company. Locally owned, community rooted. Channel letters, monument signs, digital displays and more. Free consultation."
        keywords="LED signs Charlotte, local sign company, Charlotte NC signs, channel letters, monument signs, ProVizion LED, neighborhood sign shop"
        path="/variant-m"
      />

      {/* ═══ HERO ═══ */}
      <section className="vm-hero">
        <div className="vm-hero__bg-shape" />
        <div className="vm-hero__inner">
          <FadeUp className="vm-hero__content">
            <span className="vm-hero__badge">
              <HiShieldCheck /> Locally Owned &amp; Operated
            </span>
            <h1 className="vm-hero__title">
              Charlotte&apos;s Trusted <em>Sign Shop</em>
            </h1>
            <p className="vm-hero__sub">
              We are your neighborhood LED sign company — designing, building, and installing
              signs for Charlotte businesses since day one. When you work with ProVizion,
              you work with your neighbors.
            </p>
            <div className="vm-hero__actions">
              <a href="#vm-contact" className="vm-btn vm-btn--amber">
                Get a Free Quote <HiArrowRight />
              </a>
              <a href={COMPANY.phoneTel} className="vm-btn vm-btn--outline">
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
            <div className="vm-hero__trust">
              <span className="vm-hero__trust-item">
                <HiStar /> {COMPANY.rating}.0 Rating
              </span>
              <span className="vm-hero__trust-item">
                <HiCheckCircle /> {COMPANY.reviewCount}+ Reviews
              </span>
              <span className="vm-hero__trust-item">
                <HiShieldCheck /> Licensed &amp; Insured
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="vm-hero__card">
            <div className="vm-hero__card-local-badge">
              <HiLocationMarker />
              <span>Charlotte, NC</span>
            </div>
            <div className="vm-hero__card-stars">
              {[...Array(5)].map((_, i) => <HiStar key={i} />)}
            </div>
            <div className="vm-hero__card-rating">{COMPANY.rating}.0</div>
            <p className="vm-hero__card-label">{COMPANY.reviewCount} happy neighbors</p>
            <div className="vm-hero__card-stats">
              <div>
                <div className="vm-hero__card-stat-value">500+</div>
                <div className="vm-hero__card-stat-label">Signs Installed</div>
              </div>
              <div>
                <div className="vm-hero__card-stat-value">10+</div>
                <div className="vm-hero__card-stat-label">Years in CLT</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="vm-section">
        <div className="vm-container">
          <FadeUp>
            <span className="vm-kicker">What We Do</span>
            <h2 className="vm-heading">Signs Built by Your Neighbors</h2>
            <p className="vm-subtitle">
              From channel letters to digital displays, we design, fabricate, and install
              every type of sign your Charlotte business needs.
            </p>
          </FadeUp>
          <StaggerWrap className="vm-services__grid">
            {SERVICES.map((s, i) => (
              <StaggerChild key={i} className="vm-service-card">
                <div className="vm-service-card__icon">{s.icon}</div>
                <h3 className="vm-service-card__title">{s.title}</h3>
                <p className="vm-service-card__desc">{s.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <div className="vm-cta-banner">
        <p className="vm-cta-banner__text">Ready to Light Up Your Business?</p>
        <p className="vm-cta-banner__sub">Your Charlotte neighbors are here to help. No pressure, just honest advice.</p>
        <a href="#vm-contact" className="vm-btn vm-btn--white">
          Get Your Free Quote <HiArrowRight />
        </a>
      </div>

      {/* ═══ PROCESS ═══ */}
      <section className="vm-section vm-section--sand">
        <div className="vm-container">
          <FadeUp>
            <span className="vm-kicker">How It Works</span>
            <h2 className="vm-heading">Four Friendly Steps to Your New Sign</h2>
            <p className="vm-subtitle">
              We keep it simple and transparent. Here is how we work with every Charlotte business we serve.
            </p>
          </FadeUp>
          <StaggerWrap className="vm-process__steps">
            {PROCESS.map((step, i) => (
              <StaggerChild key={i} className="vm-process-step">
                <div className="vm-process-step__circle">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ B2B ═══ */}
      <section className="vm-section vm-section--green">
        <div className="vm-container">
          <div className="vm-b2b__inner">
            <FadeUp className="vm-b2b__text">
              <span className="vm-kicker">Multi-Location &amp; B2B</span>
              <h2 className="vm-heading">Big Enough to Scale, Small Enough to Care</h2>
              <p>
                Running multiple locations across Charlotte or beyond? We partner with franchises,
                property groups, and multi-site businesses to deliver consistent, high-quality
                signage — with the personal touch of a local shop.
              </p>
              <div className="vm-b2b__list">
                {B2B_PERKS.map((perk, i) => (
                  <div key={i} className="vm-b2b__list-item">
                    <HiCheckCircle /> {perk}
                  </div>
                ))}
              </div>
              <a href="#vm-contact" className="vm-btn vm-btn--amber">
                Request B2B Pricing <HiArrowRight />
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vm-b2b__card">
              <div className="vm-b2b__card-icon"><HiUserGroup /></div>
              <h3>Your Local Partner</h3>
              <p>50+ Charlotte businesses trust ProVizion for their signage. Join the neighborhood.</p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="vm-section">
        <div className="vm-container">
          <FadeUp>
            <span className="vm-kicker">Why ProVizion</span>
            <h2 className="vm-heading">Why Charlotte Chooses Us</h2>
            <p className="vm-subtitle">
              We are not a big faceless corporation. We are your neighbors — and that means something.
            </p>
          </FadeUp>
          <StaggerWrap className="vm-why__grid">
            {WHY_US.map((item, i) => (
              <StaggerChild key={i} className="vm-why-card">
                <div className="vm-why-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="vm-section vm-section--sand">
        <div className="vm-container">
          <FadeUp>
            <span className="vm-kicker">Our Work</span>
            <h2 className="vm-heading">Signs Across Charlotte Neighborhoods</h2>
            <p className="vm-subtitle">
              From South End to Ballantyne, here are some of the signs we have built for businesses right here in the Queen City.
            </p>
          </FadeUp>
          <StaggerWrap className="vm-portfolio__grid">
            {PORTFOLIO.map((p, i) => (
              <StaggerChild key={i} className="vm-portfolio-card">
                <div className={`vm-portfolio-card__visual vm-portfolio-card__visual--${p.variant}`}>
                  {p.visual}
                </div>
                <div className="vm-portfolio-card__body">
                  <div className="vm-portfolio-card__location">
                    <HiLocationMarker /> {p.location}
                  </div>
                  <h3>{p.title}</h3>
                  <span>{p.type}</span>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="vm-section">
        <div className="vm-container">
          <FadeUp>
            <span className="vm-kicker">Happy Neighbors</span>
            <h2 className="vm-heading">What Charlotte Says About Us</h2>
            <p className="vm-subtitle">
              Do not take our word for it — hear from your fellow Charlotte business owners.
            </p>
          </FadeUp>
          <StaggerWrap className="vm-testimonials__grid">
            {TESTIMONIALS.map((t, i) => (
              <StaggerChild key={i} className="vm-testimonial-card">
                <div className="vm-testimonial-card__stars">
                  {[...Array(5)].map((_, j) => <HiStar key={j} />)}
                </div>
                <p className="vm-testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <p className="vm-testimonial-card__author">{t.author}</p>
                <p className="vm-testimonial-card__role">{t.role}</p>
                <p className="vm-testimonial-card__location">
                  <HiLocationMarker /> {t.location}
                </p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CTA BANNER 2 ═══ */}
      <div className="vm-cta-banner vm-cta-banner--amber">
        <p className="vm-cta-banner__text">Your Sign Is Your First Impression — Make It Count</p>
        <p className="vm-cta-banner__sub">Charlotte businesses trust their neighbors. Let us build something great together.</p>
        <a href="#vm-contact" className="vm-btn vm-btn--green">
          Start Your Project <HiArrowRight />
        </a>
      </div>

      {/* ═══ CONTACT ═══ */}
      <section id="vm-contact" className="vm-section vm-section--sand">
        <div className="vm-container">
          <FadeUp>
            <span className="vm-kicker">Get In Touch</span>
            <h2 className="vm-heading">Visit Our Charlotte Shop</h2>
            <p className="vm-subtitle">
              Stop by, give us a call, or fill out the form. We would love to meet you and talk about your sign project.
            </p>
          </FadeUp>
          <div className="vm-contact__inner">
            <FadeUp className="vm-contact__info">
              <div className="vm-contact__map-badge">
                <HiLocationMarker />
                <span>Charlotte, NC — Locally Owned</span>
              </div>
              <div className="vm-contact__info-item">
                <div className="vm-contact__info-icon"><HiPhone /></div>
                <div>
                  <h4>Call Us</h4>
                  <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
                </div>
              </div>
              <div className="vm-contact__info-item">
                <div className="vm-contact__info-icon"><HiMail /></div>
                <div>
                  <h4>Email Us</h4>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>
              <div className="vm-contact__info-item">
                <div className="vm-contact__info-icon"><HiLocationMarker /></div>
                <div>
                  <h4>Visit Our Shop</h4>
                  <p>{COMPANY.address.full}</p>
                </div>
              </div>
              <div className="vm-contact__info-item">
                <div className="vm-contact__info-icon"><HiClock /></div>
                <div>
                  <h4>Shop Hours</h4>
                  <p>Mon – Fri: 8 AM – 6 PM EST</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="vm-contact__form-wrap">
              <QuoteForm source="variant-m" />
              <p className="vm-contact__tcpa">
                By submitting this form, you agree to receive calls/texts from {COMPANY.name}.
                Msg &amp; data rates may apply. Reply STOP to opt out.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER BAR ═══ */}
      <div className="vm-footerbar">
        <p className="vm-footerbar__brand">
          Pro<em>Vizion</em> LED
        </p>
        <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. &bull; Charlotte, NC</p>
        <div className="vm-footerbar__links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>

      {/* ═══ FLOATING CTA ═══ */}
      <div className="vm-floating-cta">
        <a href="#vm-contact" className="vm-btn vm-btn--amber">
          Free Quote <HiArrowRight />
        </a>
      </div>
    </div>
  );
}
