/**
 * Seed script: creates 2 test blog posts + 1 category in Sanity.
 *
 * Usage:
 *   SANITY_TOKEN=<your-token> node seed-blog.mjs
 *
 * Get a token from: https://www.sanity.io/manage → Project → API → Tokens → Add API token (Editor)
 */
import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Auth token: env var > CLI config
let authToken = process.env.SANITY_TOKEN;
if (!authToken) {
  try {
    const configPath = resolve(process.env.HOME, '.config/sanity/config.json');
    const config = JSON.parse(readFileSync(configPath, 'utf-8'));
    authToken = config.authToken;
  } catch { /* ignore */ }
}

if (!authToken) {
  console.error('No token found. Provide via: SANITY_TOKEN=<token> node seed-blog.mjs');
  console.error('Get a token at: https://www.sanity.io/manage → your project → API → Tokens');
  process.exit(1);
}

// Read project config from .env or fallback
const envPath = resolve(__dirname, '.env');
let projectId, dataset;
try {
  const envContent = readFileSync(envPath, 'utf-8');
  const idMatch = envContent.match(/SANITY_STUDIO_PROJECT_ID=(.+)/);
  const dsMatch = envContent.match(/SANITY_STUDIO_DATASET=(.+)/);
  projectId = idMatch?.[1]?.trim();
  dataset = dsMatch?.[1]?.trim();
} catch {
  // ignore
}

if (!projectId || !dataset) {
  console.error('Could not read SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET from studio/.env');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: authToken,
});

const CATEGORY_ID = 'blog-cat-signage-tips';

const category = {
  _id: CATEGORY_ID,
  _type: 'blogCategory',
  title: 'Signage Tips',
  slug: { _type: 'slug', current: 'signage-tips' },
  description: 'Practical tips and best practices for LED and digital signage.',
};

const posts = [
  {
    _id: 'blog-test-1',
    _type: 'blogPost',
    title: '5 Ways LED Signs Boost Your Business Visibility',
    slug: { _type: 'slug', current: '5-ways-led-signs-boost-visibility' },
    author: 'ProVizion LED Team',
    excerpt:
      'Discover how LED signage can transform your storefront presence, attract more foot traffic, and increase brand recognition in your local market.',
    category: { _type: 'reference', _ref: CATEGORY_ID },
    publishedAt: '2026-03-01T10:00:00Z',
    metaTitle: '5 Ways LED Signs Boost Your Business Visibility | ProVizion LED',
    metaDescription:
      'Learn how LED signage increases foot traffic, brand recognition, and ROI for local businesses.',
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: "In today's competitive retail landscape, standing out is more important than ever. LED signs have become one of the most cost-effective ways to grab attention and communicate your brand message 24/7.",
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's2',
            text: '1. Round-the-Clock Advertising',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's3',
            text: 'Unlike traditional print signage, LED signs work day and night. Their bright, vivid displays remain visible even in direct sunlight, and they truly shine after dark \u2014 when many businesses lose visibility with conventional signs.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b4',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's4',
            text: '2. Dynamic Content Updates',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b5',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's5',
            text: 'Change your message in minutes, not days. Promote daily specials, announce events, or rotate seasonal campaigns without the cost of reprinting. This flexibility means your signage investment keeps delivering value.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b6',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's6',
            text: '3. Increased Foot Traffic',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b7',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's7',
            text: 'Studies show that LED signs can increase foot traffic by up to 30%. The moving, colorful displays naturally draw the eye and create curiosity \u2014 turning passersby into customers.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b8',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's8',
            text: '4. Energy Efficiency',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b9',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's9',
            text: 'Modern LED technology consumes up to 75% less energy than traditional neon or fluorescent signage. Lower operating costs mean a faster return on your investment.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b10',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's10',
            text: '5. Professional Brand Image',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b11',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's11',
            text: 'A high-quality LED sign signals that your business is modern, established, and invested in its customer experience. It elevates your entire storefront and sets you apart from competitors still using static signage.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b12',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 's12',
            text: 'Ready to upgrade your business signage? Contact ProVizion LED for a free consultation and see how we can help you stand out.',
            marks: ['strong'],
            markDefs: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'blog-test-2',
    _type: 'blogPost',
    title: 'Digital Signage vs Traditional Signs: Which Is Right for You?',
    slug: { _type: 'slug', current: 'digital-vs-traditional-signs' },
    author: 'ProVizion LED Team',
    excerpt:
      'Comparing digital and traditional signage across cost, flexibility, durability, and ROI to help you make the best choice for your business.',
    category: { _type: 'reference', _ref: CATEGORY_ID },
    publishedAt: '2026-02-20T10:00:00Z',
    metaTitle: 'Digital Signage vs Traditional Signs | ProVizion LED',
    metaDescription:
      'Compare digital and traditional signage on cost, flexibility, and ROI. Find the right solution for your business.',
    body: [
      {
        _type: 'block',
        _key: 'c1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'cs1',
            text: "Choosing between digital and traditional signage is one of the most common decisions business owners face when updating their storefront. Both have their strengths \u2014 here's a practical breakdown to help you decide.",
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c2',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'cs2',
            text: 'Upfront Cost vs Long-Term Value',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c3',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'cs3',
            text: "Traditional signs are generally cheaper upfront. A quality vinyl or acrylic sign might cost a few hundred dollars. Digital signs require a larger initial investment, but they eliminate the recurring cost of reprints. Over a 5-year period, digital signage often comes out ahead \u2014 especially if you change your messaging frequently.",
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c4',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'cs4',
            text: 'Flexibility & Content Updates',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c5',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'cs5',
            text: "This is where digital signage truly shines. Update your promotions, hours, or announcements remotely in real-time. Traditional signs are static \u2014 every change means ordering a new sign. If your business runs weekly specials, seasonal campaigns, or time-sensitive promotions, digital is the clear winner.",
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c6',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'cs6',
            text: 'Durability & Maintenance',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c7',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'cs7',
            text: "Quality LED displays are built to last 100,000+ hours \u2014 that's over 11 years of continuous operation. They're weather-resistant and require minimal maintenance. Traditional signs fade in sunlight, crack in cold weather, and need periodic replacement. The winner depends on your local climate and how long you plan to keep the same sign.",
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c8',
        style: 'h2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'cs8',
            text: 'The Verdict',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c9',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'cs9',
            text: "For businesses that value flexibility, visibility, and long-term ROI, digital signage is the superior choice. For simple, static branding needs with a tight budget, traditional signs still have their place. Many businesses find the best approach is a combination \u2014 a permanent channel letter sign for branding, paired with an LED message board for dynamic promotions.",
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'c10',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'cs10',
            text: "Not sure which option is best for your business? Contact ProVizion LED \u2014 we'll walk you through the options and help you find the perfect signage solution.",
            marks: ['strong'],
            markDefs: [],
          },
        ],
      },
    ],
  },
];

async function seed() {
  console.log('Creating blog category...');
  await client.createOrReplace(category);
  console.log(`  ✓ Category: "${category.title}"`);

  for (const post of posts) {
    console.log(`Creating post: "${post.title}"...`);
    await client.createOrReplace(post);
    console.log(`  ✓ Post created`);
  }

  console.log('\nDone! 1 category + 2 blog posts created.');
  console.log('Visit /blog to see them.');
}

seed().catch((err) => {
  console.error('Seed failed:', err.message);
  process.exit(1);
});
