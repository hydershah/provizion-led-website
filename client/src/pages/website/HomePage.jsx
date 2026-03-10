import { Link } from 'react-router-dom';
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
  HiBadgeCheck,
} from 'react-icons/hi';
import SEO from '../../components/SEO';

import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import useSanityQuery from '../../hooks/useSanityQuery';
import { homePageQuery } from '../../lib/queries';
import { urlFor } from '../../lib/sanity';
import { getIcon } from '../../lib/iconMap';
import { FadeUp, StaggerWrap, StaggerChild, NeonText, ScanLine, FloatingParticles, NeonBorder } from './animations';
import { trackPhoneClick } from '../../utils/analytics';
import './shared.css';

/* ──── Fallback Data ──── */
const defaultServices = [
  { title: 'Custom LED Signs', desc: 'Our custom LED signs deliver vibrant colors, unmatched clarity, and energy-efficient performance for businesses across Charlotte, NC and North Carolina. Our advanced heat management process ensures your LED signage stays bright and lasts longer — no dimming, no downtime.', img: '/images/electronic-signs-1.jpg', link: '/led-signs' },
  { title: 'Digital Sign Displays', desc: 'Elevate your storefront or facility with our digital sign displays. Perfect for showcasing promotions, real-time updates, or branded content, our digital signage solutions offer unmatched versatility for businesses in Charlotte and beyond.', img: '/images/electronic-digital-message-displays-signs-3.jpg', link: '/digital-signs' },
  { title: 'Illuminated & Lighted Signs', desc: 'Make your brand visible around the clock with our illuminated signs and lighted channel letters. Manufactured in-house and built for durability, our lighted signs deliver consistent brightness and a commanding outdoor presence.', img: '/images/lighted-and-illuminated-signs-2.jpeg', link: '/lighted-signs' },
  { title: 'LED Monument Signs', desc: 'Our LED monument signs combine architectural presence with cutting-edge LED technology. Ideal for corporate campuses, churches, and retail centers, these custom monument signs serve as permanent landmarks for your brand in the Charlotte, NC area.', img: '/images/programmable-led-message-centers-3.jpg', link: '/contact-us' },
  { title: 'LED Message Boards', desc: 'Keep your audience engaged with programmable LED message boards. Easy to update remotely, our outdoor LED message boards are ideal for schools, churches, and businesses that need to communicate changing promotions, events, and announcements.', img: '/images/indoor-led-message-board-sign-2.jpg', link: '/contact-us' },
  { title: 'Electronic Message Centers', desc: 'Our electronic message centers (EMCs) combine reliable digital signage technology with intuitive content management. Built for schools, government buildings, and commercial properties across North Carolina, they keep your audience informed 24/7.', img: '/images/electronic-message-centers-digital-signage-display-1.jpg', link: '/electronic-signs' },
];

const defaultProcessSteps = [
  { step: '01', title: 'Custom Sign Design', desc: 'Our sign designers work directly with you to create LED sign concepts that reflect your brand — from channel letters to full-color digital displays.', icon: <HiLightBulb /> },
  { step: '02', title: 'In-House Sign Fabrication', desc: 'Every sign is manufactured in our North Carolina facility using premium materials and advanced LED technology for long-lasting performance.', icon: <HiCube /> },
  { step: '03', title: 'Professional Sign Installation', desc: 'Our licensed sign installation crews handle permits, electrical, and placement — ensuring your outdoor signs are positioned for maximum visibility.', icon: <HiTruck /> },
  { step: '04', title: 'Sign Maintenance & Support', desc: 'Scheduled maintenance and rapid repairs keep your LED signs, digital displays, and electronic message centers performing at their best.', icon: <HiCog /> },
];

