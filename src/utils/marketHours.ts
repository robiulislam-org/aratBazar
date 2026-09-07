/**
 * AratBazar — Real-Time Global Market Hours & Session State Utility
 * ================================================================
 * Accurately tracks trading sessions for:
 * 1. Wall Street (US Equities - NYSE/NASDAQ)
 * 2. Forex (Global Currency Markets)
 * 3. Commodities (CME / Metals & Energy)
 * 4. Crypto (24/7/365 Continuous)
 */

export interface MarketSessionInfo {
  isOpen: boolean;
  session: "REGULAR" | "PRE_MARKET" | "AFTER_HOURS" | "CLOSED";
  statusEn: string;
  statusBn: string;
  dotColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  nextEvent: string;
}

// Helper to get current US Eastern Time components
function getUSEasternTime(): { day: number; hour: number; minute: number; totalMinutes: number } {
  // Use Intl.DateTimeFormat to reliably get US Eastern Time regardless of user local timezone
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  let weekdayStr = "Mon";
  let hour = 0;
  let minute = 0;

  for (const p of parts) {
    if (p.type === "weekday") weekdayStr = p.value;
    if (p.type === "hour") hour = parseInt(p.value, 10);
    if (p.type === "minute") minute = parseInt(p.value, 10);
  }

  // Map weekday to 0 (Sun) - 6 (Sat)
  const dayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const day = dayMap[weekdayStr] ?? now.getDay();
  // In 24h format, 24 might be returned for midnight
  if (hour === 24) hour = 0;

  return {
    day,
    hour,
    minute,
    totalMinutes: hour * 60 + minute,
  };
}

/**
 * Wall Street / US Stock Market Hours:
 * - Pre-market: 04:00 - 09:30 ET
 * - Regular Session: 09:30 - 16:00 ET (Mon - Fri)
 * - After-hours: 16:00 - 20:00 ET
 * - Closed: Nights (20:00 - 04:00 ET) & All Weekend (Sat & Sun)
 */
export function getWallStreetSession(): MarketSessionInfo {
  const { day, totalMinutes } = getUSEasternTime();

  const isWeekend = day === 0 || day === 6; // Sunday or Saturday

  if (isWeekend) {
    return {
      isOpen: false,
      session: "CLOSED",
      statusEn: "MARKET CLOSED (Weekend)",
      statusBn: "মার্কেট অফ আছে (উইকেন্ড বন্ধ)",
      dotColor: "bg-rose-500",
      badgeBg: "bg-rose-950/40",
      badgeText: "text-rose-400",
      badgeBorder: "border-rose-500/30",
      nextEvent: "Opens Monday 09:30 AM ET",
    };
  }

  // Weekdays (Mon - Fri)
  const preMarketStart = 4 * 60; // 04:00 ET
  const regularStart = 9 * 60 + 30; // 09:30 ET
  const regularEnd = 16 * 60; // 16:00 ET (4 PM)
  const afterHoursEnd = 20 * 60; // 20:00 ET (8 PM)

  if (totalMinutes >= regularStart && totalMinutes < regularEnd) {
    return {
      isOpen: true,
      session: "REGULAR",
      statusEn: "LIVE: ACTIVE REGULAR SESSION",
      statusBn: "মার্কেট এখন লাইভ চালু আছে",
      dotColor: "bg-emerald-500",
      badgeBg: "bg-emerald-950/40",
      badgeText: "text-emerald-400",
      badgeBorder: "border-emerald-500/30",
      nextEvent: "Closes at 04:00 PM ET",
    };
  }

  if (totalMinutes >= preMarketStart && totalMinutes < regularStart) {
    return {
      isOpen: false,
      session: "PRE_MARKET",
      statusEn: "PRE-MARKET SESSION",
      statusBn: "প্রি-মার্কেট সেশন (রেগুলার অফ)",
      dotColor: "bg-amber-400",
      badgeBg: "bg-amber-950/40",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-500/30",
      nextEvent: "Regular session opens at 09:30 AM ET",
    };
  }

  if (totalMinutes >= regularEnd && totalMinutes < afterHoursEnd) {
    return {
      isOpen: false,
      session: "AFTER_HOURS",
      statusEn: "AFTER-HOURS TRADING",
      statusBn: "আফটার-আওয়ার্স ট্রেডিং (রেগুলার অফ)",
      dotColor: "bg-cyan-400",
      badgeBg: "bg-cyan-950/40",
      badgeText: "text-cyan-400",
      badgeBorder: "border-cyan-500/30",
      nextEvent: "Closes at 08:00 PM ET",
    };
  }

  // Overnight closed
  return {
    isOpen: false,
    session: "CLOSED",
    statusEn: "MARKET CLOSED (Overnight)",
    statusBn: "মার্কেট অফ আছে (এখন বন্ধ)",
    dotColor: "bg-rose-500",
    badgeBg: "bg-rose-950/40",
    badgeText: "text-rose-400",
    badgeBorder: "border-rose-500/30",
    nextEvent: "Pre-market opens at 04:00 AM ET",
  };
}

