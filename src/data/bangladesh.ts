// Bangladesh All Divisions & Districts - Organic Products Data

export interface WholesaleMarket {
  name: string;
  location: string;
  schedule: string;
  contact?: string;
}

export interface SpecialProduct {
  name: string;
  nameBn: string;
  season: string;
  priceRange: string;
  unit: string;
  wholesalePrice: string;
  description: string;
  bestQuality: string;
}

export interface District {
  slug: string;
  name: string;
  nameBn: string;
  division: string;
  divisionSlug: string;
  description: string;
  specialProducts: SpecialProduct[];
  wholesaleMarkets: WholesaleMarket[];
  famousFor: string[];
  tags: string[];
}

export interface Division {
  slug: string;
  name: string;
  nameBn: string;
  description: string;
  districts: string[]; // district slugs
  famousProducts: string[];
  image: string;
  color: string;
}

export const divisions: Division[] = [
  {
    slug: "dhaka",
    name: "Dhaka Division",
    nameBn: "ঢাকা বিভাগ",
    description: "বাংলাদেশের রাজধানী বিভাগ। ঢাকা বিভাগে টাঙ্গাইলের তাঁত শাড়ি, মানিকগঞ্জের সরিষা তেল, নরসিংদীর কলা ও সবজি বিখ্যাত।",
    districts: ["dhaka", "gazipur", "narayanganj", "narsingdi", "manikganj", "munshiganj", "rajbari", "faridpur", "madaripur", "shariatpur", "gopalganj", "tangail", "kishoreganj"],
    famousProducts: ["তাঁত শাড়ি", "সরিষা তেল", "কলা", "মিষ্টি", "পাট"],
    image: "/images/divisions/dhaka.jpg",
    color: "bg-red-50 border-red-200",
  },
  {
    slug: "chittagong",
    name: "Chattogram Division",
    nameBn: "চট্টগ্রাম বিভাগ",
    description: "সমুদ্র বন্দরের শহর। চট্টগ্রামের শুঁটকি মাছ, পার্বত্য চট্টগ্রামের ফল ও মধু, কক্সবাজারের সামুদ্রিক পণ্য বিখ্যাত।",
    districts: ["chittagong", "coxs-bazar", "rangamati", "khagrachhari", "bandarban", "feni", "comilla", "chandpur", "brahmanbaria", "lakshmipur", "noakhali"],
    famousProducts: ["শুঁটকি মাছ", "পাহাড়ি মধু", "নারিকেল", "আনারস", "কলা"],
    image: "/images/divisions/chittagong.jpg",
    color: "bg-blue-50 border-blue-200",
  },
  {
    slug: "rajshahi",
    name: "Rajshahi Division",
    nameBn: "রাজশাহী বিভাগ",
    description: "আমের রাজধানী। রাজশাহীর রেশম, চাঁপাইনবাবগঞ্জের আম, বগুড়ার দই এবং নাটোরের কাঁচাগোল্লা বিশ্বখ্যাত।",
    districts: ["rajshahi", "chapainawabganj", "naogaon", "natore", "bogura", "sirajganj", "pabna", "joypurhat"],
    famousProducts: ["আম", "রেশম", "দই", "কাঁচাগোল্লা", "খেজুর গুড়"],
    image: "/images/divisions/rajshahi.jpg",
    color: "bg-orange-50 border-orange-200",
  },
  {
    slug: "khulna",
    name: "Khulna Division",
    nameBn: "খুলনা বিভাগ",
    description: "সুন্দরবনের দেশ। খুলনার চিংড়ি, যশোরের গুড়, কুষ্টিয়ার লালন সংগীত ও তিলের খাজা, সাতক্ষীরার মিষ্টি বিখ্যাত।",
    districts: ["khulna", "bagerhat", "satkhira", "jessore", "narail", "magura", "jhenaidah", "kushtia", "chuadanga", "meherpur"],
    famousProducts: ["বাগদা চিংড়ি", "সুন্দরবনের মধু", "পাটালি গুড়", "তিলের খাজা", "খেজুর গুড়"],
    image: "/images/divisions/khulna.jpg",
    color: "bg-green-50 border-green-200",
  },
  {
    slug: "sylhet",
    name: "Sylhet Division",
    nameBn: "সিলেট বিভাগ",
    description: "চায়ের দেশ। সিলেটের চা, আনারস, কমলালেবু, শুকনা মাছ এবং লেবু বাংলাদেশ জুড়ে পরিচিত।",
    districts: ["sylhet", "moulvibazar", "habiganj", "sunamganj"],
    famousProducts: ["চা", "আনারস", "কমলালেবু", "লেবু", "বাঁশের তৈজসপত্র"],
    image: "/images/divisions/sylhet.jpg",
    color: "bg-emerald-50 border-emerald-200",
  },
  {
    slug: "barisal",
    name: "Barishal Division",
    nameBn: "বরিশাল বিভাগ",
    description: "নদীমাতৃক দক্ষিণাঞ্চল। বরিশালের পেয়ারা, ভোলার নারিকেল, পিরোজপুরের মাছ ও ধান বিখ্যাত।",
    districts: ["barisal", "bhola", "patuakhali", "pirojpur", "barguna", "jhalokati"],
    famousProducts: ["পেয়ারা", "নারিকেল", "ইলিশ মাছ", "সুপারি", "ধান"],
    image: "/images/divisions/barisal.jpg",
    color: "bg-teal-50 border-teal-200",
  },
  {
    slug: "rangpur",
    name: "Rangpur Division",
    nameBn: "রংপুর বিভাগ",
    description: "উত্তরের প্রান্ত। দিনাজপুরের লিচু ও চাল, রংপুরের হাড়িভাঙ্গা আম, গাইবান্ধার মিষ্টি আলু এবং নীলফামারীর ভুট্টা বিখ্যাত।",
    districts: ["rangpur", "dinajpur", "gaibandha", "nilphamari", "kurigram", "lalmonirhat", "thakurgaon", "panchagarh"],
    famousProducts: ["লিচু", "হাড়িভাঙ্গা আম", "চাল", "ভুট্টা", "মিষ্টি আলু"],
    image: "/images/divisions/rangpur.jpg",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    slug: "mymensingh",
    name: "Mymensingh Division",
    nameBn: "ময়মনসিংহ বিভাগ",
    description: "কৃষিপ্রধান উত্তর-মধ্যাঞ্চল। ময়মনসিংহের মুক্তাগাছার মণ্ডা, নেত্রকোনার বিজয়পুরের সাদা মাটি ও মধুপুরের আনারস বিখ্যাত।",
    districts: ["mymensingh", "netrokona", "jamalpur", "sherpur"],
    famousProducts: ["মণ্ডা মিষ্টি", "আনারস", "কলা", "সাদা মাটি", "ধান"],
    image: "/images/divisions/mymensingh.jpg",
    color: "bg-purple-50 border-purple-200",
  },
];

