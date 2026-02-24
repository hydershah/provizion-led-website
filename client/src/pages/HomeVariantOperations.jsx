import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiArrowRight,
  HiBadgeCheck,
  HiChartBar,
  HiClipboardCheck,
  HiClock,
  HiLocationMarker,
  HiPhone,
  HiShieldCheck,
  HiSparkles,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './HomeVariantOperations.css';

const liveMetrics = [
  { label: 'Active Regions', value: '12' },
  { label: 'Sites in Queue', value: '47' },
  { label: 'Avg. SLA', value: '6.2 days' },
  { label: 'Install Success', value: '98.1%' },
];

const phaseBoard = [
  {
    phase: 'Discovery + Site Intake',
    owner: 'Program Lead',
    progress: 100,
    note: 'Brand standards, permits, and structural surveys completed.',
  },
  {
    phase: 'Template + Engineering',
    owner: 'Design Ops',
    progress: 86,
    note: 'Core sign families approved with local adaptation rules.',
  },
  {
    phase: 'Fabrication + Logistics',
    owner: 'Production Control',
    progress: 72,
    note: 'Batch manufacturing synced to opening calendars per market.',
  },
  {
    phase: 'Install + QA Signoff',
    owner: 'Field Supervisor',
    progress: 58,
    note: 'Photo-verified completion and punch-list closeout in progress.',
  },
];

const rolloutMatrix = [
  { region: 'Carolinas', sites: 18, status: 'On Track', eta: 'Mar 3' },
  { region: 'Mid-Atlantic', sites: 12, status: 'Watchlist', eta: 'Mar 8' },
  { region: 'Southeast', sites: 9, status: 'On Track', eta: 'Mar 11' },
  { region: 'Texas', sites: 8, status: 'Pending Permit', eta: 'Mar 15' },
];

const guardrails = [
  'Single source of truth for sign specs and revisions',
  'Install handoff packets for operations and facilities teams',
  'Escalation path for permit and landlord blockers',
  'Monthly performance review for maintenance and uptime',
];

export default function HomeVariantOperations() {
  useThemeClass('theme-ops');

  return (
    <>
      <SEO
        title="Variant 1 | Operations Command Center"
        description="Operations-first command center layout for franchise and multi-location sign rollouts."
        keywords="franchise sign rollout, operations dashboard website, multi-location signage"
        path="/variant-operations"
      />

      <section className="opsx-hero">
        <div className="container container--wide">
          <div className="opsx-variant-bar">
            <span>Variant 1 of 3: Operations Command Center</span>
            <Link to="/">
              Compare all variants <HiArrowRight />
            </Link>
          </div>

          <div className="opsx-hero-grid">
            <div className="opsx-hero-copy">
              <p className="opsx-kicker">Franchise + Multi-Location Program UX</p>
              <h1>Manage Signage Rollouts Like an Operations Control Room.</h1>
              <p>
                This design is structured for leadership and operations teams who need visibility,
                schedule control, and repeatable delivery across dozens of sites.
              </p>
              <div className="opsx-hero-actions">
                <Link to="/contact-us" className="btn btn--primary btn--lg">
                  Start Program Setup
                </Link>
                <a href={COMPANY.phoneTel} className="btn btn--outline btn--lg">
                  <HiPhone /> {COMPANY.phone}
                </a>
              </div>
            </div>

            <motion.aside
              className="opsx-live-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="opsx-live-head">
                <HiSparkles /> Live Program Snapshot
              </div>
              <div className="opsx-live-grid">
                {liveMetrics.map((item) => (
                  <article key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
              <div className="opsx-live-log" role="list" aria-label="Program updates">
                <p role="listitem">02:18 AM · Region pack approved for Mid-Atlantic phase 2.</p>
                <p role="listitem">03:06 AM · 5 installs photo-verified and archived.</p>
                <p role="listitem">04:21 AM · Permit dependency flagged for Dallas cluster.</p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="opsx-command-section">
        <div className="container container--wide opsx-command-grid">
          <aside className="opsx-rail">
            <div className="opsx-rail-card">
              <h2>Program Intake</h2>
              <p>
                Send your location list, launch windows, and rollout priorities. We return a
                phased execution brief.
              </p>
              <QuoteForm source="variant-ops-command" compact />
            </div>

            <div className="opsx-rail-note">
              <HiLocationMarker />
              <p>
                Coordination HQ: Charlotte, NC. Field teams and partner installers routed per
                territory.
              </p>
            </div>
          </aside>

          <div className="opsx-command-main">
            <article className="opsx-module">
              <header>
                <h2>
                  <HiClipboardCheck /> Phase Board
                </h2>
                <span>Controlled execution from intake to QA signoff</span>
              </header>
              <div className="opsx-phase-list">
                {phaseBoard.map((item) => (
                  <div key={item.phase} className="opsx-phase-row">
                    <div className="opsx-phase-copy">
                      <h3>{item.phase}</h3>
                      <p>{item.note}</p>
                    </div>
                    <div className="opsx-phase-meta">
                      <span>{item.owner}</span>
                      <div className="opsx-progress">
                        <i style={{ width: `${item.progress}%` }} />
                      </div>
                      <strong>{item.progress}%</strong>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="opsx-module">
              <header>
                <h2>
                  <HiChartBar /> Region Deployment Matrix
                </h2>
                <span>Current market rollout status</span>
              </header>
              <div className="opsx-table-wrap">
                <table className="opsx-table">
                  <thead>
                    <tr>
                      <th>Region</th>
                      <th>Sites</th>
                      <th>Status</th>
                      <th>ETA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rolloutMatrix.map((row) => (
                      <tr key={row.region}>
                        <td>{row.region}</td>
                        <td>{row.sites}</td>
                        <td>
                          <span className={`opsx-badge opsx-badge--${row.status.toLowerCase().replace(/\s+/g, '-')}`}>
                            {row.status}
                          </span>
                        </td>
                        <td>{row.eta}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="opsx-module opsx-module--compact">
              <header>
                <h2>
                  <HiShieldCheck /> Program Guardrails
                </h2>
                <span>How quality stays consistent across every install</span>
              </header>
              <ul>
                {guardrails.map((item) => (
                  <li key={item}>
                    <HiBadgeCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="opsx-bottom-band">
        <div className="container container--wide opsx-bottom-band__inner">
          <p>
            <HiClock /> Need a rollout scope this week? We can stage by market, permit readiness,
            and launch priority.
          </p>
          <Link to="/contact-us" className="btn btn--primary">
            Request Executive Rollout Plan
          </Link>
        </div>
      </section>
    </>
  );
}
