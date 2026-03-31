import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiArrowRight,
  HiPhone,
  HiStar,
  HiShieldCheck,
  HiLightBulb,
  HiCube,
  HiTruck,
  HiCog,
  HiCheckCircle,
  HiLocationMarker,
  HiMail,
  HiClock,
  HiSparkles,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './VariantE.css';

/* ──── Animation Helpers ──── */
function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: 'easeOut', delay }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerWrap({ children, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }} className={className}>
      {children}
    </motion.div>
  );
}

function StaggerChild({ children, className = '' }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className={className}>
      {children}
    </motion.div>
  );
}

/* ──── Data ──── */
const services = [
  { title: 'LED Signs', desc: 'State-of-the-art LED technology with advanced heat management systems. Custom-designed to maximize visibility and brand impact.', icon: <HiLightBulb /> },
  { title: 'Digital Sign Displays', desc: 'Cutting-edge digital displays for dynamic content delivery. Update messaging remotely with vibrant, high-resolution screens.', icon: <HiCube /> },
  { title: 'Lighted Signs', desc: 'Precision-crafted illuminated signage that combines artistry with engineering. Channel letters, cabinet signs, and more.', icon: <HiLightBulb /> },
  { title: 'LED Monument Signs', desc: 'Grand, landmark-style signage establishing a commanding presence. Custom-built for entrances and high-visibility locations.', icon: <HiCube /> },
  { title: 'LED Message Boards', desc: 'Dynamic, programmable messaging solutions for real-time communication. Perfect for promotions and community updates.', icon: <HiCog /> },
  { title: 'Electronic Message Centers', desc: 'Sophisticated electronic displays with full-color capabilities. Enterprise-grade digital signage for maximum engagement.', icon: <HiCube /> },
];

const processSteps = [
  { num: '1', title: 'Design', desc: 'Collaborative design process with detailed renderings and engineering specs.', icon: <HiLightBulb /> },
  { num: '2', title: 'Fabrication', desc: 'In-house manufacturing with precision CNC and quality-controlled assembly.', icon: <HiCube /> },
  { num: '3', title: 'Installation', desc: 'Expert installation by certified crews with full permitting support.', icon: <HiTruck /> },
  { num: '4', title: 'Maintenance', desc: 'Ongoing support with preventative care and remote diagnostics.', icon: <HiCog /> },
];

const whyChoose = [
  { title: 'Unparalleled Expertise', desc: 'Decades of combined experience in LED signage design and installation.', icon: <HiStar /> },
  { title: 'Custom Solutions', desc: 'Every sign tailored to your brand, location, and budget.', icon: <HiSparkles /> },
  { title: 'Latest Technology', desc: 'Cutting-edge LED modules and control systems for top performance.', icon: <HiLightBulb /> },
  { title: 'Eco-Conscious', desc: 'Energy-efficient technology that reduces power consumption.', icon: <HiShieldCheck /> },
  { title: 'Full Support', desc: 'Design through maintenance — one point of contact.', icon: <HiCheckCircle /> },
  { title: 'Local Knowledge', desc: 'Deep NC permitting, zoning, and installation expertise.', icon: <HiLocationMarker /> },
];

const portfolio = [
  { title: 'Greenway Monument Sign', type: 'Monument Sign', color: 'sage', icon: <HiLightBulb /> },
  { title: 'Lakeside Digital Board', type: 'Digital Display', color: 'warm', icon: <HiCube /> },
  { title: 'Garden District Letters', type: 'Channel Letters', color: 'sage', icon: <HiSparkles /> },
  { title: 'Meadow Plaza Center', type: 'EMC Display', color: 'warm', icon: <HiCube /> },
  { title: 'Riverside Medical', type: 'Wayfinding', color: 'sage', icon: <HiShieldCheck /> },
  { title: 'Parkview Retail Hub', type: 'LED Message Board', color: 'warm', icon: <HiCog /> },
];

