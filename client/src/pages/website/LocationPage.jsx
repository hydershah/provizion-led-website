import { useParams, Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import {
  HiArrowRight,
  HiPhone,
  HiLocationMarker,
  HiOfficeBuilding,
  HiShoppingCart,
  HiAcademicCap,
  HiHeart,
  HiLibrary,
  HiGlobe,
  HiLightBulb,
  HiDesktopComputer,
  HiAnnotation,
  HiViewGrid,
  HiCog,
  HiShieldCheck,
  HiCheckCircle,
  HiBadgeCheck,
  HiClock,
  HiTruck,
} from 'react-icons/hi';
import SEO from '../../components/SEO';
import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import useSanityQuery from '../../hooks/useSanityQuery';
import { locationPageBySlugQuery } from '../../lib/queries';
import { urlFor } from '../../lib/sanity';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import FAQSection from '../../components/FAQSection';
import { getLocationSchema, getBreadcrumbSchema } from '../../utils/schemas';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import { trackPhoneClick } from '../../utils/analytics';
import './shared.css';
import './LocationPage.css';

const ICON_MAP = {
  office: HiOfficeBuilding,
  retail: HiShoppingCart,
  education: HiAcademicCap,
  healthcare: HiHeart,
  government: HiLibrary,
  hospitality: HiGlobe,
  lightbulb: HiLightBulb,
  display: HiDesktopComputer,
  message: HiAnnotation,
  grid: HiViewGrid,
  cog: HiCog,
  shield: HiShieldCheck,
  location: HiLocationMarker,
};

function getIconComponent(iconName) {
  return ICON_MAP[iconName] || HiLightBulb;
}

const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="vc-loc__figure">
        <img src={urlFor(value).width(800).url()} alt={value.alt || ''} loading="lazy" />
      </figure>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="vc-section-title">{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">{children}</a>
    ),
  },
};

