// studio/seed.js
const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'lai2gfj7',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token: 'skQR5One7RAzTiV1spBstZAKKu3lBB6dWtBYTIPtAKvQTnDLvZOLNkpkiszbkTfkL2AGYPENKzr53OyV9t2EHOguJQXFXTgHEC5y3ytMeWz4Jv8hDfslUwJPzsjfXNfhJZR1xq6SKeoMoovz4tP4vg5PYAIzSpBfszfdTx1FW2pbnUTLzL5r',
  useCdn: false,
});

console.log("🛠️ Final Healing: Injecting missing markDefs into Portable Text...");

// --- KEY GENERATOR ---
const randomKey = () => Math.random().toString(36).substring(2, 10);

// --- HELPER FUNCTIONS FOR PORTABLE TEXT (NOW WITH KEYS & MARKDEFS) ---
// Notice the addition of `markDefs: []` right before `children`
const ptNormal = (text) => ({ _key: randomKey(), _type: 'block', style: 'normal', markDefs: [], children: [{ _key: randomKey(), _type: 'span', marks: [], text }] });
const ptH1 = (text) => ({ _key: randomKey(), _type: 'block', style: 'h1', markDefs: [], children: [{ _key: randomKey(), _type: 'span', marks: [], text }] });
const ptH3 = (text) => ({ _key: randomKey(), _type: 'block', style: 'h3', markDefs: [], children: [{ _key: randomKey(), _type: 'span', marks: [], text }] });
const ptBullet = (text) => ({ _key: randomKey(), _type: 'block', style: 'normal', listItem: 'bullet', markDefs: [], children: [{ _key: randomKey(), _type: 'span', marks: [], text }] });

// Helper for reference arrays
const makeRef = (refId) => ({ _key: randomKey(), _type: 'reference', _ref: refId });

// --- STATIC IDs FOR RELATIONAL LINKING ---
const AUTHORS = { tariro: 'author-tariro', wendy: 'author-wendy' };
const CATS = {
  profiles: 'cat-aluminium-profiles',
  hardware: 'cat-hardware-tools',
  fasteners: 'cat-fasteners',
  glass: 'cat-glass-glazing',
  roofing: 'cat-roofing',
  diy: 'cat-diy-homeowner'
};
const ACTS = { bulk: 'act-bulk', custom: 'act-custom', logistics: 'act-logistics', consultation: 'act-consultation', retail: 'act-retail' };
const BLOGS = { b1: 'blog-1', b2: 'blog-2', b3: 'blog-3', b4: 'blog-4' };

// --- 1. AUTHORS ---
const authors = [
  {
    _id: AUTHORS.tariro, _type: 'author', name: 'Tariro', slug: { _type: 'slug', current: 'tariro-operations' },
    bio: [ptNormal("Tariro is the Sales & Operations Manager at Two Tier Aluminium Hub. With years of experience in heavy-duty supply chain logistics and industrial hardware, Tariro specializes in serving contractors, builders, and large-scale commercial developers in Mutoko and beyond. Call Tariro at +263 71 987 5027.")]
  },
  {
    _id: AUTHORS.wendy, _type: 'author', name: 'Wendy', slug: { _type: 'slug', current: 'wendy-customer-relations' },
    bio: [ptNormal("Wendy leads Customer Relations and Retail Operations at Two Tier Aluminium Hub. She is a product specialist dedicated to helping DIY enthusiasts, interior designers, and homeowners find the exact materials and tools they need for their bespoke projects. Call Wendy at +263 77 829 6767.")]
  }
];

