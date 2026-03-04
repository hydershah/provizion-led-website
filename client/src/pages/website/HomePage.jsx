import { Link } from 'react-router-dom';
import {
  HiArrowRight,
  HiPhone,
  HiStar,
  HiShieldCheck,
  HiLightBulb,
  HiCube,
  HiTruck,
  HiCog,
  HiCheckCircle,
  HiBadgeCheck,
} from 'react-icons/hi';
import SEO from '../../components/SEO';
import useThemeClass from '../../hooks/useThemeClass';
import { COMPANY } from '../../utils/constants';
import { FadeUp, StaggerWrap, StaggerChild, LEDGrid, NeonText, ScanLine, FloatingParticles, NeonBorder } from './animations';
import './shared.css';

/* ──── Data ──── */
const services = [
  { title: 'LED Signs', desc: 'Experience the brilliance of our state-of-the-art LED signs. With vibrant colors and unmatched clarity, these signs are perfect for businesses wanting to make a bold and energy-efficient statement. Our cutting edge heat management process ensures that your LED signs are long lasting and less prone to dimming due to heat.', img: '/images/electronic-signs-1.jpg', link: '/led-signs' },
  { title: 'Digital Sign Displays', desc: 'Elevate your brand with our cutting-edge digital sign displays. Whether it\'s showcasing promotional content or sharing real-time information, our displays offer unparalleled versatility and visual appeal.', img: '/images/electronic-digital-message-displays-signs-3.jpg', link: '/digital-signs' },
  { title: 'Lighted Signs', desc: 'Illuminate your brand\'s presence, day and night with our precision-crafted lighted signs. We guarantee consistent brightness and a commanding presence that boosts visibility.', img: '/images/lighted-and-illuminated-signs-2.jpeg', link: '/lighted-signs' },
  { title: 'LED Monument Signs', desc: 'A perfect blend of grandeur and technology, our LED monument signs are a testament to our commitment to excellence. These signs are not only visually striking but also serve as landmarks that cement your brand\'s position in the landscape.', img: '/images/programmable-led-message-centers-3.jpg', link: '/contact-us' },
  { title: 'LED Message Boards', desc: 'Share dynamic content with the world using our LED message boards. Ideal for businesses wanting to communicate ever-changing messages or promotions, these boards are easy to update and always capture attention.', img: '/images/indoor-led-message-board-sign-2.jpg', link: '/contact-us' },
  { title: 'Electronic Message Centers', desc: 'Combining sophisticated technology with user-friendly interfaces, our electronic message boards allow for seamless content updates. Whether it\'s for schools, businesses, or public facilities, they are a reliable way to keep audiences informed and engaged.', img: '/images/electronic-message-centers-digital-signage-display-1.jpg', link: '/electronic-signs' },
];

const processSteps = [
  { step: '01', title: 'Tailored Design', desc: 'We listen to your vision and craft designs that align with your brand\'s identity using cutting-edge tools.', icon: <HiLightBulb /> },
  { step: '02', title: 'Precision Fabrication', desc: 'Premium materials and advanced machinery guarantee every sign is robust, elegant, and built to last.', icon: <HiCube /> },
  { step: '03', title: 'Expert Installation', desc: 'Our team considers location, lighting, and angle to position your signs for maximum visibility and impact.', icon: <HiTruck /> },
  { step: '04', title: 'Ongoing Maintenance', desc: 'Routine check-ups and repairs keep your signs as vibrant and effective as the day they were installed.', icon: <HiCog /> },
];

const whyChoose = [
  { title: 'Unparalleled Expertise', desc: 'With years of experience in the industry, our team possesses the knowledge and skills to bring any vision to life. From conceptualization to installation, we navigate every step with precision and passion.' },
  { title: 'Customized Solutions', desc: 'We understand that every brand is unique. Our approach is centered on listening to your needs and creating customized solutions. Whether it\'s a digital display for a tech start-up or a classic illuminated sign for a boutique, we have the flexibility to meet various demands.' },
  { title: 'State-of-the-Art Technology', desc: 'We keep up with the latest trends and technological advancements in the signage industry, ensuring our clients receive innovative, durable, and efficient products.' },
  { title: 'Sustainability Focus', desc: 'In an age where sustainability is key, we take pride in using eco-friendly materials and processes. Our LED solutions, in particular, are energy-efficient, reducing both your carbon footprint and electricity costs.' },
  { title: 'Comprehensive After-Sales Support', desc: 'Our relationship with clients extends beyond the sale. We offer robust maintenance and support services, ensuring your signs remain in optimal condition and continue to serve your brand effectively.' },
  { title: 'Local Insights', desc: 'As a local signage company, we have an innate understanding of the community, its preferences, and the competitive landscape. This knowledge allows us to create signs that resonate, connect, and engage at a grassroots level.' },
];

