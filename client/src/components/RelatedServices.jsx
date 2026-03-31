import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const ALL_SERVICES = [
  { label: 'LED Signs', path: '/led-signs' },
  { label: 'Digital Signs', path: '/digital-signs' },
  { label: 'Electronic Signs', path: '/electronic-signs' },
  { label: 'Lighted Signs', path: '/lighted-signs' },
  { label: 'Video Walls', path: '/video-wall' },
  { label: 'Channel Letters', path: '/channel-letters' },
  { label: 'Monument Signs', path: '/monument-signs' },
  { label: 'Pylon Signs', path: '/pylon-signs' },
];

export default function RelatedServices({ currentPath }) {
  const related = ALL_SERVICES.filter((s) => s.path !== currentPath);

  return (
    <section className="vc-section vc-section--alt">
      <div className="vc-container" style={{ textAlign: 'center' }}>
        <span className="vc-section-label">Related Services</span>
        <h2 className="vc-section-title" style={{ marginBottom: '32px' }}>Explore Our Other Sign Solutions</h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
        }}>
          {related.map((svc) => (
            <Link
              key={svc.path}
              to={svc.path}
              className="vc-btn vc-btn--outline-light vc-btn--sm"
            >
              {svc.label} <HiArrowRight />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
