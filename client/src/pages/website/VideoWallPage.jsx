import {
  HiArrowRight,
  HiPhone,
  HiDesktopComputer,
  HiAdjustments,
  HiEye,
  HiLightningBolt,
  HiViewGrid,
  HiOfficeBuilding,
  HiSun,
  HiCursorClick,
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

const VIDEO_WALL_FAQS = [
  {
    question: 'How much does a video wall cost?',
    answer:
      'Video wall pricing ranges from $5,000 to $100,000 or more depending on display size, technology type, pixel pitch, and installation complexity. A direct-view LED video wall for a corporate lobby typically starts around $15,000 to $25,000, while large-format installations for stadiums or event venues can exceed six figures. We provide free on-site assessments and detailed proposals so you know exactly what to expect before committing.',
  },
  {
    question: "What's the difference between LED and LCD video walls?",
    answer:
      'LED video walls use individual light-emitting diode modules that tile together into a completely seamless display with no visible bezels. They deliver superior brightness, wider viewing angles, and greater durability, making them ideal for large venues and outdoor applications. LCD video walls use multiple flat-panel screens arranged in a grid, and while thin bezels are available, slight seam lines remain visible. LCD walls cost less upfront and can be a smart choice for smaller installations or close-viewing environments like conference rooms.',
  },
  {
    question: 'Can video walls be used outdoors?',
    answer:
      'Yes. Outdoor-rated LED video walls are engineered to withstand rain, wind, dust, and temperature extremes with IP65 or higher ingress protection ratings. With brightness levels of 5,000 nits or more, they remain clearly visible even in direct sunlight. ProVizion LED installs weatherproof outdoor video walls for stadiums, event stages, building facades, and roadside advertising throughout the Charlotte metro area.',
  },
  {
    question: 'How long do LED video walls last?',
    answer:
      'High-quality LED video walls are rated for 100,000 or more hours of operation, which translates to over 11 years of continuous 24/7 use. In a typical business environment running 12 to 16 hours per day, you can expect 15 to 20 years of reliable service. Individual LED modules can be replaced without disassembling the entire wall, keeping maintenance costs low over the lifetime of the display.',
  },
];

export default function VideoWallPage() {
  useThemeClass('theme-site');
  const { company: COMPANY } = useSanityContext();
  const logoSrc = COMPANY.logo?.asset ? urlFor(COMPANY.logo).width(400).url() : (COMPANY.logo || '/images/provizion-logo-white.webp');

  const serviceSchema = getServiceSchema(
    'Video Wall Displays & LED Video Walls',
    'Commercial LED video walls and video wall displays for businesses in Charlotte, NC. Indoor and outdoor video wall solutions with seamless installation.',
    '/video-wall'
  );

  return (
    <>
      <SEO
        title="Video Wall Displays & LED Video Walls"
        description="Commercial LED video walls & video wall displays for businesses in Charlotte, NC. Indoor & outdoor video wall solutions with seamless installation. Free quotes."
        path="/video-wall"
        keywords="video wall, LED video wall, video wall displays, commercial video wall, Charlotte NC"
      />
      <SchemaMarkup schema={serviceSchema} />

      {/* ── Page Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img src="/images/showcase/building-digital-display.jpg" alt="Video Wall Displays and LED Video Walls" loading="eager" decoding="async" />
          <div className="vc-page-hero__overlay" />
        </div>
        <div className="vc-page-hero__content">
          <FadeUp>
            <span className="vc-page-hero__label">Video Walls</span>
            <h1 className="vc-page-hero__title">Video Wall Displays</h1>
            <div className="vc-hero__services-row">
              <span>Design</span>
              <span>Production</span>
              <span>Install</span>
            </div>
            <div className="vc-page-hero__actions">
              <a href="#contact" className="vc-btn vc-btn--accent">Get Free Quote <HiArrowRight /></a>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--outline" style={{ borderColor: '#fff', color: '#fff' }} onClick={() => trackPhoneClick('video-wall-hero')}>
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <Breadcrumbs items={[
        { label: 'Home', path: '/' },
        { label: 'Video Wall Displays' },
      ]} />

      {/* ── Overview: What Are Video Walls? ── */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <span className="vc-section-label">Overview</span>
              <h2 className="vc-section-title">Transforming Spaces with Video Wall Technology</h2>
              <p>
                A video wall is a large-format display created by tiling multiple screens or LED panels together to form a single, cohesive visual surface. Unlike a standalone monitor or projector, video walls deliver massive screen real estate with exceptional brightness and resolution, turning ordinary walls into commanding focal points that inform, entertain, and inspire.
              </p>
              <p>
                From corporate lobbies that greet visitors with dynamic brand storytelling to retail showrooms that immerse shoppers in vivid product showcases, video walls are redefining how businesses in Charlotte, NC and beyond communicate with their audiences. Houses of worship use them to amplify worship experiences, event venues deploy them as stunning stage backdrops, and stadiums rely on them to energize crowds with live replays and sponsor content. Whatever the setting, a professionally installed video wall elevates the entire environment.
              </p>
              <p>
                ProVizion LED specializes in designing, manufacturing, and installing commercial video wall solutions tailored to the unique requirements of each space. Our team evaluates ambient lighting, viewing distances, content types, and architectural constraints to recommend the ideal technology and configuration for your project.
              </p>
              <a href={COMPANY.phoneTel} className="vc-btn vc-btn--accent vc-btn--sm" onClick={() => trackPhoneClick('video-wall-intro')}>
                <HiPhone /> Get A Free Quote
              </a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/showcase/highrise-digital-display.jpg" alt="Large-format digital display on high-rise building" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Benefits of Video Wall Displays ── */}
      <section className="vc-section vc-section--alt vc-section--centered">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Benefits</span>
            <h2 className="vc-section-title">Why Businesses Choose Video Walls</h2>
            <p className="vc-section-subtitle">
              Video walls deliver a combination of scale, clarity, and flexibility that no single display can match. Here is what makes them the preferred choice for high-impact visual communication.
            </p>
          </FadeUp>

          <StaggerWrap className="vc-features-grid">
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiDesktopComputer /></div>
                <h3>Immersive Visual Impact</h3>
                <p>
                  Large-format seamless displays captivate audiences from the moment they enter a room. With no bezels interrupting the image on direct-view LED walls, content appears to float on the surface, creating an immersive experience that static signage simply cannot replicate. Whether you are presenting data dashboards in a command center or showcasing cinematic brand content in a showroom, the sheer scale of a video wall commands attention and leaves a lasting impression on every viewer.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiAdjustments /></div>
                <h3>Flexible Configurations</h3>
                <p>
                  Video walls adapt to virtually any space and purpose. Panels can be arranged in standard grids starting from a compact 2x2 layout or scaled up to massive installations spanning entire building facades. Curved, angled, and even ceiling-mounted configurations are possible with direct-view LED modules. This flexibility means your video wall grows alongside your business, with additional panels easily integrated as your needs evolve over time.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-feature-card">
                <div className="vc-feature-card__icon"><HiEye /></div>
                <h3>Superior Image Quality</h3>
                <p>
                  Modern video wall panels deliver stunning resolution, high brightness, and wide viewing angles that ensure content looks crisp from every seat in the house. Fine-pitch LED panels achieve pixel densities rivaling traditional monitors, while brightness levels of 1,000 nits or more indoors and 5,000-plus nits outdoors guarantee visibility in any lighting condition. Advanced processing handles color calibration across all panels so the entire wall displays perfectly uniform imagery.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>

          <FadeUp className="vc-phone-cta">
            <p>Call ProVizion LED at <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick('video-wall-phone-cta')}>{COMPANY.phone}</a> to discuss your video wall project with a display specialist!</p>
            <a href="#contact" className="vc-btn vc-btn--accent">Get A Free Quote <HiArrowRight /></a>
          </FadeUp>
        </div>
      </section>

      {/* ── Video Wall Solutions ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp>
            <span className="vc-section-label">Solutions</span>
            <h2 className="vc-section-title">Video Wall Solutions for Every Application</h2>
            <p className="vc-section-subtitle">We offer a comprehensive range of video wall technologies to match your environment, budget, and content requirements.</p>
          </FadeUp>

          <StaggerWrap className="vc-products-grid">
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiLightningBolt /></div>
                <h4>Direct-View LED Video Walls</h4>
                <p>
                  The gold standard for large-scale installations. Direct-view LED walls use self-emitting diode modules that tile together with zero bezels, producing a completely seamless canvas. They excel in lobbies, auditoriums, broadcast studios, and any space where a flawless, high-brightness image is essential. Available in pixel pitches from under 1 mm to 10 mm, they scale from intimate boardrooms to sprawling arena displays.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiViewGrid /></div>
                <h4>LCD Video Walls</h4>
                <p>
                  A cost-effective multi-panel solution that arranges commercial-grade LCD screens in tight arrays with ultra-narrow bezels as thin as 0.88 mm. LCD video walls are ideal for control rooms, corporate conference spaces, and retail environments where close-viewing detail matters and budgets are a consideration. They support 4K resolution per panel and integrate easily with standard AV infrastructure.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiOfficeBuilding /></div>
                <h4>Indoor Video Walls</h4>
                <p>
                  Purpose-built for lobbies, retail showrooms, conference rooms, houses of worship, and museum exhibits. Indoor video walls leverage fine pixel pitches for razor-sharp detail at close viewing distances and maintain lower brightness levels to reduce eye strain in controlled lighting. ProVizion LED handles structural mounting, cable management, and content management system setup so every installation looks and performs flawlessly.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiSun /></div>
                <h4>Outdoor LED Video Walls</h4>
                <p>
                  Engineered for weather resistance with IP65 or higher ratings, outdoor LED video walls withstand rain, wind, dust, and extreme temperatures. Brightness exceeding 5,000 nits ensures vivid visibility even in direct sunlight. They are the go-to choice for concert stages, sports venues, building facades, and outdoor advertising in the Charlotte area and beyond.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="vc-product-card">
                <div className="vc-product-card__icon"><HiCursorClick /></div>
                <h4>Interactive Video Walls</h4>
                <p>
                  Combining large-format displays with multi-touch or gesture-recognition technology, interactive video walls invite audiences to engage directly with content. Museums use them for immersive exhibits, retailers deploy them for virtual try-on experiences, and corporate campuses create collaborative brainstorming surfaces. Touch overlays and infrared sensors support simultaneous inputs from multiple users.
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
              <h2 className="vc-section-title">Why ProVizion LED for Your Video Wall Project</h2>
              <p>
                Choosing the right partner for a video wall installation is just as important as selecting the right technology. ProVizion LED brings decades of combined experience in commercial display solutions, and we are based right here in Charlotte, NC. That means faster response times, hands-on site surveys, and ongoing local support you can count on long after the panels are powered on.
              </p>
              <p>
                Our process begins with a thorough consultation to understand your goals, space constraints, and content strategy. We then design a custom solution with detailed CAD renderings so you can visualize the finished product before a single panel is mounted. Our certified technicians handle every aspect of installation, from structural reinforcement and electrical work to network configuration and content management system programming.
              </p>
              <p>
                After installation, we offer comprehensive maintenance plans, remote monitoring, and content update services to keep your video wall performing at its best. Whether you need a single wall for a lobby or a multi-zone deployment across an entire campus, ProVizion LED delivers turnkey solutions backed by industry-leading warranties and dedicated local service.
              </p>
              <a href="#contact" className="vc-btn vc-btn--accent vc-btn--sm">Start Your Project <HiArrowRight /></a>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img src="/images/showcase/video-wall-installation.jpg" alt="ProVizion LED video wall installation in progress" loading="lazy" decoding="async" />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <FAQSection faqs={VIDEO_WALL_FAQS} title="Video Wall FAQs" />

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
            <h2 className="vc-section-title">Free Video Wall Consultation</h2>
            <div className="vc-content-block" style={{ margin: '0 auto' }}>
              <p>
                Ready to transform a blank wall into a breathtaking visual experience? Our display specialists will visit your location, evaluate the space, and present a tailored video wall proposal complete with technology recommendations, layout renderings, and transparent pricing. There is no obligation and no pressure, just expert guidance to help you make the best decision for your business.
              </p>
              <p>
                Contact ProVizion LED today and discover how a professionally designed video wall can elevate your brand, engage your audience, and set your space apart from the competition.
              </p>
            </div>
            <a href="#contact" className="vc-btn vc-btn--accent" style={{ marginTop: '16px' }}>
              Free Video Wall Consultation <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

    </>
  );
}
