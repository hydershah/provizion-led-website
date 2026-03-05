import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'brandColors',
      title: 'Brand Colors',
      type: 'object',
      fields: [
        defineField({ name: 'navyDark', title: 'Navy Dark', type: 'string' }),
        defineField({ name: 'bluePrimary', title: 'Blue Primary', type: 'string' }),
        defineField({ name: 'blueLight', title: 'Blue Light', type: 'string' }),
        defineField({ name: 'slateDark', title: 'Slate Dark', type: 'string' }),
        defineField({ name: 'skyLight', title: 'Sky Light', type: 'string' }),
      ],
    }),
    defineField({
      name: 'brandFonts',
      title: 'Brand Fonts',
      type: 'object',
      fields: [
        defineField({ name: 'h1', title: 'H1 Font', type: 'string' }),
        defineField({ name: 'h2h3', title: 'H2/H3 Font', type: 'string' }),
        defineField({ name: 'body', title: 'Body Font', type: 'string' }),
      ],
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'path', title: 'Path', type: 'string' }),
        ],
      }],
    }),
    defineField({
      name: 'serviceTypes',
      title: 'Service Types',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
