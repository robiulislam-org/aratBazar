import type { ProductItem, CategoryMeta, ProductCategory } from "@/types/product";

export const CATEGORIES: CategoryMeta[] = [
  {
    "slug": "tech-gadgets",
    "name": "Tech & Smart Gadgets",
    "iconName": "Cpu",
    "description": "Trending electronics, viral smart devices & portable tech accessories with massive global appeal.",
    "productCount": 625
  },
  {
    "slug": "home-kitchen",
    "name": "Home & Kitchen Innovations",
    "iconName": "Home",
    "description": "Problem-solving kitchen tools, automated cleaning devices & modern home aesthetics.",
    "productCount": 625
  },
  {
    "slug": "beauty-health",
    "name": "Health, Beauty & Wellness",
    "iconName": "Sparkles",
    "description": "Personal care, posture correctors, therapeutic massagers & skincare devices.",
    "productCount": 625
  },
  {
    "slug": "car-outdoor",
    "name": "Car & Outdoor Gear",
    "iconName": "Car",
    "description": "Automotive detailing, portable power tools, solar gadgets & outdoor survival items.",
    "productCount": 625
  },
  {
    "slug": "tools-utility",
    "name": "Everyday Problem Solvers",
    "iconName": "Wrench",
    "description": "Handy multi-tools, laser measuring equipment & instant household fixers.",
    "productCount": 625
  },
  {
    "slug": "fitness-lifestyle",
    "name": "Fitness & Active Lifestyle",
    "iconName": "Activity",
    "description": "Home workout gear, smart recovery tools & portable athletic accessories.",
    "productCount": 625
  },
  {
    "slug": "smart-home",
    "name": "Smart Home & Ambient Lighting",
    "iconName": "Zap",
    "description": "Aesthetic LED lighting, levitating decor, automated sensors & smart home life-hacks.",
    "productCount": 625
  },
  {
    "slug": "kids-novelty",
    "name": "Viral Novelties & Unique Gifts",
    "iconName": "Gift",
    "description": "Unusual sensory toys, magnetic desk gadgets, kinetic art & unforgettable conversation-starter gifts.",
    "productCount": 625
  }
];

