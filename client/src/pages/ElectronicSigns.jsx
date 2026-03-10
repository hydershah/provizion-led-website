import { Link } from 'react-router-dom';
import {
  HiLightningBolt,
  HiPhone,
  HiChatAlt2,
  HiCursorClick,
  HiGlobe,
  HiSparkles,
  HiPresentationChartBar,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';
import { COMPANY } from '../utils/constants';
import './ServicePage.css';

const whyElectronic = [
  {
    icon: <HiChatAlt2 />,
    title: 'Dynamic & Engaging',
    desc: 'These dynamic displays spark conversations, transforming your message into an interactive and engaging experience. Customizable to match your brand\'s identity, electronic signage reigns supreme in personalization, guaranteeing your distinct presence stands out.',
  },
  {
    icon: <HiCursorClick />,
    title: 'Interactive Adventures',
    desc: 'We bring the future to your fingertips with interactive digital boards and touchscreen displays that captivate and engage your audience.',
  },
  {
    icon: <HiGlobe />,
    title: 'Unparalleled Versatility',
    desc: 'Indoors or outdoors, handheld or building-spanning, electronic displays offer unparalleled versatility, effortlessly adapting to your space, needs, and message. Enhance your brand\'s communication with the power of electronic signs today.',
  },
];

const whyProvizion = [
  {
    icon: <HiSparkles />,
    title: 'Tailored Just for You',
    desc: 'Our custom electronic signs are not off-the-rack; they are tailor-made to suit your business persona.',
  },
  {
    icon: <HiLightningBolt />,
    title: 'Innovation Meets Expertise',
    desc: 'Our LED digital signage and high-resolution digital signs are crafted using the latest technology, ensuring your message is not just seen but remembered.',
  },
  {
    icon: <HiCursorClick />,
    title: 'Interactive Adventures',
    desc: 'We bring the future to your fingertips with interactive digital boards and touchscreen displays that captivate and engage your audience.',
  },
];

export default function ElectronicSigns() {
  return (
    <>
      <SEO
        title="Electronic Signs & Displays"
        description="ProVizion LED offers state-of-the-art electronic signs and displays in Charlotte, NC. Interactive digital boards, LED digital signage, and custom electronic signage solutions. Call (984) 217-6527."
        keywords="electronic signs, electronic displays, interactive digital boards, LED digital signage, electronic message boards, custom electronic signs, electronic sign manufacturer"
        path="/electronic-signs"
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
            <span className="section-label page-hero__label">Electronic Signs &amp; Displays</span>
            <h1 className="page-hero__title">
              Electronic Signs <span className="text-accent">&amp;</span> Displays
            </h1>
            <p className="page-hero__desc">
              In this dynamic world of electronic signs and displays, your brand&apos;s message can
              go beyond the boundaries of traditional advertising.
            </p>
            <p className="page-hero__desc">
              Whether it&apos;s an eye-catching LED billboard on a bustling street, an interactive
              kiosk in a shopping mall, or a sleek digital menu board at a trendy restaurant,
              electronic displays have the power to captivate, inform, and inspire.
            </p>
            <p className="page-hero__desc">
              With the ability to deliver real-time updates, engage users through touchscreen
              interactions, and adapt to versatile applications, electronic signs are the
              modern storytellers of our digital age, allowing your brand to shine brighter and
              connect with your audience like never before.
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

      {/* THE ELECTRIFYING WORLD */}
      <section className="section section--lg service-content-section">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Why Electronic Signs</span>
            <h2 className="section-title">The Electrifying World of Electronic Signage</h2>
            <div className="service-text-block" style={{ maxWidth: '800px' }}>
              <p>
                In today&apos;s competitive landscape, electronic signs elevate your brand, ensuring
                it stands out amid the clutter. These signs are more than just tools; they serve
                as your brand&apos;s megaphone, broadcasting your message with clarity and style.
              </p>
              <p>
                Whether it&apos;s a commanding outdoor display or a subtle indoor sign that guides
                and informs, each sign offers an opportunity to showcase your brand&apos;s identity and
                captivate your audience.
              </p>
              <p>
                With the power to deliver dynamic content, engage customers interactively, and
                adapt to diverse spaces and messages, electronic signs are a versatile and
                essential asset in modern branding and marketing strategies. They enable you to
                establish a strong presence, communicate effectively, and shine in a visually
                saturated world, making your brand memorable and influential in your industry.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="inline-cta">
              <p>
                Call ProVizion LED at{' '}
                <a href={COMPANY.phoneTel} className="text-accent">{COMPANY.phone}</a>{' '}
                for your free consultation with a custom electronic signage expert!
              </p>
              <Link to="/contact-us" className="btn btn--primary">Get A Free Quote</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* WHY ELECTRONIC SIGNS */}
      <section className="section section--lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Benefits</span>
            <h2 className="section-title">Why Should Electronic Signs Be Your Go-To?</h2>
            <p className="section-subtitle">
              When it comes to charming your audience and leaving a lasting impression,
              electronic signs take center stage.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="service-features-grid">
            {whyElectronic.map((item) => (
              <StaggerItem key={item.title}>
                <div className="service-feature card">
                  <div className="service-feature__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* WHERE ELECTRONIC SIGNAGE SPEAKS VOLUMES */}
      <section className="section section--lg service-content-section">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Our Expertise</span>
            <h2 className="section-title">ProVizion LED: Where Electronic Signage Speaks Volumes</h2>
            <p className="section-subtitle">
              In the search for &lsquo;electronic signs near me,&rsquo; you&apos;ll find many options, but none
              quite like ProVizion LED. Why are we the talk of the town?
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="service-features-grid">
            {whyProvizion.map((item) => (
              <StaggerItem key={item.title}>
                <div className="service-feature card">
                  <div className="service-feature__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PAINT YOUR BRAND'S DIGITAL CANVAS */}
      <section className="section section--lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Your Vision</span>
            <h2 className="section-title">Paint Your Brand&apos;s Digital Canvas with ProVizion LED</h2>
            <div className="service-text-block" style={{ maxWidth: '800px' }}>
              <p>
                Visualize your brand story unfolding across an electronic message board, or
                imagine your campaign on an LED sign, bold and bright against the night sky.
              </p>
              <p>
                This isn&apos;t just a dream; it&apos;s what we do at ProVizion LED. With our cutting-edge
                technology and expertise, we transform your concepts into stunning electronic
                displays that captivate your audience. Whether you&apos;re looking to share real-time
                information, promote products, or simply make a memorable statement, our
                electronic signs are the canvases upon which your brand&apos;s most compelling narratives
                come to life.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* YOUR BRAND DESERVES TO BE SEEN */}
      <section className="section section--lg">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Stand Out</span>
            <h2 className="section-title">Your Brand Deserves to Be Seen and Heard</h2>
          </AnimateOnScroll>

          <div className="service-two-col">
            <AnimateOnScroll>
              <div className="service-text-block">
                <p>
                  Don&apos;t let your brand whisper when it could resonate. Electronic advertising
                  signs and commercial electronic displays are your ticket to the big leagues of brand
                  communication. In a world where attention spans are fleeting and competition is
                  fierce, it&apos;s crucial to make your brand stand out.
                </p>
                <p>
                  Electronic signs give your brand a powerful voice that can be seen and heard,
                  capturing the attention of your target audience and leaving a lasting impression.
                </p>
                <p>
                  With the dynamic capabilities of electronic signs, you can convey your brand
                  message with flair and impact. Whether it&apos;s through vivid visuals, real-time
                  updates, or interactive experiences, electronic displays offer a versatile platform to
                  engage and connect with your audience.
                </p>
                <p>
                  Elevate your brand&apos;s visibility, reinforce your identity, and make a statement
                  that resonates with customers. Choose electronic signs and displays to ensure your
                  brand is not just seen but heard in a crowded marketplace.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="scaleIn">
              <div className="service-logo-block">
                <img
                  src={COMPANY.logoFull}
                  alt="ProVizion LED Electronic Signs"
                  width="400"
                  height="200"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* STEP INTO THE SPOTLIGHT */}
      <section className="section section--lg" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Get Started</span>
            <h2 className="section-title">Step into the Spotlight with ProVizion LED</h2>
            <div className="service-text-block" style={{ maxWidth: '800px' }}>
              <p>
                Ready to cast your brand in the best possible light? Eager to see how our
                digital display solutions can catapult your message into the public eye?
              </p>
              <p>
                When you reach out to us, you&apos;re not just seeking a service; you&apos;re embarking on
                a journey of transformation.
              </p>
              <p>
                During our FREE consultation, we&apos;ll dive deep into your brand&apos;s objectives,
                goals, and challenges. Our expert team will work closely with you to understand your
                unique needs and craft a customized solution that aligns perfectly with your
                vision.
              </p>
              <p>
                Whether you&apos;re looking to upgrade your storefront with a stunning LED display,
                engage your audience with interactive digital signage, or explore any other
                digital display possibilities, we&apos;ve got you covered. We pride ourselves on being at
                the forefront of digital display technology, so you can trust us to deliver
                cutting-edge solutions that leave a lasting impact.
              </p>
              <p>
                Don&apos;t miss this opportunity to step into the spotlight and transform your
                brand&apos;s presence. Contact ProVizion LED today, and let&apos;s embark on a digital journey
                that will elevate your brand to new heights!
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
              <span className="section-label">Get A Free Quote</span>
              <h2 className="section-title">Quick &amp; Same-Day Quotes</h2>
              <p className="section-subtitle">
                Call ProVizion LED at{' '}
                <a href={COMPANY.phoneTel} className="text-accent">{COMPANY.phone}</a>{' '}
                for your free consultation with an electronic signage expert!
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="scaleIn">
            <div className="service-quote-form-card">
              <QuoteForm source="electronic-signs" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
