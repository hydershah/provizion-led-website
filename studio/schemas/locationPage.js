import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'locationPage',
  title: 'Location Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'e.g. "LED Signs & Digital Signage in Charlotte, NC"',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'e.g. "charlotte-nc" → /locations/charlotte-nc',
      options: { source: 'title', slugify: (input) => input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'number',
      description: 'Tier 1 = Full Custom City, Tier 2 = Regional Hub, Tier 3 = State Service Area',
      options: { list: [{ title: 'Tier 1 — Full Custom', value: 1 }, { title: 'Tier 2 — Regional Hub', value: 2 }, { title: 'Tier 3 — Service Area', value: 3 }] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      description: 'Primary city name (e.g. "Charlotte")',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      options: { list: ['NC', 'SC'] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'stateFullName',
      title: 'State Full Name',
      type: 'string',
      options: { list: ['North Carolina', 'South Carolina'] },
    }),
    defineField({
      name: 'metroArea',
      title: 'Metro Area Name',
      type: 'string',
      description: 'For Tier 2 hubs, e.g. "Charlotte Metro Area"',
      hidden: ({ document }) => document?.tier !== 2,
    }),
    defineField({
      name: 'subCities',
      title: 'Sub-Cities Covered',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'For Tier 2: cities covered by this hub. For Tier 3: all cities in state.',
    }),
    defineField({
      name: 'priority',
      title: 'Priority Rating',
      type: 'string',
      options: { list: ['★★★', '★★☆', '★☆☆'] },
    }),
    defineField({
      name: 'estimatedVolume',
      title: 'Est. Monthly Search Volume',
      type: 'string',
      description: 'e.g. "250–480"',
    }),

    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'label', title: 'Eyebrow Label', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'subheadline', title: 'Sub-headline', type: 'text', rows: 2 }),
        defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
        defineField({
          name: 'serviceTags',
          title: 'Service Tags',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // Content Sections
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [{ type: 'locationSection' }],
    }),

    // Industries / Use Cases
    defineField({
      name: 'industries',
      title: 'Local Industries Served',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Industry Name', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          defineField({ name: 'iconName', title: 'Icon Name', type: 'string' }),
        ],
        preview: { select: { title: 'name' } },
      }],
    }),

    // FAQs
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'question', title: 'Question', type: 'string', validation: (r) => r.required() }),
          defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (r) => r.required() }),
        ],
        preview: { select: { title: 'question' } },
      }],
    }),

    // Nearby Locations (internal linking)
    defineField({
      name: 'nearbyLocations',
      title: 'Nearby Location Pages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'locationPage' }] }],
      description: 'Link to related Tier 1/Tier 2 pages for internal linking',
    }),

    // Parent Hub (for Tier 1 pages)
    defineField({
      name: 'parentHub',
      title: 'Parent Regional Hub',
      type: 'reference',
      to: [{ type: 'locationPage' }],
      description: 'For Tier 1: link to the Tier 2 regional hub this city belongs to',
      hidden: ({ document }) => document?.tier !== 1,
    }),

    // SEO
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
    defineField({
      name: 'keywords',
      title: 'Target Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. "LED signs Charlotte", "digital signage Charlotte NC"',
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: 'Tier → Order', name: 'tierOrder', by: [{ field: 'tier', direction: 'asc' }, { field: 'order', direction: 'asc' }] },
    { title: 'State → City', name: 'stateCity', by: [{ field: 'state', direction: 'asc' }, { field: 'city', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', tier: 'tier', state: 'state' },
    prepare({ title, tier, state }) {
      return {
        title,
        subtitle: `Tier ${tier} — ${state}`,
      };
    },
  },
});
