import * as React from "react";
import BrandLayout from "./BrandLayout";
import { Heading, Text, Button } from "@react-email/components";

export default function ContactReceipt({ name }: { name: string }) {
  return (
    <BrandLayout preview="Thanks — we received your message">
      <Heading as="h2" style={{ margin: "0 0 12px", color: "#111827" }}>
        Thanks, {name} — we received your message
      </Heading>

      <Text style={{ color: "#374151" }}>
        We typically reply within 24 hours. If it’s urgent, call (770) 703-7133.
      </Text>

      <div style={{ marginTop: 18 }}>
        <Button
          href="https://vitanovadesigns.cloud"
          style={{
            backgroundColor: "#06b6d4",
            color: "#ffffff",
            borderRadius: 8,
            padding: "10px 14px",
            textDecoration: "none",
            display: "inline-block",
            fontWeight: 600,
          }}>
          Visit our website
        </Button>
      </div>

      {/* Signature is included automatically by BrandLayout */}
    </BrandLayout>
  );
}
