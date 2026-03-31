import { COMPANY } from './constants';

const BASE_URL = 'https://www.provizionledsigns.com';

export function getServiceSchema(name, description, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      telephone: COMPANY.phoneTel.replace('tel:', ''),
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.state,
        postalCode: COMPANY.address.zip,
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'North Carolina',
    },
  };
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${BASE_URL}${item.url}` } : {}),
    })),
  };
}

export function getFAQSchema(faqs) {
  return {
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
}

export function getBlogPostSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author || 'ProVizion LED',
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}${COMPANY.ogImage}`,
      },
    },
    ...(post.featuredImageUrl ? { image: post.featuredImageUrl } : {}),
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: BASE_URL,
    name: COMPANY.name,
    description: 'LED & Digital Sign Manufacturer in Charlotte, NC',
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
    },
  };
}

export function getLocationSchema({ city, state, stateFullName, title, description, url, faqs }) {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}${url}#business`,
      name: `${COMPANY.name} — ${city || stateFullName || state}`,
      description,
      url: `${BASE_URL}${url}`,
      telephone: COMPANY.phoneTel.replace('tel:', ''),
      email: COMPANY.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY.address.street,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.state,
        postalCode: COMPANY.address.zip,
        addressCountry: 'US',
      },
      areaServed: city
        ? { '@type': 'City', name: `${city}, ${state}` }
        : { '@type': 'State', name: stateFullName || state },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: COMPANY.rating,
        reviewCount: COMPANY.reviewCount,
      },
      image: `${BASE_URL}${COMPANY.ogImage}`,
      priceRange: '$$',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      description,
      url: `${BASE_URL}${url}`,
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}${url}#business`,
      },
      areaServed: city
        ? { '@type': 'City', name: `${city}, ${state}` }
        : { '@type': 'State', name: stateFullName || state },
    },
  ];

  if (faqs && faqs.length > 0) {
    schema.push({
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
    });
  }

  return schema;
}
