// Photo manifest — single source of truth for the entire site.
// Each photo entry: { slug, src, alt, category, location?, featured? }
// `location` only applies to category === 'travel' for filter chips.
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

export const photos = [
  // RURAL PUNJAB
  { slug: 'rp-015', src: '/photos/rural-punjab/rp-015.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-016', src: '/photos/rural-punjab/rp-016.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab' },
  { slug: 'rp-017', src: '/photos/rural-punjab/rp-017.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-018', src: '/photos/rural-punjab/rp-018.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab' },
  { slug: 'rp-019', src: '/photos/rural-punjab/rp-019.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab' },
  { slug: 'rp-020', src: '/photos/rural-punjab/rp-020.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab' },
  { slug: 'rp-021', src: '/photos/rural-punjab/rp-021.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab' },
  { slug: 'rp-022', src: '/photos/rural-punjab/rp-022.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab' },
  { slug: 'rp-023', src: '/photos/rural-punjab/rp-023.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-024', src: '/photos/rural-punjab/rp-024.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab' },

  // GOLDEN TEMPLE

  // SUNRISE / SUNSETS

  // STREET

  // WILDLIFE

  // TRAVEL — with locations for filter chips
  { slug: 'tr-spiti-001', src: '/photos/travel/tr-spiti-001.jpg', alt: 'A mountain ridge wreathed in low clouds, peaks emerging through the mist', category: 'travel', location: 'Spiti' },
  { slug: 'tr-spiti-002', src: '/photos/travel/tr-spiti-002.jpg', alt: 'A narrow road cut into a cliff face dropping sharply to a valley below', category: 'travel', location: 'Spiti' },
  { slug: 'tr-spiti-003', src: '/photos/travel/tr-spiti-003.jpg', alt: 'A thin waterfall cascading down a sheer rock face onto scree below', category: 'travel', location: 'Spiti' },
  { slug: 'tr-spiti-004', src: '/photos/travel/tr-spiti-004.jpg', alt: 'An empty dirt road winding through a barren high-altitude landscape', category: 'travel', location: 'Spiti' },
  { slug: 'tr-spiti-005', src: '/photos/travel/tr-spiti-005.jpg', alt: 'The Spiti river winding between glacial peaks under a wide sky', category: 'travel', location: 'Spiti', featured: true },
  { slug: 'tr-spiti-006', src: '/photos/travel/tr-spiti-006.jpg', alt: 'A mountain sunset, the sky banded orange and violet over dark ridgelines', category: 'travel', location: 'Spiti' },
  { slug: 'tr-spiti-007', src: '/photos/travel/tr-spiti-007.jpg', alt: 'A whitewashed Buddhist monastery perched on a ridge above the valley', category: 'travel', location: 'Spiti', featured: true },
  { slug: 'tr-spiti-008', src: '/photos/travel/tr-spiti-008.jpg', alt: 'A small village settled in a valley floor, ringed by bare brown hills', category: 'travel', location: 'Spiti' },
  { slug: 'tr-spiti-009', src: '/photos/travel/tr-spiti-009.jpg', alt: 'A dirt road switchbacking up the side of a steep mountain', category: 'travel', location: 'Spiti' },
  { slug: 'tr-spiti-010', src: '/photos/travel/tr-spiti-010.jpg', alt: 'Three figures walking together across an open mountain landscape', category: 'travel', location: 'Spiti' },
];

// Helpers
export function photosByCategory(slug) {
  return photos.filter((p) => p.category === slug);
}

export function featuredPhotos() {
  return photos.filter((p) => p.featured);
}

export function categoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function travelLocations() {
  const set = new Set(
    photos.filter((p) => p.category === 'travel' && p.location).map((p) => p.location)
  );
  return Array.from(set).sort();
}

export function categoryCoverPhoto(slug) {
  // Returns first featured photo from category, or first photo if none featured.
  const cat = photosByCategory(slug);
  return cat.find((p) => p.featured) || cat[0];
}