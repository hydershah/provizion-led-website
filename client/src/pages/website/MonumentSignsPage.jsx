import {
  HiArrowRight,
  HiPhone,
  HiOfficeBuilding,
  HiShieldCheck,
  HiLightBulb,
  HiColorSwatch,
  HiDesktopComputer,
  HiViewGrid,
  HiCog,
  HiClipboardCheck,
} from 'react-icons/hi';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQSection from '../../components/FAQSection';
import RelatedServices from '../../components/RelatedServices';
import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import { urlFor } from '../../lib/sanity';
import { getServiceSchema } from '../../utils/schemas';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import { trackPhoneClick } from '../../utils/analytics';
import './shared.css';

const faqs = [
  {
    question: 'How much does a monument sign cost?',
    answer:
      'Monument sign pricing ranges from $5,000 to $50,000 or more depending on size, materials, and illumination. Basic illuminated monument signs typically start around $5,000 to $10,000 for a standard single-tenant design. LED-integrated monument signs with full-color electronic message centers generally fall between $15,000 and $30,000 or higher. Custom architectural monuments using premium materials like natural stone or brick veneer can push costs further. We provide detailed proposals so you understand exactly what your investment includes.',
  },
  {
    question: 'What materials are used for monument signs?',
    answer:
      'Common monument sign materials include aluminum, natural stone and rock veneer, brick, stucco, high-density urethane (HDU) foam, and concrete. The base and surround are often constructed from masonry or aluminum panels with a faux stone or stucco finish, while the sign face may be illuminated acrylic, routed aluminum, or an integrated LED display. We help you select materials that complement your building architecture, withstand local weather conditions, and align with your budget.',
  },
  {
    question: 'Can you add a digital display to a monument sign?',
    answer:
      'Yes. We integrate full-color LED electronic message centers directly into monument sign structures. These displays allow you to update content remotely for events, promotions, service announcements, and seasonal messaging. Digital displays are especially popular with churches, schools, medical practices, and multi-tenant commercial properties that need to communicate changing information to the public.',
  },
  {
    question: 'Do monument signs need permits?',
    answer:
      'Yes. Monument signs require sign permits in Charlotte and most municipalities throughout North Carolina. Depending on the sign height, square footage, and illumination, you may also need electrical permits and site-plan approvals. Our team manages the entire permitting process from application through final inspection, ensuring your sign meets all local codes and is approved without delays.',
  },
];

