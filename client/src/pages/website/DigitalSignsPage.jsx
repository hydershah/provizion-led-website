import {
  HiArrowRight,
  HiPhone,
  HiRefresh,
  HiCursorClick,
  HiTemplate,
  HiOfficeBuilding,
  HiLightningBolt,
  HiSpeakerphone,
  HiSun,
  HiCode,
  HiColorSwatch,
  HiClipboardCheck,
  HiChip,
  HiShieldCheck,
} from 'react-icons/hi';
import SEO from '../../components/SEO';
import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import useSanityQuery from '../../hooks/useSanityQuery';
import { pageBySlugQuery } from '../../lib/queries';
import { urlFor } from '../../lib/sanity';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQSection from '../../components/FAQSection';
import { getServiceSchema } from '../../utils/schemas';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import { trackPhoneClick } from '../../utils/analytics';
import './shared.css';

export default function DigitalSignsPage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();
  const { data: page } = useSanityQuery(pageBySlugQuery, { slug: 'digital-signs' }, null);
  const logoSrc = COMPANY.logo?.asset ? urlFor(COMPANY.logo).width(400).url() : (COMPANY.logo || '/images/provizion-logo-white.webp');

  const serviceSchema = getServiceSchema(
    'Digital Signs & Displays',
    'Digital sign displays & programmable digital signage for businesses in Charlotte, NC.',
    '/digital-signs'
  );

  const faqs = [
    {
      question: 'Can I update my digital sign remotely?',
      answer: 'Yes! All ProVizion LED digital signs come with cloud-based content management software. Update your messages, images, and videos from any computer, tablet, or smartphone \u2014 anywhere with an internet connection. Schedule content changes in advance or push updates instantly.',
    },
    {
      question: "What's the difference between LED and LCD digital signs?",
      answer: 'LED digital signs use light-emitting diodes for bright, seamless displays visible in direct sunlight \u2014 ideal for outdoor use. LCD signs use liquid crystal panels (like TVs) for sharp close-up viewing \u2014 better for indoor environments. LED signs are more durable and weather-resistant, while LCD signs offer higher pixel density at shorter distances.',
    },
    {
      question: 'How much does a digital sign display cost?',
      answer: 'Digital sign costs range from $3,000 for a basic indoor display to $50,000+ for large outdoor LED digital signs. Factors include screen size, resolution (pixel pitch), indoor vs. outdoor rating, and content management features. ProVizion LED provides free consultations and detailed quotes for businesses across Charlotte and North Carolina.',
    },
    {
      question: 'Are digital signs weatherproof?',
      answer: 'Our outdoor digital signs are built to withstand rain, heat, cold, and UV exposure with IP65-rated enclosures. Operating temperature ranges from -22\u00B0F to 122\u00B0F. Each outdoor digital display includes ventilation/cooling systems, anti-glare coatings, and corrosion-resistant housings designed for North Carolina\'s variable climate.',
    },
  ];

  return (
    <>
      <SEO
        title="Digital Signs and Displays"
        description="Digital sign displays & programmable digital signage for businesses in Charlotte, NC. Indoor & outdoor digital displays with remote content management. Free quotes."
        path="/digital-signs"
      />

      {/* ── Page Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img src="/images/showcase/building-digital-display.jpg" alt="Digital Signs and Displays" loading="eager" decoding="async" />
          <div className="vc-page-hero__overlay" />
        </div>
        <div className="vc-page-hero__content">
          <FadeUp>
            <span className="vc-page-hero__label">Digital Signage</span>
            <h1 className="vc-page-hero__title">Digital Signs &amp; Displays</h1>
            <div className="vc-hero__services-row">
              <span>Design</span>
              <span>Production</span>
              <span>Install</span>
            </div>
            <div className="vc-page-hero__actions">
              <a href="#contact" className="vc-btn vc-btn--accent">Get Free Quote <HiArrowRight /></a>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--outline" style={{ borderColor: '#fff', color: '#fff' }} onClick={() => trackPhoneClick('digital-signs-hero')}>
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Digital Signs' }]} />
      <SchemaMarkup schema={serviceSchema} />

      {/* ── Intro: Digital Signs and Displays ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Overview</span>
              <h2 className="vc-section-title">Digital Signs and Displays</h2>
              <p>
                Modern digital signs and displays have revolutionized the way businesses and public spaces connect with their audiences. From airports guiding travelers with real-time updates to restaurants showcasing dynamic menus, digital signage is indispensable across industries.
              </p>
              <p>
                Corporate environments, museums, hospitals, and retail spaces all benefit from interactive digital displays that inform, engage, and inspire — shaping the future of visual communication.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm" onClick={() => trackPhoneClick('digital-signs-intro')}>
                <HiPhone /> Get A Free Quote
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/electronic-digital-message-displays-signs-3.jpg" alt="Digital sign display" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Rise of Digital Signage ── */}
      <section className="vc-section vc-section--alt vc-section--centered">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">The Future</span>
            <h2 className="vc-section-title">The Rise of Digital Signage</h2>
            <p className="vc-section-subtitle">Digital signs have redefined the advertising landscape. Unlike static signs, digital displays allow real-time updates, interactivity, and targeted messaging — delivering higher ROI and increased brand visibility.</p>
          </FadeUp>

          <StaggerWrap className="vc-features-grid">
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiRefresh /></div>
                <h3>Dynamic Content</h3>
                <p>
                  Digital signage allows for real-time updates, making it easy to promote events, adjust menus, or share news quickly and effectively.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiCursorClick /></div>
                <h3>Interactive Experiences</h3>
                <p>
                  Interactive displays engage users, offering personalized interactions such as browsing product catalogs or exploring maps. This enhances engagement and fosters brand loyalty.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiTemplate /></div>
                <h3>Versatile Applications</h3>
                <p>
                  Digital displays are incredibly versatile, finding use in various industries and settings. From stunning LED video walls at events to promotional screens in retail, they adapt to diverse needs.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>

          <FadeUp className="vc-phone-cta">
            <p>Call ProVizion LED at <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick('digital-signs-phone-cta')}>{COMPANY.phone}</a> For A Free Quote With A Custom Digital Signage Expert!</p>
            <a href="#contact" className="vc-btn vc-btn--accent">Get A Free Quote <HiArrowRight /></a>
          </FadeUp>
        </div>
      </section>

      {/* ── Venturing Deeper into Digital Signage ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Solutions</span>
            <h2 className="vc-section-title">Venturing Deeper into the Digital Signage World</h2>
            <p className="vc-section-subtitle">The realm of digital signs and displays is vast, and here are some facets you might consider:</p>
          </FadeUp>

          <StaggerWrap className="vc-products-grid">
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiOfficeBuilding /></div>
                <h4>Commercial Digital Signage</h4>
                <p>Ideal for businesses wanting to create a visual impact, be it in retail, hospitality, or corporate sectors.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiLightningBolt /></div>
                <h4>LED Signs &amp; Electronic Signage</h4>
                <p>A match made in heaven, combining the brilliance of LED with the versatility of digital technology.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiSpeakerphone /></div>
                <h4>Digital Advertising Boards &amp; Screens</h4>
                <p>Transform your advertising strategy, making it more engaging and visually appealing.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiSun /></div>
                <h4>Indoor &amp; Outdoor Digital Signs</h4>
                <p>Whether you&apos;re looking to dazzle inside a mall or stand out in the open, there&apos;s a solution tailored for every need.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiCode /></div>
                <h4>Digital Signage Software &amp; CMS</h4>
                <p>Managing content for digital signs has never been easier, thanks to advanced digital signage software and content management systems.</p>
              </div>
            </StaggerChild>
          </StaggerWrap>
        </div>
      </section>

      {/* ── Why ProVizion LED ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Why Us</span>
            <h2 className="vc-section-title">Why ProVizion LED Should Be Your Go-To for Digital Signage Solutions</h2>
            <div className="vc-content-block">
              <p>
                You might wonder, &ldquo;With so many options for digital signage &lsquo;near me signs&rsquo;, why choose ProVizion LED?&rdquo; Here&apos;s why:
              </p>
            </div>
          </FadeUp>

          <StaggerWrap className="vc-features-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiColorSwatch /></div>
                <h3>Custom Digital Signs</h3>
                <p>We believe every brand has a unique story, and we craft bespoke digital displays to tell yours.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiClipboardCheck /></div>
                <h3>End-to-End Digital Signage Services</h3>
                <p>From the initial concept to installation, we handle everything, ensuring your signage is impeccable.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiChip /></div>
                <h3>Latest in Digital Display Solutions</h3>
                <p>Our team stays updated with industry trends, ensuring you get the most modern solutions.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiShieldCheck /></div>
                <h3>Reliability</h3>
                <p>Years of experience coupled with cutting-edge technology make us a trusted partner for all your digital signage needs.</p>
              </div>
            </StaggerChild>
          </StaggerWrap>
        </div>
      </section>

      {/* ── Your Digital Signage Journey ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Your Journey</span>
              <h2 className="vc-section-title">Your Digital Signage Journey Begins Here</h2>
              <p>
                Navigating the world of digital signs can seem daunting, but with ProVizion LED, it becomes an exciting journey. We&apos;re your partners in crafting digital stories that resonate.
              </p>
              <p>
                With our expertise and commitment to innovation, we ensure your digital signage strategy evolves with the times. Your success is our goal.
              </p>
              <a href="#contact" className="vc-btn vc-btn--accent vc-btn--sm">Start Your Journey <HiArrowRight /></a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/showcase/highrise-digital-display.jpg" alt="High-rise building digital LED display" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Free Quote CTA ── */}
      <section className="vc-section vc-section--alt vc-section--centered">
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
            <h2 className="vc-section-title">Free Digital Sign Consultation</h2>
            <div className="vc-content-block" style={{ margin: '0 auto' }}>
              <p>
                Ready to transform the way your brand communicates? Our team of experts will work closely with you to understand your unique needs and tailor a digital signage solution that exceeds your expectations.
              </p>
              <p>
                Contact us today and take the first step toward a brighter, more engaging future!
              </p>
            </div>
            <a href="#contact" className="vc-btn vc-btn--accent" style={{ marginTop: '16px' }}>
              Free Digital Sign Consultation <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── Industry Applications ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Industries</span>
            <h2 className="vc-section-title">Digital Signage Solutions by Industry</h2>
          </FadeUp>
          <StaggerWrap className="vc-features-grid">
            <StaggerChild>
              <div className="vc-feature-card">
                <h3>Quick-Service Restaurants</h3>
                <p>Digital menu boards let you update pricing, promotions, and seasonal items instantly. Drive-through digital displays increase order accuracy and speed. Many Charlotte restaurants have seen a 15-30% sales lift on promoted items after switching to digital menus.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <h3>Healthcare &amp; Corporate</h3>
                <p>Digital wayfinding displays guide patients and visitors through complex facilities. Lobby digital signs communicate announcements, directories, and branding. Conference room scheduling displays streamline meeting management across multiple locations.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <h3>Retail &amp; Shopping Centers</h3>
                <p>Promotional digital displays boost in-store engagement and highlight new arrivals. Window-facing digital signs attract passersby even after hours. Multi-tenant shopping centers use digital directories to guide shoppers to individual stores.</p>
              </div>
            </StaggerChild>
          </StaggerWrap>
        </div>
      </section>

      {/* ── Digital Sign ROI ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">ROI</span>
              <h2 className="vc-section-title">The ROI of Digital Signage</h2>
              <p>Digital signs consistently outperform traditional static signage. Studies show digital displays capture 400% more views than static signs and increase brand awareness by up to 47%. For businesses in Charlotte and across North Carolina, digital signage is an investment that pays for itself.</p>
              <p>Beyond advertising, digital signs reduce long-term printing costs. Instead of reprinting banners and posters for every promotion, update your content instantly at zero marginal cost. Businesses with frequent promotions — restaurants, retailers, event venues — typically see full ROI within 12–18 months.</p>
              <p>ProVizion LED helps businesses across Charlotte, Raleigh, and all of North Carolina maximize their digital signage investment with expert design, installation, and ongoing content management support.</p>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/showcase/church-pylon-led.jpg" alt="LED pylon sign for digital messaging" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Digital Signs — Frequently Asked Questions" />

    </>
  );
}
