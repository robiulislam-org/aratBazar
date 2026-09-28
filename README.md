# আরতবাজার ওয়েবসাইট সেটআপ নির্দেশিকা

## node_modules মুছে ফেলার পরে এই ধাপগুলো অনুসরণ করুন:

### ধাপ ১: Terminal/Command Prompt খুলুন
Windows-এ `Win + R` চাপুন → `cmd` লিখুন → Enter

### ধাপ ২: প্রজেক্ট ফোল্ডারে যান
```
cd "G:\My Drive\aratBazar"
```

### ধাপ ৩: Dependencies install করুন
```
npm install
```
(প্রায় ৩–৫ মিনিট লাগবে)

### ধাপ ৪: Website চালু করুন (Development)
```
npm run dev
```
তারপর browser-এ যান: http://localhost:3000

### ধাপ ৫: Production Build (Deploy করতে)
```
npm run build
npm run start
```

---

## ⚠️ Google Drive সমস্যা এড়াতে

Google Drive-এ `node_modules` sync হলে ফাইল নষ্ট হয়।
এড়াতে করণীয়:

**Option A**: Google Drive Selective Sync
- Google Drive desktop app → Settings → Selective Sync
- `aratBazar/node_modules` ফোল্ডার sync থেকে বাদ দিন

**Option B**: প্রজেক্টটি Google Drive-র বাইরে রাখুন
- যেমন: `C:\Projects\aratBazar`
- শুধু `src/` ফোল্ডার Google Drive-এ রাখুন

---

## Website Routes

| URL | কী পাবেন |
|-----|---------|
| `/` | হোমপেজ |
| `/bibhag` | সব বিভাগ |
| `/bibhag/rajshahi` | রাজশাহী বিভাগ |
| `/jela` | সব জেলা |
| `/jela/chapainawabganj` | চাঁপাইনবাবগঞ্জ (আম + দাম + আড়ত) |
| `/jela/bogura` | বগুড়া (দই + বাজার) |
| `/article` | সব আর্টিকেল |
| `/search?q=আম` | সার্চ রেজাল্ট |
| `/about` | আমাদের সম্পর্কে |

---

## Google Analytics

**Tracking ID**: `G-7DXMHPCQQ0` ✅ সংরক্ষিত আছে
**Google Verification**: `_N0pjK4jsVVQxYeyeZAQp0gebsiRLi9fKjna2i74B1M` ✅