export default function MonumentSignsPage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();
  const logoSrc = COMPANY.logo?.asset
    ? urlFor(COMPANY.logo).width(400).url()
    : COMPANY.logo || '/images/provizion-logo-white.webp';

  const serviceSchema = getServiceSchema(
    'Monument Signs',
    'Custom LED monument signs for businesses, churches & schools in Charlotte, NC. Architectural monument sign design, fabrication & installation. Free quotes.',
    '/monument-signs'
  );

  return (
    <>
      <SEO
        title="Monument Signs"
        description="Custom LED monument signs for businesses, churches & schools in Charlotte, NC. Architectural monument sign design, fabrication & installation. Free quotes."
        path="/monument-signs"
        keywords="monument signs, LED monument signs, monument sign company, custom monument signs, Charlotte NC"
      />
      <SchemaMarkup schema={serviceSchema} />

      {/* ── Page Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img
            src="/images/showcase/church-monument-emc.webp"
            alt="Monument Signs"
            loading="eager"
            decoding="async"
          />
          <div className="vc-page-hero__overlay" />
        </div>
        <div className="vc-page-hero__content">
          <FadeUp>
            <span className="vc-page-hero__label">Monument Signs</span>
            <h1 className="vc-page-hero__title">Monument Signs</h1>
            <div className="vc-hero__services-row">
              <span>Design</span>
              <span>Fabrication</span>
              <span>Installation</span>
            </div>
            <div className="vc-page-hero__actions">
              <a href="/contact-us" className="vc-btn vc-btn--accent">
                Get Free Quote <HiArrowRight />
              </a>
              <a
                href={COMPANY.phoneTel}
                className="vc-btn vc-btn--outline"
                style={{ borderColor: '#fff', color: '#fff' }}
                onClick={() => trackPhoneClick('monument-signs-hero')}
              >
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <Breadcrumbs
        items={[
          { label: 'Home', path: '/' },
          { label: 'Monument Signs' },
        ]}
      />

      {/* ── Overview: What Are Monument Signs? ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Overview</span>
              <h2 className="vc-section-title">What Are Monument Signs?</h2>
              <p>
                Monument signs are ground-level, freestanding architectural signs that sit low to the
                landscape and project a stately, permanent presence. Unlike pylon or pole signs that
                tower above the ground, monument signs are designed to integrate with the surrounding
                environment, often incorporating stone, brick, stucco, or other masonry finishes that
                complement the building they serve. The result is a sign that looks like a natural
                extension of the property rather than an afterthought.
              </p>
              <p>
                These versatile structures are found in front of corporate campuses, churches, schools,
                hospitals, homeowners associations, retail centers, and government buildings. In
                Charlotte, NC, monument signs are especially popular among businesses and organizations
                that want to establish a distinguished street-level identity. Whether your property sits
                along a high-traffic corridor or a quiet residential neighborhood, a well-designed
                monument sign communicates credibility, professionalism, and permanence from the moment
                visitors arrive.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm" onClick={() => trackPhoneClick('monument-signs-intro')}>
                <HiPhone /> Get A Free Quote
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img
                src="/images/showcase/school-monument-purple.webp"
                alt="School monument sign with LED display"
                loading="lazy"
                decoding="async"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Benefits of Monument Signs ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Benefits</span>
            <h2 className="vc-section-title">Why Choose a Monument Sign?</h2>
          </FadeUp>

          <StaggerWrap className="vc-features-grid">
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon">
                  <HiOfficeBuilding />
                </div>
                <h3>Architectural Presence</h3>
                <p>
                  Monument signs sit at ground level and integrate seamlessly with your landscape
                  design, creating a cohesive, welcoming entrance. Their low-profile structure blends
                  with flower beds, retaining walls, and walkways, giving your property a polished,
                  campus-like aesthetic that elevated pole signs cannot achieve. Visitors immediately
                  associate the thoughtful design with a well-managed organization.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon">
                  <HiShieldCheck />
                </div>
                <h3>Exceptional Durability</h3>
                <p>
                  Built with robust materials such as stone, brick, aluminum, concrete, and
                  weather-resistant composites, monument signs are engineered to withstand decades of
                  exposure to rain, wind, UV radiation, and temperature swings. The structural integrity
                  of a properly built monument sign means your investment continues to look pristine year
                  after year with only routine cleaning and occasional bulb or module replacements.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon">
                  <HiLightBulb />
                </div>
                <h3>LED Integration</h3>
                <p>
                  Modern monument signs can incorporate full-color LED electronic message centers that
                  allow you to display dynamic content, event schedules, promotional messages, and
                  real-time announcements. With remote management software, you can update your display
                  from any device, giving you unparalleled flexibility to communicate with your audience
                  without printing a single banner or poster.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>

          <FadeUp className="vc-phone-cta">
            <p>
              Call ProVizion LED at <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick('monument-signs-phone-cta')}>{COMPANY.phone}</a> For Your Free
              Consultation With A Monument Sign Expert!
            </p>
            <a href="/contact-us" className="vc-btn vc-btn--accent">
              Get A Free Quote <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── Types of Monument Signs ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Solutions</span>
            <h2 className="vc-section-title">Types of Monument Signs</h2>
            <div className="vc-content-block">
              <p>
                Monument signs come in a range of configurations to match your functional needs, design
                preferences, and budget. Here are the most popular styles we design and fabricate at
                ProVizion LED.
              </p>
            </div>
          </FadeUp>

          <StaggerWrap className="vc-products-grid">
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon">
                  <HiLightBulb />
                </div>
                <h4>Illuminated Monument Signs</h4>
                <p>
                  Internally lit monument signs use LED or fluorescent lighting behind translucent panels
                  to ensure your brand name and address are visible after dark. Internal illumination
                  provides even, attractive lighting that enhances curb appeal and makes your property
                  easy to locate at any hour. Ideal for businesses, churches, and medical offices that
                  operate in the evening.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon">
                  <HiDesktopComputer />
                </div>
                <h4>LED Monument Signs</h4>
                <p>
                  LED monument signs feature an integrated electronic message center that displays
                  full-color graphics, text, animations, and video. These dynamic displays are perfect
                  for organizations that need to communicate frequently changing information, from school
                  announcements to church service times and retail promotions. Content is managed remotely
                  through cloud-based software.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon">
                  <HiViewGrid />
                </div>
                <h4>Multi-Tenant Monument Signs</h4>
                <p>
                  Multi-tenant monument signs display the names and logos of multiple businesses within a
                  single structure, making them a staple at shopping centers, office parks, and
                  mixed-use developments. Individual tenant panels can be illuminated independently and
                  swapped when tenants change, offering landlords a practical and attractive wayfinding
                  solution.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon">
                  <HiColorSwatch />
                </div>
                <h4>Custom Architectural Monuments</h4>
                <p>
                  For properties that demand a truly one-of-a-kind entrance, custom architectural
                  monument signs are designed from the ground up to reflect the building&apos;s style,
                  materials, and color palette. Whether your structure features modern glass and steel or
                  traditional brick and stone, we create a sign that looks like it was always part of the
                  original architectural plan.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>
        </div>
      </section>

      {/* ── Materials & Construction ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp delay={0.1} className="vc-split-layout__img">
              <img
                src="/images/showcase/college-arch-monument.webp"
                alt="College monument sign with LED display"
                loading="lazy"
                decoding="async"
              />
            </FadeUp>
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Materials</span>
              <h2 className="vc-section-title">Materials &amp; Construction</h2>
              <p>
                The foundation of every great monument sign is the material selection. Natural stone and
                rock veneer deliver an upscale, timeless appearance that pairs beautifully with
                landscaped entrances. Brick and brick veneer provide a classic, institutional look
                popular with schools, churches, and government buildings. Stucco finishes offer smooth,
                modern aesthetics at a lower material cost, while painted aluminum panels create a
                sleek, contemporary surface that resists corrosion.
              </p>
              <p>
                For designs that require intricate shapes, curves, or dimensional logos, high-density
                urethane (HDU) foam is an excellent lightweight option that can be carved, routed, and
                painted to mimic stone or wood at a fraction of the weight. Concrete and precast
                elements round out the material palette for projects that call for maximum structural
                mass and permanence.
              </p>
              <p>
                Our team evaluates your site conditions, architectural context, budget, and maintenance
                preferences to recommend the optimal combination of materials. Every monument sign we
                build is engineered to meet local wind-load requirements and backed by a structural
                warranty.
              </p>
              <a href="/contact-us" className="vc-btn vc-btn--accent vc-btn--sm">
                Discuss Materials <HiArrowRight />
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Why ProVizion LED ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Why Us</span>
              <h2 className="vc-section-title">Why Choose ProVizion LED for Monument Signs?</h2>
              <p>
                ProVizion LED brings structural engineering expertise, landscape integration experience,
                and full in-house fabrication capabilities to every monument sign project. We design the
                sign, engineer the foundation, source the materials, fabricate the components, and
                install the finished structure, all under one roof. This vertically integrated approach
                eliminates finger-pointing between contractors and ensures a seamless experience from
                your first phone call to the final walkthrough.
              </p>
              <p>
                Our team handles the entire permitting process, including site-plan submissions,
                structural calculations, electrical permits, and final inspections. We understand
                Charlotte&apos;s sign ordinances and work within those parameters to maximize your
                sign&apos;s size, height, and visibility while keeping you in full compliance. Whether
                your project involves a simple illuminated monument or a complex LED-integrated
                structure, we have the capacity and expertise to deliver on schedule.
              </p>
              <p>
                We proudly serve Charlotte, Concord, Gastonia, Huntersville, Matthews, Rock Hill, and
                communities throughout the greater Charlotte metro area. Let ProVizion LED help you
                create a monument sign that makes a lasting impression on every visitor.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm" onClick={() => trackPhoneClick('monument-signs-bottom-cta')}>
                <HiPhone /> Call Us Today
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img
                src="/images/showcase/police-monument-led.webp"
                alt="Government monument sign with LED message center"
                loading="lazy"
                decoding="async"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <FAQSection faqs={faqs} title="Monument Signs FAQ" />

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
            <h2 className="vc-section-title">Ready for a Custom Monument Sign?</h2>
            <div className="vc-content-block" style={{ margin: '0 auto' }}>
              <p>
                Elevate your property entrance with a monument sign that communicates permanence,
                professionalism, and brand pride. Our signage consultants are standing by to discuss
                your project, walk you through material options, and provide a detailed proposal
                tailored to your needs.
              </p>
              <p>
                Contact ProVizion LED today for a free consultation and quote. Discover why
                organizations across the Charlotte area trust us for monument signage that makes a
                powerful first impression.
              </p>
            </div>
            <a href="/contact-us" className="vc-btn vc-btn--accent" style={{ marginTop: '16px' }}>
              Free Monument Sign Consultation <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>
      <RelatedServices currentPath="/monument-signs" />
    </>
  );
}