export default function LocationPage() {
  useThemeClass('theme-site');
  const { slug } = useParams();
  const { company: COMPANY } = useSanityContext();
  const { data: loc, loading } = useSanityQuery(locationPageBySlugQuery, { slug }, null);

  if (loading) return null;
  if (!loc) return <NotFoundFallback />;

  const cityState = loc.city ? `${loc.city}, ${loc.state}` : loc.stateFullName || loc.state;
  const pageUrl = `/locations/${loc.slug?.current || slug}`;
  const metaTitle = loc.metaTitle || loc.title;
  const metaDesc = loc.metaDescription || `Custom LED signs & digital signage in ${cityState}. ProVizion LED provides design, manufacturing & installation. Get a free quote today.`;
  const heroImg = loc.hero?.backgroundImage
    ? urlFor(loc.hero.backgroundImage).width(1600).url()
    : '/images/electronic-signs-1.jpg';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Locations', path: '/locations' },
  ];
  if (loc.tier === 1 && loc.parentHub) {
    breadcrumbs.push({ label: loc.parentHub.title, path: `/locations/${loc.parentHub.slug?.current}` });
  }
  breadcrumbs.push({ label: loc.city || loc.metroArea || loc.title });

  const schemaData = getLocationSchema({
    city: loc.city,
    state: loc.state,
    stateFullName: loc.stateFullName,
    title: loc.title,
    description: metaDesc,
    url: pageUrl,
    faqs: loc.faqs,
  });

  const breadcrumbSchema = getBreadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.label, url: b.path }))
  );

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDesc}
        path={pageUrl}
        keywords={loc.keywords?.join(', ')}
      />

      {schemaData.map((schema, i) => (
        <SchemaMarkup key={i} schema={schema} />
      ))}
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img src={heroImg} alt={loc.title} loading="eager" decoding="async" />
          <div className="vc-page-hero__overlay" />
        </div>
        <div className="vc-page-hero__content">
          <FadeUp>
            {loc.hero?.label && <span className="vc-page-hero__label">{loc.hero.label}</span>}
            <h1 className="vc-page-hero__title">
              {loc.hero?.headline || loc.title}
            </h1>
            {loc.hero?.subheadline && (
              <p className="vc-page-hero__subtitle">{loc.hero.subheadline}</p>
            )}
            {loc.hero?.serviceTags?.length > 0 && (
              <div className="vc-hero__services-row">
                {loc.hero.serviceTags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            )}
            <div className="vc-page-hero__actions">
              <a href="#contact" className="vc-btn vc-btn--accent">
                Get Free Quote <HiArrowRight />
              </a>
              <a
                href={COMPANY.phoneTel}
                className="vc-btn vc-btn--outline"
                style={{ borderColor: '#fff', color: '#fff' }}
                onClick={() => trackPhoneClick(`location-${slug}-hero`)}
              >
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Breadcrumbs items={breadcrumbs} />

      {/* ── Stats Row ── */}
      <section className="vc-loc-stats">
        <div className="vc-container">
          <FadeUp>
            <div className="vc-loc-stats__grid">
              <div className="vc-loc-stats__item">
                <HiLocationMarker className="vc-loc-stats__icon" />
                <span className="vc-loc-stats__value">Charlotte-Based</span>
                <span className="vc-loc-stats__label">Manufacturing Facility</span>
              </div>
              <div className="vc-loc-stats__item">
                <HiBadgeCheck className="vc-loc-stats__icon" />
                <span className="vc-loc-stats__value">15+ Years</span>
                <span className="vc-loc-stats__label">Industry Experience</span>
              </div>
              <div className="vc-loc-stats__item">
                <HiCheckCircle className="vc-loc-stats__icon" />
                <span className="vc-loc-stats__value">500+</span>
                <span className="vc-loc-stats__label">Signs Installed</span>
              </div>
              <div className="vc-loc-stats__item">
                <HiTruck className="vc-loc-stats__icon" />
                <span className="vc-loc-stats__value">Free</span>
                <span className="vc-loc-stats__label">On-Site Consultation</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Dynamic Sections with mid-CTAs ── */}
      {loc.sections?.map((section, i) => (
        <LocationSection key={section._key || i} section={section} sectionIndex={i} totalSections={loc.sections.length} company={COMPANY} slug={slug} cityState={cityState} />
      ))}

      {/* ── Industries Served ── */}
      {loc.industries?.length > 0 && (
        <section className="vc-section vc-section--alt">
          <div className="vc-container">
            <FadeUp>
              <span className="vc-section-label">Industries We Serve</span>
              <h2 className="vc-section-title">
                LED Signage Solutions in {cityState}
              </h2>
            </FadeUp>
            <StaggerWrap className="vc-features-grid">
              {loc.industries.map((ind, j) => {
                const Icon = getIconComponent(ind.iconName);
                return (
                  <StaggerChild key={j}>
                    <div className="vc-feature-card">
                      <div className="vc-feature-card__icon"><Icon /></div>
                      <h3>{ind.name}</h3>
                      <p>{ind.description}</p>
                    </div>
                  </StaggerChild>
                );
              })}
            </StaggerWrap>
          </div>
        </section>
      )}

      {/* ── Sub-Cities (Tier 2) ── */}
      {loc.tier === 2 && loc.subCities?.length > 0 && (
        <section className="vc-section">
          <div className="vc-container">
            <FadeUp>
              <span className="vc-section-label">Areas Covered</span>
              <h2 className="vc-section-title">
                Cities &amp; Communities We Serve in the {loc.metroArea || cityState} Area
              </h2>
              <div className="vc-loc-subcities">
                {loc.subCities.map((city, j) => (
                  <span key={j} className="vc-loc-subcities__tag">{city}</span>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {loc.faqs?.length > 0 && (
        <section className="vc-section vc-section--alt">
          <div className="vc-container">
            <FadeUp>
              <span className="vc-section-label">FAQs</span>
              <h2 className="vc-section-title">
                Frequently Asked Questions — {cityState}
              </h2>
            </FadeUp>
            <FAQSection faqs={loc.faqs} />
          </div>
        </section>
      )}

      {/* ── Nearby Locations ── */}
      {loc.nearbyLocations?.length > 0 && (
        <section className="vc-section">
          <div className="vc-container">
            <FadeUp>
              <span className="vc-section-label">Nearby</span>
              <h2 className="vc-section-title">Explore Nearby Locations</h2>
            </FadeUp>
            <StaggerWrap className="vc-loc-nearby-grid">
              {loc.nearbyLocations.map((nearby) => (
                <StaggerChild key={nearby._id}>
                  <Link
                    to={`/locations/${nearby.slug?.current}`}
                    className="vc-loc-nearby-card"
                  >
                    <HiLocationMarker className="vc-loc-nearby-card__icon" />
                    <div>
                      <h4>{nearby.city || nearby.title}</h4>
                      <span>{nearby.state} &bull; Tier {nearby.tier}</span>
                    </div>
                    <HiArrowRight className="vc-loc-nearby-card__arrow" />
                  </Link>
                </StaggerChild>
              ))}
            </StaggerWrap>
          </div>
        </section>
      )}

      {/* ── CTA / Contact ── */}
      <section className="vc-section vc-section--alt" id="contact">
        <div className="vc-container">
          <FadeUp>
            <div className="vc-phone-cta">
              <h2 className="vc-section-title">
                Ready for LED Signage in {cityState}?
              </h2>
              <p>
                Call ProVizion LED at{' '}
                <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick(`location-${slug}-cta`)}>
                  {COMPANY.phone}
                </a>{' '}
                for a free consultation and quote.
              </p>
              <div className="vc-page-hero__actions" style={{ justifyContent: 'center' }}>
                <Link to="/contact-us" className="vc-btn vc-btn--accent">
                  Get A Free Quote <HiArrowRight />
                </Link>
                <a
                  href={COMPANY.phoneTel}
                  className="vc-btn vc-btn--outline"
                  onClick={() => trackPhoneClick(`location-${slug}-cta-phone`)}
                >
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

/* ── Mid-section CTA ── */
function MidSectionCTA({ company, slug, cityState }) {
  return (
    <section className="vc-section vc-section--alt">
      <div className="vc-container">
        <FadeUp className="vc-phone-cta">
          <p>
            Call ProVizion LED at{' '}
            <a href={company.phoneTel} onClick={() => trackPhoneClick(`location-${slug}-mid-cta`)}>
              {company.phone}
            </a>{' '}
            for a free LED sign consultation in {cityState}!
          </p>
          <a href="#contact" className="vc-btn vc-btn--accent">
            Get A Free Quote <HiArrowRight />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

/* ── Dynamic Section Renderer ── */
function LocationSection({ section, sectionIndex, totalSections, company, slug, cityState }) {
  const isAlt = section.altBackground;
  const showMidCTA = sectionIndex === 1; // show CTA after second section (sign types grid)

  const sectionContent = (() => {
    if (section.sectionType === 'split') {
      const imgSrc = section.image ? urlFor(section.image).width(800).url() : null;
      const isLeft = section.imagePosition === 'left';

      // When no image, render as a full-width intro section instead of broken 2-col
      if (!imgSrc) {
        return (
          <section className={`vc-section ${isAlt ? 'vc-section--alt' : ''}`}>
            <div className="vc-container">
              <FadeUp>
                {section.label && <span className="vc-section-label">{section.label}</span>}
                {section.title && <h2 className="vc-section-title">{section.title}</h2>}
              </FadeUp>
              {section.body && (
                <FadeUp>
                  <div className="vc-loc-intro">
                    <PortableText value={section.body} components={portableTextComponents} />
                  </div>
                </FadeUp>
              )}
              {section.buttonText && (
                <FadeUp>
                  <div style={{ marginTop: 24 }}>
                    <a href={section.buttonLink || '#contact'} className="vc-btn vc-btn--accent vc-btn--sm">
                      {section.buttonText} <HiArrowRight />
                    </a>
                  </div>
                </FadeUp>
              )}
            </div>
          </section>
        );
      }

      return (
        <section className={`vc-section ${isAlt ? 'vc-section--alt' : ''}`}>
          <div className="vc-container">
            <div className={`vc-split-layout ${isLeft ? 'vc-split-layout--reverse' : ''}`}>
              <FadeUp className="vc-split-layout__text">
                {section.label && <span className="vc-section-label">{section.label}</span>}
                {section.title && <h2 className="vc-section-title">{section.title}</h2>}
                {section.body && (
                  <div className="vc-content-block">
                    <PortableText value={section.body} components={portableTextComponents} />
                  </div>
                )}
                {section.buttonText && (
                  <a href={section.buttonLink || '#contact'} className="vc-btn vc-btn--accent vc-btn--sm">
                    {section.buttonText} <HiArrowRight />
                  </a>
                )}
              </FadeUp>
              <FadeUp delay={0.15} className="vc-split-layout__img">
                <img src={imgSrc} alt={section.title || ''} loading="lazy" decoding="async" />
              </FadeUp>
            </div>
          </div>
        </section>
      );
    }

    if (section.sectionType === 'featureGrid') {
      return (
        <section className={`vc-section ${isAlt ? 'vc-section--alt' : ''}`}>
          <div className="vc-container">
            <FadeUp>
              {section.label && <span className="vc-section-label">{section.label}</span>}
              {section.title && <h2 className="vc-section-title">{section.title}</h2>}
            </FadeUp>
            <StaggerWrap className="vc-features-grid">
              {section.features?.map((feat, j) => {
                const Icon = getIconComponent(feat.iconName);
                return (
                  <StaggerChild key={j}>
                    <div className="vc-feature-card">
                      <div className="vc-feature-card__icon"><Icon /></div>
                      <h3>{feat.title}</h3>
                      <p>{feat.description}</p>
                    </div>
                  </StaggerChild>
                );
              })}
            </StaggerWrap>
          </div>
        </section>
      );
    }

    if (section.sectionType === 'cta') {
      return (
        <section className="vc-section vc-section--alt">
          <div className="vc-container">
            <FadeUp className="vc-phone-cta">
              {section.title && <h2 className="vc-section-title">{section.title}</h2>}
              {section.body && (
                <div className="vc-content-block">
                  <PortableText value={section.body} components={portableTextComponents} />
                </div>
              )}
              <a href={section.buttonLink || '#contact'} className="vc-btn vc-btn--accent">
                {section.buttonText || 'Get A Free Quote'} <HiArrowRight />
              </a>
            </FadeUp>
          </div>
        </section>
      );
    }

    // Default: text block with enhanced styling
    return (
      <section className={`vc-section ${isAlt ? 'vc-section--alt' : ''}`}>
        <div className="vc-container">
          <FadeUp>
            {section.label && <span className="vc-section-label">{section.label}</span>}
            {section.title && <h2 className="vc-section-title">{section.title}</h2>}
            {section.body && (
              <div className="vc-loc-text-section">
                <PortableText value={section.body} components={portableTextComponents} />
              </div>
            )}
            {section.buttonText && (
              <div style={{ marginTop: 24 }}>
                <a href={section.buttonLink || '#contact'} className="vc-btn vc-btn--accent vc-btn--sm">
                  {section.buttonText} <HiArrowRight />
                </a>
              </div>
            )}
          </FadeUp>
        </div>
      </section>
    );
  })();

  return (
    <>
      {sectionContent}
      {showMidCTA && <MidSectionCTA company={company} slug={slug} cityState={cityState} />}
    </>
  );
}

function NotFoundFallback() {
  return (
    <section className="vc-section" style={{ textAlign: 'center', padding: '120px 20px' }}>
      <h1>Location Not Found</h1>
      <p>The location page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/locations" className="vc-btn vc-btn--accent" style={{ marginTop: '20px' }}>
        View All Locations
      </Link>
    </section>
  );
}
