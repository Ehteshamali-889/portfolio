// Run: node scripts/generate-social-preview.mjs
// Keep the key content in the central 630px for square thumbnail crops.
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

async function main() {
  const image = new ImageResponse(
    h("div", { style: { width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#07110f", color: "#eef2ee", fontFamily: "sans-serif", position: "relative" } },
      h("div", { style: { position: "absolute", inset: 28, border: "2px solid #284236", borderRadius: 28, display: "flex" } }),
      h("div", { style: { position: "absolute", left: 65, top: 255, color: "#284236", fontSize: 90, display: "flex" } }, "{"),
      h("div", { style: { position: "absolute", right: 65, top: 255, color: "#284236", fontSize: 90, display: "flex" } }, "}"),
      h("div", { style: { width: 600, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" } },
        h("div", { style: { fontSize: 24, letterSpacing: 6, color: "#c8f06b", marginBottom: 26, display: "flex" } }, "PORTFOLIO"),
        h("div", { style: { fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3, display: "flex" } }, "Ehtesham Ali"),
        h("div", { style: { width: 90, height: 5, background: "#c8f06b", marginTop: 30, marginBottom: 30, display: "flex" } }),
        h("div", { style: { fontSize: 36, fontWeight: 700, display: "flex" } }, "Software Engineer"),
        h("div", { style: { fontSize: 36, color: "#c8f06b", marginTop: 8, display: "flex" } }, "& AI Developer"),
        h("div", { style: { fontSize: 23, color: "#b4c5bc", marginTop: 30, display: "flex" } }, "Web. Mobile. Intelligent applications."),
      ),
    ),
    { width: 1200, height: 630 },
  );
  const output = fileURLToPath(new URL("../public/social-preview-v2.jpg", import.meta.url));
  await sharp(Buffer.from(await image.arrayBuffer())).jpeg({ quality: 92, mozjpeg: true }).toFile(output);
  console.log(`Generated ${output}`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
