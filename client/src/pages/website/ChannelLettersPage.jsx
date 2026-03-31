import {
  HiArrowRight,
  HiPhone,
  HiSparkles,
  HiEye,
  HiColorSwatch,
  HiLightBulb,
  HiStar,
  HiClipboardCheck,
  HiShieldCheck,
  HiCog,
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
    question: 'How much do channel letter signs cost?',
    answer:
      'Channel letter pricing typically ranges from $200 to $500 or more per letter, depending on letter size (12 to 48 inches), illumination type, and materials used. A typical six-letter storefront sign runs between $2,500 and $8,000 fully installed. Front-lit letters tend to be more affordable, while halo-lit and combination-lit options carry a premium. We provide detailed, no-obligation quotes so you know exactly what to expect before committing.',
  },
  {
    question: "What's the difference between front-lit and back-lit channel letters?",
    answer:
      'Front-lit channel letters feature translucent acrylic faces that glow when the internal LEDs illuminate, producing a bright, direct light that maximizes readability from a distance. Back-lit, also called halo-lit, channel letters are constructed so the light projects behind each letter and onto the mounting surface, creating a sophisticated halo glow. Front-lit is the most popular choice for retail storefronts, while halo-lit is often favored by upscale brands, hotels, and professional offices seeking a refined aesthetic.',
  },
  {
    question: 'How long do channel letters last?',
    answer:
      'LED-illuminated channel letters deliver an impressive lifespan of 50,000 to 100,000 hours of operation, which translates to roughly eight to twelve years of continuous nighttime use. The aluminum and acrylic housings are engineered to withstand rain, wind, UV exposure, and temperature fluctuations, typically lasting ten or more years with minimal maintenance. Periodic cleaning and electrical inspections are all that is needed to keep your channel letter sign looking its best.',
  },
  {
    question: 'Do I need a permit for channel letters in Charlotte?',
    answer:
      'Yes. The City of Charlotte requires sign permits for all commercial signage, including channel letters. Illuminated signs also require a separate electrical permit. Our team manages the entire permitting process on your behalf, from initial application and site surveys to final inspections, so you can focus on running your business while we handle the paperwork.',
  },
];