export const ARCHETYPES = [
  {
    "key": "tech_magsafe",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "magsafe 3 in 1 wireless charger",
    "nameTemplate": "MagSafe 3-in-1 Foldable Fast Wireless Charging Station",
    "tagline": "Charges iPhone, Apple Watch, and AirPods simultaneously in a compact magnetic fold.",
    "lowRange": [
      6.5,
      14
    ],
    "retailRange": [
      29.99,
      49.99
    ],
    "images": [
      "/images/products/prod-00001-tech-magsafe.jpg"
    ],
    "viewsBase": 24.5,
    "specs": {
      "Input": "9V/2A, 12V/2A USB-C PD",
      "Output": "15W / 5W / 3W Fast Charge",
      "Certification": "Qi, CE, FCC, RoHS Certified"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_earbuds",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "wireless bluetooth earbuds anc",
    "nameTemplate": "Active Noise Cancelling Wireless Bluetooth 5.4 Earbuds",
    "tagline": "Crystal clear acoustic sound with hybrid active noise cancellation and digital battery display case.",
    "lowRange": [
      7.8,
      16.5
    ],
    "retailRange": [
      34.99,
      59.99
    ],
    "images": [
      "/images/products/prod-00002-tech-earbuds.jpg"
    ],
    "viewsBase": 38.2,
    "specs": {
      "Bluetooth": "V5.4 Low Latency (45ms)",
      "Playtime": "40 Hours with Charging Case",
      "Waterproof": "IPX7 Sweat & Rain Resistant"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_smartwatch",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "smart watch amoled fitness tracker",
    "nameTemplate": "AMOLED HD Smart Watch with Bluetooth Calling & Health Monitor",
    "tagline": "Tracks heart rate, SpO2, sleep stages, and fitness goals with vibrant always-on display.",
    "lowRange": [
      11.5,
      22
    ],
    "retailRange": [
      49.99,
      79.99
    ],
    "images": [
      "/images/products/prod-00003-tech-smartwatch.jpg"
    ],
    "viewsBase": 42,
    "specs": {
      "Display": "1.96-inch AMOLED 410x502",
      "Battery": "350mAh (7-10 Days)",
      "Sensors": "Heart Rate, Blood Oxygen, Pedometer"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_drone",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "mini pocket 4k dual camera drone",
    "nameTemplate": "Mini Pocket 4K Dual-Camera Drone with Obstacle Avoidance",
    "tagline": "Foldable pocket drone featuring optical flow hovering, gesture shooting, and 4K aerial photography.",
    "lowRange": [
      16,
      28.5
    ],
    "retailRange": [
      69.99,
      119.99
    ],
    "images": [
      "/images/products/prod-00004-tech-drone.jpg"
    ],
    "viewsBase": 65.4,
    "specs": {
      "Camera": "4K Ultra HD Dual Camera",
      "Flight Time": "18-22 mins per battery",
      "Control Distance": "150m 2.4GHz WiFi FPV"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_gimbal",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "360 auto face tracking phone gimbal",
    "nameTemplate": "360° AI Smart Auto Face-Tracking Phone Shooting Gimbal",
    "tagline": "Rotates smoothly to follow your movements during TikTok live streams and videos without an app.",
    "lowRange": [
      11,
      19.5
    ],
    "retailRange": [
      44.99,
      69.99
    ],
    "images": [
      "/images/products/prod-00005-tech-gimbal.jpg"
    ],
    "viewsBase": 33.1,
    "specs": {
      "Tracking": "AI Biometric Face & Body Recognition",
      "Rotation": "360° Infinite Horizontal Pan",
      "Battery": "2200mAh (6-8 hours)"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_keyboard",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "mechanical wireless rgb keyboard",
    "nameTemplate": "Compact Hot-Swappable RGB Wireless Mechanical Keyboard",
    "tagline": "Tactile mechanical switches with dynamic per-key backlighting and triple-mode wireless connectivity.",
    "lowRange": [
      14,
      24.5
    ],
    "retailRange": [
      54.99,
      89.99
    ],
    "images": [
      "/images/products/prod-00006-tech-keyboard.jpg"
    ],
    "viewsBase": 28.7,
    "specs": {
      "Connection": "Bluetooth 5.0 / 2.4GHz / USB-C Wired",
      "Switch": "Hot-swappable Custom Linear/Tactile",
      "Battery": "3000mAh"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_mouse",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "ergonomic vertical wireless mouse",
    "nameTemplate": "Ergonomic Vertical Wireless Mouse for Carpal Tunnel Relief",
    "tagline": "Natural handshake posture reduces wrist tension and forearm muscle strain during work hours.",
    "lowRange": [
      6.2,
      13.5
    ],
    "retailRange": [
      27.99,
      44.99
    ],
    "images": [
      "/images/products/prod-00007-tech-mouse.jpg"
    ],
    "viewsBase": 19.4,
    "specs": {
      "DPI Settings": "800 / 1200 / 1600 / 2400 DPI",
      "Design": "57° Natural Ergonomic Angle",
      "Rechargeable": "Built-in Lithium USB-C"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_gan_charger",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "65w gan multi port fast charger",
    "nameTemplate": "65W GaN Multi-Port Ultra-Fast Travel Charging Adapter",
    "tagline": "Powers laptops, tablets, and phones simultaneously with heat-reducing Gallium Nitride technology.",
    "lowRange": [
      8.5,
      16
    ],
    "retailRange": [
      32.99,
      54.99
    ],
    "images": [
      "/images/products/prod-00008-tech-gan-charger.jpg"
    ],
    "viewsBase": 17.8,
    "specs": {
      "Ports": "2x USB-C PD 65W + 1x USB-A QC 3.0",
      "Technology": "Navitas GaNFast III Semiconductor",
      "Safety": "Over-voltage & Thermal Guard"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_powerbank",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "magnetic wireless power bank slim",
    "nameTemplate": "Magnetic Ultra-Slim Wireless Power Bank with Ring Kickstand",
    "tagline": "Snaps strongly to the back of your phone for 20W fast charging on the move with integrated ring kickstand.",
    "lowRange": [
      8.2,
      17
    ],
    "retailRange": [
      34.99,
      59.99
    ],
    "images": [
      "/images/products/prod-00009-tech-powerbank.jpg"
    ],
    "viewsBase": 29.5,
    "specs": {
      "Capacity": "10000mAh High-Density Polymer",
      "Wireless Output": "15W Max Magnetic Alignment",
      "Wired Output": "20W PD Fast Charging"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_printer",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "mini thermal pocket printer bluetooth",
    "nameTemplate": "Mini Thermal Pocket Printer for Photos, Labels & Study Notes",
    "tagline": "Inkless thermal printing directly from your phone via Bluetooth for journals, lists, and instant labels.",
    "lowRange": [
      9.5,
      17.8
    ],
    "retailRange": [
      36.99,
      59.99
    ],
    "images": [
      "/images/products/prod-00010-tech-printer.jpg"
    ],
    "viewsBase": 58.4,
    "specs": {
      "Printing Method": "Direct Thermal (Zero Ink Required)",
      "Resolution": "203 DPI Clean Contrast",
      "Paper Width": "57mm Rolls"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_padlock",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "smart fingerprint padlock waterproof",
    "nameTemplate": "Smart Waterproof Biometric Fingerprint Padlock",
    "tagline": "Unlocks in 0.2 seconds with biometric recognition; never worry about lost keys or combinations again.",
    "lowRange": [
      5.8,
      12
    ],
    "retailRange": [
      24.99,
      39.99
    ],
    "images": [
      "/images/products/prod-00011-tech-padlock.jpg"
    ],
    "viewsBase": 18.2,
    "specs": {
      "Fingerprint Capacity": "10 Unique Fingerprints",
      "Shackle Material": "High-Strength Zinc Alloy & Steel",
      "Standby": "1 Year on single charge"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_recorder",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "digital voice recorder ai noise cancelling",
    "nameTemplate": "Digital Smart Voice Recorder with AI Noise Reduction",
    "tagline": "Records lectures and meetings in 1536kbps studio audio with voice activation and automatic transcription.",
    "lowRange": [
      12,
      21
    ],
    "retailRange": [
      45.99,
      69.99
    ],
    "images": [
      "/images/products/prod-00012-tech-recorder.jpg"
    ],
    "viewsBase": 14.1,
    "specs": {
      "Audio Quality": "1536kbps Lossless WAV/MP3",
      "Memory": "64GB Built-in Storage",
      "Battery": "40 Hours Continuous Record"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_camera_detector",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "hidden camera detector bug rf scanner",
    "nameTemplate": "Anti-Spy Hidden Camera Detector & RF Bug Scanner",
    "tagline": "Infrared RF scanner uncovers covert pinhole cameras and wireless transmitters in hotel rooms and Airbnbs.",
    "lowRange": [
      7.2,
      14.5
    ],
    "retailRange": [
      29.99,
      49.99
    ],
    "images": [
      "/images/products/prod-00013-tech-camera-detector.jpg"
    ],
    "viewsBase": 31.7,
    "specs": {
      "Detection Frequency": "1MHz – 6.5GHz RF Signals",
      "Modes": "Infrared Lens Finder + Magnetic GPS Scan",
      "Portability": "Pen-sized pocket clip"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_airtag_finder",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "bluetooth card tracker wallet finder",
    "nameTemplate": "Ultra-Thin Card Bluetooth Tracker Wallet & Key Finder",
    "tagline": "Credit card sized tracker fits inside any wallet slot and syncs seamlessly with Find My tracking network.",
    "lowRange": [
      4.5,
      9.8
    ],
    "retailRange": [
      19.99,
      32.99
    ],
    "images": [
      "/images/products/prod-00014-tech-airtag-finder.jpg"
    ],
    "viewsBase": 26.8,
    "specs": {
      "Thickness": "1.6mm (Card Thin)",
      "Network": "Global Apple Find My Certification",
      "Waterproof": "IP67 Submersible"
    },
    "variantsCount": 44
  },
  {
    "key": "tech_projector_fan",
    "category": "tech-gadgets",
    "categoryName": "Tech & Smart Gadgets",
    "cleanSearch": "3d hologram fan projector display",
    "nameTemplate": "Holographic 3D Fan LED Visual Advertising Projector",
    "tagline": "Spins high-speed LED blades to float stunning 3D holographic animations in mid-air with app control.",
    "lowRange": [
      22,
      39
    ],
    "retailRange": [
      89.99,
      149.99
    ],
    "images": [
      "/images/products/prod-00015-tech-projector-fan.jpg"
    ],
    "viewsBase": 44.3,
    "specs": {
      "Blade Diameter": "42cm / 16.5 inches",
      "LED Beads": "224 High-Brightness RGB LEDs",
      "Resolution": "1024x224 Full Color"
    },
    "variantsCount": 44
  },
  {
    "key": "home_spin_scrubber",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "electric spin scrubber cordless bathroom",
    "nameTemplate": "Cordless Electric Power Spin Scrubber with Extension Rod",
    "tagline": "Cleans bathroom tiles, tubs, grout, and sinks without bending or manual elbow grease.",
    "lowRange": [
      12.5,
      22
    ],
    "retailRange": [
      49.99,
      79.99
    ],
    "images": [
      "/images/products/prod-00016-home-spin-scrubber.jpg"
    ],
    "viewsBase": 112.4,
    "specs": {
      "Motor": "Dual Speed 300/400 RPM",
      "Battery": "2500mAh (90 min runtime)",
      "Heads": "4 Interchangeable Bristle Brushes"
    },
    "variantsCount": 44
  },
  {
    "key": "home_veg_chopper",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "vegetable chopper mandoline slicer container",
    "nameTemplate": "Multifunctional 12-in-1 Vegetable Chopper and Dicer",
    "tagline": "Chops onions, tomatoes, and vegetables in uniform cubes in one swift press with large container.",
    "lowRange": [
      5.2,
      11.5
    ],
    "retailRange": [
      24.99,
      39.99
    ],
    "images": [
      "/images/products/prod-00017-home-veg-chopper.jpg"
    ],
    "viewsBase": 84.5,
    "specs": {
      "Blades": "Heavy-duty 420 Stainless Steel",
      "Container": "1.5L BPA-Free Catch Tray",
      "Accessories": "Egg separator, drain basket, peeler"
    },
    "variantsCount": 44
  },
  {
    "key": "home_vacuum_sealer",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "vacuum food sealer machine preservation",
    "nameTemplate": "Automatic Vacuum Food Sealer Machine for Freshness",
    "tagline": "Preserves meats, vegetables, and leftovers up to 5x longer with airtight vacuum suction.",
    "lowRange": [
      11,
      19.5
    ],
    "retailRange": [
      42.99,
      69.99
    ],
    "images": [
      "/images/products/prod-00018-home-vacuum-sealer.jpg"
    ],
    "viewsBase": 49.1,
    "specs": {
      "Suction Power": "60kPa Strong Vacuum Pump",
      "Modes": "Dry / Moist / Pulse Modes",
      "Sealing Width": "30cm Extended Heating Strip"
    },
    "variantsCount": 44
  },
  {
    "key": "home_jar_opener",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "electric jar opener hands free",
    "nameTemplate": "Automatic Hands-Free Electric Jar Opener for Weak Hands",
    "tagline": "Press one button to effortlessly twist off stubborn vacuum-sealed jar lids without strain.",
    "lowRange": [
      6.4,
      12.5
    ],
    "retailRange": [
      26.99,
      42.99
    ],
    "images": [
      "/images/products/prod-00019-home-jar-opener.jpg"
    ],
    "viewsBase": 42.1,
    "specs": {
      "Grip Range": "Lids 1.2 to 3.5 inches",
      "Operation": "One-Touch Automatic Reverse",
      "Battery": "2x AA Powered"
    },
    "variantsCount": 44
  },
  {
    "key": "home_salt_grinder",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "electric gravity salt pepper grinder set",
    "nameTemplate": "Electric Gravity Salt & Pepper Grinder with Blue LED Light",
    "tagline": "Tilt to grind fresh spices automatically with adjustable ceramic coarseness and LED illumination.",
    "lowRange": [
      7.5,
      14.2
    ],
    "retailRange": [
      29.99,
      49.99
    ],
    "images": [
      "/images/products/prod-00020-home-salt-grinder.jpg"
    ],
    "viewsBase": 35.8,
    "specs": {
      "Grinding Core": "Non-corrosive Ceramic Rotor",
      "Trigger": "Gravity Tilt Sensor",
      "Capacity": "85ml Transparent Chamber"
    },
    "variantsCount": 44
  },
  {
    "key": "home_milk_frother",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "handheld milk frother usb rechargeable",
    "nameTemplate": "Rechargeable Handheld USB Milk Frother & Whisk with Stand",
    "tagline": "Creates rich creamy foam for lattes, matcha, and protein shakes in 15 seconds with triple speed motor.",
    "lowRange": [
      3.8,
      8.5
    ],
    "retailRange": [
      16.99,
      28.99
    ],
    "images": [
      "/images/products/prod-00021-home-milk-frother.jpg"
    ],
    "viewsBase": 61.2,
    "specs": {
      "Speed": "3 Speeds (5800/8500/12000 RPM)",
      "Whisk": "304 Food-Grade Stainless Steel",
      "Battery": "1200mAh USB-C Rechargeable"
    },
    "variantsCount": 44
  },
  {
    "key": "home_thawing_tray",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "rapid meat thawing defrosting tray aluminum",
    "nameTemplate": "Rapid Defrosting Thawing Tray for Frozen Meats",
    "tagline": "Aviation-grade thermal aluminum conducts ambient room heat to thaw steaks and chicken in minutes naturally.",
    "lowRange": [
      4.6,
      9.8
    ],
    "retailRange": [
      21.99,
      34.99
    ],
    "images": [
      "/images/products/prod-00022-home-thawing-tray.jpg"
    ],
    "viewsBase": 31.5,
    "specs": {
      "Material": "High-Density Thermal Alloy Aluminum",
      "Dimensions": "30cm x 21cm x 3mm",
      "Drainage": "Integrated Drip Channels with Tray"
    },
    "variantsCount": 44
  },
  {
    "key": "home_fruit_purifier",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "fruit vegetable purifier washer capsule",
    "nameTemplate": "Ultrasonic Fruit & Vegetable Ozone Detox Purifier Washer",
    "tagline": "Eliminates agricultural chemicals, bacteria, and residue from produce and seafood using water electrolysis.",
    "lowRange": [
      14,
      24
    ],
    "retailRange": [
      59.99,
      94.99
    ],
    "images": [
      "/images/products/prod-00023-home-fruit-purifier.jpg"
    ],
    "viewsBase": 28.7,
    "specs": {
      "Technology": "High-Energy OH- Ion Electrolysis",
      "Waterproof": "IPX7 Submersible Capsule",
      "Battery": "4400mAh Wireless Inductive Dock"
    },
    "variantsCount": 44
  },
  {
    "key": "home_sensor_trash",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "touchless motion sensor trash can automatic",
    "nameTemplate": "Touchless Automatic Smart Motion Sensor Kitchen Trash Can",
    "tagline": "Opens lid automatically in 0.3 seconds with infrared gesture detection and odor-sealing closure.",
    "lowRange": [
      13.5,
      23
    ],
    "retailRange": [
      54.99,
      89.99
    ],
    "images": [
      "/images/products/prod-00024-home-sensor-trash.jpg"
    ],
    "viewsBase": 36.4,
    "specs": {
      "Capacity": "15 Liters / 4 Gallons",
      "Sensor": "Infrared + Kick/Knee Vibration Sensor",
      "Material": "Fingerprint-Proof Brushed Stainless"
    },
    "variantsCount": 44
  },
  {
    "key": "home_bag_sealer",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "mini bag sealer heat sealer cutter",
    "nameTemplate": "2-in-1 Magnetic Mini Bag Heat Sealer and Cutter for Snacks",
    "tagline": "Airtight reseals potato chip and cereal bags in 3 seconds to keep food crunchy and fresh.",
    "lowRange": [
      2.5,
      5.8
    ],
    "retailRange": [
      13.99,
      22.99
    ],
    "images": [
      "/images/products/prod-00025-home-bag-sealer.jpg"
    ],
    "viewsBase": 64.2,
    "specs": {
      "Heater": "Micro-Ceramic Thermal Heating Element",
      "Blade": "Concealed Stainless Steel Cutter",
      "Rechargeable": "USB-C Lithium Battery"
    },
    "variantsCount": 44
  },
  {
    "key": "home_dish_rack",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "expandable over sink dish drying rack",
    "nameTemplate": "Expandable Over-The-Sink Stainless Steel Dish Drying Rack",
    "tagline": "Drains water directly into the sink with adjustable width, cutlery caddy, and heavy utensil support.",
    "lowRange": [
      15,
      26
    ],
    "retailRange": [
      59.99,
      99.99
    ],
    "images": [
      "/images/products/prod-00026-home-dish-rack.jpg"
    ],
    "viewsBase": 22.9,
    "specs": {
      "Material": "SUS 304 Rustproof Carbon Steel",
      "Load Capacity": "Up to 80 lbs Stable",
      "Adjustable Width": "25.6 to 37.5 inches"
    },
    "variantsCount": 44
  },
  {
    "key": "home_magic_soap",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "stainless steel odor removing soap bar",
    "nameTemplate": "Stainless Steel Odor-Eliminating Kitchen Soap Bar",
    "tagline": "Instantly removes pungent garlic, onion, and fish smells from your hands using molecular sulfur bonding.",
    "lowRange": [
      1.8,
      4.2
    ],
    "retailRange": [
      9.99,
      16.99
    ],
    "images": [
      "/images/products/prod-00027-home-magic-soap.jpg"
    ],
    "viewsBase": 19.3,
    "specs": {
      "Material": "Solid 304 Polished Stainless Steel",
      "Lifespan": "Forever Reusable (Never Wears Down)",
      "Holder": "Includes Black Silicone Drip Base"
    },
    "variantsCount": 44
  },
  {
    "key": "home_safety_gloves",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "cut resistant gloves level 5 kitchen",
    "nameTemplate": "Level 5 Cut-Resistant Kitchen Safety Gloves",
    "tagline": "Protects fingers and hands from razor-sharp chef knives, mandolines, and oyster shuckers.",
    "lowRange": [
      2.9,
      6.4
    ],
    "retailRange": [
      14.99,
      24.99
    ],
    "images": [
      "/images/products/prod-00028-home-safety-gloves.jpg"
    ],
    "viewsBase": 25.1,
    "specs": {
      "Protection": "EN388 Level 5 Certified Cut Standard",
      "Weave": "HPPE High-Molecular Fiber",
      "Washable": "100% Machine Washable"
    },
    "variantsCount": 44
  },
  {
    "key": "home_silicone_lids",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "silicone stretch lids reusable food covers",
    "nameTemplate": "Reusable Silicone Stretch Lids & Bowl Covers (Set of 6)",
    "tagline": "Stretches to create airtight, leakproof seals over any bowl, cup, or half-cut fruit without plastic wrap.",
    "lowRange": [
      2.2,
      5.2
    ],
    "retailRange": [
      12.99,
      21.99
    ],
    "images": [
      "/images/products/prod-00029-home-silicone-lids.jpg"
    ],
    "viewsBase": 38.6,
    "specs": {
      "Sizes": "6 Diameters (2.6 to 8.3 inches)",
      "Material": "100% Food-Grade Platinum Silicone",
      "Temperature": "-40°F to 450°F Microwave & Freezer"
    },
    "variantsCount": 44
  },
  {
    "key": "home_soap_dispenser",
    "category": "home-kitchen",
    "categoryName": "Home & Kitchen Innovations",
    "cleanSearch": "automatic foaming soap dispenser touchless",
    "nameTemplate": "Automatic Touchless Foaming Hand Soap Dispenser",
    "tagline": "Infrared sensor dispenses luxurious foamy lather in 0.25 seconds without touching germy pumps.",
    "lowRange": [
      6.8,
      13
    ],
    "retailRange": [
      26.99,
      44.99
    ],
    "images": [
      "/images/products/prod-00030-home-soap-dispenser.jpg"
    ],
    "viewsBase": 33.7,
    "specs": {
      "Capacity": "350ml / 12oz Reservoir",
      "Waterproof": "IPX4 Splashproof Base",
      "Charging": "Type-C Fast Charging (90 Day Standby)"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_posture",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "smart posture corrector vibration sensor",
    "nameTemplate": "Intelligent Upper Back Posture Corrector with Vibration Reminder",
    "tagline": "Gently vibrates whenever you slouch more than 25 degrees to train your spine and build upright posture.",
    "lowRange": [
      3.4,
      7.8
    ],
    "retailRange": [
      22.99,
      36.99
    ],
    "images": [
      "/images/products/prod-00031-beauty-posture.jpg"
    ],
    "viewsBase": 78.4,
    "specs": {
      "Sensor": "Angle Sensing Micro-Gyroscope",
      "Vibration": "Gentle Tactile Buzz at 25° Slouch",
      "Battery": "500mAh (15 Days Standby)"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_massage_gun",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "deep tissue percussion massage gun",
    "nameTemplate": "Deep Tissue Percussion Muscle Massage Gun with 6 Heads",
    "tagline": "Delivers 3200 RPM therapeutic deep-tissue pulses to instantly relieve muscle stiffness, soreness, and knots.",
    "lowRange": [
      14,
      24.5
    ],
    "retailRange": [
      54.99,
      89.99
    ],
    "images": [
      "/images/products/prod-00032-beauty-massage-gun.jpg"
    ],
    "viewsBase": 92.1,
    "specs": {
      "Motor": "Quiet Brushless High-Torque Motor (<45dB)",
      "Amplitude": "12mm Deep Penetration",
      "Speeds": "30 Adjustable Intensity Levels"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_led_mask",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "led light therapy face mask 7 colors",
    "nameTemplate": "7-Color LED Photon Light Therapy Facial Rejuvenation Mask",
    "tagline": "Professional clinical wavelengths boost collagen production, fade wrinkles, and target acne bacteria at home.",
    "lowRange": [
      18,
      32
    ],
    "retailRange": [
      79.99,
      139.99
    ],
    "images": [
      "/images/products/prod-00033-beauty-led-mask.jpg"
    ],
    "viewsBase": 68.3,
    "specs": {
      "Wavelengths": "Red (630nm), Blue (470nm), Near-Infrared (850nm)",
      "LED Count": "192 Medical-Grade Diodes",
      "Safety": "Zero UV / Eye Shield Contour"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_skin_scrubber",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "ultrasonic skin scrubber pore extractor spatula",
    "nameTemplate": "Ultrasonic Skin Scrubber & Deep Pore Cleansing Spatula",
    "tagline": "24,000Hz vibrations lift out blackheads, dead skin cells, and excess sebum for glowing baby-soft skin.",
    "lowRange": [
      6.5,
      12.8
    ],
    "retailRange": [
      29.99,
      46.99
    ],
    "images": [
      "/images/products/prod-00034-beauty-skin-scrubber.jpg"
    ],
    "viewsBase": 51.9,
    "specs": {
      "Frequency": "24,000 High-Frequency Oscillations/sec",
      "Modes": "Peeling, Ion+, Ion-, EMS Microcurrent",
      "Spatula": "100% Medical Stainless Steel"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_toothbrush",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "sonic electric toothbrush inductive charging",
    "nameTemplate": "Sonic Electric Toothbrush with 40,000 VPM & 8 Brush Heads",
    "tagline": "Micro-bubble sonic technology removes 10x more plaque along gumlines with built-in 2-minute quad timer.",
    "lowRange": [
      8.5,
      15
    ],
    "retailRange": [
      34.99,
      59.99
    ],
    "images": [
      "/images/products/prod-00035-beauty-toothbrush.jpg"
    ],
    "viewsBase": 33.4,
    "specs": {
      "Vibration": "40,000 Strokes Per Minute",
      "Modes": "Clean, White, Polish, Massage, Sensitive",
      "Battery": "Up to 60 Days on 4-Hour Charge"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_hair_clipper",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "cordless hair trimmer t blade zero gapped",
    "nameTemplate": "Professional Cordless T-Blade Zero-Gapped Hair Trimmer",
    "tagline": "Titanium ceramic blade creates crisp sharp lineup fades, beard sculpting, and body grooming without nicks.",
    "lowRange": [
      7.8,
      14.5
    ],
    "retailRange": [
      32.99,
      49.99
    ],
    "images": [
      "/images/products/prod-00036-beauty-hair-clipper.jpg"
    ],
    "viewsBase": 44.7,
    "specs": {
      "Blade": "Carbon Titanium T-Outliner Blade",
      "Motor": "7000 RPM Rotary Power",
      "Display": "Digital Battery Percentage LED"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_cupping",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "smart electric cupping massager red light",
    "nameTemplate": "Smart Electric Dynamic Cupping Massager with Red Light Heat",
    "tagline": "Combines dynamic vacuum suction, soothing thermal heat, and red light therapy to release stubborn knots.",
    "lowRange": [
      9.8,
      17.5
    ],
    "retailRange": [
      39.99,
      64.99
    ],
    "images": [
      "/images/products/prod-00037-beauty-cupping.jpg"
    ],
    "viewsBase": 71,
    "specs": {
      "Suction Levels": "12 Adjustable Negative Pressure Gears",
      "Heat": "100°F - 122°F Constant Temperature",
      "Safety": "One-Touch Instant Pressure Release"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_ice_roller",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "ice roller gua sha facial sculpting set",
    "nameTemplate": "Cryotherapy Stainless Steel Ice Roller and Gua Sha Set",
    "tagline": "Chills instantly in freezer to tighten pores, depuff morning under-eyes, and sculpt jawline contours.",
    "lowRange": [
      3.2,
      6.8
    ],
    "retailRange": [
      16.99,
      26.99
    ],
    "images": [
      "/images/products/prod-00038-beauty-ice-roller.jpg"
    ],
    "viewsBase": 88.3,
    "specs": {
      "Roller Material": "Surgical Grade 304 Stainless Steel",
      "Core": "Non-Toxic Freezing Gel Insert",
      "Gua Sha": "Natural Rose Quartz Stone"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_sleep_mask",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "bluetooth sleep eye mask headphones 3d",
    "nameTemplate": "Smart 3D Ergonomic Sleep Eye Mask with Bluetooth Speakers",
    "tagline": "100% total blackout eye contour with ultra-thin side-sleeper speakers for relaxing deep sleep anywhere.",
    "lowRange": [
      7.2,
      13.5
    ],
    "retailRange": [
      29.99,
      44.99
    ],
    "images": [
      "/images/products/prod-00039-beauty-sleep-mask.jpg"
    ],
    "viewsBase": 39.5,
    "specs": {
      "Eye Cavity": "Deep 3D Eye Cup (Zero Eyelash Pressure)",
      "Audio": "Ultra-Flat HD Stereo Padded Drivers",
      "Battery": "10-12 Hours Full Night Playtime"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_callus_remover",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "electric foot callus remover vacuum",
    "nameTemplate": "Electric Vacuum Foot Callus Remover & Heel File",
    "tagline": "Rotates quartz crystal rollers at 2400 RPM to buff away dry, cracked heels while auto-vacuuming skin dust.",
    "lowRange": [
      6.8,
      12.8
    ],
    "retailRange": [
      27.99,
      44.99
    ],
    "images": [
      "/images/products/prod-00040-beauty-callus-remover.jpg"
    ],
    "viewsBase": 37.1,
    "specs": {
      "Vacuum": "Built-in Micro Duster Suction Chamber",
      "Rollers": "3 Grits (Fine, Medium, Coarse Quartz)",
      "Waterproof": "IPX7 Washable Head"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_water_flosser",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "cordless portable water flosser oral irrigator",
    "nameTemplate": "Portable Telescopic Cordless Water Dental Flosser",
    "tagline": "Collapsible pocket size water flosser delivers 1400 high-pressure pulses to flush trapped food and tartar.",
    "lowRange": [
      8.9,
      16.5
    ],
    "retailRange": [
      36.99,
      58.99
    ],
    "images": [
      "/images/products/prod-00041-beauty-water-flosser.jpg"
    ],
    "viewsBase": 29.8,
    "specs": {
      "Water Pressure": "30 - 120 PSI (3 Custom Modes)",
      "Reservoir": "200ml Telescopic Tank",
      "Nozzle": "360° Rotatable with Storage Slot"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_hair_straightener",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "ionic hair straightener brush heated comb",
    "nameTemplate": "Negative Ion Ceramic Hair Straightening Heated Brush",
    "tagline": "Heats up in 30 seconds to detangle, smooth, and straighten unruly frizzy hair with zero burn risk.",
    "lowRange": [
      9.2,
      17
    ],
    "retailRange": [
      38.99,
      59.99
    ],
    "images": [
      "/images/products/prod-00042-beauty-hair-straightener.jpg"
    ],
    "viewsBase": 56.4,
    "specs": {
      "Heating": "PTC Ceramic Rapid Uniform Heat",
      "Anti-Scald": "3D Heat-Insulated Comb Teeth",
      "Temperature": "5 Settings (265°F to 410°F)"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_knee_massager",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "heated knee massager red light therapy",
    "nameTemplate": "Heated Knee Joint & Shoulder Massager with Air Compression",
    "tagline": "Relieves chronic joint stiffness, arthritis aches, and athletic swelling using soothing heat and rhythmic airbag pressure.",
    "lowRange": [
      16.5,
      29
    ],
    "retailRange": [
      64.99,
      109.99
    ],
    "images": [
      "/images/products/prod-00043-beauty-knee-massager.jpg"
    ],
    "viewsBase": 34.2,
    "specs": {
      "Airbags": "3D Dynamic Squeeze Air Compression",
      "Heat Levels": "104°F / 113°F / 122°F Infrared Thermal",
      "Fit": "Adjustable Ergonomic Knee & Shoulder Straps"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_scale",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "smart body fat scale bluetooth bmi",
    "nameTemplate": "Biometric Smart Body Fat BMI Scale with Health App Sync",
    "tagline": "Measures 16 essential body metrics including body fat %, muscle mass, metabolic age, and visceral fat.",
    "lowRange": [
      7.5,
      14.5
    ],
    "retailRange": [
      29.99,
      49.99
    ],
    "images": [
      "/images/products/prod-00044-beauty-scale.jpg"
    ],
    "viewsBase": 27.9,
    "specs": {
      "Sensors": "4 High-Precision Manganese Steel Strain Gauges",
      "Connectivity": "Bluetooth 5.0 Auto-Sync",
      "Capacity": "400 lbs / 180 kg Precision 0.1 lb"
    },
    "variantsCount": 44
  },
  {
    "key": "beauty_nail_drill",
    "category": "beauty-health",
    "categoryName": "Health, Beauty & Wellness",
    "cleanSearch": "electric nail drill machine portable manicure",
    "nameTemplate": "Portable Professional Cordless Electric Nail Drill Set",
    "tagline": "35,000 RPM low vibration motor smoothly removes acrylics, polygel, and cuticles for salon-grade manicures at home.",
    "lowRange": [
      8.8,
      16.5
    ],
    "retailRange": [
      34.99,
      56.99
    ],
    "images": [
      "/images/products/prod-00045-beauty-nail-drill.jpg"
    ],
    "viewsBase": 31.6,
    "specs": {
      "Speed": "Adjustable 0 - 35,000 RPM",
      "Direction": "Forward and Reverse Rotation Toggle",
      "Attachments": "6 Carbide Bits + 6 Sanding Bands"
    },
    "variantsCount": 44
  },
  {
    "key": "car_jump_starter",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "car jump starter battery air compressor",
    "nameTemplate": "2500A Peak Emergency Car Jump Starter & Tire Inflator",
    "tagline": "Starts dead 12V car engines up to 8.0L gas / 6.5L diesel and inflates tires to 150 PSI with digital display.",
    "lowRange": [
      24,
      42
    ],
    "retailRange": [
      89.99,
      149.99
    ],
    "images": [
      "/images/products/prod-00046-car-jump-starter.jpg"
    ],
    "viewsBase": 59.2,
    "specs": {
      "Peak Current": "2500 Amperes Heavy-Duty",
      "Compressor": "150 PSI Smart Auto Shut-Off",
      "Flashlight": "400 Lumen Emergency Strobe & SOS"
    },
    "variantsCount": 44
  },
  {
    "key": "car_vacuum",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "handheld car vacuum cordless high power",
    "nameTemplate": "Cordless High-Power Handheld Car Vacuum Cleaner (12000Pa)",
    "tagline": "Packs 12000Pa cyclone suction into a compact handheld body to clean dust, pet hair, and gravel from car seats.",
    "lowRange": [
      11.5,
      19.8
    ],
    "retailRange": [
      39.99,
      64.99
    ],
    "images": [
      "/images/products/prod-00047-car-vacuum.jpg"
    ],
    "viewsBase": 68.4,
    "specs": {
      "Suction": "12,000Pa Brushless Cyclone Motor",
      "Filter": "Washable Stainless Steel + HEPA Filter",
      "Attachments": "Crevice Nozzle + Dusting Brush + Blow Pipe"
    },
    "variantsCount": 44
  },
  {
    "key": "car_dash_cam",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "4k dash cam front and rear wifi",
    "nameTemplate": "4K UHD Dual Dash Cam Front & Rear with Night Vision",
    "tagline": "Records crystal clear 4K road footage with Sony Starvis night vision sensor, WiFi phone download, and G-sensor lock.",
    "lowRange": [
      18.5,
      34
    ],
    "retailRange": [
      69.99,
      119.99
    ],
    "images": [
      "/images/products/prod-00048-car-dash-cam.jpg"
    ],
    "viewsBase": 47.9,
    "specs": {
      "Resolution": "Front 4K (3840x2160P) + Rear 1080P",
      "Sensor": "Sony IMX Sensor with F1.8 Aperture",
      "Lens": "170° Ultra-Wide Angle Field of View"
    },
    "variantsCount": 44
  },
  {
    "key": "car_phone_mount",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "magsafe wireless car charger mount",
    "nameTemplate": "Auto-Clamping Qi Fast Wireless Car Charger Air Vent Mount",
    "tagline": "Infrared sensor detects phone and locks grips securely in place while delivering 15W Qi fast wireless charging.",
    "lowRange": [
      7.2,
      13.8
    ],
    "retailRange": [
      28.99,
      44.99
    ],
    "images": [
      "/images/products/prod-00049-car-phone-mount.jpg"
    ],
    "viewsBase": 38.1,
    "specs": {
      "Charging Power": "15W / 10W / 7.5W Auto-Negotiation",
      "Clamping": "Smart Automatic Sensor Lock",
      "Mounting": "Steel-Core Anti-Shake Air Vent Hook"
    },
    "variantsCount": 44
  },
  {
    "key": "car_flashlight",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "tactical led flashlight rechargeable 10000 lumens",
    "nameTemplate": "Ultra-Bright Tactical 10,000 Lumen LED Flashlight",
    "tagline": "Illuminates up to 3200 feet into the dark with aircraft-grade aluminum casing and USB-C power bank function.",
    "lowRange": [
      6.8,
      14
    ],
    "retailRange": [
      29.99,
      49.99
    ],
    "images": [
      "/images/products/prod-00050-car-flashlight.jpg"
    ],
    "viewsBase": 51.3,
    "specs": {
      "Output": "10,000 Lumens Quad-Core XHP90 LED",
      "Beam Distance": "Over 1,000 Meters Zoomable",
      "Waterproof": "IPX6 Heavy Storm Weatherproof"
    },
    "variantsCount": 44
  },
  {
    "key": "car_water_filter",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "personal water filter straw camping survival",
    "nameTemplate": "Emergency Survival Personal Water Filter Straw",
    "tagline": "Filters river and puddle water through a 0.01 micron medical-grade hollow fiber membrane for safe backcountry hydration.",
    "lowRange": [
      4.2,
      8.9
    ],
    "retailRange": [
      19.99,
      32.99
    ],
    "images": [
      "/images/products/prod-00051-car-water-filter.jpg"
    ],
    "viewsBase": 35.6,
    "specs": {
      "Filtration Capacity": "5,000 Liters (1,320 Gallons)",
      "Pore Size": "0.01 Micron Absolute Membrane",
      "Certifications": "Removes 99.9999% Bacteria & Microplastics"
    },
    "variantsCount": 44
  },
  {
    "key": "car_hammock",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "camping hammock with mosquito net straps",
    "nameTemplate": "Ultralight Camping Hammock with Built-In Mosquito Net",
    "tagline": "High-tenacity parachute nylon suspends up to 500 lbs and shields you from bugs and mosquitoes under the stars.",
    "lowRange": [
      8.5,
      16
    ],
    "retailRange": [
      34.99,
      54.99
    ],
    "images": [
      "/images/products/prod-00052-car-hammock.jpg"
    ],
    "viewsBase": 27.2,
    "specs": {
      "Material": "210T Tear-Resistant Parachute Nylon",
      "Load Capacity": "500 lbs (2 Adults Comfortably)",
      "Straps": "2x 10ft Tree Straps with 16 Loops + Steel Carabiners"
    },
    "variantsCount": 44
  },
  {
    "key": "car_dent_repair",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "paintless car dent repair puller kit",
    "nameTemplate": "Professional Paintless Car Dent Puller Repair Kit",
    "tagline": "Pulls out door dings, hail damage, and body dents in minutes without scratching or chipping factory car paint.",
    "lowRange": [
      9.5,
      18
    ],
    "retailRange": [
      38.99,
      64.99
    ],
    "images": [
      "/images/products/prod-00053-car-dent-repair.jpg"
    ],
    "viewsBase": 41.5,
    "specs": {
      "Tool Type": "Golden Bridge Dent Lifter + 18 Pull Tabs",
      "Hot Melt Gun": "Includes 100W Glue Gun + Yellow Pro Glue Sticks",
      "Safe": "100% Paint-Friendly Non-Chemical Formula"
    },
    "variantsCount": 44
  },
  {
    "key": "car_solar_panel",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "foldable solar panel charger camping usb",
    "nameTemplate": "Portable Foldable Solar Panel Charger for Outdoor Travel",
    "tagline": "Monocrystalline solar cells convert sunlight into 24W USB fast power for phones, GPS, and camping lanterns.",
    "lowRange": [
      14.5,
      26.5
    ],
    "retailRange": [
      59.99,
      94.99
    ],
    "images": [
      "/images/products/prod-00054-car-solar-panel.jpg"
    ],
    "viewsBase": 23.4,
    "specs": {
      "Efficiency": "23.5% High-Efficiency SunPower Cells",
      "Outputs": "Dual USB Smart IC 5V/2.4A",
      "Weatherproof": "ETFE Laminated Waterproof Coating"
    },
    "variantsCount": 44
  },
  {
    "key": "car_trunk_organizer",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "heavy duty car trunk organizer collapsible",
    "nameTemplate": "Heavy Duty Multi-Compartment Collapsible Car Trunk Organizer",
    "tagline": "Stops groceries, sports gear, and emergency tools from rolling around your trunk with reinforced non-slip base.",
    "lowRange": [
      7.8,
      14.5
    ],
    "retailRange": [
      29.99,
      46.99
    ],
    "images": [
      "/images/products/prod-00055-car-trunk-organizer.jpg"
    ],
    "viewsBase": 31,
    "specs": {
      "Material": "1680D Waterproof Oxford Polyester",
      "Divider": "3 Main Compartments + 8 Mesh Pockets",
      "Base": "Non-Skid Hook & Loop Anti-Slide Strips"
    },
    "variantsCount": 44
  },
  {
    "key": "car_sunshade",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "windshield sun shade umbrella foldable",
    "nameTemplate": "Foldable Windshield Sunshade Umbrella for UV Heat Block",
    "tagline": "Pops open like an umbrella in 2 seconds to reflect 99% of scorching UV rays and keep car interiors cool.",
    "lowRange": [
      5.2,
      10.5
    ],
    "retailRange": [
      22.99,
      36.99
    ],
    "images": [
      "/images/products/prod-00056-car-sunshade.jpg"
    ],
    "viewsBase": 58.7,
    "specs": {
      "Coating": "Titanium Silver Thermal Insulation Layer",
      "Skeleton": "10 Aviation-Grade Ribs with Protective Leather Pouch",
      "Universal": "Fits Sedans, SUVs, and Trucks"
    },
    "variantsCount": 44
  },
  {
    "key": "car_tpms",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "solar tire pressure monitoring system tpms",
    "nameTemplate": "Wireless Solar Tire Pressure Monitoring System (TPMS)",
    "tagline": "Solar dashboard display alerts you instantly to tire leaks, high pressure, and blow-out hazards in real time.",
    "lowRange": [
      11,
      19.5
    ],
    "retailRange": [
      44.99,
      69.99
    ],
    "images": [
      "/images/products/prod-00057-car-tpms.jpg"
    ],
    "viewsBase": 19.8,
    "specs": {
      "Power": "Solar Charging Panel + USB Backup",
      "Sensors": "4 External Anti-Theft Waterproof Cap Sensors",
      "Alarms": "Visual & Audio Beep Alerts for Leaks & High Temp"
    },
    "variantsCount": 44
  },
  {
    "key": "car_ceramic_spray",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "ceramic coating spray car scratch repair",
    "nameTemplate": "Nano Ceramic Car Scratch Polish & Hydrophobic Coating Spray",
    "tagline": "Forms an ultra-slick ceramic shield that buffs out light swirl marks and makes rainwater sheet off instantly.",
    "lowRange": [
      3.4,
      7.2
    ],
    "retailRange": [
      17.99,
      29.99
    ],
    "images": [
      "/images/products/prod-00058-car-ceramic-spray.jpg"
    ],
    "viewsBase": 74.5,
    "specs": {
      "Volume": "500ml Spray Bottle + Microfiber Buffing Towel",
      "Durability": "Up to 6 Months Mirror Finish & UV Guard",
      "Surface": "Safe on Paint, Glass, Chrome, and Headlights"
    },
    "variantsCount": 44
  },
  {
    "key": "car_camping_stove",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "portable camping stove windproof backpacking",
    "nameTemplate": "Windproof Portable Backpacking Camp Stove with Piezo Igniter",
    "tagline": "Folds down into your palm and boils 1 liter of water in under 3 minutes with honeycomb flame shield.",
    "lowRange": [
      5.6,
      11.2
    ],
    "retailRange": [
      24.99,
      39.99
    ],
    "images": [
      "/images/products/prod-00059-car-camping-stove.jpg"
    ],
    "viewsBase": 26.5,
    "specs": {
      "Power": "3500W High Heat Efficiency",
      "Ignition": "Built-in Ceramic Piezo Electric Spark",
      "Weight": "280g Lightweight Foldable Stainless Steel"
    },
    "variantsCount": 44
  },
  {
    "key": "car_window_breaker",
    "category": "car-outdoor",
    "categoryName": "Car & Outdoor Gear",
    "cleanSearch": "emergency window breaker seatbelt cutter keychain",
    "nameTemplate": "Spring-Loaded Emergency Window Breaker & Seatbelt Cutter",
    "tagline": "Shatters tempered car side windows underwater or in rollovers with 20-lb spring-loaded tungsten steel spike.",
    "lowRange": [
      2.1,
      4.8
    ],
    "retailRange": [
      11.99,
      18.99
    ],
    "images": [
      "/images/products/prod-00060-car-window-breaker.jpg"
    ],
    "viewsBase": 49.3,
    "specs": {
      "Spike": "Solid Tungsten Steel (Rockwell Hardness 65)",
      "Cutter": "Recessed Razor Sharp Stainless Blade",
      "Size": "Compact Keychain Size (3.5 inches)"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_laser_tape",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "laser tape measure digital distance meter",
    "nameTemplate": "Digital Laser Distance Meter & 16ft Auto-Lock Tape Measure",
    "tagline": "Combines a 131ft high-precision laser measure with a physical tape ruler for instant single-handed measurements.",
    "lowRange": [
      8.5,
      16
    ],
    "retailRange": [
      34.99,
      54.99
    ],
    "images": [
      "/images/products/prod-00061-tool-laser-tape.jpg"
    ],
    "viewsBase": 38.2,
    "specs": {
      "Laser Range": "40m / 131ft Laser Precision (±2mm)",
      "Physical Tape": "5m / 16ft Nylon Coated Steel",
      "Screen": "Backlit LCD Display (m/in/ft)"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_electric_screwdriver",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "precision electric screwdriver set magnetic",
    "nameTemplate": "Precision Cordless Electric Screwdriver with 64 Magnetic Bits",
    "tagline": "Ergonomic aluminum pen with 3 LED work lights and precision torque for fixing phones, laptops, and watches.",
    "lowRange": [
      11.2,
      19.5
    ],
    "retailRange": [
      42.99,
      69.99
    ],
    "images": [
      "/images/products/prod-00062-tool-electric-screwdriver.jpg"
    ],
    "viewsBase": 44.8,
    "specs": {
      "Torque": "0.35 N.m Electric / 3 N.m Manual Lock",
      "Bits": "64 S2 Hardened Steel Precision Bits",
      "Case": "Pop-Up Magnetic Storage Aluminum Shell"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_furniture_lifter",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "heavy furniture lifter sliders rollers 360",
    "nameTemplate": "Heavy Furniture Lifter Tool & 360° Moving Caster Rollers",
    "tagline": "Move heavy couches, refrigerators, and washers effortlessly across floors without back strain or scratches.",
    "lowRange": [
      7.8,
      14.2
    ],
    "retailRange": [
      29.99,
      46.99
    ],
    "images": [
      "/images/products/prod-00063-tool-furniture-lifter.jpg"
    ],
    "viewsBase": 52.1,
    "specs": {
      "Capacity": "Supports Up to 660 lbs (300 kg)",
      "Rollers": "4x 360-Degree Swivel Non-Slip Pads",
      "Lever": "Thickened Carbon Steel Pry Crowbar"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_contour_gauge",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "contour duplication gauge with lock",
    "nameTemplate": "Master Contour Duplication Profile Gauge with Metal Lock",
    "tagline": "Copies irregular pipes, curved molding, and tile corners instantly to cut flawless fitting joints every time.",
    "lowRange": [
      4.2,
      8.9
    ],
    "retailRange": [
      18.99,
      29.99
    ],
    "images": [
      "/images/products/prod-00064-tool-contour-gauge.jpg"
    ],
    "viewsBase": 36.5,
    "specs": {
      "Width": "10-inch Extra Wide Profile Depth",
      "Locking Mechanism": "Heavy Duty Aluminum Alloy Clamping Core",
      "Pins": "High-Density ABS Plastic Teeth"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_multitool_pliers",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "multitool pliers knife wire cutter",
    "nameTemplate": "Heavy Duty 18-in-1 Stainless Steel Multi-Tool Pliers",
    "tagline": "Packs wire cutters, saw blade, can opener, screwdrivers, and locking knife into an ergonomic pocket carry frame.",
    "lowRange": [
      8.9,
      16.5
    ],
    "retailRange": [
      34.99,
      54.99
    ],
    "images": [
      "/images/products/prod-00065-tool-multitool-pliers.jpg"
    ],
    "viewsBase": 33.2,
    "specs": {
      "Steel": "440C High-Carbon Stainless Steel",
      "Safety": "Full All-Locking Tool Mechanism",
      "Sheath": "Durable Ballistic Nylon Belt Holster"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_nano_tape",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "double sided nano tape heavy duty washable",
    "nameTemplate": "Heavy Duty Washable Clear Nano Double-Sided Magic Tape",
    "tagline": "Holds up to 18 lbs on walls without nails or screws; removes cleanly with zero residue and washes reusable.",
    "lowRange": [
      1.9,
      4.5
    ],
    "retailRange": [
      11.99,
      19.99
    ],
    "images": [
      "/images/products/prod-00066-tool-nano-tape.jpg"
    ],
    "viewsBase": 77.9,
    "specs": {
      "Roll Length": "5 Meters / 16.4 Feet (30mm Width)",
      "Thickness": "2mm Heavy Duty Gel Matrix",
      "Feature": "Traceless & Washable Reusable"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_plastic_welder",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "plastic welder hot stapler bumper repair",
    "nameTemplate": "Hot Stapler Plastic Welding Gun Repair Kit with 600 Staples",
    "tagline": "Melts steel reinforcement staples into cracked plastics in 2 seconds to restore car bumpers, toys, and toolboxes.",
    "lowRange": [
      12,
      22
    ],
    "retailRange": [
      45.99,
      74.99
    ],
    "images": [
      "/images/products/prod-00067-tool-plastic-welder.jpg"
    ],
    "viewsBase": 46.1,
    "specs": {
      "Power": "70W Rapid Heating Thermal Core",
      "Staples": "600x Assorted Wave & Flat Staples",
      "Accessories": "Includes Diagonal Cutters & Pliable Smoothing Head"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_wire_stripper",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "automatic wire stripper cutter crimper tool",
    "nameTemplate": "8-Inch Self-Adjusting Automatic Wire Stripper & Crimper",
    "tagline": "Strips copper and aluminum wires from 10 to 24 AWG cleanly in one squeeze without cutting the delicate core strands.",
    "lowRange": [
      5.8,
      11.5
    ],
    "retailRange": [
      24.99,
      39.99
    ],
    "images": [
      "/images/products/prod-00068-tool-wire-stripper.jpg"
    ],
    "viewsBase": 24.8,
    "specs": {
      "Wire Gauge": "10-24 AWG (0.2-6.0mm²)",
      "Functions": "Wire Stripping, Cutting, and Terminal Crimping",
      "Jaws": "High Carbon Alloy Steel Induction Heat-Treated"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_screw_extractor",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "damaged stripped screw extractor bit set",
    "nameTemplate": "Damaged & Stripped Screw Extractor Drill Bit Set (6-Piece)",
    "tagline": "Bites into rusted, rounded, and broken screws and bolts to spin them out effortlessly in seconds.",
    "lowRange": [
      2.5,
      5.8
    ],
    "retailRange": [
      13.99,
      22.99
    ],
    "images": [
      "/images/products/prod-00069-tool-screw-extractor.jpg"
    ],
    "viewsBase": 41.2,
    "specs": {
      "Material": "High-Speed Steel HSS 4341 (Hardness 63-65 HRC)",
      "Sizes": "#0 to #4 For Screws 2mm to 12mm",
      "Shank": "Standard 1/4-Inch Hex Quick Connect"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_universal_socket",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "universal socket wrench grip adapter",
    "nameTemplate": "Universal Socket Wrench Grip Tool (7mm to 19mm)",
    "tagline": "54 spring-loaded chrome vanadium pins automatically contour to grip hex nuts, wing nuts, eye bolts, and hooks.",
    "lowRange": [
      3.6,
      7.8
    ],
    "retailRange": [
      16.99,
      27.99
    ],
    "images": [
      "/images/products/prod-00070-tool-universal-socket.jpg"
    ],
    "viewsBase": 35,
    "specs": {
      "Grip Range": "1/4-inch to 3/4-inch (7mm - 19mm)",
      "Pins": "54 Solid Chrome Vanadium Steel Spring Rods",
      "Adapter": "Includes 3/8-inch Power Drill Drive Adapter"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_laser_level",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "cross line laser level self leveling 360",
    "nameTemplate": "Self-Leveling 360° Cross-Line Green Laser Level",
    "tagline": "Projects ultra-crisp green cross lasers up to 100ft for hanging pictures, installing tiles, and shelving.",
    "lowRange": [
      14,
      26
    ],
    "retailRange": [
      54.99,
      89.99
    ],
    "images": [
      "/images/products/prod-00071-tool-laser-level.jpg"
    ],
    "viewsBase": 29.7,
    "specs": {
      "Beam": "High-Visibility German Osram Green Laser",
      "Accuracy": "±1/9-inch at 33 Feet",
      "Self-Leveling": "Smart Smart Pendulum System (within 4°)"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_anti_vibration",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "anti vibration pads washing machine rubber",
    "nameTemplate": "Anti-Vibration Washing Machine Rubber Support Pads (4-Pack)",
    "tagline": "Eliminates washing machine walking, violent banging noises, and floor scratches during high spin cycles.",
    "lowRange": [
      2.8,
      6.2
    ],
    "retailRange": [
      14.99,
      24.99
    ],
    "images": [
      "/images/products/prod-00072-tool-anti-vibration.jpg"
    ],
    "viewsBase": 48.3,
    "specs": {
      "Material": "Tire-Grade Heavy Duty Rubber + Polymer Resin",
      "Suction": "Micro-Grip Bottom Suction Pattern",
      "Load": "Supports Up to 1000 lbs Shock Vibration"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_endoscope",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "waterproof endoscope inspection camera phone",
    "nameTemplate": "HD Waterproof Snake Endoscope Camera with 8 LEDs for Phones",
    "tagline": "Snakes down drains, walls, and car engine cylinders to stream live 1080P HD footage directly to your smartphone.",
    "lowRange": [
      9.2,
      17.5
    ],
    "retailRange": [
      36.99,
      59.99
    ],
    "images": [
      "/images/products/prod-00073-tool-endoscope.jpg"
    ],
    "viewsBase": 38.6,
    "specs": {
      "Cable Length": "16.4 Feet (5M) Semi-Rigid Waterproof Cable",
      "Camera Probe": "5.5mm Ultra-Slim Lens with 8 Dimmable LEDs",
      "Rating": "IP67 Submersible Waterproof"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_caulk_finisher",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "silicone caulk finishing tool scraper kit",
    "nameTemplate": "3-in-1 Silicone Caulking Scraper & Smooth Finishing Tool",
    "tagline": "Removes old mildewed caulk cleanly and glides fresh sealant into smooth, professional, water-tight corners.",
    "lowRange": [
      2.2,
      5.4
    ],
    "retailRange": [
      12.99,
      21.99
    ],
    "images": [
      "/images/products/prod-00074-tool-caulk-finisher.jpg"
    ],
    "viewsBase": 26.9,
    "specs": {
      "Scraper": "Stainless Steel Residual Caulk Shovel",
      "Smoothing Pads": "5 Interchangeable Silicone Radius Heads (3R to 17R)",
      "Application": "Sinks, Bathtubs, Countertops, and Tiles"
    },
    "variantsCount": 44
  },
  {
    "key": "tool_caliper",
    "category": "tools-utility",
    "categoryName": "Everyday Problem Solvers",
    "cleanSearch": "digital caliper measuring tool micrometer",
    "nameTemplate": "Electronic Digital Vernier Caliper (0-6 Inch / 150mm)",
    "tagline": "Reads internal, external, depth, and step measurements instantly to 0.0005-inch precision on large LCD screen.",
    "lowRange": [
      4.5,
      9.8
    ],
    "retailRange": [
      19.99,
      32.99
    ],
    "images": [
      "/images/products/prod-00075-tool-caliper.jpg"
    ],
    "viewsBase": 18.7,
    "specs": {
      "Material": "Finely Polished Stainless Steel Frame",
      "Precision": "Resolution 0.01mm / 0.0005 inch",
      "Switch": "One-Button mm / Inch / Fraction Toggle"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_ab_roller",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "automatic rebound ab roller with elbow support",
    "nameTemplate": "Automatic Rebound Abdominal Wheel Roller with Elbow Support",
    "tagline": "Internal spring rebound assistance protects your lower back while burning deep core abdominals and obliques.",
    "lowRange": [
      11.5,
      21
    ],
    "retailRange": [
      44.99,
      74.99
    ],
    "images": [
      "/images/products/prod-00076-fit-ab-roller.jpg"
    ],
    "viewsBase": 104.2,
    "specs": {
      "Wheels": "Extra-Wide 4-inch Multi-Layer Anti-Skid Rubber",
      "Rebound": "High-Elasticity Carbon Steel Braking Spring",
      "Bonus": "Includes Thick Foam Knee Pad + Smart Digital Timer"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_resistance_bands",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "resistance bands set workout door anchor",
    "nameTemplate": "Stackable Resistance Bands Workout Set (Up to 150 lbs)",
    "tagline": "Replace heavy dumbbells with 5 natural latex resistance tubes, foam handles, ankle straps, and door anchor.",
    "lowRange": [
      6.8,
      13.5
    ],
    "retailRange": [
      29.99,
      49.99
    ],
    "images": [
      "/images/products/prod-00077-fit-resistance-bands.jpg"
    ],
    "viewsBase": 63.8,
    "specs": {
      "Material": "100% Snap-Proof Natural Malaysian Latex",
      "Resistance": "5 Bands (10, 20, 30, 40, 50 lbs = 150 lbs Total)",
      "Accessories": "2 Handles, 2 Ankle Straps, 1 Door Anchor, 1 Carry Bag"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_jump_rope",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "speed jump rope bearing steel cable",
    "nameTemplate": "High-Speed 360° Ball Bearing Fitness Jump Rope",
    "tagline": "Tangle-free steel cable spins smoothly at lightning speed for double-unders, cardio, and calorie burning.",
    "lowRange": [
      2.8,
      6.2
    ],
    "retailRange": [
      14.99,
      24.99
    ],
    "images": [
      "/images/products/prod-00078-fit-jump-rope.jpg"
    ],
    "viewsBase": 42.1,
    "specs": {
      "Bearings": "Dual 360° High-Speed Steel Ball Bearings",
      "Cable": "Braided Steel Wire with Wear-Proof PVC Sleeve",
      "Handles": "Silicone Anti-Slip Aluminum Alloy Grips"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_back_stretcher",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "back stretcher lumbar pain relief acupressure",
    "nameTemplate": "Multi-Level Lumbar Spine Back Stretcher & Acupressure Arch",
    "tagline": "Decompresses pinched spinal discs and relieves lower back tightness in 5 minutes with 88 acupressure nodes.",
    "lowRange": [
      3.8,
      7.9
    ],
    "retailRange": [
      19.99,
      32.99
    ],
    "images": [
      "/images/products/prod-00079-fit-back-stretcher.jpg"
    ],
    "viewsBase": 58.9,
    "specs": {
      "Levels": "4 Adjustable Curvature Height Arches",
      "Points": "88 Deep-Tissue Acupressure Pins + Soft Silicone Spine Strip",
      "Weight Limit": "Tough ABS Supports Up to 350 lbs"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_grip_trainer",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "grip strength trainer adjustable counter",
    "nameTemplate": "Adjustable Forearm Hand Grip Strengthener (10-60kg)",
    "tagline": "Builds forearm size, grip power, and wrist stability with adjustable stainless steel spring dial and mechanical counter.",
    "lowRange": [
      2.4,
      5.5
    ],
    "retailRange": [
      12.99,
      21.99
    ],
    "images": [
      "/images/products/prod-00080-fit-grip-trainer.jpg"
    ],
    "viewsBase": 49.3,
    "specs": {
      "Resistance": "Quick Twist Dial from 22 lbs to 132 lbs (10-60kg)",
      "Counter": "Mechanical Clicker Automatically Records Reps",
      "Grip": "Ergonomic Non-Slip Rubber Palm Mould"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_knee_sleeves",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "compression knee brace patella gel side stabilizers",
    "nameTemplate": "Professional Compression Knee Sleeves with Patella Gel Pads",
    "tagline": "Stabilizes knee joint during heavy squats, running, and basketball with medical-grade silicone patella ring.",
    "lowRange": [
      4.2,
      8.8
    ],
    "retailRange": [
      19.99,
      34.99
    ],
    "images": [
      "/images/products/prod-00081-fit-knee-sleeves.jpg"
    ],
    "viewsBase": 36.4,
    "specs": {
      "Support": "Dual Flexible Side Spring Stabilizers",
      "Knee Cap": "Anatomically Contoured Silicone Shock Gel",
      "Fabric": "3D Breathable High-Elastic Knit Weave"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_foam_roller",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "deep tissue foam roller muscle trigger point",
    "nameTemplate": "High-Density Deep Tissue Grid Trigger Point Foam Roller",
    "tagline": "Releases tight IT bands, calves, and quad fascia to speed up post-workout muscle recovery.",
    "lowRange": [
      5.2,
      10.8
    ],
    "retailRange": [
      22.99,
      38.99
    ],
    "images": [
      "/images/products/prod-00082-fit-foam-roller.jpg"
    ],
    "viewsBase": 28.1,
    "specs": {
      "Core": "Durable Hollow PVC Core (Will Not Crack Under 500 lbs)",
      "Surface": "3D Multi-Density Matrix EVA Foam Zones",
      "Size": "13-inch Compact Travel Length"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_pilates_bar",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "portable pilates bar kit resistance bands",
    "nameTemplate": "Portable Home Pilates Toning Bar Kit with Resistance Bands",
    "tagline": "Detachable steel bar with foot loop resistance cords tones thighs, hips, waist, and arms without gym machines.",
    "lowRange": [
      6.5,
      12.8
    ],
    "retailRange": [
      27.99,
      44.99
    ],
    "images": [
      "/images/products/prod-00083-fit-pilates-bar.jpg"
    ],
    "viewsBase": 53.7,
    "specs": {
      "Bar": "Steel Retractable Bar Wrapped in Soft EVA Foam",
      "Bands": "Heavy Duty Double Latex Elastic Cables",
      "Portability": "Detaches into 2 Halves for Easy Travel"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_pushup_board",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "foldable push up board 14 in 1",
    "nameTemplate": "14-in-1 Foldable Color-Coded Muscle Push-Up Board",
    "tagline": "Target chest, shoulders, triceps, and back with color-coded handle positions for perfect lifting form.",
    "lowRange": [
      7.2,
      13.9
    ],
    "retailRange": [
      29.99,
      48.99
    ],
    "images": [
      "/images/products/prod-00084-fit-pushup-board.jpg"
    ],
    "viewsBase": 81.3,
    "specs": {
      "Zones": "Blue (Chest), Red (Shoulders), Yellow (Back), Green (Triceps)",
      "Handles": "Premium Ergonomic Non-Slip Silicone Grips",
      "Frame": "Ductile ABS Composite Tested to 300 kg Load"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_smart_hoop",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "smart weighted hula hoop non drop",
    "nameTemplate": "Smart Weighted Infinity Hula Hoop with Auto-Spinning Ball",
    "tagline": "Never falls down from your waist; burns stubborn abdominal fat 3x faster with 360-degree massage nodes.",
    "lowRange": [
      8.5,
      15.8
    ],
    "retailRange": [
      34.99,
      56.99
    ],
    "images": [
      "/images/products/prod-00085-fit-smart-hoop.jpg"
    ],
    "viewsBase": 95.8,
    "specs": {
      "Knots": "24 Detachable Magnetic Links (Fits 24 to 52 inch waists)",
      "Ball": "Weighted Gravity Centrifugal Ball with Smooth Bearings",
      "Massage": "Shock-Absorbing Spring Massage Cushions"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_acupressure_mat",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "acupressure mat and pillow set",
    "nameTemplate": "Therapeutic Acupressure Mat and Neck Pillow Set",
    "tagline": "Lying down on 8,000 gentle spikes triggers instant endorphin release, melting away stress and muscle knots.",
    "lowRange": [
      7.9,
      14.5
    ],
    "retailRange": [
      32.99,
      52.99
    ],
    "images": [
      "/images/products/prod-00086-fit-acupressure-mat.jpg"
    ],
    "viewsBase": 44.6,
    "specs": {
      "Spikes": "Non-Toxic Recyclable ABS Lotus Needles",
      "Padding": "100% Eco Foam with Breathable Cotton Cover",
      "Set": "Includes Full Body Mat + Ergonomic Neck Roll Pillow"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_yoga_mat",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "tpe yoga mat non slip alignment lines",
    "nameTemplate": "Extra Thick Non-Slip TPE Yoga Mat with Body Alignment Lines",
    "tagline": "Laser-engraved alignment markings guide hands and feet into correct posture with 6mm high-rebound joint cushioning.",
    "lowRange": [
      8.2,
      15
    ],
    "retailRange": [
      34.99,
      54.99
    ],
    "images": [
      "/images/products/prod-00087-fit-yoga-mat.jpg"
    ],
    "viewsBase": 31.9,
    "specs": {
      "Thickness": "6mm High-Density Cushioning",
      "Material": "Eco-Friendly Odorless TPE (Zero Latex/PVC)",
      "Grip": "Dual-Sided Textured Non-Slip Wave Pattern"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_waist_trimmer",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "waist trimmer belt sweat sweatband neoprene",
    "nameTemplate": "Premium Sweat Sauna Waist Trimmer Belt for Core Support",
    "tagline": "Traps core metabolic heat to sweat off excess water weight while providing firm lumbar back stability.",
    "lowRange": [
      3.8,
      7.5
    ],
    "retailRange": [
      16.99,
      27.99
    ],
    "images": [
      "/images/products/prod-00088-fit-waist-trimmer.jpg"
    ],
    "viewsBase": 51,
    "specs": {
      "Neoprene": "100% Latex-Free Premium Thermal Neoprene",
      "Inner Lining": "Moisture-Repelling Grid Surface (Prevents Slipping)",
      "Closure": "Fully Adjustable Industrial Hook & Loop"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_finger_extensor",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "finger resistance band extensor hand grip",
    "nameTemplate": "Silicone Finger Resistance Bands & Hand Extensor Trainer",
    "tagline": "Balances grip training and relieves carpal tunnel by exercising opposing finger extension muscles.",
    "lowRange": [
      1.8,
      3.9
    ],
    "retailRange": [
      9.99,
      16.99
    ],
    "images": [
      "/images/products/prod-00089-fit-finger-extensor.jpg"
    ],
    "viewsBase": 38.5,
    "specs": {
      "Levels": "3 Resistance Tensions (6.6lb, 8.8lb, 11lb)",
      "Silicone": "Tear-Proof High Elastic Silicone",
      "Ideal For": "Guitarists, Rock Climbers, Gamers, Rehab"
    },
    "variantsCount": 44
  },
  {
    "key": "fit_cooling_towel",
    "category": "fitness-lifestyle",
    "categoryName": "Fitness & Active Lifestyle",
    "cleanSearch": "cooling towel instant chill microfiber gym",
    "nameTemplate": "Instant Chill Microfiber Cooling Sports Towel (2-Pack)",
    "tagline": "Soak, wring out, and snap to instantly cool down to 30 degrees below body temp for running, gym, and heat waves.",
    "lowRange": [
      2.1,
      4.6
    ],
    "retailRange": [
      11.99,
      18.99
    ],
    "images": [
      "/images/products/prod-00090-fit-cooling-towel.jpg"
    ],
    "viewsBase": 27.6,
    "specs": {
      "Technology": "Hyper-Evaporative Breathable Mesh Fabric",
      "Chemicals": "Zero Chemicals (Physical Evaporative Cooling)",
      "Sun Protection": "UPF 50+ UV Blocking Rating"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_sunset_lamp",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "sunset projection lamp 16 colors remote",
    "nameTemplate": "Sunset Projection Atmosphere Halo Floor Lamp (16 Colors)",
    "tagline": "Projects dreamy golden-hour sunset halos and aesthetic gradients across walls for viral photos and cozy bedroom ambiance.",
    "lowRange": [
      4.8,
      9.8
    ],
    "retailRange": [
      21.99,
      36.99
    ],
    "images": [
      "/images/products/prod-00091-smart-sunset-lamp.jpg"
    ],
    "viewsBase": 128.5,
    "specs": {
      "Optics": "HD Crystal Optical Glass Lens (No Color Glare)",
      "Head": "180° Flexible Rotating Swivel Head",
      "Control": "Remote Control + Smart Phone App Color Tuning"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_neon_rope",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "smart rgb neon rope light strip wifi",
    "nameTemplate": "Smart WiFi RGBIC Neon Rope LED Lights (16.4ft Music Sync)",
    "tagline": "Bendable silicone neon rope syncs pulsing colors to your music beats and shapes custom illuminated wall art.",
    "lowRange": [
      9.5,
      18
    ],
    "retailRange": [
      38.99,
      64.99
    ],
    "images": [
      "/images/products/prod-00092-smart-neon-rope.jpg"
    ],
    "viewsBase": 84.1,
    "specs": {
      "Technology": "RGBIC Segmented Rainbow Flow Effects",
      "Voice": "Works with Alexa & Google Assistant",
      "Waterproof": "IP67 Weatherproof Silicone Coating"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_flame_diffuser",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "flame aroma essential oil diffuser humidifier",
    "nameTemplate": "Realistic Flame Effect Aroma Diffuser & Ultrasonic Humidifier",
    "tagline": "Combines fine ultrasonic mist with warm LEDs to mimic a dancing fireplace flame while diffusing calming scents.",
    "lowRange": [
      7.8,
      14.5
    ],
    "retailRange": [
      29.99,
      49.99
    ],
    "images": [
      "/images/products/prod-00093-smart-flame-diffuser.jpg"
    ],
    "viewsBase": 94.6,
    "specs": {
      "Tank": "200ml Ultrasonic Quiet Tank (<25dB)",
      "Safety": "Auto Shut-Off Waterless Protection",
      "Flame Lighting": "2 Brightness Modes (Soft Glow / Intense Flame)"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_fingerbot",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "fingerbot smart button switch pusher",
    "nameTemplate": "Smart Wireless Bluetooth Switch Button Pusher (Fingerbot)",
    "tagline": "Snaps onto old light switches, coffee makers, and garage buttons to mechanically press them via phone or timer.",
    "lowRange": [
      6.2,
      12
    ],
    "retailRange": [
      24.99,
      39.99
    ],
    "images": [
      "/images/products/prod-00094-smart-fingerbot.jpg"
    ],
    "viewsBase": 47.3,
    "specs": {
      "Push Force": "1.6 kgf (Pushes Any Standard Rocker/Button)",
      "Arms": "Tool Pack with 5 Robotic Mechanical Arms",
      "Battery": "CR2 3V Battery (Over 600 Days Battery Life)"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_moon_lamp",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "magnetic levitating moon lamp floating",
    "nameTemplate": "Magnetic Levitating Floating Moon Lamp with 3D Craters",
    "tagline": "Floats and spins silently in mid-air using electromagnetic levitation while glowing in 3 lunar light temperatures.",
    "lowRange": [
      24,
      39
    ],
    "retailRange": [
      89.99,
      149.99
    ],
    "images": [
      "/images/products/prod-00095-smart-moon-lamp.jpg"
    ],
    "viewsBase": 76.9,
    "specs": {
      "Printing": "3D High-Resolution NASA Topographic Surface",
      "Base": "Walnut Grain Electromagnetic Levitation Base",
      "Modes": "Warm White, Cool White, Natural Yellow"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_under_cabinet",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "motion sensor under cabinet lights magnetic",
    "nameTemplate": "Rechargeable Motion Sensor Under-Cabinet LED Light Bars",
    "tagline": "Snaps magnetically under kitchen counters, closets, and stairways; lights up automatically when you walk in.",
    "lowRange": [
      5.2,
      11
    ],
    "retailRange": [
      22.99,
      36.99
    ],
    "images": [
      "/images/products/prod-00096-smart-under-cabinet.jpg"
    ],
    "viewsBase": 41.5,
    "specs": {
      "LEDs": "60 Eye-Caring Glare-Free Side-Emitting Diodes",
      "Sensor": "PIR Infrared Detects Motion Up to 10 Feet",
      "Mounting": "Built-in Strong Magnets + 3M Metal Adhesive Plates"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_star_projector",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "astronaut galaxy star projector nebula",
    "nameTemplate": "Astronaut Starry Galaxy Nebula Projector with Remote",
    "tagline": "Projects rotating colorful starry nebulae and twinkling green stars with 360-degree magnetic astronaut head.",
    "lowRange": [
      9.8,
      17.5
    ],
    "retailRange": [
      38.99,
      64.99
    ],
    "images": [
      "/images/products/prod-00097-smart-star-projector.jpg"
    ],
    "viewsBase": 115.2,
    "specs": {
      "Head Movement": "360° Magnetic Detachable Head Articulation",
      "Effects": "8 Nebula Color Blends + Breathing Star Speeds",
      "Timer": "45 min / 90 min Auto-Off Sleep Timer"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_wifi_plug",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "smart wifi plug socket energy monitoring",
    "nameTemplate": "Smart WiFi Plug with Real-Time Energy Consumption Monitor",
    "tagline": "Turn appliances on and off from anywhere with your phone, track electricity usage, and set automatic timers.",
    "lowRange": [
      4.2,
      8.5
    ],
    "retailRange": [
      18.99,
      29.99
    ],
    "images": [
      "/images/products/prod-00098-smart-wifi-plug.jpg"
    ],
    "viewsBase": 26.4,
    "specs": {
      "Rating": "16A / 1800W Flame Retardant Shell",
      "Integration": "Amazon Alexa, Google Home, Smart Life App",
      "Features": "Power Metering, Schedule Timers, Away Mode"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_video_doorbell",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "wireless video doorbell camera chime hd",
    "nameTemplate": "Wireless 1080P HD Video Doorbell Camera with Indoor Chime",
    "tagline": "See, hear, and speak to visitors at your front door from your smartphone with clear night vision and motion alerts.",
    "lowRange": [
      14,
      26
    ],
    "retailRange": [
      54.99,
      89.99
    ],
    "images": [
      "/images/products/prod-00099-smart-video-doorbell.jpg"
    ],
    "viewsBase": 39.8,
    "specs": {
      "Video": "1080P Full HD 166° Wide Angle Lens",
      "Audio": "Two-Way Audio with Noise Cancellation",
      "Battery": "5200mAh Rechargeable (6 Months Runtime)"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_sand_art",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "moving sand art picture liquid 3d desk",
    "nameTemplate": "3D Moving Sand Art Deep Sea Liquid Kinetic Lamp",
    "tagline": "Rotate the sealed glass frame to watch falling sand create soothing mountainscapes and desert dunes with warm ambient glow.",
    "lowRange": [
      9.2,
      16.5
    ],
    "retailRange": [
      36.99,
      58.99
    ],
    "images": [
      "/images/products/prod-00100-smart-sand-art.jpg"
    ],
    "viewsBase": 88,
    "specs": {
      "Glass": "High-Transparency Lead-Free Sealed Crystal",
      "Lighting": "Touch Dimming LED Circular Base (3 Colors)",
      "Rotation": "360-Degree Continuous Flipping Design"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_air_purifier",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "air purifier true hepa filter bedroom",
    "nameTemplate": "Ultra-Quiet Desktop Air Purifier with H13 True HEPA Filter",
    "tagline": "Captures 99.97% of airborne dust, pet dander, smoke, and odors in bedrooms with whisper-silent sleep mode.",
    "lowRange": [
      16.5,
      29.5
    ],
    "retailRange": [
      64.99,
      109.99
    ],
    "images": [
      "/images/products/prod-00101-smart-air-purifier.jpg"
    ],
    "viewsBase": 34.5,
    "specs": {
      "Filtration": "3-Stage (Pre-filter, True HEPA H13, Activated Carbon)",
      "Noise Level": "Whisper-Quiet 22dB Sleep Mode",
      "Coverage": "Cleans up to 215 sq ft Every 30 Minutes"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_salt_lamp",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "natural himalayan salt lamp wooden base dimmer",
    "nameTemplate": "Handcrafted 100% Himalayan Pink Salt Rock Crystal Lamp",
    "tagline": "Natural pink salt crystal releases negative ions to purify indoor air and emits a relaxing warm amber therapeutic glow.",
    "lowRange": [
      8.5,
      15
    ],
    "retailRange": [
      32.99,
      49.99
    ],
    "images": [
      "/images/products/prod-00102-smart-salt-lamp.jpg"
    ],
    "viewsBase": 37.9,
    "specs": {
      "Salt Origin": "100% Authentic Khewra Salt Mine, Pakistan",
      "Base": "Solid Neem Wooden Base with Brass Screws",
      "Dimmer": "Rotary Dimmer Switch with 15W Halogen Bulb"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_temp_sensor",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "wifi thermometer humidity sensor hygrometer",
    "nameTemplate": "Smart WiFi Indoor Temperature & Humidity Monitor Hygrometer",
    "tagline": "Monitors baby room, greenhouse, and cellar climate with Swiss precision sensor and instant high-temperature phone notifications.",
    "lowRange": [
      5.5,
      11.2
    ],
    "retailRange": [
      22.99,
      36.99
    ],
    "images": [
      "/images/products/prod-00103-smart-temp-sensor.jpg"
    ],
    "viewsBase": 19.3,
    "specs": {
      "Sensor": "Sensirion Swiss Precision Thermometer Sensor",
      "Screen": "High-Contrast E-Ink Display with Comfort Icons",
      "App": "Unlimited 2-Year Cloud Data Export History"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_corner_lamp",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "rgb corner floor lamp minimalist led",
    "nameTemplate": "Modern Minimalist RGB Corner LED Floor Standing Light Bar",
    "tagline": "Tucks neatly into any corner and illuminates walls with 16 million colors, gradient chase effects, and music sync.",
    "lowRange": [
      13.5,
      24.5
    ],
    "retailRange": [
      54.99,
      89.99
    ],
    "images": [
      "/images/products/prod-00104-smart-corner-lamp.jpg"
    ],
    "viewsBase": 67.2,
    "specs": {
      "Height": "56 inches (142cm) Space-Saving Corner Stand",
      "Effects": "300+ Dynamic Multicolored Light Modes",
      "Control": "Remote Control + Smart Bluetooth App"
    },
    "variantsCount": 44
  },
  {
    "key": "smart_plant_waterer",
    "category": "smart-home",
    "categoryName": "Smart Home & Ambient Lighting",
    "cleanSearch": "automatic plant watering spikes",
    "nameTemplate": "Automatic Plant Self-Watering Spikes Drip Irrigation System",
    "tagline": "Keeps potted house plants hydrated for up to 15 days while on vacation with precision slow-release drip control valves.",
    "lowRange": [
      2.5,
      5.8
    ],
    "retailRange": [
      13.99,
      22.99
    ],
    "images": [
      "/images/products/prod-00105-smart-plant-waterer.jpg"
    ],
    "viewsBase": 31.8,
    "specs": {
      "Compatibility": "Fits standard 0.8 to 1.1 inch plastic bottle necks",
      "Drip Speed": "Adjustable Valve (0-60s per drip = 1-15 days)",
      "Pack": "Includes 12 Self-Watering Spikes with Brackets"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_pop_game",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "quick push pop it game",
    "nameTemplate": "Electronic Quick Push Pop-It Sensory Puzzle Game Console",
    "tagline": "Addictive hand-eye coordination speed bubble game with 4 game modes, upbeat sound effects, and light-up bubbles.",
    "lowRange": [
      4.2,
      8.5
    ],
    "retailRange": [
      18.99,
      29.99
    ],
    "images": [
      "/images/products/prod-00106-kids-pop-game.jpg"
    ],
    "viewsBase": 142,
    "specs": {
      "Game Modes": "Breakout, Memory, Scoring, Multiplayer",
      "Sound": "Adjustable Volume with Dynamic Pop BGM",
      "Ergonomics": "Shockproof ABS Silicone Grip"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_lcd_tablet",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "lcd writing tablet drawing board stylus",
    "nameTemplate": "10-Inch Rainbow LCD Electronic Drawing & Writing Tablet",
    "tagline": "Mess-free digital doodle board with pressure-sensitive stylus and one-touch instant screen clear button.",
    "lowRange": [
      3.4,
      7.2
    ],
    "retailRange": [
      16.99,
      26.99
    ],
    "images": [
      "/images/products/prod-00107-kids-lcd-tablet.jpg"
    ],
    "viewsBase": 65.4,
    "specs": {
      "Screen": "10-inch Eye-Protection Flexible Color LCD",
      "Battery": "CR2025 Coin Battery (Over 100,000 Erases)",
      "Lock": "Anti-Accidental Erasure Lock Switch on Back"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_flying_orb",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "flying orb hover ball boomerang spinner",
    "nameTemplate": "Flying Orb Hover Ball Magic Boomerang Drone Spinner",
    "tagline": "Throw it into the air to watch it hover, glow with RGB LED lights, and curve back to your hand like a boomerang.",
    "lowRange": [
      5.8,
      11
    ],
    "retailRange": [
      24.99,
      39.99
    ],
    "images": [
      "/images/products/prod-00108-kids-flying-orb.jpg"
    ],
    "viewsBase": 135.8,
    "specs": {
      "Safety": "Enclosed Spherical Propeller Polypropylene Shell",
      "LED": "Dazzling RGB Light Strip Inside",
      "Charging": "20 Mins USB Fast Charge (10 Mins Flight)"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_magnetic_pen",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "magnetic fidget pen modular thinking toy",
    "nameTemplate": "Modular Magnetic Fidget Thinking Pen with Stylus Tips",
    "tagline": "Transforms into swords, robots, and desktop sculptures with ultra-strong neodymium magnetic cylinders and steel spheres.",
    "lowRange": [
      3.2,
      6.5
    ],
    "retailRange": [
      15.99,
      24.99
    ],
    "images": [
      "/images/products/prod-00109-kids-magnetic-pen.jpg"
    ],
    "viewsBase": 89.2,
    "specs": {
      "Magnets": "13 Neodymium Magnetic Tubes + 12 Steel Balls",
      "Writing": "Smooth Gel Pen Ink Refills Included",
      "Touchscreen": "2 Soft Capacitive Stylus Touch Tips"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_dancing_cactus",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "dancing cactus plush toy singing mimicking",
    "nameTemplate": "Interactive Dancing & Talking Mimicking Plush Cactus Toy",
    "tagline": "Hilarious musical cactus dances in flowerpot, mimics any voice in funny tones, and sings 120 upbeat popular songs.",
    "lowRange": [
      4.5,
      8.9
    ],
    "retailRange": [
      19.99,
      32.99
    ],
    "images": [
      "/images/products/prod-00110-kids-dancing-cactus.jpg"
    ],
    "viewsBase": 124.9,
    "specs": {
      "Functions": "Twisting Dance, Repeating Voice Echo, LED Glow",
      "Music": "Preloaded with 120 English & Global Songs",
      "Fabric": "Knitted Soft Plush Non-Toxic Cotton"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_kinetic_sculpture",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "perpetual motion desk toy kinetic art",
    "nameTemplate": "Perpetual Motion Magnetic Kinetic Celestial Desk Sculpture",
    "tagline": "Orbital celestial rings swing continuously in mesmerizing kinetic patterns powered by hidden magnetic induction.",
    "lowRange": [
      5.2,
      10.5
    ],
    "retailRange": [
      22.99,
      36.99
    ],
    "images": [
      "/images/products/prod-00111-kids-kinetic-sculpture.jpg"
    ],
    "viewsBase": 47.8,
    "specs": {
      "Rings": "Chromed Plastic Balanced Orbiting Rings",
      "Base": "Sturdy Heavy Magnetic Electromagnet Stand",
      "Battery": "Powered by 4x AA Batteries"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_octopus_plush",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "reversible octopus plushie mood toy",
    "nameTemplate": "Reversible Mood Octopus Sensory Plushie (Happy & Angry)",
    "tagline": "Flip inside-out to easily show the world whether you are in a happy joyful mood or an grumpy angry mood.",
    "lowRange": [
      1.8,
      3.8
    ],
    "retailRange": [
      9.99,
      16.99
    ],
    "images": [
      "/images/products/prod-00112-kids-octopus-plush.jpg"
    ],
    "viewsBase": 168.4,
    "specs": {
      "Design": "Double-Sided Flip Reversible Two-Tone Eyes",
      "Material": "Extra-Soft Crystal Velvet + PP Cotton Filler",
      "Size": "20cm / 7.8 inch Huggable Diameter"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_piggy_bank",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "electronic piggy bank atm password safe cash",
    "nameTemplate": "Electronic Digital ATM Password Piggy Bank Vault",
    "tagline": "Auto-scrolls paper cash into vault like a real ATM and teaches kids financial savings habits with 4-digit PIN code.",
    "lowRange": [
      9.2,
      16
    ],
    "retailRange": [
      34.99,
      54.99
    ],
    "images": [
      "/images/products/prod-00113-kids-piggy-bank.jpg"
    ],
    "viewsBase": 49.3,
    "specs": {
      "Feeder": "Automatic Induction Paper Currency Roller",
      "Security": "4-Digit Customizable Password Knob Lock",
      "Capacity": "Holds 600 Coins or 100 Cash Bills"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_ferrofluid",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "ferrofluid magnetic liquid display bottle toy",
    "nameTemplate": "Magnetic Liquid Ferrofluid Sound-Reactive Display Bottle",
    "tagline": "Black nano-magnetic liquid dances and morphs into spikes and fluid geometry in response to magnetic fields and music.",
    "lowRange": [
      8.5,
      15.8
    ],
    "retailRange": [
      32.99,
      52.99
    ],
    "images": [
      "/images/products/prod-00114-kids-ferrofluid.jpg"
    ],
    "viewsBase": 58.1,
    "specs": {
      "Fluid": "Nano Magnetic Iron Particles in Mineral Suspension",
      "Bottle": "Sealed Crystal-Clear Tempered Glass",
      "Magnets": "Includes 2 Neodymium Sculpting Wand Magnets"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_3d_illusion_lamp",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "3d optical illusion night light 16 colors",
    "nameTemplate": "3D Optical Illusion LED Acrylic Night Light with Remote",
    "tagline": "Laser-etched optical acrylic sheet creates a floating 3D visual wireframe effect with 16 glowing colors.",
    "lowRange": [
      4.5,
      9.2
    ],
    "retailRange": [
      19.99,
      32.99
    ],
    "images": [
      "/images/products/prod-00115-kids-3d-illusion-lamp.jpg"
    ],
    "viewsBase": 62.7,
    "specs": {
      "Plate": "Optical Grade Laser Engraved Acrylic Plate",
      "Base": "Crack Pattern Smart Touch Base with 10 LEDs",
      "Power": "USB Cable or 3x AA Battery Powered"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_fidget_bundle",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "sensory fidget toy pack",
    "nameTemplate": "Sensory Fidget Toy Pack for ADHD & Stress Relief (28-Piece)",
    "tagline": "Complete set of sensory pop tubes, marble mesh, infinity cubes, and squeeze beans for calming anxiety and ADHD focus.",
    "lowRange": [
      5.8,
      11.5
    ],
    "retailRange": [
      24.99,
      39.99
    ],
    "images": [
      "/images/products/prod-00116-kids-fidget-bundle.jpg"
    ],
    "viewsBase": 91.2,
    "specs": {
      "Items": "28 Tested Sensory Focus Toys in Storage Tub",
      "Safety": "100% Non-Toxic BPA-Free Child Safety Certified",
      "Age": "Great for Kids, Teens, and Classroom Calm-Down Corners"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_wooden_puzzle",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "3d mechanical wooden puzzle kit",
    "nameTemplate": "3D Mechanical Wooden Puzzle Treasure Box Assembly Kit",
    "tagline": "Laser-cut precision plywood pieces assemble with gear drives and combination lock without any glue required.",
    "lowRange": [
      8.9,
      16.5
    ],
    "retailRange": [
      34.99,
      56.99
    ],
    "images": [
      "/images/products/prod-00117-kids-wooden-puzzle.jpg"
    ],
    "viewsBase": 38,
    "specs": {
      "Pieces": "158 Laser-Cut Natural Birch Wood Parts",
      "Assembly Time": "3-4 Hours of Satisfying Hands-on Crafting",
      "Feature": "Fully Functional 3-Digit Mechanical Dial Lock"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_speed_cube",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "magnetic speed cube 3x3 stickerless",
    "nameTemplate": "Pro Magnetic 3x3 Stickerless Speed Cube with Anti-Pop Core",
    "tagline": "48 internal positioning magnets deliver snappy corner alignment and silky smooth rotations for competitive cubing.",
    "lowRange": [
      3.5,
      7.8
    ],
    "retailRange": [
      16.99,
      27.99
    ],
    "images": [
      "/images/products/prod-00118-kids-speed-cube.jpg"
    ],
    "viewsBase": 71.4,
    "specs": {
      "Magnets": "48 Factory-Installed Neodymium Magnets",
      "Corner Cutting": "55° Forward and 35° Reverse Corner Cutting",
      "Surface": "Frosted Scratch-Resistant Bright Stickerless ABS"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_bubble_gun",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "automatic bubble machine gun",
    "nameTemplate": "Automatic Rocket Gatling Bubble Gun with 69 Holes & LED",
    "tagline": "Blasts thousands of colorful iridescent bubbles per minute with four glowing LED lights for birthday parties and festivals.",
    "lowRange": [
      6.8,
      13
    ],
    "retailRange": [
      27.99,
      44.99
    ],
    "images": [
      "/images/products/prod-00119-kids-bubble-gun.jpg"
    ],
    "viewsBase": 112.7,
    "specs": {
      "Holes": "69 Rocket Launcher Bubble Output Nozzles",
      "Lighting": "4 Color LEDs Illuminating Bubbles at Night",
      "Battery": "2200mAh Rechargeable Lithium Battery + Solution Trays"
    },
    "variantsCount": 44
  },
  {
    "key": "kids_finger_skateboard",
    "category": "kids-novelty",
    "categoryName": "Viral Novelties & Unique Gifts",
    "cleanSearch": "fingerboard skate park ramps finger skateboards",
    "nameTemplate": "Mini Fingerboard Skate Park Ramp Set with Die-Cast Boards",
    "tagline": "Complete skatepark obstacle course with stairs, handrails, and miniature maple finger skateboards for stunt tricks.",
    "lowRange": [
      4.8,
      9.8
    ],
    "retailRange": [
      21.99,
      34.99
    ],
    "images": [
      "/images/products/prod-00120-kids-finger-skateboard.jpg"
    ],
    "viewsBase": 49.5,
    "specs": {
      "Set": "5 Interlocking Skatepark Obstacle Modules",
      "Boards": "3x Metal Alloy Truck Fingerboards with Real Grip Tape",
      "Tools": "Mini Wheel Screwdriver & Spare Bearings Included"
    },
    "variantsCount": 44
  }
];

export const VARIANT_MODIFIERS = [
  {
    "prefix": "Pro Ultra",
    "suffix": "(2026 Upgraded Edition)",
    "feature": "Featuring high-efficiency power management and aerospace-grade construction."
  },
  {
    "prefix": "Smart Elite",
    "suffix": "with Quick-Charge Support",
    "feature": "Optimized with advanced intelligent microcontrollers for instant responsive action."
  },
  {
    "prefix": "Compact Mini",
    "suffix": "Travel Edition with Hard Case",
    "feature": "Engineered for maximum portability and lightweight everyday carry convenience."
  },
  {
    "prefix": "Industrial Grade",
    "suffix": "Heavy-Duty All-Weather Model",
    "feature": "Reinforced with shock-absorbing alloy housing and IPX8 certified seals."
  },
  {
    "prefix": "Wireless Plus",
    "suffix": "with Smart App Control",
    "feature": "Seamlessly connects to iOS and Android smartphones with real-time feedback."
  },
  {
    "prefix": "Max Stealth",
    "suffix": "Matte Black Signature Series",
    "feature": "Finished in fingerprint-resistant matte coating with whisper-silent internals."
  },
  {
    "prefix": "Turbo Power",
    "suffix": "High-Output Dual Motor Model",
    "feature": "Delivers double the standard output performance with intelligent cooling."
  },
  {
    "prefix": "Ergo Precision",
    "suffix": "Ergonomic Grip & Balance Edition",
    "feature": "Designed in collaboration with ergonomic physical specialists for zero fatigue."
  },
  {
    "prefix": "Digital Pro",
    "suffix": "with Backlit OLED Screen",
    "feature": "High-contrast digital readout displays vital operational data in all lighting."
  },
  {
    "prefix": "Master Series",
    "suffix": "Multi-Function Deluxe Kit",
    "feature": "Includes comprehensive accessory attachments and heavy-duty storage organizer."
  },
  {
    "prefix": "Eco Bio",
    "suffix": "Sustainable Platinum Edition",
    "feature": "Crafted from eco-friendly recyclable polymers with zero harsh chemical coatings."
  },
  {
    "prefix": "Pocket Tactical",
    "suffix": "Titanium Finish Quick-Release",
    "feature": "Ultra-compact profile with reinforced quick-latch mechanism for fast deployment."
  },
  {
    "prefix": "Dynamic RGB",
    "suffix": "Ambient Glow Lighting Edition",
    "feature": "Vibrant customizable lighting modes with dynamic status pulsing indicators."
  },
  {
    "prefix": "Sonic Wave",
    "suffix": "High-Frequency Harmonic Series",
    "feature": "Utilizes micro-harmonic resonant technology for whisper-quiet high performance."
  },
  {
    "prefix": "Rapid Pulse",
    "suffix": "Fast-Response Intelligent Model",
    "feature": "Instant microsecond trigger engagement with built-in thermal safety regulation."
  },
  {
    "prefix": "Core Classic",
    "suffix": "Verified Best-Seller Edition",
    "feature": "The #1 viral model featured on global social media reviews and shopping guides."
  },
  {
    "prefix": "Prime Touch",
    "suffix": "Haptic Sensor Interface Series",
    "feature": "Intuitive touch controls with subtle haptic vibration confirmation."
  },
  {
    "prefix": "Aerospace Spec",
    "suffix": "Carbon-Fiber Reinforced Shell",
    "feature": "Ultra-lightweight high-tensile carbon-fiber composite construction."
  },
  {
    "prefix": "Precision Craft",
    "suffix": "Fine-Tolerance Engineered Edition",
    "feature": "Machined to sub-millimeter tolerances for flawless repeatable results."
  },
  {
    "prefix": "Long-Range",
    "suffix": "Extended Battery Life Model",
    "feature": "Upgraded high-capacity lithium core provides up to 3x longer continuous runtime."
  },
  {
    "prefix": "Quick-Snap",
    "suffix": "Magnetic Docking System",
    "feature": "Strong neodymium magnetic interface provides instant one-hand alignment."
  },
  {
    "prefix": "Studio Audio",
    "suffix": "Acoustic Noise-Isolated Series",
    "feature": "Tuned acoustic chamber delivers studio-grade clarity and low-distortion depth."
  },
  {
    "prefix": "Aqua Guard",
    "suffix": "Submersible Waterproof Rating",
    "feature": "Double O-ring waterproof sealing withstands complete water submersion."
  },
  {
    "prefix": "Multi-Zone",
    "suffix": "Independent Dual Chamber Design",
    "feature": "Separate control channels allow simultaneous independent operation."
  },
  {
    "prefix": "Hyper Flow",
    "suffix": "Vortex Airflow Cooling Tech",
    "feature": "Patented cyclone air channels prevent thermal throttling under heavy use."
  },
  {
    "prefix": "Zero Friction",
    "suffix": "Ceramic Bearing Mechanism",
    "feature": "Ultra-slick ceramic bearing components ensure frictionless longevity."
  },
  {
    "prefix": "Titanium Tough",
    "suffix": "Scratch-Resistant Coating",
    "feature": "Diamond-hard physical vapor deposition coating prevents scuffs and wear."
  },
  {
    "prefix": "Next-Gen",
    "suffix": "AI-Powered Adaptive System",
    "feature": "Learns usage patterns to automatically optimize power and response speed."
  },
  {
    "prefix": "Omni-Grip",
    "suffix": "Textured Anti-Slip Contour",
    "feature": "Deep geometric rubber traction pattern ensures secure grip even when wet."
  },
  {
    "prefix": "Micro-Matrix",
    "suffix": "High-Density Component Layout",
    "feature": "Miniaturized circuit architecture maximizes output in minimal footprint."
  },
  {
    "prefix": "Signature Series",
    "suffix": "Gold Accent Collector Model",
    "feature": "Limited production run with custom anodized metallic highlights."
  },
  {
    "prefix": "Ultra-Luxe",
    "suffix": "Velvet Matte Soft-Touch Finish",
    "feature": "Premium tactile outer surface provides a luxurious silky hand feel."
  },
  {
    "prefix": "Active Life",
    "suffix": "Gym & Outdoor Ruggedized Edition",
    "feature": "Built to withstand drop impacts, mud, rain, and intense physical training."
  },
  {
    "prefix": "Silent Glide",
    "suffix": "Whisper-Quiet Motor Tech (<30dB)",
    "feature": "Custom dampened mechanical dampeners ensure completely silent operation."
  },
  {
    "prefix": "Super-Charge",
    "suffix": "USB-C PD Fast Recharging",
    "feature": "Refuels to 80% battery capacity in under 25 minutes with USB-C PD."
  },
  {
    "prefix": "Universal Fit",
    "suffix": "All-In-One Adaptive System",
    "feature": "Engineered to fit standard global accessories and third-party attachments."
  },
  {
    "prefix": "Heavy Shock",
    "suffix": "Military Drop-Tested Armor",
    "feature": "Survives repeated 2-meter concrete drop impacts with corner air cushions."
  },
  {
    "prefix": "Flexi-Bend",
    "suffix": "Multi-Angle Articulating Joint",
    "feature": "Bends and locks in 360-degree positions for hard-to-reach operation."
  },
  {
    "prefix": "Aroma Fusion",
    "suffix": "Micro-Porous Diffusion Core",
    "feature": "Evenly distributes micro-droplets without wet table condensation."
  },
  {
    "prefix": "Laser Guide",
    "suffix": "Precision Optical Alignment",
    "feature": "Emits sharp optical reference lines to guarantee exact positioning."
  },
  {
    "prefix": "Smart Memory",
    "suffix": "Auto-Resume Setting Function",
    "feature": "Remembers your preferred power modes and intensity after powering off."
  },
  {
    "prefix": "Extreme Cold",
    "suffix": "Sub-Zero Rated Performance",
    "feature": "Operates reliably in freezing winter conditions down to -20°C."
  },
  {
    "prefix": "Dual Mode",
    "suffix": "Manual and Automatic Selector",
    "feature": "Switch between automated hands-free operation and manual precision control."
  },
  {
    "prefix": "Viral Pick",
    "suffix": "#1 TikTok Trending Winner",
    "feature": "Over 50+ million viral social views with overwhelmingly positive customer reviews."
  }
];

const CATEGORY_TAGS: Record<string, string> = {
  "tech-gadgets": "technology,gadget",
  "home-kitchen": "kitchen,appliance",
  "beauty-health": "skincare,wellness",
  "car-outdoor": "automotive,camping",
  "tools-utility": "tools,hardware",
  "fitness-lifestyle": "fitness,workout",
  "smart-home": "smarthome,lighting",
  "kids-novelty": "toys,novelty"
};

const PRODUCT_RAW_MAP = new Map<string, ProductItem>();
const PRODUCT_ARCH_MAP = new Map<string, {
  arch: typeof ARCHETYPES[0];
  modifier?: typeof VARIANT_MODIFIERS[0];
  lowPrice: number;
  retailPrice: number;
  potentialProfit: number;
  marginPercent: number;
}>();

function generateAllProducts(): ProductItem[] {
  const allProducts: ProductItem[] = [];
  const slugs = new Set<string>();
  let globalIndex = 1;

  // Phase 1: 120 Flagship Archetypes (1 per archetype) with 100% verified authentic local images
  for (const arch of ARCHETYPES) {
    const idNum = String(globalIndex).padStart(5, "0");
    const idStr = `prod-${idNum}`;
    const title = arch.nameTemplate;
    const slug = `prod-${idNum}-${arch.key.replace(/_/g, '-')}`;

    const [minLow, maxLow] = arch.lowRange;
    const [minRetail, maxRetail] = arch.retailRange;
    const lowPrice = Number(((minLow + maxLow) / 2).toFixed(2));
    const retailPrice = Number(((minRetail + maxRetail) / 2).toFixed(2));
    const potentialProfit = Number((retailPrice - lowPrice).toFixed(2));
    const marginPercent = Math.round(((retailPrice - lowPrice) / retailPrice) * 100);

    const cleanSearchQuery = arch.cleanSearch;
    const img1 = arch.images[0];
    const img2 = arch.images[1] || `https://picsum.photos/seed/${slug}-detail/800/800`;

    const views = `${arch.viewsBase.toFixed(1)}M`;
    const rating = Number((4.7 + ((globalIndex * 3) % 3) * 0.1).toFixed(1));
    const reviewsCount = 1200 + ((globalIndex * 379) % 7800);

    const trendStatuses = ["🔥 Viral Now", "🚀 Exploding Demand", "⭐ High Margin", "📦 Evergreen Seller"] as const;
    const trendStatus = trendStatuses[globalIndex % trendStatuses.length];

    const product: ProductItem = {
      id: idStr,
      slug: slug,
      title: title,
      tagline: arch.tagline,
      description: `${title} is a premier viral problem-solver in the ${arch.categoryName} category.`,
      category: arch.category as ProductCategory,
      categoryName: arch.categoryName,
      images: [img1, img2],
      sourcing: {
        lowestPrice: lowPrice,
        currency: "$",
        supplierName: "AliExpress Verified Direct Manufacturer",
        supplierUrl: `https://www.aliexpress.com/w/wholesale-${encodeURIComponent(cleanSearchQuery).replace(/%20/g, '-')}.html`,
        moq: "1 unit (Dropship Ready)",
        shippingTimeEst: "7-12 business days",
        secondarySuppliers: []
      },
      market: {
        retailPrice: retailPrice,
        currency: "$",
        potentialProfit: potentialProfit,
        profitMarginPercent: marginPercent,
        competitorStoreName: "Amazon Retail / TikTok Shop",
        competitorStoreUrl: `https://www.amazon.com/s?k=${encodeURIComponent(cleanSearchQuery)}`,
        recommendedAdSpend: Number((lowPrice * 0.75).toFixed(2)),
        estimatedNetProfit: Number((potentialProfit - (lowPrice * 0.75)).toFixed(2))
      },
      analytics: {
        trendScore: Number((9.2 + (globalIndex % 8) * 0.1).toFixed(1)),
        trendStatus: trendStatus,
        monthlySalesVolumeEst: `${(15000 + ((globalIndex * 850) % 35000)).toLocaleString()}+ units`,
        competitionLevel: globalIndex % 3 === 0 ? "Low" : globalIndex % 3 === 1 ? "Medium" : "High",
        tiktokViews: `${views} views`,
        socialBuzz: globalIndex % 2 === 0 ? "Very High" : "High"
      },
      businessGuide: {
        whyItSells: [
          "High viral video conversion potential across TikTok, Reels, and YouTube Shorts.",
          "Directly solves an everyday problem without expensive alternatives.",
          `High perceived retail value commanding a ${marginPercent}% gross profit margin.`
        ],
        targetAudience: [
          "Online impulse shoppers, gift buyers, and life-hack enthusiasts",
          "Social media users looking for smart convenience solutions"
        ],
        adHooks: [
          `"Stop doing this the hard way... this tiny gadget changed everything!"`,
          `"I found the #1 viral product everyone on TikTok is talking about."`
        ],
        recommendedNiches: [arch.categoryName, "Problem Solvers", "Viral Products"]
      },
      specs: Object.assign({}, arch.specs, {
        "Warranty": "1-Year Manufacturer Direct Warranty",
        "Certification": "CE, RoHS, FCC Standard Compliant",
        "Origin": "Factory Direct Quality Inspected"
      }) as unknown as Record<string, string>,
      rating: rating,
      reviewsCount: reviewsCount,
      isFeatured: globalIndex <= 24,
      isDailyPick: globalIndex <= 8,
      addedAt: "2026-09-19T00:00:00.000Z",
      updatedAt: "2026-09-19T00:00:00.000Z"
    };

    allProducts.push(product);
    slugs.add(slug);
    PRODUCT_RAW_MAP.set(slug, product);
    PRODUCT_ARCH_MAP.set(slug, {
      arch,
      lowPrice,
      retailPrice,
      potentialProfit,
      marginPercent
    });

    globalIndex++;
  }

  // Phase 2: Generate remaining 4,880 unique products (610 per category across 8 categories)
  // Total = 120 + 4,880 = 5,000 products (625 per category)
  const archByCat: Record<string, typeof ARCHETYPES> = {};
  CATEGORIES.forEach(c => archByCat[c.slug] = []);
  ARCHETYPES.forEach(a => archByCat[a.category].push(a));

  for (const cat of CATEGORIES) {
    const list = archByCat[cat.slug];
    list.forEach((arch, archIdx) => {
      // 10 archetypes have 41 variants (= 410), 5 archetypes have 40 variants (= 200) -> Total 610 + 15 = 625
      const variantsCount = archIdx < 10 ? 41 : 40;
      const [minLow, maxLow] = arch.lowRange;
      const [minRetail, maxRetail] = arch.retailRange;
      const categoryTag = CATEGORY_TAGS[arch.category] || "gadget";

      for (let v = 1; v <= variantsCount; v++) {
        const modifier = VARIANT_MODIFIERS[(v - 1) % VARIANT_MODIFIERS.length];
        const idNum = String(globalIndex).padStart(5, "0");
        const idStr = `prod-${idNum}`;

        const cleanPrefix = modifier.prefix.toLowerCase().replace(/[^a-z0-9]/g, '');
        const slug = `prod-${idNum}-${arch.key.replace(/_/g, '-')}-${cleanPrefix}-${v}`;
        const title = `${modifier.prefix} ${arch.nameTemplate} (${modifier.suffix})`;

        const priceFactor = v / variantsCount;
        const lowPrice = Number((minLow + (maxLow - minLow) * (0.25 + 0.75 * priceFactor)).toFixed(2));
        const retailPrice = Number((minRetail + (maxRetail - minRetail) * (0.25 + 0.75 * priceFactor)).toFixed(2));
        const potentialProfit = Number((retailPrice - lowPrice).toFixed(2));
        const marginPercent = Math.round(((retailPrice - lowPrice) / retailPrice) * 100);

        const cleanSearchQuery = arch.cleanSearch;
        // Guaranteed UNIQUE primary and secondary image with unique deterministic seed
        const img1 = `https://picsum.photos/seed/${slug}/800/800`;
        const img2 = `https://picsum.photos/seed/${slug}-alt/800/800`;

        const views = `${(arch.viewsBase * (0.7 + 0.6 * ((v * 7) % 10) / 10)).toFixed(1)}M`;
        const rating = Number((4.6 + (((v * 3) % 4) * 0.1)).toFixed(1));
        const reviewsCount = 500 + ((v * 370 + globalIndex * 13) % 9500);

        const trendStatuses = ["🔥 Viral Now", "🚀 Exploding Demand", "⭐ High Margin", "📦 Evergreen Seller"] as const;
        const trendStatus = trendStatuses[(v + globalIndex) % trendStatuses.length  {
    id: "prod-011",
    slug: "cordless-electric-cleaning-spin-scrubber",
    title: "Cordless Electric Power Spin Scrubber with Extension Handle",
    tagline: "Cleans bathroom tiles, tubs, grout, and sinks without bending or manual elbow grease.",
    description: "The viral cleaning gadget taking over social media. High-torque 360-degree rotating brush heads effortlessly eliminate stubborn calcium, soap scum, and grime. Extends up to 43 inches to save your back and knees.",
    category: "home-kitchen",
    categoryName: "Home & Kitchen Innovations",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80"
    ],
    sourcing: {
      lowestPrice: 12.80,
      currency: "$",
      supplierName: "AliExpress Cleaning Warehouse",
      supplierUrl: "https://www.aliexpress.com/wholesale?SearchText=electric%20spin%20scrubber%20cordless%20power%20brush%20bathroom",
      moq: "1 unit",
      shippingTimeEst: "8-12 business days",
      secondarySuppliers: [
        {
          name: "CJ Dropshipping Direct",
          price: 13.40,
          currency: "$",
          url: "https://cjdropshipping.com/search/electric%20spin%20scrubber.html",
          moq: "1 unit",
          shippingEst: "8-14 days"
        },
        {
          name: "Temu Sourcing Hub",
          price: 13.70,
          currency: "$",
          url: "https://www.temu.com/search_result.html?search_key=cordless%20power%20spin%20scrubber",
          moq: "1 unit",
          shippingEst: "7-12 days"
        }
      ]
    },
    market: {
      retailPrice: 49.99,
      currency: "$",
      potentialProfit: 37.19,
      profitMarginPercent: 74.4,
      competitorStoreName: "Amazon / TikTok Shop",
      competitorStoreUrl: "https://www.amazon.com/s?k=electric%20spin%20scrubber%20cordless%20power%20brush%20bathroom",
      recommendedAdSpend: 7.00,
      estimatedNetProfit: 30.19
    },
    analytics: {
      trendScore: 9.7,
      trendStatus: "🔥 Viral Now",
      monthlySalesVolumeEst: "48,000+ units",
      competitionLevel: "Medium",
      tiktokViews: "112.4M views",
      socialBuzz: "Very High"
    },
    businessGuide: {
      whyItSells: [
        "Deeply satisfying cleaning transformation clips perform insanely well on TikTok and Facebook.",
        "Solves real physical pain: no more crawling on hands and knees scrubbing bathroom grout.",
        "High perceived retail value: easily commands $50+ while sourced for under $13."
],
      targetAudience: [
        "Homeowners and apartment renters",
        "Seniors and people with lower back or knee issues",
        "CleanTok and organization enthusiasts"
],
      adHooks: [
        "I literally haven't scrubbed my bathroom by hand in 6 months.",
        "If you hate cleaning your shower, this $50 tool is a lifesaver.",
        "POV: You clean your entire bathtub in under 2 minutes without bending over."
],
      recommendedNiches: [
        "Home Cleaning",
        "Mobility Aids",
        "Gadgets"
]
    },
    specs: {
      "Battery": "2500mAh Lithium Ion (90 mins continuous use)",
      "Speed Modes": "Dual Speed (300 RPM & 400 RPM)",
      "Brush Attachments": "4 interchangeable heads (Flat, Corner, Dome, Sponge)",
      "Extension Length": "Adjustable from 25 inches to 43 inches",
      "Waterproof": "IPX7 waterproof rating"
},
    rating: 4.8,
    reviewsCount: 6240,
    addedAt: "2026-09-19T16:58:46.580Z",
    updatedAt: "2026-09-19T16:58:46.580Z"
  },
  {
    id: "prod-012",
    slug: "smart-posture-corrector-with-vibration-sensor",
    title: "Intelligent Upper Back Posture Corrector with Vibration Reminder",
    tagline: "Gently vibrates whenever you slouch more than 25 degrees to build muscle memory.",
    description: "Break bad slouching habits naturally without uncomfortable rigid braces. Features an angle-sensing sensor that buzzes gently when your back bends forward, training your spine and shoulders into upright alignment.",
    category: "beauty-health",
    categoryName: "Health, Beauty & Wellness",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
    ],
    sourcing: {
      lowestPrice: 3.40,
      currency: "$",
      supplierName: "AliExpress Wellness Direct",
      supplierUrl: "https://www.aliexpress.com/wholesale?SearchText=smart%20posture%20corrector%20sensor%20vibration%20reminder",
      moq: "1 unit",
      shippingTimeEst: "7-11 business days",
      secondarySuppliers: [
        {
          name: "CJ Dropshipping Direct",
          price: 4.00,
          currency: "$",
          url: "https://cjdropshipping.com/search/smart%20posture%20corrector.html",
          moq: "1 unit",
          shippingEst: "8-14 days"
        },
        {
          name: "Temu Sourcing Hub",
          price: 4.30,
          currency: "$",
          url: "https://www.temu.com/search_result.html?search_key=vibration%20posture%20corrector",
          moq: "1 unit",
          shippingEst: "7-12 days"
        }
      ]
    },
    market: {
      retailPrice: 22.99,
      currency: "$",
      potentialProfit: 19.59,
      profitMarginPercent: 85.2,
      competitorStoreName: "Amazon / TikTok Shop",
      competitorStoreUrl: "https://www.amazon.com/s?k=smart%20posture%20corrector%20sensor%20vibration%20reminder",
      recommendedAdSpend: 7.00,
      estimatedNetProfit: 12.59
    },
    analytics: {
      trendScore: 9.3,
      trendStatus: "⭐ High Margin",
      monthlySalesVolumeEst: "26,500+ units",
      competitionLevel: "Low",
      tiktokViews: "28.6M views",
      socialBuzz: "Very High"
    },
    businessGuide: {
      whyItSells: [
        "Almost everyone who works at a laptop or looks at their phone has tech-neck slouching.",
        "Vibration sensor is an interactive novelty that stands out over boring elastic posture straps.",
        "Sub-$4 sourcing cost gives sellers an unbeatable 85%+ profit margin buffer."
],
      targetAudience: [
        "Remote office workers and gamers",
        "Students with heavy backpacks",
        "Fitness enthusiasts looking for spinal alignment"
],
      adHooks: [
        "Stop slouching! This tiny gadget buzzes whenever your posture slips.",
        "How I fixed my rounded shoulders in 14 days without going to a chiropractor.",
        "The $20 gadget that every person working from home needs right now."
],
      recommendedNiches: [
        "Posture & Ergonomics",
        "Work From Home",
        "Fitness"
]
    },
    specs: {
      "Sensor Angle": "Triggered when posture bends > 25 degrees",
      "Battery": "500mAh USB Rechargeable (15 days battery life)",
      "Display": "LCD screen tracks daily slouch counts",
      "Straps": "Adjustable high-elastic nylon harness",
      "Weight": "Ultra-light 85g"
},
    rating: 4.7,
    reviewsCount: 3410,
    addedAt: "2026-09-19T16:58:46.580Z",
    updatedAt: "2026-09-19T16:58:46.580Z"
  },
];

        const product: ProductItem = {
          id: idStr,
          slug: slug,
          title: title,
          tagline: `${arch.tagline} ${modifier.feature}`,
          description: `${title} is a premier viral problem-solver in the ${arch.categoryName} category. ${arch.tagline} ${modifier.feature} Sourced directly from verified tier-1 factory manufacturers, this product guarantees exceptional build quality, massive margin potential for sellers, and unbeatable factory pricing for smart shoppers.`,
          category: arch.category as ProductCategory,
          categoryName: arch.categoryName,
          images: [img1, img2],
          sourcing: {
            lowestPrice: lowPrice,
            currency: "$",
            supplierName: "AliExpress Verified Direct Manufacturer",
            supplierUrl: `https://www.aliexpress.com/w/wholesale-${encodeURIComponent(cleanSearchQuery).replace(/%20/g, '-')}.html`,
            moq: "1 unit (Dropship Ready)",
            shippingTimeEst: "7-12 business days",
            secondarySuppliers: []
          },
          market: {
            retailPrice: retailPrice,
            currency: "$",
            potentialProfit: potentialProfit,
            profitMarginPercent: marginPercent,
            competitorStoreName: "Amazon Retail / TikTok Shop",
            competitorStoreUrl: `https://www.amazon.com/s?k=${encodeURIComponent(cleanSearchQuery)}`,
            recommendedAdSpend: Number((lowPrice * 0.75).toFixed(2)),
            estimatedNetProfit: Number((potentialProfit - (lowPrice * 0.75)).toFixed(2))
          },
          analytics: {
            trendScore: Number((9.1 + (v % 9) * 0.1).toFixed(1)),
            trendStatus: trendStatus,
            monthlySalesVolumeEst: `${(12000 + ((v * 850) % 45000)).toLocaleString()}+ units`,
            competitionLevel: v % 3 === 0 ? "Low" : v % 3 === 1 ? "Medium" : "High",
            tiktokViews: `${views} views`,
            socialBuzz: v % 2 === 0 ? "Very High" : "High"
          },
          businessGuide: {
            whyItSells: [
              "High viral video conversion potential across TikTok, Reels, and YouTube Shorts.",
              "Directly solves an everyday problem without expensive alternatives.",
              `High perceived retail value commanding a ${marginPercent}% gross profit margin.`
            ],
            targetAudience: [
              "Online impulse shoppers, gift buyers, and life-hack enthusiasts",
              "Social media users looking for smart convenience solutions",
              "Homeowners and professionals valuing reliable everyday tools"
            ],
            adHooks: [
              `"Stop doing this the hard way... this tiny gadget changed everything!"`,
              `"I found the #1 viral product everyone on TikTok is talking about."`,
              `"POV: You finally found the tool that solves this in 10 seconds."`
            ],
            recommendedNiches: [arch.categoryName, "Problem Solvers", "Viral Products"]
          },
          specs: Object.assign({}, arch.specs, {
            "Warranty": "1-Year Manufacturer Direct Warranty",
            "Certification": "CE, RoHS, FCC Standard Compliant",
            "Origin": "Factory Direct Quality Inspected"
          }) as unknown as Record<string, string>,
          rating: rating,
          reviewsCount: reviewsCount,
          isFeatured: false,
          isDailyPick: false,
          addedAt: "2026-09-19T00:00:00.000Z",
          updatedAt: "2026-09-19T00:00:00.000Z"
        };

        allProducts.push(product);
        slugs.add(slug);
        PRODUCT_RAW_MAP.set(slug, product);
        PRODUCT_ARCH_MAP.set(slug, {
          arch,
          modifier,
          lowPrice,
          retailPrice,
          potentialProfit,
          marginPercent
        });

        globalIndex++;
      }
    });
  }

  return allProducts;
}

export const INITIAL_PRODUCTS: ProductItem[] = generateAllProducts();

export const TICKER_PRODUCTS: ProductItem[] = INITIAL_PRODUCTS.slice(0, 8);

export function getProductBySlug(slug: string): ProductItem | undefined {
  const base = PRODUCT_RAW_MAP.get(slug);
  if (!base) return undefined;

  const meta = PRODUCT_ARCH_MAP.get(slug);
  if (!meta) return base;

  const { arch, modifier, lowPrice, retailPrice, potentialProfit, marginPercent } = meta;
  const cleanSearchQuery = arch.cleanSearch;
  const featureText = modifier?.feature ? ` ${modifier.feature}` : "";

  return {
    ...base,
    description: `${base.title} is a premier viral problem-solver in the ${arch.categoryName} category. ${arch.tagline}${featureText} Sourced directly from verified tier-1 factory manufacturers, this product guarantees exceptional build quality, massive margin potential for sellers, and unbeatable factory pricing for smart shoppers.`,
    specs: Object.assign({}, arch.specs, {
      "Warranty": "1-Year Manufacturer Direct Warranty",
      "Certification": "CE, RoHS, FCC Standard Compliant",
      "Origin": "Factory Direct Quality Inspected"
    }) as unknown as Record<string, string>,
    sourcing: {
      ...base.sourcing,
      secondarySuppliers: [
        {
          name: "CJ Dropshipping Global",
          price: Number((lowPrice * 1.08).toFixed(2)),
          currency: "$",
          url: `https://cjdropshipping.com/search/${encodeURIComponent(cleanSearchQuery)}.html`,
          moq: "1 unit",
          shippingEst: "8-14 days"
        },
        {
          name: "Temu Direct Factory",
          price: Number((lowPrice * 1.12).toFixed(2)),
          currency: "$",
          url: `https://www.temu.com/search_result.html?search_key=${encodeURIComponent(cleanSearchQuery)}`,
          moq: "1 unit",
          shippingEst: "6-11 days"
        }
      ]
    },
    market: {
      ...base.market,
      competitorStoreName: "Amazon Retail / TikTok Shop",
      competitorStoreUrl: `https://www.amazon.com/s?k=${encodeURIComponent(cleanSearchQuery)}`,
      recommendedAdSpend: Number((lowPrice * 0.75).toFixed(2)),
      estimatedNetProfit: Number((potentialProfit - (lowPrice * 0.75)).toFixed(2))
    },
    businessGuide: {
      whyItSells: [
        "High viral video conversion potential across TikTok, Reels, and YouTube Shorts.",
        "Directly solves an everyday problem without expensive alternatives.",
        `High perceived retail value commanding a ${marginPercent}% gross profit margin.`
      ],
      targetAudience: [
        "Online impulse shoppers, gift buyers, and life-hack enthusiasts",
        "Social media users looking for smart convenience solutions",
        "Homeowners and professionals valuing reliable everyday tools"
      ],
      adHooks: [
        `"Stop doing this the hard way... this tiny gadget changed everything!"`,
        `"I found the #1 viral product everyone on TikTok is talking about."`,
        `"POV: You finally found the tool that solves this in 10 seconds."`
      ],
      recommendedNiches: [arch.categoryName, "Problem Solvers", "Viral Products"]
    }
  };
}
