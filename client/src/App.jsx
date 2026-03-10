import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';

// Lazy load website pages (primary)
const HomePage = lazy(() => import('./pages/website/HomePage'));
const LEDSignsPage = lazy(() => import('./pages/website/LEDSignsPage'));
const DigitalSignsPage = lazy(() => import('./pages/website/DigitalSignsPage'));
const ElectronicSignsPage = lazy(() => import('./pages/website/ElectronicSignsPage'));
const LightedSignsPage = lazy(() => import('./pages/website/LightedSignsPage'));
const ContactPage = lazy(() => import('./pages/website/ContactPage'));
const BlogPage = lazy(() => import('./pages/website/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/website/BlogPostPage'));

// Lazy load utility pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy load design variants (reference)
const DesignVariants = lazy(() => import('./pages/DesignVariants'));
const VariantA = lazy(() => import('./pages/VariantA'));
const VariantB = lazy(() => import('./pages/VariantB'));
const VariantC = lazy(() => import('./pages/VariantC'));
const VariantD = lazy(() => import('./pages/VariantD'));
const VariantE = lazy(() => import('./pages/VariantE'));
const VariantF = lazy(() => import('./pages/VariantF'));
const VariantG = lazy(() => import('./pages/VariantG'));
const VariantH = lazy(() => import('./pages/VariantH'));
const VariantI = lazy(() => import('./pages/VariantI'));
const VariantJ = lazy(() => import('./pages/VariantJ'));
const VariantK = lazy(() => import('./pages/VariantK'));
const VariantL = lazy(() => import('./pages/VariantL'));
const VariantM = lazy(() => import('./pages/VariantM'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Primary website pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/digital-signs" element={<DigitalSignsPage />} />
            <Route path="/electronic-signs" element={<ElectronicSignsPage />} />
            <Route path="/led-signs" element={<LEDSignsPage />} />
            <Route path="/lighted-signs" element={<LightedSignsPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />

            {/* Design variants (reference) */}
            <Route path="/design-variants" element={<DesignVariants />} />
            <Route path="/variant-a" element={<VariantA />} />
            <Route path="/variant-b" element={<VariantB />} />
            <Route path="/variant-c" element={<VariantC />} />
            <Route path="/variant-d" element={<VariantD />} />
            <Route path="/variant-e" element={<VariantE />} />
            <Route path="/variant-f" element={<VariantF />} />
            <Route path="/variant-g" element={<VariantG />} />
            <Route path="/variant-h" element={<VariantH />} />
            <Route path="/variant-i" element={<VariantI />} />
            <Route path="/variant-j" element={<VariantJ />} />
            <Route path="/variant-k" element={<VariantK />} />
            <Route path="/variant-l" element={<VariantL />} />
            <Route path="/variant-m" element={<VariantM />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