const defaultWhyChoose = [
  { title: 'Experienced LED Sign Manufacturer', desc: 'With over a decade manufacturing LED signs and digital displays, our team brings deep expertise to every project — from sign design and fabrication to permitting and installation.' },
  { title: 'Custom Signage Solutions', desc: 'Every business is different. Whether you need a full-color digital sign display for a car dealership, illuminated channel letters for a restaurant, or an LED monument sign for a church, we build exactly what your brand requires.' },
  { title: 'Latest LED & Digital Technology', desc: 'We invest in state-of-the-art LED technology and digital signage platforms, delivering brighter, more durable, and more energy-efficient sign products than the competition.' },
  { title: 'Energy-Efficient LED Signage', desc: 'Our LED signs and electronic message centers use significantly less power than traditional signage. Lower energy costs and a smaller carbon footprint — without sacrificing brightness or visibility.' },
  { title: 'Full-Service Sign Support', desc: 'We don\'t just manufacture and install your sign — we maintain it. Our ongoing sign maintenance programs keep your LED signs, digital displays, and lighted signs performing at peak brightness.' },
  { title: 'Local Charlotte, NC Sign Company', desc: 'Based in Charlotte, North Carolina, we understand the local market and permitting landscape. As your neighborhood LED sign company, we deliver faster turnaround and hands-on service.' },
];

const defaultTestimonials = [
  { name: 'Kamel Lamraoui', business: 'Google Review', rating: 5, text: 'We couldn\'t be happier with our new ProVizion LED sign! The image quality is incredible and the installation team was on point. They paid attention to every little detail and made sure we were completely satisfied. Great warranty and even better service!' },
  { name: 'JNK Productionz', business: 'Google Review', rating: 5, text: 'If you want high-quality digital signage, go with ProVizion LED. The process was easy, communication was great, and their installers were some of the best I\'ve ever worked with. The attention to detail and excellent warranty make them stand out above the rest!' },
  { name: 'Tory Thorpe', business: 'Google Review', rating: 5, text: 'Fantastic experience! ProVizion LED delivers premium digital signs that perform flawlessly. Great company to work with and excellent collaboration with locals.' },
  { name: 'Savannah Schexnayder', business: 'Google Review', rating: 5, text: 'Amazing product! The LED technology from ProVizion is unmatched and the quality shows. Great people to work with and excellent support for local partners.' },
  { name: 'James Sanders', business: 'Google Review', rating: 5, text: 'Love our new ProVizion LED sign! The display is crystal clear, the build quality is outstanding, and their partnership approach makes everything easy.' },
];

const defaultB2bFeatures = [
  { title: 'Wholesale & Contract Sign Installation', desc: 'Professional sign installation services for national brands, regional franchises, and multi-location businesses across North Carolina.' },
  { title: 'In-House Sign Manufacturing', desc: 'LED sign fabrication, channel letter production, and cabinet sign assembly — all handled in our facility for complete quality control.' },
  { title: 'B2B & Third-Party Sign Installation', desc: 'Seamless subcontracted sign installation for design firms, marketing agencies, and sign brokers throughout the Southeast.' },
  { title: 'White-Label Sign Installation', desc: 'Your trusted, discreet partner for outsourced LED sign and digital display installation — always on time and on brand.' },
  { title: 'Trade & Reseller Sign Solutions', desc: 'Wholesale LED signs and electronic message centers for resellers and trade partners looking for reliable sign manufacturing without the overhead.' },
];

const defaultCertifications = [
  'BBB Accredited',
  'Licensed & Insured',
  'UL Listed',
  'Energy Star Partner',
];

const defaultPortfolio = [
  { title: 'Channel Letters — Luxury Hotel', category: 'Channel Letters', img: '/images/led-signs-channel-letters-lit-at-night-1.jpg' },
  { title: 'LED Monument — Financial District', category: 'Monument Signs', img: '/images/full-color-led-electronic-sign-4.jpg' },
  { title: 'Digital Display — Convention Center', category: 'Digital Displays', img: '/images/custom-electronic-sign-company-4.jpeg' },
  { title: 'Illuminated Cabinet — Fine Dining', category: 'Cabinet Signs', img: '/images/michaels-raw-bar.jpg' },
  { title: 'EMC — Corporate Headquarters', category: 'Message Centers', img: '/images/pexels-photo-1058275.jpeg' },
  { title: 'Pylon Sign — Medical Campus', category: 'Pylon Signs', img: '/images/traditional-led-signs-2.png' },
];