const testimonials = [
  { name: 'Kamel Lamraoui', business: 'Google Review', rating: 5, text: 'We couldn\'t be happier with our new ProVizion LED sign! The image quality is incredible and the installation team was on point. They paid attention to every little detail and made sure we were completely satisfied. Great warranty and even better service!' },
  { name: 'JNK Productionz', business: 'Google Review', rating: 5, text: 'If you want high-quality digital signage, go with ProVizion LED. The process was easy, communication was great, and their installers were some of the best I\'ve ever worked with. The attention to detail and excellent warranty make them stand out above the rest!' },
  { name: 'Tory Thorpe', business: 'Google Review', rating: 5, text: 'Fantastic experience! ProVizion LED delivers premium digital signs that perform flawlessly. Great company to work with and excellent collaboration with locals.' },
];

/* ──── Component ──── */
export default function VariantE() {
  useThemeClass('theme-ve');

  return (
    <div className="ve-page">
      <SEO
        noindex
        title="Organic Flow | ProVizion LED"
        description="Nature-inspired LED signage solutions from ProVizion LED. Custom LED signs, digital displays, and electronic message centers in Charlotte, NC."
        keywords="LED signs, digital signage, Charlotte NC, organic design, eco signage"
        path="/variant-e"
      />

      {/* ═══ HERO ═══ */}
      <section className="ve-hero">
        <div className="ve-hero__organic-bg" />
        <div className="ve-hero__inner">
          <div className="ve-hero__content">
            <FadeUp>
              <span className="ve-hero__tag"><HiSparkles /> Charlotte&apos;s Signage Partner</span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="ve-hero__title">Signs That <em>Grow</em> Your Business Naturally</h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="ve-hero__sub">
                Custom-engineered LED signage solutions that blend seamlessly with your environment
                while commanding attention. ProVizion LED brings warmth, precision, and sustainability
                to every project.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="ve-hero__actions">
                <a href="#contact" className="ve-btn ve-btn--sage">
                  Request a Quote <HiArrowRight />
                </a>
                <a href={COMPANY.phoneTel} className="ve-btn ve-btn--outline">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </FadeUp>
          </div>
          <FadeUp delay={0.25} className="ve-hero__visual">
            <div className="ve-hero__visual-blob">
              <div className="ve-hero__visual-number">500+</div>
              <div className="ve-hero__visual-label">Signs Installed</div>
            </div>
          </FadeUp>
        </div>
        <svg className="ve-hero__wave" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="ve-section">
        <div className="ve-container">
          <FadeUp>
            <span className="ve-kicker">Our Services</span>
            <h2 className="ve-heading">Signage Solutions</h2>
            <p className="ve-subtitle">Full-spectrum LED signage services crafted with care.</p>
          </FadeUp>
          <StaggerWrap className="ve-services__grid">
            {services.map((s) => (
              <StaggerChild key={s.title} className="ve-service-card">
                <div className="ve-service-card__icon">{s.icon}</div>
                <h3 className="ve-service-card__title">{s.title}</h3>
                <p className="ve-service-card__desc">{s.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="ve-section ve-section--cream">
        <div className="ve-container">
          <FadeUp>
            <span className="ve-kicker">Our Process</span>
            <h2 className="ve-heading">From Vision to Reality</h2>
            <p className="ve-subtitle">A seamless four-step journey from concept to glowing sign.</p>
          </FadeUp>
          <StaggerWrap className="ve-process__steps">
            {processSteps.map((s) => (
              <StaggerChild key={s.title} className="ve-process-step">
                <div className="ve-process-step__circle">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ B2B ═══ */}
      <section className="ve-section ve-section--sage">
        <div className="ve-container">
          <FadeUp>
            <span className="ve-kicker">Enterprise Solutions</span>
            <h2 className="ve-heading" style={{ color: '#fff' }}>Multi-Location Partnerships</h2>
          </FadeUp>
          <div className="ve-b2b__inner">
            <FadeUp className="ve-b2b__text">
              <p>
                ProVizion LED partners with franchises, property management groups, and
                multi-location businesses to deliver consistent signage programs at scale.
                We manage the entire lifecycle from brand-compliant design through
                coordinated multi-site installations.
              </p>
              <div className="ve-b2b__list">
                <div className="ve-b2b__list-item"><HiCheckCircle /> Franchise-ready sign packages</div>
                <div className="ve-b2b__list-item"><HiCheckCircle /> Dedicated account management</div>
                <div className="ve-b2b__list-item"><HiCheckCircle /> Volume pricing programs</div>
                <div className="ve-b2b__list-item"><HiCheckCircle /> Nationwide installation network</div>
              </div>
              <a href="#contact" className="ve-btn ve-btn--white">
                Partner With Us <HiArrowRight />
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="ve-b2b__visual">
              <div className="ve-b2b__card">
                <div className="ve-b2b__card-icon"><HiShieldCheck /></div>
                <h3>Trusted Partner</h3>
                <p>Serving businesses across North Carolina</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="ve-section">
        <div className="ve-container">
          <FadeUp>
            <span className="ve-kicker">Why ProVizion</span>
            <h2 className="ve-heading">The ProVizion Difference</h2>
            <p className="ve-subtitle">What sets us apart in the LED signage industry.</p>
          </FadeUp>
          <StaggerWrap className="ve-why__grid">
            {whyChoose.map((w) => (
              <StaggerChild key={w.title} className="ve-why-card">
                <div className="ve-why-card__icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="ve-section ve-section--cream">
        <div className="ve-container">
          <FadeUp>
            <span className="ve-kicker">Our Work</span>
            <h2 className="ve-heading">Featured Projects</h2>
            <p className="ve-subtitle">Recent installations that showcase our craftsmanship.</p>
          </FadeUp>
          <StaggerWrap className="ve-portfolio__grid">
            {portfolio.map((p) => (
              <StaggerChild key={p.title} className="ve-portfolio-card">
                <div className={`ve-portfolio-card__visual ve-portfolio-card__visual--${p.color}`}>
                  {p.icon}
                </div>
                <div className="ve-portfolio-card__body">
                  <h3>{p.title}</h3>
                  <span>{p.type}</span>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="ve-section">
        <div className="ve-container">
          <FadeUp>
            <span className="ve-kicker">Client Stories</span>
            <h2 className="ve-heading">What Our Clients Say</h2>
            <p className="ve-subtitle">{COMPANY.rating}-star average from {COMPANY.reviewCount}+ verified reviews.</p>
          </FadeUp>
          <StaggerWrap className="ve-testimonials__grid">
            {testimonials.map((t) => (
              <StaggerChild key={t.name} className="ve-testimonial-card">
                <div className="ve-testimonial-card__stars">
                  {Array.from({ length: t.rating }, (_, i) => <HiStar key={i} />)}
                </div>
                <p className="ve-testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <div className="ve-testimonial-card__author">{t.name}</div>
                <div className="ve-testimonial-card__role">{t.business}</div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="ve-section ve-section--cream" id="contact">
        <div className="ve-container">
          <FadeUp>
            <span className="ve-kicker">Get in Touch</span>
            <h2 className="ve-heading">Start Your Project</h2>
            <p className="ve-subtitle">Tell us about your vision and we&apos;ll bring it to life.</p>
          </FadeUp>
          <div className="ve-contact__inner">
            <FadeUp className="ve-contact__info">
              <div className="ve-contact__info-item">
                <div className="ve-contact__info-icon"><HiPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <a href={COMPANY.phoneTel}>{COMPANY.phone}</a>
                </div>
              </div>
              <div className="ve-contact__info-item">
                <div className="ve-contact__info-icon"><HiMail /></div>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </div>
              <div className="ve-contact__info-item">
                <div className="ve-contact__info-icon"><HiLocationMarker /></div>
                <div>
                  <h4>Location</h4>
                  <p>{COMPANY.address.full}</p>
                </div>
              </div>
              <div className="ve-contact__info-item">
                <div className="ve-contact__info-icon"><HiClock /></div>
                <div>
                  <h4>Hours</h4>
                  <p>Mon – Fri: 8 AM – 6 PM EST</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15} className="ve-contact__form-wrap">
              <QuoteForm source="variant-e-organic-flow" />
              <p className="ve-contact__tcpa">
                By submitting this form, you consent to receive marketing communications from ProVizion LED.
                Message and data rates may apply. You can opt out at any time.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

    </div>
  );
}