export default function ChannelLettersPage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();
  const logoSrc = COMPANY.logo?.asset
    ? urlFor(COMPANY.logo).width(400).url()
    : COMPANY.logo || '/images/provizion-logo-white.webp';

  const serviceSchema = getServiceSchema(
    'Channel Letter Signs',
    'Custom channel letter signs for businesses in Charlotte, NC. Front-lit, backlit & halo-lit channel letters. In-house fabrication & professional installation.',
    '/channel-letters'
  );

  return (
    <>
      <SEO
        title="Channel Letter Signs"
        description="Custom channel letter signs for businesses in Charlotte, NC. Front-lit, backlit & halo-lit channel letters. In-house fabrication & professional installation."
        path="/channel-letters"
        keywords="channel letters, channel letter signs, illuminated letters, custom channel letters, Charlotte NC"
      />
      <SchemaMarkup schema={serviceSchema} />

      {/* ── Page Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img
            src="/images/led-signs-channel-letters-lit-at-night-1.webp"
            alt="Channel Letter Signs"
            loading="eager"
            decoding="async"
          />
          <div className="vc-page-hero__overlay" />
        </div>
        <div className="vc-page-hero__content">
          <FadeUp>
            <span className="vc-page-hero__label">Channel Letters</span>
            <h1 className="vc-page-hero__title">Channel Letter Signs</h1>
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
                onClick={() => trackPhoneClick('channel-letters-hero')}
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
          { label: 'Channel Letters' },
        ]}
      />

      {/* ── Overview: What Are Channel Letters? ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Overview</span>
              <h2 className="vc-section-title">What Are Channel Letter Signs?</h2>
              <p>
                Channel letters are individually fabricated three-dimensional letters and logos that are
                mounted directly to a building facade or raceway. Each letter is custom-built from
                aluminum returns, an acrylic or polycarbonate face, and internal LED modules that
                produce brilliant illumination day and night. The result is a bold, professional
                sign that commands attention from the street and gives your brand a permanent,
                high-quality presence.
              </p>
              <p>
                From bustling retail storefronts and shopping malls to corporate office buildings and
                medical complexes, channel letters are the go-to signage choice for businesses that want
                to project credibility, visibility, and brand consistency. Here in Charlotte, NC,
                channel letter signs are among the most popular forms of commercial signage because they
                pair timeless dimensional appeal with energy-efficient LED technology. Whether your
                building sits on a busy corridor like South Boulevard or in a suburban office park,
                channel letters ensure your business name is unmissable.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm" onClick={() => trackPhoneClick('channel-letters-intro')}>
                <HiPhone /> Get A Free Quote
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img
                src="/images/showcase/school-monument-teal.webp"
                alt="Custom monument sign with branded lettering"
                loading="lazy"
                decoding="async"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Benefits of Channel Letters ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Benefits</span>
            <h2 className="vc-section-title">Why Choose Channel Letter Signs?</h2>
          </FadeUp>

          <StaggerWrap className="vc-features-grid">
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon">
                  <HiSparkles />
                </div>
                <h3>Professional Brand Image</h3>
                <p>
                  Three-dimensional channel letters convey quality, permanence, and professionalism that
                  flat signage simply cannot match. The depth and dimension of each letter create shadow
                  lines and visual interest that elevate your storefront, helping customers associate your
                  brand with reliability and trust. National franchises and local boutiques alike rely on
                  channel letters to establish a polished first impression.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon">
                  <HiEye />
                </div>
                <h3>Day &amp; Night Visibility</h3>
                <p>
                  Illuminated channel letters ensure your brand shines around the clock. During the day,
                  the dimensional form and vivid colors attract attention from passing traffic. At night,
                  internal LEDs transform your sign into a glowing beacon that draws customers from blocks
                  away. This twenty-four-seven visibility maximizes your advertising investment and drives
                  foot traffic long after sunset.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon">
                  <HiColorSwatch />
                </div>
                <h3>Fully Customizable</h3>
                <p>
                  Every element of a channel letter sign is tailored to your brand. Choose any font,
                  color, letter height, depth, and finish to achieve a look that aligns perfectly with
                  your identity guidelines. From script typefaces for a boutique restaurant to bold
                  sans-serifs for a tech company, the design possibilities are virtually limitless.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>

          <FadeUp className="vc-phone-cta">
            <p>
              Call ProVizion LED at <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick('channel-letters-phone-cta')}>{COMPANY.phone}</a> For Your Free
              Consultation With A Channel Letter Expert!
            </p>
            <a href="/contact-us" className="vc-btn vc-btn--accent">
              Get A Free Quote <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── Types of Channel Letters ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Solutions</span>
            <h2 className="vc-section-title">Types of Channel Letter Signs</h2>
            <div className="vc-content-block">
              <p>
                Channel letters come in a variety of illumination styles to suit every aesthetic and
                budget. Understanding the differences helps you select the perfect option for your
                building and brand personality.
              </p>
            </div>
          </FadeUp>

          <StaggerWrap className="vc-products-grid">
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon">
                  <HiLightBulb />
                </div>
                <h4>Front-Lit Channel Letters</h4>
                <p>
                  The most common style of channel letter, front-lit signs use a translucent acrylic
                  face that glows brightly when internal LEDs illuminate. They deliver bold, direct
                  visibility and are the standard choice for retail storefronts, restaurants, and
                  service businesses seeking maximum street-level impact.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon">
                  <HiStar />
                </div>
                <h4>Back-Lit (Halo-Lit) Channel Letters</h4>
                <p>
                  Halo-lit channel letters project light behind each letter and onto the wall surface,
                  creating a sophisticated glow effect. The letter faces remain opaque while the soft
                  halo adds depth and elegance. This style is a favorite for upscale retail, hotels,
                  corporate lobbies, and professional offices seeking a refined look.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon">
                  <HiSparkles />
                </div>
                <h4>Combination Lit Channel Letters</h4>
                <p>
                  Combining both front-face illumination and a rear halo, combination-lit channel
                  letters deliver maximum visual impact. The lit face provides readability while the
                  halo adds dimension. This dual-illumination approach is ideal for businesses that
                  want their signage to stand out in competitive commercial corridors.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon">
                  <HiEye />
                </div>
                <h4>Open-Face Channel Letters</h4>
                <p>
                  Open-face channel letters expose the LED or neon lighting elements directly, creating
                  a distinctive retro-meets-modern aesthetic. Without a covering lens, the visible light
                  source adds character and warmth. They are popular with breweries, entertainment
                  venues, barbershops, and any brand seeking a vintage or industrial vibe.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon">
                  <HiColorSwatch />
                </div>
                <h4>Non-Illuminated Channel Letters</h4>
                <p>
                  For businesses that want the three-dimensional depth and presence of channel letters
                  without lighting, non-illuminated options provide a clean, professional look at a
                  budget-friendly price. These dimensional letters are often paired with external
                  gooseneck or spotlight fixtures for nighttime visibility.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp delay={0.1} className="vc-split-layout__img">
              <img
                src="/images/showcase/church-monument-day.webp"
                alt="LED monument sign installation for church"
                loading="lazy"
                decoding="async"
              />
            </FadeUp>
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Our Process</span>
              <h2 className="vc-section-title">From Concept to Installation</h2>
              <p>
                Building exceptional channel letters requires precision at every stage. Our process
                begins with a thorough design consultation where we review your brand guidelines,
                building facade, and local sign codes. We then collaborate with you on font selection,
                color matching, letter sizing, and illumination style to ensure the finished product
                reflects your brand perfectly.
              </p>
              <p>
                Once the design is approved, our in-house fabrication team goes to work. Aluminum returns
                are cut and formed, acrylic faces are routed and painted, and energy-efficient LED
                modules are wired and tested. Every sign undergoes a full quality-control inspection
                before leaving our facility. We also handle all municipal permitting and electrical
                permits required in Charlotte and the surrounding area, removing the administrative
                burden from your shoulders.
              </p>
              <p>
                Finally, our professional installation crew mounts each letter with precision, ensuring
                level alignment, secure fastening, and clean wiring. The result is a channel letter sign
                that looks stunning from day one and performs reliably for years to come.
              </p>
              <a href="/contact-us" className="vc-btn vc-btn--accent vc-btn--sm">
                Start Your Project <HiArrowRight />
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
              <h2 className="vc-section-title">Why Choose ProVizion LED for Channel Letters?</h2>
              <p>
                ProVizion LED is a Charlotte-based sign company with full in-house manufacturing
                capabilities. That means your channel letters are designed, fabricated, and installed by
                a single team that maintains quality control from start to finish. We do not outsource
                production, so we can offer faster turnaround times and competitive pricing without
                sacrificing craftsmanship.
              </p>
              <p>
                All of our illuminated channel letter signs are UL listed, meeting the safety and
                electrical standards required by building inspectors and insurance carriers. Our LED
                modules are rated for 50,000 hours or more and carry manufacturer warranties for added
                peace of mind. Whether you need a single set of letters for a new storefront or a
                multi-location rollout across the Carolinas, our team has the capacity and expertise to
                deliver on time and on budget.
              </p>
              <p>
                We are proud to serve Charlotte, Concord, Gastonia, Huntersville, Matthews, and the
                greater Charlotte metro area. From initial consultation to final installation, ProVizion
                LED is your trusted partner for channel letter signage that elevates your brand.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm" onClick={() => trackPhoneClick('channel-letters-bottom-cta')}>
                <HiPhone /> Call Us Today
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img
                src="/images/showcase/church-monument-stone.webp"
                alt="Monument sign with LED display for church"
                loading="lazy"
                decoding="async"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <FAQSection faqs={faqs} title="Channel Letter Signs FAQ" />

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
            <h2 className="vc-section-title">Ready for Custom Channel Letters?</h2>
            <div className="vc-content-block" style={{ margin: '0 auto' }}>
              <p>
                Transform your storefront with channel letter signs that capture attention and convey
                professionalism. Our team of signage experts is ready to guide you through the design
                process, answer your questions, and deliver a finished product that exceeds your
                expectations.
              </p>
              <p>
                Contact ProVizion LED today for a free, no-obligation consultation and quote. Let us
                show you why Charlotte businesses trust us for their most important branding investment.
              </p>
            </div>
            <a href="/contact-us" className="vc-btn vc-btn--accent" style={{ marginTop: '16px' }}>
              Free Channel Letter Consultation <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>
      <RelatedServices currentPath="/channel-letters" />
    </>
  );
}
