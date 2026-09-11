export interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  country: string;
  region: 'Asia' | 'Middle East' | 'Europe' | 'Americas' | 'Africa' | 'Oceania';
  isPopular?: boolean;
  isRemittance?: boolean;
}

export const CURRENCIES: CurrencyInfo[] = [
  // Major Remittance & High Traffic (প্রবাসী করিডোর)
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸', country: 'United States', region: 'Americas', isPopular: true, isRemittance: true },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', flag: '🇧🇩', country: 'Bangladesh', region: 'Asia', isPopular: true, isRemittance: true },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', flag: '🇸🇦', country: 'Saudi Arabia', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪', country: 'United Arab Emirates', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك', flag: '🇰🇼', country: 'Kuwait', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'QAR', name: 'Qatari Riyal', symbol: '﷼', flag: '🇶🇦', country: 'Qatar', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'OMR', name: 'Omani Rial', symbol: '﷼', flag: '🇴🇲', country: 'Oman', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'BHD', name: 'Bahraini Dinar', symbol: '.د.ব', flag: '🇧🇭', country: 'Bahrain', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', flag: '🇲🇾', country: 'Malaysia', region: 'Asia', isPopular: true, isRemittance: true },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬', country: 'Singapore', region: 'Asia', isPopular: true, isRemittance: true },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺', country: 'European Union', region: 'Europe', isPopular: true, isRemittance: true },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧', country: 'United Kingdom', region: 'Europe', isPopular: true, isRemittance: true },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳', country: 'India', region: 'Asia', isPopular: true, isRemittance: true },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦', country: 'Canada', region: 'Americas', isPopular: true, isRemittance: true },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺', country: 'Australia', region: 'Oceania', isPopular: true, isRemittance: true },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵', country: 'Japan', region: 'Asia', isPopular: true },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳', country: 'China', region: 'Asia', isPopular: true },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭', country: 'Switzerland', region: 'Europe', isPopular: true },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷', country: 'Turkey', region: 'Europe', isPopular: true },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', flag: '🇵🇰', country: 'Pakistan', region: 'Asia', isPopular: true },

  // Asia & Subcontinent
  { code: 'NPR', name: 'Nepalese Rupee', symbol: '₨', flag: '🇳🇵', country: 'Nepal', region: 'Asia' },
  { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'Rs', flag: '🇱🇰', country: 'Sri Lanka', region: 'Asia' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿', flag: '🇹🇭', country: 'Thailand', region: 'Asia' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', flag: '🇮🇩', country: 'Indonesia', region: 'Asia' },
  { code: 'VND', name: 'Vietnamese Dong', symbol: '₫', flag: '🇻🇳', country: 'Vietnam', region: 'Asia' },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱', flag: '🇵🇭', country: 'Philippines', region: 'Asia' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷', country: 'South Korea', region: 'Asia' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', flag: '🇭🇰', country: 'Hong Kong', region: 'Asia' },
  { code: 'TWD', name: 'New Taiwan Dollar', symbol: 'NT$', flag: '🇹🇼', country: 'Taiwan', region: 'Asia' },
  { code: 'BND', name: 'Brunei Dollar', symbol: 'B$', flag: '🇧🇳', country: 'Brunei', region: 'Asia' },
  { code: 'MVR', name: 'Maldivian Rufiyaa', symbol: 'Rf', flag: '🇲🇻', country: 'Maldives', region: 'Asia' },
  { code: 'AFN', name: 'Afghan Afghani', symbol: '؋', flag: '🇦🇫', country: 'Afghanistan', region: 'Asia' },
  { code: 'MMK', name: 'Myanmar Kyat', symbol: 'K', flag: '🇲🇲', country: 'Myanmar', region: 'Asia' },
  { code: 'KHR', name: 'Cambodian Riel', symbol: '៛', flag: '🇰🇭', country: 'Cambodia', region: 'Asia' },

  // Middle East
  { code: 'JOD', name: 'Jordanian Dinar', symbol: 'JD', flag: '🇯🇴', country: 'Jordan', region: 'Middle East' },
  { code: 'LBP', name: 'Lebanese Pound', symbol: 'L£', flag: '🇱🇧', country: 'Lebanon', region: 'Middle East' },
  { code: 'IQD', name: 'Iraqi Dinar', symbol: 'ع.د', flag: '🇮🇶', country: 'Iraq', region: 'Middle East' },
  { code: 'ILS', name: 'Israeli Shekel', symbol: '₪', flag: '🇮🇱', country: 'Israel', region: 'Middle East' },
  { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', flag: '🇪🇬', country: 'Egypt', region: 'Middle East' },

  // Europe
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', flag: '🇸🇪', country: 'Sweden', region: 'Europe' },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', flag: '🇳🇴', country: 'Norway', region: 'Europe' },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr', flag: '🇩🇰', country: 'Denmark', region: 'Europe' },
  { code: 'PLN', name: 'Polish Zloty', symbol: 'zł', flag: '🇵🇱', country: 'Poland', region: 'Europe' },
  { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč', flag: '🇨🇿', country: 'Czech Republic', region: 'Europe' },
  { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft', flag: '🇭🇺', country: 'Hungary', region: 'Europe' },
  { code: 'RON', name: 'Romanian Leu', symbol: 'lei', flag: '🇷🇴', country: 'Romania', region: 'Europe' },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺', country: 'Russia', region: 'Europe' },

  // Americas
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷', country: 'Brazil', region: 'Americas' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$', flag: '🇲🇽', country: 'Mexico', region: 'Americas' },
  { code: 'ARS', name: 'Argentine Peso', symbol: '$', flag: '🇦🇷', country: 'Argentina', region: 'Americas' },
  { code: 'CLP', name: 'Chilean Peso', symbol: '$', flag: '🇨🇱', country: 'Chile', region: 'Americas' },
  { code: 'COP', name: 'Colombian Peso', symbol: '$', flag: '🇨🇴', country: 'Colombia', region: 'Americas' },

  // Oceania
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', flag: '🇳🇿', country: 'New Zealand', region: 'Oceania' },
  { code: 'FJD', name: 'Fiji Dollar', symbol: 'FJ$', flag: '🇫🇯', country: 'Fiji', region: 'Oceania' },

  // Africa
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦', country: 'South Africa', region: 'Africa' },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', flag: '🇳🇬', country: 'Nigeria', region: 'Africa' },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', flag: '🇰🇪', country: 'Kenya', region: 'Africa' },
  { code: 'GHS', name: 'Ghanaian Cedi', symbol: 'GH₵', flag: '🇬🇭', country: 'Ghana', region: 'Africa' },
  { code: 'MAD', name: 'Moroccan Dirham', symbol: 'MAD', flag: '🇲🇦', country: 'Morocco', region: 'Africa' },
];

