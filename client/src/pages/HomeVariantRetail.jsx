import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiArrowRight,
  HiBadgeCheck,
  HiFire,
  HiLightningBolt,
  HiPhone,
  HiPhotograph,
  HiPlay,
  HiSparkles,
  HiTag,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './HomeVariantRetail.css';

const campaignModes = {
  lunch: {
    label: 'Lunch Rush',
    headline: 'Drive order spikes during 11:30 AM-2:00 PM windows.',
    stats: [
      { value: '+29%', label: 'Midday conversion lift' },
      { value: '3x/day', label: 'Creative swaps' },
      { value: '15 min', label: 'Update turnaround' },
    ],
    actions: ['Hero offer loop', 'Menu spotlight rotation', 'Checkout urgency banners'],
  },
  weekend: {
    label: 'Weekend Drop',
    headline: 'Own Friday-Sunday footfall with event-led visuals.',
    stats: [
      { value: '+36%', label: 'Weekend walk-ins' },
      { value: '2.2x', label: 'Promo redemption' },
      { value: '48 hr', label: 'Launch prep cycle' },
    ],
    actions: ['Night-time glow creatives', 'Limited-run bundles', 'Social-ready content kit'],
  },
  seasonal: {
    label: 'Seasonal Push',
    headline: 'Roll out coordinated seasonal campaigns across every location.',
    stats: [
      { value: '40+', label: 'Store sync rollout' },
      { value: '5', label: 'Template families' },
      { value: '72 hr', label: 'Creative adaptation' },
    ],
    actions: ['Theme pack deployment', 'SKU-specific rotations', 'Regional variant controls'],
  },
};

const sceneCards = [
  {
    title: 'Street Capture Layer',
    detail: 'Facade motion sequences built for passing traffic and first-impression pull.',
    image: '/images/digital-signage-urban.jpg',
  },
  {
    title: 'Inside Conversion Layer',
    detail: 'Digital menu and offer choreography tuned for short dwell-time decisions.',
    image: '/images/hero-led-display.jpg',
  },
  {
    title: 'Retention Layer',
    detail: 'Brand memory loops and seasonal callbacks that increase repeat visits.',
    image: '/images/led-signs-closeup.jpg',
  },
];

const growthChecks = [
  'Promotion-ready template system for faster launches',
  'Campaign pacing aligned to daypart and demand',
  'In-store and outdoor screens designed as one funnel',
  'Creative + fabrication + install managed by one team',
];

export default function HomeVariantRetail() {
  useThemeClass('theme-retail');
  const [mode, setMode] = useState('lunch');

  const activeMode = useMemo(() => campaignModes[mode], [mode]);

  return (
    <>
      <SEO
        title="Variant 2 | Retail Campaign Studio"
        description="Retail-focused campaign studio layout with interactive planning flows and conversion UX."
        keywords="retail signage conversion UX, campaign design website, hospitality digital signage"
        path="/variant-retail"
      />

      <section className="retx-hero">
        <div className="container container--wide">
          <div className="retx-variant-bar">
            <span>Variant 2 of 3: Retail Campaign Studio</span>
            <Link to="/">
              Compare all variants <HiArrowRight />
            </Link>
          </div>

          <div className="retx-hero-grid">
            <div className="retx-hero-copy">
              <p className="retx-kicker">Retail + Hospitality Conversion Design</p>
              <h1>Design Signage Campaigns Like Product Launches.</h1>
              <p>
                This direction behaves like a campaign studio: fast concepting, clear launch plans,
                and visual merchandising designed for purchase behavior.
              </p>

              <div className="retx-pill-row">
                <span>
                  <HiFire /> High-Intent Traffic
                </span>
                <span>
                  <HiTag /> Offer Cadence
                </span>
                <span>
                  <HiSparkles /> Creative Velocity
                </span>
              </div>

              <div className="retx-hero-actions">
                <Link to="/contact-us" className="btn btn--primary btn--lg">
                  Build Campaign Plan
                </Link>
                <a href={COMPANY.phoneTel} className="btn btn--outline btn--lg">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </div>

            <motion.div
              className="retx-collage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/digital-signage-urban.jpg" alt="Retail streetscape digital signage" />
              <img src="/images/led-signs-closeup.jpg" alt="LED sign creative detail" />
              <div>
                <HiPlay />
                <strong>Campaign Loop Live</strong>
                <p>End-to-end launch flow from creative concept to in-store deployment.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="retx-lab-section" id="campaign-lab">
        <div className="container container--wide retx-lab-grid">
          <aside className="retx-mode-picker" aria-label="Campaign mode picker">
            <h2>Campaign Lab</h2>
            <p>Switch strategy modes to preview outcomes and execution focus.</p>
            <div role="tablist" aria-label="Campaign modes">
              {Object.entries(campaignModes).map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={mode === key}
                  className={mode === key ? 'is-active' : ''}
                  onClick={() => setMode(key)}
                >
                  {value.label}
                </button>
              ))}
            </div>
          </aside>

          <article className="retx-mode-output" role="tabpanel">
            <header>
              <p>{activeMode.label}</p>
              <h3>{activeMode.headline}</h3>
            </header>

            <div className="retx-stat-grid">
              {activeMode.stats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="retx-action-list">
              {activeMode.actions.map((item) => (
                <p key={item}>
                  <HiLightningBolt /> {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="retx-scenes-section">
        <div className="container container--wide">
          <div className="retx-scenes-head">
            <span>Merchandising Stack</span>
            <h2>Three Experience Layers That Move Customers to Purchase</h2>
          </div>

          <div className="retx-scene-rail" role="list">
            {sceneCards.map((card) => (
              <article key={card.title} role="listitem" className="retx-scene-card">
                <img src={card.image} alt={card.title} loading="lazy" />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="retx-final-section">
        <div className="container container--wide retx-final-grid">
          <div className="retx-growth-card">
            <h2>
              <HiPhotograph /> Your Brand Needs a Campaign Operating System
            </h2>
            <p>
              We combine sign design, content planning, fabrication, and installation so each
              campaign can launch fast without inconsistency across locations.
            </p>
            <ul>
              {growthChecks.map((item) => (
                <li key={item}>
                  <HiBadgeCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="retx-form-card">
            <h3>Get a Retail Campaign Blueprint</h3>
            <p>Share your store format, promo calendar, and growth targets.</p>
            <QuoteForm source="variant-retail-studio" compact />
          </div>
        </div>
      </section>
    </>
  );
}
