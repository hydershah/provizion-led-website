import { Link } from 'react-router-dom';
import {
  HiLightningBolt,
  HiPhone,
  HiSparkles,
  HiMoon,
  HiSun,
  HiColorSwatch,
  HiPencilAlt,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';
import { COMPANY } from '../utils/constants';
import './ServicePage.css';

const signTypes = [
  {
    icon: <HiLightningBolt />,
    title: 'LED Lighted Signs',
    desc: 'Pairing luminosity with longevity, our LED signs are not just brilliant; they\'re smart. Energy-efficient and programmable, they are the sentinels of sustainability.',
  },
  {
    icon: <HiSun />,
    title: 'Outdoor Lighted Signs',
    desc: 'Built to brave the elements, these signs stand as landmarks of your presence. Robust, radiant, and resilient, they\'re your outdoor voice.',
  },
  {
    icon: <HiColorSwatch />,
    title: 'Neon Signs',
    desc: 'The classic charm of neon brings a retro-cool vibe, infusing your brand with a timeless character that\'s impossible to ignore.',
  },
  {
    icon: <HiPencilAlt />,
    title: 'Custom Lighted Signs',
    desc: 'Unique as your brand, our custom signs are born from a blend of your vision and our creativity. If you dream it, we can illuminate it.',
  },
];

export default function LightedSigns() {
  return (
    <>
      <SEO
        title="Lighted, Illuminated, & Backlit Signs"
        description="ProVizion LED crafts lighted, illuminated, and backlit signs in Charlotte, NC. LED lighted signs, neon signs, outdoor lighted signs, and custom illuminated signage. Call (984) 217-6527."
        keywords="lighted signs, illuminated signs, backlit signs, LED lighted signs, neon signs, outdoor lighted signs, custom lighted signs, lighted sign manufacturer"
        path="/lighted-signs"
      />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src="/images/commercial-building.jpg"
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
            <span className="section-label page-hero__label">Lighted, Illuminated, &amp; Backlit Signs</span>
            <h1 className="page-hero__title">
              Lighted, Illuminated, <span className="text-accent">&amp;</span> Backlit Signs
            </h1>
            <p className="page-hero__desc">
              In the twinkling skyline of business avenues, where every storefront and office
              fa&ccedil;ade is a narrative, one protagonist shines brighter than the rest: Lighted
              signs.
            </p>
            <p className="page-hero__desc">
              They are the unsung heroes making sure your brand doesn&apos;t just communicate but
              dazzles. Welcome to the illuminated chapter of signage, where ProVizion LED turns
              light into a potent messenger for your brand. Our expertise in crafting
              captivating illuminated signs ensures that your business doesn&apos;t just blend into the
              cityscape but becomes a beacon of distinction.
            </p>
            <p className="page-hero__desc">
              With our innovative designs and state-of-the-art lighting solutions, we
              transform your storefront into an eye-catching spectacle that draws customers in day and
              night, ensuring your brand&apos;s presence is always in the spotlight.
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

      {/* THE BRILLIANCE OF ILLUMINATED SIGNS */}
      <section className="section section--lg service-content-section">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">The Art of Light</span>
            <h2 className="section-title">The Brilliance of Illuminated Signs</h2>
            <div className="service-text-block" style={{ maxWidth: '800px' }}>
              <p>
                As dusk falls, a transformation begins. The muted colors of daytime facades give
                way to a glowing dance of lights.
              </p>
              <p>
                This is the power of lighted signs &ndash; they transform the night into a canvas for
                visibility. From the warm allure of neon signs to the sleek glow of LED lighted
                signs, ProVizion LED crafts each piece with the promise of quality and impact.
              </p>
              <p>
                Our team of skilled artists and designers work meticulously to create
                illuminated signs that not only enhance your brand&apos;s visibility but also add an enchanting
                ambiance to your business. We understand that the right lighting can evoke
                emotions and leave a lasting impression, and that&apos;s precisely what our illuminated
                signs aim to achieve.
              </p>
              <p>
                Whether it&apos;s a classic neon sign that exudes nostalgia or an LED display that
                demands attention, our illuminated signs are designed to captivate and inspire.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="inline-cta">
              <p>
                Call ProVizion LED at{' '}
                <a href={COMPANY.phoneTel} className="text-accent">{COMPANY.phone}</a>{' '}
                for your free consultation with a lighted signs expert!
              </p>
              <Link to="/contact-us" className="btn btn--primary">Get A Free Quote</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHY OPT FOR LIGHTED SIGNAGE */}
      <section className="section section--lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Benefits</span>
            <h2 className="section-title">Why Opt for Lighted Signage?</h2>
            <div className="service-text-block" style={{ maxWidth: '800px' }}>
              <p>
                Picture this: A potential customer strolls through the streets, their eyes
                inadvertently drawn to a radiant display &ndash; your business, lit by a custom-lighted
                sign that tells your story even from afar.
              </p>
              <p>
                Whether it&apos;s sleek channel letters that spell sophistication or a backlit sign
                that radiates allure, lighted signs are like beacons in the night, guiding
                customers to your doorstep.
              </p>
              <p>
                With ProVizion LED&apos;s expertly crafted lighted signs, you&apos;re not just
                illuminating your brand; you&apos;re illuminating the path to success, ensuring your business
                stands out in the crowded landscape, day or night.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* THE SPECTRUM OF CHOICES */}
      <section className="section section--lg">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Our Selection</span>
            <h2 className="section-title">The Spectrum of Choices at ProVizion LED</h2>
            <p className="section-subtitle">
              At ProVizion LED, we understand that variety is the spice of life &ndash; and
              business. That&apos;s why our selection of lighted signs and displays is as diverse as the
              businesses we serve.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="service-features-grid">
            {signTypes.map((item) => (
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
            <p className="service-closing-text">
              With ProVizion LED, your choices are illuminated, and your brand shines brightly
              in any setting.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FROM DESIGN TO GLOW */}
      <section className="section section--lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Our Process</span>
            <h2 className="section-title">From Design to Glow: Our Process</h2>
            <div className="service-text-block" style={{ maxWidth: '800px' }}>
              <p>
                Every sign&apos;s journey at ProVizion LED begins with a vision &ndash; your vision. Our
                design maestros, armed with the latest in sign lighting technology and a penchant
                for perfection, translate your brand into a lighted masterpiece.
              </p>
              <p>
                With meticulous lighted sign installation, we ensure that every bulb, every LED,
                and every neon tube is a testament to durability and excellence. Our goal is
                not just to create a sign; it&apos;s to craft an enduring beacon that represents your
                brand with brilliance and longevity.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* LIGHT UP THE PATH */}
      <section className="section section--lg">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Versatile Solutions</span>
            <h2 className="section-title">Light Up the Path to Your Doorstep</h2>
          </AnimateOnScroll>

          <div className="service-two-col">
            <AnimateOnScroll>
              <div className="service-text-block">
                <p>
                  Why settle for ordinary when your sign can be a landmark? Illuminate your
                  business with exterior lighted signs that demand attention, or craft an indoor
                  ambiance with backlit signs that speak volumes in hushed tones.
                </p>
                <p>
                  At ProVizion LED, we&apos;re not just about signs; we&apos;re about spotlights. Our
                  exterior lighted signs are more than just markers; they&apos;re beacons that guide
                  customers to your doorstep.
                </p>
                <p>
                  With a range of options, from attention-grabbing LED signs
                  to the classic charm of neon, we can help you choose the perfect outdoor lighted
                  sign that suits your brand&apos;s personality and ensures your business stands out,
                  day and night.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="service-text-block">
                <h3>Your Next Bright Idea Awaits</h3>
                <p>
                  Are you searching for the best illuminated signs near your cozy city corner?
                  Look no further. ProVizion LED is your local luminary, your partner in highlighting
                  what makes your brand stand out.
                </p>
                <p>
                  With a keen eye for design and an unwavering
                  commitment to quality, we bring your ideas to life through stunning illumination.
                </p>
                <p>
                  Our team of experts understands the nuances of illumination, whether it&apos;s the
                  subtle warmth of a backlit sign or the vibrant allure of an LED display. We&apos;re not
                  just in the business of creating signs; we&apos;re in the business of making your
                  brand shine. Let your next bright idea come to life with ProVizion LED, and watch
                  as your business becomes a beacon in your community.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll>
            <div className="inline-cta">
              <p>
                Call ProVizion LED at{' '}
                <a href={COMPANY.phoneTel} className="text-accent">{COMPANY.phone}</a>{' '}
                for your free consultation with a lighted signage expert!
              </p>
              <Link to="/contact-us" className="btn btn--primary">Get A Free Quote</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* THE SPOTLIGHT IS YOURS */}
      <section className="section section--lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Your Brand</span>
            <h2 className="section-title">The Spotlight is Yours</h2>
            <div className="service-text-block" style={{ maxWidth: '800px' }}>
              <p>
                With a spectrum of lighted signage solutions at your disposal, the question
                isn&apos;t if you should light up your brand, but how bright you want to shine. Ready to
                cast a new light on your business?
              </p>
              <p>
                At ProVizion LED, we believe that every business is unique, and we&apos;re here to
                tailor our lighted sign solutions to your specific needs. Whether you&apos;re looking
                for outdoor LED signs that can withstand the elements, indoor backlit signs to
                create a warm and inviting atmosphere, or custom neon signs that exude retro
                charm, we&apos;ve got you covered.
              </p>
              <p>
                Our team of experts is not just skilled in crafting signs; we&apos;re passionate
                about helping your brand shine in the best possible way. We understand that your
                sign isn&apos;t just a piece of equipment; it&apos;s an extension of your brand&apos;s identity.
                That&apos;s why we pay attention to every detail, from design to installation, to
                ensure that your lighted sign reflects the essence of your business.
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
              <h2 className="section-title">Quick &amp; Same-Day Quotes</h2>
              <p className="section-subtitle">
                Call ProVizion LED at{' '}
                <a href={COMPANY.phoneTel} className="text-accent">{COMPANY.phone}</a>{' '}
                for your free consultation with a lighted sign expert!
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="scaleIn">
            <div className="service-quote-form-card">
              <QuoteForm source="lighted-signs" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
