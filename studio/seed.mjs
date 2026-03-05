/**
 * Sanity Seed Script — ProVizion LED
 *
 * Seeds all existing website content into Sanity.
 *
 * Usage:
 *   SANITY_TOKEN=<your-token> SANITY_PROJECT_ID=<your-id> node seed.mjs
 *
 * Get a token from: https://www.sanity.io/manage → API → Tokens → Add token (Editor)
 */

import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: process.env.SANITY_DATASET || 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const IMAGES_DIR = resolve(__dirname, '../client/public/images');

// ─── Helper: upload image and return asset reference ───
async function uploadImage(filename) {
  try {
    const filePath = resolve(IMAGES_DIR, filename);
    const buffer = readFileSync(filePath);
    const ext = filename.split('.').pop();
    const contentType =
      ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' :
      ext === 'png' ? 'image/png' :
      ext === 'webp' ? 'image/webp' : 'image/jpeg';

    const asset = await client.assets.upload('image', buffer, {
      filename,
      contentType,
    });
    console.log(`  ✓ Uploaded: ${filename}`);
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
  } catch (err) {
    console.error(`  ✗ Failed to upload ${filename}:`, err.message);
    return null;
  }
}

// ─── Helper: create a portable text block from plain text paragraphs ───
function toBlocks(paragraphs) {
  return paragraphs.map((text, i) => ({
    _type: 'block',
    _key: `block-${i}`,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `span-${i}`, text, marks: [] }],
  }));
}