// --- 2. CATEGORIES ---
const categories = [
  { _id: CATS.profiles, _type: 'category', title: 'Aluminium Profiles & Extrusions', slug: { _type: 'slug', current: 'aluminium-profiles' }, description: [ptNormal('A comprehensive selection of premium aluminium sheets, rods, and custom extrusions available in various thicknesses and finishes for structural and architectural use.')] },
  { _id: CATS.hardware, _type: 'category', title: 'Hardware & Power Tools', slug: { _type: 'slug', current: 'hardware-power-tools' }, description: [ptNormal('Professional-grade power tools, hand tools, and heavy-duty hardware designed for durability on the toughest construction sites.')] },
  { _id: CATS.fasteners, _type: 'category', title: 'Fasteners, Nuts & Bolts', slug: { _type: 'slug', current: 'fasteners-nuts-bolts' }, description: [ptNormal('High-tensile fasteners, industrial screws, bolts, and specialized nails engineered to secure the heaviest structural frames safely.')] },
  { _id: CATS.glass, _type: 'category', title: 'Glass & Glazing Accessories', slug: { _type: 'slug', current: 'glass-glazing' }, description: [ptNormal('Top-quality rubbers, seals, connectors, and brackets required for flawless glass fitting and modern aluminium window and door framing.')] },
  { _id: CATS.roofing, _type: 'category', title: 'Roofing & Cladding Materials', slug: { _type: 'slug', current: 'roofing-cladding' }, description: [ptNormal('Weather-resistant materials, waterproofing solutions, and structural trims perfect for contemporary roofing and building facades.')] },
  { _id: CATS.diy, _type: 'category', title: 'DIY & Home Improvement', slug: { _type: 'slug', current: 'diy-home-improvement' }, description: [ptNormal('Accessible, cost-effective materials, toolkits, and guided solutions specifically tailored for homeowners taking on personal renovation projects.')] }
];

// --- 3. OBJECTIVES ---
const objectives = [
  { _id: 'obj-1', _type: 'objective', title: 'Market Leadership in Mutoko', description: [ptNormal('To establish Two Tier Aluminium Hub as the premier destination for all hardware, building, and aluminium needs within the Mutoko region and surrounding areas.')] },
  { _id: 'obj-2', _type: 'objective', title: 'Uncompromising Quality Assurance', description: [ptNormal('To guarantee that every product—from the smallest fastener to the largest custom extrusion—meets rigorous industrial standards for durability and safety.')] },
  { _id: 'obj-3', _type: 'objective', title: 'Community Empowerment', description: [ptNormal('To actively support local construction workers, builders, and DIY enthusiasts by providing not just materials, but expert guidance and face-to-face personalized service.')] },
  { _id: 'obj-4', _type: 'objective', title: 'E-Commerce Expansion', description: [ptNormal('To continuously evolve our digital presence, allowing customers to explore our catalog, request quotes, and secure materials seamlessly online.')] },
  { _id: 'obj-5', _type: 'objective', title: 'Sustainable Supply Chain', description: [ptNormal('To collaborate closely with trusted local suppliers, ensuring our inventory remains fully stocked while supporting the local economy and reducing logistical carbon footprints.')] }
];

// --- 4. VALUES ---
const values = [
  { _id: 'val-1', _type: 'value', title: 'Integrity & Transparency', description: [ptNormal('We believe in honest pricing, clear communication, and delivering exactly what we promise to our clients.')] },
  { _id: 'val-2', _type: 'value', title: 'Customer-Centric Focus', description: [ptNormal('Your project’s success is our success. We tailor our recommendations based on your specific requirements, budget, and timeline.')] },
  { _id: 'val-3', _type: 'value', title: 'Reliability', description: [ptNormal('Contractors and builders rely on us to keep their sites moving. We ensure our materials are dependable and our supply lines are consistent.')] },
  { _id: 'val-4', _type: 'value', title: 'Innovation', description: [ptNormal('We continuously update our inventory with the latest advancements in hardware technology, tools, and modern architectural finishes.')] },
  { _id: 'val-5', _type: 'value', title: 'Local Pride', description: [ptNormal('As a business deeply rooted in Mutoko, Zimbabwe, we are committed to uplifting our local workforce and supporting community development.')] }
];

