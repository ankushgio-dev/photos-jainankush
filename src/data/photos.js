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
  { slug: 'gt-001', src: '/photos/golden-temple/gt-001.jpg', alt: 'The temple reflected at first light', category: 'golden-temple', featured: true },
  { slug: 'gt-002', src: '/photos/golden-temple/gt-002.jpg', alt: 'Pilgrim walking the parikrama', category: 'golden-temple' },
  { slug: 'gt-003', src: '/photos/golden-temple/gt-003.jpg', alt: 'Marble corridor at night', category: 'golden-temple' },

  // SUNRISE / SUNSETS
  { slug: 'ss-001', src: '/photos/sunrise-sunsets/ss-001.jpg', alt: 'Mustard field at first light', category: 'sunrise-sunsets', featured: true },
  { slug: 'ss-002', src: '/photos/sunrise-sunsets/ss-002.jpg', alt: 'Silhouetted trees against an orange sky', category: 'sunrise-sunsets' },
  { slug: 'ss-003', src: '/photos/sunrise-sunsets/ss-003.jpg', alt: 'Last light over a lake', category: 'sunrise-sunsets' },

  // STREET
  { slug: 'st-001', src: '/photos/street/st-001.jpg', alt: 'Shopkeeper through a window', category: 'street' },
  { slug: 'st-002', src: '/photos/street/st-002.jpg', alt: 'Boy on a bicycle, motion blur', category: 'street', featured: true },
  { slug: 'st-003', src: '/photos/street/st-003.jpg', alt: 'Two men sharing chai at a roadside stall', category: 'street' },

  // WILDLIFE
  { slug: 'wl-001', src: '/photos/wildlife/wl-001.jpg', alt: 'A heron at the edge of a wetland', category: 'wildlife' },
  { slug: 'wl-002', src: '/photos/wildlife/wl-002.jpg', alt: 'Peacock unfurling its feathers', category: 'wildlife', featured: true },
  { slug: 'wl-003', src: '/photos/wildlife/wl-003.jpg', alt: 'A kingfisher mid-dive', category: 'wildlife' },

  // TRAVEL — with locations for filter chips
  { slug: 'tr-goa-001', src: '/photos/travel/tr-goa-001.jpg', alt: 'Empty beach at low tide', category: 'travel', location: 'Goa', featured: true },
  { slug: 'tr-goa-002', src: '/photos/travel/tr-goa-002.jpg', alt: 'Fishing boats at dawn', category: 'travel', location: 'Goa' },
  { slug: 'tr-ladakh-001', src: '/photos/travel/tr-ladakh-001.jpg', alt: 'Pangong Lake under cloud shadow', category: 'travel', location: 'Ladakh', featured: true },
  { slug: 'tr-ladakh-002', src: '/photos/travel/tr-ladakh-002.jpg', alt: 'Monastery clinging to a cliff face', category: 'travel', location: 'Ladakh' },
  { slug: 'tr-ladakh-003', src: '/photos/travel/tr-ladakh-003.jpg', alt: 'Yak grazing at altitude', category: 'travel', location: 'Ladakh' },
  { slug: 'tr-spiti-001', src: '/photos/travel/tr-spiti-001.jpg', alt: 'Key Monastery from across the valley', category: 'travel', location: 'Spiti' },
  { slug: 'tr-spiti-002', src: '/photos/travel/tr-spiti-002.jpg', alt: 'Prayer flags against a blue sky', category: 'travel', location: 'Spiti' },
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
