import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiArrowRight,
  HiChartSquareBar,
  HiPhotograph,
  HiOfficeBuilding,
  HiLightningBolt,
  HiSparkles,
  HiTemplate,
  HiViewBoards,
  HiSun,
  HiGlobe,
  HiFilm,
  HiCollection,
  HiColorSwatch,
  HiHome,
} from 'react-icons/hi';
import SEO from '../components/SEO';
import useThemeClass from '../hooks/useThemeClass';
import './DesignVariants.css';

const variants = [
  {
    title: 'Luminous Minimalism',
    path: '/variant-a',
    icon: <HiPhotograph />,
    label: 'Variant A',
    summary:
      'Ultra-clean Scandinavian minimalism meets industrial tech. White space, geometric precision, and subtle LED glow accents.',
    points: ['Light, airy aesthetic', 'Glass-morphism CTAs', 'Masonry portfolio layout'],
  },
  {
    title: 'Urban Industrial Tech',
    path: '/variant-b',
    icon: <HiChartSquareBar />,
    label: 'Variant B',
    summary:
      'Dark mode with neon accents and gritty-polished aesthetic. Appeals to city businesses and modern franchises.',
    points: ['Dark theme, neon glow', 'Animated wireframe hero', 'Horizontal service panels'],
  },
  {
    title: 'Executive Premium',
    path: '/variant-c',
    icon: <HiOfficeBuilding />,
    label: 'Variant C',
    summary:
      'Luxury corporate with editorial magazine-style layouts. Gold and navy accents for enterprise and high-value B2B clients.',
    points: ['Serif/sans-serif pairing', 'Split-screen hero', 'Editorial service grid'],
  },
  {
    title: 'Neon Pulse',
    path: '/variant-d',
    icon: <HiLightningBolt />,
    label: 'Variant D',
    summary:
      'Cyberpunk-inspired retro-futurism with hot pink and electric purple neon on deep black. Terminal-style typography and scan-line effects.',
    points: ['Cyberpunk neon palette', 'Scan-line visual effects', 'Retro-futuristic typography'],
  },
  {
    title: 'Organic Flow',
    path: '/variant-e',
    icon: <HiSparkles />,
    label: 'Variant E',
    summary:
      'Nature-inspired design with flowing organic shapes, sage green tones, and soft rounded elements. Calm, approachable, and eco-conscious.',
    points: ['Organic curved layouts', 'Nature-inspired palette', 'Soft, rounded UI elements'],
  },
  {
    title: 'Blueprint Technical',
    path: '/variant-f',
    icon: <HiTemplate />,
    label: 'Variant F',
    summary:
      'Engineering schematic aesthetic with grid-paper backgrounds, cyan on navy, and monospace typography. Precision-driven and technical.',
    points: ['Grid-paper backgrounds', 'Monospace typography', 'Technical drawing aesthetic'],
  },
  {
    title: 'Bold Contrast',
    path: '/variant-g',
    icon: <HiViewBoards />,
    label: 'Variant G',
    summary:
      'High-contrast brutalist design with black and white blocks plus electric red accents. Massive typography and sharp geometric shapes.',
    points: ['Brutalist typography', 'High-contrast B&W + red', 'Sharp geometric layouts'],
  },
  {
    title: 'Warm Commerce',
    path: '/variant-h',
    icon: <HiSun />,
    label: 'Variant H',
    summary:
      'Warm, conversion-focused design with coral and amber tones. Friendly, approachable, and optimized for trust-building and lead generation.',
    points: ['Warm sunset palette', 'Trust-building social proof', 'Conversion-optimized layout'],
  },
  {
    title: 'Cinematic Noir',
    path: '/variant-i',
    icon: <HiFilm />,
    label: 'Variant I',
    summary:
      'Dramatic film-noir aesthetic with rich charcoal, deep purple, and burnt orange accents. Signs look their best at night, and this design celebrates that nighttime drama.',
    points: ['Cinematic spotlight effects', 'Dramatic serif typography', 'Film-strip inspired testimonials'],
  },
  {
    title: 'Glass Luxe',
    path: '/variant-j',
    icon: <HiGlobe />,
    label: 'Variant J',
    summary:
      'Modern corporate glassmorphism with frosted surfaces, soft blue-gray tones, and teal accents. Built for property managers and corporate buyers.',
    points: ['Frosted glass cards', 'Clean geometric layout', 'Corporate-grade trust signals'],
  },
  {
    title: 'Artisan Craft',
    path: '/variant-k',
    icon: <HiColorSwatch />,
    label: 'Variant K',
    summary:
      'Editorial warmth celebrating the fabrication process. Terracotta and gold tones with serif typography, craft-inspired dividers, and a workshop aesthetic.',
    points: ['DM Serif Display typography', 'Terracotta and gold palette', 'Craft-inspired editorial layout'],
  },
  {
    title: 'Showroom',
    path: '/variant-l',
    icon: <HiCollection />,
    label: 'Variant L',
    summary:
      'Apple Store meets industrial catalog. Clean product-catalog grid with spec badges, category tags, and organized browsing. Each sign type feels like a product you can spec out.',
    points: ['Product-style service cards', 'Spec badge system', 'Catalog-grid portfolio layout'],
  },
  {
    title: 'Neighborhood Local',
    path: '/variant-m',
    icon: <HiHome />,
    label: 'Variant M',
    summary:
      'Hyper-local Charlotte focused with warm community trust vibes. Forest green and amber tones, rounded friendly UI, and neighborhood pride throughout.',
    points: ['Charlotte neighborhood callouts', 'Locally owned badges', 'Community-style testimonials'],
  },
];

export default function DesignVariants() {
  useThemeClass();

  return (
    <>
      <SEO
        title="Website Variant Studio"
        description="Explore industry-specific UI/UX homepage directions for ProVizion LED."
        keywords="website variants, UI UX redesign, signage website concepts"
        path="/"
      />

      <section className="variant-studio-hero">
        <div className="container container--narrow variant-studio-hero__inner">
          <span className="variant-studio-kicker">UI/UX Uplift Studio</span>
          <h1>13 Website Design Variants</h1>
          <p>
            Each direction keeps your core services intact while reshaping the visual identity and
            user journey for a different buyer context and aesthetic.
          </p>
          <div className="variant-studio-hero__actions">
            <Link to="/home" className="btn btn--outline">
              View Current Site
            </Link>
          </div>
        </div>
      </section>

      <section className="section variant-studio-grid-section">
        <div className="container">
          <div className="variant-studio-grid">
            {variants.map((variant, index) => (
              <motion.article
                key={variant.path}
                className="variant-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * index, duration: 0.45 }}
              >
                <div className="variant-card__meta">
                  <span>{variant.label}</span>
                  <div className="variant-card__icon">{variant.icon}</div>
                </div>

                <h2>{variant.title}</h2>
                <p>{variant.summary}</p>

                <ul>
                  {variant.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <Link to={variant.path} className="variant-card__link">
                  Open this variant <HiArrowRight />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
