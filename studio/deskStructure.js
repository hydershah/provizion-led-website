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
      // Locations
      S.listItem()
        .title('Locations')
        .child(
          S.list()
            .title('Location Pages')
            .items([
              S.listItem()
                .title('Tier 1 — City Pages')
                .child(
                  S.documentList()
                    .title('Tier 1 — City Pages')
                    .filter('_type == "locationPage" && tier == 1')
                    .defaultOrdering([{ field: 'state', direction: 'asc' }, { field: 'order', direction: 'asc' }])
                ),
              S.listItem()
                .title('Tier 2 — Regional Hubs')
                .child(
                  S.documentList()
                    .title('Tier 2 — Regional Hubs')
                    .filter('_type == "locationPage" && tier == 2')
                    .defaultOrdering([{ field: 'state', direction: 'asc' }, { field: 'order', direction: 'asc' }])
                ),
              S.listItem()
                .title('Tier 3 — Service Areas')
                .child(
                  S.documentList()
                    .title('Tier 3 — Service Areas')
                    .filter('_type == "locationPage" && tier == 3')
                    .defaultOrdering([{ field: 'state', direction: 'asc' }])
                ),
              S.listItem()
                .title('All Locations')
                .child(S.documentTypeList('locationPage').title('All Location Pages')),
            ])
        ),
      S.divider(),
      // Blog
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('Posts')
                .child(S.documentTypeList('blogPost').title('Blog Posts')),
              S.listItem()
                .title('Categories')
                .child(S.documentTypeList('blogCategory').title('Blog Categories')),
            ])
        ),
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
