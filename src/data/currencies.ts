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
  // Major Global Benchmarks & High Liquidity Currencies
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸', country: 'United States', region: 'Americas', isPopular: true, isRemittance: true },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺', country: 'European Union', region: 'Europe', isPopular: true, isRemittance: true },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧', country: 'United Kingdom', region: 'Europe', isPopular: true, isRemittance: true },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵', country: 'Japan', region: 'Asia', isPopular: true },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', flag: '🇨🇭', country: 'Switzerland', region: 'Europe', isPopular: true },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦', country: 'Canada', region: 'Americas', isPopular: true, isRemittance: true },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺', country: 'Australia', region: 'Oceania', isPopular: true, isRemittance: true },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳', country: 'China', region: 'Asia', isPopular: true },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', flag: '🇸🇦', country: 'Saudi Arabia', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪', country: 'United Arab Emirates', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬', country: 'Singapore', region: 'Asia', isPopular: true, isRemittance: true },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳', country: 'India', region: 'Asia', isPopular: true, isRemittance: true },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: 'Tk', flag: '🇧🇩', country: 'Bangladesh', region: 'Asia', isPopular: true, isRemittance: true },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', flag: '🇲🇾', country: 'Malaysia', region: 'Asia', isPopular: true, isRemittance: true },
  { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'KD', flag: '🇰🇼', country: 'Kuwait', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'QAR', name: 'Qatari Riyal', symbol: 'QR', flag: '🇶🇦', country: 'Qatar', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'OMR', name: 'Omani Rial', symbol: 'OMR', flag: '🇴🇲', country: 'Oman', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'BHD', name: 'Bahraini Dinar', symbol: 'BD', flag: '🇧🇭', country: 'Bahrain', region: 'Middle East', isPopular: true, isRemittance: true },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷', country: 'Turkey', region: 'Europe', isPopular: true },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', flag: '🇵🇰', country: 'Pakistan', region: 'Asia', isPopular: true },

  // Asia & Pacific
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
  { code: 'AFN', name: 'Afghan Afghani', symbol: 'Af', flag: '🇦🇫', country: 'Afghanistan', region: 'Asia' },
  { code: 'MMK', name: 'Myanmar Kyat', symbol: 'K', flag: '🇲🇲', country: 'Myanmar', region: 'Asia' },
  { code: 'KHR', name: 'Cambodian Riel', symbol: '៛', flag: '🇰🇭', country: 'Cambodia', region: 'Asia' },

  // Middle East
  { code: 'JOD', name: 'Jordanian Dinar', symbol: 'JD', flag: '🇯🇴', country: 'Jordan', region: 'Middle East' },
  { code: 'LBP', name: 'Lebanese Pound', symbol: 'L£', flag: '🇱🇧', country: 'Lebanon', region: 'Middle East' },
  { code: 'IQD', name: 'Iraqi Dinar', symbol: 'IQD', flag: '🇮🇶', country: 'Iraq', region: 'Middle East' },
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
  { from: 'EUR', to: 'USD', label: 'EUR / USD (Euro to US Dollar)', flagFrom: '🇪🇺', flagTo: '🇺🇸' },
  { from: 'GBP', to: 'USD', label: 'GBP / USD (British Pound to US Dollar)', flagFrom: '🇬🇧', flagTo: '🇺🇸' },
  { from: 'USD', to: 'JPY', label: 'USD / JPY (US Dollar to Japanese Yen)', flagFrom: '🇺🇸', flagTo: '🇯🇵' },
  { from: 'USD', to: 'CAD', label: 'USD / CAD (US Dollar to Canadian Dollar)', flagFrom: '🇺🇸', flagTo: '🇨🇦' },
  { from: 'USD', to: 'SAR', label: 'USD / SAR (US Dollar to Saudi Riyal)', flagFrom: '🇺🇸', flagTo: '🇸🇦' },
  { from: 'USD', to: 'AED', label: 'USD / AED (US Dollar to UAE Dirham)', flagFrom: '🇺🇸', flagTo: '🇦🇪' },
  { from: 'USD', to: 'INR', label: 'USD / INR (US Dollar to Indian Rupee)', flagFrom: '🇺🇸', flagTo: '🇮🇳' },
  { from: 'USD', to: 'BDT', label: 'USD / BDT (US Dollar to Bangladeshi Taka)', flagFrom: '🇺🇸', flagTo: '🇧🇩' },
  { from: 'USD', to: 'SGD', label: 'USD / SGD (US Dollar to Singapore Dollar)', flagFrom: '🇺🇸', flagTo: '🇸🇬' },
  { from: 'USD', to: 'MYR', label: 'USD / MYR (US Dollar to Malaysian Ringgit)', flagFrom: '🇺🇸', flagTo: '🇲🇾' },
  { from: 'SAR', to: 'BDT', label: 'SAR / BDT (Saudi Riyal to Bangladeshi Taka)', flagFrom: '🇸🇦', flagTo: '🇧🇩' },
  { from: 'AED', to: 'BDT', label: 'AED / BDT (UAE Dirham to Bangladeshi Taka)', flagFrom: '🇦🇪', flagTo: '🇧🇩' },
];

export const GOLD_UNITS = [
  { id: 'ounce', name: '1 Troy Ounce (oz)', grams: 31.1034768, description: 'Global institutional bullion market standard' },
  { id: 'gram', name: '1 Gram (g)', grams: 1, description: 'International metric standard' },
  { id: 'kg', name: '1 Kilogram (kg)', grams: 1000, description: 'Commercial vault bar standard (1,000g)' },
  { id: 'tola', name: '1 Tola / Vhori', grams: 11.664, description: 'Traditional South Asian bullion unit (11.664g)' },
  { id: 'half_ounce', name: '1/2 Troy Ounce', grams: 15.5517, description: 'Standard investment coin weight' },
  { id: 'quarter_ounce', name: '1/4 Troy Ounce', grams: 7.7758, description: 'Standard fractional bullion bar weight' },
];

export const GOLD_PURITIES = [
  { karat: '24K', purity: 0.999, name: '24 Karat (99.9% Pure Gold)', badge: 'Bullion Grade', desc: 'Investment-grade sovereign bullion bar & coin' },
  { karat: '22K', purity: 0.916, name: '22 Karat (91.6% Hallmark)', badge: 'Crown Standard', desc: 'Standard high-purity jewelry & commemorative coins' },
  { karat: '21K', purity: 0.875, name: '21 Karat (87.5% Gulf Grade)', badge: 'Middle East Grade', desc: 'Traditional Arab & Middle Eastern fine jewelry standard' },
  { karat: '18K', purity: 0.750, name: '18 Karat (75.0% Diamond Grade)', badge: 'Luxury Jewelry', desc: 'Durable white gold, rose gold, and diamond settings' },
];
