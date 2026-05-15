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
  { slug: 'rp-015', src: '/photos/rural-punjab/rp-015.jpg', alt: 'Shepherd watering his dye-marked flock at a village pond near Doraha', category: 'rural-punjab', featured: true },
  { slug: 'rp-016', src: '/photos/rural-punjab/rp-016.jpg', alt: 'Farmers loading a fodder cart at dusk near Ladian, low sun through poplars', category: 'rural-punjab' },
  { slug: 'rp-017', src: '/photos/rural-punjab/rp-017.jpg', alt: 'Nihang rider standing astride two galloping horses at Kila Raipur Rural Games', category: 'rural-punjab', featured: true },
  { slug: 'rp-018', src: '/photos/rural-punjab/rp-018.jpg', alt: 'Villagers building a stone causeway over the Satluj near Khaira Bet', category: 'rural-punjab' },
  { slug: 'rp-019', src: '/photos/rural-punjab/rp-019.jpg', alt: 'Wooden boat moored on the Satluj at Khaira Bet at sunrise', category: 'rural-punjab' },
  { slug: 'rp-020', src: '/photos/rural-punjab/rp-020.jpg', alt: 'Wrestlers grappling in a mud akhara at Alamgir, young boys sparring beside them', category: 'rural-punjab' },
  { slug: 'rp-021', src: '/photos/rural-punjab/rp-021.jpg', alt: 'Elderly Sikh man walking a fog-shrouded road near Birmi village in winter', category: 'rural-punjab' },
  { slug: 'rp-022', src: '/photos/rural-punjab/rp-022.jpg', alt: 'Two figures walking a muddy path between paddy fields along the Ludhiana–Ladowal bypass', category: 'rural-punjab' },
  { slug: 'rp-023', src: '/photos/rural-punjab/rp-023.jpg', alt: 'Gujjar dera with resting buffaloes beside the Satluj at Khaira Bet, misty morning', category: 'rural-punjab', featured: true },
  { slug: 'rp-024', src: '/photos/rural-punjab/rp-024.jpg', alt: 'Workers loading fodder onto a tractor trailer at sunset near Ladian', category: 'rural-punjab' },

  // GOLDEN TEMPLE
  { slug: 'gt-001', src: '/photos/golden-temple/gt-001.jpg', alt: 'Harmandir Sahib and the clock tower reflected in the sarovar at sunset', category: 'golden-temple' },
  { slug: 'gt-002', src: '/photos/golden-temple/gt-002.jpg', alt: 'Panorama of Harmandir Sahib across the sarovar at sunset', category: 'golden-temple' },
  { slug: 'gt-003', src: '/photos/golden-temple/gt-003.jpg', alt: 'Pilgrims at the parikrama, Harmandir Sahib framed by an archway at sunset', category: 'golden-temple' },
  { slug: 'gt-004', src: '/photos/golden-temple/gt-004.jpg', alt: 'Sikh sevadar with a staff gazing at Harmandir Sahib from the marble parikrama', category: 'golden-temple' },
  { slug: 'gt-005', src: '/photos/golden-temple/gt-005.jpg', alt: 'A devotee kneels in prayer on the parikrama as visitors pass', category: 'golden-temple' },
  { slug: 'gt-006', src: '/photos/golden-temple/gt-006.jpg', alt: 'Long-exposure dusk view of the lit Harmandir Sahib reflected in still water', category: 'golden-temple' },
  { slug: 'gt-007', src: '/photos/golden-temple/gt-007.jpg', alt: 'Sun starburst and crowd silhouettes seen through the Darshani Deori arch', category: 'golden-temple' },
  { slug: 'gt-008', src: '/photos/golden-temple/gt-008.jpg', alt: 'Women lighting rows of diyas at the sarovar edge on Guru Nanak Parkash Utsav', category: 'golden-temple' },
  { slug: 'gt-009', src: '/photos/golden-temple/gt-009.jpg', alt: 'A hand lighting rows of clay diyas beside the lit temple on Gurpurab night', category: 'golden-temple' },
  { slug: 'gt-010', src: '/photos/golden-temple/gt-010.jpg', alt: 'Ornamental diya candelabra at the sarovar edge on Gurpurab, lit temple beyond', category: 'golden-temple' },
  { slug: 'gt-011', src: '/photos/golden-temple/gt-011.jpg', alt: 'Fireworks burst over Harmandir Sahib on Gurpurab as crowds watch from the parikrama', category: 'golden-temple' },
  { slug: 'gt-012', src: '/photos/golden-temple/gt-012.jpg', alt: 'Sevadar in saffron turban watching dawn break over Harmandir Sahib', category: 'golden-temple', featured: true },

  // GOLDEN HOUR
  { slug: 'gh-001', src: '/photos/golden-hour/gh-001.jpg', alt: 'Sunset through the arches of Serai Lashkari Khan, a crumbling Mughal-era serai', category: 'golden-hour' },
  { slug: 'gh-002', src: '/photos/golden-hour/gh-002.jpg', alt: 'Gujjar at his morning chores outside the dera, village Deatwal, dramatic dawn sky', category: 'golden-hour' },
  { slug: 'gh-003', src: '/photos/golden-hour/gh-003.jpg', alt: 'Trees silhouetted against an orange winter sunrise on the PAU campus, Ludhiana', category: 'golden-hour' },
  { slug: 'gh-004', src: '/photos/golden-hour/gh-004.jpg', alt: 'Lone boatman on the Satluj at Khaira Bet at sunset', category: 'golden-hour' },
  { slug: 'gh-005', src: '/photos/golden-hour/gh-005.jpg', alt: 'Taj Mahal framed by the great gateway arch on a March sunrise', category: 'golden-hour', featured: true },
  { slug: 'gh-006', src: '/photos/golden-hour/gh-006.jpg', alt: 'Wooden boats moored on the Satluj at sunrise, misty bank', category: 'golden-hour' },
  { slug: 'gh-007', src: '/photos/golden-hour/gh-007.jpg', alt: 'Sun rising beside a banyan tree above misted fields, village Barewal', category: 'golden-hour' },
  { slug: 'gh-008', src: '/photos/golden-hour/gh-008.jpg', alt: 'Kite in flight at dusk over the stony banks of the Satluj near Ludhiana', category: 'golden-hour', featured: true },
  { slug: 'gh-009', src: '/photos/golden-hour/gh-009.jpg', alt: 'Sun rays bursting over a paddy field as a motorcyclist passes a lone tree, village Ladian', category: 'golden-hour' },
  { slug: 'gh-010', src: '/photos/golden-hour/gh-010.jpg', alt: 'Cars parked at a hill-road overlook near Parwanoo, sun dropping behind a truck', category: 'golden-hour' },
  { slug: 'gh-011', src: '/photos/golden-hour/gh-011.jpg', alt: 'Light trails curving along the Kalka–Shimla highway at dusk', category: 'golden-hour' },
  { slug: 'gh-012', src: '/photos/golden-hour/gh-012.jpg', alt: 'Tractor and trailer parked on a green field at sunset, village Issewal', category: 'golden-hour' },
  { slug: 'gh-013', src: '/photos/golden-hour/gh-013.jpg', alt: 'Two figures walking toward the rising sun past a barbed-wire fence, village Barewal', category: 'golden-hour' },
  { slug: 'gh-014', src: '/photos/golden-hour/gh-014.jpg', alt: 'Crepuscular rays over a freshly-tilled field at dawn, along the South City bypass near Jainpur', category: 'golden-hour' },
  { slug: 'gh-015', src: '/photos/golden-hour/gh-015.jpg', alt: 'Jain temple at Mahaveer Enclave silhouetted against a sunset sky, Ludhiana', category: 'golden-hour' },
  { slug: 'gh-016', src: '/photos/golden-hour/gh-016.jpg', alt: 'ISKCON temple at dawn over a paddy field, apartments rising on the horizon, South City Ludhiana', category: 'golden-hour' },
  { slug: 'gh-017', src: '/photos/golden-hour/gh-017.jpg', alt: 'Touring bicycle leant against a roadside wall at sunrise, open fields near Jainpur', category: 'golden-hour' },
  { slug: 'gh-018', src: '/photos/golden-hour/gh-018.jpg', alt: 'Painted Tata truck on a wet road reflecting an orange sunset, by the canal in South City Ludhiana', category: 'golden-hour' },
  { slug: 'gh-019', src: '/photos/golden-hour/gh-019.jpg', alt: 'Storm clouds rolling over a green field at sunrise near Jainpur', category: 'golden-hour' },
  { slug: 'gh-020', src: '/photos/golden-hour/gh-020.jpg', alt: 'Rainy windshield view along Canal Road at dusk, Ludhiana', category: 'golden-hour' },
  { slug: 'gh-021', src: '/photos/golden-hour/gh-021.jpg', alt: 'Lone tree on a country road under streaked twilight clouds, village Ladian', category: 'golden-hour' },
  { slug: 'gh-022', src: '/photos/golden-hour/gh-022.jpg', alt: 'Elderly man walking across a foggy field at sunrise, village Barewal', category: 'golden-hour' },




  // STREET
  { slug: 'st-001', src: '/photos/street/st-001.jpg', alt: 'Gujjar milking a buffalo at sunrise near village Deatwal, Ludhiana', category: 'street' },
  { slug: 'st-002', src: '/photos/street/st-002.jpg', alt: "Potter's clay-stained hands shaping a tall pot on the wheel, Sobha Singh Art Gallery, Palampur", category: 'street' },
  { slug: 'st-003', src: '/photos/street/st-003.jpg', alt: 'Three men hunched over a board game on a stone verandah in Spiti, onlookers resting beside them', category: 'street' },
  { slug: 'st-004', src: '/photos/street/st-004.jpg', alt: 'Wet cobblestone street reflecting shopfronts after rain, Queenstown', category: 'street' },
  { slug: 'st-005', src: '/photos/street/st-005.jpg', alt: 'Elderly Sikh man inside a tin-walled tea stall by the canal, South City Ludhiana', category: 'street' },
  { slug: 'st-006', src: '/photos/street/st-006.jpg', alt: 'Indigo blue door and barred window set into a pink-washed Vrindavan facade', category: 'street' },
  { slug: 'st-007', src: '/photos/street/st-007.jpg', alt: 'Window dresser on a tall ladder fitting out a shopfront in Montreal', category: 'street' },
  { slug: 'st-008', src: '/photos/street/st-008.jpg', alt: 'Motion-blurred train pulling in as a passenger waves from the platform, Ludhiana Junction', category: 'street' },
  { slug: 'st-009', src: '/photos/street/st-009.jpg', alt: 'Vendor frying malpua in a huge kadhai, Pushkar', category: 'street' },
  { slug: 'st-010', src: '/photos/street/st-010.jpg', alt: 'Young boy bathing a buffalo in a backlit alley at Malakpur Bet, woman watching from a doorway', category: 'street' },
  { slug: 'st-011', src: '/photos/street/st-011.jpg', alt: 'Young wrestler quenching his thirst at a street tap after a bout at Alamgir akhara', category: 'street' },
  { slug: 'st-012', src: '/photos/street/st-012.jpg', alt: 'Sadhu in a saffron dhoti walking the stone flagstones beside two passersby, Varanasi', category: 'street' },
  { slug: 'st-013', src: '/photos/street/st-013.jpg', alt: 'Worker stirring a steaming cauldron of milk for a street sweet in a Varanasi alley', category: 'street', featured: true },
  { slug: 'st-014', src: '/photos/street/st-014.jpg', alt: 'Bodybuilder flexing at a stone ghat in Varanasi, marigold offerings floating on the water', category: 'street' },
  { slug: 'st-015', src: '/photos/street/st-015.jpg', alt: 'Couple sheltering under a cloth on rainy Sua Road near Barewal, woman carrying a baby', category: 'street' },
  { slug: 'st-016', src: '/photos/street/st-016.jpg', alt: 'Woman beside a wood fire at dusk at a Gujjar camp, Mahaveer Enclave, Barewal', category: 'street', featured: true },
  { slug: 'st-017', src: '/photos/street/st-017.jpg', alt: 'Labourer in a checked turban with a steel cup of tea, near the banks of the Satluj at Khaira Bet', category: 'street' },
  { slug: 'st-018', src: '/photos/street/st-018.jpg', alt: 'Yellow Ambassador taxi on an arty cafe lane in Kolkata, painted shutters lining the street', category: 'street' },
  { slug: 'st-019', src: '/photos/street/st-019.jpg', alt: 'Night reflection of an elderly Sikh man amid bazaar crowds, Heritage Street Amritsar', category: 'street' },
  { slug: 'st-020', src: '/photos/street/st-020.jpg', alt: 'Vendor frying jalebis in a black kadhai on the street, Amritsar', category: 'street' },

  // WILDLIFE
  { slug: 'wl-001', src: '/photos/wildlife/wl-001.jpg', alt: 'Bengal tiger walking a rocky riverbank at Ranthambore, reflection in the still water below', category: 'wildlife' },
  { slug: 'wl-002', src: '/photos/wildlife/wl-002.jpg', alt: 'Painted stork fishing at the water’s edge beside a basking marsh crocodile, Ranthambore', category: 'wildlife', featured: true },
  { slug: 'wl-003', src: '/photos/wildlife/wl-003.jpg', alt: 'Portrait of a woolly-necked stork with its bill open against soft golden grassland, Ranthambore', category: 'wildlife' },
  { slug: 'wl-004', src: '/photos/wildlife/wl-004.jpg', alt: 'Indian peafowl strolling a leaf-strewn forest track at Ranthambore', category: 'wildlife' },
  { slug: 'wl-005', src: '/photos/wildlife/wl-005.jpg', alt: 'Tiger emerging from dry forest at Ranthambore, partially screened by tree trunks and undergrowth', category: 'wildlife' },
  { slug: 'wl-006', src: '/photos/wildlife/wl-006.jpg', alt: 'Tight portrait of a Bengal tiger walking straight toward the camera, Ranthambore', category: 'wildlife' },
  { slug: 'wl-007', src: '/photos/wildlife/wl-007.jpg', alt: 'Indian peacock perched on a tree at Ranthambore, long iridescent train cascading down the trunk', category: 'wildlife' },
  { slug: 'wl-008', src: '/photos/wildlife/wl-008.jpg', alt: 'Tiger licking its nose mid-stride on a leaf-strewn forest floor, Ranthambore', category: 'wildlife' },
  { slug: 'wl-009', src: '/photos/wildlife/wl-009.jpg', alt: 'Tiger crossing the safari track in front of a parked gypsy at Ranthambore', category: 'wildlife' },
  { slug: 'wl-010', src: '/photos/wildlife/wl-010.jpg', alt: 'Tiger padding down a paved jungle road past a bilingual “Do not get down from the vehicle” warning sign, Ranthambore', category: 'wildlife', featured: true },
  { slug: 'wl-011', src: '/photos/wildlife/wl-011.jpg', alt: 'Tiger barely visible through a screen of bare branches and boulders, Ranthambore', category: 'wildlife' },
  { slug: 'wl-012', src: '/photos/wildlife/wl-012.jpg', alt: 'Spotted owlet peering out from a hollow in a ghost-tree at Ranthambore', category: 'wildlife' },
  { slug: 'wl-013', src: '/photos/wildlife/wl-013.jpg', alt: 'Brown fish owl perched on a low branch under dappled canopy light, Ranthambore', category: 'wildlife' },
  { slug: 'wl-014', src: '/photos/wildlife/wl-014.jpg', alt: 'Rufous treepie calling from a thorny branch, soft grassland behind, Ranthambore', category: 'wildlife' },

  // TRAVEL — INDIA
  { slug: 'tr-spiti-001', src: '/photos/travel/tr-spiti-001.jpg', alt: 'Two travellers on a green ridge at Rohtang as clouds surge around the snow peaks', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-002', src: '/photos/travel/tr-spiti-002.jpg', alt: 'Innova parked at Rohtang, a cloud-wrapped peak rising behind', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-003', src: '/photos/travel/tr-spiti-003.jpg', alt: 'Long-exposure of Pagal Nullah falls along the Manali–Spiti road', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-004', src: '/photos/travel/tr-spiti-004.jpg', alt: 'Two SUVs reflected in a roadside puddle near Kaza, brown hills all around', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-005', src: '/photos/travel/tr-spiti-005.jpg', alt: 'The Spiti river snaking through the valley near Kaza', category: 'travel', location: 'Spiti', region: 'India', featured: true },
  { slug: 'tr-spiti-006', src: '/photos/travel/tr-spiti-006.jpg', alt: 'Lone figure beside a roadside chorten at sunset near Kaza, sky mirrored in a puddle', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-007', src: '/photos/travel/tr-spiti-007.jpg', alt: 'Key Monastery clinging to its hilltop above the valley road', category: 'travel', location: 'Spiti', region: 'India', featured: true },
  { slug: 'tr-spiti-008', src: '/photos/travel/tr-spiti-008.jpg', alt: 'Big sky and shifting clouds over Kaza at dusk', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-009', src: '/photos/travel/tr-spiti-009.jpg', alt: 'The Spiti river winding through the valley between brown ridges', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-spiti-010', src: '/photos/travel/tr-spiti-010.jpg', alt: 'Three trekkers on a barren hillside trail near Chandratal under huge clouds', category: 'travel', location: 'Spiti', region: 'India' },
  { slug: 'tr-ladakh-001', src: '/photos/travel/tr-ladakh-001.jpg', alt: 'Long-exposure of the Bhaga river running past stone village houses in Jispa, golden light on the cliff above', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-002', src: '/photos/travel/tr-ladakh-002.jpg', alt: 'Lone stone hut on a high pass near Baralacha, snow peaks rolling behind', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-003', src: '/photos/travel/tr-ladakh-003.jpg', alt: 'Stakna monastery silhouetted on its mound at sunset, the Indus winding past', category: 'travel', location: 'Ladakh', region: 'India', featured: true },
  { slug: 'tr-ladakh-004', src: '/photos/travel/tr-ladakh-004.jpg', alt: 'Wide panorama of the painted courtyard galleries at Hemis monastery', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-005', src: '/photos/travel/tr-ladakh-005.jpg', alt: 'Night view of Leh with the palace above and light trails through the bazaar below', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-006', src: '/photos/travel/tr-ladakh-006.jpg', alt: 'Self-portrait beside the still waters of Tso Moriri under streaked long-exposure clouds', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-007', src: '/photos/travel/tr-ladakh-007.jpg', alt: 'A caravan of cars and travellers stopped on the wide Tso Kar plains, snow peak in the distance', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-008', src: '/photos/travel/tr-ladakh-008.jpg', alt: 'Sheep herd traced in long zigzag lines across a barren Changthang slope near Tso Moriri, shepherd at the centre', category: 'travel', location: 'Ladakh', region: 'India', featured: true },
  { slug: 'tr-ladakh-009', src: '/photos/travel/tr-ladakh-009.jpg', alt: 'Three young monks in maroon robes climbing stairs against a textured wall, Changthang', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-ladakh-010', src: '/photos/travel/tr-ladakh-010.jpg', alt: 'Doorway from inside an old cell at Shey Palace looking out to the Indus valley', category: 'travel', location: 'Ladakh', region: 'India' },
  { slug: 'tr-varanasi-001', src: '/photos/travel/tr-varanasi-001.jpg', alt: 'Black-and-white of an elderly man sitting small against the layered stone wall of a Varanasi ghat, a tin cup beside him', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-002', src: '/photos/travel/tr-varanasi-002.jpg', alt: 'Pandit holding a tiered diya lamp at the Ganga aarti, Dashashwamedh Ghat', category: 'travel', location: 'Varanasi', region: 'India', featured: true },
  { slug: 'tr-varanasi-003', src: '/photos/travel/tr-varanasi-003.jpg', alt: 'Selective colour: a red boat on the Ganga as seagulls swirl around it, ghats receding in monochrome behind', category: 'travel', location: 'Varanasi', region: 'India', featured: true },
  { slug: 'tr-varanasi-004', src: '/photos/travel/tr-varanasi-004.jpg', alt: 'Black-and-white of a woman carrying a basket on her head through a narrow Varanasi alley, light shaft cutting the smoke', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-005', src: '/photos/travel/tr-varanasi-005.jpg', alt: 'A wall-mounted mirror at an open-air barber stall in Varanasi reflects a customer mid-shave with the ghat crowds behind, while missing-person flyers and a Music Festival poster paper the wall beside it', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-006', src: '/photos/travel/tr-varanasi-006.jpg', alt: 'Boats moored at Guleria Ghat at sunrise, orange clouds spreading over the Ganga', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-007', src: '/photos/travel/tr-varanasi-007.jpg', alt: 'Travellers climbing stone stairs in the ochre-walled street by Guleria Kothi, Varanasi', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-008', src: '/photos/travel/tr-varanasi-008.jpg', alt: 'Young boatman standing on his prow, waiting to take guests on a Ganga cruise, Varanasi', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-009', src: '/photos/travel/tr-varanasi-009.jpg', alt: 'A father holding his small son for a holy dip in the Ganga, marigold offerings floating beside them', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-010', src: '/photos/travel/tr-varanasi-010.jpg', alt: 'A sadhu in a white shawl meditating on a stone step at the ghat, offerings beside him', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-011', src: '/photos/travel/tr-varanasi-011.jpg', alt: 'Misty winter dawn at Guleria Ghat, red-flagged boats moored to a yellow walkway', category: 'travel', location: 'Varanasi', region: 'India' },
  { slug: 'tr-varanasi-012', src: '/photos/travel/tr-varanasi-012.jpg', alt: 'Wide misty morning view of the Varanasi ghats, a lone rowboat drifting in the foreground', category: 'travel', location: 'Varanasi', region: 'India' },
  // TRAVEL — INTERNATIONAL
  { slug: 'tr-canada-001', src: '/photos/travel/tr-canada-001.jpg', alt: 'Stained glass window and gothic arch inside the Library of Parliament, Ottawa', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-002', src: '/photos/travel/tr-canada-002.jpg', alt: 'A lone visitor before the East Block of Parliament Hill, Ottawa, on a cloudy day', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-003', src: '/photos/travel/tr-canada-003.jpg', alt: 'Long-exposure of the Ottawa skyline across the river, Parliament and the Peace Tower under streaked clouds', category: 'travel', location: 'Canada', region: 'International', featured: true },
  { slug: 'tr-canada-004', src: '/photos/travel/tr-canada-004.jpg', alt: 'Lone visitor walking the aisle of Notre-Dame Cathedral Basilica, Ottawa, starry blue vaulted ceiling above', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-005', src: '/photos/travel/tr-canada-005.jpg', alt: 'A little cabin tucked among autumn-coloured trees on a forest path, Gatineau Park', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-006', src: '/photos/travel/tr-canada-006.jpg', alt: 'Pastel sunset over Parliament Hill across the Ottawa river, Alexandra Bridge to the left', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-007', src: '/photos/travel/tr-canada-007.jpg', alt: 'Couple walking a dog down a quiet country road in peak autumn colour, Gatineau Park', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-008', src: '/photos/travel/tr-canada-008.jpg', alt: 'Niagara Falls lit red, white and blue at night, the city skyline glowing behind', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-009', src: '/photos/travel/tr-canada-009.jpg', alt: 'An older couple resting on a bench looking out over Lake Ontario at Niagara-on-the-Lake', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-canada-010', src: '/photos/travel/tr-canada-010.jpg', alt: 'Inside Notre-Dame Basilica, Montreal — gold-and-blue vaulted altar, visitors blurred in long exposure', category: 'travel', location: 'Canada', region: 'International' },
  { slug: 'tr-new-zealand-001', src: '/photos/travel/tr-new-zealand-001.jpg', alt: 'The Mill cottage and stone bridge at Hobbiton, thatched roof and waterwheel mirrored in the pond', category: 'travel', location: 'New Zealand', region: 'International', featured: true },
  { slug: 'tr-new-zealand-002', src: '/photos/travel/tr-new-zealand-002.jpg', alt: 'Lone tree by a curving country road through rolling green pastures, Paihia in the Bay of Islands', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-003', src: '/photos/travel/tr-new-zealand-003.jpg', alt: 'Sunset over the Kaikoura coast, mossy boulders in the foreground and snow peaks beyond', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-004', src: '/photos/travel/tr-new-zealand-004.jpg', alt: 'Snow-dusted road through orange beech forest on the alpine route from Kaikoura to Queenstown', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-005', src: '/photos/travel/tr-new-zealand-005.jpg', alt: 'Empty highway leading into a cloud-wreathed snowy valley, alpine route from Kaikoura to Queenstown', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-006', src: '/photos/travel/tr-new-zealand-006.jpg', alt: 'Sunrise at Kaikoura beach — a weathered driftwood log in the foreground, scattered clouds catching gold over the bay and a low headland on the right', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-007', src: '/photos/travel/tr-new-zealand-007.jpg', alt: 'Two travellers on the Skyline viewing platform above Lake Wakatipu under heavy storm clouds, Queenstown', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-008', src: '/photos/travel/tr-new-zealand-008.jpg', alt: 'Empty wet road curving through lush green bush, somewhere on the road to Milford Sound', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-new-zealand-009', src: '/photos/travel/tr-new-zealand-009.jpg', alt: 'Family sledging down a snowy slope at Coronet Peak near Queenstown', category: 'travel', location: 'New Zealand', region: 'International', featured: true },
  { slug: 'tr-new-zealand-010', src: '/photos/travel/tr-new-zealand-010.jpg', alt: 'Watching the sunset with my wife from a hilltop near Queenstown, rolling valley below', category: 'travel', location: 'New Zealand', region: 'International' },
  { slug: 'tr-prague-001', src: '/photos/travel/tr-prague-001.jpg', alt: 'Tram light-trail rushing through Malá Strana at blue hour, baroque facades lining the cobblestone street', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-002', src: '/photos/travel/tr-prague-002.jpg', alt: 'Old Town Bridge Tower of Charles Bridge framing distant figures in its gothic arch', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-003', src: '/photos/travel/tr-prague-003.jpg', alt: 'A family crossing a cobblestone Prague square at sunset', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-004', src: '/photos/travel/tr-prague-004.jpg', alt: 'Prague’s Old Town Square at night — the twin Gothic spires of the Týn Church rising behind the warmly lit baroque facades, cobblestones glowing under the lamps', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-005', src: '/photos/travel/tr-prague-005.jpg', alt: 'Lesser Town Bridge Tower archway opening onto Mostecká street, one figure walking through in golden light', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-006', src: '/photos/travel/tr-prague-006.jpg', alt: 'Sunrise from Charles Bridge, lampposts and the Old Town skyline silhouetted against the rising sun', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-007', src: '/photos/travel/tr-prague-007.jpg', alt: 'Upside-down puddle reflection of Wenceslas Square, the National Museum dome at the far end', category: 'travel', location: 'Prague', region: 'International', featured: true },
  { slug: 'tr-prague-008', src: '/photos/travel/tr-prague-008.jpg', alt: 'Schwarzenberg Palace with its sgraffito facade rising over Hradčanské náměstí at sunset', category: 'travel', location: 'Prague', region: 'International' },
  { slug: 'tr-prague-009', src: '/photos/travel/tr-prague-009.jpg', alt: 'Lone figure with a red umbrella in Old Town Square, the Old Town Hall tower rising under a grey sky', category: 'travel', location: 'Prague', region: 'International', featured: true },
  { slug: 'tr-prague-010', src: '/photos/travel/tr-prague-010.jpg', alt: 'Charles Bridge and the Old Town spires from across the Vltava at dusk, crescent moon rising overhead', category: 'travel', location: 'Prague', region: 'International' },
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