async function seed() {
  console.log('\n🌱 Seeding ProVizion LED content to Sanity...\n');

  // ═══════════════════════════════════════════
  // 1. COMPANY SETTINGS
  // ═══════════════════════════════════════════
  console.log('📋 Company Settings...');
  const logoWhite = await uploadImage('provizion-logo-white.webp');
  const logoFull = await uploadImage('provizion-logo-full.webp');
  const logoSquare = await uploadImage('provizion-logo-square.jpg');
  const ogImage = await uploadImage('provizion-og-image.jpg');

  await client.createOrReplace({
    _id: 'companySettings',
    _type: 'companySettings',
    name: 'ProVizion LED',
    tagline: 'LED & Digital Sign Manufacturer',
    phone: '(984) 217-6527',
    phoneRaw: '9842176527',
    phoneTel: 'tel:+19842176527',
    email: 'info@provizionledsigns.com',
    address: {
      street: '1700 University Commercial Pl',
      city: 'Charlotte',
      state: 'NC',
      zip: '28213',
      full: '1700 University Commercial Pl, Charlotte, NC 28213',
    },
    url: 'https://www.provizionledsigns.com',
    rating: 5,
    reviewCount: 62,
    ...(logoWhite && { logo: logoWhite }),
    ...(logoFull && { logoFull }),
    ...(logoSquare && { logoSquare }),
    ...(ogImage && { ogImage }),
  });
  console.log('  ✓ Company Settings created\n');

  // ═══════════════════════════════════════════
  // 2. SITE SETTINGS
  // ═══════════════════════════════════════════
  console.log('⚙️  Site Settings...');
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    brandColors: {
      navyDark: '#181D42',
      bluePrimary: '#4483C3',
      blueLight: '#65AED8',
      slateDark: '#434866',
      skyLight: '#A5CAEB',
    },
    brandFonts: {
      h1: 'League Spartan',
      h2h3: 'DM Sans',
      body: 'Lato',
    },
    navLinks: [
      { _key: 'nav-1', label: 'Sign Manufacturer', path: '/' },
      { _key: 'nav-2', label: 'Digital Signs', path: '/digital-signs' },
      { _key: 'nav-3', label: 'Electronic Signs', path: '/electronic-signs' },
      { _key: 'nav-4', label: 'LED Signs', path: '/led-signs' },
      { _key: 'nav-5', label: 'Lighted Signs', path: '/lighted-signs' },
      { _key: 'nav-6', label: 'Contact Us', path: '/contact-us' },
    ],
    serviceTypes: [
      'LED Signs', 'Digital Signs', 'Electronic Signs', 'Lighted Signs',
      'LED Monument Signs', 'LED Message Boards', 'Channel Letters',
      'Pylon Signs', 'ADA Signs', 'Custom Digital Displays',
    ],
  });
  console.log('  ✓ Site Settings created\n');

  // ═══════════════════════════════════════════
  // 3. SERVICES
  // ═══════════════════════════════════════════
  console.log('🔧 Services...');
  const servicesData = [
    { title: 'Custom LED Signs', desc: 'Our custom LED signs deliver vibrant colors, unmatched clarity, and energy-efficient performance for businesses across Charlotte, NC and North Carolina. Our advanced heat management process ensures your LED signage stays bright and lasts longer — no dimming, no downtime.', img: 'electronic-signs-1.jpg', link: '/led-signs' },
    { title: 'Digital Sign Displays', desc: 'Elevate your storefront or facility with our digital sign displays. Perfect for showcasing promotions, real-time updates, or branded content, our digital signage solutions offer unmatched versatility for businesses in Charlotte and beyond.', img: 'electronic-digital-message-displays-signs-3.jpg', link: '/digital-signs' },
    { title: 'Illuminated & Lighted Signs', desc: 'Make your brand visible around the clock with our illuminated signs and lighted channel letters. Manufactured in-house and built for durability, our lighted signs deliver consistent brightness and a commanding outdoor presence.', img: 'lighted-and-illuminated-signs-2.jpeg', link: '/lighted-signs' },
    { title: 'LED Monument Signs', desc: 'Our LED monument signs combine architectural presence with cutting-edge LED technology. Ideal for corporate campuses, churches, and retail centers, these custom monument signs serve as permanent landmarks for your brand in the Charlotte, NC area.', img: 'programmable-led-message-centers-3.jpg', link: '/contact-us' },
    { title: 'LED Message Boards', desc: 'Keep your audience engaged with programmable LED message boards. Easy to update remotely, our outdoor LED message boards are ideal for schools, churches, and businesses that need to communicate changing promotions, events, and announcements.', img: 'indoor-led-message-board-sign-2.jpg', link: '/contact-us' },
    { title: 'Electronic Message Centers', desc: 'Our electronic message centers (EMCs) combine reliable digital signage technology with intuitive content management. Built for schools, government buildings, and commercial properties across North Carolina, they keep your audience informed 24/7.', img: 'electronic-message-centers-digital-signage-display-1.jpg', link: '/electronic-signs' },
  ];

  for (let i = 0; i < servicesData.length; i++) {
    const s = servicesData[i];
    const image = await uploadImage(s.img);
    await client.createOrReplace({
      _id: `service-${i + 1}`,
      _type: 'service',
      title: s.title,
      description: s.desc,
      ...(image && { image }),
      link: s.link,
      order: i + 1,
    });
    console.log(`  ✓ ${s.title}`);
  }
  console.log();

  // ═══════════════════════════════════════════
  // 4. PROCESS STEPS
  // ═══════════════════════════════════════════
  console.log('📐 Process Steps...');
  const processData = [
    { step: '01', title: 'Custom Sign Design', desc: 'Our sign designers work directly with you to create LED sign concepts that reflect your brand — from channel letters to full-color digital displays.', icon: 'HiLightBulb' },
    { step: '02', title: 'In-House Sign Fabrication', desc: 'Every sign is manufactured in our North Carolina facility using premium materials and advanced LED technology for long-lasting performance.', icon: 'HiCube' },
    { step: '03', title: 'Professional Sign Installation', desc: 'Our licensed sign installation crews handle permits, electrical, and placement — ensuring your outdoor signs are positioned for maximum visibility.', icon: 'HiTruck' },
    { step: '04', title: 'Sign Maintenance & Support', desc: 'Scheduled maintenance and rapid repairs keep your LED signs, digital displays, and electronic message centers performing at their best.', icon: 'HiCog' },
  ];

  for (let i = 0; i < processData.length; i++) {
    const p = processData[i];
    await client.createOrReplace({
      _id: `process-${i + 1}`,
      _type: 'processStep',
      step: p.step,
      title: p.title,
      description: p.desc,
      iconName: p.icon,
      order: i + 1,
    });
    console.log(`  ✓ ${p.title}`);
  }
  console.log();

  // ═══════════════════════════════════════════
  // 5. WHY CHOOSE US
  // ═══════════════════════════════════════════
  console.log('⭐ Why Choose Us...');
  const whyData = [
    { title: 'Experienced LED Sign Manufacturer', desc: 'With over a decade manufacturing LED signs and digital displays, our team brings deep expertise to every project — from sign design and fabrication to permitting and installation.' },
    { title: 'Custom Signage Solutions', desc: 'Every business is different. Whether you need a full-color digital sign display for a car dealership, illuminated channel letters for a restaurant, or an LED monument sign for a church, we build exactly what your brand requires.' },
    { title: 'Latest LED & Digital Technology', desc: 'We invest in state-of-the-art LED technology and digital signage platforms, delivering brighter, more durable, and more energy-efficient sign products than the competition.' },
    { title: 'Energy-Efficient LED Signage', desc: 'Our LED signs and electronic message centers use significantly less power than traditional signage. Lower energy costs and a smaller carbon footprint — without sacrificing brightness or visibility.' },
    { title: 'Full-Service Sign Support', desc: "We don't just manufacture and install your sign — we maintain it. Our ongoing sign maintenance programs keep your LED signs, digital displays, and lighted signs performing at peak brightness." },
    { title: 'Local Charlotte, NC Sign Company', desc: 'Based in Charlotte, North Carolina, we understand the local market and permitting landscape. As your neighborhood LED sign company, we deliver faster turnaround and hands-on service.' },
  ];

  for (let i = 0; i < whyData.length; i++) {
    const w = whyData[i];
    await client.createOrReplace({
      _id: `why-${i + 1}`,
      _type: 'whyChooseItem',
      title: w.title,
      description: w.desc,
      order: i + 1,
    });
    console.log(`  ✓ ${w.title}`);
  }
  console.log();

  // ═══════════════════════════════════════════
  // 6. TESTIMONIALS
  // ═══════════════════════════════════════════
  console.log('💬 Testimonials...');
  const testData = [
    { name: 'James Mitchell', business: 'Mitchell Auto Group', rating: 5, text: 'ProVizion LED transformed our dealership presence. The LED monument sign they designed draws customers from the highway — our foot traffic increased 40% in the first month.' },
    { name: 'Sarah Chen', business: 'Brightside Medical Center', rating: 5, text: 'Professional from start to finish. They handled all the permits and installed our channel letters in one day. The quality of the illumination is exceptional.' },
    { name: 'David Ramirez', business: 'Ramirez Restaurant Group', rating: 5, text: 'We needed digital menu boards and exterior signage for three locations. ProVizion delivered on time, on budget, and the results are stunning.' },
  ];

  for (let i = 0; i < testData.length; i++) {
    const t = testData[i];
    await client.createOrReplace({
      _id: `testimonial-${i + 1}`,
      _type: 'testimonial',
      name: t.name,
      business: t.business,
      rating: t.rating,
      text: t.text,
      order: i + 1,
    });
    console.log(`  ✓ ${t.name}`);
  }
  console.log();

  // ═══════════════════════════════════════════
  // 7. B2B FEATURES
  // ═══════════════════════════════════════════
  console.log('🏢 B2B Features...');
  const b2bData = [
    { title: 'Wholesale & Contract Sign Installation', desc: 'Professional sign installation services for national brands, regional franchises, and multi-location businesses across North Carolina.' },
    { title: 'In-House Sign Manufacturing', desc: 'LED sign fabrication, channel letter production, and cabinet sign assembly — all handled in our facility for complete quality control.' },
    { title: 'B2B & Third-Party Sign Installation', desc: 'Seamless subcontracted sign installation for design firms, marketing agencies, and sign brokers throughout the Southeast.' },
    { title: 'White-Label Sign Installation', desc: 'Your trusted, discreet partner for outsourced LED sign and digital display installation — always on time and on brand.' },
    { title: 'Trade & Reseller Sign Solutions', desc: 'Wholesale LED signs and electronic message centers for resellers and trade partners looking for reliable sign manufacturing without the overhead.' },
  ];

  for (let i = 0; i < b2bData.length; i++) {
    const b = b2bData[i];
    await client.createOrReplace({
      _id: `b2b-${i + 1}`,
      _type: 'b2bFeature',
      title: b.title,
      description: b.desc,
      order: i + 1,
    });
    console.log(`  ✓ ${b.title}`);
  }
  console.log();

  // ═══════════════════════════════════════════
  // 8. PORTFOLIO
  // ═══════════════════════════════════════════
  console.log('🖼️  Portfolio...');
  const portfolioData = [
    { title: 'Channel Letters — Luxury Hotel', category: 'Channel Letters', img: 'led-signs-channel-letters-lit-at-night-1.jpg' },
    { title: 'LED Monument — Financial District', category: 'Monument Signs', img: 'full-color-led-electronic-sign-4.jpg' },
    { title: 'Digital Display — Convention Center', category: 'Digital Displays', img: 'custom-electronic-sign-company-4.jpeg' },
    { title: 'Illuminated Cabinet — Fine Dining', category: 'Cabinet Signs', img: 'michaels-raw-bar.jpg' },
    { title: 'EMC — Corporate Headquarters', category: 'Message Centers', img: 'pexels-photo-1058275.jpeg' },
    { title: 'Pylon Sign — Medical Campus', category: 'Pylon Signs', img: 'traditional-led-signs-2.png' },
  ];

  for (let i = 0; i < portfolioData.length; i++) {
    const p = portfolioData[i];
    const image = await uploadImage(p.img);
    await client.createOrReplace({
      _id: `portfolio-${i + 1}`,
      _type: 'portfolioItem',
      title: p.title,
      category: p.category,
      ...(image && { image }),
      order: i + 1,
    });
    console.log(`  ✓ ${p.title}`);
  }
  console.log();

  // ═══════════════════════════════════════════
  // 9. CERTIFICATIONS
  // ═══════════════════════════════════════════
  console.log('🏅 Certifications...');
  const certData = ['BBB Accredited', 'Licensed & Insured', 'UL Listed', 'Energy Star Partner'];
  for (let i = 0; i < certData.length; i++) {
    await client.createOrReplace({
      _id: `cert-${i + 1}`,
      _type: 'certification',
      name: certData[i],
      order: i + 1,
    });
    console.log(`  ✓ ${certData[i]}`);
  }
  console.log();

  // ═══════════════════════════════════════════
  // 10. PAGES
  // ═══════════════════════════════════════════
  console.log('📄 Pages...');

  // --- HOME PAGE ---
  const homeHeroBg = await uploadImage('full-service-electronic-sign-company-6.jpg');
  const homeIntroBg = await uploadImage('full-color-led-electronic-sign-4.jpg');
  const homeDigitalBg = await uploadImage('electronic-digital-message-displays-signs-3.jpg');

  await client.createOrReplace({
    _id: 'page-home',
    _type: 'page',
    title: 'Home',
    slug: { _type: 'slug', current: 'home' },
    pageType: 'home',
    metaTitle: 'LED & Digital Sign Manufacturer | Charlotte, NC',
    metaDescription: 'ProVizion LED — full-service LED sign manufacturer in Charlotte, NC. Custom LED signs, digital displays, channel letters & monument signs. Same-day quotes. Call (984) 217-6527.',
    metaKeywords: 'LED signs, digital signs, sign manufacturer, Charlotte NC, LED sign company, custom LED signage, channel letters, monument signs, electronic message centers, North Carolina',
    hero: {
      label: 'Charlotte, NC — LED Sign Manufacturer',
      title: 'Custom LED & Digital Signs',
      titleAccent: 'Built in Charlotte, NC',
      subtitle: 'Full-service LED sign manufacturer — custom signage, digital displays, and electronic message centers. Same-day quotes available.',
      servicesTags: ['Design', 'Fabrication', 'Installation'],
      ...(homeHeroBg && { backgroundImage: homeHeroBg }),
    },
    sections: [
      {
        _type: 'splitLayout',
        _key: 'home-intro',
        label: 'About Us',
        title: "Charlotte's Trusted LED Sign Manufacturer",
        body: toBlocks([
          'ProVizion LED is a full-service LED sign manufacturer based in Charlotte, NC. We specialize in custom LED signs, digital sign displays, illuminated channel letters, electronic message centers, and LED monument signs — designed, fabricated, and installed by our in-house team.',
          'From outdoor business signs to indoor digital signage, our sign manufacturing process combines precision fabrication with the latest LED technology. Whether you need a single storefront sign or a multi-location rollout across North Carolina, ProVizion LED delivers on time and on budget.',
        ]),
        ...(homeIntroBg && { image: homeIntroBg }),
        imagePosition: 'right',
        buttonText: 'Get A Free Quote',
        buttonLink: '/contact-us',
      },
      {
        _type: 'splitLayout',
        _key: 'home-digital',
        label: 'Digital Solutions',
        title: 'Digital Displays & Electronic Message Centers',
        body: toBlocks([
          'Our custom digital sign displays and electronic message centers bring your content to life with full-color LED technology, real-time updates, and remote content management. Perfect for retail stores, corporate lobbies, schools, and churches.',
          'Whether you need an indoor digital signage display or a high-brightness outdoor electronic message center, ProVizion LED manufactures and installs digital sign solutions built for the Charlotte, NC climate and beyond.',
        ]),
        ...(homeDigitalBg && { image: homeDigitalBg }),
        imagePosition: 'right',
        buttonText: 'Explore Digital Signs',
        buttonLink: '/digital-signs',
      },
      {
        _type: 'ctaSection',
        _key: 'home-final-cta',
        label: 'Get Started',
        title: 'Looking for an LED Sign Company Near Me in Charlotte, NC?',
        body: toBlocks([
          'Whether you need custom LED signs, digital sign displays, illuminated channel letters, or electronic message centers — ProVizion LED is your local sign manufacturer in Charlotte, North Carolina. We handle everything from sign design and fabrication to professional installation and ongoing maintenance.',
          'Get a free, same-day quote on LED signs, monument signs, digital displays, and more. Call us today or fill out our contact form to speak with an LED signage expert.',
        ]),
        buttonText: 'Get A Free Quote',
        buttonLink: '/contact-us',
      },
    ],
  });
  console.log('  ✓ Home Page');

  // --- LED SIGNS PAGE ---
  const ledHeroBg = await uploadImage('electronic-signs-1.jpg');
  const ledIntroBg = await uploadImage('full-color-led-electronic-sign-4.jpg');
  const ledWhyBg = await uploadImage('full-service-electronic-sign-company-6.jpg');
  const ledJourneyBg = await uploadImage('custom-electronic-sign-company-4.jpeg');

  await client.createOrReplace({
    _id: 'page-led-signs',
    _type: 'page',
    title: 'LED Signs & Displays',
    slug: { _type: 'slug', current: 'led-signs' },
    pageType: 'service',
    metaTitle: 'LED Signs & Displays',
    metaDescription: 'ProVizion LED manufactures premium LED signs and displays with vibrant colors, energy-efficient technology, and unmatched clarity for indoor and outdoor use.',
    hero: {
      label: 'LED Signage',
      title: 'LED Signs & Displays',
      servicesTags: ['Design', 'Production', 'Installation'],
      ...(ledHeroBg && { backgroundImage: ledHeroBg }),
    },
    sections: [
      {
        _type: 'splitLayout',
        _key: 'led-intro',
        label: 'Overview',
        title: 'LED Signs & Displays',
        body: toBlocks([
          "In today's fast-paced digital age, LED signs and displays have emerged as the front-runners in the realm of visual communication. Their vibrant and dynamic presentations capture attention, leaving a lasting impression on viewers.",
          "LED technology not only brings messages to life but also infuses a modern and sophisticated touch into any setting. Whether it's a bustling urban landscape or a peaceful indoor space, LED signage offers limitless possibilities for brands to engage, inform, and entertain their audiences.",
        ]),
        ...(ledIntroBg && { image: ledIntroBg }),
        imagePosition: 'right',
        buttonText: 'Free Consultation',
        buttonLink: 'tel:+19842176527',
      },
      {
        _type: 'featureGrid',
        _key: 'led-features',
        label: 'Benefits',
        title: 'Why Choose LED Signage?',
        columns: 3,
        items: [
          { _key: 'lf1', iconName: 'HiLightBulb', title: 'Dynamic & Versatile', description: "With programmable LED signs, brands can change messages on the fly, catering to different audiences or times of the day. Whether it's a high-brightness LED sign flashing a store's latest offer or interactive LED displays engaging users in real time, the dynamic nature of LED technology is unbeatable." },
          { _key: 'lf2', iconName: 'HiCog', title: 'Energy-Efficient', description: 'One of the strongest attributes of LED sign technology is its energy efficiency. LED display systems consume significantly less power than traditional lighting solutions, making them both environmentally friendly and cost-effective.' },
          { _key: 'lf3', iconName: 'HiGlobe', title: 'Indoor & Outdoor Brilliance', description: "Whether you're looking for outdoor LED signs to withstand the elements or sleek indoor LED signs for a corporate setting, LED technology delivers vibrant clarity in all environments." },
        ],
      },
      {
        _type: 'productGrid',
        _key: 'led-products',
        label: 'Solutions',
        title: 'Exploring the Expansive World of LED Displays',
        subtitle: 'From LED screen displays that transform entire building facades into digital canvases, to LED video walls that offer an immersive cinematic experience, the applications of LED are vast and varied:',
        items: [
          { _key: 'lp1', iconName: 'HiDesktopComputer', title: 'LED Video Displays & Walls', description: 'Perfect for events, concerts, and corporate presentations, these systems provide high-definition visuals that can make any content come alive.' },
          { _key: 'lp2', iconName: 'HiAnnotation', title: 'LED Message Centers & Boards', description: 'Ideal for businesses looking to deliver real-time updates, promotions, or general information to their clientele.' },
          { _key: 'lp3', iconName: 'HiViewGrid', title: 'LED Screen Panels & Display Boards', description: 'These versatile pieces can be assembled in unique configurations, providing custom LED signs tailored to specific spaces and needs.' },
          { _key: 'lp4', iconName: 'HiSpeakerphone', title: 'LED Advertising & Billboard Displays', description: 'Elevate brand messages with larger-than-life displays that capture attention from miles away.' },
          { _key: 'lp5', iconName: 'HiCalendar', title: 'LED Sign Rentals', description: 'Perfect for one-off events or businesses that require LED solutions temporarily.' },
        ],
        closingText: "As LED technology continues to advance, we can anticipate even more exciting developments and applications in the future, enhancing how businesses engage with their audiences and leaving a lasting impact in the world of visual communication. Whether it's through dynamic advertising campaigns, interactive installations, or immersive storytelling, LED displays are at the forefront of transforming how we connect, inform, and entertain.",
      },
      {
        _type: 'splitLayout',
        _key: 'led-why',
        label: 'Why Us',
        title: 'Why Partner with ProVizion LED?',
        body: toBlocks([
          'ProVizion LED stands apart as a true LED sign specialist. Our solutions range from affordable LED signs for small businesses to intricate display systems for large enterprises.',
          "With years of industry experience, our team remains at the forefront of LED technology trends. When you partner with us, you're getting a comprehensive signage solution tailored to your unique needs, backed by our unwavering commitment to excellence.",
        ]),
        ...(ledWhyBg && { image: ledWhyBg }),
        imagePosition: 'left',
        buttonText: 'Get A Free Quote',
        buttonLink: '#contact',
      },
      {
        _type: 'ctaSection',
        _key: 'led-cta',
        title: 'Elevate Your Brand with ProVizion LED',
        body: toBlocks([
          "Ready to explore the world of digital signs, electronic displays, and more? Whether you're considering LED display screens for an event or LED message centers for your storefront, ProVizion LED is your trusted guide.",
          "Discover the brilliance of LED with a team that's as passionate about your brand's success as you are. Our expert consultants are ready to discuss your specific goals and requirements, offering tailored solutions to meet your unique needs.",
          "Don't miss the opportunity to elevate your brand with the power of LED technology — contact ProVizion LED now for a brighter future!",
        ]),
        buttonText: 'Free LED Sign Consultation',
        buttonLink: '#contact',
        showLogo: true,
      },
    ],
  });
  console.log('  ✓ LED Signs Page');

  // --- DIGITAL SIGNS PAGE ---
  const digitalHeroBg = await uploadImage('electronic-digital-message-displays-signs-3.jpg');
  const digitalJourneyBg = await uploadImage('custom-electronic-sign-company-4.jpeg');

  await client.createOrReplace({
    _id: 'page-digital-signs',
    _type: 'page',
    title: 'Digital Signs & Displays',
    slug: { _type: 'slug', current: 'digital-signs' },
    pageType: 'service',
    metaTitle: 'Digital Signs and Displays',
    metaDescription: 'ProVizion LED delivers cutting-edge digital signs and displays that revolutionize business communication with dynamic content, interactive experiences, and versatile applications.',
    hero: {
      label: 'Digital Signage',
      title: 'Digital Signs & Displays',
      servicesTags: ['Design', 'Production', 'Install'],
      ...(digitalHeroBg && { backgroundImage: digitalHeroBg }),
    },
    sections: [
      {
        _type: 'splitLayout',
        _key: 'dig-intro',
        label: 'Overview',
        title: 'Digital Signs and Displays',
        body: toBlocks([
          'Modern digital signs and displays have revolutionized the way businesses and public spaces connect with their audiences. From airports guiding travelers with real-time updates to restaurants showcasing dynamic menus, digital signage is indispensable across industries.',
          'Corporate environments, museums, hospitals, and retail spaces all benefit from interactive digital displays that inform, engage, and inspire — shaping the future of visual communication.',
        ]),
        ...(digitalHeroBg && { image: digitalHeroBg }),
        imagePosition: 'right',
        buttonText: 'Free Consultation',
        buttonLink: 'tel:+19842176527',
      },
      {
        _type: 'featureGrid',
        _key: 'dig-features',
        label: 'The Future',
        title: 'The Rise of Digital Signage',
        subtitle: 'Digital signs have redefined the advertising landscape. Unlike static signs, digital displays allow real-time updates, interactivity, and targeted messaging — delivering higher ROI and increased brand visibility.',
        columns: 3,
        items: [
          { _key: 'df1', iconName: 'HiRefresh', title: 'Dynamic Content', description: 'Digital signage allows for real-time updates, making it easy to promote events, adjust menus, or share news quickly and effectively.' },
          { _key: 'df2', iconName: 'HiCursorClick', title: 'Interactive Experiences', description: 'Interactive displays engage users, offering personalized interactions such as browsing product catalogs or exploring maps. This enhances engagement and fosters brand loyalty.' },
          { _key: 'df3', iconName: 'HiTemplate', title: 'Versatile Applications', description: 'Digital displays are incredibly versatile, finding use in various industries and settings. From stunning LED video walls at events to promotional screens in retail, they adapt to diverse needs.' },
        ],
      },
      {
        _type: 'productGrid',
        _key: 'dig-products',
        label: 'Solutions',
        title: 'Venturing Deeper into the Digital Signage World',
        subtitle: 'The realm of digital signs and displays is vast, and here are some facets you might consider:',
        items: [
          { _key: 'dp1', iconName: 'HiOfficeBuilding', title: 'Commercial Digital Signage', description: 'Ideal for businesses wanting to create a visual impact, be it in retail, hospitality, or corporate sectors.' },
          { _key: 'dp2', iconName: 'HiLightningBolt', title: 'LED Signs & Electronic Signage', description: 'A match made in heaven, combining the brilliance of LED with the versatility of digital technology.' },
          { _key: 'dp3', iconName: 'HiSpeakerphone', title: 'Digital Advertising Boards & Screens', description: 'Transform your advertising strategy, making it more engaging and visually appealing.' },
          { _key: 'dp4', iconName: 'HiSun', title: 'Indoor & Outdoor Digital Signs', description: "Whether you're looking to dazzle inside a mall or stand out in the open, there's a solution tailored for every need." },
          { _key: 'dp5', iconName: 'HiCode', title: 'Digital Signage Software & CMS', description: 'Managing content for digital signs has never been easier, thanks to advanced digital signage software and content management systems.' },
        ],
      },
      {
        _type: 'featureGrid',
        _key: 'dig-why',
        label: 'Why Us',
        title: 'Why ProVizion LED Should Be Your Go-To for Digital Signage Solutions',
        subtitle: 'You might wonder, "With so many options for digital signage \'near me signs\', why choose ProVizion LED?" Here\'s why:',
        columns: 2,
        items: [
          { _key: 'dw1', iconName: 'HiColorSwatch', title: 'Custom Digital Signs', description: 'We believe every brand has a unique story, and we craft bespoke digital displays to tell yours.' },
          { _key: 'dw2', iconName: 'HiClipboardCheck', title: 'End-to-End Digital Signage Services', description: 'From the initial concept to installation, we handle everything, ensuring your signage is impeccable.' },
          { _key: 'dw3', iconName: 'HiChip', title: 'Latest in Digital Display Solutions', description: 'Our team stays updated with industry trends, ensuring you get the most modern solutions.' },
          { _key: 'dw4', iconName: 'HiShieldCheck', title: 'Reliability', description: 'Years of experience coupled with cutting-edge technology make us a trusted partner for all your digital signage needs.' },
        ],
      },
      {
        _type: 'splitLayout',
        _key: 'dig-journey',
        label: 'Your Journey',
        title: 'Your Digital Signage Journey Begins Here',
        body: toBlocks([
          "Navigating the world of digital signs can seem daunting, but with ProVizion LED, it becomes an exciting journey. We're your partners in crafting digital stories that resonate.",
          'With our expertise and commitment to innovation, we ensure your digital signage strategy evolves with the times. Your success is our goal.',
        ]),
        ...(digitalJourneyBg && { image: digitalJourneyBg }),
        imagePosition: 'right',
        buttonText: 'Start Your Journey',
        buttonLink: '#contact',
      },
      {
        _type: 'ctaSection',
        _key: 'dig-cta',
        title: 'Free Digital Sign Consultation',
        body: toBlocks([
          'Ready to transform the way your brand communicates? Our team of experts will work closely with you to understand your unique needs and tailor a digital signage solution that exceeds your expectations.',
          'Contact us today and take the first step toward a brighter, more engaging future!',
        ]),
        buttonText: 'Free Digital Sign Consultation',
        buttonLink: '#contact',
        showLogo: true,
      },
    ],
  });
  console.log('  ✓ Digital Signs Page');

  // --- ELECTRONIC SIGNS PAGE ---
  const elecHeroBg = await uploadImage('electronic-message-centers-digital-signage-display-1.jpg');
  const elecWhyBg = await uploadImage('programmable-led-message-centers-3.jpg');
  const elecCanvasBg = await uploadImage('indoor-led-message-board-sign-2.jpg');

  await client.createOrReplace({
    _id: 'page-electronic-signs',
    _type: 'page',
    title: 'Electronic Signs & Displays',
    slug: { _type: 'slug', current: 'electronic-signs' },
    pageType: 'service',
    metaTitle: 'Electronic Signs & Message Centers',
    metaDescription: 'ProVizion LED delivers high-impact electronic signs and message centers that capture attention, engage audiences, and drive results for businesses of all sizes.',
    hero: {
      label: 'Electronic Signage',
      title: 'Electronic Signs & Displays',
      servicesTags: ['Design', 'Production', 'Install'],
      ...(elecHeroBg && { backgroundImage: elecHeroBg }),
    },
    sections: [
      {
        _type: 'splitLayout',
        _key: 'elec-intro',
        label: 'Overview',
        title: 'Electronic Signs & Displays',
        body: toBlocks([
          "In this dynamic world of electronic signs and displays, your brand's message can go beyond the boundaries of traditional advertising. From eye-catching LED billboards to interactive kiosks and sleek digital menu boards, electronic displays captivate, inform, and inspire.",
          'With real-time updates, touchscreen interactions, and versatile applications, electronic signs are the modern storytellers of our digital age.',
        ]),
        ...(elecHeroBg && { image: elecHeroBg }),
        imagePosition: 'right',
        buttonText: 'Free Consultation',
        buttonLink: 'tel:+19842176527',
      },
      {
        _type: 'splitLayout',
        _key: 'elec-why',
        label: 'Benefits',
        title: 'Why Electronic Signs?',
        body: toBlocks([
          "Electronic signs elevate your brand, ensuring it stands out amid the clutter. They serve as your brand's megaphone, broadcasting your message with clarity and style — whether it's a commanding outdoor display or a subtle indoor sign.",
          "Customizable to match your brand's identity, electronic signage reigns supreme in personalization. Indoors or outdoors, they offer unparalleled versatility, effortlessly adapting to your space, needs, and message.",
        ]),
        ...(elecWhyBg && { image: elecWhyBg }),
        imagePosition: 'left',
        buttonText: 'Get A Free Quote',
        buttonLink: '#contact',
      },
      {
        _type: 'featureGrid',
        _key: 'elec-features',
        label: 'Solutions',
        title: 'ProVizion LED: Where Electronic Signage Speaks Volumes',
        subtitle: "In the search for 'electronic signs near me,' you'll find many options, but none quite like ProVizion LED. Why are we the talk of the town?",
        columns: 3,
        items: [
          { _key: 'ef1', iconName: 'HiColorSwatch', title: 'Tailored Just for You', description: 'Our custom electronic signs are not off-the-rack; they are tailor-made to suit your business persona.' },
          { _key: 'ef2', iconName: 'HiLightningBolt', title: 'Innovation Meets Expertise', description: 'Our LED digital signage and high-resolution digital signs are crafted using the latest technology, ensuring your message is not just seen but remembered.' },
          { _key: 'ef3', iconName: 'HiCursorClick', title: 'Interactive Adventures', description: 'We bring the future to your fingertips with interactive digital boards and touchscreen displays that captivate and engage your audience.' },
        ],
      },
      {
        _type: 'splitLayout',
        _key: 'elec-canvas',
        label: 'Your Canvas',
        title: 'Your Brand Deserves to Be Seen & Heard',
        body: toBlocks([
          'Visualize your brand story unfolding across an electronic message board, bold and bright against the night sky. With our cutting-edge technology, we transform your concepts into stunning electronic displays that captivate your audience.',
          'Electronic advertising signs give your brand a powerful voice — through vivid visuals, real-time updates, and interactive experiences. Elevate your visibility and make a statement that resonates.',
        ]),
        ...(elecCanvasBg && { image: elecCanvasBg }),
        imagePosition: 'right',
        buttonText: 'Free Consultation',
        buttonLink: 'tel:+19842176527',
      },
      {
        _type: 'ctaSection',
        _key: 'elec-cta',
        title: 'Step into the Spotlight with ProVizion LED',
        body: toBlocks([
          "Ready to cast your brand in the best possible light? During our FREE consultation, we'll dive deep into your brand's objectives and craft a customized solution that aligns perfectly with your vision.",
          "Whether you're upgrading your storefront with a stunning LED display or engaging your audience with interactive digital signage, we deliver cutting-edge solutions that leave a lasting impact.",
        ]),
        buttonText: 'Free Electronic Sign Consultation',
        buttonLink: '#contact',
        showLogo: true,
      },
    ],
  });
  console.log('  ✓ Electronic Signs Page');

  // --- LIGHTED SIGNS PAGE ---
  const litHeroBg = await uploadImage('lighted-and-illuminated-signs-2.jpeg');
  const litIntroBg = await uploadImage('led-signs-channel-letters-lit-at-night-1.jpg');
  const litProcessBg = await uploadImage('custom-electronic-sign-company-4.jpeg');
  const litPartnerBg = await uploadImage('michaels-raw-bar.jpg');

  await client.createOrReplace({
    _id: 'page-lighted-signs',
    _type: 'page',
    title: 'Lighted, Illuminated, & Backlit Signs',
    slug: { _type: 'slug', current: 'lighted-signs' },
    pageType: 'service',
    metaTitle: 'Lighted & Illuminated Signs',
    metaDescription: 'ProVizion LED creates stunning lighted and illuminated signs including LED channel letters, backlit signs, neon alternatives, and custom illuminated displays.',
    hero: {
      label: 'Illuminated Signage',
      title: 'Lighted, Illuminated, & Backlit Signs',
      servicesTags: ['Design', 'Production', 'Install'],
      ...(litHeroBg && { backgroundImage: litHeroBg }),
    },
    sections: [
      {
        _type: 'splitLayout',
        _key: 'lit-intro',
        label: 'Overview',
        title: 'Lighted, Illuminated, & Backlit Signs',
        body: toBlocks([
          'In the twinkling skyline of business avenues, one protagonist shines brighter than the rest: Lighted signs. ProVizion LED turns light into a potent messenger for your brand, ensuring your business becomes a beacon of distinction.',
          'With innovative designs and state-of-the-art lighting solutions, we transform your storefront into an eye-catching spectacle that draws customers in day and night.',
        ]),
        ...(litIntroBg && { image: litIntroBg }),
        imagePosition: 'right',
        buttonText: 'Free Consultation',
        buttonLink: 'tel:+19842176527',
      },
      {
        _type: 'splitLayout',
        _key: 'lit-brilliance',
        label: 'Brilliance',
        title: 'The Brilliance of Illuminated Signs',
        body: toBlocks([
          'As dusk falls, a transformation begins. Lighted signs transform the night into a canvas for visibility. From the warm allure of neon signs to the sleek glow of LED lighted signs, ProVizion LED crafts each piece with the promise of quality and impact.',
          "Whether it's sleek channel letters that spell sophistication or a backlit sign that radiates allure, lighted signs are beacons guiding customers to your doorstep — ensuring your business stands out day or night.",
        ]),
        ...(litHeroBg && { image: litHeroBg }),
        imagePosition: 'left',
        buttonText: 'Get A Free Quote',
        buttonLink: '#contact',
      },
      {
        _type: 'featureGrid',
        _key: 'lit-types',
        label: 'Types',
        title: 'The Spectrum of Choices at ProVizion LED',
        subtitle: "At ProVizion LED, we understand that variety is the spice of life — and business. That's why our selection of lighted signs and displays is as diverse as the businesses we serve:",
        columns: 2,
        items: [
          { _key: 'lt1', iconName: 'HiLightBulb', title: 'LED Lighted Signs', description: "Pairing luminosity with longevity, our LED signs are not just brilliant; they're smart. Energy-efficient and programmable, they are the sentinels of sustainability." },
          { _key: 'lt2', iconName: 'HiSun', title: 'Outdoor Lighted Signs', description: "Built to brave the elements, these signs stand as landmarks of your presence. Robust, radiant, and resilient, they're your outdoor voice." },
          { _key: 'lt3', iconName: 'HiSparkles', title: 'Neon Signs', description: "The classic charm of neon brings a retro-cool vibe, infusing your brand with a timeless character that's impossible to ignore." },
          { _key: 'lt4', iconName: 'HiColorSwatch', title: 'Custom Lighted Signs', description: 'Unique as your brand, our custom signs are born from a blend of your vision and our creativity. If you dream it, we can illuminate it.' },
        ],
      },
      {
        _type: 'splitLayout',
        _key: 'lit-process',
        label: 'Process',
        title: 'From Design to Glow',
        body: toBlocks([
          "Every sign's journey begins with your vision. Our design maestros translate your brand into a lighted masterpiece using the latest sign lighting technology. We ensure every bulb, every LED, and every neon tube is a testament to durability and excellence.",
          "Whether it's exterior signs that demand attention or indoor backlit signs that speak volumes in hushed tones, we craft enduring beacons that represent your brand with brilliance.",
        ]),
        ...(litProcessBg && { image: litProcessBg }),
        imagePosition: 'right',
        buttonText: 'Get A Free Quote',
        buttonLink: '#contact',
      },
      {
        _type: 'splitLayout',
        _key: 'lit-partner',
        label: 'Near You',
        title: 'Your Local Sign Partner',
        body: toBlocks([
          "ProVizion LED is your local luminary — your partner in highlighting what makes your brand stand out. Whether it's the subtle warmth of a backlit sign or the vibrant allure of an LED display, we bring your ideas to life through stunning illumination.",
          'Let your next bright idea come to life and watch as your business becomes a beacon in your community.',
        ]),
        ...(litPartnerBg && { image: litPartnerBg }),
        imagePosition: 'left',
        buttonText: 'Free Consultation',
        buttonLink: 'tel:+19842176527',
      },
      {
        _type: 'ctaSection',
        _key: 'lit-cta',
        title: 'The Spotlight is Yours',
        body: toBlocks([
          "The question isn't if you should light up your brand, but how bright you want to shine. Whether you need outdoor LED signs, indoor backlit signs, or custom neon signs, we've got you covered.",
          'We pay attention to every detail, from design to installation, to ensure that your lighted sign reflects the essence of your business.',
        ]),
        buttonText: 'Free Lighted Sign Consultation',
        buttonLink: '#contact',
        showLogo: true,
      },
    ],
  });
  console.log('  ✓ Lighted Signs Page');

  console.log('\n✅ Seed complete! All content has been created in Sanity.\n');
}

seed().catch((err) => {
  console.error('\n❌ Seed failed:', err.message);
  process.exit(1);
});
