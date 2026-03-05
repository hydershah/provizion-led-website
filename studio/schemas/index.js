import companySettings from './companySettings';
import siteSettings from './siteSettings';
import service from './service';
import processStep from './processStep';
import whyChooseItem from './whyChooseItem';
import testimonial from './testimonial';
import b2bFeature from './b2bFeature';
import portfolioItem from './portfolioItem';
import certification from './certification';
import blogCategory from './blogCategory';
import blogPost from './blogPost';
import page from './page';
import featureCard from './objects/featureCard';
import productCard from './objects/productCard';
import splitLayout from './objects/splitLayout';
import ctaSection from './objects/ctaSection';

export const schemaTypes = [
  // Singletons
  companySettings,
  siteSettings,
  // Documents
  page,
  blogCategory,
  blogPost,
  service,
  processStep,
  whyChooseItem,
  testimonial,
  b2bFeature,
  portfolioItem,
  certification,
  // Objects
  featureCard,
  productCard,
  splitLayout,
  ctaSection,
];
