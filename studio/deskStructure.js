export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singletons
      S.listItem()
        .title('Company Settings')
        .child(S.document().schemaType('companySettings').documentId('companySettings')),
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      // Pages
      S.listItem()
        .title('Pages')
        .child(S.documentTypeList('page').title('Pages')),
      S.divider(),
      // Content types
      S.listItem()
        .title('Services')
        .child(S.documentTypeList('service').title('Services')),
      S.listItem()
        .title('Process Steps')
        .child(S.documentTypeList('processStep').title('Process Steps')),
      S.listItem()
        .title('Why Choose Us')
        .child(S.documentTypeList('whyChooseItem').title('Why Choose Us')),
      S.listItem()
        .title('Testimonials')
        .child(S.documentTypeList('testimonial').title('Testimonials')),
      S.listItem()
        .title('B2B Features')
        .child(S.documentTypeList('b2bFeature').title('B2B Features')),
      S.listItem()
        .title('Portfolio')
        .child(S.documentTypeList('portfolioItem').title('Portfolio')),
      S.listItem()
        .title('Certifications')
        .child(S.documentTypeList('certification').title('Certifications')),
    ]);
