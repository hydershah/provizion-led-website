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
import { COMPANY } from '../../utils/constants';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import './shared.css';

export default function LEDSignsPage() {
  useThemeClass('theme-site');

  return (
    <>
      <SEO
        title="LED Signs & Displays"
        description="ProVizion LED manufactures premium LED signs and displays with vibrant colors, energy-efficient technology, and unmatched clarity for indoor and outdoor use."
        path="/led-signs"
      />

      {/* ── Page Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img src="/images/electronic-signs-1.jpg" alt="LED Signs and Displays" loading="eager" decoding="async" />
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
              <a href="#contact" className="vc-btn vc-btn--accent">Get Free Quote <HiArrowRight /></a>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--outline" style={{ borderColor: '#fff', color: '#fff' }}>
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

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
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm">
                <HiPhone /> Free Consultation
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/full-color-led-electronic-sign-4.jpg" alt="LED sign display" loading="lazy" decoding="async" />
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
            <p>Call ProVizion LED at <a href={COMPANY.phoneTel}>{COMPANY.phone}</a> For Your Free Consultation With An LED Signs Expert!</p>
            <a href="#contact" className="vc-btn vc-btn--accent">Get A Free Quote <HiArrowRight /></a>
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
              <img src="/images/full-service-electronic-sign-company-6.jpg" alt="ProVizion LED sign installation" loading="lazy" decoding="async" />
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
              <a href="#contact" className="vc-btn vc-btn--accent vc-btn--sm">Get A Free Quote <HiArrowRight /></a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Elevate Your Brand ── */}
      <section className="vc-section vc-section--centered">
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
            <a href="#contact" className="vc-btn vc-btn--accent" style={{ marginTop: '16px' }}>
              Free LED Sign Consultation <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

    </>
  );
}
