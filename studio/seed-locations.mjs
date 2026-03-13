/**
 * Sanity Seed Script — Location Pages
 *
 * Seeds all 31 location pages (Tier 1, 2, 3) into Sanity.
 *
 * Usage:
 *   cd studio
 *   SANITY_TOKEN=<your-token> node seed-locations.mjs
 *
 * Get a token from: https://www.sanity.io/manage → API → Tokens → Add token (Editor)
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'kiu1l2o6',
  dataset: process.env.SANITY_DATASET || 'production',
  token: process.env.SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

if (!process.env.SANITY_TOKEN) {
  console.error('ERROR: Set SANITY_TOKEN environment variable before running.');
  console.error('Get one from: https://www.sanity.io/manage → API → Tokens → Add token (Editor)');
  process.exit(1);
}

/* ── Location Data ── */

const NC_TIER1 = [
  {
    city: 'Charlotte', state: 'NC', slug: 'charlotte-nc', priority: '★★★',
    estimatedVolume: '250–480', order: 1,
    industries: [
      { name: 'Banking & Finance', description: 'Charlotte is the second-largest banking hub in the US. LED signage for banks, credit unions, and financial services.', iconName: 'office' },
      { name: 'Retail & Shopping', description: 'From SouthPark Mall to NoDa boutiques — dynamic LED signs that drive foot traffic.', iconName: 'retail' },
      { name: 'Healthcare', description: 'Hospital wayfinding, urgent care signage, and medical office LED displays across the Charlotte metro.', iconName: 'healthcare' },
      { name: 'Restaurants & Hospitality', description: 'Menu boards, outdoor seating signs, and eye-catching digital displays for Queen City dining.', iconName: 'hospitality' },
      { name: 'Churches & Worship', description: 'LED message boards and digital displays for Charlotte-area churches and places of worship.', iconName: 'education' },
      { name: 'Auto Dealerships', description: 'High-impact LED signs for car dealerships along Independence Blvd and South Blvd corridors.', iconName: 'display' },
    ],
    faqs: [
      { question: 'How much do LED signs cost in Charlotte, NC?', answer: 'LED sign costs in Charlotte range from $2,000 for small channel letters to $100,000+ for large full-color LED displays. Factors include size, resolution, installation complexity, and permitting. ProVizion LED provides free, detailed quotes for Charlotte businesses.' },
      { question: 'Do I need a sign permit in Charlotte?', answer: 'Yes. Charlotte has specific sign ordinances under the Charlotte Unified Development Ordinance (UDO). Requirements vary by zoning district — commercial, industrial, and mixed-use zones each have different size and placement rules. ProVizion LED handles all permitting for Charlotte-area projects.' },
      { question: 'How long does LED sign installation take in Charlotte?', answer: 'Typical LED sign projects in Charlotte take 4–8 weeks from design approval to installation. This includes permitting (1–3 weeks), manufacturing (2–3 weeks), and installation (1–2 days). Rush options are available for time-sensitive projects.' },
      { question: 'What types of LED signs work best for Charlotte businesses?', answer: 'The most popular LED sign types in Charlotte include: LED channel letters for storefronts, full-color LED message centers for churches and schools, digital menu boards for restaurants, and large LED displays for car dealerships and shopping centers.' },
    ],
  },
  {
    city: 'Raleigh', state: 'NC', slug: 'raleigh-nc', priority: '★★★',
    estimatedVolume: '140–290', order: 2,
    industries: [
      { name: 'Tech & Research', description: 'Research Triangle Park companies need modern LED displays for lobbies, campuses, and corporate events.', iconName: 'display' },
      { name: 'Higher Education', description: 'NC State, Wake Tech, and surrounding campuses rely on LED signage for wayfinding and event promotion.', iconName: 'education' },
      { name: 'Government', description: 'State capital buildings, courthouses, and municipal offices across Wake County.', iconName: 'government' },
      { name: 'Retail & Dining', description: 'Downtown Raleigh and North Hills shopping districts benefit from eye-catching LED signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'What LED sign options are available in Raleigh?', answer: 'ProVizion LED offers Raleigh businesses a full range: LED channel letters, full-color LED displays, digital menu boards, monument signs with LED, and outdoor LED message centers. All manufactured in Charlotte and installed by our local teams.' },
      { question: 'Does Raleigh have specific LED sign regulations?', answer: 'Yes. The City of Raleigh regulates sign size, brightness, and placement through the Unified Development Ordinance. LED signs must comply with brightness limits (measured in nits) and may require variance approval in certain historic districts. ProVizion LED navigates all Raleigh permitting for you.' },
      { question: 'How far is ProVizion LED from Raleigh?', answer: 'ProVizion LED is based in Charlotte, NC — about 2.5 hours from Raleigh. We have installation teams that regularly serve the Triangle area including Raleigh, Durham, Cary, and surrounding communities.' },
    ],
  },
  {
    city: 'Greensboro', state: 'NC', slug: 'greensboro-nc', priority: '★★★',
    estimatedVolume: '90–200', order: 3,
    industries: [
      { name: 'Manufacturing', description: 'LED signage for the Triad\'s manufacturing sector — warehouses, distribution centers, and industrial parks.', iconName: 'cog' },
      { name: 'Education', description: 'UNCG, A&T, and Guilford County schools use LED displays for campus communication.', iconName: 'education' },
      { name: 'Retail', description: 'Four Seasons Town Centre and Friendly Center restaurants and shops rely on impactful signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Does ProVizion LED serve Greensboro?', answer: 'Yes. ProVizion LED provides full LED sign services to Greensboro including design, manufacturing, permitting, and installation. We regularly serve the entire Piedmont Triad region.' },
      { question: 'What industries in Greensboro use LED signs most?', answer: 'Greensboro\'s top LED sign customers include manufacturers, universities, retail stores, churches, and auto dealerships. The city\'s diverse economy supports demand for everything from small channel letters to large outdoor LED displays.' },
    ],
  },
  {
    city: 'Durham', state: 'NC', slug: 'durham-nc', priority: '★★★',
    estimatedVolume: '80–180', order: 4,
    industries: [
      { name: 'Biotech & Healthcare', description: 'Duke University Health System and Research Triangle biotech firms need modern LED wayfinding and displays.', iconName: 'healthcare' },
      { name: 'Tech Startups', description: 'Durham\'s American Tobacco Campus and downtown tech scene demand cutting-edge digital signage.', iconName: 'display' },
      { name: 'Food & Beverage', description: 'Durham\'s thriving restaurant scene benefits from LED menu boards and storefront signage.', iconName: 'hospitality' },
    ],
    faqs: [
      { question: 'Can ProVizion LED install signs in Durham, NC?', answer: 'Absolutely. Durham is one of our key service areas in the Triangle. We handle everything from design through installation, including navigating Durham\'s sign permit requirements.' },
    ],
  },
  {
    city: 'Winston-Salem', state: 'NC', slug: 'winston-salem-nc', priority: '★★☆',
    estimatedVolume: '70–170', order: 5,
    industries: [
      { name: 'Healthcare', description: 'Wake Forest Baptist Medical Center and Novant Health campuses require comprehensive wayfinding signage.', iconName: 'healthcare' },
      { name: 'Arts & Innovation', description: 'The Innovation Quarter and downtown arts district use LED signs to draw visitors and promote events.', iconName: 'lightbulb' },
    ],
    faqs: [
      { question: 'What LED sign services are available in Winston-Salem?', answer: 'ProVizion LED offers Winston-Salem businesses the full range of LED signage — from channel letters and monument signs to full-color LED displays and digital message centers. We handle design, manufacturing, permitting, and installation.' },
    ],
  },
  {
    city: 'Fayetteville', state: 'NC', slug: 'fayetteville-nc', priority: '★★☆',
    estimatedVolume: '60–150', order: 6,
    industries: [
      { name: 'Military & Government', description: 'Fort Liberty (formerly Fort Bragg) and surrounding military-affiliated businesses need durable outdoor LED signage.', iconName: 'government' },
      { name: 'Retail & Services', description: 'Cross Creek Mall area and Skibo Road commercial corridors benefit from high-visibility LED signs.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Does ProVizion LED serve the Fayetteville / Fort Liberty area?', answer: 'Yes. We regularly install LED signs in Fayetteville and the greater Cumberland County area, including businesses serving the Fort Liberty military community.' },
    ],
  },
  {
    city: 'Wilmington', state: 'NC', slug: 'wilmington-nc', priority: '★★☆',
    estimatedVolume: '50–120', order: 7,
    industries: [
      { name: 'Tourism & Hospitality', description: 'Waterfront hotels, restaurants, and attractions need eye-catching LED signage to attract tourists.', iconName: 'hospitality' },
      { name: 'Retail', description: 'Mayfaire Town Center and downtown Wilmington shops benefit from LED storefront signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Can you install outdoor LED signs near the ocean in Wilmington?', answer: 'Yes. Our LED signs are built to withstand coastal conditions including salt air, high humidity, and storms. We use marine-grade components and proper NEMA-rated enclosures for all Wilmington coastal installations.' },
    ],
  },
  {
    city: 'Asheville', state: 'NC', slug: 'asheville-nc', priority: '★★☆',
    estimatedVolume: '40–110', order: 8,
    industries: [
      { name: 'Tourism & Craft', description: 'Asheville\'s brewery scene, arts community, and tourist attractions use LED signs to stand out on bustling streets.', iconName: 'hospitality' },
      { name: 'Healthcare', description: 'Mission Hospital and WNC Health Network facilities need wayfinding and informational LED displays.', iconName: 'healthcare' },
    ],
    faqs: [
      { question: 'Are there special LED sign regulations in Asheville?', answer: 'Asheville has a distinctive downtown character with specific sign regulations. The city has strict guidelines especially in historic districts. ProVizion LED is experienced with Asheville\'s sign codes and will handle all permitting.' },
    ],
  },
  {
    city: 'Cary', state: 'NC', slug: 'cary-nc', priority: '★☆☆',
    estimatedVolume: '30–90', order: 9,
    industries: [
      { name: 'Technology', description: 'SAS Institute, Epic Games, and the tech corridor along Highway 54 need modern LED signage solutions.', iconName: 'display' },
      { name: 'Retail & Dining', description: 'Waverly Place, Crossroads Plaza, and Park West Village benefit from quality LED signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Does ProVizion LED install signs in Cary, NC?', answer: 'Yes. Cary is part of our Triangle service area. We provide LED signs for Cary businesses including design, manufacturing, permitting through the Town of Cary, and professional installation.' },
    ],
  },
  {
    city: 'Concord', state: 'NC', slug: 'concord-nc', priority: '★☆☆',
    estimatedVolume: '30–80', order: 10,
    industries: [
      { name: 'Motorsports & Entertainment', description: 'Charlotte Motor Speedway, Concord Mills, and Great Wolf Lodge need large-scale LED displays.', iconName: 'display' },
      { name: 'Retail', description: 'Concord Mills Mall area and Derita Road commercial corridor benefit from LED storefront signs.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Is Concord close to ProVizion LED?', answer: 'Concord is just 20 minutes from our Charlotte facility. We frequently serve Concord and Cabarrus County businesses with LED signs, channel letters, and digital displays.' },
    ],
  },
];

const SC_TIER1 = [
  {
    city: 'Charleston', state: 'SC', slug: 'charleston-sc', priority: '★★★',
    estimatedVolume: '120–260', order: 1,
    industries: [
      { name: 'Tourism & Hospitality', description: 'Charleston\'s world-famous hospitality industry needs elegant LED signage for hotels, restaurants, and attractions.', iconName: 'hospitality' },
      { name: 'Healthcare', description: 'MUSC and Roper St. Francis hospitals need comprehensive LED wayfinding and informational displays.', iconName: 'healthcare' },
      { name: 'Retail', description: 'King Street shopping, Mount Pleasant Towne Centre, and waterfront shops benefit from LED signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Does ProVizion LED serve Charleston, SC?', answer: 'Yes. While our manufacturing facility is in Charlotte, NC, we have installation teams that regularly serve the greater Charleston area including Mount Pleasant, North Charleston, Summerville, and the surrounding Lowcountry.' },
      { question: 'Are there LED sign restrictions in historic Charleston?', answer: 'Yes. Charleston\'s Board of Architectural Review (BAR) has strict guidelines for signage in the historic district. LED signs may require special approval. ProVizion LED is experienced with Charleston\'s historic district sign requirements.' },
    ],
  },
  {
    city: 'Greenville', state: 'SC', slug: 'greenville-sc', priority: '★★★',
    estimatedVolume: '110–240', order: 2,
    industries: [
      { name: 'Manufacturing', description: 'BMW, Michelin, and the Upstate\'s manufacturing corridor need industrial LED signage and digital displays.', iconName: 'cog' },
      { name: 'Downtown Revival', description: 'Main Street Greenville\'s revitalized downtown features shops and restaurants needing quality LED signs.', iconName: 'retail' },
      { name: 'Healthcare', description: 'Prisma Health and Bon Secours facilities across the Upstate need LED wayfinding and signage.', iconName: 'healthcare' },
    ],
    faqs: [
      { question: 'How far is ProVizion LED from Greenville, SC?', answer: 'Greenville is approximately 1.5 hours from our Charlotte facility — making it one of our most accessible South Carolina markets. We serve Greenville businesses regularly with LED signs, installations, and ongoing service.' },
    ],
  },
  {
    city: 'Columbia', state: 'SC', slug: 'columbia-sc', priority: '★★★',
    estimatedVolume: '80–180', order: 3,
    industries: [
      { name: 'Government', description: 'As South Carolina\'s capital, Columbia has state buildings, courthouses, and municipal offices needing professional LED signage.', iconName: 'government' },
      { name: 'Higher Education', description: 'University of South Carolina campus and surrounding businesses benefit from LED displays and wayfinding.', iconName: 'education' },
      { name: 'Military', description: 'Fort Jackson and military-affiliated businesses need durable LED signage solutions.', iconName: 'shield' },
    ],
    faqs: [
      { question: 'What LED sign options are available in Columbia, SC?', answer: 'ProVizion LED serves Columbia with the full spectrum of LED signage: channel letters, full-color LED displays, digital message centers, LED monument signs, and indoor LED video walls. All manufactured in our Charlotte facility.' },
    ],
  },
  {
    city: 'Spartanburg', state: 'SC', slug: 'spartanburg-sc', priority: '★★☆',
    estimatedVolume: '40–110', order: 4,
    industries: [
      { name: 'Manufacturing', description: 'BMW Campus, Milliken & Company — the Spartanburg manufacturing sector needs industrial LED signage.', iconName: 'cog' },
      { name: 'Education', description: 'Wofford College, Converse University, and Spartanburg Community College need campus LED displays.', iconName: 'education' },
    ],
    faqs: [
      { question: 'Does ProVizion LED cover Spartanburg?', answer: 'Yes. Spartanburg is part of our SC Upstate service area, just about 1.5 hours from our Charlotte facility. We provide full LED sign services including design, manufacturing, permitting, and installation.' },
    ],
  },
  {
    city: 'Myrtle Beach', state: 'SC', slug: 'myrtle-beach-sc', priority: '★★☆',
    estimatedVolume: '40–100', order: 5,
    industries: [
      { name: 'Tourism & Entertainment', description: 'The Grand Strand\'s hotels, restaurants, amusement parks, and attractions need bright, weather-resistant LED signs.', iconName: 'hospitality' },
      { name: 'Retail', description: 'Broadway at the Beach, Coastal Grand Mall, and restaurant row benefit from high-impact LED signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Can LED signs withstand Myrtle Beach weather?', answer: 'Absolutely. ProVizion LED uses marine-grade components and NEMA-rated enclosures designed for coastal environments. Our LED signs are built to resist salt air, high humidity, and hurricane-force winds common to the Grand Strand.' },
    ],
  },
  {
    city: 'Rock Hill', state: 'SC', slug: 'rock-hill-sc', priority: '★☆☆',
    estimatedVolume: '30–70', order: 6,
    industries: [
      { name: 'Growing Suburbs', description: 'Rock Hill\'s rapid growth brings new businesses needing LED storefront signs and commercial signage.', iconName: 'office' },
      { name: 'Education', description: 'Winthrop University and Rock Hill School District use LED message boards for campus communication.', iconName: 'education' },
    ],
    faqs: [
      { question: 'How close is ProVizion LED to Rock Hill?', answer: 'Rock Hill is just 30 minutes from our Charlotte manufacturing facility — one of our closest South Carolina markets. We can offer fast turnaround and competitive pricing for Rock Hill businesses.' },
    ],
  },
  {
    city: 'Mount Pleasant', state: 'SC', slug: 'mount-pleasant-sc', priority: '★☆☆',
    estimatedVolume: '20–60', order: 7,
    industries: [
      { name: 'Retail & Dining', description: 'Mount Pleasant Towne Centre and Coleman Blvd restaurants benefit from quality LED storefronts.', iconName: 'retail' },
      { name: 'Healthcare', description: 'East Cooper Medical Center and medical offices along Highway 17 need professional LED signage.', iconName: 'healthcare' },
    ],
    faqs: [
      { question: 'Does ProVizion LED install signs in Mount Pleasant?', answer: 'Yes. Mount Pleasant is part of our Charleston metro service area. We provide full LED sign services including salt-air-resistant installations suitable for the Lowcountry climate.' },
    ],
  },
  {
    city: 'Hilton Head', state: 'SC', slug: 'hilton-head-sc', priority: '★☆☆',
    estimatedVolume: '20–60', order: 8,
    industries: [
      { name: 'Resort & Golf', description: 'Hilton Head\'s resorts, golf courses, and plantation communities need elegant, code-compliant LED signage.', iconName: 'hospitality' },
      { name: 'Retail', description: 'Shelter Cove and Coligny Plaza shopping areas benefit from tasteful LED storefront signs.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Are there special sign rules on Hilton Head Island?', answer: 'Yes. Hilton Head Island has strict sign ordinances emphasizing aesthetics and environmental sensitivity. Sign design must complement the island\'s character. ProVizion LED is familiar with Hilton Head\'s regulations and will ensure compliance.' },
    ],
  },
];

const NC_TIER2 = [
  {
    metroArea: 'Charlotte Metro Area', state: 'NC', slug: 'charlotte-metro', order: 1,
    estimatedVolume: '50–130',
    subCities: ['Huntersville', 'Cornelius', 'Davidson', 'Matthews', 'Waxhaw', 'Pineville', 'Indian Trail', 'Belmont', 'Ballantyne', 'SouthPark', 'Gastonia', 'Kannapolis', 'Mooresville'],
  },
  {
    metroArea: 'Raleigh-Durham Triangle', state: 'NC', slug: 'raleigh-durham-triangle', order: 2,
    estimatedVolume: '40–100',
    subCities: ['Apex', 'Wake Forest', 'Morrisville', 'Holly Springs', 'Fuquay-Varina', 'Garner', 'Knightdale', 'Carrboro'],
  },
  {
    metroArea: 'Piedmont Triad', state: 'NC', slug: 'piedmont-triad', order: 3,
    estimatedVolume: '30–80',
    subCities: ['High Point', 'Jamestown', 'Oak Ridge', 'Summerfield', 'Archdale', 'Emerywood', 'Deep River', 'Asheboro', 'Kernersville'],
  },
  {
    metroArea: 'NC Coast', state: 'NC', slug: 'nc-coast', order: 4,
    estimatedVolume: '20–50',
    subCities: ['Jacksonville', 'New Bern', 'Morehead City', 'Havelock', 'Kinston', 'Winterville'],
  },
  {
    metroArea: 'NC Foothills & Mountains', state: 'NC', slug: 'nc-foothills', order: 5,
    estimatedVolume: '20–50',
    subCities: ['Hickory', 'Boone', 'Morganton', 'Hendersonville', 'Waynesville', 'Lincolnton', 'Kings Mountain', 'Mount Airy'],
  },
  {
    metroArea: 'Central NC', state: 'NC', slug: 'central-nc', order: 6,
    estimatedVolume: '20–50',
    subCities: ['Salisbury', 'Statesville', 'Goldsboro', 'Rocky Mount', 'Mebane', 'Lumberton', 'Laurinburg', 'Roanoke Rapids', 'Southern Pines', 'Pinehurst', 'Reidsville', 'Elizabeth City', 'Tarboro', 'Siler City'],
  },
];

const SC_TIER2 = [
  {
    metroArea: 'Charleston Metro', state: 'SC', slug: 'charleston-metro', order: 1,
    estimatedVolume: '40–100',
    subCities: ['North Charleston', 'Summerville', 'Hanahan', 'Ladson', 'Moncks Corner', 'Daniel Island', 'West Ashley', 'James Island', 'Goose Creek'],
  },
  {
    metroArea: 'Greenville-Spartanburg Upstate', state: 'SC', slug: 'sc-upstate', order: 2,
    estimatedVolume: '50–120',
    subCities: ['Simpsonville', 'Mauldin', 'Greer', 'Travelers Rest', 'Powdersville', 'Taylors', 'Anderson', 'Easley', 'Clemson', 'Fountain Inn', 'Gaffney', 'Boiling Springs', 'Duncan', 'Roebuck', 'Inman', 'Woodruff', 'Cowpens', 'Chesnee'],
  },
  {
    metroArea: 'Columbia Midlands', state: 'SC', slug: 'columbia-midlands', order: 3,
    estimatedVolume: '30–80',
    subCities: ['Lexington', 'Irmo', 'Chapin', 'Blythewood', 'Forest Acres', 'Oak Grove', 'Red Bank', 'Lugoff', 'West Columbia', 'Cayce', 'Newberry', 'Orangeburg'],
  },
  {
    metroArea: 'Rock Hill–Fort Mill Area', state: 'SC', slug: 'rock-hill-fort-mill', order: 4,
    estimatedVolume: '20–50',
    subCities: ['Fort Mill', 'Tega Cay', 'Lake Wylie', 'Indian Land', 'Riverwalk', 'Laurel Creek', 'India Hook', 'Lancaster'],
  },
  {
    metroArea: 'SC Coast', state: 'SC', slug: 'sc-coast', order: 5,
    estimatedVolume: '30–70',
    subCities: ['North Myrtle Beach', 'Conway', 'Socastee', 'Garden City', 'Carolina Forest', 'Bluffton', 'Beaufort', 'Florence', 'Sumter'],
  },
];

/* ── Build Sanity Documents ── */

function buildTier1Doc(loc) {
  const stateFullName = loc.state === 'NC' ? 'North Carolina' : 'South Carolina';
  const title = `LED Signs & Digital Signage in ${loc.city}, ${loc.state}`;

  return {
    _type: 'locationPage',
    _id: `location-${loc.slug}`,
    title,
    slug: { _type: 'slug', current: loc.slug },
    tier: 1,
    city: loc.city,
    state: loc.state,
    stateFullName,
    priority: loc.priority,
    estimatedVolume: loc.estimatedVolume,
    order: loc.order,
    hero: {
      label: `${loc.city}, ${loc.state}`,
      headline: title,
      subheadline: `Custom LED signs, digital signage & electronic displays for businesses in ${loc.city}, ${stateFullName}. Design, manufacturing & installation by ProVizion LED.`,
      serviceTags: ['LED Signs', 'Digital Signage', 'Channel Letters', 'Monument Signs', 'Video Walls'],
    },
    sections: [
      {
        _key: `${loc.slug}-intro`,
        sectionType: 'split',
        label: 'Overview',
        title: `LED Signs & Digital Signage in ${loc.city}`,
        body: [
          {
            _type: 'block',
            _key: `${loc.slug}-intro-p1`,
            style: 'normal',
            children: [{ _type: 'span', _key: `${loc.slug}-intro-s1`, text: `ProVizion LED is proud to serve ${loc.city}, ${stateFullName} with premium LED signs and digital signage solutions. From eye-catching storefront channel letters to large-format outdoor LED displays, we deliver custom signage that helps ${loc.city} businesses stand out, attract customers, and communicate effectively.` }],
            markDefs: [],
          },
          {
            _type: 'block',
            _key: `${loc.slug}-intro-p2`,
            style: 'normal',
            children: [{ _type: 'span', _key: `${loc.slug}-intro-s2`, text: `All of our LED signs are designed and manufactured at our Charlotte, NC facility using premium components — then professionally installed by our experienced local teams. Whether you need an indoor LED video wall, an outdoor LED message center, or illuminated channel letters, ProVizion LED has the expertise to deliver.` }],
            markDefs: [],
          },
        ],
        imagePosition: 'right',
        altBackground: false,
        buttonText: 'Get A Free Quote',
        buttonLink: '#contact',
      },
      {
        _key: `${loc.slug}-services`,
        sectionType: 'featureGrid',
        label: 'Solutions',
        title: `LED Sign Types Available in ${loc.city}`,
        features: [
          { title: 'LED Channel Letters', description: 'Illuminated individual letters that make your business name glow day and night. Perfect for storefronts and building facades.', iconName: 'lightbulb' },
          { title: 'Full-Color LED Displays', description: 'High-resolution LED screens for dynamic content — promotions, menus, announcements, and video. Indoor and outdoor options.', iconName: 'display' },
          { title: 'LED Message Centers', description: 'Programmable LED signs for churches, schools, and businesses. Update your message remotely from any device.', iconName: 'message' },
          { title: 'LED Monument Signs', description: 'Ground-level illuminated signs with LED lighting for maximum visibility. Ideal for offices, churches, and shopping centers.', iconName: 'location' },
          { title: 'Digital Menu Boards', description: 'Indoor and outdoor LED menu displays for restaurants, cafes, and quick-service dining in the area.', iconName: 'grid' },
          { title: 'LED Video Walls', description: 'Seamless large-format LED displays for lobbies, event spaces, houses of worship, and entertainment venues.', iconName: 'display' },
        ],
        altBackground: true,
      },
      {
        _key: `${loc.slug}-why`,
        sectionType: 'featureGrid',
        label: `Why ${loc.city} Businesses Choose ProVizion LED`,
        title: 'The ProVizion Difference',
        features: [
          { title: 'In-House Manufacturing', description: 'Every sign is designed and built in our Charlotte facility — giving us full control over quality, timelines, and costs.', iconName: 'cog' },
          { title: 'Professional Installation', description: 'Our trained installation crews handle everything from permitting to final hookup across all of the Carolinas.', iconName: 'shield' },
          { title: 'Local Expertise', description: `We know ${loc.city}'s sign codes, permitting requirements, and business landscape — ensuring a smooth process from start to finish.`, iconName: 'location' },
        ],
        altBackground: false,
      },
    ],
    industries: loc.industries,
    faqs: loc.faqs,
    metaTitle: `LED Signs ${loc.city}, ${loc.state} | Custom Digital Signage | ProVizion LED`,
    metaDescription: `Custom LED signs & digital signage in ${loc.city}, ${stateFullName}. In-house manufacturing, professional installation. Get a free quote from ProVizion LED.`,
    keywords: [
      `LED signs ${loc.city}`,
      `LED signage ${loc.city}`,
      `LED sign company ${loc.city}`,
      `digital signage ${loc.city}`,
      `LED display ${loc.city}`,
      `outdoor LED signs ${loc.city}`,
      `LED business signs ${loc.city}`,
      `digital display ${loc.city}`,
    ],
  };
}

function buildTier2Doc(loc) {
  const stateFullName = loc.state === 'NC' ? 'North Carolina' : 'South Carolina';
  const title = `LED Signs in the ${loc.metroArea}`;

  return {
    _type: 'locationPage',
    _id: `location-${loc.slug}`,
    title,
    slug: { _type: 'slug', current: loc.slug },
    tier: 2,
    state: loc.state,
    stateFullName,
    metroArea: loc.metroArea,
    subCities: loc.subCities,
    estimatedVolume: loc.estimatedVolume,
    order: loc.order,
    hero: {
      label: loc.metroArea,
      headline: title,
      subheadline: `Custom LED signs & digital signage for businesses across the ${loc.metroArea}. Serving ${loc.subCities.slice(0, 4).join(', ')}, and more.`,
      serviceTags: ['LED Signs', 'Digital Signage', 'Installation'],
    },
    sections: [
      {
        _key: `${loc.slug}-intro`,
        sectionType: 'text',
        label: 'Overview',
        title: `LED Signage Across the ${loc.metroArea}`,
        body: [
          {
            _type: 'block',
            _key: `${loc.slug}-intro-p1`,
            style: 'normal',
            children: [{ _type: 'span', _key: `${loc.slug}-intro-s1`, text: `ProVizion LED serves the entire ${loc.metroArea} with custom LED signs, digital signage, and electronic displays. Based in Charlotte, NC, our team provides design, manufacturing, and professional installation across ${loc.subCities.join(', ')}, and surrounding communities.` }],
            markDefs: [],
          },
          {
            _type: 'block',
            _key: `${loc.slug}-intro-p2`,
            style: 'normal',
            children: [{ _type: 'span', _key: `${loc.slug}-intro-s2`, text: `Whether you need LED channel letters for a storefront, a full-color outdoor LED display, or a digital message center for your church or school — ProVizion LED delivers quality signage at competitive prices with professional installation.` }],
            markDefs: [],
          },
        ],
        altBackground: false,
      },
    ],
    faqs: [
      { question: `Does ProVizion LED serve the ${loc.metroArea}?`, answer: `Yes! ProVizion LED provides full LED sign services across the entire ${loc.metroArea} including ${loc.subCities.slice(0, 5).join(', ')}, and all surrounding communities. We handle design, manufacturing, permitting, and installation.` },
      { question: 'What types of LED signs do you offer?', answer: 'We offer a complete range: LED channel letters, full-color LED displays, LED message centers, LED monument signs, digital menu boards, video walls, and custom LED signage solutions. All designed and manufactured at our Charlotte facility.' },
    ],
    metaTitle: `LED Signs ${loc.metroArea} | Digital Signage | ProVizion LED`,
    metaDescription: `Custom LED signs & digital signage across the ${loc.metroArea}. Serving ${loc.subCities.slice(0, 4).join(', ')} & more. Free quotes from ProVizion LED.`,
    keywords: [
      `LED signs ${loc.metroArea}`,
      `digital signage ${loc.metroArea}`,
      ...loc.subCities.slice(0, 4).map((c) => `LED signs ${c}`),
    ],
  };
}

function buildTier3Doc(state) {
  const abbr = state === 'North Carolina' ? 'NC' : 'SC';
  const slug = state === 'North Carolina' ? 'north-carolina' : 'south-carolina';

  return {
    _type: 'locationPage',
    _id: `location-${slug}`,
    title: `Areas We Serve in ${state}`,
    slug: { _type: 'slug', current: slug },
    tier: 3,
    state: abbr,
    stateFullName: state,
    order: 1,
    hero: {
      label: state,
      headline: `LED Signs & Digital Signage in ${state}`,
      subheadline: `ProVizion LED serves all of ${state} with custom LED signs, digital signage, and electronic displays. Find your local area below.`,
      serviceTags: ['LED Signs', 'Digital Signage', 'Statewide Service'],
    },
    sections: [],
    metaTitle: `LED Signs ${state} | Areas We Serve | ProVizion LED`,
    metaDescription: `ProVizion LED serves all of ${state} with custom LED signs & digital signage. Charlotte-based manufacturing, statewide installation. Find your city.`,
    keywords: [
      `LED signs ${state}`,
      `LED signage ${abbr}`,
      `digital signage ${state}`,
      `LED sign company ${state}`,
    ],
  };
}

/* ── Seed Execution ── */

async function seed() {
  console.log('🌱 Starting location page seed...\n');

  const docs = [];

  // Tier 1
  NC_TIER1.forEach((loc) => docs.push(buildTier1Doc(loc)));
  SC_TIER1.forEach((loc) => docs.push(buildTier1Doc(loc)));

  // Tier 2
  NC_TIER2.forEach((loc) => docs.push(buildTier2Doc(loc)));
  SC_TIER2.forEach((loc) => docs.push(buildTier2Doc(loc)));

  // Tier 3
  docs.push(buildTier3Doc('North Carolina'));
  docs.push(buildTier3Doc('South Carolina'));

  console.log(`📦 Prepared ${docs.length} location documents\n`);

  let created = 0;
  let updated = 0;

  for (const doc of docs) {
    try {
      await client.createOrReplace(doc);
      console.log(`  ✅ ${doc.title} (${doc.slug.current})`);
      created++;
    } catch (err) {
      console.error(`  ❌ Failed: ${doc.title} — ${err.message}`);
    }
  }

  console.log(`\n🎉 Done! ${created} locations seeded successfully.`);
  if (created < docs.length) {
    console.log(`⚠️  ${docs.length - created} failed — check errors above.`);
  }
}

seed().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
