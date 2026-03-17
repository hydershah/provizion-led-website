/**
 * Migration: Fix blog post slugs stored as plain strings.
 * Converts string slugs to proper { _type: 'slug', current: '...' } objects.
 *
 * Run with: npx sanity exec migrations/fix-blog-slugs.js --with-user-token
 */
import { getCliClient } from 'sanity/cli';

const client = getCliClient().withConfig({ apiVersion: '2024-01-01' });

async function fixSlugs() {
  // Fetch all blogPost documents where slug is a string (not an object)
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
    console.log(`  Patching ${post._id}: "${post.slug}" → { _type: "slug", current: "${post.slug}" }`);
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
