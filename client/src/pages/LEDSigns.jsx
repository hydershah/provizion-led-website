import { Link } from 'react-router-dom';
import {
  HiLightningBolt,
  HiPhone,
  HiFilm,
  HiViewGrid,
  HiTemplate,
  HiSpeakerphone,
  HiClock,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';
import { COMPANY } from '../utils/constants';
import './ServicePage.css';

const whyLED = [
  {
    icon: <HiLightningBolt />,
    title: 'Dynamic & Versatile',
    desc: 'With programmable LED signs, brands can change messages on the fly, catering to different audiences or times of the day. Whether it\'s a high-brightness LED sign flashing a store\'s latest offer or interactive LED displays engaging users in real time, the dynamic nature of LED technology is unbeatable.',
  },
  {
    icon: <HiClock />,
    title: 'Energy-Efficient',
    desc: 'One of the strongest attributes of LED sign technology is its energy efficiency. LED display systems consume significantly less power than traditional lighting solutions, making them both environmentally friendly and cost-effective.',
  },
  {
    icon: <HiLightningBolt />,
    title: 'Indoor & Outdoor Brilliance',
    desc: 'Whether you\'re looking for outdoor LED signs to withstand the elements or sleek indoor LED signs for a corporate setting, LED technology delivers vibrant clarity in all environments.',
  },
];

const ledTypes = [
  { icon: <HiFilm />, title: 'LED Video Displays & Walls', desc: 'Perfect for events, concerts, and corporate presentations, these systems provide high-definition visuals that can make any content come alive.' },
  { icon: <HiViewGrid />, title: 'LED Message Centers & Boards', desc: 'Ideal for businesses looking to deliver real-time updates, promotions, or general information to their clientele.' },
  { icon: <HiTemplate />, title: 'LED Screen Panels & Display Boards', desc: 'These versatile pieces can be assembled in unique configurations, providing custom LED signs tailored to specific spaces and needs.' },
  { icon: <HiSpeakerphone />, title: 'LED Advertising & Billboard Displays', desc: 'Elevate brand messages with larger-than-life displays that capture attention from miles away.' },
  { icon: <HiClock />, title: 'LED Sign Rentals', desc: 'Perfect for one-off events or businesses that require LED solutions temporarily.' },
];

export default function LEDSigns() {
  return (
    <>
      <SEO
        title="LED Signs & Displays"
        description="ProVizion LED offers state-of-the-art LED signs and displays in Charlotte, NC. Programmable LED signs, LED video walls, message centers, and custom LED solutions. Call (984) 217-6527."
        keywords="LED signs, LED displays, LED video walls, LED message boards, programmable LED signs, outdoor LED signs, indoor LED signs, LED sign manufacturer"
        path="/led-signs"
      />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src="/images/led-signs-closeup.jpg"
            alt=""
            className="page-hero__bg-image"
            width="800"
            height="600"
            loading="eager"
          />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__inner">
          <AnimateOnScroll>
            <span className="section-label page-hero__label">LED Signs & Displays</span>
            <h1 className="page-hero__title">
              LED Signs <span className="text-accent">&</span> Displays
            </h1>
            <p className="page-hero__desc">
              In today&apos;s fast-paced digital age, LED signs and displays have emerged as the
              front-runners in the realm of visual communication. Their vibrant and dynamic
              presentations capture attention, leaving a lasting impression on viewers.
            </p>
            <p className="page-hero__desc">
              LED technology not only brings messages to life but also infuses a modern and
              sophisticated touch into any setting. Whether it&apos;s a bustling urban landscape
              or a peaceful indoor space, LED signage offers limitless possibilities for brands
              to engage, inform, and entertain their audiences.
            </p>
            <div className="page-hero__cta">
              <Link to="/contact-us" className="btn btn--primary btn--lg">Get A Free Quote</Link>
              <a href={COMPANY.phoneTel} className="btn btn--outline btn--lg">
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHY LED SIGNAGE */}
      <section className="section section--lg service-content-section">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why Choose LED Signage?</h2>
          </AnimateOnScroll>

          <StaggerContainer className="service-features-grid">
            {whyLED.map((item) => (
              <StaggerItem key={item.title}>
                <div className="service-feature card">
                  <div className="service-feature__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll>
            <div className="inline-cta">
              <p>
                Call ProVizion LED at{' '}
                <a href={COMPANY.phoneTel} className="text-accent">{COMPANY.phone}</a>{' '}
                for your free consultation with an LED Signs Expert!
              </p>
              <Link to="/contact-us" className="btn btn--primary">Get A Free Quote</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* LED DISPLAY TYPES */}
      <section className="section section--lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Products</span>
            <h2 className="section-title">Exploring the Expansive World of LED Displays</h2>
            <p className="section-subtitle">
              From LED screen displays that transform entire building facades into digital
              canvases, to LED video walls that offer an immersive cinematic experience,
              the applications of LED are vast and varied.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="service-types-grid">
            {ledTypes.map((item) => (
              <StaggerItem key={item.title}>
                <div className="service-type-card">
                  <div className="service-type-card__icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll>
            <p className="service-closing-text">
              As LED technology continues to advance, we can anticipate even more exciting
              developments and applications in the future, enhancing how businesses engage with
              their audiences and leaving a lasting impact in the world of visual communication.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHY PARTNER WITH US */}
      <section className="section section--lg">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Our Advantage</span>
            <h2 className="section-title">Why Partner with ProVizion LED for Your LED Needs?</h2>
          </AnimateOnScroll>

          <div className="service-two-col">
            <AnimateOnScroll>
              <div className="service-text-block">
                <p>
                  There&apos;s no shortage of LED display manufacturers &ldquo;near me,&rdquo; but ProVizion LED
                  stands apart as a true LED sign specialist.
                </p>
                <p>
                  Our suite of LED signage solutions ranges from affordable LED signs for small
                  businesses to intricate LED display advertising systems for large enterprises.
                  We take pride in our ability to design, manufacture, and install LED displays
                  that not only meet but exceed our clients&apos; expectations.
                </p>
                <p>
                  With years of industry experience, we have honed the art of creating impactful
                  LED solutions. Our team of experts remains at the forefront of LED technology
                  trends, ensuring that our clients have access to the latest advancements in
                  visual communication.
                </p>
                <p>
                  When you partner with us, you&apos;re not just getting a product; you&apos;re getting a
                  comprehensive LED signage solution tailored to your unique needs, backed by our
                  unwavering commitment to excellence.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="scaleIn">
              <div className="service-logo-block">
                <img
                  src={COMPANY.logoFull}
                  alt="ProVizion LED Logo"
                  width="400"
                  height="200"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ELEVATE CTA */}
      <section className="section section--lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Get Started</span>
            <h2 className="section-title">Elevate Your Brand with ProVizion LED</h2>
            <div className="service-text-block" style={{ maxWidth: '800px' }}>
              <p>
                Ready to explore the world of digital signs, electronic displays, and more?
                Whether you&apos;re considering LED display screens for an event or LED message
                centers for your storefront, ProVizion LED is your trusted guide.
              </p>
              <p>
                Experience the difference of partnering with an LED sign manufacturer who
                understands the nuances of LED sign technology, offers LED sign rentals, and
                prioritizes customer satisfaction above all.
              </p>
              <p>
                Discover the brilliance of LED with a team that&apos;s as passionate about your
                brand&apos;s success as you are. Our expert consultants are ready to discuss your
                specific goals and requirements, offering tailored solutions to meet your unique
                needs.
              </p>
              <p>
                Don&apos;t miss the opportunity to elevate your brand with the power of LED
                technology – contact ProVizion LED now for a brighter future!
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section className="section section--lg service-quote-section">
        <div className="container service-quote-inner">
          <AnimateOnScroll>
            <div className="service-quote-text">
              <span className="section-label">Free Consultation</span>
              <h2 className="section-title">Quick & Same-Day Quotes</h2>
              <p className="section-subtitle">
                Call ProVizion LED at{' '}
                <a href={COMPANY.phoneTel} className="text-accent">{COMPANY.phone}</a>{' '}
                for your free consultation with an LED sign expert!
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="scaleIn">
            <div className="service-quote-form-card">
              <QuoteForm source="quick-quote" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
