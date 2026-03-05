import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'companySettings',
  title: 'Company Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Company Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone (Display)', type: 'string' }),
    defineField({ name: 'phoneRaw', title: 'Phone (Raw digits)', type: 'string' }),
    defineField({ name: 'phoneTel', title: 'Phone (tel: link)', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({ name: 'street', title: 'Street', type: 'string' }),
        defineField({ name: 'city', title: 'City', type: 'string' }),
        defineField({ name: 'state', title: 'State', type: 'string' }),
        defineField({ name: 'zip', title: 'ZIP', type: 'string' }),
        defineField({ name: 'full', title: 'Full Address', type: 'string' }),
      ],
    }),
    defineField({ name: 'url', title: 'Website URL', type: 'url' }),
    defineField({ name: 'rating', title: 'Rating', type: 'number' }),
    defineField({ name: 'reviewCount', title: 'Review Count', type: 'number' }),
    defineField({ name: 'logo', title: 'Logo (White)', type: 'image' }),
    defineField({ name: 'logoFull', title: 'Logo (Full)', type: 'image' }),
    defineField({ name: 'logoSquare', title: 'Logo (Square)', type: 'image' }),
    defineField({ name: 'ogImage', title: 'OG Image', type: 'image' }),
  ],
  preview: {
    prepare: () => ({ title: 'Company Settings' }),
  },
});
