// Photo manifest — single source of truth for the entire site.
// Each photo entry: { slug, src, alt, category, location?, region?, featured? }
// `location` and `region` only apply to category === 'travel'.
// `featured: true` means the photo can appear in the homepage hero rotation.

export const categories = [
 {
    slug: 'golden-hour',
    name: 'Golden Hour',
    description: 'Light at the edges of the day.',
  },
  {
    slug: 'golden-temple',
    name: 'Golden Temple',
    description: 'Light, water, and devotion at Sri Harmandir Sahib, Amritsar.',
  },
  {
    slug: 'rural-punjab',
    name: 'Rural Punjab',
    description: 'Fields, faces, and quiet rhythms from the villages of my home state.',
  },
  {
    slug: 'street',
    name: 'Street',
    description: 'Moments found in passing, on streets I had no business being on.',
  },
  {
    slug: 'travel',
    name: 'Travel',
    description: 'Places I went, framed through what I noticed there.',
  },
  {
    slug: 'wildlife',
    name: 'Wildlife',
    description: 'Patience, distance, and luck.',
  },
];
  

// Region taxonomy for travel photos. Order here determines display order in the filter.
export const regions = ['India', 'International'];

export const photos = [
  // RURAL PUNJAB
  { slug: 'rp-015', src: '/photos/rural-punjab/rp-015.jpg', alt: 'Rural Punjab', category: 'rural-punjab', featured: true },
  { slug: 'rp-016', src: '/photos/rural-punjab/rp-016.jpg', alt: 'Rural Punjab', category: 'rural-punjab' },
  { slug: 'rp-017', src: '/photos/rural-punjab/rp-017.jpg', alt: 'Rural Punjab', category: 'rural-punjab', featured: true },
  { slug: 'rp-018', src: '/photos/rural-punjab/rp-018.jpg', alt: 'Rural Punjab', category: 'rural-punjab' },
  { slug: 'rp-019', src: '/photos/rural-punjab/rp-019.jpg', alt: 'Rural Punjab', category: 'rural-punjab' },
  { slug: 'rp-020', src: '/photos/rural-punjab/rp-020.jpg', alt: 'Rural Punjab', category: 'rural-punjab' },
  { slug: 'rp-021', src: '/photos/rural-punjab/rp-021.jpg', alt: 'Rural Punjab', category: 'rural-punjab' },
  { slug: 'rp-022', src: '/photos/rural-punjab/rp-022.jpg', alt: 'Rural Punjab', category: 'rural-punjab' },
  { slug: 'rp-023', src: '/photos/rural-punjab/rp-023.jpg', alt: 'Rural Punjab', category: 'rural-punjab', featured: true },
  { slug: 'rp-024', src: '/photos/rural-punjab/rp-024.jpg', alt: 'Rural Punjab', category: 'rural-punjab' },

  // GOLDEN TEMPLE
  { slug: 'gt-001', src: '/photos/golden-temple/gt-001.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-002', src: '/photos/golden-temple/gt-002.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-003', src: '/photos/golden-temple/gt-003.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-004', src: '/photos/golden-temple/gt-004.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-005', src: '/photos/golden-temple/gt-005.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-006', src: '/photos/golden-temple/gt-006.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-007', src: '/photos/golden-temple/gt-007.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-008', src: '/photos/golden-temple/gt-008.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-009', src: '/photos/golden-temple/gt-009.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-010', src: '/photos/golden-temple/gt-010.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-011', src: '/photos/golden-temple/gt-011.jpg', alt: 'Golden Temple', category: 'golden-temple' },
  { slug: 'gt-012', src: '/photos/golden-temple/gt-012.jpg', alt: 'Golden Temple', category: 'golden-temple', featured: true },

  // GOLDEN HOUR
  { slug: 'gh-001', src: '/photos/golden-hour/gh-001.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-002', src: '/photos/golden-hour/gh-002.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-003', src: '/photos/golden-hour/gh-003.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-004', src: '/photos/golden-hour/gh-004.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-005', src: '/photos/golden-hour/gh-005.jpg', alt: 'Golden Hour', category: 'golden-hour', featured: true },
  { slug: 'gh-006', src: '/photos/golden-hour/gh-006.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-007', src: '/photos/golden-hour/gh-007.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-008', src: '/photos/golden-hour/gh-008.jpg', alt: 'Golden Hour', category: 'golden-hour', featured: true },
  { slug: 'gh-009', src: '/photos/golden-hour/gh-009.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-010', src: '/photos/golden-hour/gh-010.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-011', src: '/photos/golden-hour/gh-011.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-012', src: '/photos/golden-hour/gh-012.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-013', src: '/photos/golden-hour/gh-013.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-014', src: '/photos/golden-hour/gh-014.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-015', src: '/photos/golden-hour/gh-015.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-016', src: '/photos/golden-hour/gh-016.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-017', src: '/photos/golden-hour/gh-017.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-018', src: '/photos/golden-hour/gh-018.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-019', src: '/photos/golden-hour/gh-019.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-020', src: '/photos/golden-hour/gh-020.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-021', src: '/photos/golden-hour/gh-021.jpg', alt: 'Golden Hour', category: 'golden-hour' },
  { slug: 'gh-022', src: '/photos/golden-hour/gh-022.jpg', alt: 'Golden Hour', category: 'golden-hour' },




  // STREET
  { slug: 'st-001', src: '/photos/street/st-001.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-002', src: '/photos/street/st-002.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-003', src: '/photos/street/st-003.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-004', src: '/photos/street/st-004.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-005', src: '/photos/street/st-005.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-006', src: '/photos/street/st-006.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-007', src: '/photos/street/st-007.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-008', src: '/photos/street/st-008.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-009', src: '/photos/street/st-009.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-010', src: '/photos/street/st-010.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-011', src: '/photos/street/st-011.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-012', src: '/photos/street/st-012.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-013', src: '/photos/street/st-013.jpg', alt: 'Street', category: 'street', featured: true },
  { slug: 'st-014', src: '/photos/street/st-014.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-015', src: '/photos/street/st-015.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-016', src: '/photos/street/st-016.jpg', alt: 'Street', category: 'street', featured: true },
  { slug: 'st-017', src: '/photos/street/st-017.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-018', src: '/photos/street/st-018.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-019', src: '/photos/street/st-019.jpg', alt: 'Street', category: 'street' },
  { slug: 'st-020', src: '/photos/street/st-020.jpg', alt: 'Street', category: 'street' },

  // WILDLIFE

  // TRAVEL — INDIA
  { slug: 'tr-spiti-001', src: '/photos/travel/tr-spiti-001.jpg', alt: 'Spiti, 2014', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-002', src: '/photos/travel/tr-spiti-002.jpg', alt: 'Spiti, 2014', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-003', src: '/photos/travel/tr-spiti-003.jpg', alt: 'Spiti, 2014', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-004', src: '/photos/travel/tr-spiti-004.jpg', alt: 'Spiti, 2014', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-005', src: '/photos/travel/tr-spiti-005.jpg', alt: 'Spiti, 2014', category: 'travel', location: 'Spiti', region: 'India', featured: true },
  { slug: 'tr-spiti-006', src: '/photos/travel/tr-spiti-006.jpg', alt: 'Spiti, 2014', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-007', src: '/photos/travel/tr-spiti-007.jpg', alt: 'Spiti, 2014', category: 'travel', location: 'Spiti', region: 'India', featured: true },
  { slug: 'tr-spiti-008', src: '/photos/travel/tr-spiti-008.jpg', alt: 'Spiti, 2014', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-009', src: '/photos/travel/tr-spiti-009.jpg', alt: 'Spiti, 2014', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-010', src: '/photos/travel/tr-spiti-010.jpg', alt: 'Spiti, 2014', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-ladakh-001', src: '/photos/travel/tr-ladakh-001.jpg', alt: 'Ladakh, 2015', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-002', src: '/photos/travel/tr-ladakh-002.jpg', alt: 'Ladakh, 2015', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-003', src: '/photos/travel/tr-ladakh-003.jpg', alt: 'Ladakh, 2015', category: 'travel', location: 'Ladakh', region: 'India', featured: true },
  { slug: 'tr-ladakh-004', src: '/photos/travel/tr-ladakh-004.jpg', alt: 'Ladakh, 2015', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-005', src: '/photos/travel/tr-ladakh-005.jpg', alt: 'Ladakh, 2015', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-006', src: '/photos/travel/tr-ladakh-006.jpg', alt: 'Ladakh, 2015', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-007', src: '/photos/travel/tr-ladakh-007.jpg', alt: 'Ladakh, 2015', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-008', src: '/photos/travel/tr-ladakh-008.jpg', alt: 'Ladakh, 2015', category: 'travel', location: 'Ladakh', region: 'India', featured: true },
  { slug: 'tr-ladakh-009', src: '/photos/travel/tr-ladakh-009.jpg', alt: 'Ladakh, 2015', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-010', src: '/photos/travel/tr-ladakh-010.jpg', alt: 'Ladakh, 2015', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-varanasi-001', src: '/photos/travel/tr-varanasi-001.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-002', src: '/photos/travel/tr-varanasi-002.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India', featured: true },
  { slug: 'tr-varanasi-003', src: '/photos/travel/tr-varanasi-003.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India', featured: true },
  { slug: 'tr-varanasi-004', src: '/photos/travel/tr-varanasi-004.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-005', src: '/photos/travel/tr-varanasi-005.jpg', alt: 'A wall-mounted mirror at an open-air barber stall in Varanasi reflects a customer mid-shave with the ghat crowds behind, while missing-person flyers and a Music Festival poster paper the wall beside it', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-006', src: '/photos/travel/tr-varanasi-006.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-007', src: '/photos/travel/tr-varanasi-007.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-008', src: '/photos/travel/tr-varanasi-008.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-009', src: '/photos/travel/tr-varanasi-009.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-010', src: '/photos/travel/tr-varanasi-010.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-011', src: '/photos/travel/tr-varanasi-011.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-012', src: '/photos/travel/tr-varanasi-012.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India' },
  // TRAVEL — INTERNATIONAL
  { slug: 'tr-canada-001', src: '/photos/travel/tr-canada-001.jpg', alt: 'Canada, 2016', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-002', src: '/photos/travel/tr-canada-002.jpg', alt: 'Canada, 2016', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-003', src: '/photos/travel/tr-canada-003.jpg', alt: 'Canada, 2016', category: 'travel', location: 'Canada', region: 'International', featured: true },
  { slug: 'tr-canada-004', src: '/photos/travel/tr-canada-004.jpg', alt: 'Canada, 2016', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-005', src: '/photos/travel/tr-canada-005.jpg', alt: 'Canada, 2016', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-006', src: '/photos/travel/tr-canada-006.jpg', alt: 'Canada, 2016', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-007', src: '/photos/travel/tr-canada-007.jpg', alt: 'Canada, 2016', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-008', src: '/photos/travel/tr-canada-008.jpg', alt: 'Canada, 2016', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-009', src: '/photos/travel/tr-canada-009.jpg', alt: 'Canada, 2016', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-010', src: '/photos/travel/tr-canada-010.jpg', alt: 'Canada, 2016', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-new-zealand-001', src: '/photos/travel/tr-new-zealand-001.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International', featured: true },
  { slug: 'tr-new-zealand-002', src: '/photos/travel/tr-new-zealand-002.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-003', src: '/photos/travel/tr-new-zealand-003.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-004', src: '/photos/travel/tr-new-zealand-004.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-005', src: '/photos/travel/tr-new-zealand-005.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-006', src: '/photos/travel/tr-new-zealand-006.jpg', alt: 'Sunrise at Kaikoura beach — a weathered driftwood log in the foreground, scattered clouds catching gold over the bay and a low headland on the right', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-007', src: '/photos/travel/tr-new-zealand-007.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-008', src: '/photos/travel/tr-new-zealand-008.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-009', src: '/photos/travel/tr-new-zealand-009.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International', featured: true },
  { slug: 'tr-new-zealand-010', src: '/photos/travel/tr-new-zealand-010.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-prague-001', src: '/photos/travel/tr-prague-001.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-002', src: '/photos/travel/tr-prague-002.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-003', src: '/photos/travel/tr-prague-003.jpg', alt: 'A family crossing a cobblestone Prague square at sunset', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-004', src: '/photos/travel/tr-prague-004.jpg', alt: 'Prague’s Old Town Square at night — the twin Gothic spires of the Týn Church rising behind the warmly lit baroque facades, cobblestones glowing under the lamps', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-005', src: '/photos/travel/tr-prague-005.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-006', src: '/photos/travel/tr-prague-006.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-007', src: '/photos/travel/tr-prague-007.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International', featured: true },
  { slug: 'tr-prague-008', src: '/photos/travel/tr-prague-008.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-009', src: '/photos/travel/tr-prague-009.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International', featured: true },
  { slug: 'tr-prague-010', src: '/photos/travel/tr-prague-010.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-switzerland-001', src: '/photos/travel/tr-switzerland-001.jpg', alt: 'Lucerne’s Chapel Bridge at blue hour — the covered wooden walkway and octagonal water tower lit against an overcast sky, the Jesuit Church glowing across the Reuss', category: 'travel', location: 'Switzerland', region: 'International', featured: true },
  { slug: 'tr-switzerland-002', src: '/photos/travel/tr-switzerland-002.jpg', alt: 'Lucerne at night — half-timbered facades on one bank, Château Gütsch lit on the hill across the river, street lamps starring on the still water', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-003', src: '/photos/travel/tr-switzerland-003.jpg', alt: 'A weathered wooden ski hut half-buried in fresh snow on a Jungfrau slope, rock and cloud fading into white behind it', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-004', src: '/photos/travel/tr-switzerland-004.jpg', alt: 'Gnarled, leafless plane trees arching over a quiet winter promenade along Lake Lucerne, two figures walking through the tunnel of branches', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-005', src: '/photos/travel/tr-switzerland-005.jpg', alt: 'Long exposure of a boat crossing Lake Lucerne at blue hour, its light trail stretched across the water with the snow-dusted Alps behind', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-006', src: '/photos/travel/tr-switzerland-006.jpg', alt: 'View from Jungfraujoch over the Aletsch glacier — a vast snowfield curving away under thin streaks of high cloud', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-007', src: '/photos/travel/tr-switzerland-007.jpg', alt: 'Workers in orange suits roped onto a rocky outcrop near the Jungfraujoch summit, the wind-sculpted snow slope falling away to the right', category: 'travel', location: 'Switzerland', region: 'International', featured: true },
  { slug: 'tr-switzerland-008', src: '/photos/travel/tr-switzerland-008.jpg', alt: 'Looking straight down through an ice-encrusted observation grate at Jungfraujoch onto the snowy ridges far below', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-009', src: '/photos/travel/tr-switzerland-009.jpg', alt: 'Panorama of snowy peaks and a valley far below, framed by icicles hanging from a high-altitude vantage', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-010', src: '/photos/travel/tr-switzerland-010.jpg', alt: 'Lake Lucerne under a moody late-afternoon sky — the twin spires of the Hofkirche and a paddle steamer at the dock on the far bank', category: 'travel', location: 'Switzerland', region: 'International' },
];

// Minimum photos required for a location to appear in the filter.
const LOCATION_MIN_PHOTOS = 4;

// Helpers
export function photosByCategory(slug) {
  return photos.filter((p) => p.category === slug);
}

// Returns all photos flagged featured. No cap here — capping (e.g. 15-max for
// the hero rotator) is the consumer's responsibility, so this stays a pure
// data accessor and consumers can apply their own selection logic (random,
// seeded, first-N, etc.) without coupling to this function.
export function featuredPhotos() {
  return photos.filter((p) => p.featured);
}

export function categoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

// Returns locations grouped by region, suitable for the LocationFilter component.
// Locations with fewer than LOCATION_MIN_PHOTOS are excluded.
// Shape: [{ region: 'India', locations: ['Ladakh', 'Spiti'] }, { region: 'International', locations: [...] }]
// Regions with zero qualifying locations are omitted from the result.
export function travelLocationsByRegion() {
  const counts = new Map(); // key: `${region}::${location}` → count
  for (const p of photos) {
    if (p.category !== 'travel' || !p.location || !p.region) continue;
    const key = `${p.region}::${p.location}`;
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  return regions
    .map((region) => {
      const locations = Array.from(counts.entries())
        .filter(([key, count]) => key.startsWith(`${region}::`) && count >= LOCATION_MIN_PHOTOS)
        .map(([key]) => key.split('::')[1])
        .sort();
      return { region, locations };
    })
    .filter((group) => group.locations.length > 0);
}

// Flat list of all qualifying locations, preserving region order.
// Kept for any consumer that doesn't need grouping.
export function travelLocations() {
  return travelLocationsByRegion().flatMap((g) => g.locations);
}

export function categoryCoverPhoto(slug) {
  // Returns first featured photo from category, or first photo if none featured.
  const cat = photosByCategory(slug);
  return cat.find((p) => p.featured) || cat[0];
}