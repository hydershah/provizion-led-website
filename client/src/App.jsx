import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const DesignVariants = lazy(() => import('./pages/DesignVariants'));
const VariantA = lazy(() => import('./pages/VariantA'));
const VariantB = lazy(() => import('./pages/VariantB'));
const VariantC = lazy(() => import('./pages/VariantC'));
const VariantD = lazy(() => import('./pages/VariantD'));
const VariantE = lazy(() => import('./pages/VariantE'));
const VariantF = lazy(() => import('./pages/VariantF'));
const VariantG = lazy(() => import('./pages/VariantG'));
const VariantH = lazy(() => import('./pages/VariantH'));
const LEDSigns = lazy(() => import('./pages/LEDSigns'));
const DigitalSigns = lazy(() => import('./pages/DigitalSigns'));
const ElectronicSigns = lazy(() => import('./pages/ElectronicSigns'));
const LightedSigns = lazy(() => import('./pages/LightedSigns'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<DesignVariants />} />
            <Route path="/home" element={<Home />} />
            <Route path="/variant-a" element={<VariantA />} />
            <Route path="/variant-b" element={<VariantB />} />
            <Route path="/variant-c" element={<VariantC />} />
            <Route path="/variant-d" element={<VariantD />} />
            <Route path="/variant-e" element={<VariantE />} />
            <Route path="/variant-f" element={<VariantF />} />
            <Route path="/variant-g" element={<VariantG />} />
            <Route path="/variant-h" element={<VariantH />} />
            <Route path="/led-signs" element={<LEDSigns />} />
            <Route path="/digital-signs" element={<DigitalSigns />} />
            <Route path="/electronic-signs" element={<ElectronicSigns />} />
            <Route path="/lighted-signs" element={<LightedSigns />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/contact-us-cm" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
