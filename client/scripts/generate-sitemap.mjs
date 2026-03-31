#!/usr/bin/env node
/**
 * Sitemap Generator for ProVizion LED Signs
 * Generates sitemap.xml with static pages + dynamic blog/location pages from Sanity CMS.
 * Run: node scripts/generate-sitemap.mjs
 */

import { createClient } from '@sanity/client';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.provizionledsigns.com';

const sanity = createClient({
  projectId: 'kiu1l2o6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Static pages with priorities
const staticPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/led-signs', changefreq: 'monthly', priority: '0.9' },
  { path: '/digital-signs', changefreq: 'monthly', priority: '0.9' },
  { path: '/electronic-signs', changefreq: 'monthly', priority: '0.9' },
  { path: '/lighted-signs', changefreq: 'monthly', priority: '0.9' },
  { path: '/video-wall', changefreq: 'monthly', priority: '0.9' },
  { path: '/pylon-signs', changefreq: 'monthly', priority: '0.9' },
  { path: '/channel-letters', changefreq: 'monthly', priority: '0.9' },
  { path: '/monument-signs', changefreq: 'monthly', priority: '0.9' },
  { path: '/contact-us', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/locations', changefreq: 'monthly', priority: '0.8' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
];

function toXmlEntry({ path, changefreq, priority, lastmod }) {
  return `  <url>
    <loc>${BASE_URL}${path}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generate() {
  const today = new Date().toISOString().split('T')[0];

  // Fetch blog posts from Sanity
  const posts = await sanity.fetch(
    `*[_type == "blogPost" && !(_id in path("drafts.**"))]{ "slug": slug.current, _updatedAt }`
  ).catch(() => []);

  // Fetch location pages from Sanity
  const locations = await sanity.fetch(
    `*[_type == "locationPage" && !(_id in path("drafts.**"))]{ slug, _updatedAt }`
  ).catch(() => []);

  const entries = [];

  // Static pages
  for (const page of staticPages) {
    entries.push(toXmlEntry({ ...page, lastmod: today }));
  }

  // Blog posts
  for (const post of posts) {
    if (!post.slug) continue;
    entries.push(toXmlEntry({
      path: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: post._updatedAt?.split('T')[0] || today,
    }));
  }

  // Location pages
  for (const loc of locations) {
    if (!loc.slug) continue;
    const slug = typeof loc.slug === 'string' ? loc.slug : loc.slug?.current;
    if (!slug) continue;
    entries.push(toXmlEntry({
      path: `/locations/${slug}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: loc._updatedAt?.split('T')[0] || today,
    }));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

  const outPath = resolve(__dirname, '../public/sitemap.xml');
  writeFileSync(outPath, xml, 'utf-8');
  console.log(`Sitemap generated: ${outPath} (${entries.length} URLs)`);
}

generate().catch(console.error);
