import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiLightningBolt,
  HiDesktopComputer,
  HiSun,
  HiCube,
  HiViewGrid,
  HiChip,
  HiPencilAlt,
  HiCog,
  HiTruck,
  HiShieldCheck,
  HiSparkles,
  HiPhone,
  HiStar,
  HiCheckCircle,
  HiGlobe,
  HiUserGroup,
  HiRefresh,
  HiEye,
  HiLocationMarker,
} from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import { AnimateOnScroll, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';
import { COMPANY } from '../utils/constants';
import './Home.css';

const offerings = [
  {
    icon: <HiLightningBolt />,
    title: 'LED Signs',
    desc: 'Experience the brilliance of our state-of-the-art LED signs. With vibrant colors and unmatched clarity, these signs are perfect for businesses wanting to make a bold and energy-efficient statement. Our cutting edge heat management process, ensures that your LED signs are long lasting and less prone to dimming due to heat.',
    link: '/led-signs',
  },
  {
    icon: <HiDesktopComputer />,
    title: 'Digital Sign Displays',
    desc: 'Elevate your brand with our cutting-edge digital sign displays. Whether it\'s showcasing promotional content or sharing real-time information, our displays offer unparalleled versatility and visual appeal.',
    link: '/digital-signs',
  },
  {
    icon: <HiSun />,
    title: 'Lighted Signs',
    desc: 'Illuminate your brand\'s presence, day and night with our precision-crafted lighted signs. We guarantee consistent brightness and a commanding presence that boosts visibility.',
  },
  {
    icon: <HiCube />,
    title: 'LED Monument Signs',
    desc: 'A perfect blend of grandeur and technology, our LED monument signs are a testament to our commitment to excellence. These signs are not only visually striking but also serve as landmarks that cement your brand\'s position in the landscape.',
  },
  {
    icon: <HiViewGrid />,
    title: 'LED Message Boards',
    desc: 'Share dynamic content with the world using our LED message boards. Ideal for businesses wanting to communicate ever-changing messages or promotions, these boards are easy to update and always capture attention.',
  },
  {
    icon: <HiChip />,
    title: 'Electronic Message Boards',
    desc: 'Combining sophisticated technology with user-friendly interfaces, our electronic message boards allow for seamless content updates. Whether it\'s for schools, businesses, or public facilities, they are a reliable way to keep audiences informed and engaged.',
  },
];

const processSteps = [
  {
    icon: <HiPencilAlt />,
    title: 'Tailored Design Solutions',
    desc: 'Every brand has a unique story, and we start by listening to yours. Our team of seasoned designers dives deep to grasp your vision, creating designs that align with your brand\'s identity and engage your target audience. Using cutting-edge design software and tools, we transform your ideas into visuals that make a lasting impact.',
    step: '01',
  },
  {
    icon: <HiCog />,
    title: 'Precision in Fabrication',
    desc: 'Crafting a sign requires a perfect blend of artistry and technical expertise. Our fabrication process, driven by premium materials and advanced machinery, guarantees that every sign is a masterpiece – robust, elegant, and a true reflection of your brand.',
    step: '02',
  },
  {
    icon: <HiTruck />,
    title: 'Digital Sign Installation',
    desc: 'Installation goes beyond mere sign placement. It\'s about maximizing visibility and impact. Our expert team considers crucial factors—like location, lighting, and angle—to securely position your digital signs, ensuring they command the attention they deserve.',
    step: '03',
  },
  {
    icon: <HiShieldCheck />,
    title: 'Maintenance for Longevity',
    desc: 'A sign\'s job isn\'t over once it\'s up; it needs regular care to maintain its glow and functionality. From routine check-ups to addressing wear and tear, our maintenance services ensure that your signs remain as vibrant and effective as they were on day one.',
    step: '04',
  },
  {
    icon: <HiSparkles />,
    title: 'Custom Digital Displays & Electronic Signage',
    desc: 'In today\'s digital era, signs have transformed into dynamic, interactive displays. Our custom digital displays are crafted to deliver maximum engagement, boasting interactive touchpoints, lively animations, and real-time updates. Our electronic signage solutions are versatile and ideal for diverse settings, from vibrant trade shows to tranquil office lobbies.',
    step: '05',
  },
];

const installationServices = [
  { title: 'Wholesale & Contract Sign Installation', desc: 'Reliable, high-quality installations for national brands, regional franchises, and local businesses.' },
  { title: 'Full-Service Sign Production', desc: 'Custom fabrication and finishing, handled in-house for complete quality control.' },
  { title: 'B2B & Third-Party Installations', desc: 'Seamless support for design firms, marketing agencies, and sign brokers.' },
  { title: 'White-Label Installers for Sign Companies', desc: 'Your trusted, discreet partner for subcontracted installation work—always on time and on brand.' },
  { title: 'Trade & Reseller Installation Solutions', desc: 'Expert service for resellers and trade partners looking for dependable execution without the overhead.' },
];

const whyPartner = [
  { icon: <HiStar />, title: 'Unparalleled Expertise', desc: 'With years of experience in the industry, our team possesses the knowledge and skills to bring any vision to life. From conceptualization to installation, we navigate every step with precision and passion.' },
  { icon: <HiUserGroup />, title: 'Customized Solutions', desc: 'We understand that every brand is unique. Our approach is centered on listening to your needs and creating customized solutions. Whether it\'s a digital display for a tech start-up or a classic illuminated sign for a boutique, we have the flexibility to meet various demands.' },
  { icon: <HiChip />, title: 'State-of-the-art Technology', desc: 'We keep up with the latest trends and technological advancements in the signage industry, ensuring our clients receive innovative, durable, and efficient products.' },
  { icon: <HiGlobe />, title: 'Sustainability Focus', desc: 'In an age where sustainability is key, we take pride in using eco-friendly materials and processes. Our LED solutions, in particular, are energy-efficient, reducing both your carbon footprint and electricity costs.' },
  { icon: <HiRefresh />, title: 'Comprehensive After-Sales Support', desc: 'Our relationship with clients extends beyond the sale. We offer robust maintenance and support services, ensuring your signs remain in optimal condition and continue to serve your brand effectively.' },
  { icon: <HiEye />, title: 'Local Insights', desc: 'As a local signage company, we have an innate understanding of the community, its preferences, and the competitive landscape. This knowledge allows us to create signs that resonate, connect, and engage at a grassroots level.' },
];

export default function Home() {
  return (
    <>
      <SEO
        title="LED & Digital Sign Manufacturer"
        description="ProVizion LED is a leading LED & digital sign manufacturer in Charlotte, NC. Custom LED signs, digital displays, lighted signs, and electronic message boards. Call (984) 217-6527."
        keywords="LED signs, digital signs, sign manufacturer, Charlotte NC, electronic signs, lighted signs, LED displays, digital sign displays, sign fabrication, sign installation"
        path="/"
      />

      {/* ====== HERO ====== */}
      <section className="hero">
        {/* Photo Background + Overlay */}
        <div className="hero__bg">
          <img
            src="/images/hero-led-display.jpg"
            alt="LED digital display billboard at night"
            className="hero__bg-image"
            width="1920"
            height="1080"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero__overlay" />
        </div>

        <div className="container hero__inner">
          {/* Left: Content */}
          <div className="hero__content">
            <motion.div
              className="hero__location-tag"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HiLocationMarker /> Charlotte, NC
            </motion.div>

            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              LED &amp; Digital Sign
              <br />
              <span className="hero__title-accent">Manufacturer</span>
            </motion.h1>

            <motion.ul
              className="hero__features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <li><span className="hero__feature-dot" /> Design</li>
              <li><span className="hero__feature-dot" /> Production</li>
              <li><span className="hero__feature-dot" /> Installation</li>
            </motion.ul>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/contact-us" className="btn btn--primary btn--lg">
                Contact Us
              </Link>
              <a href={COMPANY.phoneTel} className="btn btn--outline btn--lg">
                <HiPhone /> {COMPANY.phone}
              </a>
              <Link to="/" className="btn btn--ghost btn--lg">
                Explore 3 New UI Variants
              </Link>
            </motion.div>
          </div>

          {/* Right: Form Card (white themed, like original) */}
          <motion.div
            className="hero__form-wrapper"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__form-card">
              <h3 className="hero__form-title">Quick &amp; Same-Day Quotes</h3>
              <QuoteForm source="quick-quote" compact />

              {/* Rating block under form */}
              <div className="hero__form-rating">
                <span className="hero__form-rating-brand">ProVizion LED</span>
                <span className="hero__form-rating-label">5 STAR RATING</span>
                <div className="hero__form-stars">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className="hero__form-rating-count">(Based on {COMPANY.reviewCount} Reviews)</span>
              </div>

              <p className="hero__form-disclaimer">
                By providing my phone number to ProVizion LED, I agree and acknowledge that
                ProVizion LED may send text messages to my wireless phone number for any purpose.
                Message frequency will vary, and Message and data rates may apply. If you need
                further assistance, please reply &quot;HELP&quot;. You can also opt out by replying &quot;STOP.&quot;
                For more information on how your data will be handled, please visit our{' '}
                <Link to="/privacy-policy">privacy policy</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== INTRO PARAGRAPH ====== */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
            <AnimateOnScroll>
              <div className="intro-text-block">
                <span className="section-label">Who We Are</span>
                <h2 className="section-title">Charlotte&apos;s Premier LED Sign Company</h2>
                <p className="intro-text">
                  At ProVizion LED, we pride ourselves on being a leading local sign company
                  that specializes in a vast array of sign solutions. From dazzling LED displays
                  and digital signs to elegant lighted signs and dynamic LED message boards,
                  our passion is bringing your vision to light.
                </p>
                <p className="intro-text">
                  When it comes to sign design and sign fabrication, our expertise is unmatched.
                  As a renowned sign manufacturer, we understand the importance of blending
                  aesthetics with functionality. Whether you need outdoor signs for a grand opening
                  or wayfinding signs to enhance navigation in a complex facility, ProVizion LED
                  has got you covered.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="scaleIn">
              <div className="intro-image">
                <img
                  src="/images/digital-signage-urban.jpg"
                  alt="Urban digital signage and LED displays at night"
                  width="800"
                  height="600"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ====== KEY OFFERINGS ====== */}
      <section className="section section--lg offerings-section" id="services">
        <div className="container">
          <AnimateOnScroll>
            <div className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
              <span className="section-label" style={{ justifyContent: 'center' }}>Our Services</span>
              <h2 className="section-title">Signage Excellence: Our Key Offerings</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                In a world that&apos;s constantly evolving, it&apos;s vital to make a statement that
                stands out. At ProVizion LED, we specialize in crafting signage solutions that
                command attention and effectively communicate your brand&apos;s essence with clarity
                and style.
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerContainer className="offerings-grid">
            {offerings.map((item) => (
              <StaggerItem key={item.title}>
                <div className="offering-card card">
                  <div className="offering-card__icon">{item.icon}</div>
                  <h3 className="offering-card__title">{item.title}</h3>
                  <p className="offering-card__desc">{item.desc}</p>
                  {item.link && (
                    <Link to={item.link} className="offering-card__link">
                      Learn More →
                    </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll>
            <div className="offerings-extra">
              <p>
                Our custom sign solutions go beyond commercial needs. We also excel in creating
                specialized signs such as ADA signs, ensuring Americans with Disabilities Act
                compliance without compromising on design. Need your brand to stand tall and get
                noticed? Our pylon signs and channel letters make a bold statement. And if you&apos;re
                looking for business signs that marry innovation with elegance, our illuminated
                signs are sure to impress.
              </p>
              <p>
                Dive into the world of ProVizion LED&apos;s unparalleled signage excellence. Our key
                offerings are not just products but a promise – a promise of quality, durability,
                and an unwavering commitment to your brand&apos;s success.
              </p>
            </div>
          </AnimateOnScroll>

          {/* CTA Band */}
          <AnimateOnScroll>
            <div className="inline-cta">
              <p>
                Reach out to ProVizion LED today at{' '}
                <a href={COMPANY.phoneTel} className="text-accent">{COMPANY.phone}</a>{' '}
                for your free talk with an LED & Digital Sign Expert!
              </p>
              <Link to="/contact-us" className="btn btn--primary">
                Get A Free Quote
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== PROCESS / MANUFACTURING ====== */}
      <section className="section section--lg process-section">
        <div className="container">
          <div className="process-header">
            <AnimateOnScroll>
              <span className="section-label">Our Process</span>
              <h2 className="section-title">Complete Sign Manufacturing: From Design to Maintenance</h2>
              <p className="section-subtitle">
                The sign&apos;s journey is a remarkable evolution, from a concept to a powerful brand
                statement. At ProVizion LED, we&apos;ve mastered this process, offering a comprehensive
                suite of services to guide every aspect of sign creation and maintenance.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="scaleIn">
              <div className="process-image">
                <img
                  src="/images/sign-manufacturing.jpg"
                  alt="LED sign manufacturing and fabrication process"
                  width="800"
                  height="500"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <div className="process-timeline">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 0.1}>
                <div className="process-step">
                  <div className="process-step__number">{step.step}</div>
                  <div className="process-step__content">
                    <div className="process-step__icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <p className="process-closing">
              At ProVizion LED, our commitment to excellence spans the entire lifecycle of a sign.
              We believe that a sign is not just a tool for communication; it&apos;s an ambassador for
              your brand, and we ensure it always represents you in the best light.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== INSTALLATION ====== */}
      <section className="section section--lg installation-section">
        <div className="container">
          <AnimateOnScroll>
            <span className="section-label">Installation</span>
            <h2 className="section-title">Professional Sign Installation</h2>
            <p className="section-subtitle">
              At ProVizion LED, we don&apos;t just create signs—we manage the entire process from
              concept to completion, including expert installation. Our skilled crews serve as
              your trusted behind-the-scenes partner, ensuring every sign is installed with
              precision, speed, and professionalism—so you can focus on what you do best.
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="installation-grid">
            {installationServices.map((svc) => (
              <StaggerItem key={svc.title}>
                <div className="installation-card">
                  <HiCheckCircle className="installation-card__check" />
                  <div>
                    <h4>{svc.title}</h4>
                    <p>{svc.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll>
            <div className="inline-cta">
              <p>
                Reach out to ProVizion LED today at{' '}
                <a href={COMPANY.phoneTel} className="text-accent">{COMPANY.phone}</a>{' '}
                for your free talk with a Sign Installation Expert!
              </p>
              <Link to="/contact-us" className="btn btn--primary">
                Get A Free Quote
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== WHY PARTNER ====== */}
      <section className="section section--lg partner-section">
        <div className="container">
          <div className="partner-header">
            <AnimateOnScroll>
              <div className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
                <span className="section-label" style={{ justifyContent: 'center' }}>Why Us</span>
                <h2 className="section-title">Why Partner with Our Signage Company?</h2>
                <p className="section-subtitle" style={{ margin: '0 auto' }}>
                  Choosing the perfect signage partner is crucial to ensuring your brand&apos;s message
                  reaches your audience effectively. At ProVizion LED, we provide more than just
                  signs – we deliver a partnership grounded in trust, expertise, and unwavering
                  commitment to excellence.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          <StaggerContainer className="partner-grid">
            {whyPartner.map((item) => (
              <StaggerItem key={item.title}>
                <div className="partner-card card">
                  <div className="partner-card__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll>
            <p className="partner-closing text-center">
              In the vast sea of signage providers, ProVizion LED stands out as a beacon of
              reliability, innovation, and quality. When you partner with us, you&apos;re not just
              investing in a sign; you&apos;re investing in your brand&apos;s future.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="text-center" style={{ marginTop: 'var(--space-8)' }}>
              <Link to="/contact-us" className="btn btn--primary btn--lg">
                Get A Free Quote
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="section final-cta-section">
        <img
          src="/images/commercial-building.jpg"
          alt="Modern commercial building with digital signage"
          className="final-cta-bg"
          width="800"
          height="600"
          loading="lazy"
        />
        <div className="final-cta-overlay" />
        <div className="container container--narrow text-center final-cta-content">
          <AnimateOnScroll>
            <h2 className="section-title">
              Looking for the Best Sign Solutions Near Me? Look No Further!
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto var(--space-6)' }}>
              Every brand has a unique story waiting to be told. Let&apos;s illuminate yours in the
              best light possible. Whether you&apos;re looking to captivate, inform, or inspire,
              our team at ProVizion LED is ready to bring your vision to life.
            </p>
            <p className="section-subtitle" style={{ margin: '0 auto var(--space-6)' }}>
              Don&apos;t let another moment pass without maximizing your brand&apos;s impact.
            </p>
            <p className="final-cta-closing">
              Choose ProVizion LED – where sign manufacturing meets excellence. Connect with
              our signage company today and explore the myriad possibilities that await your brand.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
