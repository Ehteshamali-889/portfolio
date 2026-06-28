import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07110f",
          border: "3px solid #c8f06b",
          borderRadius: "50%",
          color: "#c8f06b",
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: "-1px",
        }}
      >
        EA
      </div>
    ),
    size,
  );
}
