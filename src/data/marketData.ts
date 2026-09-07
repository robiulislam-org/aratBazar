export interface MarketAsset {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: number;
  high24h: string;
  low24h: string;
  volume: string;
  marketCap?: string;
  category: 'indices' | 'stocks' | 'crypto' | 'commodities' | 'forex';
}

export const TICKER_ITEMS: MarketAsset[] = [
  { symbol: "SPX", name: "S&P 500", price: "5,983.25", change: "+34.12", changePercent: 0.57, high24h: "5,995.10", low24h: "5,945.80", volume: "$38.4B", category: "indices" },
  { symbol: "NDX", name: "Nasdaq 100", price: "21,120.40", change: "+182.90", changePercent: 0.87, high24h: "21,180.00", low24h: "20,930.20", volume: "$42.1B", category: "indices" },
  { symbol: "DJI", name: "Dow Jones", price: "44,280.10", change: "-42.15", changePercent: -0.10, high24h: "44,390.00", low24h: "44,190.50", volume: "$18.2B", category: "indices" },
  { symbol: "BTC/USD", name: "Bitcoin", price: "96,420.00", change: "+3,210.50", changePercent: 3.44, high24h: "97,100.00", low24h: "92,850.00", volume: "$48.9B", marketCap: "$1.89T", category: "crypto" },
  { symbol: "ETH/USD", name: "Ethereum", price: "2,840.75", change: "+112.30", changePercent: 4.11, high24h: "2,890.00", low24h: "2,710.20", volume: "$22.5B", marketCap: "$342B", category: "crypto" },
  { symbol: "SOL/USD", name: "Solana", price: "194.50", change: "+11.20", changePercent: 6.11, high24h: "198.80", low24h: "181.40", volume: "$7.8B", marketCap: "$91B", category: "crypto" },
  { symbol: "NVDA", name: "Nvidia Corp", price: "148.80", change: "+5.60", changePercent: 3.91, high24h: "150.20", low24h: "142.90", volume: "$31.2B", marketCap: "$3.64T", category: "stocks" },
  { symbol: "AAPL", name: "Apple Inc", price: "238.40", change: "+1.85", changePercent: 0.78, high24h: "239.50", low24h: "236.10", volume: "$14.8B", marketCap: "$3.61T", category: "stocks" },
  { symbol: "TSLA", name: "Tesla Inc", price: "352.10", change: "-8.40", changePercent: -2.33, high24h: "364.50", low24h: "348.20", volume: "$19.6B", marketCap: "$1.12T", category: "stocks" },
  { symbol: "XAU/USD", name: "Gold Spot", price: "2,912.40", change: "+18.60", changePercent: 0.64, high24h: "2,924.50", low24h: "2,890.10", volume: "$28.1B", category: "commodities" },
  { symbol: "WTI/USD", name: "Crude Oil", price: "72.45", change: "-0.85", changePercent: -1.16, high24h: "73.90", low24h: "71.80", volume: "$16.4B", category: "commodities" },
  { symbol: "EUR/USD", name: "Euro / US Dollar", price: "1.0482", change: "+0.0024", changePercent: 0.23, high24h: "1.0510", low24h: "1.0450", volume: "$110B", category: "forex" },
  { symbol: "USD/JPY", name: "US Dollar / Yen", price: "151.85", change: "-0.45", changePercent: -0.30, high24h: "152.60", low24h: "151.40", volume: "$95B", category: "forex" }
];

export const TOP_GAINERS: MarketAsset[] = [
  { symbol: "SOL/USD", name: "Solana", price: "$194.50", change: "+6.11%", changePercent: 6.11, high24h: "$198.80", low24h: "$181.40", volume: "$7.8B", category: "crypto" },
  { symbol: "PLTR", name: "Palantir Tech", price: "$68.90", change: "+5.42%", changePercent: 5.42, high24h: "$69.50", low24h: "$65.10", volume: "$4.1B", category: "stocks" },
  { symbol: "ETH/USD", name: "Ethereum", price: "$2,840.75", change: "+4.11%", changePercent: 4.11, high24h: "$2,890.00", low24h: "$2,710.20", volume: "$22.5B", category: "crypto" },
  { symbol: "NVDA", name: "Nvidia Corp", price: "$148.80", change: "+3.91%", changePercent: 3.91, high24h: "$150.20", low24h: "$142.90", volume: "$31.2B", category: "stocks" },
  { symbol: "BTC/USD", name: "Bitcoin", price: "$96,420.00", change: "+3.44%", changePercent: 3.44, high24h: "$97,100.00", low24h: "$92,850.00", volume: "$48.9B", category: "crypto" }
];

export const TOP_LOSERS: MarketAsset[] = [
  { symbol: "TSLA", name: "Tesla Inc", price: "$352.10", change: "-2.33%", changePercent: -2.33, high24h: "$364.50", low24h: "$348.20", volume: "$19.6B", category: "stocks" },
  { symbol: "WTI/USD", name: "Crude Oil", price: "$72.45", change: "-1.16%", changePercent: -1.16, high24h: "$73.90", low24h: "$71.80", volume: "$16.4B", category: "commodities" },
  { symbol: "INTC", name: "Intel Corp", price: "$22.10", change: "-1.85%", changePercent: -1.85, high24h: "$22.80", low24h: "$21.90", volume: "$2.9B", category: "stocks" },
  { symbol: "USD/JPY", name: "US Dollar / Yen", price: "151.85", change: "-0.30%", changePercent: -0.30, high24h: "152.60", low24h: "151.40", volume: "$95B", category: "forex" }
];

export const MARKET_PULSE = {
  fearGreedIndex: 72,
  fearGreedLabel: "Greed",
  dxyIndex: "105.42",
  dxyChange: "+0.18%",
  tenYearYield: "4.38%",
  tenYearChange: "-0.03%",
  marketSentiment: "Bullish Accumulation",
  wallStreetStatus: "Open (Regular Session)"
};
