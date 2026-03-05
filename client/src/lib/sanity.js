import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

/**
 * Build a Sanity image URL from an image reference.
 * Returns the original path string if the ref is a plain string (fallback mode).
 */
export function urlFor(source) {
  if (!source || typeof source === 'string') return source;
  return builder.image(source);
}
