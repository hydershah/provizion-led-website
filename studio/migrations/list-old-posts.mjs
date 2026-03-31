import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kiu1l2o6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// Find posts from July 2025 (the old placeholder ones)
const posts = await client.fetch(
  `*[_type == "blogPost" && !(_id in path("drafts.**")) && publishedAt < "2025-08-01"] | order(publishedAt asc) { _id, title, publishedAt, slug }`
);

console.log(`Found ${posts.length} old post(s):\n`);
for (const p of posts) {
  const slug = typeof p.slug === 'string' ? p.slug : p.slug?.current;
  console.log(`  ID: ${p._id}`);
  console.log(`  Title: ${p.title}`);
  console.log(`  Date: ${p.publishedAt}`);
  console.log(`  Slug: ${slug}\n`);
}
