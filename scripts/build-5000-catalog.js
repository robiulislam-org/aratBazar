const fs = require("fs");
const path = require("path");

const productsDataPath = path.join(__dirname, "../src/data/productsData.ts");
const content = fs.readFileSync(productsDataPath, "utf8");

// Extract ARCHETYPES
const archStart = content.indexOf("export const ARCHETYPES = [");
const archEnd = content.indexOf("export const VARIANT_MODIFIERS =");
if (archStart === -1 || archEnd === -1) {
  console.error("Could not find ARCHETYPES boundaries!");
  process.exit(1);
}
const archetypes = eval("(" + content.slice(archStart + "export const ARCHETYPES = ".length, archEnd).trim().replace(/;$/, "") + ")");

// Extract VARIANT_MODIFIERS
const modStart = content.indexOf("export const VARIANT_MODIFIERS = [");
const modEnd = content.indexOf("const PRODUCT_RAW_MAP");
if (modStart === -1 || modEnd === -1) {
  console.error("Could not find VARIANT_MODIFIERS boundaries!");
  process.exit(1);
}
const modifiers = eval("(" + content.slice(modStart + "export const VARIANT_MODIFIERS = ".length, modEnd).trim().replace(/;$/, "") + ")");

console.log(`Extracted ${archetypes.length} archetypes and ${modifiers.length} modifiers.`);

const CATEGORIES_DATA = [
  {
    slug: "tech-gadgets",
    name: "Tech & Smart Gadgets",
    iconName: "Cpu",
    description: "Trending electronics, viral smart devices & portable tech accessories with massive global appeal.",
    productCount: 625
  },
  {
    slug: "home-kitchen",
    name: "Home & Kitchen Innovations",
    iconName: "Home",
    description: "Problem-solving kitchen tools, automated cleaning devices & modern home aesthetics.",
    productCount: 625
  },
  {
    slug: "beauty-health",
    name: "Health, Beauty & Wellness",
    iconName: "Sparkles",
    description: "Personal care, posture correctors, therapeutic massagers & skincare devices.",
    productCount: 625
  },
  {
    slug: "car-outdoor",
    name: "Car & Outdoor Gear",
    iconName: "Car",
    description: "Automotive detailing, portable power tools, solar gadgets & outdoor survival items.",
    productCount: 625
  },
  {
    slug: "tools-utility",
    name: "Everyday Problem Solvers",
    iconName: "Wrench",
    description: "Handy multi-tools, laser measuring equipment & instant household fixers.",
    productCount: 625
  },
  {
    slug: "fitness-lifestyle",
    name: "Fitness & Active Lifestyle",
    iconName: "Activity",
    description: "Home workout gear, smart recovery tools & portable athletic accessories.",
    productCount: 625
  },
  {
    slug: "smart-home",
    name: "Smart Home & Ambient Lighting",
    iconName: "Zap",
    description: "Aesthetic LED lighting, levitating decor, automated sensors & smart home life-hacks.",
    productCount: 625
  },
  {
    slug: "kids-novelty",
    name: "Viral Novelties & Unique Gifts",
    iconName: "Gift",
    description: "Unusual sensory toys, magnetic desk gadgets, kinetic art & unforgettable conversation-starter gifts.",
    productCount: 625
  }
];

const CATEGORY_TAGS = {
  "tech-gadgets": "technology,gadget",
  "home-kitchen": "kitchen,appliance",
  "beauty-health": "skincare,wellness",
  "car-outdoor": "automotive,camping",
  "tools-utility": "tools,hardware",
  "fitness-lifestyle": "fitness,workout",
  "smart-home": "smarthome,lighting",
  "kids-novelty": "toys,novelty"
};

