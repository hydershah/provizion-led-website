import {
  HiArrowRight,
  HiPhone,
  HiLightBulb,
  HiSun,
  HiSparkles,
  HiColorSwatch,
} from 'react-icons/hi';
import SEO from '../../components/SEO';
import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import useSanityQuery from '../../hooks/useSanityQuery';
import { pageBySlugQuery } from '../../lib/queries';
import { urlFor } from '../../lib/sanity';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import './shared.css';

export default function LightedSignsPage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();
  const { data: page } = useSanityQuery(pageBySlugQuery, { slug: 'lighted-signs' }, null);
  const logoSrc = COMPANY.logo?.asset ? urlFor(COMPANY.logo).width(400).url() : (COMPANY.logo || '/images/provizion-logo-white.webp');

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
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--outline" style={{ borderColor: '#fff', color: '#fff' }}>
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

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
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm">
                <HiPhone /> Free Consultation
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/led-signs-channel-letters-lit-at-night-1.jpg" alt="Lighted channel letter signs at night" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── The Brilliance of Illuminated Signs ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp delay={0.1} className="vc-split-layout__img">
              <img src="/images/lighted-and-illuminated-signs-2.jpeg" alt="Illuminated business sign at night" loading="lazy" decoding="async" />
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
              <img src="/images/custom-electronic-sign-company-4.jpeg" alt="Custom sign fabrication" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Your Local Sign Partner ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp delay={0.1} className="vc-split-layout__img">
              <img src="/images/michaels-raw-bar.jpg" alt="Illuminated business storefront sign" loading="lazy" decoding="async" />
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
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm">
                <HiPhone /> Free Consultation
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

    </>
  );
}
