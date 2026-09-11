import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface RatesResponse {
  result: string;
  time_last_update_utc?: string;
  rates: Record<string, number>;
}

export async function GET() {
  try {
    // 1. Fetch currency exchange rates (USD base, 166 world currencies)
    let rates: Record<string, number> = {};
    let timeLastUpdated = new Date().toISOString();

    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD", {
        headers: {
          "User-Agent": "AratBazar-Currency-Engine/1.0",
        },
        next: { revalidate: 300 }, // Cache 5 minutes
      });

      if (res.ok) {
        const data: RatesResponse = await res.json();
        if (data && data.rates) {
          rates = data.rates;
          if (data.time_last_update_utc) {
            timeLastUpdated = data.time_last_update_utc;
          }
        }
      }
    } catch (err) {
      console.warn("Currency fetch error:", err);
    }

    // Comprehensive fallbacks for critical currencies if external feed has delay
    if (!rates["USD"]) rates["USD"] = 1.0;
    if (!rates["BDT"]) rates["BDT"] = 123.25;
    if (!rates["SAR"]) rates["SAR"] = 3.75;
    if (!rates["AED"]) rates["AED"] = 3.67;
    if (!rates["EUR"]) rates["EUR"] = 0.86;
    if (!rates["GBP"]) rates["GBP"] = 0.74;
    if (!rates["KWD"]) rates["KWD"] = 0.31;
    if (!rates["QAR"]) rates["QAR"] = 3.64;
    if (!rates["OMR"]) rates["OMR"] = 0.385;
    if (!rates["MYR"]) rates["MYR"] = 4.42;
    if (!rates["SGD"]) rates["SGD"] = 1.32;
    if (!rates["INR"]) rates["INR"] = 95.50;
    if (!rates["CAD"]) rates["CAD"] = 1.39;
    if (!rates["AUD"]) rates["AUD"] = 1.54;
    if (!rates["JPY"]) rates["JPY"] = 153.50;

    // 2. Fetch Live Spot Gold (PAXGUSDT from Binance)
    let goldSpotUsd = 4374.50; // default realistic benchmark
    let goldChange24h = 0.25;
    let goldHigh24h = 4405.00;
    let goldLow24h = 4302.00;

    try {
      const goldRes = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=PAXGUSDT", {
        headers: {
          "User-Agent": "AratBazar-Gold-Engine/1.0",
        },
        next: { revalidate: 60 }, // Cache 1 minute
      });

      if (goldRes.ok) {
        const goldData = await goldRes.json();
        if (goldData && goldData.lastPrice) {
          goldSpotUsd = parseFloat(goldData.lastPrice);
          goldChange24h = parseFloat(goldData.priceChangePercent) || 0;
          goldHigh24h = parseFloat(goldData.highPrice) || goldSpotUsd;
          goldLow24h = parseFloat(goldData.lowPrice) || goldSpotUsd;
        }
      }
    } catch (err) {
      console.warn("Gold spot fetch error:", err);
    }

    // 1 Troy Ounce = 31.1034768 grams
    const TROY_OUNCE_GRAMS = 31.1034768;
    const VHORI_GRAMS = 11.664; // 1 Vhori / Tola in Bangladesh & South Asia

    const goldPerGram24K = goldSpotUsd / TROY_OUNCE_GRAMS;
    const goldPerGram22K = goldPerGram24K * 0.916; // 91.6% Hallmark standard
    const goldPerGram21K = goldPerGram24K * 0.875; // 87.5% Gulf standard
    const goldPerGram18K = goldPerGram24K * 0.750; // 75.0% Diamond grade

    const goldPerVhori24K = goldPerGram24K * VHORI_GRAMS;
    const goldPerVhori22K = goldPerGram22K * VHORI_GRAMS;
    const goldPerVhori21K = goldPerGram21K * VHORI_GRAMS;
    const goldPerVhori18K = goldPerGram18K * VHORI_GRAMS;

    // Silver spot estimated correlation (Gold/Silver ratio approx 82:1)
    const silverSpotUsd = Math.round((goldSpotUsd / 82.5) * 100) / 100;
    const silverPerGram = silverSpotUsd / TROY_OUNCE_GRAMS;
    const silverPerVhori = silverPerGram * VHORI_GRAMS;

    return NextResponse.json(
      {
        success: true,
        base: "USD",
        timeLastUpdated,
        rates,
        metals: {
          gold: {
            spotUsd: goldSpotUsd,
            change24h: goldChange24h,
            high24h: goldHigh24h,
            low24h: goldLow24h,
            perGram: {
              "24K": goldPerGram24K,
              "22K": goldPerGram22K,
              "21K": goldPerGram21K,
              "18K": goldPerGram18K,
            },
            perVhori: {
              "24K": goldPerVhori24K,
              "22K": goldPerVhori22K,
              "21K": goldPerVhori21K,
              "18K": goldPerVhori18K,
            },
            perOunce: goldSpotUsd,
            perKg: goldPerGram24K * 1000,
          },
          silver: {
            spotUsd: silverSpotUsd,
            perGram: silverPerGram,
            perVhori: silverPerVhori,
            perOunce: silverSpotUsd,
            perKg: silverPerGram * 1000,
          },
        },
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    console.error("Exchange rates API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve exchange data" },
      { status: 500 }
    );
  }
}
