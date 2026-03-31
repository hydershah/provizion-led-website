/**
 * Standalone migration: Fix blog post slugs stored as plain strings.
 * Run with: node migrations/fix-blog-slugs-standalone.mjs
 */
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kiu1l2o6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

async function fixSlugs() {
  const posts = await client.fetch(
    `*[_type == "blogPost" && defined(slug) && !defined(slug.current)]{ _id, slug }`
  );

  if (posts.length === 0) {
    console.log('No blog posts with broken slugs found.');
    return;
  }

  console.log(`Found ${posts.length} blog post(s) with string slugs. Fixing...`);

  const transaction = client.transaction();

  for (const post of posts) {
    console.log(`  Patching ${post._id}: "${post.slug}" -> { _type: "slug", current: "${post.slug}" }`);
    transaction.patch(post._id, {
      set: {
        slug: {
          _type: 'slug',
          current: post.slug,
        },
      },
    });
  }

  const result = await transaction.commit();
  console.log(`Done! Fixed ${posts.length} blog post(s). Transaction ID: ${result.transactionId}`);
}

fixSlugs().catch((err) => {
  console.error('Migration failed:', err.message);
  process.exit(1);
});
