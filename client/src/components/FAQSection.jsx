import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { HiChevronDown } from 'react-icons/hi';

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }) {
  // faqs = [{ question: '...', answer: '...' }]
  const [openIndex, setOpenIndex] = useState(null);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="vc-section">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="vc-container">
        <h2 className="vc-section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>{title}</h2>
        <div className="vc-faq">
          {faqs.map((faq, i) => (
            <div key={i} className={`vc-faq__item ${openIndex === i ? 'vc-faq__item--open' : ''}`}>
              <button
                className="vc-faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <HiChevronDown className={`vc-faq__icon ${openIndex === i ? 'vc-faq__icon--open' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className="vc-faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