// --- 5. ACTIVITIES (SERVICES) ---
const activities = [
  {
    _id: ACTS.bulk, _type: 'activity', title: 'Bulk Supply & Procurement', slug: { _type: 'slug', current: 'bulk-supply' },
    description: [ptNormal('High-volume supply of structural materials for large-scale construction and commercial development projects.')],
    body: [ptH3('Commercial-Grade Material Sourcing'), ptNormal('For high-income contractors and large-scale builders, supply chain interruptions are costly. Two Tier Aluminium Hub specializes in the bulk procurement and supply of heavy-duty hardware, aluminium extrusions, and roofing materials. We handle the logistical heavy lifting so your site never experiences downtime due to material shortages.')]
  },
  {
    _id: ACTS.custom, _type: 'activity', title: 'Custom Aluminium Sizing', slug: { _type: 'slug', current: 'custom-sizing' },
    description: [ptNormal('Precision cutting and preparation of aluminium profiles to meet your exact architectural specifications.')],
    body: [ptH3('Precision Engineering for Flawless Fit'), ptNormal('No two projects are exactly alike. Whether you are designing bespoke window frames, customized doorways, or intricate building facades, our team utilizes advanced cutting tools to size your aluminium profiles precisely. This minimizes your on-site labor and guarantees a perfect, professional finish.')]
  },
  {
    _id: ACTS.consultation, _type: 'activity', title: 'Contractor Consultation', slug: { _type: 'slug', current: 'contractor-consultation' },
    description: [ptNormal('Expert, face-to-face technical advice and material estimation for builders and project managers.')],
    body: [ptH3('Partnering with Construction Professionals'), ptNormal('Selecting the right grade of fastener or the correct thickness of aluminium sheet is critical to structural integrity. Tariro and our team of experts are available for in-depth consultations. We assist in interpreting blueprints, estimating material quantities, and recommending the most cost-effective, high-quality hardware for your specific load-bearing requirements.')]
  },
  {
    _id: ACTS.retail, _type: 'activity', title: 'Retail & DIY Support', slug: { _type: 'slug', current: 'retail-diy-support' },
    description: [ptNormal('A fully-stocked brick-and-mortar showroom catering to homeowners, interior designers, and DIY enthusiasts.')],
    body: [ptH3('Empowering the Homeowner'), ptNormal('Taking on a home renovation? Wendy and our retail team are here to guide you. Our Mutoko showroom offers a hands-on experience where you can physically inspect finishes, test power tools, and receive step-by-step advice on how to execute your interior design or repair project safely and beautifully.')]
  },
  {
    _id: ACTS.logistics, _type: 'activity', title: 'Logistics & Site Delivery', slug: { _type: 'slug', current: 'logistics-delivery' },
    description: [ptNormal('Fast, reliable delivery of hardware and massive aluminium profiles directly to your construction site.')],
    body: [ptH3('From Our Hub to Your Site'), ptNormal('Transporting 6-meter aluminium lengths and heavy bulk fasteners requires the right fleet. Two Tier provides dedicated logistics support to ensure your materials arrive safely, securely, and on schedule, anywhere in the Mutoko region.')]
  }
];

