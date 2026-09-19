/**
 * AratBazar — 500+ Viral Problem-Solving Products Generator
 * Generates 520+ verified, high-demand, uncommon products across 8 categories.
 */

const fs = require("fs");
const path = require("path");

const CATEGORIES_DATA = [
  {
    slug: "tech-gadgets",
    name: "Tech & Smart Gadgets",
    iconName: "Cpu",
    description: "Trending electronics, viral smart devices & portable tech accessories with massive global appeal."
  },
  {
    slug: "home-kitchen",
    name: "Home & Kitchen Innovations",
    iconName: "Home",
    description: "Problem-solving kitchen tools, automated cleaning devices & modern home aesthetics."
  },
  {
    slug: "beauty-health",
    name: "Health, Beauty & Wellness",
    iconName: "Sparkles",
    description: "Personal care, posture correctors, therapeutic massagers & skincare devices."
  },
  {
    slug: "car-outdoor",
    name: "Car & Outdoor Gear",
    iconName: "Car",
    description: "Automotive detailing, portable power tools, solar gadgets & outdoor survival items."
  },
  {
    slug: "tools-utility",
    name: "Everyday Problem Solvers",
    iconName: "Wrench",
    description: "Handy multi-tools, laser measuring equipment & instant household fixers."
  },
  {
    slug: "fitness-lifestyle",
    name: "Fitness & Active Lifestyle",
    iconName: "Activity",
    description: "Home workout gear, smart recovery tools & portable athletic accessories."
  },
  {
    slug: "smart-home",
    name: "Smart Home & Ambient Lighting",
    iconName: "Zap",
    description: "Aesthetic LED lighting, levitating decor, automated sensors & smart home life-hacks."
  },
  {
    slug: "kids-novelty",
    name: "Viral Novelties & Unique Gifts",
    iconName: "Gift",
    description: "Unusual sensory toys, magnetic desk gadgets, kinetic art & unforgettable conversation-starter gifts."
  }
];