const testimonials = [
  { name: 'James Mitchell', business: 'Mitchell Auto Group', rating: 5, text: 'ProVizion LED transformed our dealership presence. The LED monument sign they designed draws customers from the highway — our foot traffic increased 40% in the first month.' },
  { name: 'Sarah Chen', business: 'Brightside Medical Center', rating: 5, text: 'Professional from start to finish. They handled all the permits and installed our channel letters in one day. The quality of the illumination is exceptional.' },
  { name: 'David Ramirez', business: 'Ramirez Restaurant Group', rating: 5, text: 'We needed digital menu boards and exterior signage for three locations. ProVizion delivered on time, on budget, and the results are stunning.' },
];

const b2bFeatures = [
  { title: 'Wholesale & Contract Sign Installation', desc: 'Reliable, high-quality installations for national brands, regional franchises, and local businesses.' },
  { title: 'Full-Service Sign Production', desc: 'Custom fabrication and finishing, handled in-house for complete quality control.' },
  { title: 'B2B & Third-Party Installations', desc: 'Seamless support for design firms, marketing agencies, and sign brokers.' },
  { title: 'White-Label Installers for Sign Companies', desc: 'Your trusted, discreet partner for subcontracted installation work — always on time and on brand.' },
  { title: 'Trade & Reseller Installation Solutions', desc: 'Expert service for resellers and trade partners looking for dependable execution without the overhead.' },
];

const certifications = [
  'BBB Accredited',
  'Licensed & Insured',
  'UL Listed',
  'Energy Star Partner',
];

const portfolio = [
  { title: 'Channel Letters — Luxury Hotel', category: 'Channel Letters', img: '/images/led-signs-channel-letters-lit-at-night-1.jpg' },
  { title: 'LED Monument — Financial District', category: 'Monument Signs', img: '/images/full-color-led-electronic-sign-4.jpg' },
  { title: 'Digital Display — Convention Center', category: 'Digital Displays', img: '/images/custom-electronic-sign-company-4.jpeg' },
  { title: 'Illuminated Cabinet — Fine Dining', category: 'Cabinet Signs', img: '/images/michaels-raw-bar.jpg' },
  { title: 'EMC — Corporate Headquarters', category: 'Message Centers', img: '/images/pexels-photo-1058275.jpeg' },
  { title: 'Pylon Sign — Medical Campus', category: 'Pylon Signs', img: '/images/traditional-led-signs-2.png' },
];

/* ====================================
   HOME PAGE — Production Website
   ==================================== */