// --- 6. GARGANTUAN BLOGS ---
const blogs = [
  {
    _id: BLOGS.b1, _type: 'blog', title: 'The Ultimate Guide to Choosing the Right Aluminium Profiles', slug: { _type: 'slug', current: 'guide-choosing-aluminium-profiles' }, publishedAt: new Date().toISOString(),
    author: { _type: 'reference', _ref: AUTHORS.wendy },
    categories: [makeRef(CATS.profiles), makeRef(CATS.diy), makeRef(CATS.glass)],
    excerpt: [ptNormal('Understanding the different types of aluminium extrusions and finishes available for modern home renovations and architectural design.')],
    body: [
      ptH1('Transforming Spaces with Premium Aluminium'),
      ptNormal('Aluminium has rapidly become the material of choice for modern construction, interior design, and home renovations. Its unique combination of being lightweight yet incredibly strong, coupled with natural corrosion resistance, makes it perfect for the demanding climate in Zimbabwe. However, walking into Two Tier Aluminium Hub and seeing hundreds of different profiles can be overwhelming. This guide will help you understand exactly what you need.'),
      ptH3('Understanding Profile Types'),
      ptNormal('Aluminium profiles are extruded into specific shapes, each serving a unique structural or aesthetic purpose:'),
      ptBullet('Square & Rectangular Tubing: The backbone of structural framing. Used heavily in creating gates, security screens, and custom shelving.'),
      ptBullet('U-Channels & Angles: Perfect for edge protection, glass framing, and architectural trim.'),
      ptBullet('T-Slots & V-Slots: Highly modular profiles used in custom fabrication and industrial workstations.'),
      ptBullet('Window & Door Sections: Specialized extrusions designed specifically to house glass panes, weather stripping, and locking mechanisms.'),
      ptH3('Choosing the Right Finish'),
      ptNormal('The finish of your aluminium dictates not just its look, but its longevity. At our Mutoko showroom, we offer:'),
      ptBullet('Mill Finish: The raw, untreated aluminium. Cost-effective and perfect for concealed structural work.'),
      ptBullet('Anodized: A chemical process that thickens the natural oxide layer. It provides a beautiful metallic sheen and excellent scratch resistance.'),
      ptBullet('Powder Coated: Baked-on dry paint that offers incredible durability and comes in a wide variety of colors (bronze, black, white, and charcoal are highly popular).'),
      ptH3('Need Help Deciding?'),
      ptNormal('Whether you are framing a modern glass shower or building a heavy-duty sliding gate, getting the thickness and profile right is crucial. Visit Wendy at our retail counter, and we will help you map out the exact materials you need for your cut-list.')
    ]
  },
  {
    _id: BLOGS.b2, _type: 'blog', title: 'Contractor\'s Blueprint: Avoiding Supply Chain Delays in 2026', slug: { _type: 'slug', current: 'contractors-blueprint-avoiding-supply-chain-delays' }, publishedAt: new Date(Date.now() - 86400000).toISOString(),
    author: { _type: 'reference', _ref: AUTHORS.tariro },
    categories: [makeRef(CATS.hardware), makeRef(CATS.roofing)],
    excerpt: [ptNormal('Learn how strategic material procurement and partnering with a reliable local hub can save your construction projects from costly downtime.')],
    body: [
      ptH1('Time is Money: Securing Your Supply Line'),
      ptNormal('In the commercial construction industry, a delayed shipment of roofing materials or a shortage of specific structural brackets can halt a multi-million dollar project. As the Operations Manager at Two Tier Aluminium Hub, I have seen firsthand how proactive procurement strategies separate profitable contractors from struggling ones.'),
      ptH3('The True Cost of Downtime'),
      ptNormal('When your site grinds to a halt because you are waiting on a specific batch of high-tensile bolts or custom aluminium extrusions, you aren’t just losing time. You are paying idle labor, extending equipment hire costs, and potentially facing breach-of-contract penalties.'),
      ptH3('Strategies for Seamless Procurement'),
      ptBullet('Partner Locally: Sourcing from a hub directly within Mutoko means you aren\'t waiting on cross-country freight. If you run short on site, we are minutes away.'),
      ptBullet('Forecast and Bulk Order: Work with our team during your blueprint phase. We can secure bulk orders of your primary materials in advance, holding them in our inventory until you are ready for site delivery.'),
      ptBullet('Standardize Materials: Where possible, standardize the profiles and fasteners used across your project. This reduces the variety of stock you need and makes emergency restocks much faster.'),
      ptH3('The Two Tier Advantage'),
      ptNormal('Our core mission is to be the logistical backbone for builders in our region. We maintain deep relationships with national manufacturers to ensure our warehouse is always stocked with commercial-grade hardware, tools, and aluminium. Send us your Bill of Quantities (BOQ), and let us guarantee your supply chain.')
    ]
  },
  {
    _id: BLOGS.b3, _type: 'blog', title: 'The Ultimate Fastener Cheat Sheet: Zinc vs. Stainless Steel', slug: { _type: 'slug', current: 'fastener-cheat-sheet-zinc-vs-stainless' }, publishedAt: new Date(Date.now() - 172800000).toISOString(),
    author: { _type: 'reference', _ref: AUTHORS.tariro },
    categories: [makeRef(CATS.fasteners), makeRef(CATS.hardware)],
    excerpt: [ptNormal('Stop guessing which bolt to use. A deep dive into fastener grades, tensile strength, and anti-corrosion properties for heavy-duty construction.')],
    body: [
      ptH1('Holding It All Together: The Science of Fasteners'),
      ptNormal('It is the smallest component on your construction site, but arguably the most important. A structural failure rarely happens because a steel beam snaps; it happens because the wrong grade of bolt sheared under pressure or rusted away over time. At Two Tier, we stock thousands of fasteners, and choosing the right one is critical.'),
      ptH3('Zinc-Plated Fasteners'),
      ptNormal('Zinc plating involves coating steel with a thin layer of zinc to prevent rust. '),
      ptBullet('Pros: Highly cost-effective, readily available, and offers moderate corrosion resistance.'),
      ptBullet('Cons: The zinc layer is thin. If it gets scratched by a wrench during installation, the underlying steel will rust. Not suitable for marine environments or highly corrosive industrial settings.'),
      ptBullet('Best For: Indoor applications, interior aluminium framing, and dry environments.'),
      ptH3('Stainless Steel Fasteners (Grades 304 and 316)'),
      ptNormal('Stainless steel has chromium mixed directly into the steel alloy, meaning the anti-rust properties go all the way through the metal.'),
      ptBullet('Pros: Exceptional corrosion resistance. Grade 316 (Marine Grade) can withstand harsh weather, chemical exposure, and moisture indefinitely.'),
      ptBullet('Cons: More expensive than zinc-plated, and technically slightly softer (lower tensile strength) than high-grade carbon steel.'),
      ptBullet('Best For: Outdoor architectural features, roofing cladding, water-exposed framing, and premium visual finishes.'),
      ptH3('Galvanic Corrosion (The Silent Killer)'),
      ptNormal('When working with Aluminium, you must be careful about "Galvanic Corrosion"—a reaction that occurs when two dissimilar metals touch in the presence of moisture. Always use Stainless Steel or specialized coated fasteners when bolting into Aluminium to prevent the aluminium from corroding away around the bolt.')
    ]
  },
  {
    _id: BLOGS.b4, _type: 'blog', title: '5 Essential Power Tools Every DIY Enthusiast Needs', slug: { _type: 'slug', current: '5-essential-power-tools-diy' }, publishedAt: new Date(Date.now() - 259200000).toISOString(),
    author: { _type: 'reference', _ref: AUTHORS.wendy },
    categories: [makeRef(CATS.hardware), makeRef(CATS.diy)],
    excerpt: [ptNormal('Looking to start building your own frames and furniture? Here are the foundational power tools you need to get professional results at home.')],
    body: [
      ptH1('Build It Yourself: The Starter Toolkit'),
      ptNormal('There is nothing quite as satisfying as stepping back and looking at a beautiful aluminium window frame, sliding door, or custom shelf that you built with your own hands. However, working with metal and heavy hardware requires more than just a hammer and a screwdriver. Here are the 5 power tools we highly recommend from our Two Tier Hardware catalog.'),
      ptH3('1. The Cordless Impact Driver'),
      ptNormal('While a standard drill is great, an impact driver delivers concussive rotational force. When you are driving thick self-tapping screws into aluminium profiles or masonry anchors into brick, an impact driver will do it effortlessly without stripping the screw head.'),
      ptH3('2. The Angle Grinder'),
      ptNormal('Fitted with a thin metal-cutting disc, an angle grinder is your best friend for making quick, rough cuts in aluminium sheets, trimming bolts, or smoothing out sharp metal burrs.'),
      ptH3('3. The Compound Miter Saw (Chop Saw)'),
      ptNormal('If you want to build frames, you need perfect 45-degree and 90-degree cuts. A miter saw fitted with a non-ferrous metal cutting blade will slice through aluminium extrusions like butter, leaving clean, factory-perfect edges.'),
      ptH3('4. The Rotary Hammer Drill'),
      ptNormal('If you are mounting your new frames into the walls of your house, a standard drill will struggle against concrete or brick. A rotary hammer provides the sheer punching power needed to sink masonry anchors safely.'),
      ptH3('5. The Orbital Sander'),
      ptNormal('Safety and finish are paramount. After cutting aluminium, the edges are razor-sharp. A quick pass with an orbital sander ensures your custom pieces are safe to handle and ready for powder coating or installation.'),
      ptNormal('Ready to upgrade your workshop? Come down to Two Tier Aluminium Hub. We stock the best brands, and we can help you choose the right tool for your budget.')
    ]
  }
];