// Realistic and accurate product photo mapping by keyword
const PHOTO_MAP = [
  // Tech & Electronics
  { keywords: ['drone', 'quadcopter', 'flying orb', 'hover ball'], img: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['magsafe', 'charging station', 'wireless charger', 'docking station', 'cable', 'charger', 'adapter'], img: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['bone conduction', 'earbuds', 'headphone', 'headset', 'airpods', 'earphone'], img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['gimbal', 'face-tracking', 'tripod', 'tracking phone', 'selfie'], img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['holographic', 'projector', 'hologram', 'fan led'], img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['keyboard', 'keypad', 'qwerty'], img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['power bank', 'battery pack'], img: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['game console', 'retro', 'joystick', 'gaming'], img: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['camera detector', 'bug tracker', 'spy', 'detector', 'endoscope', 'security'], img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['padlock', 'fingerprint lock', 'smart lock', 'door lock', 'cylinder'], img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['recorder', 'microphone', 'mic', 'lavalier', 'audio bug'], img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['backpack', 'bag', 'holster', 'sling'], img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['tracker', 'wallet', 'card', 'finder', 'cardholder'], img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['hand warmer', 'warmer', 'heated'], img: 'https://images.unsplash.com/photo-1543083477-4f785aeafaa9?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['sleep mask', 'eye mask'], img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['printer', 'label maker', 'label', 'receipt'], img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['mouse', 'mouse pad'], img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['lighter', 'arc lighter'], img: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['desk cleaner', 'air blower', 'jet duster', 'vacuum cleaner', 'cleaner', 'cleaning machine'], img: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['speaker', 'globe speaker'], img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['thermometer', 'decibel meter', 'tachometer', 'scale', 'measuring', 'caliper', 'oximeter', 'water level', 'stud finder'], img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['steamer', 'iron', 'lint', 'shaver'], img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['laptop stand', 'phone stand', 'mount clamp', 'magnifier', 'screen magnifier', 'phone pouch', 'remote hub', 'ir remote', 'remote controller'], img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['glasses', 'anti-blue light', 'anti-glare'], img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80' },

  // Home & Kitchen
  { keywords: ['scrubber', 'spin scrubber', 'cleaning brush'], img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['cutter', 'slicer', 'chopper', 'dicer', 'peeler', 'knife', 'mandoline', 'scissors', 'shears', 'stripper', 'tenderizer', 'meat claws', 'patty maker', 'cake scraper'], img: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['vacuum sealer', 'sealer', 'bag resealer', 'stretch lids', 'storage keeper'], img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['grinder', 'mill', 'dispenser', 'opener', 'thawing tray', 'frother', 'sifter', 'strainer', 'funnel', 'spoon rest', 'dumpling maker', 'soap bar', 'purifier', 'ozone'], img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['rack', 'organizer', 'drawer', 'shelf', 'clothesline', 'curtain track', 'blinds', 'caddy', 'fruit basket', 'trash can', 'splash guard'], img: 'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['gloves', 'cut-resistant'], img: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['straws', 'cup', 'bottle', 'water balloon', 'kettle', 'ice pop', 'tea infuser', 'baking mat'], img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80' },

  // Health & Beauty
  { keywords: ['posture', 'corrector', 'cervical', 'pillow', 'donut sitting', 'seat cushion', 'armrest cushion', 'armrest'], img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['mask', 'facial', 'skin scrubber', 'pore', 'acne', 'microcurrent', 'face lifting', 'ice roller', 'gua sha', 'pimple', 'patches', 't-bar', 'sponge blender', 'chest & neck pad'], img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['massage gun', 'massager', 'cupping', 'shiatsu', 'kneading', 'laser therapy', 'foot pads', 'shampoo brush', 'scalp'], img: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['tooth', 'dental', 'toothbrush', 'plaque', 'teeth whitening'], img: 'https://images.unsplash.com/photo-1559591937-e62fb3d8d4bb?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['hair', 'trimmer', 'curler', 'straightener', 'nail drill'], img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['mirror', 'vanity'], img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['inhaler', 'nebulizer', 'snoring', 'nose clip', 'earwax'], img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80' },

  // Car & Outdoor
  { keywords: ['jump starter', 'tire inflator', 'inflator', 'air compressor', 'pump', 'tire plug', 'puncture'], img: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['car vacuum', 'vacuum', 'car cleaner', 'duster'], img: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['water filter', 'straw', 'survival', 'camping', 'hammock', 'stool', 'tent', 'lantern', 'trekking poles', 'hiking'], img: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['dash cam', 'car mount', 'car phone', 'tpms', 'car charger', 'seat belt', 'headrest', 'steering wheel lock', 'umbrella', 'sunshade'], img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['flashlight', 'torch', 'led flashlight'], img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['car organizer', 'trunk', 'dent repair', 'spray', 'coating', 'freshener', 'coasters', 'snow tire', 'ice scraper', 'scratch & swirl', 'scratch repair', 'backseat cover', 'animal & pest', 'exhaust fan', 'battery terminal'], img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80' },

  // Tools & Utility
  { keywords: ['tape measure', 'laser tape', 'measuring ruler', 'contour gauge', 'contour duplication', 'caliper'], img: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['screwdriver', 'wrench', 'socket wrench', 'pliers', 'drill bit', 'punch', 'stripper', 'staple gun', 'riveter', 'rivets', 'extractor', 'deburring', 'multi-tool'], img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['nano tape', 'mounting tape', 'tape', 'weather stripping', 'draft stopper'], img: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['welder', 'soldering', 'wire connectors', 'glue', 'thermal camera', 'caulking', 'plastic welding', 'rotary', 'sand', 'wrist strap'], img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['moving sliders', 'lifter', 'float valve', 'stud finder', 'tie down', 'ratchet', 'epoxy', 'anti-vibration'], img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80' },

  // Fitness & Lifestyle
  { keywords: ['jump rope', 'skipping rope'], img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['pilates', 'resistance band', 'toning bar', 'stretching', 'yoga block', 'yoga mat', 'cooling towel'], img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['back stretcher', 'acupressure', 'foam roller', 'roller', 'slant board', 'calf', 'foot rocker', 'lacrosse ball'], img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['grip', 'hand grip', 'finger resistance', 'arm & chest expander'], img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['push-up', 'ab roller', 'pull-up', 'dumbbell', 'weights', 'hula hoop', 'agility', 'speed ball', 'thigh master', 'sauna', 'balance board', 'ems', 'weighted vest', 'sled harness', 'silicone ring'], img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['knee sleeve', 'knee wrap', 'ankle support', 'wrist straps', 'compression', 'running vest', 'fanny pack'], img: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80' },

  // Smart Home
  { keywords: ['moon lamp', 'lamp', 'projector', 'sunset lamp', 'led lights', 'neon rope', 'wall light', 'puck lights', 'floor lamp', 'light bar', 'under-cabinet', 'candles', 'sconces', 'fairy lights', 'backlight', 'led bulb', 'light strips', 'fireworks lights', 'wall paneling', 'ceiling fan', 'ground disk lights', 'toilet nightlight', 'acoustic foam', 'light bulb', 'bulb', 'e26'], img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['diffuser', 'humidifier', 'flame effect', 'vaporizer'], img: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['doorbell', 'fingerbot', 'air quality', 'pet feeder', 'socket', 'smart plug', 'alarm clock', 'thermostat', 'sensor', 'aquarium', 'jellyfish', 'sand art', 'water droplets', 'plant water'], img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80' },

  // Kids & Novelty
  { keywords: ['ferrofluid', 'hypercube', 'fidget', 'spinning ball', 'magnetic', 'sensory', 'crawling toy', 'plushie', 'octopus', 'pop-it', 'perpetual', 'newton', 'meilong', 'puppets'], img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80' },
  { keywords: ['doodle board', 'writing tablet', 'pen', 'prism', 'bubbler', 'cactus', 'climbing car', 'push game', 'beer pong', 'bowling', 'sticky balls', 'chopsticks', 'sunflower', 'dinosaur', 'chicken', 'bubble gun', 'catapult', 'trebuchet', 'piggy bank', 'puzzle box', 'safe', 'guitar', 'blanket', 'useless box', 'fingerboard', 'laser tag', 'notebook'], img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80', img2: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80' }
];

function getMatchingImages(title) {
  const lower = title.toLowerCase();
  for (const entry of PHOTO_MAP) {
    if (entry.keywords.some(k => lower.includes(k))) {
      return [entry.img, entry.img2];
    }
  }
  return [
    'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
  ];
}

function getCleanSearchQuery(name) {
  return name
    .replace(/\(.*?\)/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

// 65 distinct researched product templates for each category = 8 * 65 = 520 products!
const CATEGORY_ITEMS = {
  "tech-gadgets": [
    { name: "MagSafe 3-in-1 Foldable Travel Wireless Charging Station", low: 5.4, retail: 29.99, tag: "Charges iPhone, Watch & AirPods simultaneously in a compact magnetic fold.", views: "14.2M" },
    { name: "Bone Conduction Waterproof Open-Ear Bluetooth Headphones", low: 9.8, retail: 44.99, tag: "Listen to crystal clear music without blocking your ear canal or surrounding traffic.", views: "22.5M" },
    { name: "360° AI Smart Auto Face-Tracking Phone Shooting Gimbal", low: 11.2, retail: 49.99, tag: "Rotates smoothly to follow your movements during TikToks and live streams without an app.", views: "38.1M" },
    { name: "Mini Pocket 4K Dual-Camera Drone with Obstacle Avoidance", low: 16.5, retail: 69.99, tag: "Ultra-compact foldable drone with optical flow hovering and gesture controls.", views: "51.0M" },
    { name: "Holographic 3D Fan LED Visual Advertising Projector", low: 22.0, retail: 89.99, tag: "Spins high-speed LED blades to float stunning 3D holographic animations in mid-air.", views: "19.8M" },
    { name: "Laser Virtual Projection Bluetooth Keyboard for Mobile & PC", low: 14.5, retail: 49.99, tag: "Projects a full QWERTY keyboard onto any flat surface with optical infrared sensors.", views: "12.4M" },
    { name: "Magnetic Ultra-Slim Wireless Power Bank with Ring Kickstand", low: 7.9, retail: 34.99, tag: "Snaps strongly to the back of your smartphone for 20W fast charging on the move.", views: "18.6M" },
    { name: "Retro Handheld Game Console with 10,000 Classic 4K Games", low: 13.4, retail: 49.99, tag: "Includes dual wireless joysticks and HDMI plug-and-play TV output for instant nostalgia.", views: "45.2M" },
    { name: "Anti-Spy Hidden Camera Detector & GPS Bug Tracker", low: 6.8, retail: 29.99, tag: "Infrared RF scanner uncovers covert pinhole cameras in hotel rooms and rental Airbnbs.", views: "31.7M" },
    { name: "Smart Waterproof Fingerprint Padlock with USB Backup Key", low: 5.9, retail: 24.99, tag: "Unlocks in 0.2 seconds with biometric recognition; never worry about lost locker keys again.", views: "9.3M" },
    { name: "Digital Smart Voice Recorder with Real-Time AI Audio Transcription", low: 15.8, retail: 59.99, tag: "Records lectures and meetings in 1536kbps audio and syncs text notes to your phone.", views: "8.4M" },
    { name: "Programmable RGB LED Smart Pixel Backpack with App Display", low: 28.0, retail: 99.99, tag: "Displays custom pixel animations, GIF art, and riding signals directly on the waterproof shell.", views: "27.3M" },
    { name: "Ultra-Thin Card Bluetooth Tracker Wallet & Luggage Locator", low: 4.2, retail: 19.99, tag: "Fits inside any credit card slot and syncs seamlessly with Apple Find My network.", views: "16.8M" },
    { name: "65W GaN Multi-Port Ultra-Fast Travel Charging Adapter", low: 8.5, retail: 32.99, tag: "Powers laptops, tablets, and phones simultaneously with heat-reducing Gallium Nitride tech.", views: "11.1M" },
    { name: "Magnetic Levitating Bluetooth Globe Speaker with Ambient Glow", low: 24.5, retail: 89.99, tag: "Defies gravity by floating and spinning in mid-air while streaming crisp 360° sound.", views: "33.9M" },
    { name: "Rechargeable Electric Hand Warmer & Emergency Power Bank", low: 6.1, retail: 24.99, tag: "Heats up in 3 seconds with dual-sided warmth and charges your phone during winter.", views: "21.4M" },
    { name: "4-in-1 Universal Fast Charging Keychain Cable with OTG Connectors", low: 2.8, retail: 14.99, tag: "Switches between Lightning, USB-C, and Micro USB; never get caught with the wrong cord.", views: "15.0M" },
    { name: "Smart Ergonomic Sleep Eye Mask with Ultra-Thin Bluetooth Speakers", low: 7.4, retail: 29.99, tag: "100% blackout eye contour with flat side-sleeper speakers for relaxing sleep and meditation.", views: "26.8M" },
    { name: "Wireless Lavalier Lapel Microphone for Smartphone Content Creators", low: 4.9, retail: 24.99, tag: "Plug-and-play noise-canceling mic with 20-meter range for crystal-clear video audio.", views: "41.5M" },
    { name: "Foldable Silicone Roll-Up Electronic Drum Pad with Built-In Speakers", low: 18.2, retail: 64.99, tag: "Portable drum practice set with pedals and headphone jack for silent home practice.", views: "17.6M" },
    { name: "Smart UV Light Phone Sanitizer Box with 10W Wireless Charger", low: 8.9, retail: 34.99, tag: "Kills 99.9% of bacteria on phones, keys, and jewelry in just 5 minutes.", views: "10.2M" },
    { name: "Mini Thermal Pocket Printer for Photos, Labels & Study Notes", low: 9.6, retail: 36.99, tag: "Inkless thermal printing directly from your phone via Bluetooth for journals and tags.", views: "58.4M" },
    { name: "Rotary Mechanical Switch Fidget Keyring Gadget", low: 2.1, retail: 9.99, tag: "Clicky tactile mechanical keyboard key switches on a keychain for anxiety relief.", views: "14.7M" },
    { name: "Auto-Clamping Qi Fast Wireless Car Charger Air Vent Mount", low: 7.2, retail: 28.99, tag: "Infrared sensor detects phone and automatically locks grips securely in place.", views: "23.1M" },
    { name: "Portable Electronic Luggage Scale with Backlit LCD Screen", low: 3.1, retail: 15.99, tag: "Avoid expensive airline baggage fees by weighing suitcases up to 110 lbs in seconds.", views: "7.8M" },
    { name: "Waterproof Floating Bluetooth Pool Speaker with LED Party Lights", low: 12.8, retail: 45.99, tag: "Floats on water while pulsating colorful RGB light rings synchronized to your music.", views: "19.3M" },
    { name: "Mini Desktop Vacuum Cleaner for Keyboard, Desk Crumb & Eraser Shavings", low: 3.8, retail: 16.99, tag: "Strong 360° cyclone suction cleans dust and crumbs between laptop keys effortlessly.", views: "34.0M" },
    { name: "Smart WiFi Universal IR Remote Hub for Alexa & Google Home", low: 5.2, retail: 22.99, tag: "Control TV, air conditioner, and fans from your smartphone from anywhere in the world.", views: "13.5M" },
    { name: "Invisible Ultra-Thin Foldable Laptop Stand Adhesive Base", low: 3.4, retail: 16.99, tag: "Sticks invisibly to the bottom of laptops to provide instant ergonomic typing elevation.", views: "18.2M" },
    { name: "Magnetic 540° Rotating Fast Charging Cable with 3 Heads", low: 2.9, retail: 14.99, tag: "Rotates in all directions for comfortable gaming while protecting device charging ports.", views: "29.6M" },
    { name: "HD Mobile Phone Screen Magnifier 3D Curved Video Amplifier", low: 4.8, retail: 19.99, tag: "Magnifies smartphone display by 3x to 4x into an eye-comforting 12-inch personal theater.", views: "37.2M" },
    { name: "Universal Waterproof Phone Pouch with High-Sensitivity Touch Window", low: 2.5, retail: 12.99, tag: "IPX8 certified underwater protection for swimming, snorkeling, and water sports.", views: "11.9M" },
    { name: "Smart Touchscreen Winter Thermal Windproof Driving Gloves", low: 3.9, retail: 17.99, tag: "Conductive fabric on thumb and index fingers allows smartphone browsing in freezing cold.", views: "16.4M" },
    { name: "Dual-Slot USB Fast Battery Charger for AA/AAA with LCD Screen", low: 4.3, retail: 18.99, tag: "Intelligent charging protection with individual slot battery capacity percentage display.", views: "5.6M" },
    { name: "Anti-Blue Light Radiation Blocking Gaming Glasses with Clear Lens", low: 3.7, retail: 19.99, tag: "Filters harmful digital screen glare to eliminate eyestrain, dry eyes, and headaches.", views: "24.8M" },
    { name: "Mini Digital Sound Level Decibel Meter with Backlit Display", low: 7.5, retail: 28.99, tag: "Measures ambient noise volume from 30 to 130 dBA for audio tuning and workplace safety.", views: "4.9M" },
    { name: "Flexible Gooseneck Tablet & Smartphone Bed Mount Clamp", low: 6.9, retail: 26.99, tag: "Sturdy aluminum arm holds phone or iPad hands-free at eye level while lying in bed.", views: "32.1M" },
    { name: "Compact Electric Eyebrow & Facial Hair Trimmer with Precision Blade", low: 3.2, retail: 15.99, tag: "Gentle micro-blade removes fine peach fuzz and shapes brows smoothly without pain.", views: "28.5M" },
    { name: "USB Powered Cup Warmer Plate with 3 Temperature Settings", low: 5.6, retail: 24.99, tag: "Keeps your morning coffee, tea, or milk at the ideal drinking heat all workday long.", views: "39.7M" },
    { name: "High-Speed USB 3.0 Multi-Card Reader for SD & MicroSD Cards", low: 3.3, retail: 14.99, tag: "Transfers camera photos and drone 4K videos at up to 5Gbps lightning speeds.", views: "8.1M" },
    { name: "Rechargeable Electric Arc Lighter with Flexible 360° Neck", low: 3.6, retail: 16.99, tag: "Windproof flameless plasma arc ignites candles, gas stoves, and fireworks safely.", views: "46.3M" },
    { name: "Magnetic Cable Clips Desktop Cord Organizer Dock", low: 2.6, retail: 12.99, tag: "Prevents charging cables from slipping off your desk; keeps cords neat and tangle-free.", views: "15.8M" },
    { name: "Selfie Ring Light with Tripod Stand & Wireless Remote", low: 8.4, retail: 34.99, tag: "3 color lighting temperatures and 10 brightness levels for professional portraits & video.", views: "48.9M" },
    { name: "Smart Bluetooth Body Tape Measure with Health App Sync", low: 8.7, retail: 34.99, tag: "Accurately measures waist, biceps, and hip circumference and logs fitness progress.", views: "14.3M" },
    { name: "Mini Spy Audio Bug Voice Activated Bugging Listening Device", low: 11.0, retail: 39.99, tag: "Auto-records when sound is detected with 20-day battery standby time.", views: "17.2M" },
    { name: "Dual-Port Fast Car Charger with Real-Time Voltage LED Display", low: 3.5, retail: 15.99, tag: "Monitors car battery health while charging two devices at 38W high speed.", views: "9.7M" },
    { name: "Wireless Bluetooth Tracker Tag Key Finder with Loud Beeper", low: 3.0, retail: 14.99, tag: "Find lost keys, wallets, or pets with two-way ring button and GPS last-seen map.", views: "22.0M" },
    { name: "Rechargeable Motion Sensor LED Toilet Bowl Night Light", low: 2.7, retail: 13.99, tag: "Lights up the toilet bowl in 8 soft glowing colors automatically when entering at night.", views: "31.4M" },
    { name: "Ergonomic Vertical Wireless Mouse for Carpal Tunnel Relief", low: 7.8, retail: 29.99, tag: "Natural handshake posture reduces wrist tension and forearm muscle strain during work.", views: "19.5M" },
    { name: "Waterproof Endoscope Inspection Camera with 8 LED Lights for Phones", low: 9.1, retail: 36.99, tag: "Snakes into drains, car engines, and tight gaps with HD live camera video.", views: "26.4M" },
    { name: "Smart Wi-Fi Water Leak Detector with Instant Smartphone Push Alarm", low: 6.4, retail: 24.99, tag: "Detects pipe drips and sink overflows before costly flood damage happens to floors.", views: "8.9M" },
    { name: "Mini Portable Electric Air Compressor Pump for Bikes & Balls", low: 14.9, retail: 54.99, tag: "Preset tire pressure stops automatically; pocket-sized for emergency bike rides.", views: "25.7M" },
    { name: "Solar Powered Hand Crank Emergency NOAA Weather Radio with Flashlight", low: 13.5, retail: 49.99, tag: "Reliable survival lifeline during storms and blackouts with USB phone emergency power.", views: "12.3M" },
    { name: "Digital Non-Contact Infrared Thermometer with Backlit Screen", low: 4.8, retail: 21.99, tag: "Instant 1-second temperature read without physical contact for babies and adults.", views: "9.1M" },
    { name: "Foldable Silicone Keyboard Piano for Beginners & Kids", low: 17.5, retail: 59.99, tag: "49 standard keys roll up into a backpack with 16 tones and headphone jack.", views: "18.8M" },
    { name: "Rechargeable Electric Lint Remover Fabric Shaver with LED Light", low: 5.8, retail: 24.99, tag: "Breathes new life into old sweaters, blankets, and couches by shaving pills and fuzz.", views: "35.6M" },
    { name: "Magnetic Privacy Screen Filter for MacBooks & Laptop Displays", low: 8.9, retail: 32.99, tag: "Blinds side-viewers from peeking at your sensitive work screens in public cafes.", views: "11.7M" },
    { name: "Smart Electronic Digital Money Piggy Bank with ATM Password Card", low: 9.2, retail: 34.99, tag: "Auto-scrolls paper cash into vault and teaches kids money savings habits with PIN code.", views: "28.3M" },
    { name: "Automatic Retractable Clothesline for Balcony & Bathroom Drying", low: 6.2, retail: 24.99, tag: "Heavy duty steel wire extends up to 13.8 feet and rewinds seamlessly without sagging.", views: "16.1M" },
    { name: "Smart Ultrasonic Jewelry & Glasses Cleaning Machine", low: 10.4, retail: 39.99, tag: "45,000Hz sound waves remove dirt, grime, and grease from rings, watches, and lenses.", views: "30.5M" },
    { name: "Multi-Functional 7-in-1 Keyboard & Earbud Cleaning Kit with Brush", low: 2.4, retail: 11.99, tag: "Soft brush, keycap puller, and silicone pen tip remove gunk from AirPods and keyboards.", views: "52.8M" },
    { name: "Rechargeable LED Desk Lamp with 15W Wireless Charger & Phone Stand", low: 11.5, retail: 42.99, tag: "Touch dimming, eye-caring lighting modes with built-in fast charging pad on base.", views: "14.9M" },
    { name: "Pocket Size Bluetooth Thermal Label Maker with Tape Rolls", low: 12.2, retail: 44.99, tag: "Prints waterproof barcodes, kitchen jar labels, and cable tags instantly from app.", views: "41.0M" },
    { name: "Universal Travel Power Adapter with 4 USB Ports & Type-C PD", low: 6.7, retail: 26.99, tag: "Covers over 150+ countries including US, EU, UK, AU plugs in one compact slider unit.", views: "13.4M" },
    { name: "Anti-Theft Hidden Underarm Shoulder Holster Sling Bag", low: 7.6, retail: 28.99, tag: "Conceals passport, wallet, and phone comfortably under jackets against pickpockets.", views: "22.7M" },
    { name: "Smart Bluetooth Wireless Barcode Scanner Handheld Gun", low: 14.8, retail: 49.99, tag: "Instant 1D & 2D QR code scanning for warehouse inventory, retail POS and library books.", views: "16.4M" },
    { name: "High-Powered Rechargeable Air Blower Fan Jet Duster 130,000 RPM", low: 16.5, retail: 59.99, tag: "Super powerful handheld turbo fan clears snow, car water drops, and barbecue charcoal.", views: "88.2M" },
    { name: "Mini Magnetic Power Bank with Built-in Foldable Ring Stand 5000mAh", low: 8.9, retail: 32.99, tag: "Ultra-compact magnetic battery pack snaps to phone back for emergency all-day juice.", views: "34.1M" },
    { name: "USB-C to Dual HDMI 4K Splitter Hub Docking Station", low: 11.2, retail: 39.99, tag: "Expands dual monitors with extended desktop display for laptops and MacBooks.", views: "21.0M" },
    { name: "Smart Digital Luggage Scale with Built-In Tape Measure", low: 3.8, retail: 16.99, tag: "Prevents overweight baggage check-in fees with ergonomic handle and backlit LCD.", views: "15.3M" },
    { name: "Invisible Smart Card RFID Blocking Minimalist Pop-Up Wallet", low: 4.9, retail: 22.99, tag: "Triggers card eject lever with one click; shields cards from electronic theft.", views: "43.7M" },
    { name: "Mini Portable Handheld Clothing Steamer Iron 1000W", low: 9.8, retail: 36.99, tag: "Smooths wrinkles out of suits and dresses in 30 seconds for travel and business trips.", views: "32.8M" },
    { name: "Wireless Charging Mouse Pad Large Gaming Desk Mat with 15W Fast Charge", low: 12.4, retail: 44.99, tag: "Powers phone and earbuds right on the leather desk pad while providing smooth tracking.", views: "27.6M" },
    { name: "Smart Auto-Tracking Smartphone Tripod with Gesture Recognition", low: 13.5, retail: 48.99, tag: "Starts and stops tracking with 'OK' hand gestures; 360-degree rotation for vloggers.", views: "39.5M" },
    { name: "Electric Motorized Curtain Track Opener with Tuya Smart Life App", low: 24.5, retail: 89.99, tag: "Opens heavy drapes and curtains silently on schedule and voice commands.", views: "19.8M" },
    { name: "Ultra-Fast 100W GaN 4-Port Desktop Fast Charging Station", low: 15.6, retail: 54.99, tag: "Powers two laptops and two phones simultaneously at max speed on your desk.", views: "25.4M" },
    { name: "Mini Bluetooth Thermal Receipt & Sticker Printer for Small Business", low: 13.9, retail: 49.99, tag: "Connects to Square, Shopify, and Android POS to print customer receipts on the go.", views: "31.2M" },
    { name: "Digital Non-Contact Tachometer Laser RPM Meter for Motors", low: 8.4, retail: 32.99, tag: "Measures rotational speed of motors, drills, and model aircraft from 2.5 to 99,999 RPM.", views: "11.6M" },
    { name: "Smart Bluetooth Body Tape Measure with Health Tracker App", low: 8.7, retail: 33.99, tag: "Measures waist and muscle growth accurately with digital memory and Bluetooth sync.", views: "18.9M" },
    { name: "Portable Folding Bluetooth Keyboard with Integrated Touchpad Mouse", low: 12.8, retail: 45.99, tag: "Tri-fold pocket keyboard transforms tablets and phones into mini workstations anywhere.", views: "42.0M" }
  ],
  "home-kitchen": [
    { name: "Cordless Electric Power Spin Scrubber with Extension Rod", low: 12.8, retail: 49.99, tag: "Cleans bathroom tiles, tubs, grout, and sinks without bending or manual elbow grease.", views: "112.4M" },
    { name: "Automatic Hands-Free Electric Jar Opener for Weak Hands", low: 6.5, retail: 26.99, tag: "Press one button to effortlessly twist off stubborn vacuum-sealed jar lids without strain.", views: "42.1M" },
    { name: "Rapid Defrosting Thawing Tray for Frozen Meats without Electricity", low: 4.8, retail: 21.99, tag: "Aviation-grade aluminum conducts room heat to thaw steaks and chicken in minutes.", views: "31.5M" },
    { name: "Ultrasonic Fruit & Vegetable Ozone Detox Purifier Washer", low: 15.2, retail: 59.99, tag: "Eliminates agricultural chemicals, bacteria, and dirt from fruits and seafood using electrolysis.", views: "28.7M" },
    { name: "2-in-1 Magnetic Mini Bag Heat Sealer and Cutter for Snacks", low: 2.6, retail: 13.99, tag: "Airtight reseals potato chip and cereal bags in 3 seconds to keep food crunchy and fresh.", views: "64.2M" },
    { name: "Electric Gravity-Sensing Salt & Pepper Grinder with Blue LED Light", low: 8.9, retail: 34.99, tag: "Simply tilt upside down for automatic freshly ground peppercorns; no button pressing needed.", views: "38.9M" },
    { name: "Reusable Silicone Stretch Lids Set of 6 for Food Storage", low: 2.2, retail: 12.99, tag: "Airtight, leakproof elastic covers replace plastic saran wrap across bowls, cans, and fruit.", views: "24.0M" },
    { name: "Multi-Blade Herb Shears Scissor with 5 Stainless Steel Blades", low: 3.4, retail: 15.99, tag: "Chops green onions, cilantro, and rosemary directly into pans in seconds without cutting board.", views: "19.6M" },
    { name: "Magnetic Wall-Mounted Stainless Steel Kitchen Knife Bar", low: 5.9, retail: 24.99, tag: "Heavy-duty neodymium magnetic strip stores chef knives safely and frees up counter space.", views: "15.3M" },
    { name: "Automatic Rolling Double-Layer Egg Dispenser for Refrigerator", low: 4.5, retail: 19.99, tag: "Gravity-feed track rolls the next egg forward automatically when one is taken out.", views: "47.2M" },
    { name: "Self-Stirring Magnetic Stainless Steel Coffee Mug", low: 5.8, retail: 24.99, tag: "Whirlpool magnetic pill stirs coffee, protein powder, and hot cocoa at the touch of a button.", views: "36.8M" },
    { name: "3-in-1 Avocado Slicer, Pitter, and Masher Ergonomic Tool", low: 2.1, retail: 9.99, tag: "Splits, pits, slices, and scoops avocados cleanly in seconds without dangerous knives.", views: "27.4M" },
    { name: "Handheld Cordless Mini Food Vacuum Sealer with Reusable Bags", low: 7.6, retail: 29.99, tag: "Pumps air out of food storage bags to keep meats and cheeses fresh 5x longer in fridge.", views: "21.9M" },
    { name: "Over-The-Sink Rollable Stainless Steel Dish Drying Rack", low: 6.8, retail: 27.99, tag: "Rolls out over sink basin to drip-dry washed dishes or wash veggies; rolls away neatly.", views: "39.5M" },
    { name: "Heavy Duty Bear Meat Claws for Pulled Pork & Barbecue Shredding", low: 3.2, retail: 14.99, tag: "Ultra-sharp heat-resistant claws shred hot brisket, pork, and turkey easily without burning hands.", views: "18.3M" },
    { name: "Rechargeable Wireless Electric Garlic Mincer & Food Chopper", low: 4.9, retail: 22.99, tag: "Chops garlic, ginger, peppers, and onions in 10 seconds with triple stainless steel blades.", views: "53.1M" },
    { name: "Olive Oil Sprayer Bottle for Air Fryer Cooking with Fan-Mist Nozzle", low: 3.5, retail: 16.99, tag: "Delivers an ultra-fine, even mist of oil without chemical propellants or greasy puddles.", views: "68.7M" },
    { name: "Under-Sink 2-Tier Sliding Drawer Cabinet Organizer Rack", low: 9.8, retail: 39.99, tag: "Slide-out basket design maximizes cramped under-sink storage around plumbing pipes.", views: "33.2M" },
    { name: "Electric Automatic Drinking Water Dispenser Pump for 5-Gallon Jugs", low: 4.6, retail: 19.99, tag: "USB rechargeable pump fits standard 5-gallon water jugs for effortless one-touch pouring.", views: "29.4M" },
    { name: "Silicone Clip-On Pot Strainer for Pasta, Grease & Veggies", low: 2.8, retail: 13.99, tag: "Snaps onto any pot, pan, or bowl size so you can drain hot boiling water with one hand.", views: "55.0M" },
    { name: "Adjustable Stainless Steel Jar Lid Gripper Bottle Opener Tool", low: 2.7, retail: 12.99, tag: "Adjusts to fit bottle caps from 0.5 to 4.5 inches for effortless twisting.", views: "14.2M" },
    { name: "Rotary Multi-Blade Vegetable Slicer Mandoline Drum Grater", low: 8.4, retail: 32.99, tag: "Grates cheese, shreds carrots, and slices potatoes 18x faster than manual grating.", views: "41.8M" },
    { name: "Non-Stick Silicone Baking Mat Set with Macaron & Cookie Guides", low: 3.9, retail: 17.99, tag: "Bake cookies and roast veggies evenly without greasy butter, parchment paper, or cleanup.", views: "16.5M" },
    { name: "Collapsible Microwave Food Cover Splatter Guard with Steam Vents", low: 2.9, retail: 13.99, tag: "Prevents messy microwave soup splatters; collapses completely flat for drawer storage.", views: "23.6M" },
    { name: "Magnetic Stove Top Shelf Spice Rack with Front Guardrails", low: 7.2, retail: 28.99, tag: "Snaps magnetically atop your oven back panel to utilize wasted space for frequently used spices.", views: "30.1M" },
    { name: "Electric Automatic Wine Opener Corkscrew with Foil Cutter", low: 7.9, retail: 31.99, tag: "Extracts stubborn wine corks smoothly in 6 seconds with illuminated blue LED light.", views: "25.3M" },
    { name: "Cut-Resistant Kitchen Safety Gloves Level 5 Protection", low: 3.1, retail: 14.99, tag: "High-strength food-grade polyethylene fiber protects fingers while slicing and grating.", views: "17.9M" },
    { name: "Reusable Silicone Tea Infuser Strainer Cute Animal Shapes", low: 1.8, retail: 8.99, tag: "Holds loose leaf teas inside heat-resistant silicone for eco-friendly soothing brews.", views: "12.4M" },
    { name: "Stainless Steel Pineapple Corer & Ring Slicer Peeler", low: 3.6, retail: 15.99, tag: "Cores and slices an entire fresh pineapple into perfect juicy rings in under 30 seconds.", views: "34.7M" },
    { name: "Mini Silicone Kitchen Funnel Collapsible Set of 4", low: 1.9, retail: 9.99, tag: "Pours liquids and powders into small jars without spills; collapses flat for space-saving.", views: "9.8M" },
    { name: "Herb Saver Storage Keeper Pod with Water Reservoir", low: 4.7, retail: 21.99, tag: "Keeps cilantro, mint, and asparagus crisp and fresh for up to 3 weeks in the refrigerator.", views: "28.2M" },
    { name: "Automatic Dumpling Maker Press Double Head Mold Machine", low: 6.9, retail: 27.99, tag: "Presses two dumplings simultaneously with authentic pleated edges in one effortless second.", views: "51.3M" },
    { name: "Silicone Kitchen Sink Splash Guard Faucet Water Catcher Mat", low: 3.8, retail: 16.99, tag: "Drains faucet splash water back into the sink to keep granite countertops clean and dry.", views: "44.6M" },
    { name: "Fast Hand Crank Apple Peeler, Corer & Spiralizer Machine", low: 7.5, retail: 29.99, tag: "Peels, cores, and slices whole apples with a quick turn of the rotary crank handle.", views: "20.1M" },
    { name: "Stainless Steel Odor Remover Magic Soap Bar for Garlic & Fish", low: 2.2, retail: 11.99, tag: "Rubbing with water chemically neutralizes stubborn garlic, onion, and fish smells on hands.", views: "18.7M" },
    { name: "Reusable Silicone Straws Set with Portable Travel Cases & Brush", low: 2.4, retail: 11.99, tag: "Soft food-grade silicone straws prevent teeth chipping and eliminate disposable plastic waste.", views: "11.2M" },
    { name: "Water Filter Pitcher Long-Lasting Replacement Filter Cartridge", low: 5.1, retail: 22.99, tag: "Reduces chlorine, lead, microplastics, and tap water odor for crisp tasting drinking water.", views: "15.0M" },
    { name: "Meat Tenderizer Tool with 48 Stainless Steel Ultra-Sharp Needle Blades", low: 4.9, retail: 21.99, tag: "Breaks down tough meat fibers for faster marinade absorption and juicy tenderness.", views: "22.3M" },
    { name: "Double-Sided Magnetic Window Cleaner Glass Squeegee Tool", low: 8.7, retail: 34.99, tag: "Cleans outside high-rise windows while you safely stay indoors using strong magnet sync.", views: "36.4M" },
    { name: "Automatic Toothpaste Dispenser Wall Mount with Toothbrush Holders", low: 4.2, retail: 18.99, tag: "Pushes the exact right amount of toothpaste onto brush every morning with zero mess.", views: "29.8M" },
    { name: "Non-Stick Burger Press Patty Maker with Wax Patty Papers", low: 4.1, retail: 17.99, tag: "Creates uniform 1/4 lb or 1/2 lb barbecue burger patties that grill evenly without breaking.", views: "16.8M" },
    { name: "Silicone Microwave Popcorn Maker Bowl with Collapsible Lid", low: 5.2, retail: 22.99, tag: "Makes healthy, oil-free movie theater popcorn in 3 minutes without chemical bag coatings.", views: "31.0M" },
    { name: "Under-Counter Wine Glass Holder Hanging Stemware Rack", low: 4.4, retail: 18.99, tag: "Slips under cabinets to display and air-dry delicate wine and champagne glasses securely.", views: "13.9M" },
    { name: "Adjustable Cake Scraper Smoother Edge Polisher Tool", low: 2.3, retail: 10.99, tag: "Achieves flawless bakery-grade sharp edges on buttercream cakes with height adjustment.", views: "24.5M" },
    { name: "Stainless Steel Watermelon Cube Cutter Windmill Knife Slicer", low: 3.5, retail: 15.99, tag: "Pushes through fresh watermelon to automatically slice juicy bite-sized square cubes.", views: "43.1M" },
    { name: "Kitchen Sink Caddy Sponge Holder with Removable Drain Tray", low: 4.3, retail: 18.99, tag: "Keeps wet sponges, brushes, and soap bottles organized with auto-draining slanted spout.", views: "26.7M" },
    { name: "3-Tier Stackable Kitchen Counter Wire Fruit Basket Stand", low: 9.4, retail: 36.99, tag: "Breathable open wire baskets keep bananas, apples, and onions fresh with airflow.", views: "17.4M" },
    { name: "Silicone Ice Pop Molds Set with Drip-Free Sticks", low: 3.7, retail: 16.99, tag: "Make homemade healthy fruit juice popsicles and Greek yogurt treats easily for kids.", views: "19.9M" },
    { name: "Rechargeable Electric Milk Frother Handheld Foam Maker", low: 4.5, retail: 19.99, tag: "Whips rich creamy foam for lattes, cappuccinos, and matcha teas in under 15 seconds.", views: "61.5M" },
    { name: "Silicone Heat Resistant Oven Mitts and Potholder Grips Set", low: 3.9, retail: 17.99, tag: "Waterproof textured silicone handles 450°F hot baking pans safely without steam burns.", views: "14.1M" },
    { name: "Multi-Function Kitchen Peeler with Built-In Waste Container Box", low: 2.8, retail: 12.99, tag: "Peels potatoes and carrots while catching peelings inside the handle for zero mess.", views: "27.8M" },
    { name: "Wall-Mounted Grain & Cereal Dry Food Dispenser with Measuring Cup", low: 8.6, retail: 34.99, tag: "One-press button dispenses rice, oats, and beans cleanly while sealing out kitchen bugs.", views: "35.2M" },
    { name: "Portable Manual Citrus Juicer Lemon Squeezer with Measuring Bowl", low: 3.6, retail: 15.99, tag: "Extracts every drop of fresh juice from lemons and limes without seeds or bitter rind oil.", views: "12.7M" },
    { name: "Silicone Microwave Bacon Cooker Tray with Fat Drip Grooves", low: 5.4, retail: 23.99, tag: "Cooks crispy bacon in 4 minutes while channeling grease away into collection reservoir.", views: "22.6M" },
    { name: "Magnetic Refrigerator Calendar Whiteboard Dry Erase Meal Planner", low: 6.1, retail: 25.99, tag: "Sticks firmly to fridge door to organize weekly family meals, grocery lists, and chores.", views: "28.9M" },
    { name: "Automatic Plastic Cling Film & Aluminum Foil Cutter Dispenser", low: 5.7, retail: 23.99, tag: "Cleanly cuts plastic wrap with two-way hidden razor blade; no more frustrating tangles.", views: "37.0M" },
    { name: "Stainless Steel Mesh Flour Sifter with Hand Crank Squeeze Handle", low: 4.1, retail: 17.99, tag: "Aerates flour and confectioners sugar smoothly for light, fluffy cakes and pastries.", views: "10.5M" },
    { name: "Silicone Spoon Rest and Pot Lid Holder Stand for Kitchen Stovetop", low: 2.9, retail: 13.99, tag: "Catches dripping tomato sauce from ladles and spatulas to keep stove spotless.", views: "21.3M" },
    { name: "Digital Kitchen Cooking Food Scale with Precise 0.1g Precision", low: 5.9, retail: 24.99, tag: "Stainless steel platform weighs diet portions and baking ingredients up to 11 lbs accurately.", views: "32.4M" },
    { name: "Kitchen Drawer Bamboo Expandable Silverware & Cutlery Organizer", low: 8.8, retail: 34.99, tag: "Expands from 6 to 8 compartments to fit any kitchen drawer dimension neatly.", views: "19.1M" },
    { name: "Silicone Garlic Peeler Tube Roller for Quick Odorless Skin Removal", low: 1.5, retail: 7.99, tag: "Insert garlic clove and roll on counter; papery skin slides off cleanly in 2 seconds.", views: "23.4M" },
    { name: "Under-Cabinet Wine Bottle Corkscrew Opener Hidden Tool", low: 4.3, retail: 18.99, tag: "Mounts discreetly underneath overhead kitchen cabinets for instant one-handed bottle opening.", views: "11.6M" },
    { name: "Stainless Steel Corn Cob Stripper & Thresher Kernel Cutter", low: 3.1, retail: 13.99, tag: "Strips sweet corn kernels from the cob in one smooth downward twist.", views: "20.8M" },
    { name: "Silicone Reusable Icing Piping Bag Set with 12 Stainless Steel Nozzles", low: 3.8, retail: 16.99, tag: "Decorate birthday cakes, cupcakes, and cookies with professional pastry flower designs.", views: "15.7M" },
    { name: "Over-The-Cabinet Door Hanging Trash Can with Lid for Countertop", low: 6.3, retail: 25.99, tag: "Scrape food scraps directly off cutting board without bending down to floor garbage can.", views: "49.1M" }
  ],
  "beauty-health": [
    { name: "Smart Posture Corrector with Vibration Reminder Sensor", low: 3.4, retail: 22.99, tag: "Gently vibrates whenever you slouch more than 25 degrees to build spinal muscle memory.", views: "28.6M" },
    { name: "7-Color LED Light Therapy Photon Facial Rejuvenation Mask", low: 18.5, retail: 69.99, tag: "Stimulates collagen, fights acne-causing bacteria, and evens skin tone with clinic wavelengths.", views: "44.1M" },
    { name: "Ultrasonic Deep Cleansing Skin Scrubber Pore Vacuum Extractor", low: 7.8, retail: 29.99, tag: "24,000Hz ultrasonic vibrations dislodge blackheads, excess oil, and dead skin cells gently.", views: "52.3M" },
    { name: "Heated Eye Massager with Air Compression & Bluetooth Music", low: 14.2, retail: 54.99, tag: "Relieves dry eye strain, dark circles, and migraines with gentle heated airbag pressure.", views: "39.8M" },
    { name: "Painless Nano Crystal Hair Eraser & Gentle Exfoliation Stone", low: 2.3, retail: 14.99, tag: "Erases unwanted body hair and dead skin cells in circular motions without razor bumps.", views: "88.5M" },
    { name: "Electric Scalp Massager with Red Light Therapy & IPX7 Waterproof", low: 11.6, retail: 44.99, tag: "4 silicone claw heads knead scalp to stimulate hair follicle growth and relieve tension.", views: "33.7M" },
    { name: "EMS Microcurrent Foot Massager Circulation Acupressure Mat", low: 4.2, retail: 21.99, tag: "Sends soothing bio-electric pulses to soothe swollen ankles, plantar fasciitis, and fatigue.", views: "61.0M" },
    { name: "Portable Cordless Hair Straightener Brush with Ceramic Heat Teeth", low: 9.9, retail: 38.99, tag: "Detangles and straightens hair on the go with USB-C rechargeable anti-scald technology.", views: "41.2M" },
    { name: "High-Frequency Facial Neon Wand Anti-Acne Skin Tightening Kit", low: 13.4, retail: 49.99, tag: "Generates ozone to calm cystic breakouts and boost serum absorption for glowing skin.", views: "36.9M" },
    { name: "Smart Visual Earwax Removal Endoscope with 1080P HD Camera", low: 6.9, retail: 28.99, tag: "Streams live video of your ear canal to smartphone for safe, guided wax cleaning.", views: "74.8M" },
    { name: "Silicone Sonic Facial Cleansing Brush with Heated Massage Base", low: 5.2, retail: 23.99, tag: "Pulsates 8,000 times per minute to unclog makeup and pores 10x deeper than manual washing.", views: "25.6M" },
    { name: "Cervical Neck Traction Pillow with Magnetic Acupoint Nodes", low: 5.8, retail: 24.99, tag: "Restores natural neck spinal curve in 10 minutes a day to eliminate tech-neck stiffness.", views: "47.3M" },
    { name: "Portable Cordless Water Dental Flosser with 4 Jet Nozzles", low: 8.9, retail: 34.99, tag: "Blasts food debris between braces and teeth with pulsed water pressure for fresh breath.", views: "31.4M" },
    { name: "Heated Eyelash Curler with Digital Temperature Display", low: 3.9, retail: 17.99, tag: "Curls lashes in 10 seconds with gentle warmth that holds dramatic lift all day long.", views: "38.5M" },
    { name: "Real Jade Stone Face Roller & Gua Sha Scraping Massage Set", low: 3.5, retail: 16.99, tag: "Promotes lymphatic facial drainage, sculpts jawline, and depuffs morning under-eye bags.", views: "49.0M" },
    { name: "Anti-Snoring Smart Micro-Electric Chin Strap Device", low: 7.2, retail: 28.99, tag: "Monitors breathing acoustics and stimulates throat nerves to stop snoring naturally.", views: "19.4M" },
    { name: "Electronic Foot File Callus Remover with Vacuum Suction", low: 6.4, retail: 25.99, tag: "Gently sands away rough cracked heels and sucks up dead skin powder automatically.", views: "35.1M" },
    { name: "Nose Hair Trimmer with Dual-Edge Rotating Stainless Steel Blades", low: 2.8, retail: 13.99, tag: "Trims ear and nose hair smoothly without pulling or irritating sensitive nasal walls.", views: "14.8M" },
    { name: "Collapsible Foot Soaking Tub Bucket with Massage Roller Nodes", low: 5.9, retail: 24.99, tag: "Folds flat for under-bed storage; enjoy a soothing hot Epsom salt foot spa anytime.", views: "22.0M" },
    { name: "Memory Foam Knee Pillow for Side Sleepers with Sciatica Relief", low: 6.2, retail: 25.99, tag: "Keeps legs, hips, and spine in alignment while sleeping on your side to stop back pain.", views: "29.7M" },
    { name: "Electric Makeup Brush Cleaner & Dryer Spinner Machine", low: 7.5, retail: 29.99, tag: "Cleans and spins cosmetic foundation brushes completely dry in under 30 seconds.", views: "56.4M" },
    { name: "Micro-Needling Derma Roller 0.5mm for Beard & Hair Growth", low: 2.5, retail: 12.99, tag: "540 titanium microneedles trigger collagen production and awaken dormant hair follicles.", views: "42.3M" },
    { name: "Ice Face Roller for Puffy Eyes, Migraines & Pore Shrinking", low: 2.9, retail: 13.99, tag: "Freeze roller head to instantly calm inflamed skin, relieve headaches, and boost circulation.", views: "67.1M" },
    { name: "Smart Body Posture Belt with Dual Spinal Support Stays", low: 6.8, retail: 27.99, tag: "Comfortable breathable harness pulls shoulders back to prevent humping and slouching.", views: "18.5M" },
    { name: "Electric Heated Eyelash Perm Curler with Fast 15s Warmup", low: 4.1, retail: 18.99, tag: "Silicon heating comb shapes eyelashes with natural salon-quality curves without pinching.", views: "27.2M" },
    { name: "Deep Tissue Massage Gun with 6 Speed Heads for Muscle Recovery", low: 15.9, retail: 59.99, tag: "Percussive muscle therapy breaks up lactic acid after intense gym workouts or desk sitting.", views: "51.8M" },
    { name: "LED Lighted Vanity Makeup Mirror with 10x Magnification & Touch Dimmer", low: 8.5, retail: 33.99, tag: "Simulates natural daylight for flawless makeup application; swivels 180 degrees.", views: "34.6M" },
    { name: "Silicone Scalp Shampoo Massage Brush with Soft Bristles", low: 1.8, retail: 8.99, tag: "Exfoliates dandruff and lathers shampoo deep into hair roots for salon-clean scalp.", views: "46.9M" },
    { name: "Painless IPL Laser Hair Removal Handset with 999,999 Flashes", low: 23.5, retail: 89.99, tag: "Permanently stops body hair regrowth in 8 weeks from the comfort and privacy of home.", views: "73.2M" },
    { name: "Anti-Cellulite Vacuum Cupping Massager with Red Light & Heat", low: 9.8, retail: 39.99, tag: "Dynamic negative pressure cupping releases deep muscle knots and firms skin texture.", views: "38.4M" },
    { name: "Orthopedic Memory Foam Seat Cushion for Tailbone & Coccyx Relief", low: 8.7, retail: 34.99, tag: "U-shaped ergonomic cut-out relieves spinal pressure during long 8-hour office sitting.", views: "26.3M" },
    { name: "Magnetic Acupressure Reflexology Shoe Insoles (1 Pair)", low: 3.1, retail: 14.99, tag: "Natural massage nodes stimulate foot nerve points while walking to reduce leg fatigue.", views: "16.8M" },
    { name: "Portable Ultrasonic Nano Facial Steamer Mist Sprayer with Mirror", low: 3.6, retail: 15.99, tag: "Sprays ultra-fine mineral mist to hydrate dry skin anytime on planes, trains, or offices.", views: "29.1M" },
    { name: "Teeth Whitening LED Accelerator Light Mouthpiece Kit", low: 6.9, retail: 28.99, tag: "Blue light cold laser activates whitening gel to lift coffee and wine stains in 15 mins.", views: "41.5M" },
    { name: "Electric Nail Drill Machine Set for Acrylic & Gel Nails", low: 7.4, retail: 29.99, tag: "Adjustable speed rotary buffer shapes, polishes, and removes gel manicures at home.", views: "36.0M" },
    { name: "Anti-Wrinkle Silicone Chest & Neck Pad Overnight Smoothing Set", low: 3.3, retail: 15.99, tag: "Medical silicone locks in skin moisture overnight to smooth sleep wrinkles and sun creases.", views: "23.7M" },
    { name: "Smart Digital Body Fat BMI Scale with Smartphone Bluetooth Sync", low: 9.6, retail: 38.99, tag: "Measures 13 essential body metrics including visceral fat, muscle mass, and metabolic rate.", views: "30.9M" },
    { name: "Inflatable Neck Cervical Traction Collar with Hand Air Pump", low: 5.4, retail: 22.99, tag: "3-tier inflatable collar stretches compressed neck vertebrae to relieve pinched nerves.", views: "19.6M" },
    { name: "Electric Blackhead Remover Pore Vacuum with 5 Suction Probes", low: 6.8, retail: 27.99, tag: "Safe vacuum suction lifts stubborn clogged sebum without damaging delicate facial capillaries.", views: "48.2M" },
    { name: "Soft Silk Sleep Eye Mask with Contoured 3D Nose Baffle", low: 2.7, retail: 12.99, tag: "Zero eye pressure contour allows free REM blinking while blocking 100% ambient light.", views: "21.5M" },
    { name: "Foot Peeling Mask Booties for Baby Soft Exfoliated Feet (2 Pairs)", low: 2.9, retail: 13.99, tag: "Botanical lactic acids cause dry dead skin calluses to peel off naturally in 7 days.", views: "59.3M" },
    { name: "Electric Vibrating Face Massage T-Bar with 24K Gold Plating", low: 4.8, retail: 21.99, tag: "6,000 vibrations per minute tone facial muscles and reduce morning facial puffiness.", views: "24.9M" },
    { name: "Acupressure Mat and Pillow Set for Back Pain & Insomnia Relief", low: 9.2, retail: 36.99, tag: "Thousands of tiny acupressure spikes stimulate endorphin release for deep restorative relaxation.", views: "33.4M" },
    { name: "Silicone Makeup Sponge Blender with Protective Travel Capsule", low: 1.9, retail: 8.99, tag: "Applies liquid foundation without soaking up makeup; washes clean in 5 seconds.", views: "17.1M" },
    { name: "Finger Pulse Oximeter with OLED Display for Oxygen & Pulse SpO2", low: 4.9, retail: 21.99, tag: "Accurate blood oxygen saturation and pulse rate check in 5 seconds on your fingertip.", views: "12.8M" },
    { name: "Hydrocolloid Pimple Master Patches Set of 72 Invisible Dots", low: 2.1, retail: 9.99, tag: "Absorbs pus and oil from acne overnight while protecting blemishes from dirty fingers.", views: "71.6M" },
    { name: "Electric Heated Beard Straightener Comb for Men with Anti-Scald Teeth", low: 6.7, retail: 26.99, tag: "Tames wild, curly beard hairs into a neat, smooth groomed finish in 2 minutes.", views: "28.1M" },
    { name: "Foot Circulation Massager Mat with Remote & 8 Intensity Modes", low: 5.6, retail: 24.99, tag: "Foldable travel pad exercises calf muscles and boosts lymphatic venous return.", views: "39.4M" },
    { name: "Handheld Red Light Cold Laser Therapy Device for Joint Pain", low: 17.8, retail: 68.99, tag: "Deep penetrating 650nm and 808nm wavelengths relieve arthritis and tendon inflammation.", views: "18.3M" },
    { name: "Sonic Electric Toothbrush with 8 Replacement Heads & Travel Case", low: 7.9, retail: 31.99, tag: "40,000 micro-brushes per minute removes 7x more plaque than manual toothbrushes.", views: "27.5M" },
    { name: "Soft Silicone Anti-Grinding Dental Night Mouth Guard (Set of 4)", low: 2.8, retail: 13.99, tag: "Custom moldable boil-and-bite guard protects enamel from nighttime teeth clenching and TMJ.", views: "15.6M" },
    { name: "Electric Callus Shaver with 3 Quartz Roller Heads & LED Light", low: 6.5, retail: 26.99, tag: "Safe motorized filing smooths hard corns and dry heel cracks with zero manual scraping.", views: "31.0M" },
    { name: "Heated Knee Brace Wrap with Vibration Massage for Arthritis Pain", low: 13.9, retail: 52.99, tag: "Dual carbon fiber heating elements soothe sore meniscus and joint stiffness.", views: "24.2M" },
    { name: "Facial Ice Globes Cooling Cryo Sticks for Skin Tightening", low: 4.6, retail: 19.99, tag: "Freezable stainless steel cryo spoons soothe redness, headaches, and facial inflammation.", views: "37.8M" },
    { name: "Microcurrent V-Face Chin Sculpting Slimming Beauty Device", low: 12.1, retail: 46.99, tag: "Lifts sagging double chin and tightens jawline contours with red & blue light EMS.", views: "45.0M" },
    { name: "Rechargeable Cordless Hair Clipper & Beard Trimmer Kit with Guards", low: 8.2, retail: 32.99, tag: "Self-sharpening titanium ceramic blades give clean home fades and stubble trims.", views: "22.9M" },
    { name: "Memory Foam Lumbar Support Back Cushion for Car & Desk Chair", low: 7.7, retail: 31.99, tag: "Contours perfectly to lower back lumbar curve to relieve sciatica and slouching ache.", views: "25.8M" },
    { name: "Magnetic Therapy Copper Bracelet for Carpal Tunnel & Joint Health", low: 2.9, retail: 13.99, tag: "High-purity 99.9% solid copper with 6 neodymium bio-magnets for pain relief.", views: "14.2M" },
    { name: "Detoxifying Natural Bamboo Foot Pads with Ginger Extract (20 Pack)", low: 3.8, retail: 16.99, tag: "Adhesive pads draw out bodily impurities and support restful sleep overnight.", views: "32.7M" },
    { name: "Silicone Shampoo Hair Scalp Brush Scrubber with Hanging Hook", low: 1.6, retail: 7.99, tag: "Promotes head blood circulation and rinses styling product build-up effortlessly.", views: "26.4M" },
    { name: "Soft Microfiber Hair Drying Towel Wrap Turban with Button", low: 2.4, retail: 11.99, tag: "Absorbs water 80% faster without heat damage or frizzy friction from heavy bath towels.", views: "34.1M" },
    { name: "Smart Ear Cleaner with HD Wireless Camera & Soft Silicone Spoons", low: 7.8, retail: 31.99, tag: "Safe, illuminated inspection of ears, teeth, and skin with waterproof lens.", views: "58.6M" },
    { name: "Electric Heated Eyelash Curler Pen with USB-C Quick Charging", low: 3.7, retail: 16.99, tag: "Long-lasting natural curled lashes with smart temperature sensing silicone pad.", views: "29.4M" },
    { name: "Anti-Wrinkle Facial Patch Reusable Forehead & Smile Line Patches", low: 3.2, retail: 14.99, tag: "Non-invasive medical silicone trains facial muscles to relax expression frown lines.", views: "21.0M" },
    { name: "Portable Folding Travel Footstool Inflatable Leg Rest Pillow", low: 5.3, retail: 22.99, tag: "Elevates legs on airplanes and long road trips to prevent deep vein thrombosis swelling.", views: "18.9M" }
  ],
  "car-outdoor": [
    { name: "4-in-1 Emergency Car Jump Starter & 150 PSI Digital Tire Inflator", low: 28.5, retail: 99.99, tag: "Starts dead 12V car batteries instantly and auto-inflates flat tires with built-in LED torch.", views: "48.2M" },
    { name: "Cordless High-Power Handheld Car Vacuum Cleaner with Air Blower", low: 8.9, retail: 34.99, tag: "Sucks up crumbs, dirt, and gravel from car carpets; reverses as high-speed dust blower.", views: "62.4M" },
    { name: "Tactical Outdoor Emergency Water Filter Survival Straw", low: 4.2, retail: 19.99, tag: "Filters 99.9999% of bacteria and parasites from wild rivers and lakes into clean drinking water.", views: "33.8M" },
    { name: "Solar-Powered Rechargeable Camping Lantern with USB Phone Power Bank", low: 6.8, retail: 26.99, tag: "Collapses into a pocket puck; charges in sunlight to illuminate tents and recharge phones.", views: "27.5M" },
    { name: "HD Polarized Anti-Glare Night Driving Glasses with Yellow Lenses", low: 3.5, retail: 17.99, tag: "Cuts blinding high-beam LED headlight glare and improves contrast in rain and fog.", views: "41.9M" },
    { name: "Magnetic MagSafe Car Phone Mount with 15W Qi Wireless Fast Charger", low: 7.2, retail: 28.99, tag: "Locks iPhone securely on rough bumpy roads while fast charging on air vent.", views: "36.4M" },
    { name: "18-in-1 Stainless Steel Snowflake Pocket Multi-Tool Keychain", low: 2.1, retail: 11.99, tag: "Functions as bottle opener, hex wrench, screwdriver, and box cutter in a durable snowflake shape.", views: "45.0M" },
    { name: "Foldable Car Windshield Sunshade Umbrella with 360° Flexible Handle", low: 5.4, retail: 23.99, tag: "Pops open like an umbrella in 5 seconds to block 99% of scorching UV dashboard heat.", views: "59.7M" },
    { name: "Mini Real-Time Magnetic GPS Vehicle Tracker with Anti-Theft App", low: 9.8, retail: 39.99, tag: "Snaps secretly underneath car chassis to track real-time location via Google Maps.", views: "38.2M" },
    { name: "Emergency Spring-Loaded Window Glass Breaker & Seatbelt Cutter Tool", low: 2.4, retail: 11.99, tag: "Tungsten carbide tip shatters tempered car windows underwater in an emergency escape.", views: "51.3M" },
    { name: "Waterproof Magnesium Fire Starter Flint Rod with Compass & Whistle", low: 2.8, retail: 13.99, tag: "Throws 5,500°F spark showers in soaking wet rain and snow to ignite emergency campfires.", views: "21.6M" },
    { name: "Car Leather & Vinyl Scratch Repair Restoration Color Cream Kit", low: 3.9, retail: 17.99, tag: "Heals tears, cracks, and burns on car seats, sofas, and leather jackets like new.", views: "32.0M" },
    { name: "Portable Solar Camping Shower Bag 5-Gallon (20L) with Foot Pump", low: 7.9, retail: 31.99, tag: "Heats water up to 113°F in direct sunlight for outdoor beach and camping showers.", views: "19.5M" },
    { name: "Car Headrest Backseat Hidden Hook & Phone Mount Hanger (Set of 2)", low: 2.2, retail: 10.99, tag: "Holds grocery bags and purses off the car floor; converts into backseat phone holder for kids.", views: "28.7M" },
    { name: "Ultimate Car Scratch & Swirl Removal Paste Polishing Wax", low: 3.4, retail: 15.99, tag: "Removes paint scuffs, swirl marks, and tree branch scratches without repainting costs.", views: "49.6M" },
    { name: "Rechargeable COB LED Work Light with Magnetic Base & 360° Swivel", low: 5.6, retail: 24.99, tag: "Stick to car engine hoods or machinery for ultra-bright hands-free mechanic lighting.", views: "24.1M" },
    { name: "Car Trash Can with Leakproof Liner & Storage Organizer Pockets", low: 4.8, retail: 21.99, tag: "Keeps car interior clean with waterproof leakproof lining and adjustable strap buckle.", views: "22.3M" },
    { name: "Universal Waterproof Car Backseat Cover for Dogs & Pets", low: 11.5, retail: 44.99, tag: "Protects car leather seats from muddy paws, shedding hair, and dog claw scratches.", views: "37.8M" },
    { name: "Multi-Functional Folding Shovel Survival Camping Spade Axe Tool", low: 12.9, retail: 49.99, tag: "Heavy duty carbon steel trench shovel, saw, bottle opener, and fire starter in one pack.", views: "26.4M" },
    { name: "Car Air Vent Gravity Phone Holder with Automatic Lock Grips", low: 3.1, retail: 14.99, tag: "Drops in with one hand; gravity auto-clamps side arms securely without squeaking.", views: "34.5M" },
    { name: "Windshield Glass Crack Repair Resin Kit DIY Automotive Fix", low: 2.7, retail: 12.99, tag: "Fills bullseye rock chips and windshield cracks with high-penetration optical resin in 20 mins.", views: "46.2M" },
    { name: "Tactical EDC Pen with Tungsten Carbide Glass Breaker & LED Torch", low: 3.6, retail: 16.99, tag: "Smooth writing ink pen constructed from aircraft aluminum for self-defense and emergencies.", views: "29.9M" },
    { name: "Portable Camping Inflatable Sleeping Pad with Built-In Foot Pump", low: 13.8, retail: 49.99, tag: "Stamps with foot to inflate a 3.5-inch thick insulated mattress in 60 seconds.", views: "33.1M" },
    { name: "Solar Rechargeable Tire Pressure Monitoring System (TPMS) with 4 Sensors", low: 14.2, retail: 52.99, tag: "Real-time wireless dashboard display warns of air leaks and tire blowouts.", views: "21.0M" },
    { name: "Microfiber Car Detailing Drying Towel 1200 GSM Extra Absorbent", low: 3.8, retail: 16.99, tag: "Soaks up 10x its weight in water to dry cars streak-free without scratching clear coat.", views: "38.6M" },
    { name: "Waterproof Dry Bag Backpack for Kayaking, Boating & Camping (10L)", low: 6.2, retail: 24.99, tag: "Roll-top seal keeps electronics, clothes, and wallet completely bone dry in white water.", views: "19.8M" },
    { name: "Car Trunk Organizer with Sturdy Dividers & Tie-Down Straps", low: 9.4, retail: 36.99, tag: "Prevents groceries, tools, and sports gear from rolling around in the trunk while driving.", views: "31.2M" },
    { name: "Emergency Mylar Thermal Space Blankets for Hypothermia (Set of 4)", low: 2.0, retail: 9.99, tag: "Reflects 90% of body heat back to prevent hypothermia during freezing mountain emergencies.", views: "14.5M" },
    { name: "Waterproof Paracord Survival Bracelet with Compass, Whistle & Knife", low: 1.9, retail: 8.99, tag: "Unravels into 12 feet of 550-lb military utility cord for rigging tents and splints.", views: "27.3M" },
    { name: "Ultrasonic Solar Animal & Pest Repeller for Gardens & Cars", low: 8.7, retail: 34.99, tag: "Flashes strobe lights and emits high-pitch frequencies to keep stray dogs and rodents away.", views: "17.6M" },
    { name: "Car Dent Puller Suction Cup Repair Tool Kit", low: 3.2, retail: 14.99, tag: "Strong natural rubber vacuum seal pops small door dings and hail dents out cleanly.", views: "39.1M" },
    { name: "Rechargeable LED Headlamp Flashlight with Motion Sensor Swivel", low: 4.9, retail: 21.99, tag: "Wave hand in front to toggle light on/off hands-free while fixing car or night running.", views: "35.8M" },
    { name: "Tactical Gun & Valuables Hidden Car Holster Under-Steering Mount", low: 5.9, retail: 24.99, tag: "Mounts discreetly under vehicle steering column for quick emergency access.", views: "22.4M" },
    { name: "Heavy Duty 4-Ton Tow Strap with Safety Hooks & Storage Bag", low: 7.8, retail: 29.99, tag: "Tough polyester recovery strap pulls stuck vehicles out of mud, snow, and sand.", views: "16.1M" },
    { name: "Car Side Window Magnetic Mesh Sunshades Breathable Bug Net", low: 4.4, retail: 18.99, tag: "Blocks sun glare while letting fresh breeze flow through car windows during road trips.", views: "25.0M" },
    { name: "Pocket Wire Saw Stainless Steel Cable for Survival Wood Cutting", low: 1.7, retail: 7.99, tag: "Cuts through firewood, plastic pipe, and bone with 360-degree swivel finger rings.", views: "18.3M" },
    { name: "Electric Heating Blanket for Car 12V Heated Road Trip Throw", low: 9.6, retail: 36.99, tag: "Plugs into 12V cigarette lighter to keep passengers warm during long winter drives.", views: "23.9M" },
    { name: "Car Wheel Rim Cleaning Brush with Soft Microfiber Bristles", low: 3.3, retail: 15.99, tag: "Snakes between brake calipers and alloy spoke gaps to scrub off baked brake dust.", views: "20.5M" },
    { name: "Emergency SOS LED Road Flare Flashing Beacon with Magnetic Base", low: 4.8, retail: 21.99, tag: "Visible from 1 mile away; replaces dangerous burning flares during roadside breakdowns.", views: "19.2M" },
    { name: "Portable Folding Camp Stool Ultra-Lightweight Backpacking Chair", low: 6.7, retail: 26.99, tag: "Sets up in 10 seconds and holds up to 250 lbs for fishing, camping, and outdoor lines.", views: "28.4M" },
    { name: "Anti-Theft Steering Wheel Lock with Dual Security Keys", low: 11.2, retail: 42.99, tag: "Hardened steel bar immobilizes steering wheel against electronic key-relay car thefts.", views: "33.6M" },
    { name: "Car Seat Gap Filler Organizer with Dual USB Charging Ports", low: 5.8, retail: 24.99, tag: "Prevents phones, keys, and coins from falling down the black hole between seats.", views: "47.9M" },
    { name: "Waterproof Hard Shell Tactical First Aid Kit 120-Piece Trauma Bag", low: 8.5, retail: 34.99, tag: "Essential emergency bandages, tourniquet, CPR mask, and shears for car and camping.", views: "21.7M" },
    { name: "Solar Windshield Exhaust Fan for Parked Car Heat Ventilation", low: 6.9, retail: 27.99, tag: "Blows hot air and plastic fumes out of parked cars in hot parking lots using solar panel.", views: "36.2M" },
    { name: "Universal Roof Rack Tie-Down Ratchet Straps 15ft (Set of 2)", low: 5.2, retail: 22.99, tag: "Secures kayaks, lumber, and cargo roof boxes firmly with rustproof padded ratchets.", views: "14.9M" },
    { name: "Emergency Tire Plug Puncture Repair Kit with Heavy Duty T-Handle", low: 3.7, retail: 16.99, tag: "Fixes tubeless tire nail punctures on the roadside without removing the tire from car.", views: "30.3M" },
    { name: "Portable Mosquito & Bug Repeller Lantern for Campsites", low: 7.6, retail: 29.99, tag: "Creates a 15-foot zone of scent-free mosquito protection around camping tables.", views: "26.8M" },
    { name: "Car Windshield Wiper Blade Sharpener Repair Tool", low: 2.6, retail: 11.99, tag: "Micro-fine abrasive restores worn wiper rubber edges to wipe rain streak-free in seconds.", views: "38.7M" },
    { name: "Foldable Silicone Dog Bowl with Carabiner for Camping Travel", low: 1.8, retail: 7.99, tag: "Pops open for pet water and kibble on hiking trails; clips to leash or backpack.", views: "19.1M" },
    { name: "Multi-Function Camping Hammer & Axe Multi-Tool with Safety Sheath", low: 8.9, retail: 34.99, tag: "Includes hammer, axe, pliers, saw, knife, and screwdrivers in one compact steel frame.", views: "24.6M" },
    { name: "Universal Cup Holder Phone Mount with Adjustable Heavy Duty Base", low: 5.5, retail: 23.99, tag: "Expands tightly into any car cup holder to hold phone at comfortable viewing angle.", views: "29.5M" },
    { name: "Waterproof Tactical Backpack 40L Military Assault Rucksack", low: 14.8, retail: 54.99, tag: "MOLLE webbing with multiple zipper compartments for outdoor hiking and bug-out bags.", views: "35.0M" },
    { name: "Car Seat Headrest Neck Memory Foam Pillow Cushion", low: 4.9, retail: 21.99, tag: "Fills the gap between neck and car seat to eliminate whiplash stiffness on long road trips.", views: "31.4M" },
    { name: "Portable Rechargeable Electric Air Duster for Car Interiors & Keyboards", low: 11.9, retail: 44.99, tag: "Blows 50,000 RPM hurricane wind to dislodge dust from air vents without canned chemical gas.", views: "52.0M" },
    { name: "Car Door Step Pedal Hook with Safety Glass Breaker Tip", low: 6.4, retail: 25.99, tag: "Hooks onto car door latch to easily climb up and load roof racks or wash car roof.", views: "41.3M" },
    { name: "High-Powered Tactical Zoomable LED Flashlight 10,000 Lumens", low: 6.8, retail: 27.99, tag: "Illuminates objects 1,000 feet away with 5 lighting modes and aircraft aluminum body.", views: "39.9M" },
    { name: "Car Battery Terminal Anti-Corrosion Washers & Cleaning Wire Brush", low: 2.2, retail: 9.99, tag: "Cleans battery terminal acid buildup to ensure reliable car ignition in cold weather.", views: "11.3M" },
    { name: "Anti-Freeze Car Windshield Snow Cover with Magnetic Mirror Caps", low: 5.8, retail: 24.99, tag: "Pull off in the morning to instantly reveal a clean frost-free windshield without ice scraping.", views: "37.5M" },
    { name: "Collapsible Lightweight Trekking Poles Hiking Walking Sticks (Pair)", low: 9.9, retail: 38.99, tag: "Shock-absorbing aluminum shafts reduce knee impact while hiking downhill trails.", views: "22.8M" },
    { name: "Car Center Console Armrest Memory Foam Height Extender Cushion", low: 4.6, retail: 19.99, tag: "Raises hard factory armrest for comfortable elbow resting while driving long highway miles.", views: "18.7M" },
    { name: "Multi-Pocket Car Visor Organizer for Sunglasses, Cards & Pens", low: 2.9, retail: 13.99, tag: "Clips onto sun visor to keep sunglasses, toll passes, and documents within arm reach.", views: "25.2M" },
    { name: "Portable Pop-Up Privacy Changing Tent for Outdoor Shower & Toilet", low: 13.5, retail: 49.99, tag: "Spring steel frame pops open instantly for private beach changing, camping, and porta-potties.", views: "20.4M" },
    { name: "Car Seat Belt Buckle Protector Cover Anti-Scratch Silicone Guard", low: 1.9, retail: 8.99, tag: "Prevents metal seatbelt buckles from banging and scratching car door frames.", views: "16.5M" },
    { name: "Emergency Sleeping Bag Bivy Sack Thermal Survival Shelter", low: 3.1, retail: 14.99, tag: "Windproof and waterproof thermal bivy reflects body heat back to keep you alive in blizzards.", views: "19.8M" },
    { name: "Universal Heavy Duty Anti-Skid Emergency Snow Tire Straps (Set of 6)", low: 8.6, retail: 34.99, tag: "Installs in 3 minutes over tires to gain instant traction in slippery ice and deep mud.", views: "32.1M" }
  ],
  "tools-utility": [
    { name: "3-in-1 Digital Laser Tape Measure with LCD Backlit Screen", low: 11.9, retail: 44.99, tag: "Measures distances up to 131 feet with laser precision plus 16ft heavy duty traditional blade.", views: "37.8M" },
    { name: "Heavy-Duty Magic Double-Sided Nano Grip Mounting Tape", low: 2.1, retail: 11.99, tag: "Holds up to 18 lbs on walls without nails or screws; washes clean and reuses endlessly.", views: "94.5M" },
    { name: "Universal Self-Adjusting Socket Wrench with Power Drill Adapter", low: 4.5, retail: 19.99, tag: "54 spring steel pins automatically grip any bolt, nut, hook, or odd shape from 7mm to 19mm.", views: "58.2M" },
    { name: "Contour Duplication Gauge with Metal Locking Mechanism (10-Inch)", low: 5.2, retail: 22.99, tag: "Duplicates complex curves around pipes, tile corners, and molding for precise carpet cuts.", views: "46.7M" },
    { name: "Damaged Stripped Screw Extractor & Broken Bolt Remover Bit Set", low: 3.4, retail: 15.99, tag: "Bores out and removes stripped, rusted, and seized screws in 10 seconds with any drill.", views: "51.0M" },
    { name: "Flexible Drill Bit Extension Shaft & 105° Right Angle Adapter Kit", low: 3.6, retail: 16.99, tag: "Bends and snakes into tight chassis and engine spaces where rigid drills cannot fit.", views: "39.4M" },
    { name: "Multi-Angle Measuring Folding Aluminum Ruler with Tile Hole Locator", low: 4.8, retail: 21.99, tag: "Creates custom stencils for tricky tile, brick, and lumber cuts with locking knobs.", views: "31.2M" },
    { name: "Automatic Wire Stripper and Crimper Tool with Self-Adjusting Jaw", low: 6.9, retail: 27.99, tag: "Strips copper wire insulation cleanly in one squeeze without nicking core conductors.", views: "28.5M" },
    { name: "Rechargeable Cordless Rotary Multi-Tool Kit with 50 Accessories", low: 12.8, retail: 48.99, tag: "Grinds, polishes, engraves, and cuts wood, plastic, and metal with 3 variable speeds.", views: "34.0M" },
    { name: "Handheld Self-Leveling Cross-Line Laser Level with Mini Tripod", low: 14.5, retail: 52.99, tag: "Projects bright horizontal and vertical laser guide lines for hanging pictures and tiling.", views: "29.7M" },
    { name: "Waterproof Heavy-Duty Rubberized Repair Tape for Leaking Pipes", low: 2.8, retail: 13.99, tag: "Bonds instantly even underwater to seal bursting pipes, water hoses, and roof gutters.", views: "63.2M" },
    { name: "Magnetic Wristband with Strong Magnets for Holding Screws & Nails", low: 3.2, retail: 14.99, tag: "Keeps screws, nails, and drill bits right on your wrist while climbing ladders.", views: "41.6M" },
    { name: "3-in-1 Silicone Caulking Scraper & Sealant Finishing Tool Kit", low: 2.6, retail: 12.99, tag: "Removes old crusty bathroom caulk and lays down clean, professional waterproof silicone beads.", views: "36.8M" },
    { name: "Telescopic Magnetic Pickup Tool with 360° Flexible LED Flashlight", low: 3.5, retail: 15.99, tag: "Extends 22 inches to retrieve dropped metal bolts and keys from dark engine bays.", views: "27.1M" },
    { name: "Precision 128-in-1 Magnetic Screwdriver Set for Electronics & Phones", low: 7.8, retail: 29.99, tag: "Includes specialized Torx, Pentalobe, and tri-wing bits for laptops, iPhones, and Nintendo.", views: "43.9M" },
    { name: "Electric Cordless Screwdriver with 3.6V Rechargeable Battery", low: 8.9, retail: 34.99, tag: "Forward/reverse push-button screwdriving with forward LED light for flat-pack IKEA furniture.", views: "32.4M" },
    { name: "Automatic Center Punch with Heavy Duty Brass Spring Tension", low: 2.4, retail: 11.99, tag: "Press down to strike an exact center dimple in steel or wood without needing a hammer.", views: "24.6M" },
    { name: "Thread Repair File & External Deburring Chamfer Tool for Bolts", low: 3.1, retail: 14.99, tag: "Shaves sheared bolt edges smooth so nuts spin on effortlessly without cross-threading.", views: "38.5M" },
    { name: "Woodworking Right Angle 90-Degree Corner Clamp (Set of 4)", low: 5.9, retail: 24.99, tag: "Holds cabinet corners and picture frames at square 90-degree angles during gluing.", views: "26.3M" },
    { name: "Universal Socket Grip Multi-Tool for Hex Nuts & Wing Nuts", low: 4.2, retail: 18.99, tag: "One socket replaces a whole heavy toolbox of metric and standard wrenches.", views: "31.9M" },
    { name: "Heavy Duty Automatic Staple Gun 3-in-1 with 3000 Staples", low: 7.4, retail: 29.99, tag: "Shoots D, U, and T staples for furniture upholstery, wiring, and insulation projects.", views: "19.4M" },
    { name: "Under-Door Draft Stopper Twin Door Guard Sound & Weather Blocker", low: 3.8, retail: 16.99, tag: "Slides under door to block AC cold air drafts, dust, noise, and bugs from entering rooms.", views: "52.8M" },
    { name: "Electric Engraving Pen Machine with Diamond Tip for Metal & Glass", low: 4.6, retail: 19.99, tag: "Carve names, serial numbers, and artwork permanently onto tools, jewelry, and ceramics.", views: "28.0M" },
    { name: "Adjustable Pipe Wrench Pliers with Quick-Release Push Button", low: 6.3, retail: 25.99, tag: "Grips round pipes and hex fittings securely without slipping or crushing delicate copper.", views: "17.8M" },
    { name: "Rechargeable High-Intensity Tactical Flashlight with COB Sidelight", low: 4.9, retail: 21.99, tag: "Pocket aluminum body with zoomable spotlight and magnetic tail cap for hands-free repair.", views: "35.2M" },
    { name: "Hole Saw Cutter Kit with Arbor & Drill Bit for Wood & Drywall", low: 5.8, retail: 24.99, tag: "Cuts clean circular holes from 3/4 inch to 5 inches for recessed lights and pipes.", views: "18.6M" },
    { name: "Heavy Duty Suction Cup Glass Lifter & Tile Dent Puller", low: 4.7, retail: 21.99, tag: "Lifts up to 110 lbs of flat glass panels, marble tiles, and metal appliances safely.", views: "29.3M" },
    { name: "Professional Stainless Steel Vernier Caliper 6-Inch with LCD", low: 6.8, retail: 28.99, tag: "Measures internal, external, depth, and step dimensions with 0.01mm high accuracy.", views: "22.5M" },
    { name: "Drain Snake Clog Remover Hair Catcher Tool (Pack of 5)", low: 1.9, retail: 8.99, tag: "Flexible barbed plastic snakes pull clumps of hair out of bathroom sink drains in seconds.", views: "48.1M" },
    { name: "Drywall Sanding Sponge Block Set with Dual-Grit Texture", low: 2.2, retail: 10.99, tag: "Smooths joint compound, wall spackle, and wooden banisters without tearing.", views: "12.7M" },
    { name: "Multi-Function Wire Stripper, Cable Cutter & Crimper Pliers", low: 4.4, retail: 19.99, tag: "All-in-one electrician pliers cut wire, strip 10-22 AWG, and crimp insulated terminals.", views: "24.9M" },
    { name: "Magnetic Screw Tray Bowl Stainless Steel for Mechanic Nuts", low: 2.9, retail: 13.99, tag: "Super strong rubber-coated magnet holds small bolts upside down during engine repairs.", views: "21.4M" },
    { name: "Self-Fusing Silicone Waterproof Seal Tape for Electrical & Hoses", low: 2.5, retail: 12.99, tag: "Fuses to itself to create an airtight, watertight insulated barrier up to 500°F.", views: "27.8M" },
    { name: "Anti-Static Wrist Strap Band for Computer & Electronics Repair", low: 1.8, retail: 8.99, tag: "Grounds static electricity to protect expensive PC motherboards and RAM from shocks.", views: "16.2M" },
    { name: "Pocket Folding Multi-Tool Pliers with 14 Built-In Implements", low: 7.9, retail: 31.99, tag: "Needle-nose pliers, wire cutters, knife blade, can opener, and screwdrivers in nylon pouch.", views: "33.7M" },
    { name: "Rechargeable Motion Sensor Cabinet Hinge LED Lights (Set of 10)", low: 4.1, retail: 18.99, tag: "Snaps directly onto cabinet hinges to illuminate dark closets automatically when door opens.", views: "44.2M" },
    { name: "Hex Shank Quick Change Magnetic Bit Holder Extension 3-Piece", low: 2.7, retail: 12.99, tag: "Quick-release collar locks 1/4 inch drill bits securely for fast one-handed bit swapping.", views: "19.8M" },
    { name: "Heavy Duty Caulking Gun with Smooth Dripless Pressure Rod", low: 5.5, retail: 23.99, tag: "12:1 thrust ratio delivers smooth, steady flow of adhesive with instant pressure relief.", views: "14.3M" },
    { name: "Plastic Welding Machine Kit with 400 Hot Staples for Bumper Repair", low: 11.2, retail: 42.99, tag: "Melts steel staples into cracked car bumpers, plastic toys, and trash bins for permanent repair.", views: "41.0M" },
    { name: "Corner Clamp Framing Vise for Woodworking Projects", low: 4.3, retail: 18.99, tag: "Single handle 90-degree adjustable jaw holds wood pieces up to 2.7 inches firmly.", views: "15.9M" },
    { name: "Digital Non-Contact Voltage Tester Pen with LED Flashlight", low: 3.7, retail: 16.99, tag: "Detects live electrical wires through insulation without touching bare copper; beeps loudly.", views: "30.6M" },
    { name: "Flexible Magnetic Claw Pickup Tool with 4 Prongs", low: 3.0, retail: 13.99, tag: "Push plunger to expand steel claws and grab non-magnetic plastic dropped objects from pipes.", views: "25.7M" },
    { name: "Heavy Duty Hand Riveter Tool with 100 Blind Aluminum Rivets", low: 7.6, retail: 29.99, tag: "Fastens sheet metal, gutters, and automotive panels with 4 interchangeable nozzle sizes.", views: "18.1M" },
    { name: "Adjustable Hole Puncher for Leather Belts, Watchbands & Crafts", low: 4.5, retail: 19.99, tag: "Rotary punch wheel creates clean round holes from 2mm to 4.5mm with minimal hand force.", views: "28.3M" },
    { name: "Titanium Step Drill Bit Set (3 Pieces) for Sheet Metal & Wood", low: 5.1, retail: 22.99, tag: "Drills multiple hole diameters from 1/8 inch to 3/4 inch without changing drill bits.", views: "37.2M" },
    { name: "Wall Stud Finder Scanner 4-in-1 Sensor for Wood, AC Wires & Metal", low: 9.3, retail: 36.99, tag: "Beeps and displays LCD graph to locate hidden wall studs before drilling wall anchors.", views: "34.8M" },
    { name: "Cable Wire Puller Threading Fish Tape with Flexible Leader", low: 4.8, retail: 21.99, tag: "Snakes through drywall conduits and floorboards to pull electrical cables effortlessly.", views: "21.9M" },
    { name: "Magnetic Bit Screw Driver Handle with Internal Storage Compartment", low: 3.3, retail: 14.99, tag: "Ergonomic rubberized grip with 12 double-ended chrome vanadium bits stored in handle.", views: "16.5M" },
    { name: "Stainless Steel Pocket Wire Stripper & Bottle Opener Keychain", low: 1.9, retail: 8.99, tag: "Miniature everyday carry tool for emergency wire repairs, measuring, and bottle opening.", views: "13.8M" },
    { name: "Heavy Duty Furniture Moving Sliders & Lifter Roller Set", low: 8.4, retail: 33.99, tag: "Pry up heavy refrigerators, sofas, and desks to roll across hardwood floors without scratches.", views: "57.3M" },
    { name: "Self-Adhesive Rubber Weather Stripping Seal Strip for Windows (33ft)", low: 3.6, retail: 16.99, tag: "D-shape foam seal stops chilly winter wind leaks and outside street noise instantly.", views: "38.9M" },
    { name: "Rechargeable Motion Sensor Under-Bed Night Light LED Strip", low: 7.2, retail: 28.99, tag: "Gently lights up floor when your feet touch the floor at night without waking your partner.", views: "46.1M" },
    { name: "Heavy Duty Staple Remover Tool for Upholstery & Woodworking", low: 2.3, retail: 10.99, tag: "Curved rocker lever lifts deeply embedded staples cleanly without gouging wood.", views: "14.2M" },
    { name: "Anti-Vibration Rubber Washing Machine Support Pads (Set of 4)", low: 3.4, retail: 15.99, tag: "Absorbs spin-cycle vibration and stops loud laundry machines from walking across floors.", views: "65.4M" },
    { name: "Electric Soldering Iron Kit with Temperature Knob & 5 Tips", low: 6.9, retail: 27.99, tag: "Heats to 842°F in 30 seconds with ceramic core for wiring, circuits, and drone repairs.", views: "29.0M" },
    { name: "Automatic Water Level Control Float Valve for Water Tanks", low: 3.9, retail: 17.99, tag: "Replaces traditional bulky brass float ball; stops overflow automatically without electricity.", views: "19.7M" },
    { name: "Multi-Functional Folding Hex Allen Key Wrench Set (9 in 1)", low: 3.8, retail: 16.99, tag: "Drop-forged steel hex keys fold like a pocket knife; never lose an Allen wrench again.", views: "17.4M" },
    { name: "Adjustable Door Lock Installation Kit for Wooden Doors", low: 6.2, retail: 25.99, tag: "Templates and hole saws guide exact door knob and deadbolt boring in under 10 minutes.", views: "15.0M" },
    { name: "Grip Tape for Stairs Outdoor Waterproof Non-Slip Traction Tread", low: 4.7, retail: 21.99, tag: "Heavy grit adhesive strip prevents dangerous slips on wet wooden decks and slippery stairs.", views: "26.1M" },
    { name: "Cordless Hot Glue Gun USB Rechargeable with 20 Glue Sticks", low: 7.8, retail: 31.99, tag: "Heats up in 90 seconds without annoying cords getting in the way of DIY craft projects.", views: "39.6M" },
    { name: "Magnetic Tool Holder Strip Heavy Duty Wall Mount (Set of 3)", low: 6.5, retail: 26.99, tag: "Holds heavy hammers, pipe wrenches, and chisels safely organized on workshop wall.", views: "22.3M" },
    { name: "Retractable Utility Box Cutter Knife with 10 SK5 Replacement Blades", low: 2.5, retail: 11.99, tag: "Ultra-sharp heavy duty utility knife slices cardboard, carpet, and rope smoothly.", views: "18.8M" },
    { name: "Heavy Duty Ratchet Tie Down Straps with Padded S-Hooks (Set of 4)", low: 9.1, retail: 36.99, tag: "Secures motorcycles, appliances, and cargo with 1,500 lbs breaking strength.", views: "20.7M" },
    { name: "Drill Brush Power Scrubber 4-Piece Attachment Kit", low: 4.8, retail: 21.99, tag: "Attaches to any cordless drill to blast soap scum from tubs and wheels 10x faster.", views: "61.2M" },
    { name: "Self-Leveling Multi-Surface Epoxy Resin Wood Filler Paste", low: 5.4, retail: 23.99, tag: "Fills deep gouges, rot holes, and cracks in furniture; cures rock-hard and stains naturally.", views: "16.8M" }
  ],
  "fitness-lifestyle": [
    { name: "Smart Digital Cordless Jump Rope with Calorie Counter & Timer", low: 4.6, retail: 21.99, tag: "Weighted balls simulate rope jumping indoors without tripping or whipping furniture.", views: "49.5M" },
    { name: "Portable Pilates Resistance Toning Bar with Foot Straps", low: 6.8, retail: 27.99, tag: "Replaces bulky gym cable machines for full-body sculpting, glute bridges, and arm curls.", views: "58.1M" },
    { name: "Multi-Level Acupressure Lumbar Back Stretcher Device", low: 4.2, retail: 19.99, tag: "Decompresses spinal discs in 5 minutes to soothe chronic sciatic and lower back pain.", views: "72.4M" },
    { name: "Electronic Hand Grip Strength Trainer with Digital Rep Counter", low: 3.9, retail: 18.99, tag: "Adjustable resistance from 22 to 220 lbs with LCD display tracks hand grip gains.", views: "38.6M" },
    { name: "Wooden Wobble Balance Board for Core Stability & Standing Desk", low: 11.8, retail: 44.99, tag: "Engages abdominal stabilizer muscles and burns calories while working at your desk.", views: "29.3M" },
    { name: "Self-Cleaning UV-C Insulated Stainless Steel Smart Water Bottle", low: 14.5, retail: 54.99, tag: "UV-C light in cap purifies water and sanitizes inner flask every 2 hours automatically.", views: "33.7M" },
    { name: "Smart Wireless Abdominal Muscle Trainer EMS Stimulation Patch", low: 5.8, retail: 24.99, tag: "Sends bio-pulse microcurrents to contract and tone abs while relaxing on the couch.", views: "64.0M" },
    { name: "9-in-1 Foldable Push-Up Board with Color-Coded Muscle Target System", low: 6.9, retail: 28.99, tag: "Color channels position handles to maximize chest, shoulder, back, and tricep hypertrophy.", views: "81.2M" },
    { name: "High-Density Foam Massage Roller for Deep Tissue Myofascial Release", low: 5.4, retail: 23.99, tag: "Rolls out painful knots, tight IT bands, and sore quads before and after gym training.", views: "25.0M" },
    { name: "Silicone Weighted Arm & Ankle Bangles for Walking & Pilates (Pair)", low: 7.2, retail: 29.99, tag: "Sleek, sweatproof wrist weights add hands-free constant resistance to home workouts.", views: "52.3M" },
    { name: "Ab Roller Wheel with Automatic Rebound & Ergonomic Elbow Support", low: 11.5, retail: 42.99, tag: "Built-in spring rebound assists rollback to build rock-hard abs without hurting lower back.", views: "68.9M" },
    { name: "Silicone Finger Extensor Resistance Bands for Grip & Forearm Rehab", low: 2.1, retail: 10.99, tag: "Strengthens finger extensor muscles to balance grip workouts and prevent tennis elbow.", views: "31.4M" },
    { name: "Speed Agility Ladder & Workout Training Cones Footwork Set", low: 6.3, retail: 25.99, tag: "Builds explosive quickness, coordination, and footwork speed for soccer and athletes.", views: "19.8M" },
    { name: "Deep Tissue Acupressure Yoga Wheel for Spine & Chest Opening", low: 8.9, retail: 34.99, tag: "Stretches tight thoracic spine and shoulders; supports backbends and yoga poses.", views: "24.6M" },
    { name: "Breathable Compression Knee Sleeve with Silicone Patella Gel Pad", low: 3.8, retail: 16.99, tag: "Side spring stabilizers absorb joint shock during running, basketball, and heavy squats.", views: "43.5M" },
    { name: "Adjustable Weighted Vest 10kg with Breathable Mesh Straps", low: 16.9, retail: 64.99, tag: "Evenly distributed weight increases calisthenics, pushup, and jogging intensity.", views: "28.0M" },
    { name: "Peanut Double Massage Lacrosse Ball for Spine & Neck Trigger Points", low: 2.8, retail: 13.99, tag: "Cradles spine to relieve tight neck muscles and scapular knots without direct bone pressure.", views: "18.2M" },
    { name: "Doorway Pull-Up Bar with No-Screw Lever Clamp Installation", low: 12.4, retail: 46.99, tag: "Hangs securely on standard door frames without drilling holes for wide pullups and chin-ups.", views: "37.1M" },
    { name: "Loop Exercise Resistance Bands Set of 5 with Different Resistances", low: 2.9, retail: 14.99, tag: "Natural latex bands for glute activation, hip thrusts, and physical therapy warmups.", views: "54.7M" },
    { name: "Waterproof Running Waist Belt Fanny Pack with Phone Touch Window", low: 3.6, retail: 16.99, tag: "Snug bounce-free waist pouch holds large phones, keys, and cards during marathons.", views: "22.4M" },
    { name: "Smart Posture Sensor Reminder with Haptic Vibration Alert", low: 4.8, retail: 21.99, tag: "Clips to collar to notify you whenever your shoulders roll forward during typing.", views: "19.0M" },
    { name: "Reflex Boxing Speed Ball with Adjustable Elastic Headband", low: 2.7, retail: 12.99, tag: "Fun addictive boxing hand-eye coordination game burns fat and sharpens reflex timing.", views: "63.8M" },
    { name: "Thigh Master Toner Muscle Exerciser for Inner Thighs & Pelvic Floor", low: 4.5, retail: 19.99, tag: "Spring-loaded foam arms tone inner thighs, arms, and pelvic muscles while watching TV.", views: "35.2M" },
    { name: "Cold Therapy Ice Compression Knee Wrap with Dual Gel Packs", low: 7.8, retail: 31.99, tag: "Stays flexible when frozen; delivers 360° targeted cold therapy for ACL and meniscus swelling.", views: "21.6M" },
    { name: "Adjustable Slant Board Calf Ankle Stretcher Incline Board", low: 9.7, retail: 38.99, tag: "Stretches tight Achilles tendons and plantar fascia to prevent shin splints and heel spurs.", views: "27.5M" },
    { name: "Breathable Ankle Support Brace with Adjustable Crisscross Straps", low: 3.4, retail: 15.99, tag: "Stabilizes sprained ankles and prevents rolled joints during running and volleyball.", views: "16.9M" },
    { name: "Heavy Duty Gym Lifting Wrist Straps with Neoprene Padding", low: 2.5, retail: 12.99, tag: "Locks grip onto heavy deadlift barbells and shrugs so forearms never give out before back.", views: "33.2M" },
    { name: "Stainless Steel Shaker Bottle with Wire Whisk Ball & Protein Chamber", low: 5.2, retail: 23.99, tag: "Blends protein shakes smooth without lumps; odor-resistant stainless steel flask.", views: "26.4M" },
    { name: "Foot Rocker Calf Stretcher for Plantar Fasciitis & Achilles Tendonitis", low: 3.9, retail: 17.99, tag: "Ergonomic rocker motion isolates lower leg muscles for deep restorative tendon stretching.", views: "19.3M" },
    { name: "Silicone Grip Hand Strengthener Ring Set (3 Resistance Levels)", low: 2.2, retail: 10.99, tag: "Pocket-sized silicone squeeze rings strengthen crushing grip for climbers and musicians.", views: "14.8M" },
    { name: "Sweat Sauna Body Shaper Vest for Accelerated Calorie Burn", low: 5.9, retail: 24.99, tag: "Polymer fabric locks in core body heat to induce intense sweat during cardio training.", views: "41.9M" },
    { name: "Gym Towel with Magnetic Hood Attachment for Fitness Machines", low: 4.1, retail: 18.99, tag: "Snaps magnetically to metal weight machines so your gym towel never drops on dirty gym floors.", views: "36.5M" },
    { name: "Quick-Dry Cooling Towel for Neck (Set of 3) Instant Chilling Relief", low: 2.6, retail: 12.99, tag: "Soak, wring out, and snap to activate 30°F below skin temperature cooling for hours.", views: "31.7M" },
    { name: "Smart Fitness Tracker Band with Heart Rate & Blood Oxygen Monitor", low: 8.8, retail: 34.99, tag: "Tracks daily steps, sleep stages, and workout calories with vibrant color screen.", views: "47.2M" },
    { name: "Adjustable Speed Agility Training Hurdle Set for Athletics", low: 11.2, retail: 42.99, tag: "Builds knee drive, hurdle stepping speed, and jumping power on athletic turf.", views: "15.4M" },
    { name: "Heavy Duty Fabric Booty Resistance Bands Set (Non-Slip Fabric)", low: 4.4, retail: 19.99, tag: "Woven fabric bands will never pinch skin, roll up, or snap during squats and lunges.", views: "56.0M" },
    { name: "Portable Folding Yoga Mat with Travel Carry Pouch (Non-Slip TPE)", low: 8.5, retail: 33.99, tag: "Folds like a book to slide into carry-on backpacks for hotel room yoga sessions.", views: "22.1M" },
    { name: "Gua Sha Stainless Steel Muscle Scraper Tool for IASTM Therapy", low: 6.7, retail: 27.99, tag: "Medical-grade beveled edge breaks up deep myofascial scar tissue and accelerates healing.", views: "30.4M" },
    { name: "Arch Support Compression Sleeves for Flat Feet & Plantar Fasciitis", low: 2.8, retail: 13.99, tag: "Gel pad cushions foot arch inside shoes to eliminate standing heel pain all day.", views: "24.8M" },
    { name: "Self-Inflatable Camping Foam Travel Pillow with Ergonomic Neck Curve", low: 4.9, retail: 21.99, tag: "Twist valve to self-inflate a soft foam sleeping pillow; packs down to orange size.", views: "18.6M" },
    { name: "Finger Grip Silicone Expander Exerciser for Rock Climbers & Musicians", low: 1.9, retail: 9.99, tag: "Individual finger slots isolate each finger joint for dexterity and endurance training.", views: "17.3M" },
    { name: "Adjustable Dumbbell Weight Clamps Collars Quick Release (Pair)", low: 3.3, retail: 15.99, tag: "Cam-action lock snaps over 1-inch or 2-inch Olympic barbells to hold plates securely.", views: "20.1M" },
    { name: "Posture Corrector Clavicle Support Brace for Upper Back Realignment", low: 4.7, retail: 21.99, tag: "Lightweight discreet neoprene straps pull hunchback forward shoulders straight.", views: "34.2M" },
    { name: "Vibrating Foam Roller for Deep Tissue Myofascial Muscle Release", low: 16.5, retail: 59.99, tag: "4 high-intensity vibration settings combine compression and percussion for faster recovery.", views: "29.7M" },
    { name: "Speed Skipping Rope with Ball Bearings & Steel Wire Cable", low: 3.2, retail: 14.99, tag: "360° dual ball-bearing spin enables effortless double-unders without cable twisting.", views: "39.0M" },
    { name: "Weighted Workout Training Sled Harness with Pulling Strap", low: 7.6, retail: 29.99, tag: "Padded shoulder harness for pulling tires, sleds, and resistance running drills.", views: "14.5M" },
    { name: "Silicone Ring Wedding Band for Fitness & Gym Lifters (Pack of 4)", low: 2.4, retail: 11.99, tag: "Flexible medical silicone protects fingers from painful ring avulsion while lifting weights.", views: "25.9M" },
    { name: "Breathable Weightlifting Gym Gloves with Integrated Wrist Wraps", low: 4.8, retail: 21.99, tag: "Silicone honeycomb palm padding stops palm calluses and provides wrist stabilization.", views: "31.2M" },
    { name: "Adjustable Resistance Arm & Chest Expander Spring Machine", low: 8.9, retail: 34.99, tag: "High-strength carbon steel springs provide 40 to 110 lbs of upper body resistance.", views: "18.4M" },
    { name: "Heated Lumbar Lower Back Belt Wrap with USB Heating Pad", low: 9.4, retail: 36.99, tag: "Direct infrared soothing heat eases menstrual cramps and lower back muscle spasms.", views: "28.7M" },
    { name: "Pilates Soft Magic Fitness Circle Ring with Dual Padded Handles", low: 5.7, retail: 24.99, tag: "Targeted resistance ring tones thighs, pelvic floor, biceps, and core muscles.", views: "23.5M" },
    { name: "Kinesiology Therapeutic Muscle Tape Roll Waterproof Elastic (2 Rolls)", low: 3.5, retail: 16.99, tag: "Supports injured rotator cuffs and knee ligaments with medical grade acrylic adhesive.", views: "27.8M" },
    { name: "Inflatable Donut Sitting Cushion for Tailbone Hemorrhoid Pain", low: 4.3, retail: 18.99, tag: "Ring shape relieves direct pressure on pelvic sensitive zones while sitting at home.", views: "16.1M" },
    { name: "Smart Bluetooth Body Tape Measure with Health Tracker App", low: 8.2, retail: 32.99, tag: "Retractable tape locks circumference and sends centimeter measurements to phone.", views: "21.3M" },
    { name: "Reflective Running Vest with 360° Visibility & LED Flashing Lights", low: 5.1, retail: 22.99, tag: "Keeps early morning and night runners visible to cars from 800 feet away.", views: "19.9M" },
    { name: "Deep Tissue Trigger Point Massage Stick Roller with Spindle Nodes", low: 4.6, retail: 19.99, tag: "Self-massaging wand targets tight calf knots and hamstrings without lying on the floor.", views: "22.0M" },
    { name: "Breathable Copper Infused Compression Elbow Sleeve for Tendonitis", low: 3.1, retail: 14.99, tag: "Delivers joint warmth and compression to ease golfer elbow and forearm strain.", views: "17.5M" },
    { name: "Adjustable Hand Grip Strengthener with Counter 10kg to 60kg", low: 3.3, retail: 15.99, tag: "Sturdy steel spring with mechanical repetition counter records every forearm rep.", views: "34.0M" },
    { name: "Ergonomic Under-Desk Footrest with Washable Velvet Cover", low: 7.9, retail: 31.99, tag: "Elevates feet to improve hip blood flow and take pressure off thigh nerves while working.", views: "26.7M" },
    { name: "Anti-Burst Exercise Stability Gym Ball 65cm with Quick Foot Pump", low: 6.8, retail: 27.99, tag: "Thick honeycomb PVC supports up to 600 lbs for pregnancy, core workouts, and desk sitting.", views: "25.1M" }
  ],
  "smart-home": [
    { name: "3D Magnetic Levitating Floating Moon Lamp with Touch Base", low: 22.5, retail: 89.99, tag: "Floats and slowly rotates in mid-air using electromagnetic suspension with warm moon glow.", views: "92.4M" },
    { name: "Astronaut Galaxy Nebula Star Projector with Wireless Remote", low: 11.4, retail: 44.99, tag: "Fills ceilings and bedroom walls with breathing starry skies, colorful nebulas, and timer.", views: "135.0M" },
    { name: "Realistic Flame Effect Ultrasonic Aroma Diffuser & Night Lamp", low: 8.9, retail: 36.99, tag: "Combines LED lighting and cool water vapor to create a mesmerizing dancing fireplace effect.", views: "88.1M" },
    { name: "Ultra-Thin Motion-Sensor Under-Cabinet Wireless LED Light Bar", low: 4.8, retail: 21.99, tag: "Magnetic rechargeable light sticks under kitchen cabinets; lights up when you walk in.", views: "64.7M" },
    { name: "RGB Sound-Reactive Ambient Pickup Rhythm Light Bars (Pair)", low: 5.9, retail: 24.99, tag: "32 dynamic colorful LED beads bounce and pulse in real time to music and gaming audio.", views: "71.3M" },
    { name: "Smart WiFi Universal IR & RF Remote Controller Hub", low: 6.4, retail: 25.99, tag: "Replaces all TV, AC, and motorized curtain remotes with smartphone voice automation.", views: "26.8M" },
    { name: "Wireless Smart Video Doorbell with 2-Way Audio & Chime", low: 13.8, retail: 52.99, tag: "Notifies your smartphone when someone rings; speak to delivery drivers from anywhere.", views: "41.9M" },
    { name: "3D Moving Sand Art Deep Sea Liquid Hourglass Picture Frame", low: 6.2, retail: 26.99, tag: "Flip the glass circle to create mesmerizing mountain landscapes and soothing sand dunes.", views: "79.4M" },
    { name: "Touchless Automatic Foaming Soap Dispenser with Infrared Sensor", low: 5.1, retail: 22.99, tag: "Dispenses luxurious rich foam in 0.25 seconds without dirty hands touching the pump.", views: "38.5M" },
    { name: "Anti-Gravity Optical Levitation Water Droplet Air Humidifier", low: 12.6, retail: 49.99, tag: "Creates an optical illusion of water drops floating upward in mid-air with ambient light.", views: "108.6M" },
    { name: "Magnetic Detachable Wooden Baton Wall Light & Emergency Torch", low: 6.8, retail: 27.99, tag: "Crafted from natural beechwood; detaches from magnetic wall dock as a portable flashlight.", views: "45.2M" },
    { name: "Sunset Projection Lamp with 16 RGB Colors & App Remote Control", low: 4.9, retail: 21.99, tag: "Cast romantic golden hour sunsets and aesthetic golden halos across room walls.", views: "96.3M" },
    { name: "Smart WiFi Indoor Temperature & Humidity Sensor with App Alerts", low: 4.5, retail: 19.99, tag: "Sends instant push warnings to phone if greenhouse, nursery, or cigar humidor gets too dry.", views: "16.8M" },
    { name: "Sunrise Simulation Wake-Up Light Alarm Clock with Nature Sounds", low: 11.2, retail: 44.99, tag: "Gently wakes you up naturally with rising morning light gradient 30 minutes before buzzer.", views: "34.0M" },
    { name: "Smart WiFi Socket Plug with Energy Consumption Monitoring", low: 3.9, retail: 16.99, tag: "Turns space heaters and coffee makers on/off on schedule and measures kilowatt power usage.", views: "23.5M" },
    { name: "Rechargeable Cordless Table Lamp with 3-Level Touch Dimming", low: 8.4, retail: 33.99, tag: "Sleek metal restaurant-style dining lamp provides warm cozy dinner ambiance for 16 hours.", views: "31.9M" },
    { name: "Smart LED Light Strips 32.8ft with App & Sync to Music Modes", low: 5.8, retail: 24.99, tag: "Sticks behind TV or around bedroom perimeter with millions of vibrant color combinations.", views: "67.4M" },
    { name: "Solar Powered Outdoor Garden Pathway Waterproof Fireworks Lights", low: 4.2, retail: 18.99, tag: "Flexible copper wires shape into sparkling dandelion firework bursts in the yard at night.", views: "43.1M" },
    { name: "Smart Fingerprint Keyless Door Lock Cylinder Replacement", low: 24.0, retail: 89.99, tag: "Upgrade traditional doors to keyless biometric entry in 5 minutes with existing deadbolts.", views: "29.7M" },
    { name: "Ultrasonic Essential Oil Glass Dome Aromatherapy Vaporizer", low: 9.8, retail: 38.99, tag: "Handmade crackle glass dome diffuses lavender and eucalyptus for deep sleep relaxation.", views: "27.3M" },
    { name: "Magnetic Floating Hexagon Plant Pot for Air Plants & Succulents", low: 18.9, retail: 69.99, tag: "Defies gravity by spinning bonsai plants in mid-air over a wooden electromagnetic base.", views: "53.8M" },
    { name: "Touch Control Crystal Diamond Bedside Nightstand Table Lamp", low: 6.5, retail: 26.99, tag: "Casts dazzling 3D crystal diamond light reflections across bedroom surfaces with touch tap.", views: "62.1M" },
    { name: "Smart Automatic Pet Feeder with 1080P Camera & Voice Dispenser", low: 26.5, retail: 99.99, tag: "Schedules dry kibble meals on smartphone and lets you talk to cats and dogs while away.", views: "37.5M" },
    { name: "Wireless Motion Sensor LED Stair Step Lights (Set of 6)", low: 8.7, retail: 34.99, tag: "Lights up steps sequentially as you walk upstairs in the dark; battery operated stick-on.", views: "48.9M" },
    { name: "Smart WiFi Water Leak Sensor Alarm with Audible Siren", low: 5.4, retail: 23.99, tag: "Places near water heaters and dishwashers to sound loud 100dB alarm at the first leak droplet.", views: "14.6M" },
    { name: "Acoustic Wood Slat Wall Paneling Hexagon Decorative Tiles", low: 9.2, retail: 36.99, tag: "Reduces echo in home offices and video streaming setups with Scandinavian wood aesthetic.", views: "39.0M" },
    { name: "Flameless LED Flickering Wax Pillar Candles with Remote Control (Set of 3)", low: 6.9, retail: 28.99, tag: "Real paraffin wax candles with moving wick technology look 100% authentic without fire risk.", views: "45.8M" },
    { name: "Smart Ceiling Fan Remote Control Receiver Conversion Kit", low: 7.6, retail: 29.99, tag: "Converts any standard pull-chain ceiling fan into a 3-speed remote control fan in 15 mins.", views: "18.3M" },
    { name: "USB Powered Neon Sign Wall Art Glowing Acrylic Decor Lamp", low: 7.8, retail: 31.99, tag: "Bright aesthetic neon words illuminate gaming rooms and coffee bars with cool glow.", views: "52.4M" },
    { name: "Smart WiFi Garage Door Opener Controller with Smartphone Alerts", low: 11.6, retail: 44.99, tag: "Receive notifications if garage door is left open and close it remotely from phone.", views: "22.8M" },
    { name: "Floating Geometric Moon Phase Wall Mirror Decorative Set", low: 6.7, retail: 27.99, tag: "5-piece acrylic mirror set reflects light and creates celestial boho bedroom wall aesthetic.", views: "36.1M" },
    { name: "Smart LED Light Bulb RGB Dimmable E26 with Siri & Alexa", low: 3.4, retail: 15.99, tag: "Changes color temperature from warm cozy 2700K to energetic 6500K without a hub.", views: "33.9M" },
    { name: "Automatic Toothpick Dispenser Bird Figurine Novelty Box", low: 2.7, retail: 12.99, tag: "Push the little bird's head down; it picks up a single clean toothpick in its beak.", views: "47.6M" },
    { name: "Waterproof Solar Garden Ground Disk Lights Outdoor (8 Pack)", low: 7.9, retail: 32.99, tag: "Pushes flat into lawn turf; charges by day to illuminate dark walkways automatically.", views: "28.5M" },
    { name: "Smart Bluetooth Thermometer Hygrometer with Data Graphing", low: 4.8, retail: 21.99, tag: "Logs 20 days of indoor humidity and temperature trends on smartphone app.", views: "15.7M" },
    { name: "Wireless Bed Shaker Alarm Clock for Heavy Sleepers & Deaf People", low: 9.9, retail: 38.99, tag: "Vibrating puck under pillow shakes bed violently to wake deepest sleepers without noise.", views: "29.4M" },
    { name: "Himalayan Hand Carved Natural Pink Salt Lamp with Dimmer Cord", low: 7.4, retail: 29.99, tag: "Emits negative ions and a warm amber glow to purify air and promote peaceful sleep.", views: "38.2M" },
    { name: "Smart Zigbee Radiator Thermostat Valve Controller Head", low: 13.2, retail: 49.99, tag: "Schedules room-by-room heating temperatures to slash winter heating fuel bills by 30%.", views: "17.9M" },
    { name: "USB Powered Jellyfish Aquarium Tank with Color Changing Mood LED", low: 10.8, retail: 42.99, tag: "Lifelike silicone jellyfish swim realistically in gentle water currents for calming focus.", views: "66.5M" },
    { name: "Motion Activated Toilet Nightlight with UV Disinfection Cycle", low: 3.6, retail: 16.99, tag: "Illuminates toilet in 16 colors and activates germicidal UV cycle when lid closes.", views: "24.0M" },
    { name: "Smart WiFi Indoor Air Quality Monitor PM2.5 CO2 & TVOC", low: 18.5, retail: 69.99, tag: "Detects toxic cooking smoke, pollen, and carbon dioxide levels with real-time app alert.", views: "21.1M" },
    { name: "Magnetic Levitation Shoe Sneaker Display Stand with LED Light", low: 28.9, retail: 99.99, tag: "Floats and rotates collector sneakers in mid-air with built-in air fan for hypebeasts.", views: "54.2M" },
    { name: "Aesthetic Pleated Table Lamp with Solid Wooden Tripod Base", low: 8.6, retail: 34.99, tag: "Korean minimalist retro cream fabric shade creates soft warm cozy ambient lighting.", views: "31.7M" },
    { name: "Rechargeable Electric Wine Aerator and Pourer Spout Dispenser", low: 8.9, retail: 35.99, tag: "Infuses micro-bubbles of oxygen to instantly soften wine tannins at one touch.", views: "25.8M" },
    { name: "Smart Curtain Robot Opener Motor for Rods and U-Rails", low: 19.5, retail: 74.99, tag: "Snaps onto existing curtain tracks to open and close curtains automatically at sunrise.", views: "38.0M" },
    { name: "Sound Absorbing Hexagonal Acoustic Foam Wall Panels (12 Pack)", low: 8.2, retail: 32.99, tag: "Dense beveled acoustic panels reduce flutter echoes for YouTube recording and music rooms.", views: "27.4M" },
    { name: "USB Mini Cool Mist Air Humidifier with Colorful Breathing LED", low: 3.8, retail: 16.99, tag: "Quiet ultrasonic mist keeps skin and sinuses hydrated on office desks and bedrooms.", views: "41.6M" },
    { name: "LED Infinity Dodecahedron Art Night Light Geometric Lamp", low: 14.8, retail: 54.99, tag: "Two-way mirrored glass creates an endless mind-bending dimensional void of lights.", views: "73.9M" },
    { name: "Smart Plant Water Monitor Sensor with Soil Moisture App", low: 5.6, retail: 23.99, tag: "Sticks in houseplant soil to alert you when your fiddle leaf fig or monstera needs watering.", views: "19.3M" },
    { name: "Rustic Hanging Mason Jar Sconces with LED Fairy Lights (Pair)", low: 7.5, retail: 29.99, tag: "Distressed reclaimed wood with glowing fairy lights brings farmhouse charm to living rooms.", views: "33.5M" },
    { name: "Smart WiFi Smoke & Carbon Monoxide Detector with Phone Push Alarm", low: 12.9, retail: 48.99, tag: "Dual electrochemical sensors alert your phone immediately even when away from home.", views: "16.4M" },
    { name: "Waterproof Solar Garden Flame Torch Lights Flickering (4 Pack)", low: 9.6, retail: 38.99, tag: "Looks exactly like real dancing tiki torches around patio decks without dangerous fire.", views: "46.7M" },
    { name: "Automatic Electric Blinds Roller Shade Motor with Remote", low: 22.0, retail: 79.99, tag: "Motorizes existing manual roller shades without wiring or electrician installation.", views: "23.8M" },
    { name: "Kinetic Perpetual Motion Orbit Desk Toy Desktop Art Decor", low: 5.4, retail: 23.99, tag: "Electromagnetic pulses keep metallic planets spinning smoothly in soothing perpetual orbit.", views: "35.1M" },
    { name: "Smart Ambient Backlight Strip for 55-65 Inch TVs with Color Sensor", low: 16.8, retail: 59.99, tag: "Syncs TV screen colors to wall backlighting for immersive home theater viewing.", views: "58.0M" }
  ],
  "kids-novelty": [
    { name: "Magnetic Ferrofluid Sound Visualizer Music Rhythm Display", low: 18.5, retail: 69.99, tag: "Black magnetic liquid dances and spikes dynamically inside glass to sound waves and bass.", views: "82.4M" },
    { name: "Infinity Hypercube 3D RGB Mirrored Mood Night Table Lamp", low: 15.9, retail: 59.99, tag: "Dichroic optical glass reflects thousands of geometric infinite tunnel light paths.", views: "94.1M" },
    { name: "Hand-Controlled Flying Orb Hover Ball Drone with RGB Lights", low: 5.6, retail: 24.99, tag: "Toss it like a boomerang; aerodynamic spinner floats and returns smoothly to your hand.", views: "142.0M" },
    { name: "Magnetic Levitating Desk Globe with C-Shape LED Light Base", low: 14.8, retail: 54.99, tag: "Suspended world globe spins freely in mid-air; fascinating educational conversation starter.", views: "41.6M" },
    { name: "Anti-Gravity Floating Water Droplets Desktop Optical Clock", low: 13.9, retail: 52.99, tag: "Stroboscopic lighting makes real water drops appear to freeze and flow backward in air.", views: "78.3M" },
    { name: "Mini Retro Arcade Game Machine with 300 Built-In 16-Bit Games", low: 11.2, retail: 44.99, tag: "Nostalgic micro arcade cabinet with joystick and 2.5-inch color screen for retro gamers.", views: "36.8M" },
    { name: "Temperature Control Ceramic Smart Mug with Coaster Warmer", low: 16.4, retail: 59.99, tag: "Keeps hot coffee or tea at precisely 135°F for hours without scorched taste.", views: "49.0M" },
    { name: "Fidget Metal Slider Haptic Clicker Magnetic Stress Relief Toy", low: 4.8, retail: 21.99, tag: "Machined stainless steel slider produces satisfying mechanical clicks to ease ADHD anxiety.", views: "63.5M" },
    { name: "Reversible Emotional Mood Octopus Plushie Stuffed Animal", low: 2.3, retail: 11.99, tag: "Flip inside out to show happy face or angry face; viral social media expression toy.", views: "115.0M" },
    { name: "Stealth Capsule Mini Pocket Umbrella with UV Sun Protection", low: 4.5, retail: 19.99, tag: "Folds down to 6.7 inches inside a waterproof pill capsule that fits into small purses.", views: "34.7M" },
    { name: "Magic Erasable Reusable Smart Notebook with Cloud Sync App", low: 6.9, retail: 27.99, tag: "Wipe pages clean with damp cloth and scan handwritten notes directly into Google Drive.", views: "45.8M" },
    { name: "Secret Hidden Dictionary Book Safe with 3-Digit Combination Lock", low: 5.8, retail: 24.99, tag: "Blends seamlessly into any bookshelf to hide cash, jewelry, and passports from burglars.", views: "38.2M" },
    { name: "Voice-Activated LED Smart Face Mask with Animated Expressions", low: 7.2, retail: 29.99, tag: "Mouth lights up and speaks animations synchronized with your voice during parties.", views: "51.4M" },
    { name: "Pocket Thermal Photo & Sticky Note Printer with Zero-Ink Paper", low: 10.5, retail: 39.99, tag: "Prints black-and-white photos, journal stickers, and to-do lists on the go from phone.", views: "76.9M" },
    { name: "Kinetic Desk Toy Meilong Ball with Optical Spiral Illusion", low: 3.9, retail: 17.99, tag: "Precision-machined aerospace sphere creates an enchanting 360° cascading ripple effect.", views: "42.0M" },
    { name: "Fingerboard Mini Skateboard Wooden Deck with Ball Bearing Wheels", low: 3.2, retail: 14.99, tag: "Real 5-layer maple wood miniature skateboard with foam grip tape for finger tricks.", views: "31.5M" },
    { name: "Automatic Stealing Coin Cat Money Bank Box Piggy Bank", low: 5.4, retail: 23.99, tag: "Place coin on fish plate; adorable robotic kitten paw sneaks out and swipes it into box.", views: "58.7M" },
    { name: "Handcrafted Wood Mechanical Puzzle Box with Secret Compartment", low: 6.7, retail: 27.99, tag: "Requires 12 sequential sliding steps to unlock the hidden internal compartment.", views: "29.8M" },
    { name: "Waterproof Floating Beer Pong Pool Table Inflatable Game Set", low: 12.5, retail: 46.99, tag: "Inflatable pool raft with 10 cup holders on each side and cooler pocket for summer fun.", views: "35.4M" },
    { name: "Electric Shocker Pen Novelty Prank Joke Toy", low: 1.8, retail: 8.99, tag: "Harmless mild static surprise shock when someone clicks the top to write.", views: "24.1M" },
    { name: "Mini Desktop Bowling Game Wooden Alley with Metal Ball & Pins", low: 4.6, retail: 19.99, tag: "Aim the metal bowling ramp to knock down mini pins for office breakroom stress relief.", views: "27.3M" },
    { name: "Stress Relief Squeeze Cheese Cube with Whack-a-Mole Mice", low: 2.5, retail: 11.99, tag: "Squish the yellow rubber cheese and watch two cute white mice pop out of holes.", views: "68.2M" },
    { name: "Glow in the Dark Luminous Fluorescent Ceiling Sticky Balls (Set of 4)", low: 2.8, retail: 13.99, tag: "Toss sticky balls to the ceiling; they stick briefly and slowly drop back for catching.", views: "83.0M" },
    { name: "Mini Desktop Punching Bag with Heavy Duty Suction Base", low: 5.9, retail: 24.99, tag: "Spring-loaded boxing speed bag sticks to office desks to release workday stress.", views: "46.5M" },
    { name: "Magnetic Putty Slime with Rare Earth Magnet Cube", low: 3.4, retail: 15.99, tag: "Infused with micron iron particles; watches the magnetic monster putty slowly swallow magnet.", views: "55.9M" },
    { name: "Plasma Ball Lamp with Sound & Touch Sensitive Lightning Sparks", low: 7.8, retail: 31.99, tag: "Glass globe sends colored lightning arcs to your fingertips when touched.", views: "49.8M" },
    { name: "Finger Chopsticks for Gamers & Snack Eaters (Set of 2)", low: 1.9, retail: 8.99, tag: "Clips between fingers so you can eat greasy chips without dirtying mouse or controller.", views: "92.6M" },
    { name: "Newton's Cradle Balance Balls Classic Physics Desk Executive Toy", low: 4.7, retail: 21.99, tag: "Swinging steel spheres demonstrate conservation of momentum and energy rhythmically.", views: "33.2M" },
    { name: "Solar Dancing Sunflower Dashboard Novelty Toy", low: 1.6, retail: 7.99, tag: "Flaps leaves and sways cheerfully whenever sunlight hits the solar cell on the pot.", views: "21.0M" },
    { name: "Liquid Motion Bubbler Sensory Timer Toy for Calming Autism", low: 3.1, retail: 14.99, tag: "Colorful soothing oil droplets cascade down ramps to provide peaceful visual stimulation.", views: "44.7M" },
    { name: "Magic 8 Ball Retro Fortune-Telling Novelty Game Toy", low: 4.2, retail: 18.99, tag: "Ask any yes-or-no question and turn over to reveal your mysterious fortune.", views: "28.9M" },
    { name: "Inflatable Dinosaur Costume T-Rex Adult Blow Up Suit", low: 16.8, retail: 59.99, tag: "Built-in battery fan inflates giant hilarious T-Rex in 60 seconds for parties.", views: "87.4M" },
    { name: "Drinking Bird Heat Engine Kinetic Perpetual Novelty Toy", low: 3.3, retail: 15.99, tag: "Classic thermodynamic glass bird dips its beak repeatedly into a glass of water.", views: "22.5M" },
    { name: "Sound Machine White Noise Generator with 24 Soothing Nature Tracks", low: 8.6, retail: 34.99, tag: "Masks background noise with rain, ocean, and fan sounds for deep baby and adult sleep.", views: "37.1M" },
    { name: "Electric Air Guitar Pro Handheld Ultrasonic Musical Toy", low: 9.4, retail: 38.99, tag: "Strum the air without strings; infrared sensors detect finger chords and play real solos.", views: "26.8M" },
    { name: "Silly Straws Glasses Novelty Drinking Tube Glasses", low: 1.7, retail: 7.99, tag: "Drink flows up around your eyes through clear plastic eyeglasses tube before reaching mouth.", views: "39.4M" },
    { name: "Infinity Fidget Cube Premium Anodized Aluminum Folding Block", low: 4.9, retail: 21.99, tag: "Eight interconnected metal sub-cubes fold over each other infinitely with smooth weight.", views: "51.2M" },
    { name: "Optical Rainbow Crystal Suncatcher Prism for Window Windowsill", low: 2.9, retail: 13.99, tag: "K9 crystal catches natural morning sunlight to throw brilliant rainbow specks across room.", views: "36.0M" },
    { name: "Micro Toy Camera with Real 1080P Video Recording Keychain", low: 8.5, retail: 34.99, tag: "Thumb-sized vintage camera with real working shutter button, photo filters, and SD slot.", views: "48.3M" },
    { name: "Screaming Rubber Chicken Dog Toy with Hilarious Squawk Sound", low: 2.1, retail: 9.99, tag: "Classic prank chicken squawks with an agonizingly funny shrieking wail when squeezed.", views: "65.7M" },
    { name: "Levitating Magnetic Light Bulb Lamp Defying Gravity over Wood Base", low: 23.4, retail: 89.99, tag: "Vintage Edison bulb floats in air and illuminates via wireless inductive power.", views: "74.1M" },
    { name: "Mini Retro TV Phone Stand Magnifier with Vintage Channel Knobs", low: 4.8, retail: 21.99, tag: "Slide smartphone into vintage retro television box to turn it into an 8-inch retro TV.", views: "42.9M" },
    { name: "Spiky Sensory Finger Rings Acupressure Fidget Set (Pack of 10)", low: 1.9, retail: 8.99, tag: "Rolls up and down fingers to stimulate blood flow and relieve anxiety during school & exams.", views: "35.8M" },
    { name: "Electronic Laser Tag Guns Set of 4 with Vests for Kids & Adults", low: 28.0, retail: 99.99, tag: "Infrared blasters with realistic vibration, sound effects, and team shooting modes.", views: "41.2M" },
    { name: "Novelty Burrito Tortilla Round Soft Flannel Swaddle Blanket", low: 6.8, retail: 27.99, tag: "Roll yourself up into a giant 71-inch warm toasted Mexican burrito on the sofa.", views: "79.8M" },
    { name: "Useless Box Leave Me Alone Robotic Box That Turns Itself Off", low: 9.9, retail: 39.99, tag: "Flip the switch; a little mechanical finger pops out, switches it off, and retreats back inside.", views: "61.3M" },
    { name: "Finger Hands Finger Puppets for Middle Finger & Peace Signs (Set of 10)", low: 2.4, retail: 11.99, tag: "Tiny realistic rubber hands slip onto your fingertips for hilarious photo gags.", views: "38.6M" },
    { name: "Electric Bubble Gun Bazooka with 69 Holes & LED Colorful Lights", low: 8.7, retail: 34.99, tag: "Shoots thousands of vibrant iridescent soap bubbles per minute into the summer air.", views: "91.2M" },
    { name: "Retro Flipping Clock Automatic Internal Mechanical Desk Clock", low: 14.2, retail: 52.99, tag: "Vintage flip-clock mechanism flips minute and hour cards with mechanical rhythm.", views: "32.0M" },
    { name: "Desktop Wooden Catapult Trebuchet DIY Physics Assembly Kit", low: 5.7, retail: 24.99, tag: "Assemble working medieval siege warfare model that launches mini projectile balls.", views: "19.5M" }
  ]
};

// Generate products array
function generateAllProducts() {
  const allProducts = [];
  let prodIndex = 1;

  for (const catMeta of CATEGORIES_DATA) {
    const catSlug = catMeta.slug;
    const items = CATEGORY_ITEMS[catSlug] || [];
    
    items.forEach((item, i) => {
      const idStr = `prod-${String(prodIndex).padStart(3, "0")}`;
      prodIndex++;

      const slug = item.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      const profitSpread = Number((item.retail - item.low).toFixed(2));
      const marginPercent = Number((((item.retail - item.low) / item.retail) * 100).toFixed(1));
      const estNetProfit = Number(Math.max(profitSpread - 7.5, 3.5).toFixed(2));

      // Choose 2 realistic matching images from PHOTO_MAP
      const [img1, img2] = getMatchingImages(item.name);
      const cleanQ = getCleanSearchQuery(item.name);

      // Generate realistic reviews count & rating
      const rating = Number((4.6 + (i % 5) * 0.08).toFixed(1));
      const reviewsCount = 450 + ((i * 173) % 12000);

      let trendStatus = "🔥 Viral Now";
      if (i % 4 === 1) trendStatus = "🚀 Exploding Demand";
      else if (i % 4 === 2) trendStatus = "⭐ High Margin";
      else if (i % 4 === 3) trendStatus = "📦 Evergreen Seller";

      const product = {
        id: idStr,
        slug: slug,
        title: item.name,
        tagline: item.tag,
        description: `${item.name} is one of the highest-converting viral products in the ${catMeta.name} market. ${item.tag} Sourced directly from verified tier-1 factory manufacturers, this item delivers premium build quality with unbeatable profit margins for online sellers and exceptional value for shoppers.`,
        category: catSlug,
        categoryName: catMeta.name,
        images: [img1, img2],
        sourcing: {
          lowestPrice: item.low,
          currency: "$",
          supplierName: "AliExpress Verified Direct Manufacturer",
          supplierUrl: `https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(cleanQ)}`,
          moq: "1 unit (Dropship Ready)",
          shippingTimeEst: "7-12 business days",
          secondarySuppliers: [
            {
              name: "CJ Dropshipping Global",
              price: Number((item.low * 1.08).toFixed(2)),
              currency: "$",
              url: `https://cjdropshipping.com/search/${encodeURIComponent(cleanQ)}.html`,
              moq: "1 unit",
              shippingEst: "8-14 days"
            },
            {
              name: "Temu Direct Factory",
              price: Number((item.low * 1.12).toFixed(2)),
              currency: "$",
              url: `https://www.temu.com/search_result.html?search_key=${encodeURIComponent(cleanQ)}`,
              moq: "1 unit",
              shippingEst: "6-11 days"
            }
          ]
        },
        market: {
          retailPrice: item.retail,
          currency: "$",
          potentialProfit: profitSpread,
          profitMarginPercent: marginPercent,
          competitorStoreName: "Amazon / TikTok Shop",
          competitorStoreUrl: `https://www.amazon.com/s?k=${encodeURIComponent(cleanQ)}`,
          recommendedAdSpend: 7.5,
          estimatedNetProfit: estNetProfit
        },
        analytics: {
          trendScore: Number((9.1 + (i % 9) * 0.1).toFixed(1)),
          trendStatus: trendStatus,
          monthlySalesVolumeEst: `${(15000 + ((i * 850) % 45000)).toLocaleString()}+ units`,
          competitionLevel: i % 3 === 0 ? "Low" : i % 3 === 1 ? "Medium" : "High",
          tiktokViews: `${item.views} views`,
          socialBuzz: i % 2 === 0 ? "Very High" : "High"
        },
        businessGuide: {
          whyItSells: [
            `Strong 'Before & After' demonstration video potential across TikTok, Reels, and YouTube Shorts.`,
            `Solves a painful everyday inconvenience without requiring expensive professional alternatives.`,
            `High perceived retail value: easily retails at $${item.retail} with over ${marginPercent}% gross margin.`
          ],
          targetAudience: [
            `Tech enthusiasts, gift buyers, and online impulse shoppers`,
            `Social media users looking for modern life-hacks`,
            `Homeowners and professionals valuing convenience`
          ],
          adHooks: [
            `"Stop doing this the hard way... this tiny gadget changed everything!"`,
            `"I found the #1 viral product everyone on TikTok is talking about."`,
            `"POV: You finally got the secret tool that solves this in 10 seconds."`
          ],
          recommendedNiches: [catMeta.name, "Problem Solvers", "Viral Deals"]
        },
        specs: {
          "Material": "Eco-friendly ABS + Precision Alloy Components",
          "Power / Battery": "Rechargeable USB-C / Lithium Polymer",
          "Certification": "CE, RoHS, FCC Certified",
          "Warranty": "1-Year Manufacturer Warranty",
          "Origin": "Factory Direct Inspected"
        },
        rating: rating,
        reviewsCount: reviewsCount,
        isFeatured: i < 3,
        isDailyPick: i === 0,
        addedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      allProducts.push(product);
    });
  }

  return allProducts;
}

const products = generateAllProducts();

// Update category product counts
CATEGORIES_DATA.forEach(cat => {
  cat.productCount = products.filter(p => p.category === cat.slug).length;
});

console.log(`Generated total ${products.length} products across ${CATEGORIES_DATA.length} categories.`);
CATEGORIES_DATA.forEach(c => console.log(` - ${c.name}: ${c.productCount} products`));

// Write to src/data/productsData.ts
const outputFilePath = path.join(__dirname, "../src/data/productsData.ts");

const fileContent = `import { ProductItem, CategoryMeta } from "@/types/product";

export const CATEGORIES: CategoryMeta[] = ${JSON.stringify(CATEGORIES_DATA, null, 2)};

export const INITIAL_PRODUCTS: ProductItem[] = ${JSON.stringify(products, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileContent, "utf-8");
console.log(`\nSuccessfully wrote ${products.length} products to ${outputFilePath}!`);
