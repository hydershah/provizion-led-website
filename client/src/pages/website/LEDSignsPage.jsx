import {
  HiArrowRight,
  HiPhone,
  HiLightBulb,
  HiCog,
  HiGlobe,
  HiDesktopComputer,
  HiAnnotation,
  HiViewGrid,
  HiSpeakerphone,
  HiCalendar,
} from 'react-icons/hi';
import SEO from '../../components/SEO';
import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import useSanityQuery from '../../hooks/useSanityQuery';
import { pageBySlugQuery } from '../../lib/queries';
import { urlFor } from '../../lib/sanity';
import { getIcon } from '../../lib/iconMap';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQSection from '../../components/FAQSection';
import RelatedServices from '../../components/RelatedServices';
import { getServiceSchema } from '../../utils/schemas';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import { trackPhoneClick } from '../../utils/analytics';
import './shared.css';

export default function LEDSignsPage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();
  const { data: page } = useSanityQuery(pageBySlugQuery, { slug: 'led-signs' }, null);
  const logoSrc = COMPANY.logo?.asset ? urlFor(COMPANY.logo).width(400).url() : (COMPANY.logo || '/images/provizion-logo-white.webp');

  const serviceSchema = getServiceSchema(
    'Custom LED Signs & Displays',
    'Custom LED signs built in Charlotte, NC. Energy-efficient outdoor LED signage, full-color LED displays & programmable LED signs.',
    '/led-signs'
  );

  const faqs = [
    {
      question: 'How much do custom LED signs cost?',
      answer: 'Custom LED sign costs vary based on size, type, and features. Small LED channel letters start around $2,000\u2013$5,000, while large full-color LED displays can range from $10,000 to $100,000+. ProVizion LED provides free, detailed quotes tailored to your specific requirements. We work with businesses of all sizes across Charlotte, NC and North Carolina to find solutions that fit their budget.',
    },
    {
      question: 'How long do LED signs last?',
      answer: 'LED signs typically last 50,000 to 100,000 hours \u2014 that\'s 8 to 15+ years of continuous operation. LED technology is significantly more durable than traditional neon or fluorescent signage. Our LED signs use premium components with advanced heat management to ensure maximum lifespan and consistent brightness throughout their life.',
    },
    {
      question: 'Do I need a permit for an LED sign in Charlotte, NC?',
      answer: 'Yes, most LED signs require permits in Charlotte and across North Carolina. Regulations cover sign size, placement, brightness, and animation. ProVizion LED handles the entire permitting process for you \u2014 from site surveys and engineering drawings to city submissions and inspections. We know Charlotte\'s sign codes inside and out.',
    },
    {
      question: 'What\'s the difference between LED and neon signs?',
      answer: 'LED signs are more energy-efficient (using 50-75% less power), last 5-10x longer, offer full-color programmable content, and require virtually no maintenance. Neon signs provide a classic warm glow and retro aesthetic but are fragile, expensive to repair, and limited to static designs. For most businesses, LED is the superior long-term investment.',
    },
  ];

  return (
    <>
      <SEO
        title="LED Signs & Displays"
        description="Custom LED signs built in Charlotte, NC. Energy-efficient outdoor LED signage, full-color LED displays & programmable LED signs. In-house manufacturing & installation."
        path="/led-signs"
      />

      {/* ── Page Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img src="/images/electronic-signs-1.webp" alt="LED Signs and Displays" loading="eager" decoding="async" />
          <div className="vc-page-hero__overlay" />
        </div>
        <div className="vc-page-hero__content">
          <FadeUp>
            <span className="vc-page-hero__label">LED Signage</span>
            <h1 className="vc-page-hero__title">LED Signs &amp; Displays</h1>
            <div className="vc-hero__services-row">
              <span>Design</span>
              <span>Production</span>
              <span>Installation</span>
            </div>
            <div className="vc-page-hero__actions">
              <a href="/contact-us" className="vc-btn vc-btn--accent">Get Free Quote <HiArrowRight /></a>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--outline" style={{ borderColor: '#fff', color: '#fff' }} onClick={() => trackPhoneClick('led-signs-hero')}>
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'LED Signs' }]} />
      <SchemaMarkup schema={serviceSchema} />

      {/* ── Intro: LED Signs & Displays ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Overview</span>
              <h2 className="vc-section-title">LED Signs &amp; Displays</h2>
              <p>
                In today&apos;s fast-paced digital age, LED signs and displays have emerged as the front-runners in the realm of visual communication. Their vibrant and dynamic presentations capture attention, leaving a lasting impression on viewers.
              </p>
              <p>
                LED technology not only brings messages to life but also infuses a modern and sophisticated touch into any setting. Whether it&apos;s a bustling urban landscape or a peaceful indoor space, LED signage offers limitless possibilities for brands to engage, inform, and entertain their audiences.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm" onClick={() => trackPhoneClick('led-signs-intro')}>
                <HiPhone /> Get A Free Quote
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/showcase/outdoor-digital-billboard.webp" alt="LED sign display" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Why LED Signage ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Benefits</span>
            <h2 className="vc-section-title">Why Choose LED Signage?</h2>
          </FadeUp>

          <StaggerWrap className="vc-features-grid">
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiLightBulb /></div>
                <h3>Dynamic &amp; Versatile</h3>
                <p>
                  With programmable LED signs, brands can change messages on the fly, catering to different audiences or times of the day. Whether it&apos;s a high-brightness LED sign flashing a store&apos;s latest offer or interactive LED displays engaging users in real time, the dynamic nature of LED technology is unbeatable.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiCog /></div>
                <h3>Energy-Efficient</h3>
                <p>
                  One of the strongest attributes of LED sign technology is its energy efficiency. LED display systems consume significantly less power than traditional lighting solutions, making them both environmentally friendly and cost-effective.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiGlobe /></div>
                <h3>Indoor &amp; Outdoor Brilliance</h3>
                <p>
                  Whether you&apos;re looking for outdoor LED signs to withstand the elements or sleek indoor LED signs for a corporate setting, LED technology delivers vibrant clarity in all environments.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>

          <FadeUp className="vc-phone-cta">
            <p>Call ProVizion LED at <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick('led-signs-phone-cta')}>{COMPANY.phone}</a> For A Free Quote With An LED Signs Expert!</p>
            <a href="/contact-us" className="vc-btn vc-btn--accent">Get A Free Quote <HiArrowRight /></a>
          </FadeUp>
        </div>
      </section>

      {/* ── Exploring LED Displays ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Solutions</span>
            <h2 className="vc-section-title">Exploring the Expansive World of LED Displays</h2>
            <div className="vc-content-block">
              <p>
                From LED screen displays that transform entire building facades into digital canvases, to LED video walls that offer an immersive cinematic experience, the applications of LED are vast and varied:
              </p>
            </div>
          </FadeUp>

          <StaggerWrap className="vc-products-grid">
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiDesktopComputer /></div>
                <h4>LED Video Displays &amp; Walls</h4>
                <p>Perfect for events, concerts, and corporate presentations, these systems provide high-definition visuals that can make any content come alive.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiAnnotation /></div>
                <h4>LED Message Centers &amp; Boards</h4>
                <p>Ideal for businesses looking to deliver real-time updates, promotions, or general information to their clientele.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiViewGrid /></div>
                <h4>LED Screen Panels &amp; Display Boards</h4>
                <p>These versatile pieces can be assembled in unique configurations, providing custom LED signs tailored to specific spaces and needs.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiSpeakerphone /></div>
                <h4>LED Advertising &amp; Billboard Displays</h4>
                <p>Elevate brand messages with larger-than-life displays that capture attention from miles away.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiCalendar /></div>
                <h4>LED Sign Rentals</h4>
                <p>Perfect for one-off events or businesses that require LED solutions temporarily.</p>
              </div>
            </StaggerChild>
          </StaggerWrap>

          <FadeUp className="vc-content-block" style={{ marginTop: '40px' }}>
            <p>
              As LED technology continues to advance, we can anticipate even more exciting developments and applications in the future, enhancing how businesses engage with their audiences and leaving a lasting impact in the world of visual communication. Whether it&apos;s through dynamic advertising campaigns, interactive installations, or immersive storytelling, LED displays are at the forefront of transforming how we connect, inform, and entertain.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Why Partner with ProVizion LED ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp delay={0.1} className="vc-split-layout__img">
              <img src="/images/showcase/outdoor-led-sports-display.webp" alt="Outdoor LED sign display installation" loading="lazy" decoding="async" />
            </FadeUp>
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Why Us</span>
              <h2 className="vc-section-title">Why Partner with ProVizion LED?</h2>
              <p>
                ProVizion LED stands apart as a true LED sign specialist. Our solutions range from affordable LED signs for small businesses to intricate display systems for large enterprises.
              </p>
              <p>
                With years of industry experience, our team remains at the forefront of LED technology trends. When you partner with us, you&apos;re getting a comprehensive signage solution tailored to your unique needs, backed by our unwavering commitment to excellence.
              </p>
              <a href="/contact-us" className="vc-btn vc-btn--accent vc-btn--sm">Get A Free Quote <HiArrowRight /></a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Elevate Your Brand ── */}
      <section className="vc-section vc-section--centered">
        <div className="vc-container">
          <FadeUp>
            <img
              src={logoSrc}
              alt="ProVizion LED Logo"
              width="200"
              height="50"
              loading="lazy"
              style={{ marginBottom: '24px' }}
            />
            <h2 className="vc-section-title">Elevate Your Brand with ProVizion LED</h2>
            <div className="vc-content-block" style={{ margin: '0 auto' }}>
              <p>
                Ready to explore the world of digital signs, electronic displays, and more? Whether you&apos;re considering LED display screens for an event or LED message centers for your storefront, ProVizion LED is your trusted guide.
              </p>
              <p>
                Discover the brilliance of LED with a team that&apos;s as passionate about your brand&apos;s success as you are. Our expert consultants are ready to discuss your specific goals and requirements, offering tailored solutions to meet your unique needs.
              </p>
              <p>
                Don&apos;t miss the opportunity to elevate your brand with the power of LED technology — contact ProVizion LED now for a brighter future!
              </p>
            </div>
            <a href="/contact-us" className="vc-btn vc-btn--accent" style={{ marginTop: '16px' }}>
              Free LED Sign Consultation <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── Industry Applications ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Applications</span>
            <h2 className="vc-section-title">LED Signs for Every Industry</h2>
          </FadeUp>
          <StaggerWrap className="vc-features-grid">
            <StaggerChild>
              <div className="vc-feature-card">
                <h3>Restaurants &amp; Retail</h3>
                <p>Drive foot traffic with eye-catching LED storefront signs and digital menu boards. Programmable LED signs let you promote daily specials, seasonal offers, and happy hour deals in vibrant full color — attracting customers from the road and sidewalk.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <h3>Churches &amp; Schools</h3>
                <p>Keep your congregation and community informed with LED message boards displaying service times, event announcements, and inspirational messages. Our outdoor LED signs for churches and schools are designed for easy remote updates and maximum visibility.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <h3>Auto Dealerships</h3>
                <p>Large-format LED displays and digital billboards showcase inventory, promotions, and financing offers to passing traffic. Our high-brightness LED signs are visible day and night, helping dealerships across Charlotte and North Carolina stand out on busy corridors.</p>
              </div>
            </StaggerChild>
          </StaggerWrap>
        </div>
      </section>

      {/* ── LED vs Neon Comparison ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Comparison</span>
            <h2 className="vc-section-title">LED Signs vs. Neon Signs</h2>
            <div className="vc-content-block">
              <p>Choosing between LED and neon? Here&apos;s how they compare for businesses in Charlotte, NC and beyond:</p>
              <table className="vc-comparison-table">
                <thead>
                  <tr><th>Feature</th><th>LED Signs</th><th>Neon Signs</th></tr>
                </thead>
                <tbody>
                  <tr><td>Lifespan</td><td>50,000–100,000 hours</td><td>8,000–15,000 hours</td></tr>
                  <tr><td>Energy Use</td><td>Low (50-75% less)</td><td>High</td></tr>
                  <tr><td>Content</td><td>Programmable, full-color</td><td>Static, limited colors</td></tr>
                  <tr><td>Maintenance</td><td>Minimal</td><td>Frequent (gas refill, tube replacement)</td></tr>
                  <tr><td>Durability</td><td>Impact-resistant, weatherproof</td><td>Fragile glass tubes</td></tr>
                  <tr><td>Cost (Long-term)</td><td>Lower total cost of ownership</td><td>Higher ongoing costs</td></tr>
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Process</span>
              <h2 className="vc-section-title">From Design to Installation</h2>
              <p>Every ProVizion LED sign begins with a free consultation where we assess your location, goals, and budget. Our designers create custom mockups showing exactly how your LED sign will look installed.</p>
              <p>Once approved, our in-house fabrication team builds your sign using premium LED components and commercial-grade housings. Professional installation by our licensed crews includes all electrical work, permitting, and final adjustments — typically completed within 4–8 weeks from approval.</p>
              <p>After installation, we offer ongoing maintenance plans to keep your LED sign performing at peak brightness for years to come. Serving businesses across Charlotte, Raleigh, Durham, Greensboro, and all of North Carolina.</p>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/showcase/school-monument-sign.webp" alt="School LED monument sign by ProVizion" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="LED Signs — Frequently Asked Questions" />
      <RelatedServices currentPath="/led-signs" />

    </>
  );
}
