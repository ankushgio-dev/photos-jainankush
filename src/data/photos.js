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
    description: 'Wherever the road took me.',
  },
];

// Placeholder photos — replace these with real entries via scripts/upload.mjs
// once you have photos in R2 or /public/photos.
export const photos = [
// RURAL PUNJAB
  { slug: 'rp-015', src: '/photos/rural-punjab/rp-015.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-016', src: '/photos/rural-punjab/rp-016.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-017', src: '/photos/rural-punjab/rp-017.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-018', src: '/photos/rural-punjab/rp-018.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-019', src: '/photos/rural-punjab/rp-019.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-020', src: '/photos/rural-punjab/rp-020.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-021', src: '/photos/rural-punjab/rp-021.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-022', src: '/photos/rural-punjab/rp-022.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-023', src: '/photos/rural-punjab/rp-023.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },
  { slug: 'rp-024', src: '/photos/rural-punjab/rp-024.jpg', alt: 'TODO describe this photograph', category: 'rural-punjab', featured: true },



  // GOLDEN TEMPLE

  // SUNRISE / SUNSETS

  // STREET

  // WILDLIFE

  // TRAVEL — with locations for filter chips
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
