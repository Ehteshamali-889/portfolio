import { ImageResponse } from "next/og";

export const alt = "Ehtesham Ali — Software Engineer. Full-stack web and mobile development.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function SocialImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#f9fafb", padding: 42, fontFamily: "sans-serif", color: "#111827" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", background: "#ffffff", border: "2px solid #e5e7eb", borderRadius: 24, padding: "48px 54px", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", background: "#111827", color: "white", borderRadius: 14, padding: "12px 18px", fontSize: 28, fontWeight: 700 }}>EA.</div>
            <div style={{ display: "flex", fontSize: 20, letterSpacing: 4, color: "#4b5563" }}>PORTFOLIO</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 82, fontWeight: 700, letterSpacing: -4, lineHeight: 1.1 }}>Ehtesham Ali</div>
            <div style={{ display: "flex", fontSize: 36, marginTop: 16, color: "#374151" }}>Software Engineer</div>
            <div style={{ display: "flex", fontSize: 25, marginTop: 22, color: "#4b5563" }}>Building scalable web &amp; mobile applications.</div>
          </div>
          <div style={{ display: "flex", borderTop: "2px solid #e5e7eb", paddingTop: 25, fontSize: 22, color: "#374151", justifyContent: "space-between" }}>
            <span>Full-stack development</span>
            <span>Backend systems</span>
            <span>API integrations</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
