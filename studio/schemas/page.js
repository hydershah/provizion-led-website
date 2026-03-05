import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: ['home', 'service', 'contact'],
        layout: 'radio',
      },
    }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
    defineField({ name: 'metaKeywords', title: 'Meta Keywords', type: 'string' }),
    // Hero
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Eyebrow Label', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'titleAccent', title: 'Title Accent Line', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({
          name: 'servicesTags',
          title: 'Service Tags',
          type: 'array',
          of: [{ type: 'string' }],
        }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    // Page sections
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        { type: 'splitLayout' },
        {
          type: 'object',
          name: 'featureGrid',
          title: 'Feature Grid',
          fields: [
            defineField({ name: 'label', title: 'Section Label', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
            defineField({ name: 'columns', title: 'Columns', type: 'number', initialValue: 3 }),
            defineField({ name: 'items', title: 'Features', type: 'array', of: [{ type: 'featureCard' }] }),
          ],
          preview: { select: { title: 'title' } },
        },
        {
          type: 'object',
          name: 'productGrid',
          title: 'Product Grid',
          fields: [
            defineField({ name: 'label', title: 'Section Label', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
            defineField({ name: 'items', title: 'Products', type: 'array', of: [{ type: 'productCard' }] }),
            defineField({ name: 'closingText', title: 'Closing Text', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title' } },
        },
        { type: 'ctaSection' },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'pageType' },
  },
});