export const POPULAR_EXCHANGES = [
  { from: 'SAR', to: 'BDT', label: 'Saudi Riyal to BDT (সৌদি রিয়াল)', flagFrom: '🇸🇦', flagTo: '🇧🇩' },
  { from: 'AED', to: 'BDT', label: 'UAE Dirham to BDT (দুবাই দিরহাম)', flagFrom: '🇦🇪', flagTo: '🇧🇩' },
  { from: 'USD', to: 'BDT', label: 'US Dollar to BDT (আমেরিকান ডলার)', flagFrom: '🇺🇸', flagTo: '🇧🇩' },
  { from: 'KWD', to: 'BDT', label: 'Kuwaiti Dinar to BDT (কুয়েতি দিনার)', flagFrom: '🇰🇼', flagTo: '🇧🇩' },
  { from: 'QAR', to: 'BDT', label: 'Qatari Riyal to BDT (কাতারি রিয়াল)', flagFrom: '🇶🇦', flagTo: '🇧🇩' },
  { from: 'MYR', to: 'BDT', label: 'Malaysian Ringgit to BDT (মালয়েশিয়ান রিঙ্গিত)', flagFrom: '🇲🇾', flagTo: '🇧🇩' },
  { code: 'SGD', from: 'SGD', to: 'BDT', label: 'Singapore Dollar to BDT (সিঙ্গাপুর ডলার)', flagFrom: '🇸🇬', flagTo: '🇧🇩' },
  { from: 'EUR', to: 'BDT', label: 'Euro to BDT (ইউরো)', flagFrom: '🇪🇺', flagTo: '🇧🇩' },
  { from: 'GBP', to: 'BDT', label: 'British Pound to BDT (পাউন্ড স্টার্লিং)', flagFrom: '🇬🇧', flagTo: '🇧🇩' },
  { from: 'OMR', to: 'BDT', label: 'Omani Rial to BDT (ওমানি রিয়াল)', flagFrom: '🇴🇲', flagTo: '🇧🇩' },
  { from: 'INR', to: 'BDT', label: 'Indian Rupee to BDT (ভারতীয় রুপি)', flagFrom: '🇮🇳', flagTo: '🇧🇩' },
  { from: 'CAD', to: 'BDT', label: 'Canadian Dollar to BDT (কানাডিয়ান ডলার)', flagFrom: '🇨🇦', flagTo: '🇧🇩' },
];

export const GOLD_UNITS = [
  { id: 'vhori', name: '1 Vhori / Bhori (ভরি / তোলা)', grams: 11.664, description: 'Standard South Asian jewelry unit (11.664g)' },
  { id: 'gram', name: '1 Gram (গ্রাম)', grams: 1, description: 'International metric standard' },
  { id: 'ounce', name: '1 Troy Ounce (আউন্স)', grams: 31.1034768, description: 'Global bullion market trading standard' },
  { id: 'ana', name: '1 Ana (আনা)', grams: 0.729, description: '1/16th of a Vhori (0.729g)' },
  { id: 'ratti', name: '1 Ratti (রতি)', grams: 0.1215, description: '1/96th of a Vhori (0.1215g)' },
  { id: 'kg', name: '1 Kilogram (কেজি)', grams: 1000, description: 'Commercial bar standard' },
];

export const GOLD_PURITIES = [
  { karat: '24K', purity: 0.999, name: '24 Karat (99.9% Pure Gold)', badge: 'Bullion Grade', desc: 'Raw investment gold bar / pure bullion' },
  { karat: '22K', purity: 0.916, name: '22 Karat (91.6% Hallmark)', badge: 'Most Popular', desc: 'Standard gold jewelry (Cadmium hallmarked)' },
  { karat: '21K', purity: 0.875, name: '21 Karat (87.5% Gulf Grade)', badge: 'Middle East', desc: 'Traditional Arab / Middle East jewelry standard' },
  { karat: '18K', purity: 0.750, name: '18 Karat (75.0% Diamond Grade)', badge: 'Modern Jewelry', desc: 'Diamond settings, rose gold, and durable jewelry' },
];
