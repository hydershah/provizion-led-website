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
    distanceFromCharlotte: 'right here in our home city',
    localContext: 'As the largest city in North Carolina and the 15th-largest in the United States, Charlotte is a powerhouse of commerce, banking, and culture. The Queen City\'s booming Uptown district, the bustling South End corridor, the historic NoDa arts district, and thriving suburban commercial hubs like SouthPark and Ballantyne all create enormous demand for high-quality LED signage. With over 900,000 residents and a metro population exceeding 2.6 million, Charlotte businesses face intense competition for customer attention — making professional LED signs an essential investment.',
    industries: [
      { name: 'Banking & Finance', description: 'Charlotte is the second-largest banking hub in the US. LED signage for banks, credit unions, and financial services.', iconName: 'office' },
      { name: 'Retail & Shopping', description: 'From SouthPark Mall to NoDa boutiques — dynamic LED signs that drive foot traffic.', iconName: 'retail' },
      { name: 'Healthcare', description: 'Hospital wayfinding, urgent care signage, and medical office LED displays across the Charlotte metro.', iconName: 'healthcare' },
      { name: 'Restaurants & Hospitality', description: 'Menu boards, outdoor seating signs, and eye-catching digital displays for Queen City dining.', iconName: 'hospitality' },
      { name: 'Churches & Worship', description: 'LED message boards and digital displays for Charlotte-area churches and places of worship.', iconName: 'education' },
      { name: 'Auto Dealerships', description: 'High-impact LED signs for car dealerships along Independence Blvd and South Blvd corridors.', iconName: 'display' },
    ],
    faqs: [
      { question: 'How much do LED signs cost in Charlotte, NC?', answer: 'LED sign pricing in Charlotte depends on the type, size, resolution, and installation complexity. LED channel letter sets typically range from $2,000 to $15,000. Full-color outdoor LED displays range from $8,000 to $100,000+ depending on pixel pitch and screen dimensions. LED monument signs with integrated lighting range from $5,000 to $25,000. Digital menu boards start around $1,500 for basic indoor units and go up to $15,000 for large outdoor displays. ProVizion LED provides free, detailed quotes for every Charlotte project — we\'ll visit your location, assess your needs, and deliver a comprehensive proposal with no obligation.' },
      { question: 'Do I need a sign permit in Charlotte, NC?', answer: 'Yes. Charlotte regulates signage under the Charlotte Unified Development Ordinance (UDO). Requirements vary significantly by zoning district — commercial, industrial, mixed-use, and residential zones each have different rules governing sign size, height, illumination, placement, and quantity. Some areas, like historic districts and specific overlay zones, have additional restrictions. Electronic message centers may require special approval. ProVizion LED handles the entire permitting process for Charlotte-area projects, including permit applications, site plans, engineering documents, and inspection coordination.' },
      { question: 'How long does LED sign installation take in Charlotte?', answer: 'A typical LED sign project in Charlotte takes 4 to 8 weeks from design approval to completed installation. This includes permitting (1–3 weeks depending on complexity and the City of Charlotte\'s review backlog), manufacturing at our Charlotte facility (2–3 weeks), and professional installation (1–2 days for most projects). More complex projects like large LED displays or multi-sign packages may take longer. Rush production is available for time-sensitive projects — ask your ProVizion LED project manager about expedited timelines.' },
      { question: 'What types of LED signs work best for Charlotte businesses?', answer: 'The most popular LED sign types in Charlotte include: LED channel letters for retail storefronts and office buildings, full-color LED message centers for churches, schools, and community organizations, digital menu boards for restaurants and QSR chains, large outdoor LED displays for car dealerships and entertainment venues, LED monument signs for medical offices, churches, and corporate parks, and LED video walls for lobbies, conference rooms, and houses of worship. ProVizion LED will recommend the best LED sign type for your specific business, location, and budget during your free consultation.' },
      { question: 'Why choose ProVizion LED over other sign companies in Charlotte?', answer: 'ProVizion LED is Charlotte\'s own LED sign manufacturer — our facility is right here in the Queen City. Unlike national franchises that outsource manufacturing or online retailers that ship generic products, we design and build every sign in-house. This gives us complete control over quality, timelines, and costs. Our local installation crews know Charlotte\'s sign codes, building requirements, and neighborhoods intimately. We offer free on-site consultations, handle all permitting, provide professional installation, and back every sign with comprehensive warranties on both components and labor.' },
    ],
  },
  {
    city: 'Raleigh', state: 'NC', slug: 'raleigh-nc', priority: '★★★',
    estimatedVolume: '140–290', order: 2,
    distanceFromCharlotte: 'approximately 2.5 hours',
    localContext: 'Raleigh is the capital of North Carolina and a cornerstone of the world-renowned Research Triangle region. Home to NC State University, numerous state government buildings, and a rapidly growing tech and biotech sector, Raleigh offers a diverse commercial landscape. The city\'s downtown revitalization, the North Hills mixed-use district, and expanding suburban corridors along Capital Boulevard and Glenwood Avenue create strong demand for modern LED signage solutions that help businesses compete in this dynamic, well-educated market.',
    industries: [
      { name: 'Tech & Research', description: 'Research Triangle Park companies need modern LED displays for lobbies, campuses, and corporate events.', iconName: 'display' },
      { name: 'Higher Education', description: 'NC State, Wake Tech, and surrounding campuses rely on LED signage for wayfinding and event promotion.', iconName: 'education' },
      { name: 'Government', description: 'State capital buildings, courthouses, and municipal offices across Wake County.', iconName: 'government' },
      { name: 'Retail & Dining', description: 'Downtown Raleigh and North Hills shopping districts benefit from eye-catching LED signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'What LED sign options are available in Raleigh, NC?', answer: 'ProVizion LED offers Raleigh businesses a comprehensive range of LED signage solutions: illuminated LED channel letters in front-lit, back-lit, and halo-lit styles for storefronts and building facades; full-color outdoor LED displays for high-traffic visibility; programmable LED message centers for churches, schools, and organizations; LED monument signs for offices, medical centers, and churches; digital menu boards for restaurants and quick-service dining; and large-format indoor LED video walls for corporate lobbies, worship spaces, and event venues. All signs are custom-designed to match your brand and manufactured at our Charlotte facility.' },
      { question: 'Does Raleigh have specific LED sign regulations?', answer: 'Yes. The City of Raleigh regulates signage through its Unified Development Ordinance (UDO), which governs sign size, height, setback, illumination levels, and placement by zoning district. LED signs must comply with specific brightness limits measured in nits, and electronic message centers may have restrictions on animation, scrolling, and message change intervals. Historic overlay districts and certain corridors have additional requirements. ProVizion LED\'s team navigates all Raleigh permitting requirements as part of every project, ensuring your sign is fully code-compliant without delays.' },
      { question: 'How far is ProVizion LED from Raleigh?', answer: 'ProVizion LED is based in Charlotte, NC — approximately 2.5 hours from Raleigh. We have experienced installation teams that regularly serve the entire Triangle area including Raleigh, Durham, Cary, Apex, Wake Forest, and surrounding communities. Distance is never an issue — we offer free on-site consultations in Raleigh and handle the entire project from design through installation and ongoing support.' },
      { question: 'How much do LED signs cost in Raleigh?', answer: 'LED sign pricing for Raleigh businesses varies by type and size. LED channel letter sets range from $2,000 to $15,000. Full-color outdoor LED displays range from $8,000 to $100,000+ depending on dimensions and pixel pitch. LED monument signs typically cost $5,000 to $25,000. Digital menu boards range from $1,500 to $15,000. ProVizion LED provides free, detailed quotes — we\'ll visit your Raleigh location, evaluate your needs, and deliver a comprehensive proposal with exact pricing.' },
      { question: 'What industries in Raleigh use LED signs most?', answer: 'Raleigh\'s diverse economy drives LED sign demand across many industries: technology companies in RTP use LED lobby displays and campus signage, NC State University and other schools use LED message centers for event promotion and wayfinding, state government buildings use LED directories and information displays, restaurants and retailers along Glenwood Avenue and North Hills use digital menu boards and storefront signs, churches use LED message centers for service times and community updates, and medical offices use LED wayfinding and building identification signs.' },
    ],
  },
  {
    city: 'Greensboro', state: 'NC', slug: 'greensboro-nc', priority: '★★★',
    estimatedVolume: '90–200', order: 3,
    distanceFromCharlotte: 'about 1.5 hours',
    localContext: 'Greensboro anchors the Piedmont Triad region and is a major center for manufacturing, education, and retail. Home to brands like Volvo Trucks and Cone Denim, as well as prestigious universities including UNCG and NC A&T, Greensboro\'s commercial corridors along Battleground Avenue, Wendover Avenue, and the Four Seasons Town Centre area see heavy foot and vehicle traffic — making LED signage a powerful tool for attracting customers and building brand visibility.',
    industries: [
      { name: 'Manufacturing', description: 'LED signage for the Triad\'s manufacturing sector — warehouses, distribution centers, and industrial parks.', iconName: 'cog' },
      { name: 'Education', description: 'UNCG, A&T, and Guilford County schools use LED displays for campus communication.', iconName: 'education' },
      { name: 'Retail', description: 'Four Seasons Town Centre and Friendly Center restaurants and shops rely on impactful signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Does ProVizion LED serve Greensboro, NC?', answer: 'Yes. ProVizion LED provides full LED sign services to Greensboro, NC including custom design, in-house manufacturing, local permitting, and professional installation. Our Charlotte facility is just 1.5 hours from Greensboro, allowing us to serve the entire Piedmont Triad region efficiently. We offer free on-site consultations at your Greensboro business location.' },
      { question: 'What industries in Greensboro use LED signs most?', answer: 'Greensboro\'s diverse economy drives LED sign demand across multiple sectors: manufacturing and distribution companies need large outdoor LED identification signs and indoor wayfinding displays, universities like UNCG and NC A&T use LED message centers for campus communication and event promotion, retail stores along Battleground Avenue and Wendover Avenue use LED storefronts and window displays, churches throughout the Triad use LED message boards, and restaurants use digital menu boards. Auto dealerships along I-40 and South Elm-Eugene Street are also frequent LED sign customers.' },
      { question: 'How much do LED signs cost in Greensboro?', answer: 'LED sign costs in Greensboro are comparable to other mid-sized North Carolina cities. Channel letter sets range from $2,000 to $15,000, full-color outdoor LED displays from $8,000 to $80,000+, LED monument signs from $5,000 to $25,000, and digital menu boards from $1,500 to $15,000. ProVizion LED\'s in-house manufacturing keeps our prices competitive — typically 15–30% below national franchise companies because we eliminate middlemen. Contact us for a free, no-obligation quote for your Greensboro project.' },
      { question: 'What sign permits are needed in Greensboro?', answer: 'Greensboro requires sign permits for most commercial signage under its Land Development Ordinance (LDO). Regulations govern sign size, height, illumination, and placement based on zoning district. Electronic message centers have additional requirements regarding brightness, animation, and message change frequency. ProVizion LED handles all Greensboro sign permitting as part of our standard service, including permit applications, site plans, and inspection coordination.' },
      { question: 'How long does it take to get an LED sign in Greensboro?', answer: 'Most Greensboro LED sign projects take 4 to 8 weeks from design approval to completed installation. This includes permitting with the City of Greensboro (1–3 weeks), manufacturing at our Charlotte facility (2–3 weeks), and professional installation (1–2 days). Our proximity to Greensboro allows us to offer efficient project timelines and responsive service throughout the process.' },
    ],
  },
  {
    city: 'Durham', state: 'NC', slug: 'durham-nc', priority: '★★★',
    estimatedVolume: '80–180', order: 4,
    distanceFromCharlotte: 'about 2.5 hours',
    localContext: 'Durham — the Bull City — has transformed from a tobacco town into a thriving hub of biotech, healthcare, and culinary innovation. Duke University and Duke Health anchor the local economy, while the American Tobacco Campus and downtown Durham attract startups, restaurants, and creative businesses. The city\'s blend of historic charm and modern development creates diverse signage needs, from sleek LED displays for tech companies to warm, inviting channel letters for Durham\'s acclaimed restaurant scene.',
    industries: [
      { name: 'Biotech & Healthcare', description: 'Duke University Health System and Research Triangle biotech firms need modern LED wayfinding and displays.', iconName: 'healthcare' },
      { name: 'Tech Startups', description: 'Durham\'s American Tobacco Campus and downtown tech scene demand cutting-edge digital signage.', iconName: 'display' },
      { name: 'Food & Beverage', description: 'Durham\'s thriving restaurant scene benefits from LED menu boards and storefront signage.', iconName: 'hospitality' },
    ],
    faqs: [
      { question: 'Can ProVizion LED install signs in Durham, NC?', answer: 'Absolutely. Durham is one of our primary service areas in the Research Triangle region. We regularly design, manufacture, and install LED signs for Durham businesses, healthcare facilities, restaurants, tech companies, and educational institutions. Our Charlotte-based manufacturing facility is about 2.5 hours from Durham, and our experienced installation teams travel to Durham regularly for consultations and installations.' },
      { question: 'What types of LED signs are popular in Durham?', answer: 'Durham\'s eclectic economy drives demand for diverse LED sign types: biotech and healthcare companies around Duke University use sleek LED lobby displays, directory signs, and campus wayfinding; downtown Durham restaurants and bars use illuminated channel letters, LED neon-style signs, and digital menu boards; tech startups at American Tobacco Campus and Durham Innovation District use modern LED displays; churches and community organizations use programmable LED message centers; and retail businesses along Streets at Southpoint and Ninth Street use eye-catching LED storefronts.' },
      { question: 'Are there sign regulations specific to Durham?', answer: 'Yes. The City of Durham regulates commercial signage through its Unified Development Ordinance. Rules vary by zoning district and govern sign size, height, illumination, and placement. Durham\'s historic districts — including portions of downtown and the Brightleaf District — have additional review requirements through the Historic Preservation Commission. Electronic signs may face restrictions on brightness and message animation. ProVizion LED is experienced with Durham\'s regulations and handles all permitting.' },
      { question: 'How much do LED signs cost in Durham?', answer: 'LED sign pricing in Durham ranges from $2,000 for basic channel letter sets to $100,000+ for large full-color outdoor LED displays. Digital menu boards typically cost $1,500–$15,000, LED monument signs $5,000–$25,000, and indoor LED video walls $10,000–$80,000+. ProVizion LED provides free, detailed quotes — we\'ll visit your Durham location and deliver a complete proposal with no obligation.' },
      { question: 'What makes ProVizion LED a good choice for Durham businesses?', answer: 'ProVizion LED combines Charlotte-based manufacturing with deep experience serving the Triangle market. We design and build every sign in our own facility, which means better quality control, faster turnaround, and more competitive pricing than national franchises. Our installation crews are experienced with Durham\'s unique blend of historic and modern commercial areas, and we handle all local permitting to ensure a smooth, stress-free project.' },
    ],
  },
  {
    city: 'Winston-Salem', state: 'NC', slug: 'winston-salem-nc', priority: '★★☆',
    estimatedVolume: '70–170', order: 5,
    distanceFromCharlotte: 'about 1.5 hours',
    localContext: 'Winston-Salem is a city of arts, innovation, and healthcare excellence. The Innovation Quarter — a 200-acre mixed-use research and business district — and the renowned Wake Forest Baptist Medical Center drive demand for modern, technology-forward LED signage. Hanes Mall, one of the largest malls in the Carolinas, and vibrant commercial corridors along Stratford Road and Peters Creek Parkway provide additional opportunities for businesses to enhance visibility with professional LED signs.',
    industries: [
      { name: 'Healthcare', description: 'Wake Forest Baptist Medical Center and Novant Health campuses require comprehensive wayfinding signage.', iconName: 'healthcare' },
      { name: 'Arts & Innovation', description: 'The Innovation Quarter and downtown arts district use LED signs to draw visitors and promote events.', iconName: 'lightbulb' },
    ],
    faqs: [
      { question: 'What LED sign services are available in Winston-Salem?', answer: 'ProVizion LED offers Winston-Salem businesses the complete range of LED signage solutions: custom LED channel letters in front-lit, back-lit, and halo-lit styles; full-color outdoor LED display screens; programmable LED message centers for churches, schools, and businesses; LED monument signs with integrated lighting; digital menu boards for restaurants and quick-service dining; and large-format LED video walls for corporate lobbies, worship spaces, and event venues. Every sign is custom-designed, manufactured at our Charlotte facility, and professionally installed by our experienced crews.' },
      { question: 'How far is ProVizion LED from Winston-Salem?', answer: 'Our Charlotte manufacturing facility is approximately 1.5 hours from Winston-Salem, making us conveniently located to serve the entire Winston-Salem and Piedmont Triad area. We offer free on-site consultations at your Winston-Salem business location, and our installation teams travel to the area regularly. Distance is never a barrier to quality service.' },
      { question: 'Does Winston-Salem require sign permits for LED signs?', answer: 'Yes. The City of Winston-Salem regulates commercial signage through its Unified Development Ordinance. Permit requirements vary by zoning district and govern sign size, height, illumination levels, and placement. Electronic message centers and LED displays may have additional restrictions regarding brightness and message change intervals. ProVizion LED handles all Winston-Salem permitting as a standard part of our service.' },
      { question: 'What industries use LED signs in Winston-Salem?', answer: 'Winston-Salem\'s economy supports diverse LED sign demand: healthcare institutions like Wake Forest Baptist Medical Center use LED wayfinding and campus signage, Innovation Quarter businesses use modern LED displays, Hanes Mall retailers and restaurants use LED storefronts and menu boards, churches throughout Forsyth County use LED message centers, and auto dealerships along University Parkway and Peters Creek use large LED displays. The city\'s arts community also uses LED signage for galleries and event promotion.' },
      { question: 'How much do LED signs cost in Winston-Salem?', answer: 'LED sign costs in Winston-Salem are competitive with other mid-sized North Carolina cities. Channel letter sets typically range from $2,000–$15,000, outdoor LED displays from $8,000–$80,000+, monument signs from $5,000–$25,000, and digital menu boards from $1,500–$15,000. ProVizion LED\'s in-house manufacturing keeps pricing competitive. Contact us for a free, detailed quote for your Winston-Salem project.' },
    ],
  },
  {
    city: 'Fayetteville', state: 'NC', slug: 'fayetteville-nc', priority: '★★☆',
    estimatedVolume: '60–150', order: 6,
    distanceFromCharlotte: 'about 2 hours',
    localContext: 'Fayetteville is deeply intertwined with Fort Liberty (formerly Fort Bragg), the largest military installation in the world by population. The city\'s economy is driven by military families, defense contractors, and a growing commercial sector along Skibo Road, the Cross Creek Mall area, and the revitalizing downtown. Businesses in Fayetteville need durable, high-visibility LED signage that stands out along busy corridors and serves a population that values reliability and professionalism.',
    industries: [
      { name: 'Military & Government', description: 'Fort Liberty (formerly Fort Bragg) and surrounding military-affiliated businesses need durable outdoor LED signage.', iconName: 'government' },
      { name: 'Retail & Services', description: 'Cross Creek Mall area and Skibo Road commercial corridors benefit from high-visibility LED signs.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Does ProVizion LED serve the Fayetteville / Fort Liberty area?', answer: 'Yes. ProVizion LED provides full LED sign services throughout Fayetteville, Cumberland County, and the Fort Liberty (formerly Fort Bragg) area. We regularly work with businesses along Skibo Road, Bragg Boulevard, Yadkin Road, and the Cross Creek Mall commercial district. Our Charlotte facility is about 2 hours from Fayetteville, and our installation teams travel to the area regularly for consultations and installations.' },
      { question: 'What LED sign regulations does Fayetteville have?', answer: 'The City of Fayetteville and Cumberland County regulate commercial signage through local ordinances that govern sign size, height, placement, illumination, and electronic message content. Military-adjacent areas may have additional requirements. ProVizion LED handles all permitting for Fayetteville-area projects, including permit applications, site plans, engineering specifications, and inspection coordination.' },
      { question: 'How much do LED signs cost in Fayetteville?', answer: 'LED sign pricing in Fayetteville varies by type and size: channel letter sets cost $2,000–$12,000, full-color outdoor LED displays $8,000–$70,000+, LED monument signs $5,000–$20,000, and digital menu boards $1,500–$12,000. ProVizion LED provides free, no-obligation quotes — we\'ll visit your Fayetteville location, evaluate your needs, review local sign codes, and deliver a comprehensive proposal with detailed pricing.' },
      { question: 'What industries in Fayetteville need LED signs?', answer: 'Fayetteville\'s economy centers around the military community, retail, healthcare, and services. Common LED sign customers include auto dealerships along Bragg Boulevard, restaurants and retailers in the Cross Creek Mall area, churches serving military families, medical offices and urgent care facilities, government buildings, hotels and hospitality businesses, and defense contractors. LED signage is especially valuable for businesses competing for visibility along Fayetteville\'s busy commercial corridors.' },
      { question: 'Can LED signs withstand Fayetteville weather?', answer: 'Absolutely. ProVizion LED builds all signs to withstand North Carolina\'s weather conditions including heat, humidity, heavy rain, and storms. Our outdoor LED signs use NEMA-rated weather-resistant enclosures, UV-stable materials, and industrial-grade LED components rated for operating temperatures from -40°F to 140°F. Every sign is tested for 48+ hours in our facility before shipping to ensure reliable, long-lasting performance in Fayetteville\'s climate.' },
    ],
  },
  {
    city: 'Wilmington', state: 'NC', slug: 'wilmington-nc', priority: '★★☆',
    estimatedVolume: '50–120', order: 7,
    distanceFromCharlotte: 'about 3.5 hours',
    localContext: 'Wilmington is a coastal gem known for its historic riverfront, beaches, and booming tourism industry. The port city\'s growing population and commercial development along College Road, Market Street, and the Mayfaire Town Center area create strong demand for LED signage. Coastal businesses face unique challenges — salt air, humidity, and storm exposure — making it essential to work with an LED sign company that understands marine-grade construction and weather-resistant installations.',
    industries: [
      { name: 'Tourism & Hospitality', description: 'Waterfront hotels, restaurants, and attractions need eye-catching LED signage to attract tourists.', iconName: 'hospitality' },
      { name: 'Retail', description: 'Mayfaire Town Center and downtown Wilmington shops benefit from LED storefront signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Can you install outdoor LED signs near the ocean in Wilmington?', answer: 'Yes. ProVizion LED specializes in coastal LED sign installations designed to withstand Wilmington\'s salt air, high humidity, and hurricane-force weather. We use marine-grade aluminum housings, NEMA 4X-rated enclosures, stainless steel hardware, and UV-resistant finishes on all coastal installations. Our LED components are rated for extreme environments with operating temperatures from -40°F to 140°F. We\'ve completed numerous installations along the Wilmington waterfront, Wrightsville Beach corridor, and Carolina Beach areas.' },
      { question: 'What LED sign services does ProVizion LED offer in Wilmington?', answer: 'We offer Wilmington businesses the full spectrum of LED signage: custom LED channel letters, full-color outdoor LED displays, programmable message centers, LED monument signs, digital menu boards, indoor LED video walls, and specialty LED signage. Each sign is custom-designed, manufactured at our Charlotte facility using premium components, and professionally installed by our crews who are experienced with Wilmington\'s coastal environment and local building codes.' },
      { question: 'How far is ProVizion LED from Wilmington?', answer: 'Our Charlotte manufacturing facility is approximately 3.5 hours from Wilmington. We serve the entire Cape Fear region including Wilmington, Wrightsville Beach, Carolina Beach, Leland, Hampstead, and surrounding communities. Our installation teams travel to Wilmington regularly for consultations and installations. We offer free on-site evaluations for all Wilmington-area projects.' },
      { question: 'What businesses in Wilmington benefit from LED signs?', answer: 'Wilmington\'s tourism-driven economy creates strong LED sign demand across many industries: waterfront hotels and resorts, beach-area restaurants and bars, Mayfaire Town Center retailers, downtown Wilmington shops and galleries, Marina District businesses, churches, medical offices along Medical Center Drive, and the growing residential commercial developments in Leland and Hampstead. LED signage helps Wilmington businesses attract both tourists and the growing local population.' },
      { question: 'Does Wilmington have special sign regulations?', answer: 'Yes. The City of Wilmington and New Hanover County have specific sign ordinances governing size, height, illumination, and placement. The historic downtown district has additional restrictions through the Historic District Commission. Coastal areas may have wind-load engineering requirements. ProVizion LED handles all Wilmington-area permitting as part of our standard service.' },
    ],
  },
  {
    city: 'Asheville', state: 'NC', slug: 'asheville-nc', priority: '★★☆',
    estimatedVolume: '40–110', order: 8,
    distanceFromCharlotte: 'about 2 hours',
    localContext: 'Asheville is a nationally recognized destination for arts, craft beer, food, and outdoor adventure — attracting millions of visitors annually. The city\'s vibrant downtown, Biltmore Village, the River Arts District, and South Slope brewery corridor all feature businesses that depend on creative, eye-catching signage to attract both tourists and locals. Asheville\'s unique character and historic district regulations require a sign company experienced with local codes and aesthetically sensitive design.',
    industries: [
      { name: 'Tourism & Craft', description: 'Asheville\'s brewery scene, arts community, and tourist attractions use LED signs to stand out on bustling streets.', iconName: 'hospitality' },
      { name: 'Healthcare', description: 'Mission Hospital and WNC Health Network facilities need wayfinding and informational LED displays.', iconName: 'healthcare' },
    ],
    faqs: [
      { question: 'Are there special LED sign regulations in Asheville?', answer: 'Yes. Asheville has distinctive sign regulations, especially in the downtown historic district where the Asheville Design Review Committee oversees signage aesthetics, size, and illumination. The city\'s Land Development Code governs all commercial signage with specific rules for different zoning districts. LED signs may require design review approval to ensure they complement Asheville\'s architectural character. ProVizion LED is experienced with Asheville\'s unique sign codes and design review process — we\'ll guide you through every step.' },
      { question: 'What types of LED signs work for Asheville businesses?', answer: 'Asheville\'s unique character calls for LED signs that balance modern technology with artistic design. Popular options include: tastefully designed LED channel letters for downtown storefronts, warm-toned illuminated signs for breweries and restaurants, LED message centers for churches and community organizations, LED monument signs for hotels and resorts, digital menu boards for the city\'s renowned food scene, and custom LED displays for arts venues and galleries. ProVizion LED creates signs that respect Asheville\'s aesthetic while delivering modern LED performance.' },
      { question: 'How far is ProVizion LED from Asheville?', answer: 'Our Charlotte manufacturing facility is about 2 hours from Asheville via I-40. We serve the entire Western North Carolina region including Asheville, Black Mountain, Weaverville, Hendersonville, and surrounding mountain communities. Our installation teams travel to Asheville regularly for free consultations and professional installations.' },
      { question: 'How much do LED signs cost for Asheville businesses?', answer: 'LED sign costs in Asheville are similar to other mid-sized NC cities, ranging from $2,000 for basic channel letters to $80,000+ for large LED displays. Asheville\'s design review process may add 1–2 weeks to project timelines but doesn\'t significantly impact cost. ProVizion LED provides free, detailed quotes — contact us for a no-obligation proposal for your Asheville business.' },
      { question: 'What industries in Asheville use LED signs?', answer: 'Asheville\'s economy drives LED sign demand from diverse industries: the city\'s 30+ craft breweries use iconic LED signage, downtown restaurants and galleries along Lexington Avenue and Biltmore Avenue use illuminated storefronts, Biltmore Village shops use elegant channel letters, River Arts District studios use creative LED displays, hotels and B&Bs use LED signs for wayfinding and identification, Mission Hospital uses LED wayfinding, and growing retail areas along Tunnel Road and Hendersonville Road use standard commercial LED signage.' },
    ],
  },
  {
    city: 'Cary', state: 'NC', slug: 'cary-nc', priority: '★☆☆',
    estimatedVolume: '30–90', order: 9,
    distanceFromCharlotte: 'about 2.5 hours',
    localContext: 'Cary is one of the fastest-growing cities in the Triangle region, known for its high quality of life, excellent schools, and thriving technology sector. Major employers like SAS Institute and Epic Games anchor a well-educated, affluent community. Shopping destinations like Waverly Place, Park West Village, and Crossroads Plaza, along with the growing Harrison Avenue corridor, offer significant opportunities for businesses to leverage professional LED signage to attract the city\'s discerning consumers.',
    industries: [
      { name: 'Technology', description: 'SAS Institute, Epic Games, and the tech corridor along Highway 54 need modern LED signage solutions.', iconName: 'display' },
      { name: 'Retail & Dining', description: 'Waverly Place, Crossroads Plaza, and Park West Village benefit from quality LED signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Does ProVizion LED install signs in Cary, NC?', answer: 'Yes. Cary is a key part of our Triangle service area. We provide full LED sign services for Cary businesses including custom design, in-house manufacturing, permitting through the Town of Cary, and professional installation. Our installation teams serve Cary, Morrisville, Apex, and the entire western Wake County area regularly.' },
      { question: 'What LED sign regulations does Cary have?', answer: 'The Town of Cary has a well-defined Land Development Ordinance (LDO) that regulates commercial signage including size, height, illumination, and placement. Cary is known for its strict aesthetic standards — sign designs must meet specific appearance guidelines. Electronic message centers may face additional requirements regarding brightness, animation, and message change frequency. ProVizion LED navigates all Town of Cary sign permitting as part of our standard service.' },
      { question: 'What types of businesses in Cary need LED signs?', answer: 'Cary\'s affluent, well-educated community supports diverse LED sign demand: technology companies like SAS Institute and Epic Games use modern LED lobby displays, Waverly Place and Park West Village retailers use elegant LED storefronts, Crossroads Plaza businesses use outdoor LED signage for visibility, restaurants along Chatham Street and Kildaire Farm Road use digital menu boards, churches use LED message centers, and medical offices throughout western Wake County use professional LED identification and wayfinding signage.' },
      { question: 'How much do LED signs cost in Cary?', answer: 'LED sign pricing in Cary is comparable to the greater Triangle market: channel letter sets $2,000–$15,000, outdoor LED displays $8,000–$80,000+, monument signs $5,000–$25,000, and digital menu boards $1,500–$15,000. ProVizion LED provides free, detailed quotes for every Cary project with no obligation.' },
      { question: 'How long does LED sign installation take in Cary?', answer: 'Most LED sign projects for Cary businesses take 4–8 weeks from design approval to installation. The Town of Cary\'s thorough review process may add slightly to permitting timelines, but ProVizion LED\'s experience with Cary\'s requirements helps streamline the process. We handle all permit applications, engineering documents, and inspection coordination.' },
    ],
  },
  {
    city: 'Concord', state: 'NC', slug: 'concord-nc', priority: '★☆☆',
    estimatedVolume: '30–80', order: 10,
    distanceFromCharlotte: 'just 20 minutes from our facility',
    localContext: 'Concord is a high-energy city anchored by Charlotte Motor Speedway, Concord Mills Mall (one of the largest outlet malls in the Southeast), and the Great Wolf Lodge resort. The city\'s mix of motorsports entertainment, destination retail, and rapidly growing residential neighborhoods creates diverse demand for LED signage — from massive outdoor race-day displays to welcoming storefront channel letters along Church Street and the expanding Derita Road commercial corridor.',
    industries: [
      { name: 'Motorsports & Entertainment', description: 'Charlotte Motor Speedway, Concord Mills, and Great Wolf Lodge need large-scale LED displays.', iconName: 'display' },
      { name: 'Retail', description: 'Concord Mills Mall area and Derita Road commercial corridor benefit from LED storefront signs.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Is Concord close to ProVizion LED?', answer: 'Concord is just 20 minutes from our Charlotte manufacturing facility, making it one of our closest and most convenient service areas. We can offer faster site visits, quicker consultations, and efficient installation scheduling for Concord and Cabarrus County businesses. Our proximity means lower travel costs and more responsive service for Concord customers.' },
      { question: 'What LED sign options work for Concord businesses?', answer: 'Concord businesses benefit from a wide range of LED signage: Concord Mills Mall retailers and restaurants use dynamic LED storefronts and digital menu boards, Charlotte Motor Speedway area businesses use large outdoor LED displays, churches along Church Street and throughout Cabarrus County use programmable LED message centers, auto dealerships along Concord Parkway use high-impact LED signage, and the growing Derita Road and Poplar Tent Road commercial corridors feature businesses using LED channel letters and monument signs.' },
      { question: 'How much do LED signs cost in Concord?', answer: 'LED sign pricing for Concord businesses ranges from $2,000 for basic channel letter sets to $80,000+ for large full-color LED displays. Our proximity to Concord helps keep installation costs lower than more distant service areas. ProVizion LED provides free, detailed quotes — we\'ll visit your Concord location and deliver a comprehensive proposal with no obligation.' },
      { question: 'Does Concord require sign permits?', answer: 'Yes. The City of Concord and Cabarrus County regulate commercial signage through local ordinances governing size, height, illumination, and placement. Sign requirements may vary depending on your specific zoning district. ProVizion LED handles all Concord-area permitting as part of our standard service, including permit applications, site plans, and inspection coordination.' },
      { question: 'What industries in Concord use LED signs?', answer: 'Concord\'s diverse economy drives demand from multiple sectors: motorsports and entertainment venues around Charlotte Motor Speedway, outlet and destination retailers at Concord Mills Mall, restaurants and hospitality businesses along Concord Parkway, churches and places of worship throughout Cabarrus County, automotive dealerships, medical offices and urgent care facilities, and the many small businesses in Concord\'s growing commercial districts. LED signs help Concord businesses compete for attention in this high-traffic market.' },
    ],
  },
];

