import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'featureCard',
  title: 'Feature Card',
  type: 'object',
  fields: [
    defineField({ name: 'iconName', title: 'Icon Name', type: 'string', description: 'React icon name (e.g., HiLightBulb)' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
  ],
  preview: {
    select: { title: 'title' },
  },
});
