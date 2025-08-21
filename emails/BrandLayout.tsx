import Image from "next/image";
import * as React from "react";

const BRAND = {
  siteUrl: "https://vitanovadesigns.cloud",
  logoUrl: "https://vitanovadesigns.cloud/email/vitanova-logo.svg",
  purple: "#6d28d9",
  cyan: "#06b6d4",
};

const SIGNATURE = {
  name: "Monicah Cloud",
  title: "Co-Founder & Lead Developer",
  company: "VitaNova Designs and Marketing LLC",
  phone: "(770) 703-7133",
  website: "vitanovadesigns.cloud",
};

export default function BrandLayout({
  preview,
  children,
  showSignature = true,
}: {
  preview?: string;
  children: React.ReactNode;
  showSignature?: boolean;
}) {
  return (
    <div style={{ background: "#f6f7fb", margin: 0, padding: "24px 12px" }}>
      {/* preview text (hidden in most clients, fine to include) */}
      {preview ? (
        <div style={{ display: "none", maxHeight: 0, overflow: "hidden" }}>
          {preview}
        </div>
      ) : null}

      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial",
        }}>
        <div
          style={{
            padding: "20px 24px",
            textAlign: "center",
            background: `linear-gradient(135deg, ${BRAND.purple}, ${BRAND.cyan})`,
          }}>
          <Image
            src={BRAND.logoUrl}
            width={180}
            alt="Vita Nova Designs"
            style={{ display: "block", margin: "0 auto" }}
          />
        </div>

        <div style={{ padding: 24 }}>{children}</div>

        {showSignature && (
          <>
            <hr style={{ border: 0, borderTop: "1px solid #eee", margin: 0 }} />
            <div style={{ padding: "16px 24px 8px" }}>
              <p
                style={{
                  color: "#111827",
                  fontSize: 14,
                  lineHeight: "22px",
                  margin: 0,
                }}>
                Warmly,
                <br />
                <strong>{SIGNATURE.name}</strong>
                <br />
                {SIGNATURE.title}
                <br />
                {SIGNATURE.company}
                <br />
                Office: {SIGNATURE.phone}
                <br />
                Website:{" "}
                <a
                  href={`https://${SIGNATURE.website}`}
                  style={{ color: BRAND.purple, textDecoration: "underline" }}>
                  {SIGNATURE.website}
                </a>
              </p>
            </div>
          </>
        )}

        <div style={{ padding: "0 24px 20px" }}>
          <p style={{ color: "#6b7280", fontSize: 12, marginTop: 8 }}>
            You’re receiving this email because you interacted with{" "}
            <a
              href={BRAND.siteUrl}
              style={{ color: BRAND.purple, textDecoration: "underline" }}>
              vitanovadesigns.cloud
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
