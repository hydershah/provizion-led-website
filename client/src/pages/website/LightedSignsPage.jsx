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
import { COMPANY } from '../../utils/constants';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import './shared.css';

export default function LightedSignsPage() {
  useThemeClass('theme-site');

  return (
    <>
      <SEO
        title="Lighted & Illuminated Signs"
        description="ProVizion LED creates stunning lighted and illuminated signs including LED channel letters, backlit signs, neon alternatives, and custom illuminated displays."
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
          <FadeUp>
            <span className="vc-section-label">Brilliance</span>
            <h2 className="vc-section-title">The Brilliance of Illuminated Signs</h2>
            <div className="vc-content-block">
              <p>
                As dusk falls, a transformation begins. The muted colors of daytime facades give way to a glowing dance of lights.
              </p>
              <p>
                This is the power of lighted signs — they transform the night into a canvas for visibility. From the warm allure of neon signs to the sleek glow of LED lighted signs, ProVizion LED crafts each piece with the promise of quality and impact.
              </p>
              <p>
                Our team of skilled artists and designers work meticulously to create illuminated signs that not only enhance your brand&apos;s visibility but also add an enchanting ambiance to your business. We understand that the right lighting can evoke emotions and leave a lasting impression, and that&apos;s precisely what our illuminated signs aim to achieve.
              </p>
              <p>
                Whether it&apos;s a classic neon sign that exudes nostalgia or an LED display that demands attention, our illuminated signs are designed to captivate and inspire.
              </p>
            </div>
          </FadeUp>

          <FadeUp className="vc-phone-cta">
            <p>Call ProVizion LED at <a href={COMPANY.phoneTel}>{COMPANY.phone}</a> For Your Free Consultation With A Lighted Signs Expert!</p>
            <a href="#contact" className="vc-btn vc-btn--accent">Get A Free Quote <HiArrowRight /></a>
          </FadeUp>
        </div>
      </section>

      {/* ── Why Opt for Lighted Signage ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Advantages</span>
            <h2 className="vc-section-title">Why Opt for Lighted Signage?</h2>
            <div className="vc-content-block">
              <p>
                Picture this: A potential customer strolls through the streets, their eyes inadvertently drawn to a radiant display — your business, lit by a custom-lighted sign that tells your story even from afar.
              </p>
              <p>
                Whether it&apos;s sleek channel letters that spell sophistication or a backlit sign that radiates allure, lighted signs are like beacons in the night, guiding customers to your doorstep.
              </p>
              <p>
                With ProVizion LED&apos;s expertly crafted lighted signs, you&apos;re not just illuminating your brand; you&apos;re illuminating the path to success, ensuring your business stands out in the crowded landscape, day or night.
              </p>
            </div>
          </FadeUp>
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
          <FadeUp>
            <span className="vc-section-label">Process</span>
            <h2 className="vc-section-title">From Design to Glow: Our Process</h2>
            <div className="vc-content-block">
              <p>
                Every sign&apos;s journey at ProVizion LED begins with a vision — your vision. Our design maestros, armed with the latest in sign lighting technology and a penchant for perfection, translate your brand into a lighted masterpiece.
              </p>
              <p>
                With meticulous lighted sign installation, we ensure that every bulb, every LED, and every neon tube is a testament to durability and excellence. Our goal is not just to create a sign; it&apos;s to craft an enduring beacon that represents your brand with brilliance and longevity.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Light Up the Path ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Exterior &amp; Interior</span>
            <h2 className="vc-section-title">Light Up the Path to Your Doorstep</h2>
            <div className="vc-content-block">
              <p>
                Why settle for ordinary when your sign can be a landmark? Illuminate your business with exterior lighted signs that demand attention, or craft an indoor ambiance with backlit signs that speak volumes in hushed tones.
              </p>
              <p>
                At ProVizion LED, we&apos;re not just about signs; we&apos;re about spotlights. Our exterior lighted signs are more than just markers; they&apos;re beacons that guide customers to your doorstep. With a range of options, from attention-grabbing LED signs to the classic charm of neon, we can help you choose the perfect outdoor lighted sign that suits your brand&apos;s personality and ensures your business stands out, day and night.
              </p>
            </div>
          </FadeUp>

          <FadeUp className="vc-services-cta">
            <a href="#contact" className="vc-btn vc-btn--accent">Get A Free Quote <HiArrowRight /></a>
          </FadeUp>
        </div>
      </section>

      {/* ── Your Next Bright Idea ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Near You</span>
            <h2 className="vc-section-title">Your Next Bright Idea Awaits</h2>
            <div className="vc-content-block">
              <p>
                Are you searching for the best illuminated signs near your cozy city corner? Look no further. ProVizion LED is your local luminary, your partner in highlighting what makes your brand stand out. With a keen eye for design and an unwavering commitment to quality, we bring your ideas to life through stunning illumination.
              </p>
              <p>
                Our team of experts understands the nuances of illumination, whether it&apos;s the subtle warmth of a backlit sign or the vibrant allure of an LED display. We&apos;re not just in the business of creating signs; we&apos;re in the business of making your brand shine. Let your next bright idea come to life with ProVizion LED, and watch as your business becomes a beacon in your community.
              </p>
            </div>
          </FadeUp>

          <FadeUp className="vc-phone-cta">
            <p>Call ProVizion LED at <a href={COMPANY.phoneTel}>{COMPANY.phone}</a> For Your Free Consultation With A Lighted Signage Expert!</p>
            <a href="#contact" className="vc-btn vc-btn--accent">Get A Free Quote <HiArrowRight /></a>
          </FadeUp>
        </div>
      </section>

      {/* ── The Spotlight is Yours ── */}
      <section className="vc-section vc-section--alt vc-section--centered">
        <div className="vc-container">
          <FadeUp>
            <img
              src={COMPANY.logo}
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