// Generate the TypeScript code
const newContent = `import type { ProductItem, CategoryMeta, ProductCategory } from "@/types/product";

export const CATEGORIES: CategoryMeta[] = ${JSON.stringify(CATEGORIES_DATA, null, 2)};

export const ARCHETYPES = ${JSON.stringify(archetypes, null, 2)};

export const VARIANT_MODIFIERS = ${JSON.stringify(modifiers, null, 2)};

const CATEGORY_TAGS: Record<string, string> = ${JSON.stringify(CATEGORY_TAGS, null, 2)};

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
    const idStr = \`prod-\${idNum}\`;
    const title = arch.nameTemplate;
    const slug = \`prod-\${idNum}-\${arch.key.replace(/_/g, '-')}\`;

    const [minLow, maxLow] = arch.lowRange;
    const [minRetail, maxRetail] = arch.retailRange;
    const lowPrice = Number(((minLow + maxLow) / 2).toFixed(2));
    const retailPrice = Number(((minRetail + maxRetail) / 2).toFixed(2));
    const potentialProfit = Number((retailPrice - lowPrice).toFixed(2));
    const marginPercent = Math.round(((retailPrice - lowPrice) / retailPrice) * 100);

    const cleanSearchQuery = arch.cleanSearch;
    const categoryTag = CATEGORY_TAGS[arch.category] || "gadget";
    const img1 = arch.images[0];
    const img2 = \`https://loremflickr.com/800/800/\${categoryTag}?lock=\${globalIndex + 10000}\`;

    const views = \`\${arch.viewsBase.toFixed(1)}M\`;
    const rating = Number((4.7 + ((globalIndex * 3) % 3) * 0.1).toFixed(1));
    const reviewsCount = 1200 + ((globalIndex * 379) % 7800);

    const trendStatuses = ["🔥 Viral Now", "🚀 Exploding Demand", "⭐ High Margin", "📦 Evergreen Seller"] as const;
    const trendStatus = trendStatuses[globalIndex % trendStatuses.length];

    const product: ProductItem = {
      id: idStr,
      slug: slug,
      title: title,
      tagline: arch.tagline,
      description: \`\${title} is a premier viral problem-solver in the \${arch.categoryName} category.\`,
      category: arch.category as ProductCategory,
      categoryName: arch.categoryName,
      images: [img1, img2],
      sourcing: {
        lowestPrice: lowPrice,
        currency: "$",
        supplierName: "AliExpress Verified Direct Manufacturer",
        supplierUrl: \`https://www.aliexpress.com/w/wholesale-\${encodeURIComponent(cleanSearchQuery).replace(/%20/g, '-')}.html\`,
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
        competitorStoreUrl: \`https://www.amazon.com/s?k=\${encodeURIComponent(cleanSearchQuery)}\`,
        recommendedAdSpend: Number((lowPrice * 0.75).toFixed(2)),
        estimatedNetProfit: Number((potentialProfit - (lowPrice * 0.75)).toFixed(2))
      },
      analytics: {
        trendScore: Number((9.2 + (globalIndex % 8) * 0.1).toFixed(1)),
        trendStatus: trendStatus,
        monthlySalesVolumeEst: \`\${(15000 + ((globalIndex * 850) % 35000)).toLocaleString()}+ units\`,
        competitionLevel: globalIndex % 3 === 0 ? "Low" : globalIndex % 3 === 1 ? "Medium" : "High",
        tiktokViews: \`\${views} views\`,
        socialBuzz: globalIndex % 2 === 0 ? "Very High" : "High"
      },
      businessGuide: {
        whyItSells: [
          "High viral video conversion potential across TikTok, Reels, and YouTube Shorts.",
          "Directly solves an everyday problem without expensive alternatives.",
          \`High perceived retail value commanding a \${marginPercent}% gross profit margin.\`
        ],
        targetAudience: [
          "Online impulse shoppers, gift buyers, and life-hack enthusiasts",
          "Social media users looking for smart convenience solutions"
        ],
        adHooks: [
          \`"Stop doing this the hard way... this tiny gadget changed everything!"\`,
          \`"I found the #1 viral product everyone on TikTok is talking about."\`
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
        const idStr = \`prod-\${idNum}\`;

        const cleanPrefix = modifier.prefix.toLowerCase().replace(/[^a-z0-9]/g, '');
        const slug = \`prod-\${idNum}-\${arch.key.replace(/_/g, '-')}-\${cleanPrefix}-\${v}\`;
        const title = \`\${modifier.prefix} \${arch.nameTemplate} (\${modifier.suffix})\`;

        const priceFactor = v / variantsCount;
        const lowPrice = Number((minLow + (maxLow - minLow) * (0.25 + 0.75 * priceFactor)).toFixed(2));
        const retailPrice = Number((minRetail + (maxRetail - minRetail) * (0.25 + 0.75 * priceFactor)).toFixed(2));
        const potentialProfit = Number((retailPrice - lowPrice).toFixed(2));
        const marginPercent = Math.round(((retailPrice - lowPrice) / retailPrice) * 100);

        const cleanSearchQuery = arch.cleanSearch;
        // Guaranteed UNIQUE primary and secondary image with unique lock ID
        const img1 = \`https://loremflickr.com/800/800/\${categoryTag}?lock=\${globalIndex}\`;
        const img2 = \`https://loremflickr.com/800/800/\${categoryTag}?lock=\${globalIndex + 10000}\`;

        const views = \`\${(arch.viewsBase * (0.7 + 0.6 * ((v * 7) % 10) / 10)).toFixed(1)}M\`;
        const rating = Number((4.6 + (((v * 3) % 4) * 0.1)).toFixed(1));
        const reviewsCount = 500 + ((v * 370 + globalIndex * 13) % 9500);

        const trendStatuses = ["🔥 Viral Now", "🚀 Exploding Demand", "⭐ High Margin", "📦 Evergreen Seller"] as const;
        const trendStatus = trendStatuses[(v + globalIndex) % trendStatuses.length];

        const product: ProductItem = {
          id: idStr,
          slug: slug,
          title: title,
          tagline: \`\${arch.tagline} \${modifier.feature}\`,
          description: \`\${title} is a premier viral problem-solver in the \${arch.categoryName} category. \${arch.tagline} \${modifier.feature} Sourced directly from verified tier-1 factory manufacturers, this product guarantees exceptional build quality, massive margin potential for sellers, and unbeatable factory pricing for smart shoppers.\`,
          category: arch.category as ProductCategory,
          categoryName: arch.categoryName,
          images: [img1, img2],
          sourcing: {
            lowestPrice: lowPrice,
            currency: "$",
            supplierName: "AliExpress Verified Direct Manufacturer",
            supplierUrl: \`https://www.aliexpress.com/w/wholesale-\${encodeURIComponent(cleanSearchQuery).replace(/%20/g, '-')}.html\`,
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
            competitorStoreUrl: \`https://www.amazon.com/s?k=\${encodeURIComponent(cleanSearchQuery)}\`,
            recommendedAdSpend: Number((lowPrice * 0.75).toFixed(2)),
            estimatedNetProfit: Number((potentialProfit - (lowPrice * 0.75)).toFixed(2))
          },
          analytics: {
            trendScore: Number((9.1 + (v % 9) * 0.1).toFixed(1)),
            trendStatus: trendStatus,
            monthlySalesVolumeEst: \`\${(12000 + ((v * 850) % 45000)).toLocaleString()}+ units\`,
            competitionLevel: v % 3 === 0 ? "Low" : v % 3 === 1 ? "Medium" : "High",
            tiktokViews: \`\${views} views\`,
            socialBuzz: v % 2 === 0 ? "Very High" : "High"
          },
          businessGuide: {
            whyItSells: [
              "High viral video conversion potential across TikTok, Reels, and YouTube Shorts.",
              "Directly solves an everyday problem without expensive alternatives.",
              \`High perceived retail value commanding a \${marginPercent}% gross profit margin.\`
            ],
            targetAudience: [
              "Online impulse shoppers, gift buyers, and life-hack enthusiasts",
              "Social media users looking for smart convenience solutions",
              "Homeowners and professionals valuing reliable everyday tools"
            ],
            adHooks: [
              \`"Stop doing this the hard way... this tiny gadget changed everything!"\`,
              \`"I found the #1 viral product everyone on TikTok is talking about."\`,
              \`"POV: You finally found the tool that solves this in 10 seconds."\`
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
  const featureText = modifier?.feature ? \` \${modifier.feature}\` : "";

  return {
    ...base,
    description: \`\${base.title} is a premier viral problem-solver in the \${arch.categoryName} category. \${arch.tagline}\${featureText} Sourced directly from verified tier-1 factory manufacturers, this product guarantees exceptional build quality, massive margin potential for sellers, and unbeatable factory pricing for smart shoppers.\`,
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
          url: \`https://cjdropshipping.com/search/\${encodeURIComponent(cleanSearchQuery)}.html\`,
          moq: "1 unit",
          shippingEst: "8-14 days"
        },
        {
          name: "Temu Direct Factory",
          price: Number((lowPrice * 1.12).toFixed(2)),
          currency: "$",
          url: \`https://www.temu.com/search_result.html?search_key=\${encodeURIComponent(cleanSearchQuery)}\`,
          moq: "1 unit",
          shippingEst: "6-11 days"
        }
      ]
    },
    market: {
      ...base.market,
      competitorStoreName: "Amazon Retail / TikTok Shop",
      competitorStoreUrl: \`https://www.amazon.com/s?k=\${encodeURIComponent(cleanSearchQuery)}\`,
      recommendedAdSpend: Number((lowPrice * 0.75).toFixed(2)),
      estimatedNetProfit: Number((potentialProfit - (lowPrice * 0.75)).toFixed(2))
    },
    businessGuide: {
      whyItSells: [
        "High viral video conversion potential across TikTok, Reels, and YouTube Shorts.",
        "Directly solves an everyday problem without expensive alternatives.",
        \`High perceived retail value commanding a \${marginPercent}% gross profit margin.\`
      ],
      targetAudience: [
        "Online impulse shoppers, gift buyers, and life-hack enthusiasts",
        "Social media users looking for smart convenience solutions",
        "Homeowners and professionals valuing reliable everyday tools"
      ],
      adHooks: [
        \`"Stop doing this the hard way... this tiny gadget changed everything!"\`,
        \`"I found the #1 viral product everyone on TikTok is talking about."\`,
        \`"POV: You finally found the tool that solves this in 10 seconds."\`
      ],
      recommendedNiches: [arch.categoryName, "Problem Solvers", "Viral Products"]
    }
  };
}
`;

fs.writeFileSync(productsDataPath, newContent, "utf8");
console.log("Successfully updated " + productsDataPath);
