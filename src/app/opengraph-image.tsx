import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "আরতবাজার - বাংলাদেশের অর্গানিক পণ্য ও পাইকারি আড়ত";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #15803d 0%, #16a34a 50%, #10b981 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "sans-serif",
          padding: 60,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 90, marginBottom: 20 }}>🌿</div>
        <div style={{ fontSize: 64, fontWeight: "bold", marginBottom: 16 }}>
          আরতবাজার
        </div>
        <div style={{ fontSize: 32, color: "#fef08a", marginBottom: 24 }}>
          বাংলাদেশের ৮ বিভাগ ও ৬৪ জেলার অর্গানিক পণ্যের তথ্যভাণ্ডার
        </div>
        <div
          style={{
            fontSize: 22,
            background: "rgba(255, 255, 255, 0.2)",
            padding: "12px 32px",
            borderRadius: 50,
          }}
        >
          পাইকারি আড়ত • দামের তথ্য • মৌসুমি ফল • খাঁটি দেশি পণ্য
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
