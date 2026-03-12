import {
  HiArrowRight,
  HiPhone,
  HiLightBulb,
  HiSun,
  HiSparkles,
  HiColorSwatch,
} from 'react-icons/hi';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQSection from '../../components/FAQSection';
import { getServiceSchema } from '../../utils/schemas';
import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import useSanityQuery from '../../hooks/useSanityQuery';
import { pageBySlugQuery } from '../../lib/queries';
import { urlFor } from '../../lib/sanity';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import { trackPhoneClick } from '../../utils/analytics';
import './shared.css';

export default function LightedSignsPage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();
  const { data: page } = useSanityQuery(pageBySlugQuery, { slug: 'lighted-signs' }, null);
  const logoSrc = COMPANY.logo?.asset ? urlFor(COMPANY.logo).width(400).url() : (COMPANY.logo || '/images/provizion-logo-white.webp');

  const serviceSchema = getServiceSchema(
    'Lighted & Illuminated Signs',
    'Illuminated signs, backlit channel letters & lighted business signs in Charlotte, NC.',
    '/lighted-signs'
  );

  const faqs = [
    {
      question: "What's the difference between front-lit and backlit channel letters?",
      answer: 'Front-lit channel letters illuminate through the letter face, creating a bright, direct glow — the most common and visible option. Backlit (halo-lit) channel letters project light behind the letter onto the mounting surface, producing an elegant halo effect. Front-lit is best for maximum readability from a distance, while backlit creates a sophisticated, upscale appearance. ProVizion LED also offers combination-lit letters that use both methods simultaneously.',
    },
    {
      question: 'How much do illuminated signs cost?',
      answer: 'Illuminated sign costs depend on type, size, and complexity. LED channel letters run $200-$500 per letter installed. Illuminated cabinet signs range from $3,000-$15,000. Backlit signs and lightbox signs typically cost $2,000-$10,000. ProVizion LED provides free quotes with detailed breakdowns for businesses across Charlotte, NC and surrounding areas.',
    },
    {
      question: 'How long do lighted signs last?',
      answer: 'LED-illuminated signs last 50,000 to 100,000 hours — that\'s 8-15+ years of daily operation. The aluminum and acrylic housings are weather-resistant and maintain their appearance for a decade or more. LED technology requires virtually no maintenance compared to older fluorescent or neon options that need regular tube replacements.',
    },
    {
      question: 'Are lighted signs energy-efficient?',
      answer: 'Yes. LED lighted signs use 50-75% less energy than traditional fluorescent or neon illuminated signs. A typical LED channel letter set costs just $5-$15 per month to operate. This energy efficiency combined with the long lifespan makes LED illuminated signs the most cost-effective option for businesses looking to reduce operating expenses while maintaining 24/7 brand visibility.',
    },
  ];

  return (
    <>
      <SEO
        title="Lighted & Illuminated Signs"
        description="Illuminated signs, backlit channel letters & lighted business signs in Charlotte, NC. Custom fabrication & professional installation by ProVizion LED."
        path="/lighted-signs"
      />

      {/* ── Page Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img src="/images/lighted-and-illuminated-signs-2.jpeg" alt="Lighted and Illuminated Signs" loading="eager" decoding="async" />
          <div className="vc-page-hero__overlay" />
        </div>
        <div className="vc-page-hero__content">
          <FadeUp>
            <span className="vc-page-hero__label">Illuminated Signage</span>
            <h1 className="vc-page-hero__title">Lighted, Illuminated, &amp; Backlit Signs</h1>
            <div className="vc-hero__services-row">
              <span>Design</span>
              <span>Production</span>
              <span>Install</span>
            </div>
            <div className="vc-page-hero__actions">
              <a href="#contact" className="vc-btn vc-btn--accent">Get Free Quote <HiArrowRight /></a>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--outline" style={{ borderColor: '#fff', color: '#fff' }} onClick={() => trackPhoneClick('lighted-signs-hero')}>
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Lighted Signs' }]} />
      <SchemaMarkup schema={serviceSchema} />

      {/* ── Intro: Lighted, Illuminated, & Backlit Signs ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Overview</span>
              <h2 className="vc-section-title">Lighted, Illuminated, &amp; Backlit Signs</h2>
              <p>
                In the twinkling skyline of business avenues, one protagonist shines brighter than the rest: Lighted signs. ProVizion LED turns light into a potent messenger for your brand, ensuring your business becomes a beacon of distinction.
              </p>
              <p>
                With innovative designs and state-of-the-art lighting solutions, we transform your storefront into an eye-catching spectacle that draws customers in day and night.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm" onClick={() => trackPhoneClick('lighted-signs-intro')}>
                <HiPhone /> Get A Free Quote
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/showcase/church-monument-wide.jpg" alt="Illuminated church monument sign at night" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── The Brilliance of Illuminated Signs ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp delay={0.1} className="vc-split-layout__img">
              <img src="/images/showcase/church-monument-night.jpg" alt="Illuminated monument sign glowing at night" loading="lazy" decoding="async" />
            </FadeUp>
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Brilliance</span>
              <h2 className="vc-section-title">The Brilliance of Illuminated Signs</h2>
              <p>
                As dusk falls, a transformation begins. Lighted signs transform the night into a canvas for visibility. From the warm allure of neon signs to the sleek glow of LED lighted signs, ProVizion LED crafts each piece with the promise of quality and impact.
              </p>
              <p>
                Whether it&apos;s sleek channel letters that spell sophistication or a backlit sign that radiates allure, lighted signs are beacons guiding customers to your doorstep — ensuring your business stands out day or night.
              </p>
              <a href="#contact" className="vc-btn vc-btn--accent vc-btn--sm">Get A Free Quote <HiArrowRight /></a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── The Spectrum of Choices ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Types</span>
            <h2 className="vc-section-title">The Spectrum of Choices at ProVizion LED</h2>
            <p className="vc-section-subtitle">At ProVizion LED, we understand that variety is the spice of life — and business. That&apos;s why our selection of lighted signs and displays is as diverse as the businesses we serve:</p>
          </FadeUp>

          <StaggerWrap className="vc-features-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiLightBulb /></div>
                <h3>LED Lighted Signs</h3>
                <p>
                  Pairing luminosity with longevity, our LED signs are not just brilliant; they&apos;re smart. Energy-efficient and programmable, they are the sentinels of sustainability.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiSun /></div>
                <h3>Outdoor Lighted Signs</h3>
                <p>
                  Built to brave the elements, these signs stand as landmarks of your presence. Robust, radiant, and resilient, they&apos;re your outdoor voice.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiSparkles /></div>
                <h3>Neon Signs</h3>
                <p>
                  The classic charm of neon brings a retro-cool vibe, infusing your brand with a timeless character that&apos;s impossible to ignore.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiColorSwatch /></div>
                <h3>Custom Lighted Signs</h3>
                <p>
                  Unique as your brand, our custom signs are born from a blend of your vision and our creativity. If you dream it, we can illuminate it.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>

          <FadeUp className="vc-content-block" style={{ marginTop: '32px' }}>
            <p>
              With ProVizion LED, your choices are illuminated, and your brand shines brightly in any setting.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── From Design to Glow ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Process</span>
              <h2 className="vc-section-title">From Design to Glow</h2>
              <p>
                Every sign&apos;s journey begins with your vision. Our design maestros translate your brand into a lighted masterpiece using the latest sign lighting technology. We ensure every bulb, every LED, and every neon tube is a testament to durability and excellence.
              </p>
              <p>
                Whether it&apos;s exterior signs that demand attention or indoor backlit signs that speak volumes in hushed tones, we craft enduring beacons that represent your brand with brilliance.
              </p>
              <a href="#contact" className="vc-btn vc-btn--accent vc-btn--sm">Get A Free Quote <HiArrowRight /></a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/showcase/curved-commercial-led.jpg" alt="Curved commercial LED display sign" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Your Local Sign Partner ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp delay={0.1} className="vc-split-layout__img">
              <img src="/images/showcase/school-led-monument.jpg" alt="LED monument sign for school" loading="lazy" decoding="async" />
            </FadeUp>
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Near You</span>
              <h2 className="vc-section-title">Your Local Sign Partner</h2>
              <p>
                ProVizion LED is your local luminary — your partner in highlighting what makes your brand stand out. Whether it&apos;s the subtle warmth of a backlit sign or the vibrant allure of an LED display, we bring your ideas to life through stunning illumination.
              </p>
              <p>
                Let your next bright idea come to life and watch as your business becomes a beacon in your community.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm" onClick={() => trackPhoneClick('lighted-signs-cta')}>
                <HiPhone /> Get A Free Quote
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── The Spotlight is Yours ── */}
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
            <h2 className="vc-section-title">The Spotlight is Yours</h2>
            <div className="vc-content-block" style={{ margin: '0 auto' }}>
              <p>
                The question isn&apos;t if you should light up your brand, but how bright you want to shine. Whether you need outdoor LED signs, indoor backlit signs, or custom neon signs, we&apos;ve got you covered.
              </p>
              <p>
                We pay attention to every detail, from design to installation, to ensure that your lighted sign reflects the essence of your business.
              </p>
            </div>
            <a href="#contact" className="vc-btn vc-btn--accent" style={{ marginTop: '16px' }}>
              Free Lighted Sign Consultation <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── Industry Applications ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Industries</span>
            <h2 className="vc-section-title">Illuminated Signs for Every Business</h2>
          </FadeUp>
          <StaggerWrap className="vc-features-grid">
            <StaggerChild>
              <div className="vc-feature-card">
                <h3>Restaurants &amp; Hospitality</h3>
                <p>Illuminated channel letters and backlit signs create an inviting atmosphere that draws diners in. From fine dining establishments to fast-casual chains, lighted signs are essential for restaurants competing for attention along Charlotte&apos;s busy corridors and dining districts.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <h3>Retail &amp; Shopping Centers</h3>
                <p>Stand out in crowded shopping plazas with vibrant illuminated storefront signs. Front-lit channel letters ensure your brand is visible from parking lots and roadways, while elegant halo-lit signs create a premium aesthetic for upscale retailers.</p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <h3>Medical &amp; Professional</h3>
                <p>Project professionalism and trust with clean, illuminated signage for medical practices, law firms, and corporate offices. Backlit channel letters and lightbox signs provide a polished appearance that reinforces your brand&apos;s credibility day and night across Charlotte and North Carolina.</p>
              </div>
            </StaggerChild>
          </StaggerWrap>
        </div>
      </section>

      {/* ── Materials & Technology ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp delay={0.1} className="vc-split-layout__img">
              <img src="/images/showcase/church-outdoor-led-display.jpg" alt="Outdoor LED display on church building" loading="lazy" decoding="async" />
            </FadeUp>
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Materials</span>
              <h2 className="vc-section-title">Premium Materials &amp; LED Technology</h2>
              <p>Every ProVizion LED illuminated sign is fabricated using commercial-grade materials built to withstand North Carolina&apos;s climate. Aluminum channel letter returns resist corrosion, while polycarbonate and acrylic faces provide impact resistance and UV stability.</p>
              <p>We use UL-listed LED modules from trusted manufacturers, ensuring consistent color temperature, brightness, and longevity. Our wiring and power supplies meet all electrical codes, and every illuminated sign carries a comprehensive warranty covering both materials and workmanship.</p>
              <p>From single-location storefronts to multi-site national brands, ProVizion LED delivers consistent quality across every illuminated sign we manufacture and install throughout Charlotte, Raleigh, Durham, and beyond.</p>
            </FadeUp>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Lighted Signs — Frequently Asked Questions" />

    </>
  );
}
