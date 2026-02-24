import { Link } from 'react-router-dom';
import {
  HiArrowRight,
  HiBadgeCheck,
  HiClipboardList,
  HiMap,
  HiOfficeBuilding,
  HiPhone,
  HiShieldCheck,
  HiTemplate,
  HiUserGroup,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import QuoteForm from '../components/QuoteForm';
import useThemeClass from '../hooks/useThemeClass';
import { COMPANY } from '../utils/constants';
import './HomeVariantCivic.css';

const chapterLinks = [
  { id: 'audit', label: '01 Site Audit' },
  { id: 'taxonomy', label: '02 Sign Taxonomy' },
  { id: 'implementation', label: '03 Implementation Plan' },
  { id: 'brief', label: '04 Program Brief' },
];

const auditChecks = [
  'Entry/exit pinch points and navigation confusion zones',
  'Code, ADA, and accessibility compliance considerations',
  'Interior/exterior hierarchy and naming consistency',
  'Facilities and leadership signoff workflow mapping',
];

const taxonomy = [
  {
    type: 'Primary Orientation',
    context: 'Campus entrances and parking approaches',
    purpose: 'Immediate location confidence for first-time visitors',
  },
  {
    type: 'Directional Guidance',
    context: 'Corridors, intersections, and multi-building connectors',
    purpose: 'Fast routing to departments without staff intervention',
  },
  {
    type: 'Destination + Compliance',
    context: 'Room IDs, ADA markers, and service counters',
    purpose: 'Accessibility and legal clarity at point-of-arrival',
  },
];

const planMilestones = [
  { phase: 'Weeks 1-2', title: 'Stakeholder Alignment + Site Walk', owner: 'Planning Team' },
  { phase: 'Weeks 3-4', title: 'Sign Family System + Costed Scope', owner: 'Design + Estimating' },
  { phase: 'Weeks 5-8', title: 'Fabrication and Phased Installation', owner: 'Production + Field Ops' },
  { phase: 'Weeks 9+', title: 'Handoff, Documentation, and Maintenance Plan', owner: 'Program Lead' },
];

const deliverables = [
  'Wayfinding audit summary with issue heatmap',
  'Sign taxonomy and naming conventions packet',
  'Phased install plan with disruption-minimized schedule',
  'Post-install standards and maintenance documentation',
];

export default function HomeVariantCivic() {
  useThemeClass('theme-civic');

  return (
    <>
      <SEO
        title="Variant 3 | Civic Wayfinding Blueprint"
        description="Document-style civic and institutional wayfinding website concept with trust-first UX."
        keywords="civic wayfinding UX, healthcare signage planning, institutional signage website"
        path="/variant-civic"
      />

      <section className="cvx-hero">
        <div className="container container--wide">
          <div className="cvx-variant-bar">
            <span>Variant 3 of 3: Civic Wayfinding Blueprint</span>
            <Link to="/">
              Compare all variants <HiArrowRight />
            </Link>
          </div>

          <div className="cvx-hero-inner">
            <p className="cvx-kicker">Institutional + Public-Facing Facility UX</p>
            <h1>A Proposal-Style Experience for Wayfinding and Compliance Programs.</h1>
            <p>
              This variant is intentionally structured like a planning document so facilities,
              leadership, and procurement stakeholders can align quickly.
            </p>
            <div className="cvx-hero-actions">
              <Link to="/contact-us" className="btn btn--primary btn--lg">
                Start Wayfinding Plan
              </Link>
              <a href={COMPANY.phoneTel} className="btn btn--outline btn--lg">
                <HiPhone /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cvx-doc-section">
        <div className="container container--wide cvx-doc-grid">
          <aside className="cvx-toc" aria-label="Document chapters">
            <h2>Program Chapters</h2>
            <nav>
              {chapterLinks.map((chapter) => (
                <a key={chapter.id} href={`#${chapter.id}`}>
                  {chapter.label}
                </a>
              ))}
            </nav>
            <div className="cvx-toc-note">
              <HiOfficeBuilding />
              <p>Designed for healthcare, campuses, civic complexes, and public institutions.</p>
            </div>
          </aside>

          <div className="cvx-doc-main">
            <article id="audit" className="cvx-block">
              <header>
                <span>01</span>
                <h2>
                  <HiMap /> Site Audit Framework
                </h2>
              </header>
              <p>
                We begin by documenting navigation friction, accessibility gaps, and naming
                inconsistencies that create confusion for visitors and staff.
              </p>
              <ul>
                {auditChecks.map((item) => (
                  <li key={item}>
                    <HiBadgeCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article id="taxonomy" className="cvx-block">
              <header>
                <span>02</span>
                <h2>
                  <HiTemplate /> Sign Taxonomy + Standards
                </h2>
              </header>
              <div className="cvx-taxonomy-grid">
                {taxonomy.map((item) => (
                  <section key={item.type}>
                    <h3>{item.type}</h3>
                    <p>
                      <strong>Context:</strong> {item.context}
                    </p>
                    <p>
                      <strong>Purpose:</strong> {item.purpose}
                    </p>
                  </section>
                ))}
              </div>
            </article>

            <article id="implementation" className="cvx-block">
              <header>
                <span>03</span>
                <h2>
                  <HiClipboardList /> Implementation Schedule
                </h2>
              </header>
              <div className="cvx-plan-list">
                {planMilestones.map((item) => (
                  <div key={item.title}>
                    <p>{item.phase}</p>
                    <h3>{item.title}</h3>
                    <span>{item.owner}</span>
                  </div>
                ))}
              </div>
            </article>

            <article id="brief" className="cvx-block cvx-block--brief">
              <header>
                <span>04</span>
                <h2>
                  <HiUserGroup /> Program Brief Intake
                </h2>
              </header>
              <div className="cvx-brief-grid">
                <div className="cvx-deliverables">
                  <h3>What You Receive</h3>
                  <ul>
                    {deliverables.map((item) => (
                      <li key={item}>
                        <HiShieldCheck />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="cvx-form-wrap">
                  <h3>Submit Facility Details</h3>
                  <p>We usually return an initial direction within 72 hours.</p>
                  <QuoteForm source="variant-civic-blueprint" compact />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
