import {
  HiArrowRight,
  HiPhone,
  HiColorSwatch,
  HiLightningBolt,
  HiCursorClick,
} from 'react-icons/hi';

import SEO from '../../components/SEO';
import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import useSanityQuery from '../../hooks/useSanityQuery';
import { pageBySlugQuery } from '../../lib/queries';
import { urlFor } from '../../lib/sanity';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import './shared.css';

export default function ElectronicSignsPage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();
  const { data: page } = useSanityQuery(pageBySlugQuery, { slug: 'electronic-signs' }, null);
  const logoSrc = COMPANY.logo?.asset ? urlFor(COMPANY.logo).width(400).url() : (COMPANY.logo || '/images/provizion-logo-white.webp');

  return (
    <>
      <SEO
        title="Electronic Signs & Message Centers"
        description="Electronic message centers & electronic signs for schools, churches & businesses in Charlotte, NC. Programmable, easy to update, built to last."
        path="/electronic-signs"
      />

      {/* ── Page Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img src="/images/electronic-message-centers-digital-signage-display-1.jpg" alt="Electronic Signs and Message Centers" loading="eager" decoding="async" />
          <div className="vc-page-hero__overlay" />
        </div>
        <div className="vc-page-hero__content">
          <FadeUp>
            <span className="vc-page-hero__label">Electronic Signage</span>
            <h1 className="vc-page-hero__title">Electronic Signs &amp; Displays</h1>
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

      {/* ── Intro: Electronic Signs & Displays ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Overview</span>
              <h2 className="vc-section-title">Electronic Signs &amp; Displays</h2>
              <p>
                In this dynamic world of electronic signs and displays, your brand&apos;s message can go beyond the boundaries of traditional advertising. From eye-catching LED billboards to interactive kiosks and sleek digital menu boards, electronic displays captivate, inform, and inspire.
              </p>
              <p>
                With real-time updates, touchscreen interactions, and versatile applications, electronic signs are the modern storytellers of our digital age.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm">
                <HiPhone /> Free Consultation
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/electronic-message-centers-digital-signage-display-1.jpg" alt="Electronic sign display" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Why Electronic Signs ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp delay={0.1} className="vc-split-layout__img">
              <img src="/images/programmable-led-message-centers-3.jpg" alt="Electronic message center display" loading="lazy" decoding="async" />
            </FadeUp>
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Benefits</span>
              <h2 className="vc-section-title">Why Electronic Signs?</h2>
              <p>
                Electronic signs elevate your brand, ensuring it stands out amid the clutter. They serve as your brand&apos;s megaphone, broadcasting your message with clarity and style — whether it&apos;s a commanding outdoor display or a subtle indoor sign.
              </p>
              <p>
                Customizable to match your brand&apos;s identity, electronic signage reigns supreme in personalization. Indoors or outdoors, they offer unparalleled versatility, effortlessly adapting to your space, needs, and message.
              </p>
              <a href="#contact" className="vc-btn vc-btn--accent vc-btn--sm">Get A Free Quote <HiArrowRight /></a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Where Electronic Signage Speaks Volumes ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Solutions</span>
            <h2 className="vc-section-title">ProVizion LED: Where Electronic Signage Speaks Volumes</h2>
            <div className="vc-content-block">
              <p>
                In the search for &lsquo;electronic signs near me,&rsquo; you&apos;ll find many options, but none quite like ProVizion LED. Why are we the talk of the town?
              </p>
            </div>
          </FadeUp>

          <StaggerWrap className="vc-features-grid">
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiColorSwatch /></div>
                <h3>Tailored Just for You</h3>
                <p>
                  Our custom electronic signs are not off-the-rack; they are tailor-made to suit your business persona.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiLightningBolt /></div>
                <h3>Innovation Meets Expertise</h3>
                <p>
                  Our LED digital signage and high-resolution digital signs are crafted using the latest technology, ensuring your message is not just seen but remembered.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiCursorClick /></div>
                <h3>Interactive Adventures</h3>
                <p>
                  We bring the future to your fingertips with interactive digital boards and touchscreen displays that captivate and engage your audience.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>
        </div>
      </section>

      {/* ── Paint Your Brand's Digital Canvas ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Your Canvas</span>
              <h2 className="vc-section-title">Your Brand Deserves to Be Seen &amp; Heard</h2>
              <p>
                Visualize your brand story unfolding across an electronic message board, bold and bright against the night sky. With our cutting-edge technology, we transform your concepts into stunning electronic displays that captivate your audience.
              </p>
              <p>
                Electronic advertising signs give your brand a powerful voice — through vivid visuals, real-time updates, and interactive experiences. Elevate your visibility and make a statement that resonates.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm">
                <HiPhone /> Free Consultation
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/indoor-led-message-board-sign-2.jpg" alt="Indoor electronic message board" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Step into the Spotlight ── */}
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
            <h2 className="vc-section-title">Step into the Spotlight with ProVizion LED</h2>
            <div className="vc-content-block" style={{ margin: '0 auto' }}>
              <p>
                Ready to cast your brand in the best possible light? During our FREE consultation, we&apos;ll dive deep into your brand&apos;s objectives and craft a customized solution that aligns perfectly with your vision.
              </p>
              <p>
                Whether you&apos;re upgrading your storefront with a stunning LED display or engaging your audience with interactive digital signage, we deliver cutting-edge solutions that leave a lasting impact.
              </p>
            </div>
            <a href="#contact" className="vc-btn vc-btn--accent" style={{ marginTop: '16px' }}>
              Free Electronic Sign Consultation <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

    </>
  );
}
