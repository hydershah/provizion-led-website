import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to ProVizion LED homepage."
        path="/404"
      />

      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        textAlign: 'center',
        padding: 'var(--space-8)',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-7xl)',
            fontWeight: 900,
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-4)',
          }}>
            404
          </h1>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            fontWeight: 700,
            color: 'var(--color-white)',
            marginBottom: 'var(--space-4)',
          }}>
            Page Not Found
          </h2>
          <p style={{
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-8)',
            maxWidth: '400px',
          }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link to="/" className="btn btn--primary btn--lg">
            Back to Home
          </Link>
        </motion.div>
      </section>
    </>
  );
}
