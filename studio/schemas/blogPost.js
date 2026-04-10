import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) =>
        r.custom((value) => {
          if (!value) return 'Slug is required';
          if (typeof value === 'string') {
            return 'Slug is stored as a plain string. Click "Reset value" on this field, then "Generate" to rebuild it from the title.';
          }
          if (typeof value === 'object' && !value.current) return 'Slug is required';
          return true;
        }),
    }),
    // Legacy fields from a previously-installed i18n plugin. Kept hidden so
    // Sanity Studio does not flag them as "Unknown field found" on existing
    // documents. Safe to drop once the fields have been unset from all
    // blogPost documents in the dataset.
    defineField({ name: 'language', title: 'Language (legacy)', type: 'string', hidden: true, readOnly: true }),
    defineField({ name: 'en', title: 'English (legacy)', type: 'string', hidden: true, readOnly: true }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3, validation: (r) => r.max(200) }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'blogCategory' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
  ],
  orderings: [
    { title: 'Published Date (New)', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'author', media: 'featuredImage' },
  },
});