// --- 7. SPOTLIGHT DOCUMENT ---
const spotlight = {
  _id: 'spotlightItems',
  _type: 'spotlight',
  title: 'Homepage Spotlight',
  blogs: [makeRef(BLOGS.b1), makeRef(BLOGS.b2), makeRef(BLOGS.b3), makeRef(BLOGS.b4)],
  activity: [makeRef(ACTS.bulk), makeRef(ACTS.custom), makeRef(ACTS.consultation), makeRef(ACTS.logistics)]
};

// --- EXECUTE TRANSACTION ---
async function seedDatabase() {
  try {
    let transaction = client.transaction();
    authors.forEach(doc => transaction.createOrReplace(doc));
    categories.forEach(doc => transaction.createOrReplace(doc));
    objectives.forEach(doc => transaction.createOrReplace(doc));
    values.forEach(doc => transaction.createOrReplace(doc));
    activities.forEach(doc => transaction.createOrReplace(doc));
    blogs.forEach(doc => transaction.createOrReplace(doc));
    transaction.createOrReplace(spotlight);

    console.log("⏳ Transmitting final healed payload to Sanity Cloud...");
    const res = await transaction.commit();
    
    console.log(`✅ SUCCESS! Fully Healed ${res.results.length} documents.`);
    
  } catch (err) {
    console.error("❌ Transaction failed:", err.message);
  }
}

seedDatabase();