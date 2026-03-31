import { Link, useLocation } from 'react-router-dom';
import { HiArrowRight, HiPhone, HiLocationMarker } from 'react-icons/hi';
import SEO from '../../components/SEO';
import useThemeClass from '../../hooks/useThemeClass';
import { useSanityContext } from '../../context/SanityContext';
import useSanityQuery from '../../hooks/useSanityQuery';
import { allLocationPagesQuery, locationPagesByStateQuery } from '../../lib/queries';
import SchemaMarkup from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import { getLocationSchema, getBreadcrumbSchema } from '../../utils/schemas';
import { FadeUp, StaggerWrap, StaggerChild } from './animations';
import { trackPhoneClick } from '../../utils/analytics';
import './shared.css';
import './LocationPage.css';

const STATE_MAP = {
  'north-carolina': { abbr: 'NC', full: 'North Carolina' },
  'south-carolina': { abbr: 'SC', full: 'South Carolina' },
};

export default function LocationsIndex() {
  useThemeClass('theme-site');
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const stateSlug = pathParts.length >= 2 ? pathParts[1] : null;
  const { company: COMPANY } = useSanityContext();

  const stateInfo = stateSlug ? STATE_MAP[stateSlug] : null;
  const isStateView = !!stateInfo;

  const query = isStateView ? locationPagesByStateQuery : allLocationPagesQuery;
  const params = isStateView ? { state: stateInfo.abbr } : {};
  const { data: locations, loading } = useSanityQuery(query, params, []);

  if (loading) return null;

  const pageTitle = isStateView
    ? `LED Signs & Digital Signage — ${stateInfo.full}`
    : 'LED Signs & Digital Signage — Areas We Serve';
  const pageDesc = isStateView
    ? `ProVizion LED serves ${stateInfo.full} with custom LED signs, digital signage, and electronic displays. Find your city below for local service information.`
    : 'ProVizion LED serves North Carolina and South Carolina with custom LED signs, digital signage, and electronic displays. Find your local area below.';
  const pagePath = isStateView ? `/locations/${stateSlug}` : '/locations';

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Locations', path: '/locations' },
  ];
  if (isStateView) {
    breadcrumbs.push({ label: stateInfo.full });
  }

  // Group by state then tier
  const grouped = {};
  (locations || []).forEach((loc) => {
    const st = loc.stateFullName || (loc.state === 'NC' ? 'North Carolina' : 'South Carolina');
    if (!grouped[st]) grouped[st] = { tier1: [], tier2: [], tier3: [] };
    const key = `tier${loc.tier}`;
    if (grouped[st][key]) grouped[st][key].push(loc);
  });

  const schemaData = getLocationSchema({
    city: null,
    state: isStateView ? stateInfo.abbr : 'NC',
    stateFullName: isStateView ? stateInfo.full : 'North Carolina & South Carolina',
    title: pageTitle,
    description: pageDesc,
    url: pagePath,
    faqs: [],
  });

  const breadcrumbSchema = getBreadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.label, url: b.path }))
  );

  return (
    <>
      <SEO title={pageTitle} description={pageDesc} path={pagePath} />
      {schemaData.map((schema, i) => (
        <SchemaMarkup key={i} schema={schema} />
      ))}
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className="vc-page-hero">
        <div className="vc-page-hero__bg">
          <img src="/images/electronic-signs-1.webp" alt={pageTitle} loading="eager" decoding="async" />
          <div className="vc-page-hero__overlay" />
        </div>
        <div className="vc-page-hero__content">
          <FadeUp>
            <span className="vc-page-hero__label">
              {isStateView ? stateInfo.full : 'NC & SC'}
            </span>
            <h1 className="vc-page-hero__title">{pageTitle}</h1>
            <p className="vc-page-hero__subtitle">
              {isStateView
                ? `Custom LED signage across ${stateInfo.full}`
                : 'Custom LED signage across North Carolina & South Carolina'}
            </p>
            <div className="vc-page-hero__actions">
              <a href="#locations-list" className="vc-btn vc-btn--accent">
                Explore Locations <HiArrowRight />
              </a>
              <a
                href={COMPANY.phoneTel}
                className="vc-btn vc-btn--outline"
                style={{ borderColor: '#fff', color: '#fff' }}
                onClick={() => trackPhoneClick('locations-index-hero')}
              >
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <Breadcrumbs items={breadcrumbs} />

      {/* ── Intro ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp className="vc-loc-index__intro">
            <p>{pageDesc}</p>
          </FadeUp>

          {/* State selector (only on main /locations) */}
          {!isStateView && (
            <FadeUp>
              <StaggerWrap className="vc-loc-nearby-grid" style={{ maxWidth: 600, margin: '0 auto 48px' }}>
                <StaggerChild>
                  <Link to="/locations/north-carolina" className="vc-loc-nearby-card">
                    <HiLocationMarker className="vc-loc-nearby-card__icon" />
                    <div>
                      <h4>North Carolina</h4>
                      <span>10 cities &bull; 6 regions</span>
                    </div>
                    <HiArrowRight className="vc-loc-nearby-card__arrow" />
                  </Link>
                </StaggerChild>
                <StaggerChild>
                  <Link to="/locations/south-carolina" className="vc-loc-nearby-card">
                    <HiLocationMarker className="vc-loc-nearby-card__icon" />
                    <div>
                      <h4>South Carolina</h4>
                      <span>8 cities &bull; 5 regions</span>
                    </div>
                    <HiArrowRight className="vc-loc-nearby-card__arrow" />
                  </Link>
                </StaggerChild>
              </StaggerWrap>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── Location Listings ── */}
      <section className="vc-section vc-section--alt" id="locations-list">
        <div className="vc-container">
          {Object.entries(grouped).map(([stateName, tiers]) => (
            <div key={stateName} className="vc-loc-state-section">
              {!isStateView && (
                <FadeUp>
                  <h2 className="vc-loc-state-section__title">{stateName}</h2>
                </FadeUp>
              )}

              {/* Tier 1 — City Pages */}
              {tiers.tier1.length > 0 && (
                <>
                  <FadeUp>
                    <p className="vc-loc-tier-label">City Pages</p>
                  </FadeUp>
                  <StaggerWrap className="vc-loc-cards-grid">
                    {tiers.tier1.map((loc) => (
                      <StaggerChild key={loc._id}>
                        <Link to={`/locations/${loc.slug?.current}`} className="vc-loc-card">
                          <div className="vc-loc-card__header">
                            <HiLocationMarker className="vc-loc-card__icon" />
                            <h3 className="vc-loc-card__title">
                              {loc.city}, {loc.state}
                            </h3>
                          </div>

                          <span className="vc-loc-card__arrow">
                            View Details <HiArrowRight />
                          </span>
                        </Link>
                      </StaggerChild>
                    ))}
                  </StaggerWrap>
                </>
              )}

              {/* Tier 2 — Regional Hubs */}
              {tiers.tier2.length > 0 && (
                <>
                  <FadeUp>
                    <p className="vc-loc-tier-label">Regional Hubs</p>
                  </FadeUp>
                  <StaggerWrap className="vc-loc-cards-grid">
                    {tiers.tier2.map((loc) => (
                      <StaggerChild key={loc._id}>
                        <Link to={`/locations/${loc.slug?.current}`} className="vc-loc-card">
                          <div className="vc-loc-card__header">
                            <HiLocationMarker className="vc-loc-card__icon" />
                            <h3 className="vc-loc-card__title">
                              {loc.metroArea || loc.title}
                            </h3>
                          </div>
                          {loc.subCities?.length > 0 && (
                            <p className="vc-loc-card__subcities">
                              {loc.subCities.slice(0, 6).join(', ')}
                              {loc.subCities.length > 6 && ` +${loc.subCities.length - 6} more`}
                            </p>
                          )}
                          <span className="vc-loc-card__arrow">
                            View Details <HiArrowRight />
                          </span>
                        </Link>
                      </StaggerChild>
                    ))}
                  </StaggerWrap>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="vc-section">
        <div className="vc-container">
          <FadeUp className="vc-phone-cta">
            <h2 className="vc-section-title">
              Don&apos;t See Your City?
            </h2>
            <p>
              We serve all of North Carolina and South Carolina. Call us at{' '}
              <a href={COMPANY.phoneTel} onClick={() => trackPhoneClick('locations-index-cta')}>
                {COMPANY.phone}
              </a>{' '}
              for LED signage anywhere in the Carolinas.
            </p>
            <Link to="/contact-us" className="vc-btn vc-btn--accent">
              Get A Free Quote <HiArrowRight />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
