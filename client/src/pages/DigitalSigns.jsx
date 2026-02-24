import { Link } from 'react-router-dom';
import {
  HiPhone,
  HiRefresh,
  HiCursorClick,
  HiColorSwatch,
  HiDesktopComputer,
  HiLightningBolt,
  HiSpeakerphone,
  HiSun,
  HiCode,
  HiCheckCircle,
  HiStar,
  HiShieldCheck,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';
import { COMPANY } from '../utils/constants';
import './ServicePage.css';

const riseFactors = [
  { icon: <HiRefresh />, title: 'Dynamic Content', desc: 'Digital signage allows for real-time updates, making it easy to promote events, adjust menus, or share news quickly and effectively.' },
  { icon: <HiCursorClick />, title: 'Interactive Experiences', desc: 'Interactive displays engage users, offering personalized interactions such as browsing product catalogs or exploring maps. This enhances engagement and fosters brand loyalty.' },
  { icon: <HiColorSwatch />, title: 'Versatile Applications', desc: 'Digital displays are incredibly versatile, finding use in various industries and settings. From stunning LED video walls at events to promotional screens in retail, they adapt to diverse needs.' },
];

const signageTypes = [
  { icon: <HiDesktopComputer />, title: 'Commercial Digital Signage', desc: 'Ideal for businesses wanting to create a visual impact, be it in retail, hospitality, or corporate sectors.' },
  { icon: <HiLightningBolt />, title: 'LED Signs & Electronic Signage', desc: 'A match made in heaven, combining the brilliance of LED with the versatility of digital technology.' },
  { icon: <HiSpeakerphone />, title: 'Digital Advertising Boards & Screens', desc: 'Transform your advertising strategy, making it more engaging and visually appealing.' },
  { icon: <HiSun />, title: 'Indoor & Outdoor Digital Signs', desc: 'Whether you\'re looking to dazzle inside a mall or stand out in the open, there\'s a solution tailored for every need.' },
  { icon: <HiCode />, title: 'Digital Signage Software & CMS', desc: 'Managing content for digital signs has never been easier, thanks to advanced digital signage software and content management systems.' },
];

const whyUs = [
  { icon: <HiCheckCircle />, title: 'Custom Digital Signs', desc: 'We believe every brand has a unique story, and we craft bespoke digital displays to tell yours.' },
  { icon: <HiStar />, title: 'End-to-End Digital Signage Services', desc: 'From the initial concept to installation, we handle everything, ensuring your signage is impeccable.' },
  { icon: <HiRefresh />, title: 'Latest in Digital Display Solutions', desc: 'Our team stays updated with industry trends, ensuring you get the most modern solutions.' },
  { icon: <HiShieldCheck />, title: 'Reliability', desc: 'Years of experience coupled with cutting-edge technology make us a trusted partner for all your digital signage needs.' },
];

export default function DigitalSigns() {
  return (
    <>
      <SEO
        title="Digital Signs and Displays"
        description="ProVizion LED provides cutting-edge digital signs and displays in Charlotte, NC. Commercial digital signage, electronic displays, digital menu boards, and custom digital solutions. Call (984) 217-6527."
        keywords="digital signs, digital displays, digital signage, electronic signage, commercial digital signage, digital menu boards, digital advertising, LED video walls"
        path="/digital-signs"
      />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src="/images/digital-signage-urban.jpg"
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
            <span className="section-label page-hero__label">Digital Signs and Displays</span>
            <h1 className="page-hero__title">
              Digital Signs <span className="text-accent">&</span> Displays
            </h1>
            <p className="page-hero__desc">
              Modern digital signs and displays have revolutionized the way businesses and
              public spaces connect with their audiences. In airports, they efficiently guide
              travelers, offer real-time flight updates, and keep passengers entertained during
              waits. Similarly, in retail, digital menu boards have transformed how restaurants
              showcase their offerings, featuring dynamic pricing updates, seasonal promotions,
              and enticing food displays to engage customers.
            </p>
            <p className="page-hero__desc">
              As technology advances, digital signs and displays are evolving, offering
              increasingly immersive and interactive experiences. From retail store touchscreens
              providing product information to augmented reality displays enriching educational
              value in museums, these innovations are shaping the future of how information is
              conveyed and experienced in public spaces.
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

      {/* THE RISE OF DIGITAL SIGNAGE */}
      <section className="section section--lg service-content-section">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Digital Signage</span>
            <h2 className="section-title">The Rise of Digital Signage</h2>
            <p className="section-subtitle">
              Digital signs have redefined the advertising landscape by providing businesses
              with a versatile and attention-grabbing platform. Unlike traditional static
              signs, digital displays allow for real-time updates and dynamic content, making it
              easier to adapt to changing marketing strategies and promotions.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="service-factors-grid">
            {riseFactors.map((item) => (
              <StaggerItem key={item.title}>
                <div className="service-factor-card">
                  <div className="service-factor-card__icon">{item.icon}</div>
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
                for your free consultation with a Custom Digital Signage Expert!
              </p>
              <Link to="/contact-us" className="btn btn--primary">Get A Free Quote</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* DEEPER INTO DIGITAL SIGNAGE */}
      <section className="section section--lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Solutions</span>
            <h2 className="section-title">Venturing Deeper into the Digital Signage World</h2>
            <p className="section-subtitle">
              The realm of digital signs and displays is vast, and here are some facets you
              might consider.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="service-list-grid">
            {signageTypes.map((item) => (
              <StaggerItem key={item.title}>
                <div className="service-list-item">
                  <div className="service-list-item__icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* WHY PROVIZION */}
      <section className="section section--lg">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Our Advantage</span>
            <h2 className="section-title">
              Why ProVizion LED Should Be Your Go-To for Digital Signage Solutions
            </h2>
            <p className="section-subtitle">
              You might wonder, &ldquo;With so many options for digital signage &lsquo;near me signs&rsquo;,
              why choose ProVizion LED?&rdquo; Here&apos;s why:
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="service-factors-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {whyUs.map((item) => (
              <StaggerItem key={item.title}>
                <div className="service-factor-card">
                  <div className="service-factor-card__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* JOURNEY BEGINS */}
      <section className="section section--lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="service-two-col">
            <AnimateOnScroll>
              <div>
                <span className="section-label">Your Journey</span>
                <h2 className="section-title">Your Digital Signage Journey Begins Here</h2>
                <div className="service-text-block">
                  <p>
                    Navigating the world of digital signs and displays can seem daunting, but with
                    ProVizion LED, it becomes an exciting journey. We&apos;re not just a service
                    provider; we&apos;re your partners in crafting digital stories that resonate.
                  </p>
                  <p>
                    With our expertise, cutting-edge technology, and commitment to innovation, we
                    ensure your digital signage strategy evolves with the times. We&apos;re here to
                    guide you, whether you&apos;re enhancing customer experiences, increasing brand
                    visibility, or simply exploring the boundless possibilities of digital signage.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="scaleIn">
              <div className="service-logo-block">
                <img
                  src={COMPANY.logoFull}
                  alt="ProVizion LED Digital Sign Company Logo"
                  width="400"
                  height="200"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FREE CONSULTATION CTA */}
      <section className="section section--lg">
        <div className="container container--narrow text-center">
          <AnimateOnScroll>
            <span className="section-label" style={{ justifyContent: 'center' }}>Free Consultation</span>
            <h2 className="section-title">Free Digital Sign Consultation</h2>
            <div className="service-text-block" style={{ textAlign: 'center' }}>
              <p>
                Ready to transform the way your brand communicates? Keen to explore digital menu
                boards, LED walls, or commercial display systems?
              </p>
              <p>
                Our team of experts will work closely with you to understand your unique needs
                and objectives. We&apos;ll tailor a digital signage solution that not only meets your
                requirements but exceeds your expectations.
              </p>
              <p>
                Join us in harnessing the power of digital signs and displays to captivate your
                audience and elevate your brand&apos;s presence. Contact us today and take the first
                step toward a brighter, more engaging future!
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
              <span className="section-label">Get Quote</span>
              <h2 className="section-title">Quick & Same-Day Quotes</h2>
              <p className="section-subtitle">
                Call ProVizion LED at{' '}
                <a href={COMPANY.phoneTel} className="text-accent">{COMPANY.phone}</a>{' '}
                for your free consultation with a Digital Signage Expert!
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
