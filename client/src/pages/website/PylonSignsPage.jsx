import {
  HiArrowRight,
  HiPhone,
  HiEye,
  HiLocationMarker,
  HiLightBulb,
  HiOfficeBuilding,
  HiViewGrid,
  HiLightningBolt,
  HiCube,
  HiColorSwatch,
  HiClipboardCheck,
  HiShieldCheck,
  HiSupport,
} from 'react-icons/hi';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQSection from '../../components/FAQSection';
import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import { urlFor } from '../../lib/sanity';
import { getServiceSchema } from '../../utils/schemas';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import { trackPhoneClick } from '../../utils/analytics';
import './shared.css';

const PYLON_SIGN_FAQS = [
  {
    question: 'How tall can a pylon sign be?',
    answer:
      'Pylon signs typically range from 20 to 80 feet in height, though the maximum allowable height depends on local zoning ordinances and sign codes. In Charlotte, NC, regulations vary by district and road classification, so the permitted height for your location may differ from a neighboring property. ProVizion LED handles all research, variance requests, and permitting on your behalf, ensuring your pylon sign reaches maximum allowable height while remaining fully compliant with local codes.',
  },
  {
    question: 'How much does a pylon sign cost?',
    answer:
      'Pylon sign pricing ranges from approximately $15,000 for a basic single-tenant illuminated sign to $200,000 or more for tall, multi-tenant structures with integrated LED message centers. Key cost factors include overall height, face dimensions, number of tenant panels, illumination type, foundation requirements, and engineering complexity. We provide detailed, itemized estimates after conducting a site survey so there are no surprises during the fabrication and installation process.',
  },
  {
    question: 'Do pylon signs need permits in Charlotte, NC?',
    answer:
      'Yes. All freestanding signs in Charlotte require permits issued by the city planning and zoning department. The permit process involves site surveys, structural engineering documentation with a licensed engineer stamp, sign area calculations, setback verification, and compliance review against the Unified Development Ordinance. ProVizion LED manages the entire permitting workflow from application to final inspection, saving you weeks of paperwork and ensuring approval on the first submission whenever possible.',
  },
];

