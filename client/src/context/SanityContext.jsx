import { createContext, useContext, useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanity';
import { companySettingsQuery, siteSettingsQuery } from '../lib/queries';
import { COMPANY, NAV_LINKS, BRAND_COLORS, BRAND_FONTS } from '../utils/constants';

const SanityContext = createContext(null);

/**
 * Provides company settings and site settings from Sanity.
 * Falls back to hardcoded constants if Sanity is unreachable.
 */
export function SanityProvider({ children }) {
  const [company, setCompany] = useState(COMPANY);
  const [navLinks, setNavLinks] = useState(NAV_LINKS);
  const [brandColors, setBrandColors] = useState(BRAND_COLORS);
  const [brandFonts, setBrandFonts] = useState(BRAND_FONTS);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    Promise.allSettled([
      sanityClient.fetch(companySettingsQuery),
      sanityClient.fetch(siteSettingsQuery),
    ]).then(([companyResult, siteResult]) => {
      if (companyResult.status === 'fulfilled' && companyResult.value) {
        const c = companyResult.value;
        setCompany((prev) => ({ ...prev, ...c }));
      }
      if (siteResult.status === 'fulfilled' && siteResult.value) {
        const s = siteResult.value;
        if (s.navLinks?.length) {
          // Merge Sanity nav links with any hardcoded links not already present
          const sanityPaths = new Set(s.navLinks.map((l) => l.path));
          const extra = NAV_LINKS.filter((l) => !sanityPaths.has(l.path));
          // Insert extras before the last item (Contact Us)
          const merged = [...s.navLinks.slice(0, -1), ...extra, ...s.navLinks.slice(-1)];
          setNavLinks(merged);
        }
        if (s.brandColors) setBrandColors((prev) => ({ ...prev, ...s.brandColors }));
        if (s.brandFonts) setBrandFonts((prev) => ({ ...prev, ...s.brandFonts }));
      }
      setReady(true);
    });
  }, []);

  return (
    <SanityContext.Provider value={{ company, navLinks, brandColors, brandFonts, ready }}>
      {children}
    </SanityContext.Provider>
  );
}

export function useSanityContext() {
  const ctx = useContext(SanityContext);
  if (!ctx) throw new Error('useSanityContext must be used within SanityProvider');
  return ctx;
}