/* ====================================
   HOME PAGE — Production Website
   ==================================== */
const defaultFallback = {
  services: defaultServices,
  processSteps: defaultProcessSteps,
  whyChoose: defaultWhyChoose,
  testimonials: defaultTestimonials,
  b2bFeatures: defaultB2bFeatures,
  portfolio: defaultPortfolio,
  certifications: defaultCertifications,
};

export default function HomePage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();
  const { data } = useSanityQuery(homePageQuery, {}, defaultFallback);

  // Normalize Sanity data to match the shape our template expects.
  // Handles both Sanity fields (description, image) and fallback fields (desc, img).
  const services = data.services?.length
    ? data.services.map((s) => ({
        title: s.title,
        desc: s.description || s.desc,
        img: s.image?.asset ? urlFor(s.image).width(800).url() : (s.img || ''),
        link: s.link,
      }))
    : defaultServices;

  const processSteps = data.processSteps?.length
    ? data.processSteps.map((p) => {
        if (p.icon) return p; // already in fallback shape
        const Icon = getIcon(p.iconName);
        return { step: p.step, title: p.title, desc: p.description, icon: Icon ? <Icon /> : null };
      })
    : defaultProcessSteps;

  const whyChoose = data.whyChoose?.length
    ? data.whyChoose.map((w) => ({ title: w.title, desc: w.description || w.desc }))
    : defaultWhyChoose;

  const testimonials = data.testimonials?.length
    ? data.testimonials.map((t) => ({ name: t.name, business: t.business, rating: t.rating, text: t.text }))
    : defaultTestimonials;

  const b2bFeatures = data.b2bFeatures?.length
    ? data.b2bFeatures.map((b) => ({ title: b.title, desc: b.description || b.desc }))
    : defaultB2bFeatures;

  const portfolio = data.portfolio?.length
    ? data.portfolio.map((p) => ({
        title: p.title,
        category: p.category,
        img: p.image?.asset ? urlFor(p.image).width(800).url() : (p.img || ''),
      }))
    : defaultPortfolio;

  const certifications = data.certifications?.length
    ? data.certifications.map((c) => c.name || c)
    : defaultCertifications;

  return (
    <>
      <SEO
        title="LED & Digital Sign Manufacturer | Charlotte, NC"
        description="ProVizion LED is Charlotte NC's leading LED sign manufacturer. Custom LED signs, digital displays, channel letters & monument signs. Call (984) 217-6527 for a free quote."
        keywords="LED signs, digital signs, sign manufacturer, Charlotte NC, LED sign company, custom LED signage, channel letters, monument signs, electronic message centers, North Carolina"
        path="/"
      />

      {/* -- HERO (Full-Screen Image) -- */}
      <section className="vc-hero" id="hero">
        <div className="vc-hero__bg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6414039ac4366d2cbc083afe/c007ac6c-e430-4fbf-9023-9d8918784bff/unsplash-image-YlpfE9uCakE.jpg"
            alt="Custom LED sign installation by ProVizion LED in Charlotte, NC"
            className="vc-hero__bg-img"
            loading="eager"
            decoding="async"
          />
          <div className="vc-hero__bg-overlay" />
        </div>

        <div className="vc-container vc-hero__content">
          <FadeUp>
            <span className="vc-hero__eyebrow">Charlotte, NC &mdash; LED Sign Manufacturer</span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="vc-hero__heading">
              Custom LED &amp; Digital Signs
              <span className="vc-hero__heading-accent">Built in Charlotte, NC</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="vc-hero__line" />
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="vc-hero__services-row">
              <span>Design</span>
              <span>Fabrication</span>
              <span>Installation</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p className="vc-hero__subhead">
              Leading LED sign manufacturer &mdash; specializing in custom LED signage, commercial lighted signs, programmable digital displays, and electronic message centers.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="vc-hero__actions">
              <Link to="/contact-us" className="vc-btn vc-btn--accent">
                Get A Free Quote <HiArrowRight />
              </Link>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--outline-light" onClick={() => trackPhoneClick('home-hero')}>
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="vc-hero__trust-bar">
              <div className="vc-hero__trust-pill">
                <span className="vc-hero__stars-static">
                  <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
                </span>
                {COMPANY.reviewCount}+ Reviews
              </div>
              <div className="vc-hero__trust-pill">
                <HiShieldCheck /> BBB Accredited
              </div>
              <div className="vc-hero__trust-pill">
                <HiShieldCheck /> Licensed &amp; Insured
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

      <ScanLine />

      {/* -- INTRO -- */}
      <section className="vc-section" aria-labelledby="vc-intro-heading">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <NeonText className="vc-section-label">About Us</NeonText>
              <h2 id="vc-intro-heading" className="vc-section-title">Charlotte&apos;s Trusted LED Sign Manufacturer</h2>
              <p>
                ProVizion LED is a full-service LED sign manufacturer based in Charlotte, NC. We specialize in custom LED signs, digital sign displays, illuminated channel letters, electronic message centers, and LED monument signs — designed, fabricated, and installed by our in-house team.
              </p>
              <p>
                From durable outdoor business signs to high-resolution indoor digital signage, our LED sign manufacturing process combines precision fabrication with the latest technology. Whether you need a single lighted storefront sign, programmable electronic message centers, or a multi-location rollout across North Carolina, ProVizion LED delivers on time and on budget.
              </p>
              <Link to="/contact-us" className="vc-btn vc-btn--accent vc-btn--sm">
                Get A Free Quote <HiArrowRight />
              </Link>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img
                src="/images/full-color-led-electronic-sign-4.jpg"
                alt="Custom LED sign by ProVizion LED"
                loading="lazy"
                decoding="async"
              />
            </FadeUp>
          </div>

          <FadeUp>
            <div className="vc-stats-row">
              <div className="vc-stat-item">
                <div className="vc-stat-item__number">10+</div>
                <div className="vc-stat-item__label">Years Experience</div>
              </div>
              <div className="vc-stat-item">
                <div className="vc-stat-item__number">500+</div>
                <div className="vc-stat-item__label">Signs Installed</div>
              </div>
              <div className="vc-stat-item">
                <div className="vc-stat-item__number">{COMPANY.reviewCount}+</div>
                <div className="vc-stat-item__label">5-Star Reviews</div>
              </div>
              <div className="vc-stat-item">
                <div className="vc-stat-item__number">100%</div>
                <div className="vc-stat-item__label">Satisfaction</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <ScanLine />

      {/* -- SERVICES (Editorial Grid) -- */}
      <section className="vc-section vc-section--centered" id="services" aria-labelledby="vc-services-heading">
        <div className="vc-container">
          <FadeUp>
            <NeonText className="vc-section-label">Our Expertise</NeonText>
            <h2 id="vc-services-heading" className="vc-section-title">Custom LED Signs &amp; Digital Signage Solutions</h2>
            <p className="vc-section-subtitle">From LED signs and digital displays to illuminated channel letters and electronic message centers — we manufacture, fabricate, and install every type of commercial sign your business needs.</p>
          </FadeUp>

          <div className="vc-services-editorial">
            {services.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.08} className={`vc-service-editorial ${i % 2 === 0 ? '' : 'vc-service-editorial--alt'}`}>
                <div className="vc-service-editorial__img">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="vc-service-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="vc-service-editorial__content">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <Link to={svc.link} className="vc-service-editorial__link">
                    Read More <HiArrowRight className="vc-arrow-extend" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="vc-phone-cta" style={{ marginTop: '40px' }}>
            <p>Reach out to ProVizion LED today at <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick('home-phone-cta')}>{COMPANY.phone}</a> for your free talk with an LED &amp; Digital Sign Expert!</p>
            <a href="#contact" className="vc-btn vc-btn--accent">
              Get A Free Quote <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* -- PROCESS -- */}
      <section className="vc-section vc-section--alt" id="process" aria-labelledby="vc-process-heading" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingParticles count={20} />
        <div className="vc-container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <NeonText className="vc-section-label">The Journey</NeonText>
            <h2 id="vc-process-heading" className="vc-section-title">Our Sign Manufacturing Process</h2>
            <p className="vc-section-subtitle">From initial sign design to final installation, every LED sign and digital display we produce goes through our proven four-step process — ensuring quality, durability, and on-time delivery for businesses across Charlotte and North Carolina.</p>
          </FadeUp>

          <StaggerWrap className="vc-process-grid">
            {processSteps.map((step) => (
              <StaggerChild key={step.step} className="vc-process-card">
                <div className="vc-process-card__number">{step.step}</div>
                <div className="vc-process-card__icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>

        </div>
      </section>

      {/* -- DIGITAL DISPLAYS HIGHLIGHT -- */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <NeonText className="vc-section-label">Digital Solutions</NeonText>
              <h2 className="vc-section-title">Digital Displays &amp; Electronic Message Centers</h2>
              <p>
                Our custom digital sign displays and electronic message centers bring your content to life with full-color LED technology, real-time updates, and remote content management. Perfect for retail stores, corporate lobbies, schools, and churches.
              </p>
              <p>
                Whether you need an indoor digital signage display or a high-brightness outdoor electronic message center, ProVizion LED manufactures and installs digital sign solutions built for the Charlotte, NC climate and beyond.
              </p>
              <Link to="/digital-signs" className="vc-btn vc-btn--accent vc-btn--sm">
                Explore Digital Signs <HiArrowRight />
              </Link>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img
                src="/images/electronic-digital-message-displays-signs-3.jpg"
                alt="Custom digital display by ProVizion LED"
                loading="lazy"
                decoding="async"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* -- B2B SECTION -- */}
      <section className="vc-section" id="b2b" aria-labelledby="vc-b2b-heading">
        <div className="vc-container">
          <FadeUp>
            <NeonText className="vc-section-label">Enterprise Partnership</NeonText>
            <h2 id="vc-b2b-heading" className="vc-section-title">Professional Sign Installation &amp; B2B Services</h2>
            <div className="vc-content-block">
              <p>
                ProVizion LED provides full-service sign installation for LED signs, digital displays, channel letters, monument signs, and electronic message centers. Our licensed installation crews handle everything — permits, electrical, and structural mounting — serving sign companies, agencies, and businesses across North Carolina and the Southeast.
              </p>
            </div>
          </FadeUp>

          <div className="vc-b2b-layout">
            <FadeUp className="vc-b2b-content">
              <h3 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Our Installation &amp; B2B Services Include:</h3>

              <div className="vc-b2b-features">
                {b2bFeatures.map((feat) => (
                  <div key={feat.title} className="vc-b2b-feature">
                    <HiCheckCircle className="vc-b2b-feature__icon" />
                    <div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="vc-b2b-certifications">
                {certifications.map((cert) => (
                  <span key={cert} className="vc-cert-badge"><HiBadgeCheck /> {cert}</span>
                ))}
              </div>

              <div className="vc-phone-cta" style={{ textAlign: 'left' }}>
                <p>Reach out to ProVizion LED today at <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick('home-installation-cta')}>{COMPANY.phone}</a> for your free talk with a sign installation Expert!</p>
                <a href="#contact" className="vc-btn vc-btn--accent">
                  Get A Free Quote <HiArrowRight />
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="vc-b2b-quote">
              <NeonBorder><blockquote>
                &ldquo;ProVizion LED has been our go-to manufacturing partner for three years. Their consistency, quality, and reliability are unmatched in the Southeast region.&rdquo;
              </blockquote>
              <div className="vc-b2b-quote__author">
                <div className="vc-b2b-quote__avatar">R</div>
                <div>
                  <strong>Regional Director</strong>
                  <span>National Sign Company</span>
                </div>
              </div>
              </NeonBorder>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* -- WHY CHOOSE US -- */}
      <section className="vc-section vc-section--alt" id="why-us" aria-labelledby="vc-why-heading" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingParticles count={25} />
        <div className="vc-container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <NeonText className="vc-section-label">The ProVizion Difference</NeonText>
            <h2 id="vc-why-heading" className="vc-section-title">Why Choose ProVizion LED as Your Sign Company?</h2>
            <p className="vc-section-subtitle">When you need a reliable LED sign manufacturer in Charlotte, NC, ProVizion LED delivers the expertise, technology, and local service that makes the difference. Here&apos;s why businesses choose us for their LED signs, digital displays, and custom signage.</p>
          </FadeUp>

          <StaggerWrap className="vc-why-grid">
            {whyChoose.map((item, i) => (
              <StaggerChild key={item.title} className="vc-why-card">
                <div className="vc-why-card__number">{String(i + 1).padStart(2, '0')}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>

          <FadeUp className="vc-services-cta">
            <a href="#contact" className="vc-btn vc-btn--accent">
              Get A Free Quote <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* -- PORTFOLIO -- */}
      <section className="vc-section vc-section--centered" id="portfolio" aria-labelledby="vc-portfolio-heading">
        <div className="vc-container">
          <FadeUp>
            <NeonText className="vc-section-label">Selected Work</NeonText>
            <h2 id="vc-portfolio-heading" className="vc-section-title">Project Gallery</h2>
            <p className="vc-section-subtitle">Custom LED signs, digital displays, channel letters, and monument signs — manufactured and installed by ProVizion LED.</p>
          </FadeUp>

          <StaggerWrap className="vc-portfolio-grid">
            {portfolio.map((item, i) => (
              <StaggerChild key={item.title} className={`vc-portfolio-item ${i === 0 ? 'vc-portfolio-item--large' : ''}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="vc-portfolio-item__img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="vc-portfolio-item__overlay">
                  <span className="vc-portfolio-item__tag">{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* -- TESTIMONIALS -- */}
      <section className="vc-section vc-section--alt vc-section--centered" id="testimonials" aria-labelledby="vc-test-heading" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingParticles count={20} />
        <div className="vc-container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <NeonText className="vc-section-label">Client Testimonials</NeonText>
            <h2 id="vc-test-heading" className="vc-section-title">Trusted by Industry Leaders</h2>
          </FadeUp>

          <StaggerWrap className="vc-testimonials-grid">
            {testimonials.map((t) => (
              <StaggerChild key={t.name} className="vc-testimonial-card">
                <div className="vc-testimonial-card__stars">
                  {[...Array(t.rating)].map((_, i) => <HiStar key={i} />)}
                </div>
                <blockquote>{t.text}</blockquote>
                <div className="vc-testimonial-card__author">
                  <div className="vc-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.business}</span>
                  </div>
                </div>
                <span className="vc-testimonial-card__badge">Verified Google Review</span>
              </StaggerChild>
            ))}
          </StaggerWrap>

          <FadeUp className="vc-testimonials-cta">
            <a href="#contact" className="vc-btn vc-btn--accent">
              Start Your Project <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      <ScanLine />

      {/* -- FINAL CTA -- */}
      <section className="vc-section vc-section--centered" aria-labelledby="vc-final-cta-heading">
        <div className="vc-container">
          <FadeUp>
            <NeonText className="vc-section-label">Get Started</NeonText>
            <h2 id="vc-final-cta-heading" className="vc-section-title">Looking for an LED Sign Company Near Me in Charlotte, NC?</h2>
            <div className="vc-content-block">
              <p>
                Whether you need custom LED signs, digital sign displays, illuminated channel letters, or electronic message centers — ProVizion LED is your local sign manufacturer in Charlotte, North Carolina. We handle everything from sign design and fabrication to professional installation and ongoing maintenance.
              </p>
              <p>
                Get a free, same-day quote on LED signs, monument signs, digital displays, and more. Call us today or fill out our contact form to speak with an LED signage expert.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>


    </>
  );
}