export default function HomePage() {
  useThemeClass('theme-site');

  return (
    <>
      <SEO
        title="LED & Digital Sign Manufacturer | Charlotte, NC"
        description="ProVizion LED — full-service LED sign manufacturer in Charlotte, NC. Custom LED signs, digital displays, channel letters & monument signs. Same-day quotes. Call (984) 217-6527."
        keywords="LED signs, digital signs, sign manufacturer, Charlotte NC, LED sign company, custom LED signage, channel letters, monument signs, electronic message centers, North Carolina"
        path="/"
      />

      {/* -- HERO (Split Screen) -- */}
      <section className="vc-hero" id="hero">
        <div className="vc-hero__content-side">
          <LEDGrid />
          <div className="vc-hero__content-inner">
            <FadeUp>
              <span className="vc-hero__eyebrow">Charlotte, NC &mdash; LED Sign Manufacturer</span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="vc-hero__heading">
                LED &amp; Digital Sign Manufacturer
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="vc-hero__subhead">
                Full-service sign manufacturer specializing in custom LED signs, digital displays, and illuminated signage. Design, production, and expert installation &mdash; all in-house.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="vc-hero__actions">
                <Link to="/contact-us" className="vc-btn vc-btn--accent">
                  Contact Us <HiArrowRight />
                </Link>
                <a href={COMPANY.phoneTel} className="vc-btn vc-btn--outline">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="vc-hero__trust-bar">
                <div className="vc-hero__trust-item">
                  <span className="vc-hero__stars-static">
                    <HiStar /><HiStar /><HiStar /><HiStar /><HiStar />
                  </span>
                  <span>{COMPANY.reviewCount} Reviews</span>
                </div>
                <div className="vc-hero__trust-item">
                  <HiShieldCheck /> BBB Accredited
                </div>
                <div className="vc-hero__trust-item">
                  <HiShieldCheck /> Licensed &amp; Insured
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="vc-hero__visual-side">
          <div className="vc-hero__visual-inner">
            <img
              src="/images/full-service-electronic-sign-company-6.jpg"
              alt="Custom LED sign installation by ProVizion LED"
              className="vc-hero__img"
              loading="eager"
              decoding="async"
            />
            <div className="vc-hero__visual-overlay" />
          </div>
        </div>
      </section>

      <ScanLine />

      {/* -- INTRO -- */}
      <section className="vc-section" aria-labelledby="vc-intro-heading">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <NeonText className="vc-section-label">About Us</NeonText>
              <h2 id="vc-intro-heading" className="vc-section-title">LED &amp; Digital Sign Manufacturer</h2>
              <p>
                At ProVizion LED, we pride ourselves on being a leading local sign company that specializes in a vast array of sign solutions. From dazzling LED displays and digital signs to elegant lighted signs and dynamic LED message boards, our passion is bringing your vision to light.
              </p>
              <p>
                When it comes to sign design and sign fabrication, our expertise is unmatched. As a renowned sign manufacturer, we understand the importance of blending aesthetics with functionality. Whether you need outdoor signs for a grand opening or wayfinding signs to enhance navigation in a complex facility, ProVizion LED has got you covered.
              </p>
              <Link to="/contact-us" className="vc-btn vc-btn--accent vc-btn--sm">
                Get A Free Quote <HiArrowRight />
              </Link>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img
                src="/images/full-color-led-electronic-sign-4.jpg"
                alt="Custom LED sign by ProVizion LED"
                loading="lazy"
                decoding="async"
              />
            </FadeUp>
          </div>

          <FadeUp>
            <div className="vc-stats-row">
              <div className="vc-stat-item">
                <div className="vc-stat-item__number">10+</div>
                <div className="vc-stat-item__label">Years Experience</div>
              </div>
              <div className="vc-stat-item">
                <div className="vc-stat-item__number">500+</div>
                <div className="vc-stat-item__label">Signs Installed</div>
              </div>
              <div className="vc-stat-item">
                <div className="vc-stat-item__number">{COMPANY.reviewCount}+</div>
                <div className="vc-stat-item__label">5-Star Reviews</div>
              </div>
              <div className="vc-stat-item">
                <div className="vc-stat-item__number">100%</div>
                <div className="vc-stat-item__label">Satisfaction</div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <ScanLine />

      {/* -- SERVICES (Editorial Grid) -- */}
      <section className="vc-section vc-section--centered" id="services" aria-labelledby="vc-services-heading">
        <div className="vc-container">
          <FadeUp>
            <NeonText className="vc-section-label">Our Expertise</NeonText>
            <h2 id="vc-services-heading" className="vc-section-title">Signage Excellence: Our Key Offerings</h2>
            <p className="vc-section-subtitle">In a world that&apos;s constantly evolving, it&apos;s vital to make a statement that stands out. At ProVizion LED, we specialize in crafting signage solutions that command attention and effectively communicate your brand&apos;s essence with clarity and style.</p>
          </FadeUp>

          <div className="vc-services-editorial">
            {services.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.08} className={`vc-service-editorial ${i % 2 === 0 ? '' : 'vc-service-editorial--alt'}`}>
                <div className="vc-service-editorial__img">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="vc-service-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="vc-service-editorial__content">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <Link to={svc.link} className="vc-service-editorial__link">
                    Read More <HiArrowRight className="vc-arrow-extend" />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="vc-phone-cta" style={{ marginTop: '40px' }}>
            <p>Reach out to ProVizion LED today at <a href={COMPANY.phoneTel}>{COMPANY.phone}</a> for your free talk with an LED &amp; Digital Sign Expert!</p>
            <a href="#contact" className="vc-btn vc-btn--accent">
              Get A Free Quote <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* -- PROCESS -- */}
      <section className="vc-section vc-section--alt" id="process" aria-labelledby="vc-process-heading" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingParticles count={20} />
        <div className="vc-container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <NeonText className="vc-section-label">The Journey</NeonText>
            <h2 id="vc-process-heading" className="vc-section-title">Complete Sign Manufacturing: From Design to Maintenance</h2>
            <p className="vc-section-subtitle">The sign&apos;s journey is a remarkable evolution, from a concept to a powerful brand statement. At ProVizion LED, we&apos;ve mastered this process, offering a comprehensive suite of services to guide every aspect of sign creation and maintenance.</p>
          </FadeUp>

          <StaggerWrap className="vc-process-grid">
            {processSteps.map((step) => (
              <StaggerChild key={step.step} className="vc-process-card">
                <div className="vc-process-card__number">{step.step}</div>
                <div className="vc-process-card__icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>

        </div>
      </section>

      {/* -- DIGITAL DISPLAYS HIGHLIGHT -- */}
      <section className="vc-section">
        <div className="vc-container">
          <div className="vc-split-layout">
            <FadeUp className="vc-split-layout__text">
              <NeonText className="vc-section-label">Digital Solutions</NeonText>
              <h2 className="vc-section-title">Custom Digital Displays &amp; Electronic Signage</h2>
              <p>
                In today&apos;s digital era, signs have transformed into dynamic, interactive displays. Our custom digital displays deliver maximum engagement with interactive touchpoints, lively animations, and real-time updates.
              </p>
              <p>
                From vibrant trade shows to corporate lobbies, our electronic signage solutions adapt to any setting — because your sign isn&apos;t just a tool, it&apos;s an ambassador for your brand.
              </p>
              <Link to="/digital-signs" className="vc-btn vc-btn--accent vc-btn--sm">
                Explore Digital Signs <HiArrowRight />
              </Link>
            </FadeUp>
            <FadeUp delay={0.15} className="vc-split-layout__img">
              <img
                src="/images/electronic-digital-message-displays-signs-3.jpg"
                alt="Custom digital display by ProVizion LED"
                loading="lazy"
                decoding="async"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* -- B2B SECTION -- */}
      <section className="vc-section" id="b2b" aria-labelledby="vc-b2b-heading">
        <div className="vc-container">
          <FadeUp>
            <NeonText className="vc-section-label">Enterprise Partnership</NeonText>
            <h2 id="vc-b2b-heading" className="vc-section-title">Professional Sign Installation</h2>
            <div className="vc-content-block">
              <p>
                At ProVizion LED, we don&apos;t just create signs — we manage the entire process from concept to completion, including expert installation. Our skilled crews serve as your trusted behind-the-scenes partner, ensuring every sign is installed with precision, speed, and professionalism — so you can focus on what you do best.
              </p>
            </div>
          </FadeUp>

          <div className="vc-b2b-layout">
            <FadeUp className="vc-b2b-content">
              <h3 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Our Installation &amp; B2B Services Include:</h3>

              <div className="vc-b2b-features">
                {b2bFeatures.map((feat) => (
                  <div key={feat.title} className="vc-b2b-feature">
                    <HiCheckCircle className="vc-b2b-feature__icon" />
                    <div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="vc-b2b-certifications">
                {certifications.map((cert) => (
                  <span key={cert} className="vc-cert-badge"><HiBadgeCheck /> {cert}</span>
                ))}
              </div>

              <div className="vc-phone-cta" style={{ textAlign: 'left' }}>
                <p>Reach out to ProVizion LED today at <a href={COMPANY.phoneTel}>{COMPANY.phone}</a> for your free talk with a sign installation Expert!</p>
                <a href="#contact" className="vc-btn vc-btn--accent">
                  Get A Free Quote <HiArrowRight />
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} className="vc-b2b-quote">
              <NeonBorder><blockquote>
                &ldquo;ProVizion LED has been our go-to manufacturing partner for three years. Their consistency, quality, and reliability are unmatched in the Southeast region.&rdquo;
              </blockquote>
              <div className="vc-b2b-quote__author">
                <div className="vc-b2b-quote__avatar">R</div>
                <div>
                  <strong>Regional Director</strong>
                  <span>National Sign Company</span>
                </div>
              </div>
              </NeonBorder>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* -- WHY CHOOSE US -- */}
      <section className="vc-section vc-section--alt" id="why-us" aria-labelledby="vc-why-heading" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingParticles count={25} />
        <div className="vc-container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <NeonText className="vc-section-label">The ProVizion Difference</NeonText>
            <h2 id="vc-why-heading" className="vc-section-title">Why Partner with Our Signage Company?</h2>
            <p className="vc-section-subtitle">Choosing the perfect signage partner is crucial to ensuring your brand&apos;s message reaches your audience effectively. At ProVizion LED, we provide more than just signs — we deliver a partnership grounded in trust, expertise, and unwavering commitment to excellence.</p>
          </FadeUp>

          <StaggerWrap className="vc-why-grid">
            {whyChoose.map((item, i) => (
              <StaggerChild key={item.title} className="vc-why-card">
                <div className="vc-why-card__number">{String(i + 1).padStart(2, '0')}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </StaggerChild>
            ))}
          </StaggerWrap>

          <FadeUp className="vc-services-cta">
            <a href="#contact" className="vc-btn vc-btn--accent">
              Get A Free Quote <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      {/* -- PORTFOLIO -- */}
      <section className="vc-section vc-section--centered" id="portfolio" aria-labelledby="vc-portfolio-heading">
        <div className="vc-container">
          <FadeUp>
            <NeonText className="vc-section-label">Selected Work</NeonText>
            <h2 id="vc-portfolio-heading" className="vc-section-title">Project Gallery</h2>
            <p className="vc-section-subtitle">A curated selection of custom LED signage installations for discerning clients.</p>
          </FadeUp>

          <StaggerWrap className="vc-portfolio-grid">
            {portfolio.map((item, i) => (
              <StaggerChild key={item.title} className={`vc-portfolio-item ${i === 0 ? 'vc-portfolio-item--large' : ''}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="vc-portfolio-item__img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="vc-portfolio-item__overlay">
                  <span className="vc-portfolio-item__tag">{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* -- TESTIMONIALS -- */}
      <section className="vc-section vc-section--alt vc-section--centered" id="testimonials" aria-labelledby="vc-test-heading" style={{ position: 'relative', overflow: 'hidden' }}>
        <FloatingParticles count={20} />
        <div className="vc-container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <NeonText className="vc-section-label">Client Testimonials</NeonText>
            <h2 id="vc-test-heading" className="vc-section-title">Trusted by Industry Leaders</h2>
          </FadeUp>

          <StaggerWrap className="vc-testimonials-grid">
            {testimonials.map((t) => (
              <StaggerChild key={t.name} className="vc-testimonial-card">
                <div className="vc-testimonial-card__stars">
                  {[...Array(t.rating)].map((_, i) => <HiStar key={i} />)}
                </div>
                <blockquote>{t.text}</blockquote>
                <div className="vc-testimonial-card__author">
                  <div className="vc-testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.business}</span>
                  </div>
                </div>
                <span className="vc-testimonial-card__badge">Verified Google Review</span>
              </StaggerChild>
            ))}
          </StaggerWrap>

          <FadeUp className="vc-testimonials-cta">
            <a href="#contact" className="vc-btn vc-btn--accent">
              Start Your Project <HiArrowRight />
            </a>
          </FadeUp>
        </div>
      </section>

      <ScanLine />

      {/* -- FINAL CTA -- */}
      <section className="vc-section vc-section--centered" aria-labelledby="vc-final-cta-heading">
        <div className="vc-container">
          <FadeUp>
            <NeonText className="vc-section-label">Get Started</NeonText>
            <h2 id="vc-final-cta-heading" className="vc-section-title">Looking for the Best Sign Solutions Near Me? Look No Further!</h2>
            <div className="vc-content-block">
              <p>
                Every brand has a unique story waiting to be told. Let&apos;s illuminate yours in the best light possible. Whether you&apos;re looking to captivate, inform, or inspire, our team at ProVizion LED is ready to bring your vision to life.
              </p>
              <p>
                Don&apos;t let another moment pass without maximizing your brand&apos;s impact.
              </p>
              <p>
                Choose ProVizion LED — where sign manufacturing meets excellence. Connect with our signage company today and explore the myriad possibilities that await your brand.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>


    </>
  );
}