/**
 * Forex Market Hours:
 * - Opens: Sunday 17:00 ET (21:00 UTC)
 * - Closes: Friday 17:00 ET (21:00 UTC)
 * - Closed: Weekend from Friday 17:00 ET to Sunday 17:00 ET
 */
export function getForexSession(): MarketSessionInfo {
  const { day, totalMinutes } = getUSEasternTime();

  // Saturday is always closed
  if (day === 6) {
    return {
      isOpen: false,
      session: "CLOSED",
      statusEn: "FOREX CLOSED (Weekend)",
      statusBn: "ফরেক্স মার্কেট অফ আছে",
      dotColor: "bg-rose-500",
      badgeBg: "bg-rose-950/40",
      badgeText: "text-rose-400",
      badgeBorder: "border-rose-500/30",
      nextEvent: "Opens Sunday 05:00 PM ET",
    };
  }

  // Sunday before 17:00 ET is closed
  if (day === 0 && totalMinutes < 17 * 60) {
    return {
      isOpen: false,
      session: "CLOSED",
      statusEn: "FOREX CLOSED (Weekend)",
      statusBn: "ফরেক্স মার্কেট অফ আছে",
      dotColor: "bg-rose-500",
      badgeBg: "bg-rose-950/40",
      badgeText: "text-rose-400",
      badgeBorder: "border-rose-500/30",
      nextEvent: "Opens today at 05:00 PM ET",
    };
  }

  // Friday after 17:00 ET is closed
  if (day === 5 && totalMinutes >= 17 * 60) {
    return {
      isOpen: false,
      session: "CLOSED",
      statusEn: "FOREX CLOSED (Weekend)",
      statusBn: "ফরেক্স মার্কেট অফ আছে",
      dotColor: "bg-rose-500",
      badgeBg: "bg-rose-950/40",
      badgeText: "text-rose-400",
      badgeBorder: "border-rose-500/30",
      nextEvent: "Opens Sunday 05:00 PM ET",
    };
  }

  // Open 24h during the week
  return {
    isOpen: true,
    session: "REGULAR",
    statusEn: "FOREX: 24H INTERBANK OPEN",
    statusBn: "ফরেক্স মার্কেট লাইভ চালু আছে",
    dotColor: "bg-emerald-500",
    badgeBg: "bg-emerald-950/40",
    badgeText: "text-emerald-400",
    badgeBorder: "border-emerald-500/30",
    nextEvent: "Closes Friday 05:00 PM ET",
  };
}

/**
 * Commodities Market Hours (Gold, Crude Oil, Silver):
 * - Closed on weekends (Friday 17:00 ET to Sunday 18:00 ET)
 * - Daily break: 17:00 - 18:00 ET
 */
