import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'locationSection',
  title: 'Location Content Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [
          { title: 'Text Block', value: 'text' },
          { title: 'Split Layout (Text + Image)', value: 'split' },
          { title: 'Feature Grid', value: 'featureGrid' },
          { title: 'CTA Band', value: 'cta' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'label', title: 'Section Label / Eyebrow', type: 'string' }),
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
    defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [{ type: 'block' }],
      hidden: ({ parent }) => parent?.sectionType === 'featureGrid',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.sectionType !== 'split',
    }),
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: { list: ['left', 'right'], layout: 'radio' },
      initialValue: 'right',
      hidden: ({ parent }) => parent?.sectionType !== 'split',
    }),
    defineField({
      name: 'features',
      title: 'Feature Cards',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Title', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
        ],
        preview: { select: { title: 'title' } },
      }],
      hidden: ({ parent }) => parent?.sectionType !== 'featureGrid',
    }),
    defineField({
      name: 'altBackground',
      title: 'Alternate Background',
      type: 'boolean',
      initialValue: false,
      description: 'Use darker background for this section',
    }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
    defineField({ name: 'buttonLink', title: 'Button Link', type: 'string' }),
  ],
  preview: {
    select: { title: 'title', type: 'sectionType' },
    prepare({ title, type }) {
      const typeLabel = { text: '📝 Text', split: '🖼 Split', featureGrid: '🔲 Grid', cta: '📢 CTA' };
      return { title: title || 'Untitled Section', subtitle: typeLabel[type] || type };
    },
  },
});
