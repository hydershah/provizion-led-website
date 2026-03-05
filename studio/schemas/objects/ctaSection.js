import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Section Label', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
    defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
    defineField({ name: 'showLogo', title: 'Show Logo', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'title' },
  },
});