export default function PylonSignsPage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();
  const logoSrc = COMPANY.logo?.asset ? urlFor(COMPANY.logo).width(400).url() : (COMPANY.logo || '/images/provizion-logo-white.webp');

  const serviceSchema = getServiceSchema(
    'Pylon Signs & Pole Signs',
    'Custom pylon signs and pole signs for businesses in Charlotte, NC. Highway-visible, illuminated pylon sign manufacturing and installation.',
    '/pylon-signs'
  );

  return (
    <>
      <SEO
        title="Pylon Signs & Pole Signs"
        description="Custom pylon signs & pole signs for businesses in Charlotte, NC. Highway-visible, illuminated pylon sign manufacturing & installation. Free estimates."
        path="/pylon-signs"
        keywords="pylon signs, pole signs, highway signs, pylon sign company, Charlotte NC"
      />
      <SchemaMarkup schema={serviceSchema} />

      {/* ── Page Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img src="/images/showcase/carwash-pylon-sign.jpg" alt="Pylon Signs and Pole Signs" loading="eager" decoding="async" />
          <div className="vc-page-hero__overlay" />
        </div>
        <div className="vc-page-hero__content">
          <FadeUp>
            <span className="vc-page-hero__label">Pylon Signs</span>
            <h1 className="vc-page-hero__title">Pylon Signs &amp; Pole Signs</h1>
            <div className="vc-hero__services-row">
              <span>Design</span>
              <span>Production</span>
              <span>Install</span>
            </div>
            <div className="vc-page-hero__actions">
              <a href="/contact-us" className="vc-btn vc-btn--accent">Get Free Quote <HiArrowRight /></a>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--outline" style={{ borderColor: '#fff', color: '#fff' }} onClick={() => trackPhoneClick('pylon-signs-hero')}>
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <Breadcrumbs items={[
        { label: 'Home', path: '/' },
        { label: 'Pylon Signs' },
      ]} />

      {/* ── Overview: What Are Pylon Signs? ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Overview</span>
              <h2 className="vc-section-title">Commanding Attention from the Road</h2>
              <p>
                A pylon sign is a tall, freestanding structure mounted on one or more poles that elevates your business identity high above the surrounding landscape. Unlike monument signs that sit close to the ground, pylon signs are engineered for maximum height and visibility, making them the preferred choice for businesses located along highways, busy arterials, and commercial corridors where catching the eye of passing motorists is essential to driving foot traffic.
              </p>
              <p>
                Shopping centers, gas stations, hotels, quick-service restaurants, auto dealerships, and multi-tenant retail plazas throughout Charlotte, NC rely on pylon signs to announce their presence from a quarter mile or more away. A well-designed pylon sign acts as both a wayfinding landmark and a powerful branding tool, guiding customers directly to your door while reinforcing brand recognition with every passing vehicle.
              </p>
              <p>
                ProVizion LED designs, engineers, fabricates, and installs custom pylon signs built to meet the specific demands of your location, brand guidelines, and local zoning requirements. From the structural foundation buried beneath the surface to the illuminated cabinet faces towering overhead, every element is crafted for durability, visibility, and long-term performance.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm" onClick={() => trackPhoneClick('pylon-signs-intro')}>
                <HiPhone /> Get A Free Quote
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/showcase/carwash-pylon-day.jpg" alt="Commercial pylon sign with LED display" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Benefits of Pylon Signs ── */}
      <section className="vc-section vc-section--alt vc-section--centered">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Benefits</span>
            <h2 className="vc-section-title">Why Pylon Signs Work for Your Business</h2>
            <p className="vc-section-subtitle">
              Pylon signs combine towering height, bold graphics, and illumination options to deliver unmatched roadside presence for businesses of every size.
            </p>
          </FadeUp>

          <StaggerWrap className="vc-features-grid">
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiEye /></div>
                <h3>Maximum Visibility</h3>
                <p>
                  Towering 20 to 80 feet above grade, pylon signs rise above tree lines, adjacent buildings, and roadside clutter to capture the attention of drivers and passengers from hundreds of yards away. Height is the single most effective way to ensure your sign is seen before a motorist passes your entrance, and pylon signs deliver that advantage better than any other sign type. Combined with large-format illuminated cabinet faces, your branding remains visible around the clock.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiLocationMarker /></div>
                <h3>Wayfinding &amp; Navigation</h3>
                <p>
                  Pylon signs function as visual landmarks that guide customers to your location from a distance, reducing missed turns and frustration. For multi-tenant properties like shopping centers and office parks, a well-positioned pylon sign with clear tenant panels helps visitors identify which businesses are on-site long before they reach the parking lot. This wayfinding benefit translates directly into higher visit rates and improved customer satisfaction.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiLightBulb /></div>
                <h3>Illuminated Options</h3>
                <p>
                  Modern pylon signs offer a range of illumination choices, from internal LED-lit cabinet faces that glow evenly at night to externally lit structures with spotlights that highlight dimensional lettering and architectural details. For businesses that want dynamic messaging capability, integrated LED message centers can be built directly into the pylon structure, enabling real-time promotions, time-and-temperature displays, and rotating tenant advertisements that keep content fresh 24 hours a day, 7 days a week.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>

          <FadeUp className="vc-phone-cta">
            <p>Call ProVizion LED at <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick('pylon-signs-phone-cta')}>{COMPANY.phone}</a> for a free pylon sign consultation and site assessment!</p>
            <a href="/contact-us" className="vc-btn vc-btn--accent">Get A Free Quote <HiArrowRight /></a>
          </FadeUp>
        </div>
      </section>

      {/* ── Pylon Sign Solutions ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Solutions</span>
            <h2 className="vc-section-title">Pylon Sign Types for Every Application</h2>
            <p className="vc-section-subtitle">Whether you operate a single storefront or manage a multi-tenant commercial property, we build pylon signs tailored to your specific requirements.</p>
          </FadeUp>

          <StaggerWrap className="vc-products-grid">
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiOfficeBuilding /></div>
                <h4>Single-Tenant Pylon Signs</h4>
                <p>
                  Dedicated exclusively to one business, single-tenant pylon signs deliver maximum brand impact with a clean, uncluttered design. They are ideal for standalone restaurants, hotels, gas stations, and auto dealerships that need prominent roadside identification. Custom shapes, dimensional letters, and backlit graphics ensure your sign reflects your brand identity with precision and professionalism.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiViewGrid /></div>
                <h4>Multi-Tenant Pylon Signs</h4>
                <p>
                  Shared signage structures designed for shopping centers, strip malls, and office complexes that house multiple businesses. Interchangeable tenant panels make it easy to update branding as tenants change, and tiered layouts allow anchor tenants to occupy larger, more prominent positions. Multi-tenant pylons maximize property value by ensuring every business on-site benefits from highway visibility.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiLightningBolt /></div>
                <h4>Digital Pylon Signs</h4>
                <p>
                  Combining the towering presence of a traditional pylon with the dynamic capabilities of an LED message center, digital pylon signs display rotating promotions, real-time pricing, event announcements, and community messages. Content is managed remotely through cloud-based software, giving you instant control over what thousands of daily commuters see on your sign without ever leaving your desk.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiCube /></div>
                <h4>Monument-Pylon Hybrids</h4>
                <p>
                  For properties that want elevated visibility with an architectural aesthetic, monument-pylon hybrids feature a decorative masonry, stone, or metal base that transitions into a taller pole-mounted cabinet. These structures satisfy zoning requirements in areas where traditional pylons are restricted while still achieving greater height than standard monument signs. They are a popular choice for medical campuses, corporate parks, and upscale retail developments.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>
        </div>
      </section>

      {/* ── Why ProVizion LED ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Why Us</span>
              <h2 className="vc-section-title">Your Charlotte Pylon Sign Experts</h2>
              <p>
                Pylon signs involve far more complexity than most people realize. Beneath the visible cabinet and graphics lies a carefully engineered steel structure, a reinforced concrete foundation, and electrical systems that must comply with building codes, wind load requirements, and utility regulations. Choosing a partner with deep expertise in structural engineering, fabrication, and permitting is critical to a successful installation.
              </p>
              <p>
                ProVizion LED manages every phase of the pylon sign process from concept to completion. We begin with a thorough site survey to assess soil conditions, setback requirements, utility locations, and zoning restrictions. Our in-house designers create detailed renderings that show exactly how the finished sign will look from key vantage points along the road. Licensed structural engineers produce stamped drawings, and our project managers coordinate foundation work, fabrication, electrical, and final installation on a clear timeline.
              </p>
              <p>
                We also handle all permit applications, variance requests, and city inspections so you never have to navigate municipal bureaucracy on your own. For businesses that want LED integration, we build message centers directly into the pylon structure with seamless cabinetry and weatherproof wiring. And because we are based in Charlotte, we are always nearby for maintenance, panel replacements, and future upgrades whenever you need us.
              </p>
              <a href="/contact-us" className="vc-btn vc-btn--accent vc-btn--sm">Start Your Project <HiArrowRight /></a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/showcase/carwash-pylon-sign.jpg" alt="Commercial pylon sign with LED display" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <FAQSection faqs={PYLON_SIGN_FAQS} title="Pylon Sign FAQs" />

      {/* ── Final CTA ── */}
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
            <h2 className="vc-section-title">Free Pylon Sign Consultation</h2>
            <div className="vc-content-block" style={{ margin: '0 auto' }}>
              <p>
                Whether you need a towering highway pylon for a new development or want to replace an aging pole sign with a modern illuminated structure, ProVizion LED is ready to help. Our team will visit your site, evaluate visibility angles, review zoning requirements, and present a comprehensive proposal with design renderings, engineering specifications, and transparent pricing.
              </p>
              <p>
                Get in touch today to schedule your free on-site assessment and take the first step toward a pylon sign that puts your business on the map for every driver on the road.
              </p>
            </div>
            <a href="/contact-us" className="vc-btn vc-btn--accent" style={{ marginTop: '16px' }}>
              Free Pylon Sign Consultation <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

    </>
  );
}
