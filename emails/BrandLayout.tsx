import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Hr,
  Text,
  Link,
} from "@react-email/components";

/** ---- Customize these once ---- */
const BRAND = {
  siteUrl: "https://vitanovadesigns.cloud",
  logoUrl: "https://vitanovadesigns.cloud/email/vitanovalogo.svg",
  primary: "#6d28d9", // purple-500 vibe
  accent: "#06b6d4", // cyan-500 vibe
};

const SIGNATURE = {
  name: "Monicah Cloud",
  title: "Co-Founder & Lead Developer",
  company: "VitaNova Designs and Marketing LLC",
  phone: "(770) 703-7133",
  website: "vitanovadesigns.cloud",
};

type BrandLayoutProps = {
  preview?: string;
  children: React.ReactNode;
  /** If you want to hide signature on a template, pass false */
  showSignature?: boolean;
};

export default function BrandLayout({
  preview,
  children,
  showSignature = true,
}: BrandLayoutProps) {
  return (
    <Html>
      <Head />
      {preview ? <Preview>{preview}</Preview> : null}
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section
            style={{
              ...styles.header,
              background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})`,
            }}>
            <Img
              src={BRAND.logoUrl}
              width="180"
              alt="Vita Nova Designs"
              style={{ margin: "0 auto", display: "block" }}
            />
          </Section>

          <Section style={styles.card}>{children}</Section>

          {showSignature && (
            <>
              <Hr style={styles.hr} />
              <Section style={styles.footer}>
                <Text style={styles.signature}>
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
                  <Link
                    href={`https://${SIGNATURE.website}`}
                    style={styles.link}>
                    {SIGNATURE.website}
                  </Link>
                </Text>
              </Section>
            </>
          )}

          <Section style={styles.meta}>
            <Text style={styles.legal}>
              You’re receiving this email because you interacted with{" "}
              <Link href={BRAND.siteUrl} style={styles.link}>
                vitanovadesigns.cloud
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles: Record<string, React.CSSProperties> = {
  body: { backgroundColor: "#f6f7fb", margin: 0, padding: "24px 12px" },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
  },
  header: { padding: "20px 24px", textAlign: "center" },
  card: { padding: "24px" },
  hr: { borderColor: "#eee", margin: 0 },
  footer: { padding: "16px 24px 8px" },
  signature: { color: "#111827", fontSize: 14, lineHeight: "22px", margin: 0 },
  meta: { padding: "0 24px 20px" },
  legal: { color: "#6b7280", fontSize: 12, marginTop: 8 },
  link: { color: "#6d28d9", textDecoration: "underline" },
};
