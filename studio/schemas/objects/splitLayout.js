import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'splitLayout',
  title: 'Split Layout',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Section Label', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: { list: ['left', 'right'], layout: 'radio' },
      initialValue: 'right',
    }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
    defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
  ],
  preview: {
    select: { title: 'title' },
  },
});
