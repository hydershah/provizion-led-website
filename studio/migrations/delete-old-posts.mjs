import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kiu1l2o6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const ids = [
  'blog-banners-to-monuments',
  'blog-must-have-signage-types',
  'blog-storefront-signs-columbia',
  'blog-channel-letters-lightboxes-monument',
  'blog-font-colors-business-sign',
];

const transaction = client.transaction();
for (const id of ids) {
  transaction.delete(id);
  transaction.delete(`drafts.${id}`);
}

const result = await transaction.commit();
console.log(`Deleted ${ids.length} old placeholder posts. Transaction: ${result.transactionId}`);
