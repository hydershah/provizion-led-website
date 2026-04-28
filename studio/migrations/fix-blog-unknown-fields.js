/**
 * Migration: Remove unknown `language` and `en` fields from blogPost documents.
 * These are orphaned from a removed i18n plugin and cause "Unknown field found"
 * warnings plus schema drift in Sanity Studio.
 *
 * Run with: npx sanity exec migrations/fix-blog-unknown-fields.js --with-user-token
 */
import { getCliClient } from 'sanity/cli';

const client = getCliClient().withConfig({ apiVersion: '2024-01-01' });

async function fixUnknownFields() {
  const posts = await client.fetch(
    `*[_type == "blogPost" && (defined(language) || defined(en))]{ _id, language, en }`
  );

  if (posts.length === 0) {
    console.log('No blog posts with stray language/en fields found.');
    return;
  }

  console.log(`Found ${posts.length} blog post(s) with stray fields. Unsetting...`);

  const transaction = client.transaction();
  for (const post of posts) {
    console.log(`  Patching ${post._id}: unset language, en`);
    transaction.patch(post._id, { unset: ['language', 'en'] });
  }

  const result = await transaction.commit();
  console.log(`Done! Cleaned ${posts.length} blog post(s). Transaction ID: ${result.transactionId}`);
}

fixUnknownFields().catch((err) => {
  console.error('Migration failed:', err.message);
  process.exit(1);
});