const SC_TIER1 = [
  {
    city: 'Charleston', state: 'SC', slug: 'charleston-sc', priority: '★★★',
    estimatedVolume: '120–260', order: 1,
    distanceFromCharlotte: 'about 3.5 hours',
    localContext: 'Charleston is one of America\'s most celebrated cities — a tourism powerhouse known for its historic architecture, world-class dining, and Southern charm. The Holy City attracts over 7 million visitors annually and its economy spans hospitality, healthcare (led by MUSC), technology, and a booming port industry. Businesses on King Street, in Mount Pleasant, along Rivers Avenue, and in the rapidly growing Summerville corridor all need signage that complements Charleston\'s character while delivering the modern visibility that LED technology provides.',
    industries: [
      { name: 'Tourism & Hospitality', description: 'Charleston\'s world-famous hospitality industry needs elegant LED signage for hotels, restaurants, and attractions.', iconName: 'hospitality' },
      { name: 'Healthcare', description: 'MUSC and Roper St. Francis hospitals need comprehensive LED wayfinding and informational displays.', iconName: 'healthcare' },
      { name: 'Retail', description: 'King Street shopping, Mount Pleasant Towne Centre, and waterfront shops benefit from LED signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Does ProVizion LED serve Charleston, SC?', answer: 'Yes. While our manufacturing facility is headquartered in Charlotte, NC, we have experienced installation teams that regularly serve the greater Charleston area including Mount Pleasant, North Charleston, Summerville, West Ashley, James Island, Daniel Island, and the entire Lowcountry region. We offer free on-site consultations in Charleston and handle every aspect of your project from design through installation and ongoing support.' },
      { question: 'Are there LED sign restrictions in historic Charleston?', answer: 'Yes. Charleston\'s Board of Architectural Review (BAR) enforces strict guidelines for signage in the historic district, including restrictions on sign size, illumination type, materials, and design aesthetics. LED signs in the historic area may require special approval and design modifications to complement Charleston\'s architectural heritage. Outside the historic district, standard City of Charleston sign ordinances apply. ProVizion LED is experienced with Charleston\'s unique regulatory landscape and will navigate the approval process for you.' },
      { question: 'How much do LED signs cost in Charleston?', answer: 'LED sign pricing for Charleston businesses varies by type: channel letter sets range from $2,000 to $15,000, outdoor LED displays from $8,000 to $100,000+, LED monument signs from $5,000 to $25,000, and digital menu boards from $1,500 to $15,000. Coastal installations may include a slight premium for marine-grade components and weather-resistant construction. ProVizion LED provides free, detailed quotes for every Charleston project.' },
      { question: 'Can LED signs withstand Charleston\'s coastal weather?', answer: 'Absolutely. ProVizion LED builds all Charleston-area signs with marine-grade materials including salt-air-resistant aluminum housings, NEMA 4X weather-sealed enclosures, stainless steel mounting hardware, and UV-resistant finishes. Our LED components are rated for extreme humidity and temperature swings. We engineer every coastal installation for wind loads appropriate to the Charleston area, ensuring your sign performs reliably through summer storms and occasional hurricane conditions.' },
      { question: 'What types of businesses in Charleston use LED signs?', answer: 'Charleston\'s diverse economy drives LED sign demand from hospitality businesses on King Street and in Mount Pleasant, waterfront restaurants and hotels, medical facilities at MUSC and throughout the metro area, retail shops at Mount Pleasant Towne Centre and Tanger Outlets, churches across the Lowcountry, auto dealerships along Rivers Avenue, and the many businesses in rapidly growing North Charleston and Summerville commercial corridors.' },
    ],
  },
  {
    city: 'Greenville', state: 'SC', slug: 'greenville-sc', priority: '★★★',
    estimatedVolume: '110–240', order: 2,
    distanceFromCharlotte: 'approximately 1.5 hours',
    localContext: 'Greenville has transformed into one of the South\'s most dynamic small cities, with a nationally acclaimed downtown, Falls Park on the Reedy, and a robust manufacturing sector led by BMW and Michelin. The city\'s Main Street revival, the Haywood Mall commercial district, and rapidly expanding Woodruff Road corridor create tremendous demand for modern LED signage. Greenville\'s blend of Southern culture, international industry, and a young professional population makes it an ideal market for energy-efficient, programmable LED signs.',
    industries: [
      { name: 'Manufacturing', description: 'BMW, Michelin, and the Upstate\'s manufacturing corridor need industrial LED signage and digital displays.', iconName: 'cog' },
      { name: 'Downtown Revival', description: 'Main Street Greenville\'s revitalized downtown features shops and restaurants needing quality LED signs.', iconName: 'retail' },
      { name: 'Healthcare', description: 'Prisma Health and Bon Secours facilities across the Upstate need LED wayfinding and signage.', iconName: 'healthcare' },
    ],
    faqs: [
      { question: 'How far is ProVizion LED from Greenville, SC?', answer: 'Greenville is approximately 1.5 hours from our Charlotte manufacturing facility, making it one of our most accessible and frequently served South Carolina markets. We have installation teams in the Greenville area regularly and offer free on-site consultations at your business location. Our proximity means responsive service, efficient project timelines, and competitive pricing for Greenville businesses.' },
      { question: 'What types of LED signs are popular in Greenville?', answer: 'Greenville businesses use a wide variety of LED signage: downtown Main Street shops use custom LED channel letters and illuminated signs, Woodruff Road retailers use large outdoor LED displays, Haywood Mall businesses use interior LED signage, manufacturing companies along I-85 use industrial LED identification signs, churches use programmable LED message centers, restaurants throughout the city use digital menu boards, BMW suppliers and other industrial companies use LED wayfinding and information displays, and the city\'s growing medical sector uses LED signage for campus wayfinding.' },
      { question: 'Does Greenville have LED sign regulations?', answer: 'Yes. The City of Greenville regulates commercial signage through its Land Management Ordinance, which governs sign size, height, illumination, placement, and design. Downtown Greenville has additional design review requirements. The city\'s sign regulations are designed to maintain aesthetic quality while allowing effective business signage. ProVizion LED handles all Greenville permitting as part of our standard service, ensuring your sign is code-compliant.' },
      { question: 'How much do LED signs cost in Greenville?', answer: 'LED sign costs for Greenville businesses range from $2,000 for channel letter sets to $100,000+ for large outdoor LED displays. Monument signs typically run $5,000–$25,000, digital menu boards $1,500–$15,000, and LED video walls $10,000–$80,000+. ProVizion LED\'s in-house manufacturing keeps prices competitive. Contact us for a free, detailed quote for your Greenville project.' },
      { question: 'What industries in Greenville need LED signage?', answer: 'Greenville\'s booming economy drives LED sign demand from automotive manufacturing (BMW, Michelin, and their suppliers), downtown hospitality and dining, Woodruff Road retail, medical facilities (Prisma Health, Bon Secours), churches and worship centers, auto dealerships, corporate offices, schools and universities, and the many small businesses thriving in Greenville\'s revitalized commercial districts.' },
    ],
  },
  {
    city: 'Columbia', state: 'SC', slug: 'columbia-sc', priority: '★★★',
    estimatedVolume: '80–180', order: 3,
    distanceFromCharlotte: 'about 1.5 hours',
    localContext: 'Columbia is South Carolina\'s capital and largest city, home to the University of South Carolina, Fort Jackson, and the state\'s government complex. The city\'s commercial landscape spans the bustling Vista district, Two Notch Road corridor, Harbison Boulevard retail area, and the growing Northeast Columbia suburbs. With a diverse economy anchored by government, military, education, and healthcare, Columbia businesses need professional LED signage that projects credibility, attracts customers, and communicates effectively.',
    industries: [
      { name: 'Government', description: 'As South Carolina\'s capital, Columbia has state buildings, courthouses, and municipal offices needing professional LED signage.', iconName: 'government' },
      { name: 'Higher Education', description: 'University of South Carolina campus and surrounding businesses benefit from LED displays and wayfinding.', iconName: 'education' },
      { name: 'Military', description: 'Fort Jackson and military-affiliated businesses need durable LED signage solutions.', iconName: 'shield' },
    ],
    faqs: [
      { question: 'What LED sign options are available in Columbia, SC?', answer: 'ProVizion LED serves Columbia with the full spectrum of LED signage solutions: custom LED channel letters in front-lit, back-lit, and halo-lit configurations; full-color outdoor LED display screens in various pixel pitches; programmable LED message centers; LED monument signs with integrated lighting or display panels; digital menu boards for restaurants and quick-service dining; indoor LED video walls for lobbies, conference rooms, and worship spaces; and custom LED specialty signage. All signs are designed to your specifications and manufactured at our Charlotte facility.' },
      { question: 'How far is ProVizion LED from Columbia?', answer: 'Our Charlotte manufacturing facility is approximately 1.5 hours from Columbia, SC. We serve the entire Midlands region regularly, including Columbia, Lexington, Irmo, Chapin, Blythewood, Forest Acres, West Columbia, and surrounding communities. We offer free on-site consultations in Columbia and our installation teams are in the area frequently.' },
      { question: 'What sign permits are required in Columbia, SC?', answer: 'The City of Columbia and Richland County regulate commercial signage through local ordinances governing sign size, height, illumination, and placement. The Vista district and other special districts may have additional design requirements. State government buildings have their own procurement processes. ProVizion LED handles all Columbia-area permitting as part of our standard service, including applications, engineering documents, and inspection coordination.' },
      { question: 'How much do LED signs cost in Columbia?', answer: 'LED sign pricing for Columbia businesses is competitive: channel letter sets $2,000–$15,000, outdoor LED displays $8,000–$80,000+, LED monument signs $5,000–$25,000, digital menu boards $1,500–$12,000, and LED video walls $10,000–$80,000+. ProVizion LED\'s direct manufacturing model keeps prices 15–30% below typical national franchise companies. Contact us for a free, detailed quote.' },
      { question: 'What industries in Columbia use LED signs?', answer: 'Columbia\'s economy drives LED sign demand from diverse sectors: state government buildings and agencies, University of South Carolina campus facilities, Fort Jackson and military-affiliated businesses, healthcare facilities including Prisma Health and Lexington Medical Center, Harbison Boulevard and Two Notch Road retailers, Vista district restaurants and entertainment venues, churches, auto dealerships along Broad River Road, and the growing Northeast Columbia and Blythewood commercial corridors.' },
    ],
  },
  {
    city: 'Spartanburg', state: 'SC', slug: 'spartanburg-sc', priority: '★★☆',
    estimatedVolume: '40–110', order: 4,
    distanceFromCharlotte: 'about 1.5 hours',
    localContext: 'Spartanburg is the heart of the Upstate\'s manufacturing corridor, home to the BMW Manufacturing Campus, Milliken & Company, and dozens of international manufacturers. The city also boasts a revitalized downtown anchored by the Chapman Cultural Center, Wofford College, and Converse University. Spartanburg\'s mix of industrial, educational, and retail businesses along the I-85 corridor and the expanding Westgate Mall area creates consistent demand for durable, high-visibility LED signage.',
    industries: [
      { name: 'Manufacturing', description: 'BMW Campus, Milliken & Company — the Spartanburg manufacturing sector needs industrial LED signage.', iconName: 'cog' },
      { name: 'Education', description: 'Wofford College, Converse University, and Spartanburg Community College need campus LED displays.', iconName: 'education' },
    ],
    faqs: [
      { question: 'Does ProVizion LED cover Spartanburg?', answer: 'Yes. Spartanburg is a key part of our SC Upstate service area, approximately 1.5 hours from our Charlotte manufacturing facility. We regularly serve businesses throughout Spartanburg County including downtown Spartanburg, the I-85 manufacturing corridor, Westgate Mall area, and surrounding communities like Boiling Springs, Duncan, and Inman. We offer free on-site consultations and handle all local permitting.' },
      { question: 'What types of LED signs work for Spartanburg businesses?', answer: 'Spartanburg businesses benefit from diverse LED sign types: manufacturing and industrial companies along I-85 use large outdoor LED identification signs and indoor safety/information displays, downtown businesses use custom LED channel letters and illuminated signage, Westgate Mall area retailers use LED storefronts, churches use programmable LED message centers, auto dealerships use high-impact LED displays, colleges and universities use LED wayfinding and event signage, and restaurants throughout the area use digital menu boards.' },
      { question: 'How much do LED signs cost in Spartanburg?', answer: 'LED sign pricing for Spartanburg businesses is competitive: channel letter sets $2,000–$12,000, outdoor LED displays $8,000–$70,000+, LED monument signs $5,000–$20,000, digital menu boards $1,500–$12,000. ProVizion LED\'s in-house Charlotte manufacturing keeps costs lower than national franchise alternatives. We provide free, detailed quotes — contact us for a no-obligation proposal.' },
      { question: 'What industries in Spartanburg need LED signs?', answer: 'Spartanburg\'s robust economy drives LED sign demand from automotive manufacturing (BMW and suppliers), textile and industrial companies, downtown retail and dining, higher education institutions (Wofford College, Converse University, Spartanburg Community College), churches and worship centers, medical offices and healthcare facilities, auto dealerships, and the many businesses along the I-85 and Highway 29 commercial corridors.' },
      { question: 'Does Spartanburg require sign permits?', answer: 'Yes. The City of Spartanburg and Spartanburg County regulate commercial signage through local ordinances. Requirements vary by zoning district and govern sign size, height, illumination, and setback. ProVizion LED handles all Spartanburg-area permitting as a standard part of every project, ensuring your LED sign is fully code-compliant.' },
    ],
  },
  {
    city: 'Myrtle Beach', state: 'SC', slug: 'myrtle-beach-sc', priority: '★★☆',
    estimatedVolume: '40–100', order: 5,
    distanceFromCharlotte: 'about 3.5 hours',
    localContext: 'Myrtle Beach and the Grand Strand welcome over 20 million visitors annually, making it one of the most tourism-dependent markets on the East Coast. Hotels, restaurants, amusement parks, miniature golf courses, shopping attractions like Broadway at the Beach, and the Coastal Grand Mall all compete fiercely for tourist attention. LED signage is essential for Grand Strand businesses — bright, colorful, and programmable displays cut through the visual noise and attract both vacationers and the growing year-round residential population.',
    industries: [
      { name: 'Tourism & Entertainment', description: 'The Grand Strand\'s hotels, restaurants, amusement parks, and attractions need bright, weather-resistant LED signs.', iconName: 'hospitality' },
      { name: 'Retail', description: 'Broadway at the Beach, Coastal Grand Mall, and restaurant row benefit from high-impact LED signage.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Can LED signs withstand Myrtle Beach weather?', answer: 'Absolutely. ProVizion LED uses marine-grade materials and construction techniques specifically designed for the Grand Strand\'s challenging coastal environment. All outdoor signs feature NEMA 4X weather-sealed enclosures, salt-air-resistant aluminum housings, stainless steel mounting hardware, UV-resistant finishes, and industrial-grade LED components rated for extreme humidity and temperature. We engineer every Myrtle Beach installation for coastal wind loads, ensuring your sign performs reliably through summer storms, nor\'easters, and occasional hurricane conditions.' },
      { question: 'What types of LED signs are popular in Myrtle Beach?', answer: 'Myrtle Beach\'s tourism-driven economy demands attention-grabbing LED signage: hotels and resorts use large outdoor LED displays and illuminated channel letters, restaurants along Ocean Boulevard and Restaurant Row use digital menu boards and bright LED storefronts, amusement parks and attractions use dynamic full-color LED screens, Broadway at the Beach tenants use eye-catching LED signage, Coastal Grand Mall retailers use LED storefronts, mini-golf courses use colorful LED displays, and growing residential communities use LED monument signs. Bright, programmable LED signs are essential for standing out in Myrtle Beach\'s competitive visual landscape.' },
      { question: 'How far is ProVizion LED from Myrtle Beach?', answer: 'Our Charlotte manufacturing facility is approximately 3.5 hours from Myrtle Beach. We serve the entire Grand Strand region including Myrtle Beach, North Myrtle Beach, Conway, Surfside Beach, Garden City, and surrounding Horry County communities. Our installation teams travel to the Grand Strand regularly for free consultations and professional installations.' },
      { question: 'How much do LED signs cost in Myrtle Beach?', answer: 'LED sign pricing for Myrtle Beach businesses ranges from $2,000 for basic channel letters to $100,000+ for large resort LED displays. Coastal installations include marine-grade materials for weather resistance. Digital menu boards $1,500–$15,000, LED monument signs $5,000–$25,000, full-color outdoor displays $8,000–$80,000+. ProVizion LED provides free, detailed quotes — contact us for a no-obligation proposal for your Grand Strand business.' },
      { question: 'What industries in Myrtle Beach need LED signs?', answer: 'The Grand Strand\'s economy is dominated by tourism and hospitality, making LED signage essential for hotels, resorts, restaurants, amusement parks, miniature golf courses, water parks, shopping attractions, souvenir shops, and entertainment venues. Additional demand comes from Coastal Grand Mall retailers, medical offices, churches, automotive businesses, real estate agencies, and the growing year-round commercial sector serving the Grand Strand\'s expanding permanent population.' },
    ],
  },
  {
    city: 'Rock Hill', state: 'SC', slug: 'rock-hill-sc', priority: '★☆☆',
    estimatedVolume: '30–70', order: 6,
    distanceFromCharlotte: 'just 30 minutes from our facility',
    localContext: 'Rock Hill is one of the fastest-growing cities in the Charlotte metro area, benefiting from the massive Knowledge Park development, new Riverwalk mixed-use district, and a steady influx of families and businesses from across the state line. Cherry Road, Dave Lyle Boulevard, and the expanding Galleria area are commercial hotspots where businesses invest in LED signage to capture the attention of Rock Hill\'s growing population and Charlotte commuters passing through daily.',
    industries: [
      { name: 'Growing Suburbs', description: 'Rock Hill\'s rapid growth brings new businesses needing LED storefront signs and commercial signage.', iconName: 'office' },
      { name: 'Education', description: 'Winthrop University and Rock Hill School District use LED message boards for campus communication.', iconName: 'education' },
    ],
    faqs: [
      { question: 'How close is ProVizion LED to Rock Hill?', answer: 'Rock Hill is just 30 minutes from our Charlotte manufacturing facility — one of our closest and most frequently served South Carolina markets. This proximity allows us to offer faster consultations, more flexible scheduling, lower travel costs, and quicker response times for Rock Hill businesses. We can often schedule same-week site visits for Rock Hill-area projects.' },
      { question: 'What types of LED signs work for Rock Hill businesses?', answer: 'Rock Hill\'s rapidly growing commercial landscape supports diverse LED signage: Dave Lyle Boulevard retailers use LED storefronts and outdoor displays, Cherry Road businesses use channel letters and monument signs, downtown Rock Hill shops use custom illuminated signage, Knowledge Park businesses use modern LED displays, churches use programmable LED message centers, restaurants use digital menu boards, and the expanding Galleria and Riverwalk areas feature businesses using contemporary LED signage for brand visibility.' },
      { question: 'How much do LED signs cost in Rock Hill?', answer: 'LED sign pricing for Rock Hill businesses starts at $2,000 for channel letter sets and ranges up to $80,000+ for large outdoor LED displays. Our proximity to Rock Hill helps keep installation costs competitive. Monument signs typically cost $5,000–$20,000, digital menu boards $1,500–$12,000. ProVizion LED provides free, detailed quotes — we\'ll visit your Rock Hill location with no obligation.' },
      { question: 'Does Rock Hill require sign permits?', answer: 'Yes. The City of Rock Hill regulates commercial signage through its Zoning Ordinance and sign regulations. Requirements cover sign type, size, height, illumination, and setback based on zoning district. LED electronic message centers may have additional restrictions. ProVizion LED handles all Rock Hill permitting as part of our standard service.' },
      { question: 'What industries in Rock Hill use LED signs?', answer: 'Rock Hill\'s growing economy drives LED sign demand from retail businesses along Dave Lyle and Cherry Road, restaurants and fast-food chains, churches and worship centers, Winthrop University and school district facilities, medical offices and urgent care centers, automotive businesses, the expanding Knowledge Park and Riverwalk districts, real estate agencies, and Charlotte commuter-focused businesses. The city\'s population growth continues to fuel new commercial development and LED signage demand.' },
    ],
  },
  {
    city: 'Mount Pleasant', state: 'SC', slug: 'mount-pleasant-sc', priority: '★☆☆',
    estimatedVolume: '20–60', order: 7,
    distanceFromCharlotte: 'about 3.5 hours',
    localContext: 'Mount Pleasant is an affluent, rapidly growing community just across the Ravenel Bridge from downtown Charleston. With a population that has more than doubled in two decades, the city\'s commercial development along Highway 17, Coleman Boulevard, and the Towne Centre area continues to accelerate. Mount Pleasant\'s discerning consumers and competitive retail landscape make professional LED signage a smart investment for businesses seeking to project quality and attract attention in this high-income market.',
    industries: [
      { name: 'Retail & Dining', description: 'Mount Pleasant Towne Centre and Coleman Blvd restaurants benefit from quality LED storefronts.', iconName: 'retail' },
      { name: 'Healthcare', description: 'East Cooper Medical Center and medical offices along Highway 17 need professional LED signage.', iconName: 'healthcare' },
    ],
    faqs: [
      { question: 'Does ProVizion LED install signs in Mount Pleasant?', answer: 'Yes. Mount Pleasant is a key part of our Charleston metro service area. We provide full LED sign services including custom design, in-house manufacturing, permitting through the Town of Mount Pleasant, and professional installation using salt-air-resistant materials and marine-grade construction suitable for the Lowcountry\'s coastal climate. Our installation teams serve the Mount Pleasant area regularly.' },
      { question: 'What LED signs work best for Mount Pleasant businesses?', answer: 'Mount Pleasant\'s affluent, design-conscious market favors professionally designed LED signage: Towne Centre retailers use elegant LED channel letters and storefronts, Coleman Boulevard restaurants use digital menu boards and illuminated signs, Highway 17 businesses use high-visibility LED displays and monument signs, medical offices along Johnnie Dodds Boulevard use professional LED identification signage, and churches use programmable LED message centers. Quality and aesthetics matter in Mount Pleasant — ProVizion LED delivers both.' },
      { question: 'How much do LED signs cost in Mount Pleasant?', answer: 'LED sign pricing for Mount Pleasant businesses ranges from $2,000 for channel letter sets to $80,000+ for large outdoor LED displays. Coastal-grade construction for the Lowcountry climate is included in all outdoor installations. Monument signs $5,000–$25,000, digital menu boards $1,500–$15,000. ProVizion LED provides free, detailed quotes for every Mount Pleasant project.' },
      { question: 'Does Mount Pleasant have sign regulations?', answer: 'Yes. The Town of Mount Pleasant has comprehensive sign regulations that govern size, height, illumination, materials, and design. The town emphasizes aesthetic quality and sign regulations are strictly enforced. LED electronic message centers may face specific restrictions. ProVizion LED is experienced with Mount Pleasant\'s requirements and handles all permitting.' },
      { question: 'What industries in Mount Pleasant need LED signs?', answer: 'Mount Pleasant\'s thriving economy drives LED sign demand from Towne Centre and Belle Hall Shopping Center retailers, Coleman Boulevard and Highway 17 restaurant corridors, East Cooper Medical Center and medical offices, churches and places of worship, professional services and real estate offices, the growing Wando-area commercial developments, and the many businesses along the rapidly expanding Highway 17 North corridor.' },
    ],
  },
  {
    city: 'Hilton Head', state: 'SC', slug: 'hilton-head-sc', priority: '★☆☆',
    estimatedVolume: '20–60', order: 8,
    distanceFromCharlotte: 'about 4 hours',
    localContext: 'Hilton Head Island is South Carolina\'s premier resort destination, attracting over 2.5 million visitors annually to its world-class golf courses, beaches, and gated plantation communities. The island\'s strict Design Review Board regulations require signage that complements the island\'s natural, upscale aesthetic. Businesses at Shelter Cove, Coligny Plaza, and along William Hilton Parkway need elegantly designed LED signs that meet Hilton Head\'s unique standards while still delivering modern visibility and energy efficiency.',
    industries: [
      { name: 'Resort & Golf', description: 'Hilton Head\'s resorts, golf courses, and plantation communities need elegant, code-compliant LED signage.', iconName: 'hospitality' },
      { name: 'Retail', description: 'Shelter Cove and Coligny Plaza shopping areas benefit from tasteful LED storefront signs.', iconName: 'retail' },
    ],
    faqs: [
      { question: 'Are there special sign rules on Hilton Head Island?', answer: 'Yes. Hilton Head Island has some of the strictest sign ordinances in South Carolina, enforced by the Town\'s Design Review Board. Regulations emphasize environmental sensitivity, natural aesthetics, and architectural harmony. Sign size, illumination levels, materials, and design must meet rigorous standards. LED signs must be tastefully integrated and may not feature certain animation or scrolling effects. ProVizion LED is experienced with Hilton Head\'s unique requirements and designs signs that meet the island\'s exacting standards while still delivering modern LED performance and visibility.' },
      { question: 'What types of LED signs work on Hilton Head Island?', answer: 'Hilton Head\'s upscale aesthetic calls for refined LED signage: resorts and golf courses use elegant LED monument signs with understated illumination, Shelter Cove and Coligny Plaza retailers use tastefully designed LED channel letters, restaurants use subtle digital menu boards, professional services use clean LED identification signage, and plantation community entrances use low-profile LED-lit monument signs. ProVizion LED specializes in creating LED signs that respect Hilton Head\'s character while providing effective business visibility.' },
      { question: 'How far is ProVizion LED from Hilton Head?', answer: 'Our Charlotte facility is approximately 4 hours from Hilton Head Island. We serve the entire Lowcountry region including Hilton Head, Bluffton, Beaufort, and surrounding communities. Our installation teams travel to the area for consultations and installations, and our experience with Hilton Head\'s regulations makes us a reliable choice for island businesses.' },
      { question: 'How much do LED signs cost on Hilton Head?', answer: 'LED sign pricing for Hilton Head businesses varies by type: channel letter sets $2,500–$15,000, LED monument signs $5,000–$30,000 (often with natural stone or wood surrounds to meet island aesthetics), outdoor LED displays $8,000–$60,000, and digital menu boards $1,500–$12,000. The island\'s design review process adds 2–4 weeks to project timelines but doesn\'t dramatically impact costs. ProVizion LED provides free, detailed quotes for Hilton Head projects.' },
      { question: 'Can LED signs be energy-efficient on Hilton Head?', answer: 'Absolutely — and this is one of the key advantages of LED technology for environmentally conscious Hilton Head businesses. LED signs consume up to 80% less electricity than traditional neon or fluorescent signage, produce less light pollution (important for Hilton Head\'s sea turtle protection ordinances), generate minimal heat, and contain no hazardous materials like mercury. LED\'s 100,000+ hour lifespan also means less waste from bulb replacements. ProVizion LED can design LED signs that meet Hilton Head\'s environmental requirements while still providing effective visibility.' },
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

/* ── Portable Text Helpers ── */

function block(key, text) {
  return {
    _type: 'block', _key: key, style: 'normal', markDefs: [],
    children: [{ _type: 'span', _key: `${key}-s`, text }],
  };
}

function h3block(key, text) {
  return {
    _type: 'block', _key: key, style: 'h3', markDefs: [],
    children: [{ _type: 'span', _key: `${key}-s`, text }],
  };
}

/* ── Build Sanity Documents ── */

function buildTier1Doc(loc) {
  const stateFullName = loc.state === 'NC' ? 'North Carolina' : 'South Carolina';
  const title = `LED Signs & Digital Signage in ${loc.city}, ${loc.state}`;
  const s = loc.slug;

  return {
    _type: 'locationPage',
    _id: `location-${s}`,
    title,
    slug: { _type: 'slug', current: s },
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
      serviceTags: ['LED Signs', 'Digital Signage', 'Channel Letters', 'Monument Signs', 'Video Walls', 'Electronic Displays'],
    },
    sections: [
      /* ── Section 1: City Intro (split) ~250 words ── */
      {
        _key: `${s}-intro`,
        sectionType: 'split',
        label: 'Overview',
        title: `LED Signs & Digital Signage in ${loc.city}`,
        body: [
          block(`${s}-i1`, `ProVizion LED is the premier LED sign company serving ${loc.city}, ${stateFullName}. We specialize in designing, manufacturing, and installing high-quality LED signs and digital signage solutions for businesses of every size — from small retail shops and restaurants to large corporations, hospitals, churches, and municipal buildings. Our Charlotte-based manufacturing facility gives us full control over every project, ensuring superior quality, faster turnaround times, and competitive pricing for ${loc.city} businesses.`),
          block(`${s}-i2`, `${loc.city} is a thriving market with growing demand for modern, energy-efficient signage. ${loc.localContext || `Businesses throughout ${loc.city} are upgrading from traditional signage to LED technology to increase visibility, reduce energy costs, and communicate more effectively with customers.`} Whether you operate along a busy commercial corridor, in a suburban shopping center, or in ${loc.city}'s downtown district, ProVizion LED has the experience and capabilities to design the perfect LED sign for your location.`),
          block(`${s}-i3`, `Every LED sign we produce is custom-designed to match your brand identity, built to withstand ${stateFullName}'s weather conditions, and installed by our professional crews who handle everything — including local permitting, electrical connections, and structural mounting. From the initial consultation to the final power-on, ProVizion LED manages every detail so you can focus on running your business.`),
        ],
        imagePosition: 'right',
        altBackground: false,
        buttonText: 'Get A Free Quote',
        buttonLink: '#contact',
      },
      /* ── Section 2: Sign Types (featureGrid) ~300 words ── */
      {
        _key: `${s}-services`,
        sectionType: 'featureGrid',
        label: 'Our LED Sign Solutions',
        title: `Types of LED Signs Available in ${loc.city}, ${loc.state}`,
        features: [
          { title: 'LED Channel Letters', description: `Illuminated individual letters that make your business name glow brilliantly day and night. Our front-lit, back-lit, and halo-lit channel letters are the most popular storefront signage choice for ${loc.city} businesses. Each letter is custom-fabricated from aluminum with energy-efficient LEDs that last 100,000+ hours.`, iconName: 'lightbulb' },
          { title: 'Full-Color LED Displays', description: `High-resolution LED video screens capable of displaying vivid images, video, animations, and text. Available in indoor and outdoor configurations with pixel pitches from 2mm to 16mm. Perfect for ${loc.city} retail stores, car dealerships, entertainment venues, and corporate lobbies seeking dynamic, attention-grabbing displays.`, iconName: 'display' },
          { title: 'LED Message Centers', description: `Programmable LED signs that allow you to update your message anytime from your phone, tablet, or computer. Ideal for ${loc.city} churches, schools, banks, and community organizations. Display service times, event announcements, promotions, weather alerts, and time-and-temperature information in full color.`, iconName: 'message' },
          { title: 'LED Monument Signs', description: `Ground-level monument signs with integrated LED lighting or LED display panels. These low-profile signs offer excellent street-level visibility and a professional appearance for office parks, medical centers, churches, and shopping plazas throughout ${loc.city}. Available in brick, stone, aluminum, and composite materials.`, iconName: 'location' },
          { title: 'Digital Menu Boards', description: `Indoor and outdoor LED menu displays designed specifically for restaurants, cafes, drive-throughs, and quick-service dining establishments in ${loc.city}. Easily update pricing, add seasonal items, and display appetizing food photography. Our digital menu boards boost average order values by up to 30%.`, iconName: 'grid' },
          { title: 'LED Video Walls', description: `Seamless, large-format LED display walls for high-impact visual experiences. Constructed from modular LED panels that can be configured to any size or shape. Popular with ${loc.city} houses of worship, corporate headquarters, conference centers, sports facilities, and entertainment venues seeking immersive visual environments.`, iconName: 'display' },
        ],
        altBackground: true,
      },
      /* ── Section 3: Why Us (text) ~250 words ── */
      {
        _key: `${s}-why`,
        sectionType: 'text',
        label: `Why ${loc.city} Businesses Choose ProVizion LED`,
        title: `The ProVizion LED Difference for ${loc.city} Businesses`,
        body: [
          block(`${s}-w1`, `Choosing the right LED sign company in ${loc.city} is a critical decision — your sign is often the first impression potential customers have of your business. ProVizion LED stands apart from national sign franchises and online sign retailers because we combine in-house manufacturing with local installation expertise. Every LED sign we deliver is designed specifically for your business, built in our own facility, and installed by our own teams — not subcontracted out.`),
          block(`${s}-w2`, `Our in-house manufacturing process means faster production times, better quality control, and more competitive pricing. Because we build everything at our Charlotte facility — just ${loc.distanceFromCharlotte || 'a short drive'} from ${loc.city} — we eliminate the middlemen, markups, and communication breakdowns that plague the sign industry. When you work with ProVizion LED, you work directly with the people who design, build, and install your sign.`),
          block(`${s}-w3`, `We also bring deep knowledge of ${loc.city}'s local sign ordinances and permitting requirements. Our team has completed dozens of LED sign installations across the ${loc.city} area, so we know exactly what's required for a smooth, code-compliant installation. From pulling permits to scheduling inspections, we handle the paperwork and logistics so your project stays on track and on budget.`),
        ],
        altBackground: false,
      },
      /* ── Section 4: Process (featureGrid) ~200 words ── */
      {
        _key: `${s}-process`,
        sectionType: 'featureGrid',
        label: 'Our Process',
        title: `How We Deliver LED Signs to ${loc.city} Businesses`,
        features: [
          { title: '1. Free Consultation & Site Survey', description: `We start with a free on-site consultation at your ${loc.city} location. Our team evaluates your building, measures the installation area, discusses your vision, and reviews local sign code requirements. You'll receive a detailed proposal with design concepts, pricing, and project timeline within days.`, iconName: 'message' },
          { title: '2. Custom Design & Engineering', description: `Our designers create photorealistic mockups showing exactly how your LED sign will look on your building. We handle all engineering specifications, structural calculations, and electrical requirements. You approve every detail before manufacturing begins.`, iconName: 'lightbulb' },
          { title: '3. In-House Manufacturing', description: `Your sign is built at our Charlotte manufacturing facility using premium LED components, aircraft-grade aluminum, and automotive-quality finishes. Every sign undergoes rigorous quality testing before shipping — we power it up and run it for 48 hours to ensure flawless operation.`, iconName: 'cog' },
          { title: '4. Professional Installation', description: `Our experienced installation crews arrive at your ${loc.city} location with all permits in hand. We handle mounting, electrical connections, programming, and final inspection. We walk you through sign operation, set up remote access, and ensure you're completely satisfied before we leave.`, iconName: 'shield' },
        ],
        altBackground: true,
      },
      /* ── Section 5: Applications (text) ~200 words ── */
      {
        _key: `${s}-apps`,
        sectionType: 'text',
        label: 'LED Sign Applications',
        title: `Popular LED Sign Applications in ${loc.city}`,
        body: [
          block(`${s}-a1`, `LED signage technology is transforming how ${loc.city} businesses communicate with customers. Restaurants and quick-service chains use digital menu boards to display appetizing food photography and update pricing instantly. Retail stores deploy LED window displays and outdoor signs to promote sales, new arrivals, and seasonal campaigns. Auto dealerships use large LED message centers to showcase inventory and special financing offers visible from the road.`),
          block(`${s}-a2`, `Churches, schools, and community organizations across ${loc.city} rely on LED message centers to share service times, event announcements, and community information with their neighborhoods. Medical facilities and hospitals use LED wayfinding signs to guide patients and visitors through complex campuses. Corporate offices install LED video walls in lobbies and conference rooms for brand presentations, client meetings, and employee communications.`),
          block(`${s}-a3`, `Gas stations display fuel prices on bright, easy-to-read LED price signs. Banks and credit unions use LED time-and-temperature signs combined with promotional messaging. Sports facilities and entertainment venues create immersive fan experiences with large indoor and outdoor LED displays. Whatever your industry in ${loc.city}, LED signage from ProVizion LED can improve your visibility, engage your audience, and drive measurable results for your business.`),
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
  const s = loc.slug;
  const cityList = loc.subCities.join(', ');
  const shortList = loc.subCities.slice(0, 5).join(', ');

  return {
    _type: 'locationPage',
    _id: `location-${s}`,
    title,
    slug: { _type: 'slug', current: s },
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
      serviceTags: ['LED Signs', 'Digital Signage', 'Channel Letters', 'Installation'],
    },
    sections: [
      /* ── Section 1: Regional Intro (text) ~300 words ── */
      {
        _key: `${s}-intro`,
        sectionType: 'text',
        label: 'Overview',
        title: `LED Signage Across the ${loc.metroArea}`,
        body: [
          block(`${s}-i1`, `ProVizion LED is the leading provider of custom LED signs, digital signage, and electronic displays across the entire ${loc.metroArea}. Our Charlotte-based team specializes in designing, manufacturing, and installing high-quality LED signage for businesses in ${cityList}, and all surrounding communities. From illuminated channel letters and LED monument signs to full-color outdoor LED displays and indoor video walls, we deliver signage solutions that help businesses stand out, attract customers, and communicate effectively.`),
          block(`${s}-i2`, `The ${loc.metroArea} is experiencing significant commercial growth, with new businesses opening and established companies upgrading their facilities and signage. Modern LED signs offer advantages that traditional signage simply cannot match — programmable messaging, brilliant full-color displays, energy efficiency that reduces operating costs by up to 80%, and a lifespan of 100,000+ hours. Whether you're a restaurant owner in ${loc.subCities[0]}, a church in ${loc.subCities[1]}, or a retail shop in ${loc.subCities[2]}, ProVizion LED has the right LED signage solution for your business.`),
          block(`${s}-i3`, `Every LED sign we produce for ${loc.metroArea} businesses is custom-designed to match your brand, engineered for ${stateFullName}'s climate conditions, and professionally installed by our experienced crews. We handle the entire process from initial consultation and design through permitting, manufacturing, installation, and ongoing support. Our in-house manufacturing capability means better quality, faster delivery, and more competitive pricing than national sign franchises or online retailers.`),
        ],
        altBackground: false,
      },
      /* ── Section 2: Sign Types (featureGrid) ~300 words ── */
      {
        _key: `${s}-services`,
        sectionType: 'featureGrid',
        label: 'LED Sign Solutions',
        title: `Types of LED Signs for ${loc.metroArea} Businesses`,
        features: [
          { title: 'LED Channel Letters', description: `Custom-fabricated illuminated letters for storefronts and building facades across the ${loc.metroArea}. Available in front-lit, back-lit (halo), and combination styles. Each letter is built from aluminum with energy-efficient LEDs rated for 100,000+ hours of bright, reliable illumination.`, iconName: 'lightbulb' },
          { title: 'Full-Color LED Displays', description: `High-resolution LED video screens for ${loc.metroArea} businesses seeking dynamic, eye-catching signage. Display promotions, video content, menus, and announcements in vivid full color. Indoor and outdoor options with pixel pitches from 2mm to 16mm to suit any viewing distance.`, iconName: 'display' },
          { title: 'LED Message Centers', description: `Programmable LED signs perfect for churches, schools, and community organizations in ${shortList}, and beyond. Update your message remotely from any device. Display service times, event details, promotions, and community information.`, iconName: 'message' },
          { title: 'LED Monument Signs', description: `Professional ground-level signs with integrated LED lighting or full-color display panels. Ideal for office parks, churches, medical facilities, and shopping centers throughout the ${loc.metroArea}. Available in brick, stone, aluminum, and composite options.`, iconName: 'location' },
          { title: 'Digital Menu Boards', description: `Indoor and outdoor digital menu displays for restaurants, cafes, and QSR establishments. Easily update pricing, add seasonal specials, and boost average order values by up to 30% with appetizing food imagery and strategic upsell messaging.`, iconName: 'grid' },
          { title: 'LED Video Walls', description: `Modular LED panel systems that create seamless large-format displays for lobbies, worship spaces, conference rooms, and event venues. Custom-sized to fit any wall or architectural feature in your ${loc.metroArea} business.`, iconName: 'display' },
        ],
        altBackground: true,
      },
      /* ── Section 3: Why ProVizion (text) ~250 words ── */
      {
        _key: `${s}-why`,
        sectionType: 'text',
        label: `Why Choose ProVizion LED`,
        title: `Why ${loc.metroArea} Businesses Trust ProVizion LED`,
        body: [
          block(`${s}-w1`, `ProVizion LED is different from the national sign franchises and online retailers that serve the ${loc.metroArea}. We design, manufacture, and install every LED sign ourselves — no subcontractors, no middlemen, no surprises. Our Charlotte manufacturing facility is centrally located to serve the entire ${loc.metroArea}, allowing us to offer faster turnaround times, better quality control, and more competitive pricing than the competition.`),
          block(`${s}-w2`, `Our team has extensive experience with local sign codes and permitting requirements across ${loc.subCities.slice(0, 4).join(', ')}, and every other community in the ${loc.metroArea}. We handle the entire permitting process as part of every project, ensuring your LED sign is fully code-compliant and approved before installation begins. This local expertise eliminates costly delays, rejected permits, and code violations that businesses often encounter with less experienced sign companies.`),
          block(`${s}-w3`, `From the initial free consultation through design, manufacturing, installation, and ongoing support, ProVizion LED delivers a seamless, professional experience. We stand behind every sign with comprehensive warranties on both LED components and workmanship. When you invest in an LED sign from ProVizion LED, you're investing in a long-term partnership with a company that's committed to your success.`),
        ],
        altBackground: false,
      },
      /* ── Section 4: Serving All Communities (text) ~200 words ── */
      {
        _key: `${s}-areas`,
        sectionType: 'text',
        label: 'Areas We Serve',
        title: `LED Signs for Every Community in the ${loc.metroArea}`,
        body: [
          block(`${s}-ar1`, `ProVizion LED proudly serves businesses in every community across the ${loc.metroArea}, including ${cityList}. No matter where your business is located in the region, our team can design, manufacture, and install the perfect LED sign for your needs. We offer free on-site consultations throughout the ${loc.metroArea} — our team will visit your location, evaluate your signage needs, measure the installation area, review local sign codes, and provide a detailed proposal with design concepts and pricing.`),
          block(`${s}-ar2`, `Each community in the ${loc.metroArea} has unique characteristics, local regulations, and commercial environments. Our experience working across the entire region means we understand these differences and can navigate them efficiently. Whether you need a single set of channel letters for a ${loc.subCities[0]} storefront or a complete LED signage package for a new development in ${loc.subCities[loc.subCities.length - 1]}, ProVizion LED has the capabilities and expertise to deliver outstanding results on time and on budget. Contact us today for a free quote.`),
        ],
        altBackground: true,
      },
    ],
    faqs: [
      { question: `Does ProVizion LED serve the entire ${loc.metroArea}?`, answer: `Absolutely. ProVizion LED provides full LED sign services across the entire ${loc.metroArea} including ${cityList}, and all surrounding communities. Our Charlotte-based manufacturing facility is centrally located to serve the region efficiently. We offer free on-site consultations, handle all local permitting, and provide professional installation throughout the ${loc.metroArea}. Contact us for a free quote for your ${loc.metroArea} business.` },
      { question: 'What types of LED signs do you offer?', answer: `ProVizion LED offers a complete range of LED signage solutions: LED channel letters (front-lit, back-lit, and halo-lit), full-color outdoor LED displays, programmable LED message centers, LED monument signs, digital menu boards, indoor LED video walls, LED pylon signs, and custom LED signage for special applications. Every sign is designed to your specifications, manufactured at our Charlotte facility using premium components, and professionally installed by our experienced crews.` },
      { question: `How much do LED signs cost in the ${loc.metroArea}?`, answer: `LED sign pricing varies based on type, size, resolution, and installation requirements. LED channel letter sets typically range from $2,000–$15,000. Outdoor full-color LED displays range from $8,000–$100,000+ depending on size and pixel pitch. LED monument signs with integrated lighting range from $5,000–$25,000. ProVizion LED provides free, detailed quotes for every project — we'll visit your ${loc.metroArea} location and deliver a comprehensive proposal with no obligation.` },
      { question: 'How long does it take to get an LED sign installed?', answer: `Most LED sign projects take 4–8 weeks from design approval to completed installation. This includes permitting (1–3 weeks depending on your municipality), manufacturing at our Charlotte facility (2–3 weeks), and professional installation (1–2 days for most projects). Rush production is available for time-sensitive projects. During your free consultation, we'll provide a detailed timeline specific to your project and location.` },
    ],
    metaTitle: `LED Signs ${loc.metroArea} | Digital Signage | ProVizion LED`,
    metaDescription: `Custom LED signs & digital signage across the ${loc.metroArea}. Serving ${loc.subCities.slice(0, 4).join(', ')} & more. Free quotes from ProVizion LED.`,
    keywords: [
      `LED signs ${loc.metroArea}`,
      `digital signage ${loc.metroArea}`,
      `LED sign company ${loc.metroArea}`,
      `outdoor LED signs ${loc.metroArea}`,
      ...loc.subCities.map((c) => `LED signs ${c}`),
    ],
  };
}

function buildTier3Doc(state) {
  const abbr = state === 'North Carolina' ? 'NC' : 'SC';
  const slug = state === 'North Carolina' ? 'north-carolina' : 'south-carolina';
  const otherState = state === 'North Carolina' ? 'South Carolina' : 'North Carolina';
  const topCities = state === 'North Carolina'
    ? 'Charlotte, Raleigh, Greensboro, Durham, Winston-Salem, Fayetteville, Wilmington, Asheville, Cary, and Concord'
    : 'Charleston, Greenville, Columbia, Spartanburg, Myrtle Beach, Rock Hill, Mount Pleasant, and Hilton Head';

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
      subheadline: `ProVizion LED serves all of ${state} with custom LED signs, digital signage, and electronic displays. Charlotte-based manufacturing, statewide installation.`,
      serviceTags: ['LED Signs', 'Digital Signage', 'Statewide Service', 'Channel Letters', 'Video Walls'],
    },
    sections: [
      {
        _key: `${slug}-intro`,
        sectionType: 'text',
        label: 'Statewide Coverage',
        title: `Custom LED Signs & Digital Signage Across ${state}`,
        body: [
          block(`${slug}-i1`, `ProVizion LED is the trusted LED sign manufacturer and installer serving all of ${state}. Based in Charlotte, NC, our centrally-located manufacturing facility allows us to efficiently serve businesses in every corner of the state — from the mountains to the coast. We specialize in LED channel letters, full-color outdoor LED displays, programmable message centers, LED monument signs, digital menu boards, and indoor LED video walls for businesses of every size and industry.`),
          block(`${slug}-i2`, `We currently serve ${state} businesses in ${topCities}, along with dozens of surrounding communities through our regional hub coverage. Every LED sign is custom-designed to match your brand identity, manufactured in our own facility using premium-grade components, and professionally installed by our experienced crew members who handle everything from local permitting to final power-on and programming.`),
          block(`${slug}-i3`, `${state} businesses are increasingly upgrading to LED signage technology for its superior energy efficiency, brilliant visibility, programmable messaging capabilities, and long operational lifespan. LED signs consume up to 80% less electricity than traditional neon or fluorescent signage while delivering brighter, more consistent illumination. With a lifespan of 100,000+ hours, LED signs from ProVizion LED are a smart long-term investment for any ${state} business.`),
          block(`${slug}-i4`, `Whether you're looking for a single storefront sign or a complete multi-location signage rollout across ${state}, ProVizion LED has the capacity, expertise, and dedication to deliver exceptional results. We also serve businesses across ${otherState} — contact us today for a free consultation and quote for your project.`),
        ],
        altBackground: false,
      },
    ],
    metaTitle: `LED Signs ${state} | Areas We Serve | ProVizion LED`,
    metaDescription: `ProVizion LED serves all of ${state} with custom LED signs & digital signage. Charlotte-based manufacturing, statewide installation. Find your city.`,
    keywords: [
      `LED signs ${state}`,
      `LED signage ${abbr}`,
      `digital signage ${state}`,
      `LED sign company ${state}`,
      `outdoor LED signs ${state}`,
      `LED display ${state}`,
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
