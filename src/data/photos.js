// Photo manifest — single source of truth for the entire site.
// Each photo entry: { slug, src, alt, category, location?, region?, featured? }
// `location` and `region` only apply to category === 'travel'.
// `featured: true` means the photo can appear in the homepage hero rotation.

export const categories = [
  {
    slug: 'rural-punjab',
    name: 'Rural Punjab',
    description: 'Fields, faces, and quiet rhythms from the villages of my home state.',
  },
  {
    slug: 'golden-temple',
    name: 'Golden Temple',
    description: 'Light, water, and devotion at Sri Harmandir Sahib, Amritsar.',
  },
  {
    slug: 'sunrise-sunsets',
    name: 'Sunrise & Sunsets',
    description: 'The two hours of the day when the world is honest.',
  },
  {
    slug: 'street',
    name: 'Street',
    description: 'Moments found in passing, on streets I had no business being on.',
  },
  {
    slug: 'wildlife',
    name: 'Wildlife',
    description: 'Patience, distance, and luck.',
  },
  {
    slug: 'travel',
    name: 'Travel',
    description: 'Places I went, framed through what I noticed there.',
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

  // SUNRISE / SUNSETS

  // STREET

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
  { slug: 'tr-varanasi-005', src: '/photos/travel/tr-varanasi-005.jpg', alt: 'Varanasi, 2018', category: 'travel', location: 'Varanasi', region: 'India' },
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
  { slug: 'tr-new-zealand-006', src: '/photos/travel/tr-new-zealand-006.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-007', src: '/photos/travel/tr-new-zealand-007.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-008', src: '/photos/travel/tr-new-zealand-008.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-009', src: '/photos/travel/tr-new-zealand-009.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International', featured: true },
  { slug: 'tr-new-zealand-010', src: '/photos/travel/tr-new-zealand-010.jpg', alt: 'New Zealand, 2014', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-prague-001', src: '/photos/travel/tr-prague-001.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-002', src: '/photos/travel/tr-prague-002.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-003', src: '/photos/travel/tr-prague-003.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-004', src: '/photos/travel/tr-prague-004.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-005', src: '/photos/travel/tr-prague-005.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-006', src: '/photos/travel/tr-prague-006.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-007', src: '/photos/travel/tr-prague-007.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International', featured: true },
  { slug: 'tr-prague-008', src: '/photos/travel/tr-prague-008.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-009', src: '/photos/travel/tr-prague-009.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International', featured: true },
  { slug: 'tr-prague-010', src: '/photos/travel/tr-prague-010.jpg', alt: 'Prague, 2020', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-switzerland-001', src: '/photos/travel/tr-switzerland-001.jpg', alt: 'Switzerland, 2020', category: 'travel', location: 'Switzerland', region: 'International', featured: true },
  { slug: 'tr-switzerland-002', src: '/photos/travel/tr-switzerland-002.jpg', alt: 'Switzerland, 2020', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-003', src: '/photos/travel/tr-switzerland-003.jpg', alt: 'Switzerland, 2020', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-004', src: '/photos/travel/tr-switzerland-004.jpg', alt: 'Switzerland, 2020', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-005', src: '/photos/travel/tr-switzerland-005.jpg', alt: 'Switzerland, 2020', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-006', src: '/photos/travel/tr-switzerland-006.jpg', alt: 'Switzerland, 2020', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-007', src: '/photos/travel/tr-switzerland-007.jpg', alt: 'Switzerland, 2020', category: 'travel', location: 'Switzerland', region: 'International', featured: true },
  { slug: 'tr-switzerland-008', src: '/photos/travel/tr-switzerland-008.jpg', alt: 'Switzerland, 2020', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-009', src: '/photos/travel/tr-switzerland-009.jpg', alt: 'Switzerland, 2020', category: 'travel', location: 'Switzerland', region: 'International' },
  { slug: 'tr-switzerland-010', src: '/photos/travel/tr-switzerland-010.jpg', alt: 'Switzerland, 2020', category: 'travel', location: 'Switzerland', region: 'International' },
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