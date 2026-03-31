/**
 * Publish all draft blog posts that have no published version.
 * Run with: node migrations/publish-blog-drafts.mjs
 */
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kiu1l2o6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

async function publishDrafts() {
  // Get all draft blog posts
  const drafts = await client.fetch(
    `*[_type == "blogPost" && _id in path("drafts.**")]{ _id, title }`
  );

  if (drafts.length === 0) {
    console.log('No draft blog posts found.');
    return;
  }

  console.log(`Found ${drafts.length} draft blog post(s). Publishing...`);

  let published = 0;
  for (const draft of drafts) {
    const publishedId = draft._id.replace('drafts.', '');
    try {
      // Get the full draft document
      const doc = await client.getDocument(draft._id);
      if (!doc) continue;

      // Create/replace the published version
      const { _rev, ...publishedDoc } = doc;
      publishedDoc._id = publishedId;

      await client.createOrReplace(publishedDoc);
      // Delete the draft
      await client.delete(draft._id);

      console.log(`  Published: ${draft.title}`);
      published++;
    } catch (err) {
      console.error(`  Failed to publish "${draft.title}": ${err.message}`);
    }
  }

  console.log(`Done! Published ${published} of ${drafts.length} blog post(s).`);
}

publishDrafts().catch((err) => {
  console.error('Publish failed:', err.message);
  process.exit(1);
});