export const districts: District[] = [
  // ===== DHAKA DIVISION =====
  {
    slug: "dhaka",
    name: "Dhaka",
    nameBn: "ঢাকা",
    division: "Dhaka Division",
    divisionSlug: "dhaka",
    description: "রাজধানী ঢাকা বাংলাদেশের বৃহত্তম শহর ও বাণিজ্যিক কেন্দ্র। ঢাকার মিষ্টি, বিরিয়ানি এবং পুরান ঢাকার ঐতিহ্যবাহী খাবার বিখ্যাত।",
    specialProducts: [
      {
        name: "Bakarkhani",
        nameBn: "বাকরখানি",
        season: "সারা বছর",
        priceRange: "৫–১৫ টাকা/পিস",
        unit: "পিস",
        wholesalePrice: "৩–৮ টাকা/পিস (পাইকারি ১০০+)",
        description: "পুরান ঢাকার ঐতিহ্যবাহী রুটি যা ময়দা, ঘি ও চিনি দিয়ে তৈরি। মুঘল আমল থেকে চলে আসছে।",
        bestQuality: "পুরান ঢাকার চকবাজার এলাকা",
      },
      {
        name: "Biryani Rice",
        nameBn: "বিরিয়ানি চাল",
        season: "সারা বছর",
        priceRange: "১২০–২০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৯০–১৫০ টাকা/কেজি (বস্তায়)",
        description: "বিশেষ সুগন্ধি বাসমতি ও কাটারিভোগ চাল যা বিরিয়ানির জন্য ব্যবহৃত হয়।",
        bestQuality: "বাদামতলী আড়ত, মৌলভীবাজার পাইকারি বাজার",
      },
    ],
    wholesaleMarkets: [
      { name: "কারওয়ান বাজার কাঁচাবাজার", location: "কারওয়ান বাজার, তেজগাঁও, ঢাকা", schedule: "প্রতিদিন ভোর ৪টা–দুপুর ১২টা", contact: "স্থানীয় ব্যবসায়ী সমিতি" },
      { name: "বাদামতলী বাজার (পাইকারি চাল-ডাল)", location: "বাদামতলী, পুরান ঢাকা", schedule: "শনি–বৃহস্পতিবার, সকাল ৬টা–বিকাল ৪টা" },
      { name: "শ্যামবাজার ফলের পাইকারি বাজার", location: "শ্যামবাজার, পুরান ঢাকা", schedule: "প্রতিদিন, রাত ১২টা–সকাল ৮টা" },
      { name: "মৌলভীবাজার মশলার আড়ত", location: "মৌলভীবাজার, পুরান ঢাকা", schedule: "প্রতিদিন সকাল ৮টা–রাত ৮টা" },
    ],
    famousFor: ["বাকরখানি", "হাজির বিরিয়ানি", "জিলাপি", "ঐতিহ্যবাহী খাবার"],
    tags: ["ঢাকা", "পুরান ঢাকা", "বাকরখানি", "বিরিয়ানি", "মিষ্টি"],
  },
  {
    slug: "tangail",
    name: "Tangail",
    nameBn: "টাঙ্গাইল",
    division: "Dhaka Division",
    divisionSlug: "dhaka",
    description: "টাঙ্গাইল তাঁত শিল্পের জন্য বিশ্বখ্যাত। এখানকার চমচম মিষ্টি ও তাঁত শাড়ি বাংলাদেশের গর্ব।",
    specialProducts: [
      {
        name: "Tant Saree",
        nameBn: "তাঁত শাড়ি",
        season: "সারা বছর",
        priceRange: "৫০০–৫০,০০০ টাকা",
        unit: "পিস",
        wholesalePrice: "৩৫০–৩৫,০০০ টাকা (পাইকারি, ডজনে)",
        description: "হাতে বোনা সুতার শাড়ি, বিভিন্ন ডিজাইন ও রঙের। জামদানি মিশ্রিত ও সাদা সুতি দুই ধরনেরই পাওয়া যায়।",
        bestQuality: "দেলদুয়ার উপজেলার তাঁতি পল্লী, পাথরাইল গ্রাম",
      },
      {
        name: "Chamcham Sweet",
        nameBn: "চমচম মিষ্টি",
        season: "সারা বছর",
        priceRange: "৩০০–৫০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "২৫০–৪০০ টাকা/কেজি",
        description: "ছানার তৈরি বিশেষ মিষ্টি যা টাঙ্গাইলের পোড়াবাড়ি এলাকায় তৈরি হয়। লাল রঙের নরম মিষ্টি।",
        bestQuality: "পোড়াবাড়ি, টাঙ্গাইল সদর",
      },
    ],
    wholesaleMarkets: [
      { name: "টাঙ্গাইল বড় বাজার (তাঁত শাড়ি)", location: "টাঙ্গাইল সদর", schedule: "প্রতিদিন সকাল ৮টা–সন্ধ্যা ৭টা" },
      { name: "দেলদুয়ার তাঁতি হাট", location: "দেলদুয়ার উপজেলা", schedule: "শনি ও মঙ্গলবার" },
      { name: "নাগরপুর কাপড়ের হাট", location: "নাগরপুর উপজেলা", schedule: "বুধ ও শুক্রবার" },
    ],
    famousFor: ["তাঁত শাড়ি", "চমচম মিষ্টি", "বাঁশের কারুশিল্প"],
    tags: ["টাঙ্গাইল", "তাঁত", "শাড়ি", "চমচম", "কুটির শিল্প"],
  },
  {
    slug: "narsingdi",
    name: "Narsingdi",
    nameBn: "নরসিংদী",
    division: "Dhaka Division",
    divisionSlug: "dhaka",
    description: "নরসিংদী সবজি ও কলা চাষের জন্য বিখ্যাত। এখানকার সবজির পাইকারি বাজার ঢাকাসহ সারা দেশে সরবরাহ করে।",
    specialProducts: [
      {
        name: "Banana",
        nameBn: "কলা",
        season: "সারা বছর",
        priceRange: "৩০–৮০ টাকা/ডজন",
        unit: "ডজন",
        wholesalePrice: "২০–৫০ টাকা/ডজন (বড় কেনায়)",
        description: "বিভিন্ন জাতের কলা যেমন সাগরকলা, কাঁচকলা, চিনিচাম্পা। নরসিংদীর কলা মিষ্টি ও সুগন্ধি।",
        bestQuality: "মনোহরদী, রায়পুরা উপজেলা",
      },
      {
        name: "Vegetables",
        nameBn: "মিশ্র সবজি",
        season: "সারা বছর (শীতে বেশি)",
        priceRange: "২০–১০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১০–৬০ টাকা/কেজি",
        description: "টমেটো, বেগুন, ঢেঁড়স, শিম, ফুলকপি সহ সারা বছর বিভিন্ন সবজি পাওয়া যায়।",
        bestQuality: "মাধবদী বাজার এলাকা",
      },
    ],
    wholesaleMarkets: [
      { name: "মাধবদী পাইকারি বাজার", location: "মাধবদী, নরসিংদী", schedule: "প্রতিদিন ভোর ৫টা–সকাল ১০টা" },
      { name: "নরসিংদী কলার আড়ত", location: "নরসিংদী সদর", schedule: "প্রতিদিন ভোর ৪টা–সকাল ৯টা" },
    ],
    famousFor: ["কলা", "সবজি", "তাঁত কাপড়"],
    tags: ["নরসিংদী", "কলা", "সবজি", "কৃষি"],
  },
  {
    slug: "faridpur",
    name: "Faridpur",
    nameBn: "ফরিদপুর",
    division: "Dhaka Division",
    divisionSlug: "dhaka",
    description: "ফরিদপুর খেজুর গুড় ও পাট উৎপাদনে বিখ্যাত। পদ্মার ইলিশও এই অঞ্চলে পাওয়া যায়।",
    specialProducts: [
      {
        name: "Date Palm Molasses",
        nameBn: "খেজুর গুড়",
        season: "শীত (নভেম্বর–ফেব্রুয়ারি)",
        priceRange: "২০০–৩৫০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১৫০–২৫০ টাকা/কেজি",
        description: "শীতকালে খেজুর গাছের রস থেকে তৈরি খাঁটি গুড়। পাটালি ও নরম দুই ধরনের পাওয়া যায়।",
        bestQuality: "ভাঙ্গা, সদরপুর উপজেলা",
      },
      {
        name: "Hilsa Fish",
        nameBn: "ইলিশ মাছ",
        season: "বর্ষা (জুলাই–অক্টোবর)",
        priceRange: "৮০০–২৫০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৬০০–২০০০ টাকা/কেজি",
        description: "পদ্মা নদীর ইলিশ স্বাদে ও চর্বিতে অতুলনীয়। বর্ষায় এই মাছ সবচেয়ে বেশি পাওয়া যায়।",
        bestQuality: "ফরিদপুর মৎস্য আড়ত, পদ্মা ঘাট",
      },
    ],
    wholesaleMarkets: [
      { name: "ফরিদপুর মৎস্য আড়ত", location: "ফরিদপুর সদর, পদ্মা ঘাটের কাছে", schedule: "প্রতিদিন ভোর ৪টা–সকাল ১০টা" },
      { name: "ভাঙ্গা গুড়ের হাট", location: "ভাঙ্গা উপজেলা", schedule: "শনি ও মঙ্গলবার, শীতকালীন" },
    ],
    famousFor: ["খেজুর গুড়", "ইলিশ মাছ", "পাট"],
    tags: ["ফরিদপুর", "গুড়", "ইলিশ", "পাট", "পদ্মা"],
  },
  {
    slug: "munshiganj",
    name: "Munshiganj",
    nameBn: "মুন্সীগঞ্জ",
    division: "Dhaka Division",
    divisionSlug: "dhaka",
    description: "মুন্সীগঞ্জ আলু ও মিষ্টি আলু উৎপাদনে বাংলাদেশে শীর্ষে। পদ্মার ইলিশও এখানে পাওয়া যায়।",
    specialProducts: [
      {
        name: "Potato",
        nameBn: "আলু",
        season: "শীত (নভেম্বর–মার্চ)",
        priceRange: "২০–৫০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১০–৩০ টাকা/কেজি (বস্তায়)",
        description: "বাংলাদেশের সবচেয়ে বেশি আলু উৎপাদনকারী জেলা। বিভিন্ন জাতের আলু পাওয়া যায়।",
        bestQuality: "সিরাজদিখান, শ্রীনগর উপজেলা",
      },
    ],
    wholesaleMarkets: [
      { name: "মুন্সীগঞ্জ আলুর পাইকারি বাজার", location: "মুন্সীগঞ্জ সদর", schedule: "প্রতিদিন ভোর ৫টা–সকাল ১১টা" },
    ],
    famousFor: ["আলু", "মিষ্টি আলু", "ইলিশ"],
    tags: ["মুন্সীগঞ্জ", "আলু", "সবজি", "কৃষি"],
  },
  {
    slug: "gopalganj",
    name: "Gopalganj",
    nameBn: "গোপালগঞ্জ",
    division: "Dhaka Division",
    divisionSlug: "dhaka",
    description: "গোপালগঞ্জ মাছ, পান ও নারিকেলের জন্য পরিচিত। বিলাঞ্চলের তাজা মিঠা পানির মাছ এখানে প্রচুর পাওয়া যায়।",
    specialProducts: [
      {
        name: "Freshwater Fish",
        nameBn: "মিঠা পানির মাছ",
        season: "সারা বছর",
        priceRange: "১৫০–৫০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১০০–৩৫০ টাকা/কেজি",
        description: "রুই, কাতলা, মৃগেল, কই সহ বিভিন্ন দেশি মাছ। বিল-হাওরের তাজা মাছ।",
        bestQuality: "কোটালীপাড়া, মকসুদপুর উপজেলার বিল এলাকা",
      },
      {
        name: "Betel Leaf",
        nameBn: "পান",
        season: "সারা বছর",
        priceRange: "৫০–২০০ টাকা/বড়ি",
        unit: "বড়ি",
        wholesalePrice: "৩০–১৫০ টাকা/বড়ি",
        description: "গোপালগঞ্জের পান সুগন্ধি ও মিষ্টি স্বাদের জন্য বিখ্যাত।",
        bestQuality: "মকসুদপুর উপজেলা",
      },
    ],
    wholesaleMarkets: [
      { name: "গোপালগঞ্জ মৎস্য আড়ত", location: "গোপালগঞ্জ সদর", schedule: "প্রতিদিন ভোর ৪টা–সকাল ১০টা" },
    ],
    famousFor: ["মিঠা পানির মাছ", "পান", "নারিকেল"],
    tags: ["গোপালগঞ্জ", "মাছ", "পান", "বিল"],
  },
  // ===== CHATTOGRAM DIVISION =====
  {
    slug: "chittagong",
    name: "Chattogram",
    nameBn: "চট্টগ্রাম",
    division: "Chattogram Division",
    divisionSlug: "chittagong",
    description: "বন্দরনগরী চট্টগ্রামে শুঁটকি মাছের বিশাল আড়ত রয়েছে। সমুদ্রের তাজা মাছ এবং শুঁটকি সারাদেশে সরবরাহ হয়।",
    specialProducts: [
      {
        name: "Shutki Fish",
        nameBn: "শুঁটকি মাছ",
        season: "শীত-গ্রীষ্ম (অক্টোবর–মার্চ)",
        priceRange: "৩০০–২০০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "২৫০–১৫০০ টাকা/কেজি (পাইকারি)",
        description: "সমুদ্রের মাছ রোদে শুকিয়ে তৈরি শুঁটকি। লইট্যা, ছুরি, রুপচাঁদা সহ বিভিন্ন মাছের শুঁটকি পাওয়া যায়।",
        bestQuality: "চট্টগ্রামের আসকার দীঘি শুঁটকি আড়ত",
      },
      {
        name: "Marine Fish",
        nameBn: "সামুদ্রিক মাছ",
        season: "সারা বছর (মে–জুলাই বন্ধ থাকে)",
        priceRange: "২০০–১৫০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১৫০–১২০০ টাকা/কেজি",
        description: "রুপচাঁদা, ভেটকি, বোয়াল, কোরাল সহ বিভিন্ন সামুদ্রিক মাছ।",
        bestQuality: "ফিশারি ঘাট, চট্টগ্রাম",
      },
    ],
    wholesaleMarkets: [
      { name: "আসকার দীঘি শুঁটকি বাজার", location: "আসকার দীঘি, চট্টগ্রাম", schedule: "প্রতিদিন সকাল ৮টা–বিকাল ৬টা" },
      { name: "ফিশারি ঘাট", location: "পতেঙ্গা, চট্টগ্রাম", schedule: "প্রতিদিন ভোর ৪টা–সকাল ১০টা" },
      { name: "রিয়াজউদ্দিন বাজার", location: "চট্টগ্রাম সিটি", schedule: "প্রতিদিন সকাল ৬টা–রাত ৯টা" },
    ],
    famousFor: ["শুঁটকি মাছ", "সামুদ্রিক মাছ", "মেজবান মাংস"],
    tags: ["চট্টগ্রাম", "শুঁটকি", "সামুদ্রিক মাছ", "বন্দর"],
  },
  {
    slug: "coxs-bazar",
    name: "Cox's Bazar",
    nameBn: "কক্সবাজার",
    division: "Chattogram Division",
    divisionSlug: "chittagong",
    description: "বিশ্বের দীর্ঘতম সমুদ্র সৈকতের জেলা কক্সবাজার। এখানকার শুঁটকি, চিংড়ি ও লবণ বিখ্যাত।",
    specialProducts: [
      {
        name: "Shrimp",
        nameBn: "চিংড়ি",
        season: "সারা বছর",
        priceRange: "৩০০–১২০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "২৫০–১০০০ টাকা/কেজি",
        description: "সামুদ্রিক চিংড়ি — হরিণা, কুঁচো চিংড়ি সহ বিভিন্ন প্রজাতি। রফতানিযোগ্য মানের চিংড়ি এখানে পাওয়া যায়।",
        bestQuality: "নাজিরারটেক ফিশারিজ, টেকনাফ",
      },
      {
        name: "Sea Salt",
        nameBn: "সামুদ্রিক লবণ",
        season: "শুষ্ক মৌসুম (নভেম্বর–মে)",
        priceRange: "৮–১৫ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৫–১০ টাকা/কেজি (বস্তায়)",
        description: "সমুদ্রের পানি থেকে তৈরি প্রাকৃতিক লবণ। আয়োডিনযুক্ত ও আয়োডিনমুক্ত দুই ধরনেরই পাওয়া যায়।",
        bestQuality: "মহেশখালী, কুতুবদিয়া দ্বীপ",
      },
    ],
    wholesaleMarkets: [
      { name: "কক্সবাজার মৎস্য আড়ত", location: "কক্সবাজার সদর, বেনারজী পাড়া", schedule: "প্রতিদিন ভোর ৪টা–সকাল ১০টা" },
      { name: "মহেশখালী লবণ বাজার", location: "মহেশখালী দ্বীপ", schedule: "শুষ্ক মৌসুমে, সকাল ৮টা–বিকাল ৪টা" },
    ],
    famousFor: ["শুঁটকি", "সামুদ্রিক চিংড়ি", "সামুদ্রিক লবণ"],
    tags: ["কক্সবাজার", "সমুদ্র", "চিংড়ি", "শুঁটকি", "লবণ"],
  },
  {
    slug: "comilla",
    name: "Comilla",
    nameBn: "কুমিল্লা",
    division: "Chattogram Division",
    divisionSlug: "chittagong",
    description: "কুমিল্লার রসমালাই বাংলাদেশের সবচেয়ে বিখ্যাত মিষ্টি। এখানকার খদ্দর কাপড় ও মাটির তৈজসপত্রও বিখ্যাত।",
    specialProducts: [
      {
        name: "Roshmalai",
        nameBn: "রসমালাই",
        season: "সারা বছর",
        priceRange: "৪০০–৮০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৩৫০–৭০০ টাকা/কেজি",
        description: "কুমিল্লার রসমালাই ছানা ও ক্ষীর দিয়ে তৈরি। নরম, রসালো ও মিষ্টি স্বাদের।",
        bestQuality: "মতিন সুইটস, কুমিল্লা শহর",
      },
      {
        name: "Khaddar Cloth",
        nameBn: "খদ্দর কাপড়",
        season: "সারা বছর",
        priceRange: "৩০০–১৫০০ টাকা/গজ",
        unit: "গজ",
        wholesalePrice: "২৫০–১২০০ টাকা/গজ",
        description: "হাতে কাটা সুতার তৈরি খদ্দর কাপড়। পাঞ্জাবি, শার্ট ও ফতুয়ার জন্য ব্যবহৃত।",
        bestQuality: "কুমিল্লা শহরের খদ্দর মার্কেট",
      },
    ],
    wholesaleMarkets: [
      { name: "কুমিল্লা কান্দিরপাড় বাজার", location: "কান্দিরপাড়, কুমিল্লা সিটি", schedule: "প্রতিদিন সকাল ৮টা–রাত ৯টা" },
      { name: "চৌদ্দগ্রাম পাইকারি বাজার", location: "চৌদ্দগ্রাম উপজেলা", schedule: "রোব ও বুধবার" },
    ],
    famousFor: ["রসমালাই", "খদ্দর কাপড়", "মাটির তৈজস"],
    tags: ["কুমিল্লা", "রসমালাই", "মিষ্টি", "খদ্দর"],
  },
  {
    slug: "rangamati",
    name: "Rangamati",
    nameBn: "রাঙামাটি",
    division: "Chattogram Division",
    divisionSlug: "chittagong",
    description: "পার্বত্য জেলা রাঙামাটি কাপ্তাই লেক ও আদিবাসী হস্তশিল্পের জন্য বিখ্যাত। পাহাড়ি ফল ও মধু এখানকার বিশেষত্ব।",
    specialProducts: [
      {
        name: "Hill Honey",
        nameBn: "পাহাড়ি মধু",
        season: "বসন্ত (মার্চ–মে)",
        priceRange: "৮০০–২০০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৬০০–১৫০০ টাকা/কেজি",
        description: "পাহাড়ের বিভিন্ন ফুল থেকে সংগ্রহ করা খাঁটি মধু। রঙ গাঢ় সোনালি, ঘন ও সুগন্ধি।",
        bestQuality: "কাপ্তাই, বাঘাইছড়ি এলাকা",
      },
      {
        name: "Ethnic Handicrafts",
        nameBn: "আদিবাসী হস্তশিল্প",
        season: "সারা বছর",
        priceRange: "১০০–৫০০০ টাকা",
        unit: "পিস",
        wholesalePrice: "৮০–৪০০০ টাকা",
        description: "চাকমা, মারমা, ত্রিপুরা সহ বিভিন্ন আদিবাসীদের হাতে বোনা কাপড়, ব্যাগ, গহনা।",
        bestQuality: "রাঙামাটি শহরের আদিবাসী মার্কেট",
      },
    ],
    wholesaleMarkets: [
      { name: "রাঙামাটি আদিবাসী হস্তশিল্প মার্কেট", location: "রাঙামাটি সদর", schedule: "প্রতিদিন সকাল ৯টা–বিকাল ৫টা" },
    ],
    famousFor: ["পাহাড়ি মধু", "আদিবাসী কাপড়", "কাপ্তাই মাছ"],
    tags: ["রাঙামাটি", "পাহাড়", "মধু", "আদিবাসী", "হস্তশিল্প"],
  },
  // ===== RAJSHAHI DIVISION =====
  {
    slug: "rajshahi",
    name: "Rajshahi",
    nameBn: "রাজশাহী",
    division: "Rajshahi Division",
    divisionSlug: "rajshahi",
    description: "রেশম ও খেজুর গুড়ের শহর রাজশাহী। বরেন্দ্র অঞ্চলের এই শহর থেকে রেশম কাপড় ও মিষ্টি পণ্য সারা দেশে যায়।",
    specialProducts: [
      {
        name: "Silk Fabric",
        nameBn: "রেশম কাপড়",
        season: "সারা বছর",
        priceRange: "৫০০–১০,০০০ টাকা/গজ",
        unit: "গজ",
        wholesalePrice: "৪০০–৮,০০০ টাকা/গজ",
        description: "রাজশাহীর রেশম কাপড় বিশ্বমানের। সিল্ক শাড়ি, পাঞ্জাবি ও ওড়না তৈরিতে ব্যবহৃত হয়।",
        bestQuality: "রাজশাহী শিল্প নগরী, শিরোইল এলাকা",
      },
      {
        name: "Date Palm Molasses",
        nameBn: "খেজুর গুড়",
        season: "শীত (নভেম্বর–ফেব্রুয়ারি)",
        priceRange: "১৫০–৩০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১০০–২৩০ টাকা/কেজি",
        description: "রাজশাহীর খাঁটি খেজুর গুড় শীতকালের সেরা পণ্য। পুঠিয়া ও বাঘা উপজেলায় প্রচুর তৈরি হয়।",
        bestQuality: "পুঠিয়া উপজেলা হাট",
      },
    ],
    wholesaleMarkets: [
      { name: "রাজশাহী নিউ মার্কেট সিল্ক কর্নার", location: "রাজশাহী সিটি", schedule: "প্রতিদিন সকাল ৯টা–রাত ৮টা" },
      { name: "পুঠিয়া হাট (গুড়)", location: "পুঠিয়া উপজেলা", schedule: "প্রতি শুক্রবার" },
      { name: "রাজশাহী পাইকারি বাজার", location: "সাহেববাজার, রাজশাহী", schedule: "প্রতিদিন" },
    ],
    famousFor: ["রেশম কাপড়", "খেজুর গুড়", "আম"],
    tags: ["রাজশাহী", "রেশম", "সিল্ক", "গুড়", "আম"],
  },
  {
    slug: "chapainawabganj",
    name: "Chapainawabganj",
    nameBn: "চাঁপাইনবাবগঞ্জ",
    division: "Rajshahi Division",
    divisionSlug: "rajshahi",
    description: "আমের রাজধানী। চাঁপাইনবাবগঞ্জের ফজলি আম, গোপালভোগ ও হিমসাগর বিশ্বের সেরা আমের তালিকায় আছে।",
    specialProducts: [
      {
        name: "Fazli Mango",
        nameBn: "ফজলি আম",
        season: "গ্রীষ্ম (জুলাই–আগস্ট)",
        priceRange: "৮০–১৫০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৫০–১০০ টাকা/কেজি",
        description: "বিশাল আকারের মিষ্টি আম। একটি আম ১ কেজির বেশি হতে পারে।",
        bestQuality: "শিবগঞ্জ, কানসাট এলাকা",
      },
      {
        name: "Himsagar Mango",
        nameBn: "হিমসাগর আম",
        season: "গ্রীষ্ম (জুন)",
        priceRange: "১০০–২০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৭০–১৫০ টাকা/কেজি",
        description: "অত্যন্ত মিষ্টি ও সুগন্ধি আম। কম আঁশ, প্রচুর রস।",
        bestQuality: "শিবগঞ্জ উপজেলা",
      },
      {
        name: "Khirsapat Mango",
        nameBn: "ক্ষীরশাপাতি/গোপালভোগ আম",
        season: "গ্রীষ্ম (মে–জুন)",
        priceRange: "১২০–২৫০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৮০–১৮০ টাকা/কেজি",
        description: "ছোট আকারের অত্যন্ত মিষ্টি আম। এটি মৌসুমের প্রথম দিকে পাকে।",
        bestQuality: "ভোলাহাট, গোমস্তাপুর উপজেলা",
      },
    ],
    wholesaleMarkets: [
      { name: "কানসাট আম বাজার", location: "কানসাট, শিবগঞ্জ উপজেলা", schedule: "প্রতিদিন ভোর ৫টা–সকাল ১০টা (মে–আগস্ট)", contact: "চাঁপাইনবাবগঞ্জ আম ব্যবসায়ী সমিতি" },
      { name: "চাঁপাইনবাবগঞ্জ সদর বাজার", location: "চাঁপাইনবাবগঞ্জ শহর", schedule: "প্রতিদিন" },
    ],
    famousFor: ["ফজলি আম", "হিমসাগর আম", "গোপালভোগ আম", "আম থেকে তৈরি পণ্য"],
    tags: ["চাঁপাইনবাবগঞ্জ", "আম", "ফজলি", "হিমসাগর", "আমের রাজধানী"],
  },
  {
    slug: "bogura",
    name: "Bogura",
    nameBn: "বগুড়া",
    division: "Rajshahi Division",
    divisionSlug: "rajshahi",
    description: "বগুড়ার দই বাংলাদেশের সবচেয়ে বিখ্যাত দুগ্ধজাত পণ্য। মহাস্থানগড়ের ঐতিহাসিক শহর বগুড়া কৃষি পণ্যেও সমৃদ্ধ।",
    specialProducts: [
      {
        name: "Bogura Doi (Yogurt)",
        nameBn: "বগুড়ার দই",
        season: "সারা বছর",
        priceRange: "৮০–৩৫০ টাকা (প্যাকেজভেদে)",
        unit: "প্যাকেট",
        wholesalePrice: "৬০–২৮০ টাকা (ডজনে অর্ডারে)",
        description: "মাটির পাত্রে তৈরি ঐতিহ্যবাহী টক দই। শত বছরের ঐতিহ্য। গাভীর খাঁটি দুধ থেকে তৈরি।",
        bestQuality: "আকবর আলী সুইটস, বগুড়া সদর",
      },
      {
        name: "Vegetables",
        nameBn: "সবজি",
        season: "সারা বছর",
        priceRange: "১৫–৮০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৮–৫০ টাকা/কেজি",
        description: "বগুড়া সবজি উৎপাদনে বাংলাদেশে শীর্ষ জেলাগুলোর একটি। আলু, বেগুন, মূলা, বাঁধাকপি পাওয়া যায়।",
        bestQuality: "শিবগঞ্জ (বগুড়া), মহাস্থান এলাকা",
      },
    ],
    wholesaleMarkets: [
      { name: "বগুড়া সাতমাথা বাজার", location: "সাতমাথা, বগুড়া সিটি", schedule: "প্রতিদিন সকাল ৭টা–রাত ৮টা" },
      { name: "শেরপুর পাইকারি বাজার", location: "শেরপুর উপজেলা, বগুড়া", schedule: "রোব ও বুধবার" },
      { name: "মহাস্থান সবজি বাজার", location: "শিবগঞ্জ উপজেলা, বগুড়া", schedule: "সোম ও বৃহস্পতিবার" },
    ],
    famousFor: ["বগুড়ার দই", "কাঁচাগোল্লা", "সবজি"],
    tags: ["বগুড়া", "দই", "মিষ্টি", "সবজি", "মহাস্থানগড়"],
  },
  {
    slug: "naogaon",
    name: "Naogaon",
    nameBn: "নওগাঁ",
    division: "Rajshahi Division",
    divisionSlug: "rajshahi",
    description: "নওগাঁ ধান ও চাল উৎপাদনে বাংলাদেশে অন্যতম সেরা। কাটারিভোগ চাল এখানকার বিশেষ পণ্য।",
    specialProducts: [
      {
        name: "Katarikhog Rice",
        nameBn: "কাটারিভোগ চাল",
        season: "শীত (ডিসেম্বর–মার্চ)",
        priceRange: "৮০–১৫০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৬০–১১০ টাকা/কেজি",
        description: "সুগন্ধি চালের একটি বিশেষ জাত। ভাত রান্নায় অসাধারণ সুগন্ধ ছড়ায়।",
        bestQuality: "নওগাঁ সদর, ধামইরহাট এলাকা",
      },
      {
        name: "Mango",
        nameBn: "আম",
        season: "গ্রীষ্ম (মে–আগস্ট)",
        priceRange: "৬০–১৫০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৪০–১০০ টাকা/কেজি",
        description: "নওগাঁতেও প্রচুর আম হয়। আম্রপালি, নাগ ফজলি ও বারি আম বিখ্যাত।",
        bestQuality: "পোরশা, সাপাহার উপজেলা",
      },
    ],
    wholesaleMarkets: [
      { name: "নওগাঁ পাইকারি চাল বাজার", location: "নওগাঁ সদর বাজার", schedule: "প্রতিদিন সকাল ৭টা–বিকাল ৫টা" },
      { name: "সাপাহার আম বাজার", location: "সাপাহার উপজেলা", schedule: "মে–আগস্ট, প্রতিদিন সকাল" },
    ],
    famousFor: ["কাটারিভোগ চাল", "আম", "ধান"],
    tags: ["নওগাঁ", "চাল", "আম", "ধান", "কৃষি"],
  },
  // ===== KHULNA DIVISION =====
  {
    slug: "khulna",
    name: "Khulna",
    nameBn: "খুলনা",
    division: "Khulna Division",
    divisionSlug: "khulna",
    description: "সুন্দরবনের দোরগোড়ায় খুলনা। বাগদা চিংড়ি, গলদা চিংড়ি ও মধু এখানকার প্রধান পণ্য।",
    specialProducts: [
      {
        name: "Black Tiger Shrimp",
        nameBn: "বাগদা চিংড়ি",
        season: "সারা বছর (অক্টোবর–মার্চ সেরা)",
        priceRange: "৬০০–১৫০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৫০০–১২০০ টাকা/কেজি",
        description: "সুন্দরবনের লবণাক্ত পানিতে চাষ হওয়া বিশ্বমানের বাগদা চিংড়ি।",
        bestQuality: "রূপসা, তেরখাদা, ডুমুরিয়া এলাকার ঘের",
      },
      {
        name: "Sundarbans Honey",
        nameBn: "সুন্দরবনের মধু",
        season: "বসন্ত (মার্চ–এপ্রিল)",
        priceRange: "৮০০–২০০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৬০০–১৫০০ টাকা/কেজি",
        description: "বিশ্বের সবচেয়ে বিশুদ্ধ মধুর একটি। সুন্দরবনের গাছগাছালি থেকে মৌয়ালরা সংগ্রহ করেন।",
        bestQuality: "মৌয়াল সমবায়, শ্যামনগর, মোড়েলগঞ্জ",
      },
    ],
    wholesaleMarkets: [
      { name: "রূপসা চিংড়ি আড়ত", location: "রূপসা ঘাট, খুলনা", schedule: "প্রতিদিন ভোর ৫টা–সকাল ৯টা" },
      { name: "খুলনা বড় বাজার মৎস্য বিভাগ", location: "বড় বাজার, খুলনা সিটি", schedule: "প্রতিদিন সকাল ৬টা–দুপুর ১২টা" },
      { name: "সোনাডাঙ্গা পাইকারি বাজার", location: "সোনাডাঙ্গা, খুলনা", schedule: "প্রতিদিন" },
    ],
    famousFor: ["বাগদা চিংড়ি", "সুন্দরবনের মধু", "গলদা চিংড়ি"],
    tags: ["খুলনা", "চিংড়ি", "মধু", "সুন্দরবন", "সামুদ্রিক"],
  },
  {
    slug: "jessore",
    name: "Jessore",
    nameBn: "যশোর",
    division: "Khulna Division",
    divisionSlug: "khulna",
    description: "যশোরের গুড় ও ফুলের চাষ বাংলাদেশে বিখ্যাত। গদখালী ফুলের বাজার এশিয়ার অন্যতম বড় ফুলের বাজার।",
    specialProducts: [
      {
        name: "Date Molasses (Patali)",
        nameBn: "পাটালি গুড়",
        season: "শীত (নভেম্বর–ফেব্রুয়ারি)",
        priceRange: "২৫০–৪৫০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "২০০–৩৫০ টাকা/কেজি",
        description: "শক্ত পাটালি গুড়। ভাঙলে ভেতরে সোনালি রঙ। মিষ্টির দোকানে ব্যাপক চাহিদা।",
        bestQuality: "কেশবপুর, মনিরামপুর উপজেলা",
      },
      {
        name: "Flowers",
        nameBn: "ফুল",
        season: "সারা বছর",
        priceRange: "৫–৫০ টাকা/পিস",
        unit: "পিস",
        wholesalePrice: "২–৩০ টাকা/পিস",
        description: "গোলাপ, গ্লাডিওলাস, রজনীগন্ধা, গাঁদা সহ শতাধিক প্রজাতির ফুল। ঢাকাসহ সারাদেশে সরবরাহ।",
        bestQuality: "গদখালী, ঝিকরগাছা উপজেলা",
      },
    ],
    wholesaleMarkets: [
      { name: "গদখালী ফুলের বাজার", location: "গদখালী, ঝিকরগাছা, যশোর", schedule: "প্রতিদিন ভোর ৫টা–সকাল ৯টা" },
      { name: "যশোর পুরান বাজার গুড়ের আড়ত", location: "যশোর সদর", schedule: "শীতকালে প্রতিদিন" },
      { name: "কেশবপুর হাট", location: "কেশবপুর উপজেলা", schedule: "শুক্রবার" },
    ],
    famousFor: ["পাটালি গুড়", "ফুল", "খেজুর রস"],
    tags: ["যশোর", "গুড়", "পাটালি", "ফুল", "গদখালী"],
  },
  {
    slug: "satkhira",
    name: "Satkhira",
    nameBn: "সাতক্ষীরা",
    division: "Khulna Division",
    divisionSlug: "khulna",
    description: "সাতক্ষীরার মিষ্টি বাংলাদেশে বিখ্যাত। সুন্দরবন সংলগ্ন এই জেলায় চিংড়ি ও মধু প্রচুর পাওয়া যায়।",
    specialProducts: [
      {
        name: "Satkhira Mishti",
        nameBn: "সাতক্ষীরার মিষ্টি",
        season: "সারা বছর",
        priceRange: "৩০০–৬০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "২৫০–৫০০ টাকা/কেজি",
        description: "ছানার তৈরি বিশেষ মিষ্টি। দানাদার মিষ্টি, সন্দেশ ও রসগোল্লা বিখ্যাত।",
        bestQuality: "সাতক্ষীরা সদর শহরের মিষ্টি দোকান",
      },
    ],
    wholesaleMarkets: [
      { name: "সাতক্ষীরা সদর বাজার", location: "সাতক্ষীরা শহর", schedule: "প্রতিদিন সকাল ৭টা–রাত ৮টা" },
      { name: "শ্যামনগর চিংড়ি আড়ত", location: "শ্যামনগর উপজেলা", schedule: "প্রতিদিন ভোর ৫টা–সকাল ৯টা" },
    ],
    famousFor: ["মিষ্টি", "চিংড়ি", "সুন্দরবনের মধু"],
    tags: ["সাতক্ষীরা", "মিষ্টি", "চিংড়ি", "মধু"],
  },
  {
    slug: "kushtia",
    name: "Kushtia",
    nameBn: "কুষ্টিয়া",
    division: "Khulna Division",
    divisionSlug: "khulna",
    description: "কুষ্টিয়া তিলের খাজা, সুগারকেন ও লালন সংগীতের জন্য বিখ্যাত। ইক্ষু চাষ ও চিনি শিল্পে গুরুত্বপূর্ণ।",
    specialProducts: [
      {
        name: "Tiler Khaja",
        nameBn: "তিলের খাজা",
        season: "সারা বছর",
        priceRange: "২০০–৪০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১৫০–৩২০ টাকা/কেজি",
        description: "তিল ও গুড় দিয়ে তৈরি কুচকুচে খাজা। কুষ্টিয়ার ঐতিহ্যবাহী মিষ্টি।",
        bestQuality: "কুষ্টিয়া শহরের পুরান বাজার",
      },
      {
        name: "Sugarcane",
        nameBn: "আখ",
        season: "শীত-বসন্ত (জানুয়ারি–মার্চ)",
        priceRange: "৩০–৬০ টাকা/পিস",
        unit: "পিস",
        wholesalePrice: "১৫–৪০ টাকা/পিস",
        description: "মিষ্টি আখ থেকে রস বের করে খাওয়া হয়। গুড় ও চিনি তৈরিতেও ব্যবহার হয়।",
        bestQuality: "দৌলতপুর, মিরপুর উপজেলা",
      },
    ],
    wholesaleMarkets: [
      { name: "কুষ্টিয়া পাইকারি বাজার", location: "কুষ্টিয়া শহর", schedule: "প্রতিদিন সকাল ৮টা–রাত ৮টা" },
    ],
    famousFor: ["তিলের খাজা", "আখ", "চিনি শিল্প"],
    tags: ["কুষ্টিয়া", "তিল", "খাজা", "আখ", "লালন"],
  },
  // ===== SYLHET DIVISION =====
  {
    slug: "sylhet",
    name: "Sylhet",
    nameBn: "সিলেট",
    division: "Sylhet Division",
    divisionSlug: "sylhet",
    description: "চায়ের দেশ সিলেট। আনারস, কমলালেবু ও চা সারা দেশে রপ্তানি হয়। হাওরের মাছও এখানে প্রচুর পাওয়া যায়।",
    specialProducts: [
      {
        name: "Tea",
        nameBn: "চা",
        season: "মার্চ–নভেম্বর",
        priceRange: "২০০–১৫০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১৫০–১২০০ টাকা/কেজি",
        description: "বিশ্বমানের চা পাতা। CTC, অর্থোডক্স ও গ্রিন টি সহ বিভিন্ন ধরনের চা পাওয়া যায়।",
        bestQuality: "শ্রীমঙ্গল, মৌলভীবাজার চা বাগান",
      },
      {
        name: "Lemon",
        nameBn: "লেবু",
        season: "সারা বছর",
        priceRange: "৪০–১২০ টাকা/হালি",
        unit: "হালি",
        wholesalePrice: "৩০–৮০ টাকা/হালি",
        description: "সিলেটের লেবু রসালো ও সুগন্ধি। বিভিন্ন জাতের লেবু পাওয়া যায়।",
        bestQuality: "জৈন্তাপুর, কানাইঘাট উপজেলা",
      },
    ],
    wholesaleMarkets: [
      { name: "সিলেট বন্দর বাজার", location: "বন্দর বাজার, সিলেট সিটি", schedule: "প্রতিদিন সকাল ৬টা–রাত ৯টা" },
      { name: "কদমতলী মৎস্য আড়ত", location: "কদমতলী, সিলেট", schedule: "প্রতিদিন ভোর ৪টা–সকাল ১০টা" },
    ],
    famousFor: ["চা", "লেবু", "হাওরের মাছ", "আনারস"],
    tags: ["সিলেট", "চা", "লেবু", "আনারস", "হাওর"],
  },
  {
    slug: "moulvibazar",
    name: "Moulvibazar",
    nameBn: "মৌলভীবাজার",
    division: "Sylhet Division",
    divisionSlug: "sylhet",
    description: "চায়ের রাজধানী শ্রীমঙ্গল এই জেলায়। পৃথিবীর বৃহত্তম চা বাগানের কিছু এখানে অবস্থিত।",
    specialProducts: [
      {
        name: "Premium Tea",
        nameBn: "প্রিমিয়াম চা",
        season: "মার্চ–নভেম্বর",
        priceRange: "৩০০–২০০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "২৫০–১৫০০ টাকা/কেজি",
        description: "শ্রীমঙ্গলের বিখ্যাত সাত রঙের চা ছাড়াও উচ্চমানের অর্থোডক্স চা পাওয়া যায়।",
        bestQuality: "শ্রীমঙ্গল চা নিলাম কেন্দ্র",
      },
      {
        name: "Pineapple",
        nameBn: "আনারস",
        season: "বর্ষা (জুন–সেপ্টেম্বর)",
        priceRange: "৩০–৮০ টাকা/পিস",
        unit: "পিস",
        wholesalePrice: "২০–৫০ টাকা/পিস",
        description: "মিষ্টি ও রসালো আনারস। পাহাড়ি মাটিতে চাষ হওয়া প্রাকৃতিক আনারস।",
        bestQuality: "শ্রীমঙ্গল, কমলগঞ্জ উপজেলা",
      },
    ],
    wholesaleMarkets: [
      { name: "শ্রীমঙ্গল চা নিলাম কেন্দ্র", location: "শ্রীমঙ্গল, মৌলভীবাজার", schedule: "সপ্তাহে ২ দিন নিলাম" },
      { name: "শ্রীমঙ্গল স্থানীয় বাজার", location: "শ্রীমঙ্গল সদর", schedule: "প্রতিদিন সকাল ৭টা–রাত ৭টা" },
    ],
    famousFor: ["চা", "আনারস", "রাবার", "চা বাগান পর্যটন"],
    tags: ["মৌলভীবাজার", "শ্রীমঙ্গল", "চা", "আনারস", "পাহাড়"],
  },
  // ===== BARISHAL DIVISION =====
  {
    slug: "barisal",
    name: "Barishal",
    nameBn: "বরিশাল",
    division: "Barishal Division",
    divisionSlug: "barisal",
    description: "নদীমাতৃক বরিশাল পেয়ারার জন্য বিখ্যাত। ইলিশ মাছও এখানে প্রচুর পাওয়া যায়।",
    specialProducts: [
      {
        name: "Guava",
        nameBn: "পেয়ারা",
        season: "গ্রীষ্ম-বর্ষা (জুলাই–অক্টোবর)",
        priceRange: "৩০–৮০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "২০–৫০ টাকা/কেজি",
        description: "বরিশালের পেয়ারা মিষ্টি ও রসালো। স্বরূপকাঠি ও ঝালকাঠি এলাকা পেয়ারার ভাসমান বাজারের জন্য বিখ্যাত।",
        bestQuality: "স্বরূপকাঠি, ঝালকাঠি এলাকা (ভাসমান পেয়ারা বাজার)",
      },
      {
        name: "Hilsa Fish",
        nameBn: "ইলিশ মাছ",
        season: "বর্ষা (জুলাই–অক্টোবর)",
        priceRange: "৮০০–৩০০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৬০০–২৫০০ টাকা/কেজি",
        description: "মেঘনা ও কীর্তনখোলা নদীর ইলিশ। পদ্মার মতোই সুস্বাদু।",
        bestQuality: "বরিশাল মৎস্য আড়ত, লঞ্চ ঘাটের কাছে",
      },
    ],
    wholesaleMarkets: [
      { name: "বরিশাল মৎস্য আড়ত", location: "বরিশাল সদর, লঞ্চঘাট এলাকা", schedule: "প্রতিদিন ভোর ৪টা–সকাল ১০টা" },
      { name: "স্বরূপকাঠি ভাসমান পেয়ারা বাজার", location: "স্বরূপকাঠি, পিরোজপুর", schedule: "মৌসুমে প্রতিদিন ভোর ৬টা–সকাল ১০টা" },
    ],
    famousFor: ["পেয়ারা", "ইলিশ মাছ", "সুপারি"],
    tags: ["বরিশাল", "পেয়ারা", "ইলিশ", "নদী", "মাছ"],
  },
  {
    slug: "bhola",
    name: "Bhola",
    nameBn: "ভোলা",
    division: "Barishal Division",
    divisionSlug: "barisal",
    description: "দ্বীপ জেলা ভোলায় নারিকেল ও মহিষের দুধ থেকে তৈরি পণ্য বিখ্যাত। মহিষের দুধের দই ও ঘি এখানে পাওয়া যায়।",
    specialProducts: [
      {
        name: "Coconut",
        nameBn: "নারিকেল",
        season: "সারা বছর",
        priceRange: "৩০–৮০ টাকা/পিস",
        unit: "পিস",
        wholesalePrice: "২৫–৬০ টাকা/পিস",
        description: "ভোলার নারিকেল মিষ্টি পানির জন্য বিখ্যাত। নারিকেল তেল ও নারিকেলের শাঁসও বিক্রি হয়।",
        bestQuality: "বোরহানউদ্দিন, লালমোহন উপজেলা",
      },
      {
        name: "Buffalo Milk Products",
        nameBn: "মহিষের দুধের পণ্য",
        season: "সারা বছর",
        priceRange: "৮০–৩০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৬০–২৫০ টাকা/কেজি",
        description: "মহিষের দুধের দই ও ঘি অনন্য স্বাদের। গাভীর দুধের চেয়ে বেশি চর্বিযুক্ত।",
        bestQuality: "ভোলা সদর, চরফ্যাশন এলাকা",
      },
    ],
    wholesaleMarkets: [
      { name: "ভোলা সদর বাজার", location: "ভোলা শহর", schedule: "প্রতিদিন সকাল ৭টা–রাত ৮টা" },
    ],
    famousFor: ["নারিকেল", "মহিষের দুধ", "ইলিশ মাছ"],
    tags: ["ভোলা", "নারিকেল", "মহিষ", "দ্বীপ"],
  },
  // ===== RANGPUR DIVISION =====
  {
    slug: "rangpur",
    name: "Rangpur",
    nameBn: "রংপুর",
    division: "Rangpur Division",
    divisionSlug: "rangpur",
    description: "হাড়িভাঙ্গা আমের জেলা রংপুর। এছাড়া কাঁচামরিচ, তামাক ও ভুট্টা উৎপাদনেও বিখ্যাত।",
    specialProducts: [
      {
        name: "Haribhanga Mango",
        nameBn: "হাড়িভাঙ্গা আম",
        season: "গ্রীষ্ম (জুলাই–আগস্ট)",
        priceRange: "৮০–১৮০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৬০–১৩০ টাকা/কেজি",
        description: "রংপুরের বিশেষ আম জাত। অত্যন্ত মিষ্টি, কম আঁশ, বেশি রস।",
        bestQuality: "মিঠাপুকুর উপজেলা (হাড়িভাঙ্গা গ্রাম)",
      },
      {
        name: "Tobacco",
        nameBn: "তামাক",
        season: "শীত-বসন্ত",
        priceRange: "১৫০–৩০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১০০–২৫০ টাকা/কেজি",
        description: "রংপুরের তামাক শিল্পে গুরুত্বপূর্ণ ভূমিকা রাখে।",
        bestQuality: "রংপুর সদর, পীরগঞ্জ এলাকা",
      },
    ],
    wholesaleMarkets: [
      { name: "রংপুর শাপলা চত্বর বাজার", location: "রংপুর সিটি সেন্টার", schedule: "প্রতিদিন সকাল ৭টা–রাত ৮টা" },
      { name: "মিঠাপুকুর আম বাজার", location: "মিঠাপুকুর উপজেলা", schedule: "মে–আগস্ট, প্রতিদিন সকাল" },
    ],
    famousFor: ["হাড়িভাঙ্গা আম", "তামাক", "কাঁচামরিচ"],
    tags: ["রংপুর", "হাড়িভাঙ্গা", "আম", "তামাক"],
  },
  {
    slug: "dinajpur",
    name: "Dinajpur",
    nameBn: "দিনাজপুর",
    division: "Rangpur Division",
    divisionSlug: "rangpur",
    description: "লিচু ও বিশেষ সুগন্ধি চালের জেলা দিনাজপুর। কালিজিরা ও কাটারিভোগ চাল এখানে প্রচুর উৎপাদিত হয়।",
    specialProducts: [
      {
        name: "Lychee",
        nameBn: "লিচু",
        season: "গ্রীষ্ম (মে–জুন)",
        priceRange: "১৫০–৩৫০ টাকা/১০০ পিস",
        unit: "১০০ পিস",
        wholesalePrice: "৮০–২৫০ টাকা/১০০ পিস",
        description: "বোম্বাই, বেদানা ও চায়না-৩ জাতের মিষ্টি লিচু। মৌসুম মাত্র ৩–৪ সপ্তাহ।",
        bestQuality: "দিনাজপুর সদর, বিরামপুর উপজেলা",
      },
      {
        name: "Kalizira Rice",
        nameBn: "কালিজিরা চাল",
        season: "শীত (ডিসেম্বর–মার্চ)",
        priceRange: "১৫০–২৫০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১২০–২০০ টাকা/কেজি",
        description: "বিশেষ সুগন্ধি চাল। ভাত রান্নায় মিষ্টি সুবাস ছড়ায়।",
        bestQuality: "দিনাজপুর সদর, ঘোড়াঘাট উপজেলা",
      },
    ],
    wholesaleMarkets: [
      { name: "দিনাজপুর সদর বাজার", location: "দিনাজপুর শহর", schedule: "প্রতিদিন সকাল ৭টা–রাত ৮টা" },
      { name: "হাজী দানেশ লিচু বাজার", location: "দিনাজপুর সদর", schedule: "মে–জুন, প্রতিদিন সকাল" },
      { name: "দিনাজপুর পাইকারি চালের বাজার", location: "দিনাজপুর শহর, পুরাতন বাজার", schedule: "প্রতিদিন" },
    ],
    famousFor: ["লিচু", "কালিজিরা চাল", "কাটারিভোগ চাল"],
    tags: ["দিনাজপুর", "লিচু", "চাল", "কালিজিরা"],
  },
  {
    slug: "gaibandha",
    name: "Gaibandha",
    nameBn: "গাইবান্ধা",
    division: "Rangpur Division",
    divisionSlug: "rangpur",
    description: "গাইবান্ধার মিষ্টি আলু ও ধান সারাদেশে বিখ্যাত। চর এলাকার উৎপাদিত পণ্য বিশেষভাবে পরিচিত।",
    specialProducts: [
      {
        name: "Sweet Potato",
        nameBn: "মিষ্টি আলু",
        season: "শীত (নভেম্বর–মার্চ)",
        priceRange: "২০–৫০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "১২–৩৫ টাকা/কেজি",
        description: "চরাঞ্চলের বালুমাটিতে উৎপাদিত মিষ্টি আলু। ভাপে খাওয়ার জন্য আদর্শ।",
        bestQuality: "ফুলছড়ি, সাঘাটা চর এলাকা",
      },
    ],
    wholesaleMarkets: [
      { name: "গাইবান্ধা সদর বাজার", location: "গাইবান্ধা শহর", schedule: "প্রতিদিন সকাল ৭টা–বিকাল ৬টা" },
    ],
    famousFor: ["মিষ্টি আলু", "ধান", "ভুট্টা"],
    tags: ["গাইবান্ধা", "মিষ্টি আলু", "চর", "কৃষি"],
  },
  // ===== MYMENSINGH DIVISION =====
  {
    slug: "mymensingh",
    name: "Mymensingh",
    nameBn: "ময়মনসিংহ",
    division: "Mymensingh Division",
    divisionSlug: "mymensingh",
    description: "মুক্তাগাছার মণ্ডা মিষ্টি বাংলাদেশের সবচেয়ে বিখ্যাত মিষ্টিগুলোর একটি। মধুপুরের আনারস ও কলাও বিখ্যাত।",
    specialProducts: [
      {
        name: "Muktagacha Monda",
        nameBn: "মুক্তাগাছার মণ্ডা",
        season: "সারা বছর",
        priceRange: "৩০–৮০ টাকা/পিস",
        unit: "পিস",
        wholesalePrice: "২৫–৬৫ টাকা/পিস",
        description: "ছানার তৈরি বিশেষ মিষ্টি। গোপাল পালের বংশধরেরা আজও এই মিষ্টি তৈরি করেন।",
        bestQuality: "মুক্তাগাছা উপজেলা সদর",
      },
      {
        name: "Pineapple (Madhupur)",
        nameBn: "মধুপুরের আনারস",
        season: "বর্ষা (জুন–সেপ্টেম্বর)",
        priceRange: "৩০–৭০ টাকা/পিস",
        unit: "পিস",
        wholesalePrice: "২০–৫০ টাকা/পিস",
        description: "মধুপুর গড়ের মাটিতে উৎপাদিত মিষ্টি আনারস।",
        bestQuality: "মধুপুর উপজেলা, ময়মনসিংহ",
      },
    ],
    wholesaleMarkets: [
      { name: "ময়মনসিংহ বড় বাজার", location: "ময়মনসিংহ শহর", schedule: "প্রতিদিন সকাল ৭টা–রাত ৮টা" },
      { name: "মধুপুর আনারস বাজার", location: "মধুপুর উপজেলা", schedule: "রোব ও বুধবার" },
      { name: "মুক্তাগাছা বাজার", location: "মুক্তাগাছা উপজেলা", schedule: "শনি ও মঙ্গলবার" },
    ],
    famousFor: ["মণ্ডা মিষ্টি", "আনারস", "কলা", "ধান"],
    tags: ["ময়মনসিংহ", "মণ্ডা", "মিষ্টি", "আনারস", "মধুপুর"],
  },
  {
    slug: "netrokona",
    name: "Netrokona",
    nameBn: "নেত্রকোনা",
    division: "Mymensingh Division",
    divisionSlug: "mymensingh",
    description: "হাওর জেলা নেত্রকোনায় মাছ, বিজয়পুরের সাদা মাটি ও বিভিন্ন দেশি মাছ পাওয়া যায়।",
    specialProducts: [
      {
        name: "Haor Fish",
        nameBn: "হাওরের মাছ",
        season: "শীত-বসন্ত",
        priceRange: "১০০–৫০০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৮০–৪০০ টাকা/কেজি",
        description: "বোয়াল, আইড়, চিতল, শোল সহ দেশি মাছ। হাওরের তাজা মাছ বিখ্যাত।",
        bestQuality: "মোহনগঞ্জ, মদন হাওর এলাকা",
      },
      {
        name: "White Clay",
        nameBn: "বিজয়পুরের সাদা মাটি",
        season: "সারা বছর",
        priceRange: "১০–৩০ টাকা/কেজি",
        unit: "কেজি",
        wholesalePrice: "৫–২০ টাকা/কেজি",
        description: "বিজয়পুরের সাদা মাটি সিরামিক ও মাটির পাত্র তৈরিতে ব্যবহৃত হয়।",
        bestQuality: "বিজয়পুর, দুর্গাপুর উপজেলা",
      },
    ],
    wholesaleMarkets: [
      { name: "নেত্রকোনা সদর বাজার", location: "নেত্রকোনা শহর", schedule: "প্রতিদিন সকাল ৭টা–সন্ধ্যা ৭টা" },
      { name: "মোহনগঞ্জ মাছের হাট", location: "মোহনগঞ্জ উপজেলা", schedule: "রোব ও বৃহস্পতিবার" },
    ],
    famousFor: ["হাওরের মাছ", "সাদা মাটি", "তাজা মাছ"],
    tags: ["নেত্রকোনা", "হাওর", "মাছ", "সাদা মাটি", "দেশি মাছ"],
  },
  {
  "slug": "gazipur",
  "name": "Gazipur",
  "nameBn": "গাজীপুর",
  "division": "Dhaka Division",
  "divisionSlug": "dhaka",
  "description": "শিল্পনগরী গাজীপুর সুমিষ্টি কাঁঠাল ও পেঁপের জন্য বিখ্যাত। শ্রীপুরের কাঁঠালের বাজার বাংলাদেশের অন্যতম বৃহৎ।",
  "specialProducts": [
    {
      "name": "Jackfruit",
      "nameBn": "শ্রীপুরের সুমিষ্টি কাঁঠাল",
      "season": "গ্রীষ্ম-বর্ষা (মে–আগস্ট)",
      "priceRange": "১০০–৫০০ টাকা/পিস",
      "unit": "পিস",
      "wholesalePrice": "৫০–৩৫০ টাকা/পিস (লট হিসেবে)",
      "description": "গাজীপুরের লাল মাটির কাঁঠাল মিষ্টি, রসালো ও সুঘ্রাণযুক্ত। দেশের বিভিন্ন প্রান্তে রফতানি হয়।",
      "bestQuality": "শ্রীপুর, কাপাসিয়া ও কালীগঞ্জ উপজেলা"
    },
    {
      "name": "Papaya",
      "nameBn": "দেশি পাকা ও কাঁচা পেঁপে",
      "season": "সারা বছর",
      "priceRange": "৩০–৬০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২০–৪৫ টাকা/কেজি",
      "description": "পুষ্টিকর দেশি পেঁপে রান্না ও কাঁচা খাওয়ার জন্য উৎকৃষ্ট।",
      "bestQuality": "জয়দেবপুর ও শ্রীপুর কৃষি এলাকা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "শ্রীপুর কাঁঠালের পাইকারি আড়ত",
      "location": "শ্রীপুর উপজেলা সদর, গাজীপুর",
      "schedule": "মে–আগস্ট মৌসুমে প্রতিদিন ভোর ৫টা–দুপুর ১টা",
      "contact": "০১৭২৮-XXXXXX"
    },
    {
      "name": "জয়দেবপুর কৃষি পাইকারি বাজার",
      "location": "জয়দেবপুর বাজার, গাজীপুর সিটি",
      "schedule": "প্রতিদিন ভোর ৪টা–সকাল ১০টা"
    }
  ],
  "famousFor": [
    "সুমিষ্টি কাঁঠাল",
    "পেঁপে",
    "শিল্প পণ্য",
    "লাল মাটির শাকসবজি"
  ],
  "tags": [
    "গাজীপুর",
    "শ্রীপুর",
    "কাঁঠাল",
    "পেঁপে",
    "ঢাকা বিভাগ"
  ]
},
  {
  "slug": "narayanganj",
  "name": "Narayanganj",
  "nameBn": "নারায়ণগঞ্জ",
  "division": "Dhaka Division",
  "divisionSlug": "dhaka",
  "description": "প্রাচীন ঐতিহ্যবাহী বাণিজ্য নগরী নারায়ণগঞ্জ জামদানি তাঁত শিল্প, শীতলক্ষ্যার মাছ এবং হোসিয়ারি পণ্যের প্রধান কেন্দ্র।",
  "specialProducts": [
    {
      "name": "Jamdani Saree",
      "nameBn": "আসল জামদানি শাড়ি",
      "season": "সারা বছর",
      "priceRange": "৩,০০০–৮০,০০০ টাকা/পিস",
      "unit": "পিস",
      "wholesalePrice": "২,২০০–৬০,০০০ টাকা/পিস",
      "description": "ঐতিহ্যবাহী জামদানি পল্লীর কারিগরদের নিখুঁত হাতে বোনা সুতি ও রেশমি জামদানি। ইউনেস্কো স্বীকৃত জিআই পণ্য।",
      "bestQuality": "রূপগঞ্জ নোয়াপাড়া জামদানি পল্লী ও তারাবো"
    },
    {
      "name": "Shitalakshya River Fish",
      "nameBn": "শীতলক্ষ্যা ও মেঘনার মাছ",
      "season": "বর্ষা-শরৎ",
      "priceRange": "৩০০–১২০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২৫০–৯০০ টাকা/কেজি",
      "description": "আইড়, বোয়াল, রিঠা এবং দেশি তাজা মাছের জন্য নারায়ণগঞ্জের আড়তগুলো পরিচিত।",
      "bestQuality": "সোনারগাঁও ও আড়াইহাজার নদী তীরবর্তী এলাকা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "রূপগঞ্জ জামদানি হাট",
      "location": "নোয়াপাড়া জামদানি পল্লী, রূপগঞ্জ",
      "schedule": "প্রতি শুক্রবার ভোর ৫টা–সকাল ১০টা",
      "contact": "০১৮১৮-XXXXXX"
    },
    {
      "name": "চাষাড়া পাইকারি বাজার",
      "location": "চাষাড়া, নারায়ণগঞ্জ",
      "schedule": "প্রতিদিন ভোর ৪টা–সন্ধ্যা ৮টা"
    }
  ],
  "famousFor": [
    "জামদানি শাড়ি",
    "হোসিয়ারি বস্ত্র",
    "মিষ্টি",
    "নদীর মাছ"
  ],
  "tags": [
    "নারায়ণগঞ্জ",
    "জামদানি",
    "রূপগঞ্জ",
    "শাড়ি",
    "বস্ত্র"
  ]
},
  {
  "slug": "manikganj",
  "name": "Manikganj",
  "nameBn": "মানিকগঞ্জ",
  "division": "Dhaka Division",
  "divisionSlug": "dhaka",
  "description": "মানিকগঞ্জ খাঁটি সরিষার তেল, পদ্মার সুস্বাদু ইলিশ এবং ঐতিহ্যবাহী হাজারি গুড়ের জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Pure Mustard Oil",
      "nameBn": "ঘানির খাঁটি সরিষার তেল",
      "season": "শীত-বসন্ত",
      "priceRange": "২৪০–৩২০ টাকা/লিটার",
      "unit": "লিটার",
      "wholesalePrice": "১৯০–২৬০ টাকা/লিটার",
      "description": "কাঠের ঘানিতে ভাঙা প্রথম চাপের খাঁটি সরিষার তেল। ঝাঁঝালো গন্ধ ও অতুলনীয় স্বাদ।",
      "bestQuality": "সিংগাইর ও শিবালয় উপজেলা"
    },
    {
      "name": "Hazari Gur",
      "nameBn": "ঐতিহ্যবাহী হাজারি গুড়",
      "season": "শীতকাল (ডিসেম্বর–ফেব্রুয়ারি)",
      "priceRange": "৪০০–৮০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৩২০–৬৫০ টাকা/কেজি",
      "description": "মানিকগঞ্জের বিখ্যাত হাজারি গুড়, যা স্পর্শ করলেই সুবাস ছড়ায় এবং মুখে দিলে অতুলনীয় স্বাদ পাওয়া যায়।",
      "bestQuality": "হরিরামপুর উপজেলা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "সিংগাইর সরিষা ও তেল পাইকারি হাট",
      "location": "সিংগাইর বাজার, মানিকগঞ্জ",
      "schedule": "রবি ও বৃহস্পতিবার সকাল ৬টা–দুপুর ২টা"
    },
    {
      "name": "আরিচা ঘাট মৎস্য আড়ত",
      "location": "শিবালয়, মানিকগঞ্জ",
      "schedule": "প্রতিদিন ভোর ৪টা–সকাল ৯টা"
    }
  ],
  "famousFor": [
    "ঘানির সরিষার তেল",
    "হাজারি গুড়",
    "পদ্মার মাছ"
  ],
  "tags": [
    "মানিকগঞ্জ",
    "সরিষার তেল",
    "হাজারি গুড়",
    "সিংগাইর"
  ]
},
  {
  "slug": "rajbari",
  "name": "Rajbari",
  "nameBn": "রাজবাড়ী",
  "division": "Dhaka Division",
  "divisionSlug": "dhaka",
  "description": "পদ্মার তীরবর্তী জেলা রাজবাড়ী গোয়ালন্দের পদ্মার ইলিশ, ঐতিহ্যবাহী চমচম এবং চিনিগুড়া সুগন্ধি ধানের জন্য খ্যাত।",
  "specialProducts": [
    {
      "name": "Padma Hilsa",
      "nameBn": "গোয়ালন্দের পদ্মার ইলিশ",
      "season": "বর্ষা (জুলাই–অক্টোবর)",
      "priceRange": "১,২০০–৩,০০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১,০০০–২,৪০০ টাকা/কেজি",
      "description": "পদ্মার খাঁটি সুস্বাদু চকচকে রূপালী ইলিশ। চর্বিযুক্ত এবং অসাধারণ স্বাদ।",
      "bestQuality": "গোয়ালন্দ দৌলতদিয়া ঘাট"
    },
    {
      "name": "Chomchom Sweet",
      "nameBn": "রাজবাড়ীর স্পেশাল চমচম",
      "season": "সারা বছর",
      "priceRange": "৩০০–৪৫০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২৪০–৩৬০ টাকা/কেজি",
      "description": "খাঁটি ছানা ও চিনির সিরায় তৈরি শতবর্ষী ঐতিহ্যের সুস্বাদু মিষ্টি।",
      "bestQuality": "রাজবাড়ী শহরের প্রধান মিষ্টি মহল"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "দৌলতদিয়া মৎস্য পাইকারি আড়ত",
      "location": "দৌলতদিয়া ঘাট, গোয়ালন্দ",
      "schedule": "প্রতিদিন ভোর ৪টা–সকাল ৮টা",
      "contact": "০১৭৩১-XXXXXX"
    },
    {
      "name": "রাজবাড়ী সদর বাজার",
      "location": "রাজবাড়ী শহর",
      "schedule": "প্রতিদিন সকাল ৬টা–সন্ধ্যা ৮টা"
    }
  ],
  "famousFor": [
    "পদ্মার ইলিশ",
    "চমচম মিষ্টি",
    "চিনিগুড়া চাল"
  ],
  "tags": [
    "রাজবাড়ী",
    "গোয়ালন্দ",
    "পদ্মার ইলিশ",
    "চমচম"
  ]
},
  {
  "slug": "madaripur",
  "name": "Madaripur",
  "nameBn": "মাদারীপুর",
  "division": "Dhaka Division",
  "divisionSlug": "dhaka",
  "description": "মাদারীপুর শীতের খাঁটি খেজুর পাটালি গুড়, আড়িয়াল খাঁ নদীর সুস্বাদু মাছ এবং মিষ্টির জন্য পরিচিত।",
  "specialProducts": [
    {
      "name": "Date Palm Jaggery",
      "nameBn": "খাঁটি খেজুর পাটালি গুড়",
      "season": "শীতকাল (নভেম্বর–ফেব্রুয়ারি)",
      "priceRange": "২৫০–৪৫০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২০০–৩৫০ টাকা/কেজি",
      "description": "প্রাকৃতিক তাজা রস জ্বালিয়ে তৈরি নির্ভেজাল নলেন পাটালি গুড়।",
      "bestQuality": "শিবচর ও কালকিনি উপজেলা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "শিবচর পাইকারি গুড় ও কৃষি বাজার",
      "location": "শিবচর, মাদারীপুর",
      "schedule": "শনি ও মঙ্গলবার ভোর ৬টা–দুপুর ১টা"
    },
    {
      "name": "মাদারীপুর পুরান বাজার",
      "location": "মাদারীপুর শহর",
      "schedule": "প্রতিদিন সকাল ৭টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "খেজুর পাটালি গুড়",
    "রসগোল্লা",
    "নদীর মাছ"
  ],
  "tags": [
    "মাদারীপুর",
    "পাটালি গুড়",
    "শিবচর",
    "খেজুর রস"
  ]
},
  {
  "slug": "shariatpur",
  "name": "Shariatpur",
  "nameBn": "শরীয়তপুর",
  "division": "Dhaka Division",
  "divisionSlug": "dhaka",
  "description": "পদ্মা ও মেঘনার মিলনস্থলের জেলা শরীয়তপুর। এখানকার ইলিশ ও মিষ্টি নারিকেল দেশের অন্যতম সেরা।",
  "specialProducts": [
    {
      "name": "Meghna-Padma Hilsa",
      "nameBn": "নড়িয়ার মোহনার ইলিশ মাছ",
      "season": "বর্ষা (জুলাই–অক্টোবর)",
      "priceRange": "১,১০০–২,৮০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৯০০–২,২০০ টাকা/কেজি",
      "description": "নড়িয়া ও জাজিরার পদ্মা-মেঘনা নদী মোহনার তাজা ইলিশ মাছ। অতুলনীয় স্বাদ ও চর্বি।",
      "bestQuality": "নড়িয়া সুরেশ্বর ঘাট ও জাজিরা নাওডোবা ঘাট"
    },
    {
      "name": "Coconut",
      "nameBn": "দেশি মিষ্টি নারিকেল",
      "season": "সারা বছর",
      "priceRange": "৫০–৯০ টাকা/পিস",
      "unit": "পিস",
      "wholesalePrice": "৩৫–৭০ টাকা/পিস",
      "description": "গাছের তাজা ডাব ও নারিকেল। পানি অত্যন্ত মিষ্টি ও শাঁস পুরু।",
      "bestQuality": "ভেদরগঞ্জ ও গোসাইরহাট"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "সুরেশ্বর নদী ঘাট মৎস্য আড়ত",
      "location": "সুরেশ্বর, নড়িয়া, শরীয়তপুর",
      "schedule": "প্রতিদিন ভোর ৫টা–সকাল ৯টা"
    },
    {
      "name": "শরীয়তপুর সদর পাইকারি বাজার",
      "location": "শরীয়তপুর শহর",
      "schedule": "প্রতিদিন সকাল ৭টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "সুরেশ্বরের ইলিশ",
    "মিষ্টি নারিকেল",
    "খেজুর গুড়"
  ],
  "tags": [
    "শরীয়তপুর",
    "নড়িয়া",
    "ইলিশ",
    "সুরেশ্বর"
  ]
},
  {
  "slug": "kishoreganj",
  "name": "Kishoreganj",
  "nameBn": "কিশোরগঞ্জ",
  "division": "Dhaka Division",
  "divisionSlug": "dhaka",
  "description": "হাওরবেষ্টিত জেলা কিশোরগঞ্জ তাজা দেশি মাছ, ঐতিহ্যবাহী বাতাসি মিষ্টি ও চিনিগুড়া সুগন্ধি চালের জন্য সুপরিচিত।",
  "specialProducts": [
    {
      "name": "Haor Fresh Fish",
      "nameBn": "নিকলি ও মিঠামইন হাওরের মাছ",
      "season": "বর্ষা-শীতকাল (আগস্ট–জানুয়ারি)",
      "priceRange": "৩০০–১,৫০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২২০–১,১০০ টাকা/কেজি",
      "description": "হাওরের খাঁটি মুক্ত জলাশয়ের বোয়াল, আইড়, চিতল, পাবদা ও মলা-ঢেলা মাছ। কোনো কৃত্রিম খাবার ছাড়া প্রাকৃতিক মাছ।",
      "bestQuality": "নিকলি, ইটনা ও অষ্টগ্রাম হাওর"
    },
    {
      "name": "Batasa and Gur",
      "nameBn": "ঐতিহ্যবাহী বাতাসি গুড় ও মিষ্টি",
      "season": "সারা বছর",
      "priceRange": "১৫০–৩০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১১০–২২০ টাকা/কেজি",
      "description": "কিশোরগঞ্জের হাটগুলোতে পাওয়া খাঁটি আখের গুড় ও বাতাসি মিষ্টি।",
      "bestQuality": "কটিয়াদী ও পাকুন্দিয়া"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "নিকলি নতুন বাজার মৎস্য আড়ত",
      "location": "নিকলি হাওর ঘাট, কিশোরগঞ্জ",
      "schedule": "প্রতিদিন ভোর ৪টা–সকাল ৮টা",
      "contact": "০১৭৫৫-XXXXXX"
    },
    {
      "name": "কটিয়াদী পাইকারি হাট",
      "location": "কটিয়াদী বাজার",
      "schedule": "সোম ও শুক্রবার সকাল ৭টা–দুপুর ২টা"
    }
  ],
  "famousFor": [
    "হাওরের তাজা মাছ",
    "নিকলি হাওর",
    "বাতাসি গুড়",
    "পনির"
  ],
  "tags": [
    "কিশোরগঞ্জ",
    "হাওর",
    "মাছ",
    "নিকলি",
    "মিঠামইন"
  ]
},
  {
  "slug": "khagrachhari",
  "name": "Khagrachhari",
  "nameBn": "খাগড়াছড়ি",
  "division": "Chattogram Division",
  "divisionSlug": "chittagong",
  "description": "পাহাড়ি উপত্যকার জেলা খাগড়াছড়ি অর্গানিক পাহাড়ি খাঁটি হলুদ, পাহাড়ি আদা এবং সুমিষ্টি আনারস ও কলার জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Hill Turmeric",
      "nameBn": "খাঁটি পাহাড়ি হলুদ",
      "season": "শীতকাল (ডিসেম্বর–মার্চ)",
      "priceRange": "১৪০–২২০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১০০–১৬০ টাকা/কেজি",
      "description": "পাহাড়ের ঢালে কোনো রাসায়নিক সার ছাড়া চাষ করা গাঢ় হলুদ রঙের অর্গানিক হলুদ। অসাধারণ ঘ্রাণ।",
      "bestQuality": "মাটিরাঙ্গা ও দীঘিনালা উপজেলা"
    },
    {
      "name": "Hill Ginger",
      "nameBn": "পাহাড়ি খাঁটি আদা",
      "season": "শীতকাল",
      "priceRange": "১২০–২০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৮০–১৪০ টাকা/কেজি",
      "description": "তীব্র ঝাঁঝ ও গাঢ় সুবাসযুক্ত পাহাড়ি কাঁচা আদা।",
      "bestQuality": "পানছড়ি ও মহালছড়ি"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "মাটিরাঙ্গা পাহাড়ি পাইকারি হাট",
      "location": "মাটিরাঙ্গা বাজার, খাগড়াছড়ি",
      "schedule": "প্রতি বুধবার ভোর ৬টা–বিকাল ৪টা"
    },
    {
      "name": "খাগড়াছড়ি সদর বাজার",
      "location": "খাগড়াছড়ি শহর",
      "schedule": "প্রতিদিন সকাল ৭টা–সন্ধ্যা ৭টা"
    }
  ],
  "famousFor": [
    "পাহাড়ি হলুদ",
    "পাহাড়ি আদা",
    "আনারস",
    "জুম চাষ"
  ],
  "tags": [
    "খাগড়াছড়ি",
    "হলুদ",
    "আদা",
    "পাহাড়ি",
    "অর্গানিক"
  ]
},
  {
  "slug": "bandarban",
  "name": "Bandarban",
  "nameBn": "বান্দরবান",
  "division": "Chattogram Division",
  "divisionSlug": "chittagong",
  "description": "বান্দরবানের পাহাড়ি মিষ্টি কমলালেবু, সুস্বাদু পাহাড়ি কলা এবং গভীর অরণ্যের খাঁটি পাহাড়ি মধু বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Hill Orange",
      "nameBn": "বান্দরবানের পাহাড়ি কমলালেবু",
      "season": "শীতকাল (নভেম্বর–জানুয়ারি)",
      "priceRange": "১৬০–২৮০ টাকা/ডজন",
      "unit": "ডজন",
      "wholesalePrice": "১২০–২০০ টাকা/ডজন",
      "description": "পাহাড়ের ঠান্ডা আবহাওয়ায় প্রাকৃতিক উপায়ে উৎপাদিত রসালো ও সুমিষ্টি কমলা।",
      "bestQuality": "রুমা ও থানচি উপজেলা"
    },
    {
      "name": "Wild Hill Honey",
      "nameBn": "পাহাড়ি বুনো খাঁটি মধু",
      "season": "বসন্তকাল (মার্চ–মে)",
      "priceRange": "৯০০–১,৬০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৭০০–১,২০০ টাকা/কেজি",
      "description": "গভীর পাহাড়ের বনফুল থেকে সংগ্রহ করা প্রাকৃতিক বুনো মধু। কোনো চিনি বা রাসায়নিক ভেজালমুক্ত।",
      "bestQuality": "রোয়াংছড়ি ও আলীকদম"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "বান্দরবান মারমা বাজার",
      "location": "বান্দরবান শহর",
      "schedule": "রবি ও বুধবার সকাল ৬টা–সন্ধ্যা ৬টা"
    },
    {
      "name": "থানচি পাইকারি ফল আড়ত",
      "location": "থানচি বাজার",
      "schedule": "মৌসুমে প্রতিদিন সকাল"
    }
  ],
  "famousFor": [
    "পাহাড়ি কমলা",
    "বুনো মধু",
    "পাহাড়ি কলা",
    "জুম চাল"
  ],
  "tags": [
    "বান্দরবান",
    "কমলা",
    "মধু",
    "পাহাড়",
    "থানচি"
  ]
},
  {
  "slug": "feni",
  "name": "Feni",
  "nameBn": "ফেনী",
  "division": "Chattogram Division",
  "divisionSlug": "chittagong",
  "description": "ফেনীর সোনাগাজীর সূর্যমুখী তেল, চরাঞ্চলের মহিষের দুধের খাঁটি ঘি এবং সুগন্ধি আগরবাতি বাণিজ্যিকভাবে বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Sunflower Oil",
      "nameBn": "সোনাগাজীর খাঁটি সূর্যমুখী তেল",
      "season": "শীত-বসন্ত (ফেব্রুয়ারি–মে)",
      "priceRange": "২৩০–৩০০ টাকা/লিটার",
      "unit": "লিটার",
      "wholesalePrice": "১৭০–২৪০ টাকা/লিটার",
      "description": "সোনাগাজীর বিস্তৃত চরে চাষ হওয়া সূর্যমুখীর বীজ থেকে তৈরি শতভাগ প্রাকৃতিক কোলেস্টেরলমুক্ত ভোজ্যতেল।",
      "bestQuality": "সোনাগাজী উপকূলীয় চর এলাকা"
    },
    {
      "name": "Buffalo Ghee",
      "nameBn": "মহিষের দুধের খাঁটি ঘি",
      "season": "সারা বছর",
      "priceRange": "১,১০০–১,৮০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৮৫০–১,৪০০ টাকা/কেজি",
      "description": "চরাঞ্চলের ঘাস খাওয়া দেশি মহিষের দুধের ননী জ্বালিয়ে তৈরি সুস্বাদু ও সুগন্ধযুক্ত খাঁটি গাওয়া ঘি।",
      "bestQuality": "সোনাগাজী ও পরশুরাম"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "সোনাগাজী পাইকারি কৃষি বাজার",
      "location": "সোনাগাজী বাজার, ফেনী",
      "schedule": "সোম ও বৃহস্পতিবার সকাল ৭টা–দুপুর ২টা"
    },
    {
      "name": "ফেনী বড় বাজার",
      "location": "ফেনী সিটি",
      "schedule": "প্রতিদিন সকাল ৬টা–রাত ৯টা"
    }
  ],
  "famousFor": [
    "সূর্যমুখী তেল",
    "মহিষের দুধের ঘি",
    "আগরবাতি",
    "মুহুরী সেচ প্রকল্প"
  ],
  "tags": [
    "ফেনী",
    "সূর্যমুখী",
    "ঘি",
    "সোনাগাজী",
    "চট্টগ্রাম বিভাগ"
  ]
},
  {
  "slug": "chandpur",
  "name": "Chandpur",
  "nameBn": "চাঁদপুর",
  "division": "Chattogram Division",
  "divisionSlug": "chittagong",
  "description": "ইলিশের রাজধানী চাঁদপুর! পদ্মা, মেঘনা ও ডাকাতিয়া নদীর মোহনায় ধরা পড়া চাঁদপুরী রূপালী ইলিশের স্বাদ পৃথিবীতে অনন্য।",
  "specialProducts": [
    {
      "name": "Chandpur Padma-Meghna Hilsa",
      "nameBn": "চাঁদপুরের আসল রূপালী ইলিশ",
      "season": "বর্ষা-শরৎ (জুলাই–নভেম্বর)",
      "priceRange": "১,৪০০–৩,৫০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১,১০০–২,৮০০ টাকা/কেজি (সাইজ ভেদে)",
      "description": "তিন নদীর মোহনার নোনা ও মিঠা পানির প্রাকৃতিক খাবার খেয়ে বেড়ে ওঠা আসল সুস্বাদু ডিমওয়ালা ও তেলতেলে ইলিশ মাছ।",
      "bestQuality": "চাঁদপুর বড় স্টেশন ও পুরান বাজার নদী ঘাট"
    },
    {
      "name": "Hilsa Fish Roe",
      "nameBn": "ইলিশ মাছের তাজা ডিম",
      "season": "শরৎকাল (সেপ্টেম্বর–অক্টোবর)",
      "priceRange": "১,৬০০–২,৫০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১,২০০–১,৯০০ টাকা/কেজি",
      "description": "তাজা ও খাঁটি ইলিশের ডিম, যা ভাজা ও রান্নায় অতুলনীয় সুস্বাদু।",
      "bestQuality": "চাঁদপুর মৎস্য অবতরণ কেন্দ্র"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "চাঁদপুর বড় স্টেশন মৎস্য আড়ত ঘাট (দেশের সর্ববৃহৎ)",
      "location": "বড় স্টেশন, চাঁদপুর সদর",
      "schedule": "প্রতিদিন ভোর ৪টা–বেলা ১২টা",
      "contact": "চাঁদপুর মৎস্য বণিক সমিতি: ০১৮১৬-XXXXXX"
    },
    {
      "name": "পুরান বাজার পাইকারি মোকাম",
      "location": "পুরান বাজার, চাঁদপুর",
      "schedule": "প্রতিদিন সকাল ৬টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "রূপালী ইলিশ মাছ",
    "ইলিশের ডিম",
    "মিষ্টি মিষ্টি নারিকেল",
    "নৌপথ"
  ],
  "tags": [
    "চাঁদপুর",
    "ইলিশ",
    "ইলিশের রাজধানী",
    "পদ্মা",
    "মেঘনা",
    "মাছ"
  ]
},
  {
  "slug": "brahmanbaria",
  "name": "Brahmanbaria",
  "nameBn": "ব্রাহ্মণবাড়িয়া",
  "division": "Chattogram Division",
  "divisionSlug": "chittagong",
  "description": "ঐতিহ্যবাহী সাংস্কৃতিক শহর ব্রাহ্মণবাড়িয়া শতবর্ষী ছানামুখী মিষ্টি এবং তিতাস নদীর তাজা মাছের জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Chhanamukhi Sweet",
      "nameBn": "ঐতিহ্যবাহী আসল ছানামুখী",
      "season": "সারা বছর",
      "priceRange": "৪৫০–৬৫০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৩৬০–৫২০ টাকা/কেজি",
      "description": "খাঁটি গরুর দুধের ছানা ও চিনির আবরণে তৈরি দানাদার কিউব আকৃতির বিখ্যাত ছানামুখী। বাংলাদেশের গর্বিত জিআই পণ্য।",
      "bestQuality": "ব্রাহ্মণবাড়িয়া শহরের আদর্শ মিষ্টান্ন ভাণ্ডার ও স্থানীয় ঐতিহ্যবাহী মিষ্টি ঘর"
    },
    {
      "name": "Titas River Fish",
      "nameBn": "তিতাস নদীর তাজা দেশি মাছ",
      "season": "সারা বছর",
      "priceRange": "৩৫০–১,২০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২৮০–৯০০ টাকা/কেজি",
      "description": "তিতাস নদীর সুস্বাদু বোয়াল, চিতল, রুই ও গুলশা মাছ।",
      "bestQuality": "আশুগঞ্জ ও নবীনগর নদী তীরবর্তী আড়ত"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "আশুগঞ্জ নদী বন্দর পাইকারি বাজার",
      "location": "আশুগঞ্জ ফেরিঘাট, ব্রাহ্মণবাড়িয়া",
      "schedule": "প্রতিদিন ভোর ৪টা–সকাল ১০টা"
    },
    {
      "name": "ব্রাহ্মণবাড়িয়া আনন্দ বাজার",
      "location": "শহর কেন্দ্র",
      "schedule": "প্রতিদিন সকাল ৬টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "ছানামুখী মিষ্টি",
    "তিতাস নদীর মাছ",
    "তবলার সুর",
    "আশুগঞ্জ নদীবন্দর"
  ],
  "tags": [
    "ব্রাহ্মণবাড়িয়া",
    "ছানামুখী",
    "তিতাস",
    "মিষ্টি",
    "মাছ"
  ]
},
  {
  "slug": "lakshmipur",
  "name": "Lakshmipur",
  "nameBn": "লক্ষ্মীপুর",
  "division": "Chattogram Division",
  "divisionSlug": "chittagong",
  "description": "মেঘনার উপকূলবর্তী লক্ষ্মীপুর দেশি মিষ্টি নারিকেল, রায়পুরের সুস্বাদু সুপারি এবং সয়াবিন উৎপাদনের রাজধানী হিসেবে পরিচিত।",
  "specialProducts": [
    {
      "name": "Soybean",
      "nameBn": "খাঁটি দেশি সয়াবিন ও তেল",
      "season": "শীত-বসন্ত (মার্চ–মে)",
      "priceRange": "৭০–১১০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৫৫–৮৫ টাকা/কেজি",
      "description": "বাংলাদেশের সিংহভাগ সয়াবিন উৎপাদিত হয় লক্ষ্মীপুরে। পুষ্টিকর ও প্রোটিনসমৃদ্ধ।",
      "bestQuality": "রামগতি ও কমলনগর চরাঞ্চল"
    },
    {
      "name": "Betel Nut",
      "nameBn": "রায়পুরের তাজা ও শুকনা সুপারি",
      "season": "শরৎ-শীতকাল (অক্টোবর–ফেব্রুয়ারি)",
      "priceRange": "৪০০–৭০০ টাকা/কাউন (১২৮০ পিস)",
      "unit": "কাউন",
      "wholesalePrice": "৩০০–৫৫০ টাকা/কাউন",
      "description": "রায়পুরের সুপারি মানে ও স্বাদে দেশের মধ্যে শীর্ষে। সারাদেশে পাইকারি চালান যায়।",
      "bestQuality": "রায়পুর উপজেলা ও দালাল বাজার"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "রায়পুর সুপারি ও নারিকেল পাইকারি আড়ত",
      "location": "রায়পুর বাজার, লক্ষ্মীপুর",
      "schedule": "প্রতি সোম ও বৃহস্পতিবার ভোর ৫টা–দুপুর ১টা"
    },
    {
      "name": "রামগতি মাছ ও সয়াবিন ঘাট আড়ত",
      "location": "আলেকজান্ডার, রামগতি",
      "schedule": "প্রতিদিন ভোর ৪টা–সকাল ৯টা"
    }
  ],
  "famousFor": [
    "সয়াবিন",
    "রায়পুরের সুপারি",
    "মিষ্টি নারিকেল",
    "মেঘনার মাছ"
  ],
  "tags": [
    "লক্ষ্মীপুর",
    "সয়াবিন",
    "সুপারি",
    "রায়পুর",
    "নারিকেল"
  ]
},
  {
  "slug": "noakhali",
  "name": "Noakhali",
  "nameBn": "নোয়াখালী",
  "division": "Chattogram Division",
  "divisionSlug": "chittagong",
  "description": "উপকূলীয় নোয়াখালী চরাঞ্চলের মহিষের খাঁটি দুধ ও দই, সুস্বাদু মিষ্টি নারিকেল এবং সুবর্ণচরের তরমুজের জন্য খ্যাত।",
  "specialProducts": [
    {
      "name": "Buffalo Curd (Doi)",
      "nameBn": "চরাঞ্চলের মহিষের দুধের দই",
      "season": "সারা বছর",
      "priceRange": "১৬০–২৫০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১২০–১৯০ টাকা/কেজি",
      "description": "মাটির পাত্রে জমানো খাঁটি মহিষের ঘন দুধের দই। কোনো মিষ্টি যোগ করা হয় না, সম্পূর্ণ প্রাকৃতিক।",
      "bestQuality": "হাতিয়া দ্বীপ ও সুবর্ণচর উপজেলা"
    },
    {
      "name": "Watermelon",
      "nameBn": "সুবর্ণচরের মিষ্টি লাল তরমুজ",
      "season": "গ্রীষ্মকাল (মার্চ–মে)",
      "priceRange": "২৫–৪৫ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১৫–৩০ টাকা/কেজি",
      "description": "চরের বালুমাটির রোদজ্বলা মিষ্টি রসালো তরমুজ।",
      "bestQuality": "সুবর্ণচর ও কোম্পানীগঞ্জ"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "চৌমুহনী পাইকারি মোকাম (দক্ষিণাঞ্চলের বৃহত্তম)",
      "location": "চৌমুহনী রেলগেট, নোয়াখালী",
      "schedule": "প্রতিদিন ভোর ৫টা–সন্ধ্যা ৭টা"
    },
    {
      "name": "নলচিরা ঘাট মৎস্য ও মহিষ বাজার",
      "location": "হাতিয়া দ্বীপ",
      "schedule": "প্রতিদিন সকাল ৬টা–দুপুর ১২টা"
    }
  ],
  "famousFor": [
    "মহিষের দই",
    "সুবর্ণচরের তরমুজ",
    "চৌমুহনী পাইকারি বাজার",
    "নারিকেল"
  ],
  "tags": [
    "নোয়াখালী",
    "মহিষের দই",
    "তরমুজ",
    "চৌমুহনী",
    "হাতিয়া"
  ]
},
  {
  "slug": "natore",
  "name": "Natore",
  "nameBn": "নাটোর",
  "division": "Rajshahi Division",
  "divisionSlug": "rajshahi",
  "description": "ঐতিহাসিক রানি ভবানীর নাটোর শতবর্ষী খাঁটি কাঁচাগোল্লা মিষ্টি এবং চলনবিলের মিঠা পানির সুস্বাদু মাছের জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Kachagolla Sweet",
      "nameBn": "আসল নাটোরের কাঁচাগোল্লা",
      "season": "সারা বছর",
      "priceRange": "৪২০–৬০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৩৪০–৪৮০ টাকা/কেজি",
      "description": "খাঁটি গরুর দুধের তাজা ছানা ও চিনির সিরায় তৈরি শতবর্ষী ঐতিহ্যের অনন্য মিষ্টি। বাংলাদেশের অনুমোদিত জিআই পণ্য।",
      "bestQuality": "নাটোর শহরের জয়কালী বাড়ি মিষ্টি মহল ও স্টেশন রোড"
    },
    {
      "name": "Chalan Beel Fish",
      "nameBn": "চলনবিলের দেশি তাজা মাছ",
      "season": "বর্ষা-শীতকাল (সেপ্টেম্বর–জানুয়ারি)",
      "priceRange": "২৫০–১,২০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১৮০–৯৫০ টাকা/কেজি",
      "description": "সিংড়া চলনবিল থেকে আহরিত প্রাকৃতিক বোয়াল, কৈ, শিং, মাগুর ও দেশি টেংরা মাছ।",
      "bestQuality": "সিংড়া উপজেলা ও গুরুদাসপুর"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "সিংড়া চলনবিল মৎস্য পাইকারি আড়ত",
      "location": "সিংড়া বাজার, নাটোর",
      "schedule": "প্রতিদিন ভোর ৪টা–সকাল ৯টা"
    },
    {
      "name": "নাটোর কানাইখালী বড় বাজার",
      "location": "নাটোর শহর",
      "schedule": "প্রতিদিন সকাল ৬টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "কাঁচাগোল্লা মিষ্টি",
    "চলনবিলের মাছ",
    "রানি ভবানীর রাজবাড়ি",
    "রসুন"
  ],
  "tags": [
    "নাটোর",
    "কাঁচাগোল্লা",
    "চলনবিল",
    "মিষ্টি",
    "মাছ"
  ]
},
  {
  "slug": "sirajganj",
  "name": "Sirajganj",
  "nameBn": "সিরাজগঞ্জ",
  "division": "Rajshahi Division",
  "divisionSlug": "rajshahi",
  "description": "যমুনার তীরের সিরাজগঞ্জ ঐতিহ্যবাহী তাঁতের শাড়ি ও লুঙ্গি, খাঁটি গাওয়া ঘি এবং গরুর দুধের জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Tant Saree and Lungi",
      "nameBn": "শাহজাদপুরের তাঁত শাড়ি ও লুঙ্গি",
      "season": "সারা বছর",
      "priceRange": "৪০০–৫,০০০ টাকা/পিস",
      "unit": "পিস",
      "wholesalePrice": "২৮০–৩,৮০০ টাকা/পিস",
      "description": "নরম সুতি সুতায় নিপুণ হাতে বোনা আরামদায়ক তাঁত শাড়ি, থ্রি-পিস ও সুতি লুঙ্গি। দেশের বৃহত্তম তাঁত মোকাম।",
      "bestQuality": "শাহজাদপুর ও বেলকুচি উপজেলা"
    },
    {
      "name": "Gawa Ghee",
      "nameBn": "বাঘাবাড়ির খাঁটি গাওয়া ঘি",
      "season": "সারা বছর",
      "priceRange": "১,১০০–১,৬০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৮৫০–১,৩০০ টাকা/কেজি",
      "description": "বাঘাবাড়ি মিল্ক ভিটা ডেইরি অঞ্চলের খাঁটি গরুর দুধের মাখন থেকে তৈরি সুগন্ধি গাওয়া ঘি।",
      "bestQuality": "বাঘাবাড়ি ঘাট, শাহজাদপুর"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "শাহজাদপুর কাপড়ের হাট (উত্তরবঙ্গের সর্ববৃহৎ)",
      "location": "শাহজাদপুর পৌর এলাকা",
      "schedule": "প্রতি রবি ও বুধবার সকাল ৬টা–বিকাল ৫টা",
      "contact": "০১৭২২-XXXXXX"
    },
    {
      "name": "বেলকুচি তাঁত বাজার",
      "location": "সোহাগপুর, বেলকুচি",
      "schedule": "শনি ও মঙ্গলবার ভোর ৫টা–দুপুর ২টা"
    }
  ],
  "famousFor": [
    "তাঁত শাড়ি ও লুঙ্গি",
    "বাঘাবাড়ির ঘি",
    "যমুনা সেতু",
    "দুধের আড়ত"
  ],
  "tags": [
    "সিরাজগঞ্জ",
    "শাহজাদপুর",
    "তাঁত",
    "ঘি",
    "লুঙ্গি",
    "শাড়ি"
  ]
},
  {
  "slug": "pabna",
  "name": "Pabna",
  "nameBn": "পাবনা",
  "division": "Rajshahi Division",
  "divisionSlug": "rajshahi",
  "description": "পাবনা ঈশ্বরদীর উন্নত লিচু, খাঁটি গাওয়া ঘি, মিষ্টি ও চলনবিলের তাজা মাছের অন্যতম প্রধান কেন্দ্র।",
  "specialProducts": [
    {
      "name": "Ishwardi Lychee",
      "nameBn": "ঈশ্বরদীর রসালো বোম্বাই ও চায়না-৩ লিচু",
      "season": "গ্রীষ্মকাল (মে–জুন)",
      "priceRange": "২০০–৪৫০ টাকা/১০০ পিস",
      "unit": "১০০ পিস",
      "wholesalePrice": "১৪০–৩২০ টাকা/১০০ পিস",
      "description": "রসালো, মাংসল ও ছোট বিচির সুস্বাদু লিচু। ঈশ্বরদী দেশের অন্যতম বৃহৎ লিচুর মোকাম।",
      "bestQuality": "ঈশ্বরদী উপজেলার জয়নগর ও সলিমপুর"
    },
    {
      "name": "Pabna Pure Ghee",
      "nameBn": "পাবনার খাঁটি গাওয়া ঘি",
      "season": "সারা বছর",
      "priceRange": "১,০৫০–১,৫৫০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৮২০–১,২৫০ টাকা/কেজি",
      "description": "ঐতিহ্যবাহী পদ্ধতিতে গরুর দুধের ননী থেকে তৈরি শতভাগ নির্ভেজাল দানাদার সুগন্ধযুক্ত ঘি।",
      "bestQuality": "ফরিদপুর ও চাটমোহর ডেইরি পল্লী"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "জয়নগর লিচুর পাইকারি আড়ত",
      "location": "জয়নগর, ঈশ্বরদী, পাবনা",
      "schedule": "মে–জুন মৌসুমে প্রতিদিন ভোর ৫টা–সন্ধ্যা ৬টা"
    },
    {
      "name": "চাটমোহর মাছ ও কৃষি আড়ত",
      "location": "চাটমোহর বাজার",
      "schedule": "প্রতিদিন সকাল ৬টা–দুপুর ১টা"
    }
  ],
  "famousFor": [
    "ঈশ্বরদীর লিচু",
    "খাঁটি ঘি",
    "চাটমোহরের মাছ",
    "হালুয়া-মিষ্টি"
  ],
  "tags": [
    "পাবনা",
    "ঈশ্বরদী",
    "লিচু",
    "ঘি",
    "রাজশাহী বিভাগ"
  ]
},
  {
  "slug": "joypurhat",
  "name": "Joypurhat",
  "nameBn": "জয়পুরহাট",
  "division": "Rajshahi Division",
  "divisionSlug": "rajshahi",
  "description": "জয়পুরহাট চিনিকলের লাল চিনি, উন্নত জাতের দেশি আলু ও কালাইয়ের শাকসবজির বিশাল পাইকারি মোকামের জন্য পরিচিত।",
  "specialProducts": [
    {
      "name": "Raw Sugar and Gur",
      "nameBn": "চিনিকলের দানাদার লাল চিনি ও আখের গুড়",
      "season": "শীত-বসন্ত",
      "priceRange": "১২০–১৬০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৯৫–১৩০ টাকা/কেজি",
      "description": "জয়পুরহাট সুগারমিলের ভিটামিন ও মিনারেলযুক্ত খাঁটি অপরিশোধিত লাল চিনি ও প্রাকৃতিক গুড়।",
      "bestQuality": "জয়পুরহাট চিনিকল এলাকা"
    },
    {
      "name": "Seed Potato",
      "nameBn": "উন্নত জাতের বীজ ও খাবার আলু",
      "season": "শীতকাল (ডিসেম্বর–মার্চ)",
      "priceRange": "২০–৪০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১২–২৮ টাকা/কেজি",
      "description": "গ্রানোলা, কার্ডিনাল ও ডায়মন্ড জাতের সেরা মানের আলু।",
      "bestQuality": "কালাই ও পাঁচবিবি উপজেলা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "কালাই আলুর পাইকারি মোকাম",
      "location": "কালাই বাজার, জয়পুরহাট",
      "schedule": "প্রতিদিন সকাল ৭টা–সন্ধ্যা ৭টা"
    },
    {
      "name": "পাঁচবিবি শাকসবজি আড়ত",
      "location": "পাঁচবিবি রেলগেট বাজার",
      "schedule": "প্রতিদিন ভোর ৪টা–দুপুর ১২টা"
    }
  ],
  "famousFor": [
    "লাল চিনি",
    "আলুর আড়ত",
    "মুরগির বাচ্চা",
    "সবজি"
  ],
  "tags": [
    "জয়পুরহাট",
    "লাল চিনি",
    "আলু",
    "কালাই",
    "চিনিকল"
  ]
},
  {
  "slug": "bagerhat",
  "name": "Bagerhat",
  "nameBn": "বাগেরহাট",
  "division": "Khulna Division",
  "divisionSlug": "khulna",
  "description": "সুন্দরবনের কোলঘেঁষা বাগেরহাট বিশ্বখ্যাত গলদা ও বাগদা চিংড়ি, সুন্দরবনের খলসী ফুলের খাঁটি মধু ও সুপারির জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Galda and Bagda Prawn",
      "nameBn": "ঘেরের তাজা গলদা ও বাগদা চিংড়ি",
      "season": "সারা বছর (বিশেষত আগস্ট–ডিসেম্বর)",
      "priceRange": "৬৫০–১,৮০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৫০০–১,৪০০ টাকা/কেজি",
      "description": "রফতানিযোগ্য বিশ্বমানের বড় গলদা ও বাগদা চিংড়ি। মিষ্টি পানির ঘেরে প্রাকৃতিক খাবারে লালিত।",
      "bestQuality": "রামপাল, মোংলা ও ফকিরহাট উপজেলা"
    },
    {
      "name": "Sundarbans Kholshi Honey",
      "nameBn": "সুন্দরবনের খলসী ফুলের মধু",
      "season": "বসন্তকাল (এপ্রিল–মে)",
      "priceRange": "৮৫০–১,৫০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৬৫০–১,১০০ টাকা/কেজি",
      "description": "মৌয়ালদের সুন্দরবন থেকে আহরিত খাঁটি হালকা সোনালী রঙের খলসী ফুলের মধু। অ্যান্টিঅক্সিডেন্টে ভরপুর।",
      "bestQuality": "মোংলা ও শরণখোলা সুন্দরবন রেঞ্জ"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "ফকিরহাট চিংড়ি পাইকারি আড়ত",
      "location": "ফকিরহাট বিশ্বরোড মোড়, বাগেরহাট",
      "schedule": "প্রতিদিন ভোর ৫টা–বেলা ১১টা",
      "contact": "০১৭২৯-XXXXXX"
    },
    {
      "name": "মোংলা সামুদ্রিক মাছের মোকাম",
      "location": "মোংলা পোর্ট ঘাট",
      "schedule": "প্রতিদিন ভোর ৪টা–সকাল ১০টা"
    }
  ],
  "famousFor": [
    "গলদা চিংড়ি",
    "সুন্দরবনের মধু",
    "সুপারি",
    "ষাট গম্বুজ মসজিদ"
  ],
  "tags": [
    "বাগেরহাট",
    "গলদা চিংড়ি",
    "মধু",
    "সুন্দরবন",
    "মোংলা"
  ]
},
  {
  "slug": "narail",
  "name": "Narail",
  "nameBn": "নড়াইল",
  "division": "Khulna Division",
  "divisionSlug": "khulna",
  "description": "চিত্রা নদীর নড়াইল খাঁটি তিল ও তিলের তেল, খেজুর পাটালি গুড় এবং চিত্রা নদীর সুস্বাদু মাছের জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Sesame Seed and Oil",
      "nameBn": "খাঁটি দেশি তিল ও তিলের তেল",
      "season": "গ্রীষ্ম-বর্ষা (জুন–আগস্ট)",
      "priceRange": "১৮০–২৮০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১৩০–২২০ টাকা/কেজি",
      "description": "অর্গানিক পদ্ধতির কালো ও লাল তিল। ঘানিতে ভাঙা তিলের তেল ত্বক ও রান্নার জন্য অসাধারণ।",
      "bestQuality": "লোহাগড়া ও কালিয়া উপজেলা"
    },
    {
      "name": "Chitra River Fresh Fish",
      "nameBn": "চিত্রা নদীর তাজা মাছ",
      "season": "সারা বছর",
      "priceRange": "৩০০–৯০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২৪০–৭০০ টাকা/কেজি",
      "description": "চিত্রা নদীর মিঠা পানির দেশি রুই, কাতলা ও শোল মাছ।",
      "bestQuality": "নড়াইল সদর ঘাট"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "লোহাগড়া পাইকারি হাট",
      "location": "লোহাগড়া বাজার, নড়াইল",
      "schedule": "প্রতি শনি ও মঙ্গলবার সকাল ৭টা–দুপুর ২টা"
    },
    {
      "name": "রূপগঞ্জ বাজার",
      "location": "নড়াইল শহর",
      "schedule": "প্রতিদিন সকাল ৬টা–সন্ধ্যা ৭টা"
    }
  ],
  "famousFor": [
    "দেশি তিল ও তেল",
    "খেজুর গুড়",
    "চিত্রা নদী",
    "এস এম সুলতানের চিত্রশিল্প"
  ],
  "tags": [
    "নড়াইল",
    "তিল",
    "তিলের তেল",
    "চিত্রা",
    "খুলনা বিভাগ"
  ]
},
  {
  "slug": "magura",
  "name": "Magura",
  "nameBn": "মাগুরা",
  "division": "Khulna Division",
  "divisionSlug": "khulna",
  "description": "মাগুরা সুগন্ধি মিষ্টি পানের বরজ, নির্ভেজাল খেজুর গুড় এবং উন্নত জাতের কলার জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Sweet Betel Leaf",
      "nameBn": "শালিখার মিষ্টি সুগন্ধি পান",
      "season": "সারা বছর",
      "priceRange": "৭০–১৮০ টাকা/বিড়া (৬৪ পিস)",
      "unit": "বিড়া",
      "wholesalePrice": "৫০–১২০ টাকা/বিড়া",
      "description": "শালিখার ঐতিহ্যবাহী বরজের পাতলা ও মিষ্টি জাতের পান। দেশ ও বিদেশে সমাদৃত।",
      "bestQuality": "শালিখা ও মহম্মদপুর উপজেলা"
    },
    {
      "name": "Date Jaggery",
      "nameBn": "মাগুরার খেজুর পাটালি গুড়",
      "season": "শীতকাল (ডিসেম্বর–ফেব্রুয়ারি)",
      "priceRange": "২৬০–৪৫০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২০০–৩৫০ টাকা/কেজি",
      "description": "গাছিদের আহরিত তাজা রসের তৈরি বিশুদ্ধ সুবাসযুক্ত পাটালি গুড়।",
      "bestQuality": "শ্রীপুর ও মহম্মদপুর"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "শালিখা পানের পাইকারি আড়ত",
      "location": "আড়পাড়া, শালিখা, মাগুরা",
      "schedule": "প্রতি রবি ও বৃহস্পতিবার ভোর ৬টা–দুপুর ১২টা"
    },
    {
      "name": "মাগুরা নতুন বাজার",
      "location": "মাগুরা শহর",
      "schedule": "প্রতিদিন সকাল ৭টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "মিষ্টি পান",
    "খেজুর পাটালি গুড়",
    "দেশি কলা",
    "সবজি"
  ],
  "tags": [
    "মাগুরা",
    "পান",
    "পানের বরজ",
    "খেজুর গুড়",
    "শালিখা"
  ]
},
  {
  "slug": "jhenaidah",
  "name": "Jhenaidah",
  "nameBn": "ঝিনাইদহ",
  "division": "Khulna Division",
  "divisionSlug": "khulna",
  "description": "কৃষিপ্রধান ঝিনাইদহ সুমিষ্টি হিমসাগর আম, উন্নত জাতের কলা এবং শীতকালীন ফুলের বিশাল পাইকারি বাজারের জন্য সুপরিচিত।",
  "specialProducts": [
    {
      "name": "Himsagar and Amrapali Mango",
      "nameBn": "কোটচাঁদপুরের সুস্বাদু হিমসাগর ও আম্রপালি আম",
      "season": "গ্রীষ্মকাল (মে–জুলাই)",
      "priceRange": "৬৫–১৩০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৪৫–৯৫ টাকা/কেজি",
      "description": "পাতলা চামড়া, আঁশহীন ও মিষ্টি স্বাদের হিমসাগর আম। গাছে পাকা নির্ভেজাল ফল।",
      "bestQuality": "কোটচাঁদপুর ও মহেশপুর বাগান অঞ্চল"
    },
    {
      "name": "Fresh Commercial Flowers",
      "nameBn": "বাণিজ্যিক তাজা রজনীগন্ধা ও গোলাপ ফুল",
      "season": "শীত ও বসন্তকাল",
      "priceRange": "৩–১৫ টাকা/স্টিক",
      "unit": "স্টিক",
      "wholesalePrice": "১.৫০–১০ টাকা/স্টিক (বান্ডেল)",
      "description": "দেশের ফুলের অন্যতম প্রধান যোগান আসে ঝিনাইদহের ফুলচাষীদের কাছ থেকে।",
      "bestQuality": "কালীগঞ্জ গান্না বাজার এলাকা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "কোটচাঁদপুর ফলের পাইকারি মোকাম",
      "location": "কোটচাঁদপুর বাজার, ঝিনাইদহ",
      "schedule": "আম মৌসুমে প্রতিদিন ভোর ৫টা–দুপুর ১টা"
    },
    {
      "name": "গান্না ফুল বাজার",
      "location": "কালীগঞ্জ উপজেলা",
      "schedule": "প্রতিদিন ভোর ৪টা–সকাল ৮টা"
    }
  ],
  "famousFor": [
    "আম্রপালি আম",
    "হিমসাগর আম",
    "ফুলচাষ",
    "সবজি"
  ],
  "tags": [
    "ঝিনাইদহ",
    "আম",
    "ফুল",
    "কোটচাঁদপুর",
    "কালীগঞ্জ"
  ]
},
  {
  "slug": "chuadanga",
  "name": "Chuadanga",
  "nameBn": "চুয়াডাঙ্গা",
  "division": "Khulna Division",
  "divisionSlug": "khulna",
  "description": "সীমান্তবর্তী চুয়াডাঙ্গা দেশের বৃহত্তম ভুট্টা ও উন্নত জাতের মিষ্টি পানের আড়ত আলমডাঙ্গার জন্য খ্যাত।",
  "specialProducts": [
    {
      "name": "Yellow Maize / Corn",
      "nameBn": "উন্নত পুষ্টিকর হলুদ ভুট্টা",
      "season": "শীত-বসন্ত (ফেব্রুয়ারি–মে)",
      "priceRange": "২৫–৪৫ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১৮–৩২ টাকা/কেজি",
      "description": "উচ্চমানের শুকনো দানাদার ভুট্টা, যা খাদ্য ও পোল্ট্রি শিল্পে ব্যাপকভাবে ব্যবহৃত।",
      "bestQuality": "আলমডাঙ্গা ও দামুড়হুদা উপজেলা"
    },
    {
      "name": "Betel Leaf",
      "nameBn": "চুয়াডাঙ্গার মিঠা পান",
      "season": "সারা বছর",
      "priceRange": "৬০–১৬০ টাকা/বিড়া",
      "unit": "বিড়া",
      "wholesalePrice": "৪০–১১০ টাকা/বিড়া",
      "description": "সুস্বাদু পাতলা জাতের মিঠা পান।",
      "bestQuality": "জীবননগর ও আলমডাঙ্গা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "আলমডাঙ্গা পাইকারি হাট (দক্ষিণ-পশ্চিমাঞ্চলের অন্যতম বৃহৎ)",
      "location": "আলমডাঙ্গা রেলওয়ে স্টেশন সংলগ্ন",
      "schedule": "প্রতি বুধ ও শনিবার সকাল ৭টা–বিকাল ৫টা",
      "contact": "০১৭২৪-XXXXXX"
    },
    {
      "name": "চুয়াডাঙ্গা বড় বাজার",
      "location": "চুয়াডাঙ্গা শহর",
      "schedule": "প্রতিদিন সকাল ৬টা–সন্ধ্যা ৮টা"
    }
  ],
  "famousFor": [
    "ভুট্টা উৎপাদন",
    "মিঠা পান",
    "আলমডাঙ্গা হাট",
    "আম"
  ],
  "tags": [
    "চুয়াডাঙ্গা",
    "ভুট্টা",
    "পান",
    "আলমডাঙ্গা",
    "কৃষি"
  ]
},
  {
  "slug": "meherpur",
  "name": "Meherpur",
  "nameBn": "মেহেরপুর",
  "division": "Khulna Division",
  "divisionSlug": "khulna",
  "description": "ঐতিহাসিক মুজিবনগরের মেহেরপুর সুস্বাদু বোম্বাই লিচু, ল্যাংড়া আম এবং উন্নত জাতের কাঁচামরিচ ও সবজির জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Bombay and China-3 Lychee",
      "nameBn": "মুজিবনগরের মিষ্টি বোম্বাই লিচু",
      "season": "গ্রীষ্মকাল (মে–জুন)",
      "priceRange": "১৮০–৩৮০ টাকা/১০০ পিস",
      "unit": "১০০ পিস",
      "wholesalePrice": "১৩০–২৮০ টাকা/১০০ পিস",
      "description": "টকটকে লাল রঙের রসালো ও মিষ্টি বোম্বাই লিচু। অসাধারণ মিষ্টতা।",
      "bestQuality": "মুজিবনগর ও মেহেরপুর সদর"
    },
    {
      "name": "Langra Mango",
      "nameBn": "ঐতিহ্যবাহী ল্যাংড়া ও ফজলি আম",
      "season": "গ্রীষ্মকাল (জুন–আগস্ট)",
      "priceRange": "৬০–১১০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৪০–৮০ টাকা/কেজি",
      "description": "রসালো, পাতলা চামড়া ও তীব্র সুগন্ধযুক্ত আসল ল্যাংড়া আম।",
      "bestQuality": "গাংনী ও মুজিবনগর উপজেলা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "গাংনী সবজি ও ফল পাইকারি আড়ত",
      "location": "গাংনী বাজার, মেহেরপুর",
      "schedule": "প্রতিদিন ভোর ৫টা–দুপুর ১টা"
    },
    {
      "name": "মুজিবনগর আম-লিচুর হাট",
      "location": "মুজিবনগর আম্রকানন এলাকা",
      "schedule": "মৌসুমে প্রতিদিন সকাল"
    }
  ],
  "famousFor": [
    "বোম্বাই লিচু",
    "ল্যাংড়া আম",
    "সবজি আড়ত",
    "মুজিবনগর স্মৃতিসৌধ"
  ],
  "tags": [
    "মেহেরপুর",
    "মুজিবনগর",
    "লিচু",
    "আম",
    "ল্যাংড়া"
  ]
},
  {
  "slug": "habiganj",
  "name": "Habiganj",
  "nameBn": "হবিগঞ্জ",
  "division": "Sylhet Division",
  "divisionSlug": "sylhet",
  "description": "হবিগঞ্জ বাহুবল ও চুনারুঘাটের সুমিষ্টি পাহাড়ি আনারস, সাতকড়া লেবু ও সুগন্ধি চায়ের বাগানের জন্য খ্যাত।",
  "specialProducts": [
    {
      "name": "Hill Pineapple",
      "nameBn": "বাহুবলের পাহাড়ি হানিকুইন আনারস",
      "season": "বর্ষাকাল (মে–সেপ্টেম্বর)",
      "priceRange": "৩৫–৭০ টাকা/পিস",
      "unit": "পিস",
      "wholesalePrice": "২৫–৫০ টাকা/পিস",
      "description": "রসালো ও চিনির মতো মিষ্টি হানিকুইন জাতের পাহাড়ি আনারস। সম্পূর্ণ ফরমালিনমুক্ত প্রাকৃতিক ফল।",
      "bestQuality": "বাহুবল ও চুনারুঘাট পাহাড়ি অঞ্চল"
    },
    {
      "name": "Satkara",
      "nameBn": "সিলেটি ঐতিহ্যবাহী সাতকড়া",
      "season": "শীতকাল (অক্টোবর–ফেব্রুয়ারি)",
      "priceRange": "৫০–১২০ টাকা/পিস",
      "unit": "পিস",
      "wholesalePrice": "৩৫–৯০ টাকা/পিস",
      "description": "মাংস ও মাছ রান্নায় অতুলনীয় সুবাস প্রদানকারী বিশেষ টক ফল সাতকড়া। আচার তৈরিতে সেরা।",
      "bestQuality": "চুনারুঘাট ও মাধবপুর"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "শায়েস্তাগঞ্জ পাইকারি ফল আড়ত",
      "location": "শায়েস্তাগঞ্জ জংশন মোড়, হবিগঞ্জ",
      "schedule": "প্রতিদিন ভোর ৫টা–সন্ধ্যা ৭টা"
    },
    {
      "name": "চুনারুঘাট আনারস বাজার",
      "location": "চুনারুঘাট উপজেলা",
      "schedule": "মৌসুমে সোম ও শুক্রবার সকাল"
    }
  ],
  "famousFor": [
    "পাহাড়ি আনারস",
    "সাতকড়া",
    "চা বাগান",
    "রাবার বাগান"
  ],
  "tags": [
    "হবিগঞ্জ",
    "আনারস",
    "সাতকড়া",
    "চা",
    "সিলেট বিভাগ"
  ]
},
  {
  "slug": "sunamganj",
  "name": "Sunamganj",
  "nameBn": "সুনামগঞ্জ",
  "division": "Sylhet Division",
  "divisionSlug": "sylhet",
  "description": "টাঙ্গুয়ার হাওরের রানি সুনামগঞ্জ। মুক্ত জলাশয়ের সুস্বাদু দেশি মাছ, পাহাড়ি খাসিয়া পান ও শিমুল বাগানের জন্য বিশ্বখ্যাত।",
  "specialProducts": [
    {
      "name": "Tanguar Haor Fish",
      "nameBn": "টাঙ্গুয়ার হাওরের তাজা মাছ",
      "season": "বর্ষা-শীতকাল (আগস্ট–ফেব্রুয়ারি)",
      "priceRange": "৩৫০–১,৮০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২৬০–১,৩৫০ টাকা/কেজি",
      "description": "রামসার সাইট টাঙ্গুয়ার হাওরের প্রাকৃতিক পরিবেশে বেড়ে ওঠা বড় চিতল, আইড়, মহাশোল, বোয়াল ও বাঘাইড় মাছ।",
      "bestQuality": "তাহিরপুর ও ধর্মপাশা হাওর এলাকা"
    },
    {
      "name": "Khasia Betel Leaf",
      "nameBn": "পাহাড়ি খাঁটি খাসিয়া পান",
      "season": "সারা বছর",
      "priceRange": "৮০–১৮০ টাকা/মুঠা",
      "unit": "মুঠা",
      "wholesalePrice": "৬০–১৩০ টাকা/মুঠা",
      "description": "পাহাড়ি গাছে লতানো খাসিয়া পান। তীব্র ঝাঁঝ ও পুষ্টিগুণে সমৃদ্ধ।",
      "bestQuality": "তাহিরপুর ও ছাতক সীমান্ত এলাকা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "তাহিরপুর হাওর মৎস্য আড়ত",
      "location": "তাহিরপুর সদর ঘাট, সুনামগঞ্জ",
      "schedule": "প্রতিদিন ভোর ৪টা–সকাল ৯টা",
      "contact": "০১৭৩১-XXXXXX"
    },
    {
      "name": "সুনামগঞ্জ সুরমা মাছের আড়ত",
      "location": "ওয়েজখালী, সুনামগঞ্জ শহর",
      "schedule": "প্রতিদিন ভোর ৫টা–সকাল ১০টা"
    }
  ],
  "famousFor": [
    "টাঙ্গুয়ার হাওরের মাছ",
    "খাসিয়া পান",
    "চুনাপাথর",
    "শিমুল বাগান"
  ],
  "tags": [
    "সুনামগঞ্জ",
    "টাঙ্গুয়ার হাওর",
    "মাছ",
    "খাসিয়া পান",
    "হাওর"
  ]
},
  {
  "slug": "patuakhali",
  "name": "Patuakhali",
  "nameBn": "পটুয়াখালী",
  "division": "Barishal Division",
  "divisionSlug": "barisal",
  "description": "সাগরকন্যা কুয়াকাটার পটুয়াখালী সামুদ্রিক রূপচাঁদা, ইলিশ ও টুনা মাছ এবং উপকূলীয় মিষ্টি নারিকেলের জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Sea Fish (Rupchanda & Tuna)",
      "nameBn": "কুয়াকাটার সামুদ্রিক রূপচাঁদা ও টুনা মাছ",
      "season": "শীতকাল (অক্টোবর–মার্চ)",
      "priceRange": "৬৫০–১,৬০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৫০০–১,২০০ টাকা/কেজি",
      "description": "গভীর সমুদ্র থেকে আহরিত তাজা রূপচাঁদা, কোরাল, টুনা ও লাক্ষ্যা মাছ। উচ্চ প্রোটিন ও ওমেগা-৩ যুক্ত।",
      "bestQuality": "মহীপুর ও আলীপুর মৎস্য বন্দর"
    },
    {
      "name": "Coastal Coconut",
      "nameBn": "উপকূলীয় সুস্বাদু মিষ্টি নারিকেল",
      "season": "সারা বছর",
      "priceRange": "৪০–৮০ টাকা/পিস",
      "unit": "পিস",
      "wholesalePrice": "২৮–৫৫ টাকা/পিস",
      "description": "উপকূলের লবণাক্ত বাতাসের ছোঁয়ায় মিষ্টি পানির সুস্বাদু ডাব ও পুরু শাঁসযুক্ত নারিকেল।",
      "bestQuality": "কলাপাড়া ও গলাচিপা উপজেলা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "মহীপুর-আলীপুর মৎস্য অবতরণ কেন্দ্র (দক্ষিণাঞ্চলের প্রধান সামুদ্রিক আড়ত)",
      "location": "মহীপুর, কলাপাড়া, পটুয়াখালী",
      "schedule": "প্রতিদিন ভোর ৩টা–সকাল ১০টা",
      "contact": "০১৭২৮-XXXXXX"
    },
    {
      "name": "পটুয়াখালী পুরান বাজার",
      "location": "পটুয়াখালী লঞ্চঘাট সংলগ্ন",
      "schedule": "প্রতিদিন সকাল ৬টা–সন্ধ্যা ৭টা"
    }
  ],
  "famousFor": [
    "সামুদ্রিক রূপচাঁদা মাছ",
    "ইলিশ",
    "কুয়াকাটা সৈকত",
    "নারিকেল"
  ],
  "tags": [
    "পটুয়াখালী",
    "কুয়াকাটা",
    "রূপচাঁদা",
    "মহীপুর",
    "সামুদ্রিক মাছ"
  ]
},
  {
  "slug": "pirojpur",
  "name": "Pirojpur",
  "nameBn": "পিরোজপুর",
  "division": "Barishal Division",
  "divisionSlug": "barisal",
  "description": "নদ-নদী বেষ্টিত পিরোজপুর কাউখালীর সুস্বাদু সুপারি, মিষ্টি আমড়া এবং কাঠ শিল্পের জন্য দেশজুড়ে পরিচিত।",
  "specialProducts": [
    {
      "name": "Barisal Amra",
      "nameBn": "স্বরূপকাঠির সুমিষ্টি আমড়া",
      "season": "বর্ষা-শরৎ (জুলাই–অক্টোবর)",
      "priceRange": "৪০–৮০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২৫–৫৫ টাকা/কেজি",
      "description": "বিখ্যাত বরিশালি মিষ্টি ও রসালো আমড়া। শাঁস নরম ও মিষ্টি।",
      "bestQuality": "নেছারাবাদ (স্বরূপকাঠি) ও কাউখালী"
    },
    {
      "name": "Kawkhali Betel Nut",
      "nameBn": "কাউখালীর সেরা মানের সুপারি",
      "season": "শরৎ-শীতকাল (অক্টোবর–জানুয়ারি)",
      "priceRange": "৪৫০–৭৫০ টাকা/কাউন",
      "unit": "কাউন",
      "wholesalePrice": "৩৫০–৫৫০ টাকা/কাউন",
      "description": "দেশের অন্যতম সেরা মানের দানাদার ও সুমিষ্টি সুপারি। পাইকারি মোকাম হিসেবে বিখ্যাত।",
      "bestQuality": "কাউখালী ও নাজিরপুর"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "কাউখালী সুপারি মোকাম",
      "location": "কাউখালী বাজার ঘাট, পিরোজপুর",
      "schedule": "সোম ও শুক্রবার সকাল ৬টা–দুপুর ১টা"
    },
    {
      "name": "স্বরূপকাঠি আমড়া ও ফল হাট",
      "location": "নেছারাবাদ, পিরোজপুর",
      "schedule": "মৌসুমে প্রতিদিন ভোর ৫টা–বেলা ১১টা"
    }
  ],
  "famousFor": [
    "স্বরূপকাঠির আমড়া",
    "কাউখালীর সুপারি",
    "ভাসমান কাঠ হাট",
    "নারিকেল"
  ],
  "tags": [
    "পিরোজপুর",
    "আমড়া",
    "সুপারি",
    "কাউখালী",
    "স্বরূপকাঠি"
  ]
},
  {
  "slug": "barguna",
  "name": "Barguna",
  "nameBn": "বরগুনা",
  "division": "Barishal Division",
  "divisionSlug": "barisal",
  "description": "উপকূলীয় জেলা বরগুনা পাথরঘাটার বিখ্যাত সামুদ্রিক শুঁটকি পল্লী এবং তাজা রূপালী ইলিশের জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Dry Fish (Shutki)",
      "nameBn": "পাথরঘাটার অর্গানিক শুঁটকি মাছ",
      "season": "শীতকাল (অক্টোবর–মার্চ)",
      "priceRange": "৪০০–২,২০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৩০০–১,৭০০ টাকা/কেজি",
      "description": "ছুরি, লইট্যা, চিংড়ি ও রূপচাঁদার খাঁটি রোদে শুকানো শুঁটকি। কোনো কীটনাশক বা রাসায়নিক ছাড়া প্রাকৃতিকভাবে সংরক্ষিত।",
      "bestQuality": "পাথরঘাটা শুঁটকি পল্লী ও লালদিয়া"
    },
    {
      "name": "Hilsa and Vetki Fish",
      "nameBn": "বঙ্গোপসাগরের তাজা ইলিশ ও ভেটকি",
      "season": "বর্ষা ও শীতকাল",
      "priceRange": "৭০০–২,২০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৫৫০–১,৭৫০ টাকা/কেজি",
      "description": "পাথরঘাটা মৎস্য অবতরণ কেন্দ্র থেকে সরাসরি প্রাপ্ত সামুদ্রিক তাজা মাছ।",
      "bestQuality": "পাথরঘাটা বিষখালী নদী মোহনা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "পাথরঘাটা বিএফডিসি মৎস্য অবতরণ কেন্দ্র (দেশের বৃহত্তম পাইকারি ঘাট)",
      "location": "পাথরঘাটা, বরগুনা",
      "schedule": "প্রতিদিন ভোর ৩টা–সকাল ১০টা",
      "contact": "০১৭৩৬-XXXXXX"
    },
    {
      "name": "পাথরঘাটা শুঁটকি পাইকারি মোকাম",
      "location": "পদ্মা সুইচগেট শুঁটকি পল্লী",
      "schedule": "শীত মৌসুমে প্রতিদিন সকাল"
    }
  ],
  "famousFor": [
    "অর্গানিক শুঁটকি",
    "পাথরঘাটা মৎস্য ঘাট",
    "সামুদ্রিক ইলিশ",
    "সুন্দরবন সংলগ্ন চর"
  ],
  "tags": [
    "বরগুনা",
    "পাথরঘাটা",
    "শুঁটকি",
    "ইলিশ",
    "মৎস্য বন্দর"
  ]
},
  {
  "slug": "jhalokati",
  "name": "Jhalokati",
  "nameBn": "ঝালকাঠি",
  "division": "Barishal Division",
  "divisionSlug": "barisal",
  "description": "শতবর্ষী ঐতিহ্যবাহী ভিমরুলির ভাসমান পেয়ারা বাজার এবং সুস্বাদু আমড়া ও শীতলপাটির জন্য ঝালকাঠি বিশ্বখ্যাত।",
  "specialProducts": [
    {
      "name": "Floating Market Guava",
      "nameBn": "ভিমরুলির ভাসমান হাটের পেয়ারা",
      "season": "বর্ষাকাল (জুলাই–সেপ্টেম্বর)",
      "priceRange": "২৫–৫৫ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১৫–৩৫ টাকা/কেজি (নৌকায় মণ হিসেবে)",
      "description": "বাংলার ভেনিসখ্যাত ভিমরুলির শত শত নৌকার ভাসমান বাজারে বিক্রি হওয়া খাঁটি সতেজ দেশি পেয়ারা।",
      "bestQuality": "ভিমরুলি, কীর্তিপাশা ও আটঘর-কুড়িয়ানা"
    },
    {
      "name": "Shitalpati",
      "nameBn": "রাজাপুরের ঐতিহ্যবাহী শীতলপাটি",
      "season": "সারা বছর",
      "priceRange": "৮০০–৪,৫০০ টাকা/পিস",
      "unit": "পিস",
      "wholesalePrice": "৬০০–৩,২০০ টাকা/পিস",
      "description": "মুর্থা গাছের বেত দিয়ে নিপুণভাবে তৈরি প্রাকৃতিক শীতলপাটি। গ্রীষ্মকালে বিছানায় শরীর ঠান্ডা রাখে। ইউনেস্কো সাংস্কৃতিক ঐতিহ্য।",
      "bestQuality": "রাজাপুর উপজেলা ও নলছিটি"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "ভিমরুলি ভাসমান পেয়ারা ও আমড়া হাট (আন্তর্জাতিক খ্যাতিসম্পন্ন)",
      "location": "ভিমরুলি খাল, ঝালকাঠি সদর",
      "schedule": "জুলাই–সেপ্টেম্বর প্রতিদিন সকাল ৬টা–দুপুর ১টা"
    },
    {
      "name": "ঝালকাঠি সদর বড় বাজার",
      "location": "সুগন্ধা নদী তীর, ঝালকাঠি",
      "schedule": "প্রতিদিন সকাল ৭টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "ভাসমান পেয়ারা বাজার",
    "শীতলপাটি",
    "আমড়া",
    "সুগন্ধা নদী"
  ],
  "tags": [
    "ঝালকাঠি",
    "পেয়ারা",
    "ভাসমান বাজার",
    "ভিমরুলি",
    "শীতলপাটি"
  ]
},
  {
  "slug": "nilphamari",
  "name": "Nilphamari",
  "nameBn": "নীলফামারী",
  "division": "Rangpur Division",
  "divisionSlug": "rangpur",
  "description": "উত্তরাঞ্চলের নীলফামারী উন্নত জাতের হলুদ ভুট্টা, তিস্তার সুস্বাদু বৈরালী মাছ এবং সৈয়দপুরের বৃহত্তম রেলওয়ে বাণিজ্যিক মোকামের জন্য খ্যাত।",
  "specialProducts": [
    {
      "name": "Teesta Bairali Fish",
      "nameBn": "তিস্তা নদীর বিখ্যাত বৈরালী মাছ",
      "season": "বর্ষা ও শরৎকাল (জুলাই–নভেম্বর)",
      "priceRange": "৪০০–৯৫০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৩০০–৭৫০ টাকা/কেজি",
      "description": "তিস্তা নদীর স্বচ্ছ খরস্রোতা পানির ক্ষুদ্র সুস্বাদু মাছ। অসাধারণ স্বাদ ও সুঘ্রাণ।",
      "bestQuality": "ডিমলা তিস্তা ব্যারেজ অঞ্চল"
    },
    {
      "name": "Corn / Maize",
      "nameBn": "উন্নত দানাদার ভুট্টা",
      "season": "শীত-বসন্ত (মার্চ–জুন)",
      "priceRange": "২৪–৪২ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১৮–৩০ টাকা/কেজি",
      "description": "জলঢাকা ও ডিমলার বিস্তীর্ণ চরে উৎপাদিত উচ্চমানের পুষ্টিকর ভুট্টা।",
      "bestQuality": "জলঢাকা ও ডোমার উপজেলা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "সৈয়দপুর রেলওয়ে পাইকারি মোকাম (উত্তরাঞ্চলের প্রধান বাণিজ্যিক কেন্দ্র)",
      "location": "সৈয়দপুর পৌর শহর",
      "schedule": "প্রতিদিন সকাল ৮টা–রাত ৯টা"
    },
    {
      "name": "জলঢাকা কৃষি পাইকারি হাট",
      "location": "জলঢাকা বাজার",
      "schedule": "রবি ও বৃহস্পতিবার সকাল ৭টা–বিকাল ৪টা"
    }
  ],
  "famousFor": [
    "তিস্তার বৈরালী মাছ",
    "ভুট্টা",
    "সৈয়দপুর মোকাম",
    "নীল চাষের ইতিহাস"
  ],
  "tags": [
    "নীলফামারী",
    "সৈয়দপুর",
    "বৈরালী মাছ",
    "ভুট্টা",
    "তিস্তা"
  ]
},
  {
  "slug": "kurigram",
  "name": "Kurigram",
  "nameBn": "কুড়িগ্রাম",
  "division": "Rangpur Division",
  "divisionSlug": "rangpur",
  "description": "১৬টি নদ-নদী বিধৌত কুড়িগ্রাম চরাঞ্চলের বালুমাটির মিষ্টি লাল আলু, পাট এবং ব্রহ্মপুত্রের তাজা দেশি মাছের জন্য খ্যাত।",
  "specialProducts": [
    {
      "name": "Sweet Red Potato",
      "nameBn": "চরের সুস্বাদু মিষ্টি লাল আলু",
      "season": "শীতকাল (ডিসেম্বর–মার্চ)",
      "priceRange": "২০–৪৫ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১৩–৩০ টাকা/কেজি",
      "description": "ব্রহ্মপুত্র ও তিস্তার পলিমাটিতে চাষ করা পুষ্টিকর ও মিষ্টি স্বাদের অর্গানিক মিষ্টি আলু।",
      "bestQuality": "চিলমারী ও রৌমারী চরাঞ্চল"
    },
    {
      "name": "Brahmaputra River Fish",
      "nameBn": "ব্রহ্মপুত্রের তাজা বাঘাইড় ও রিঠা মাছ",
      "season": "বর্ষা-শীতকাল",
      "priceRange": "৩৫০–১,৪০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২৬০–১,১০০ টাকা/কেজি",
      "description": "ব্রহ্মপুত্র নদের বিশাল তাজা বাঘাইড়, বোয়াল ও রিঠা মাছ।",
      "bestQuality": "চিলমারী বন্দর ও নাগেশ্বরী ঘাট"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "চিলমারী বন্দর পাইকারি হাট",
      "location": "চিলমারীঘাট, কুড়িগ্রাম",
      "schedule": "শনি ও মঙ্গলবার ভোর ৫টা–দুপুর ১টা"
    },
    {
      "name": "কুড়িগ্রাম জিয়া বাজার",
      "location": "কুড়িগ্রাম শহর",
      "schedule": "প্রতিদিন সকাল ৬টা–সন্ধ্যা ৮টা"
    }
  ],
  "famousFor": [
    "চরের মিষ্টি আলু",
    "ব্রহ্মপুত্রের মাছ",
    "পাট",
    "চিলমারী বন্দর"
  ],
  "tags": [
    "কুড়িগ্রাম",
    "মিষ্টি আলু",
    "ব্রহ্মপুত্র",
    "চিলমারী",
    "মাছ"
  ]
},
  {
  "slug": "lalmonirhat",
  "name": "Lalmonirhat",
  "nameBn": "লালমনিরহাট",
  "division": "Rangpur Division",
  "divisionSlug": "rangpur",
  "description": "সীমান্তবর্তী তিস্তার জেলা লালমনিরহাট হাতীবান্ধার তীব্র ঝাঁঝালো কাঁচামরিচ, মিষ্টি ভুট্টা ও তামাকের জন্য পরিচিত।",
  "specialProducts": [
    {
      "name": "Spicy Green Chili",
      "nameBn": "হাতীবান্ধার তীব্র ঝাঁঝালো কাঁচামরিচ",
      "season": "সারা বছর (বিশেষত শীত-গ্রীষ্ম)",
      "priceRange": "৪০–১৬০ টাকা/কেজি (বাজার দর অনুযায়ী)",
      "unit": "কেজি",
      "wholesalePrice": "২৫–১১০ টাকা/কেজি",
      "description": "তিস্তার চরের দোআঁশ মাটিতে উৎপাদিত গাঢ় সবুজ রঙের তীব্র ঝালযুক্ত কাঁচামরিচ। সারাদেশের বাজারে যায়।",
      "bestQuality": "হাতীবান্ধা ও পাটগ্রাম উপজেলা"
    },
    {
      "name": "Char Sweet Pumpkin",
      "nameBn": "তিস্তার চরের মিষ্টি কুমড়া",
      "season": "শীত-বসন্ত (জানুয়ারি–মে)",
      "priceRange": "২০–৪০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১২–২৫ টাকা/কেজি",
      "description": "পলিমাটিতে জন্মানো বড় আকারের সুস্বাদু মিষ্টি কুমড়া। দীর্ঘদিন সংরক্ষণ করা যায়।",
      "bestQuality": "আদিতমারী ও কালীগঞ্জ চর অঞ্চল"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "হাতীবান্ধা মরিচের পাইকারি মোকাম",
      "location": "হাতীবান্ধা বাজার, লালমনিরহাট",
      "schedule": "প্রতিদিন ভোর ৫টা–বেলা ১১টা",
      "contact": "০১৭৫২-XXXXXX"
    },
    {
      "name": "লালমনিরহাট রেলওয়ে বাজার",
      "location": "লালমনিরহাট সদর",
      "schedule": "প্রতিদিন সকাল ৬টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "কাঁচামরিচ",
    "মিষ্টি কুমড়া",
    "ভুট্টা",
    "তিস্তা ব্যারেজ"
  ],
  "tags": [
    "লালমনিরহাট",
    "কাঁচামরিচ",
    "হাতীবান্ধা",
    "তিস্তা",
    "কৃষি"
  ]
},
  {
  "slug": "thakurgaon",
  "name": "Thakurgaon",
  "nameBn": "ঠাকুরগাঁও",
  "division": "Rangpur Division",
  "divisionSlug": "rangpur",
  "description": "উত্তরের শান্ত জেলা ঠাকুরগাঁও সুস্বাদু চায়না-৩ ও বেদানা লিচু, চিনিকলের খাঁটি লাল চিনি এবং আম্রপালি আমের জন্য খ্যাত।",
  "specialProducts": [
    {
      "name": "China-3 and Bedana Lychee",
      "nameBn": "রাণীশংকৈলের চায়না-৩ ও বেদানা লিচু",
      "season": "গ্রীষ্মকাল (মে–জুন)",
      "priceRange": "২৫০–৫০০ টাকা/১০০ পিস",
      "unit": "১০০ পিস",
      "wholesalePrice": "১৮০–৩৮০ টাকা/১০০ পিস",
      "description": "অত্যন্ত সুমিষ্টি, রসালো ও ছোট বিচির সেরা জাতের চায়না-৩ লিচু। দিনাজপুরের মতোই উৎকৃষ্ট মান।",
      "bestQuality": "রাণীশংকৈল ও পীরগঞ্জ উপজেলা"
    },
    {
      "name": "Thakurgaon Sugar Mill Sugar",
      "nameBn": "চিনিকলের প্রাকৃতিক লাল চিনি",
      "season": "শীত-বসন্ত",
      "priceRange": "১৩০–১৭০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "১০৫–১৪০ টাকা/কেজি",
      "description": "রাসায়নিক ব্লিচিং ছাড়া আখের খাঁটি নির্যাস থেকে তৈরি পুষ্টিকর লাল চিনি।",
      "bestQuality": "ঠাকুরগাঁও সুগার মিল এলাকা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "রাণীশংকৈল লিচুর পাইকারি মোকাম",
      "location": "রাণীশংকৈল বাজার, ঠাকুরগাঁও",
      "schedule": "মৌসুমে প্রতিদিন ভোর ৫টা–সন্ধ্যা ৭টা"
    },
    {
      "name": "ঠাকুরগাঁও পুরান বাজার",
      "location": "ঠাকুরগাঁও শহর",
      "schedule": "প্রতিদিন সকাল ৭টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "চায়না-৩ লিচু",
    "চিনিকলের লাল চিনি",
    "আম্রপালি আম",
    "ধান"
  ],
  "tags": [
    "ঠাকুরগাঁও",
    "লিচু",
    "চায়না-৩",
    "লাল চিনি",
    "রাণীশংকৈল"
  ]
},
  {
  "slug": "panchagarh",
  "name": "Panchagarh",
  "nameBn": "পঞ্চগড়",
  "division": "Rangpur Division",
  "divisionSlug": "rangpur",
  "description": "হিমালয়কন্যা পঞ্চগড় তেতুলিয়ার সমতল ভূমির অর্গানিক চা বাগান, খাঁটি সুমিষ্টি পাহাড়ি কমলা এবং কাঞ্চনজঙ্ঘার দৃশ্যপটের জন্য বিখ্যাত।",
  "specialProducts": [
    {
      "name": "Plain Land Organic Tea",
      "nameBn": "তেতুলিয়ার সমতল ভূমির অর্গানিক চা পাতা",
      "season": "মার্চ–নভেম্বর",
      "priceRange": "৩৫০–১,২০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "২৬০–৯৫০ টাকা/কেজি (গ্রেড ভেদে)",
      "description": "দেশের সর্বউত্তরে সমতল ভূমিতে চাষকৃত সবুজ ও কালো চা। অর্গানিক পদ্ধতিতে উৎপাদিত অনন্য লিকার ও সুবাসযুক্ত।",
      "bestQuality": "তেতুলিয়া চা বাগান অঞ্চল ও কাজী অ্যান্ড কাজী অর্গানিক টি এস্টেট"
    },
    {
      "name": "Northern Orange",
      "nameBn": "তেতুলিয়ার মিষ্টি কমলালেবু",
      "season": "শীতকাল (নভেম্বর–জানুয়ারি)",
      "priceRange": "১৮০–৩০০ টাকা/ডজন",
      "unit": "ডজন",
      "wholesalePrice": "১৩০–২২০ টাকা/ডজন",
      "description": "হিমালয়ের শীতল বাতাসের ছোঁয়ায় মিষ্টি ও রসালো পাহাড়ি জাতের কমলালেবু।",
      "bestQuality": "তেতুলিয়া ও বাংলাবান্ধা সীমান্ত এলাকা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "তেতুলিয়া চা ও কৃষি মোকাম",
      "location": "তেতুলিয়া বাজার, পঞ্চগড়",
      "schedule": "প্রতিদিন সকাল ৭টা–সন্ধ্যা ৭টা",
      "contact": "০১৭৬০-XXXXXX"
    },
    {
      "name": "পঞ্চগড় বড় বাজার",
      "location": "পঞ্চগড় পৌর শহর",
      "schedule": "প্রতিদিন সকাল ৬টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "সমতল ভূমির চা",
    "তেতুলিয়ার কমলা",
    "বাংলাবান্ধা স্থলবন্দর",
    "নদীর পাথর"
  ],
  "tags": [
    "পঞ্চগড়",
    "তেতুলিয়া",
    "চা",
    "কমলা",
    "অর্গানিক চা",
    "হিমালয়"
  ]
},
  {
  "slug": "jamalpur",
  "name": "Jamalpur",
  "nameBn": "জামালপুর",
  "division": "Mymensingh Division",
  "divisionSlug": "mymensingh",
  "description": "যমুনার পাড়ের জামালপুর ইসলামপুরের শতবর্ষী ঐতিহ্যবাহী কাঁসার হস্তশিল্প, নকশী কাঁথা এবং খাঁটি ঘানির সরিষার তেলের জন্য খ্যাত।",
  "specialProducts": [
    {
      "name": "Bell Metal Utensils (Kasha)",
      "nameBn": "ইসলামপুরের খাঁটি কাঁসা-পিতলের হস্তশিল্প",
      "season": "সারা বছর",
      "priceRange": "১,২০০–৩,৫০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৯০০–২,৮০০ টাকা/কেজি",
      "description": "ইসলামপুরের বংশপরম্পরায় তৈরি খাঁটি কাঁসার থালা, বাটি, গ্লাস ও সাজসজ্জা সামগ্রী। টেকসই ও ঐতিহ্যবাহী।",
      "bestQuality": "ইসলামপুর কাঁসারু পল্লী"
    },
    {
      "name": "Nakshi Kantha",
      "nameBn": "হাতে সেলাই করা আসল নকশী কাঁথা",
      "season": "সারা বছর",
      "priceRange": "১,২০০–১২,০০০ টাকা/পিস",
      "unit": "পিস",
      "wholesalePrice": "৮০০–৯,০০০ টাকা/পিস",
      "description": "পল্লী রমণীদের নিখুঁত হাতের সুই-সুতার সুদৃশ্য নকশা খচিত ঐতিহ্যবাহী কাঁথা।",
      "bestQuality": "জামালপুর সদর ও মেলান্দহ"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "ইসলামপুর কাঁসা-পিতল পাইকারি মোকাম",
      "location": "ইসলামপুর বাজার, জামালপুর",
      "schedule": "প্রতিদিন সকাল ৯টা–রাত ৮টা"
    },
    {
      "name": "জামালপুর আনন্দ বাজার",
      "location": "জামালপুর শহর",
      "schedule": "প্রতিদিন সকাল ৭টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "ইসলামপুরের কাঁসা শিল্প",
    "নকশী কাঁথা",
    "সরিষার তেল",
    "ছানার পোলাও"
  ],
  "tags": [
    "জামালপুর",
    "ইসলামপুর",
    "কাঁসা",
    "নকশী কাঁথা",
    "ময়মনসিংহ বিভাগ"
  ]
},
  {
  "slug": "sherpur",
  "name": "Sherpur",
  "nameBn": "শেরপুর",
  "division": "Mymensingh Division",
  "divisionSlug": "mymensingh",
  "description": "গারো পাহাড়ের পাদদেশের জেলা শেরপুর সুগন্ধি তুলশীমালা চাল (শেরপুরের জিআই পণ্য), পাহাড়ি বুনো মধু এবং ছানার পায়েসের জন্য খ্যাত।",
  "specialProducts": [
    {
      "name": "Tulshimala Aromatic Rice",
      "nameBn": "শেরপুরের ঐতিহ্যবাহী সুগন্ধি তুলশীমালা চাল",
      "season": "হেমন্ত-শীতকাল (নভেম্বর–ফেব্রুয়ারি)",
      "priceRange": "১১০–১৬০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৮৫–১৩০ টাকা/কেজি",
      "description": "ছোট দানার তীব্র সুগন্ধযুক্ত অতি সুস্বাদু ঐতিহ্যবাহী চাল। পোলাও, বিরিয়ানি ও পায়েসের জন্য দেশের সেরা চাল। শেরপুরের নিজস্ব জিআই পণ্য।",
      "bestQuality": "ঝিনাইগাতী, নকলা ও নালিতাবাড়ী উপজেলা"
    },
    {
      "name": "Garo Hills Honey",
      "nameBn": "গারো পাহাড়ের পাহাড়ি খাঁটি মধু",
      "season": "বসন্তকাল (মার্চ–মে)",
      "priceRange": "৮০০–১,৪০০ টাকা/কেজি",
      "unit": "কেজি",
      "wholesalePrice": "৬৫০–১,১০০ টাকা/কেজি",
      "description": "গারো পাহাড়ের গভীর বনাঞ্চলের মৌচাক থেকে সংগৃহীত প্রাকৃতিক পাহাড়ি বুনো মধু।",
      "bestQuality": "ঝিনাইগাতী গজনী ও নালিতাবাড়ী মধুটিলা"
    }
  ],
  "wholesaleMarkets": [
    {
      "name": "নকলা তুলশীমালা ধানের পাইকারি আড়ত",
      "location": "নকলা বাজার, শেরপুর",
      "schedule": "রবি ও বুধবার সকাল ৭টা–বিকাল ৪টা"
    },
    {
      "name": "শেরপুর নয়ানী বাজার",
      "location": "শেরপুর পৌর শহর",
      "schedule": "প্রতিদিন সকাল ৬টা–রাত ৮টা"
    }
  ],
  "famousFor": [
    "সুগন্ধি তুলশীমালা চাল",
    "গারো পাহাড়ের মধু",
    "ছানার পায়েস",
    "মধুটিলা ইকো পার্ক"
  ],
  "tags": [
    "শেরপুর",
    "তুলশীমালা চাল",
    "মধু",
    "গারো পাহাড়",
    "জিআই পণ্য"
  ]
}
];

export function getDistrictsByDivision(divisionSlug: string): District[] {
  return districts.filter((d) => d.divisionSlug === divisionSlug);
}

export function getDistrictBySlug(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}

export function getDivisionBySlug(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}

export function searchProducts(query: string): District[] {
  const q = query.toLowerCase();
  return districts.filter(
    (d) =>
      d.nameBn.includes(query) ||
      d.name.toLowerCase().includes(q) ||
      d.tags.some((t) => t.includes(query)) ||
      d.specialProducts.some(
        (p) => p.nameBn.includes(query) || p.name.toLowerCase().includes(q)
      ) ||
      d.famousFor.some((f) => f.includes(query))
  );
}
