import * as React from "react";
import BrandLayout from "./BrandLayout";

export default function ContactReceipt({ name }: { name: string }) {
  const cta: React.CSSProperties = {
    background: "#06b6d4",
    color: "#fff",
    borderRadius: 8,
    padding: "10px 14px",
    textDecoration: "none",
    display: "inline-block",
    fontWeight: 600,
  };

  return (
    <BrandLayout preview="Thanks — we received your message">
      <h2 style={{ margin: "0 0 12px", color: "#111827" }}>
        Thanks, {name} — we received your message.
      </h2>
      <p style={{ color: "#374151" }}>
        We typically reply within 24 hours. If it’s urgent, call (404) 703-7133.
      </p>
      <div style={{ marginTop: 18 }}>
        <a href="https://vitanovadesigns.cloud" style={cta}>
          Visit our website
        </a>
      </div>
    </BrandLayout>
  );
}
