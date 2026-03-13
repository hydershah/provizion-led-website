/* ─── GROQ Queries for Sanity ─── */

export const companySettingsQuery = `*[_type == "companySettings"][0]{
  name, tagline, phone, phoneRaw, phoneTel, email,
  address, url, rating, reviewCount,
  logo, logoFull, logoSquare, ogImage
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  brandColors, brandFonts, navLinks, serviceTypes
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc){
  _id, title, description, image, link, order
}`;

export const processStepsQuery = `*[_type == "processStep"] | order(order asc){
  _id, step, title, description, iconName, order
}`;

export const whyChooseQuery = `*[_type == "whyChooseItem"] | order(order asc){
  _id, title, description, order
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc){
  _id, name, business, rating, text, order
}`;

export const b2bFeaturesQuery = `*[_type == "b2bFeature"] | order(order asc){
  _id, title, description, order
}`;

export const portfolioQuery = `*[_type == "portfolioItem"] | order(order asc){
  _id, title, category, image, order
}`;

export const certificationsQuery = `*[_type == "certification"] | order(order asc){
  _id, name, order
}`;

export const homePageQuery = `{
  "services": ${servicesQuery},
  "processSteps": ${processStepsQuery},
  "whyChoose": ${whyChooseQuery},
  "testimonials": ${testimonialsQuery},
  "b2bFeatures": ${b2bFeaturesQuery},
  "portfolio": ${portfolioQuery},
  "certifications": ${certificationsQuery}
}`;

/* ─── Blog ─── */

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc){
  _id, title, slug, author, excerpt, featuredImage, publishedAt,
  category->{ title, slug }
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id, title, slug, author, excerpt, featuredImage, publishedAt,
  body[]{ ..., _type == "image" => { ..., asset-> } },
  category->{ title, slug },
  metaTitle, metaDescription
}`;

export const blogCategoriesQuery = `*[_type == "blogCategory"] | order(title asc){
  _id, title, slug, description
}`;

/* ─── Pages ─── */

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  title, slug, pageType,
  metaTitle, metaDescription, metaKeywords,
  hero {
    label, title, titleAccent, subtitle, servicesTags,
    backgroundImage
  },
  sections[] {
    _type, _key,
    // splitLayout fields
    label, title, body, image, imagePosition, buttonText, buttonLink,
    // featureGrid / productGrid fields
    subtitle, columns, items, closingText,
    // ctaSection fields
    showLogo
  }
}`;

/* ─── Location Pages ─── */

export const locationPageBySlugQuery = `*[_type == "locationPage" && slug.current == $slug][0]{
  _id, title, slug, tier, city, state, stateFullName,
  metroArea, subCities, priority, estimatedVolume,
  hero { label, headline, subheadline, backgroundImage, serviceTags },
  sections[] {
    _key, sectionType, label, title, body, image, imagePosition,
    features[] { title, description, iconName },
    altBackground, buttonText, buttonLink
  },
  industries[] { name, description, iconName },
  faqs[] { question, answer },
  nearbyLocations[]-> { _id, title, slug, city, state, tier },
  parentHub-> { _id, title, slug },
  metaTitle, metaDescription, keywords, order
}`;

export const allLocationPagesQuery = `*[_type == "locationPage"] | order(tier asc, state asc, order asc){
  _id, title, slug, tier, city, state, stateFullName,
  metroArea, subCities, priority, estimatedVolume, order,
  hero { headline }
}`;

export const locationPagesByStateQuery = `*[_type == "locationPage" && state == $state] | order(tier asc, order asc){
  _id, title, slug, tier, city, state, stateFullName,
  metroArea, subCities, priority, estimatedVolume, order,
  hero { headline }
}`;

export const locationPagesByTierQuery = `*[_type == "locationPage" && tier == $tier] | order(state asc, order asc){
  _id, title, slug, tier, city, state, stateFullName,
  metroArea, subCities, priority, estimatedVolume, order,
  hero { headline }
}`;
