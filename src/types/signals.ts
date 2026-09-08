export interface RawTradeSignal {
  id: string;
  symbol: string;
  name: string;
  category: "crypto" | "forex" | "stocks" | "commodities" | "indices";
  action: "STRONG BUY" | "BUY" | "NEUTRAL" | "SELL" | "STRONG SELL";
  bias: "BULLISH" | "BEARISH" | "NEUTRAL";
  currentPrice: string;
  priceNum: number;
  change24h: string;
  changeNum: number;
  entryZone: string;
  stopLoss: string;
  target1: string;
  target2: string;
  riskReward: string;
  timeframe: string;
  confidence: number;
  rsi: number;
  technicalReason: string;
  keyLevels: {
    support: string;
    resistance: string;
  };
  updatedAt: string;
}

export interface TradeSignal extends RawTradeSignal {
  isMarketOpen: boolean;
  marketStatusText: string;
  marketStatusBn: string;
}
