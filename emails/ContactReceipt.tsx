// /emails/ContactReceipt.tsx
import * as React from "react";

export default function ContactReceipt({ name }: { name: string }) {
  return (
    <div
      style={{
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial",
      }}>
      <h2 style={{ margin: "0 0 8px" }}>
        Thanks, {name} — we received your message ✅
      </h2>
      <p>
        We typically reply within 24 hours. If it’s urgent, call (404) 770-7133.
      </p>
      <p style={{ marginTop: 16 }}>— Vita Nova Designs</p>
    </div>
  );
}