export function getCommoditiesSession(): MarketSessionInfo {
  const { day, totalMinutes } = getUSEasternTime();

  if (day === 6) {
    return {
      isOpen: false,
      session: "CLOSED",
      statusEn: "COMMODITIES CLOSED",
      statusBn: "কমোডিটি মার্কেট অফ আছে",
      dotColor: "bg-rose-500",
      badgeBg: "bg-rose-950/40",
      badgeText: "text-rose-400",
      badgeBorder: "border-rose-500/30",
      nextEvent: "Opens Sunday 06:00 PM ET",
    };
  }

  if (day === 0 && totalMinutes < 18 * 60) {
    return {
      isOpen: false,
      session: "CLOSED",
      statusEn: "COMMODITIES CLOSED",
      statusBn: "কমোডিটি মার্কেট অফ আছে",
      dotColor: "bg-rose-500",
      badgeBg: "bg-rose-950/40",
      badgeText: "text-rose-400",
      badgeBorder: "border-rose-500/30",
      nextEvent: "Opens today at 06:00 PM ET",
    };
  }

  if (day === 5 && totalMinutes >= 17 * 60) {
    return {
      isOpen: false,
      session: "CLOSED",
      statusEn: "COMMODITIES CLOSED",
      statusBn: "কমোডিটি মার্কেট অফ আছে",
      dotColor: "bg-rose-500",
      badgeBg: "bg-rose-950/40",
      badgeText: "text-rose-400",
      badgeBorder: "border-rose-500/30",
      nextEvent: "Opens Sunday 06:00 PM ET",
    };
  }

  // Daily 1-hour maintenance break (17:00 - 18:00 ET)
  if (totalMinutes >= 17 * 60 && totalMinutes < 18 * 60) {
    return {
      isOpen: false,
      session: "CLOSED",
      statusEn: "DAILY SETTLEMENT BREAK",
      statusBn: "দৈনিক সেটেলমেন্ট বিরতি (অফ)",
      dotColor: "bg-amber-400",
      badgeBg: "bg-amber-950/40",
      badgeText: "text-amber-400",
      badgeBorder: "border-amber-500/30",
      nextEvent: "Resumes at 06:00 PM ET",
    };
  }

  return {
    isOpen: true,
    session: "REGULAR",
    statusEn: "COMMODITIES: TRADING OPEN",
    statusBn: "কমোডিটি মার্কেট লাইভ চালু আছে",
    dotColor: "bg-emerald-500",
    badgeBg: "bg-emerald-950/40",
    badgeText: "text-emerald-400",
    badgeBorder: "border-emerald-500/30",
    nextEvent: "Daily break at 05:00 PM ET",
  };
}

/**
 * Get category specific open/closed status for individual trade cards & tables
 */
export function getAssetMarketStatus(category: string): {
  isOpen: boolean;
  badgeEn: string;
  badgeBn: string;
  badgeColor: string;
} {
  const cat = category.toLowerCase();

  if (cat === "crypto") {
    return {
      isOpen: true,
      badgeEn: "24/7 OPEN",
      badgeBn: "চালু (24/7)",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    };
  }

  if (cat === "stocks" || cat === "indices") {
    const wallStreet = getWallStreetSession();
    if (wallStreet.isOpen) {
      return {
        isOpen: true,
        badgeEn: "OPEN",
        badgeBn: "মার্কেট চালু",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      };
    }
    return {
      isOpen: false,
      badgeEn: "CLOSED",
      badgeBn: "মার্কেট অফ আছে",
      badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    };
  }

  if (cat === "forex") {
    const fx = getForexSession();
    if (fx.isOpen) {
      return {
        isOpen: true,
        badgeEn: "OPEN",
        badgeBn: "মার্কেট চালু",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      };
    }
    return {
      isOpen: false,
      badgeEn: "CLOSED",
      badgeBn: "মার্কেট অফ আছে",
      badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    };
  }

  if (cat === "commodities") {
    const comm = getCommoditiesSession();
    if (comm.isOpen) {
      return {
        isOpen: true,
        badgeEn: "OPEN",
        badgeBn: "মার্কেট চালু",
        badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      };
    }
    return {
      isOpen: false,
      badgeEn: "CLOSED",
      badgeBn: "মার্কেট অফ আছে",
      badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    };
  }

  return {
    isOpen: true,
    badgeEn: "OPEN",
    badgeBn: "চালু",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  };
}
