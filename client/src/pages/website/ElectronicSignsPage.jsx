import {
  HiArrowRight,
  HiPhone,
  HiColorSwatch,
  HiLightningBolt,
  HiCursorClick,
} from 'react-icons/hi';

import SEO from '../../components/SEO';
import useThemeClass from '../../hooks/useThemeClass';
import { COMPANY } from '../../utils/constants';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import './shared.css';

export default function ElectronicSignsPage() {
  useThemeClass('theme-site');

  return (
    <>
      <SEO
        title="Electronic Signs & Message Centers"
        description="ProVizion LED delivers high-impact electronic signs and message centers that capture attention, engage audiences, and drive results for businesses of all sizes."
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

      {/* ── The Electrifying World ── */}
      <section className="vc-section vc-section--alt">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Benefits</span>
            <h2 className="vc-section-title">The Electrifying World of Electronic Signage</h2>
            <div className="vc-content-block">
              <p>
                In today&apos;s competitive landscape, electronic signs elevate your brand, ensuring it stands out amid the clutter. These signs are more than just tools; they serve as your brand&apos;s megaphone, broadcasting your message with clarity and style.
              </p>
              <p>
                Whether it&apos;s a commanding outdoor display or a subtle indoor sign that guides and informs, each sign offers an opportunity to showcase your brand&apos;s identity and captivate your audience.
              </p>
              <p>
                With the power to deliver dynamic content, engage customers interactively, and adapt to diverse spaces and messages, electronic signs are a versatile and essential asset in modern branding and marketing strategies. They enable you to establish a strong presence, communicate effectively, and shine in a visually saturated world, making your brand memorable and influential in your industry.
              </p>
            </div>
          </FadeUp>

          <FadeUp className="vc-phone-cta">
            <p>Call ProVizion LED at <a href={COMPANY.phoneTel}>{COMPANY.phone}</a> For Your Free Consultation With A Custom Electronic Signage Expert!</p>
            <a href="#contact" className="vc-btn vc-btn--accent">Get A Free Quote <HiArrowRight /></a>
          </FadeUp>
        </div>
      </section>

      {/* ── Why Electronic Signs ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Advantages</span>
            <h2 className="vc-section-title">Why Should Electronic Signs Be Your Go-To?</h2>
            <div className="vc-content-block">
              <p>
                When it comes to charming your audience and leaving a lasting impression, electronic signs take center stage.
              </p>
              <p>
                These dynamic displays spark conversations, transforming your message into an interactive and engaging experience. Customizable to match your brand&apos;s identity, electronic signage reigns supreme in personalization, guaranteeing your distinct presence stands out.
              </p>
              <p>
                Indoors or outdoors, handheld or building-spanning, electronic displays offer unparalleled versatility, effortlessly adapting to your space, needs, and message. Enhance your brand&apos;s communication with the power of electronic signs today.
              </p>
            </div>
          </FadeUp>
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
          <FadeUp>
            <span className="vc-section-label">Your Canvas</span>
            <h2 className="vc-section-title">Paint Your Brand&apos;s Digital Canvas with ProVizion LED</h2>
            <div className="vc-content-block">
              <p>
                Visualize your brand story unfolding across an electronic message board, or imagine your campaign on an LED sign, bold and bright against the night sky.
              </p>
              <p>
                This isn&apos;t just a dream; it&apos;s what we do at ProVizion LED. With our cutting-edge technology and expertise, we transform your concepts into stunning electronic displays that captivate your audience. Whether you&apos;re looking to share real-time information, promote products, or simply make a memorable statement, our electronic signs are the canvases upon which your brand&apos;s most compelling narratives come to life.
              </p>
              <h3>Your Brand Deserves to Be Seen and Heard</h3>
              <p>
                Don&apos;t let your brand whisper when it could resonate. Electronic advertising signs and commercial electronic displays are your ticket to the big leagues of brand communication. In a world where attention spans are fleeting and competition is fierce, it&apos;s crucial to make your brand stand out. Electronic signs give your brand a powerful voice that can be seen and heard, capturing the attention of your target audience and leaving a lasting impression.
              </p>
              <p>
                With the dynamic capabilities of electronic signs, you can convey your brand message with flair and impact. Whether it&apos;s through vivid visuals, real-time updates, or interactive experiences, electronic displays offer a versatile platform to engage and connect with your audience. Elevate your brand&apos;s visibility, reinforce your identity, and make a statement that resonates with customers. Choose electronic signs and displays to ensure your brand is not just seen but heard in a crowded marketplace.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Step into the Spotlight ── */}
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
