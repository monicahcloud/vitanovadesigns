import * as React from "react";
import BrandLayout from "./BrandLayout";

type Props = {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message: string;
};

export default function ContactNotification({
  name,
  email,
  phone,
  projectType,
  budget,
  message,
}: Props) {
  const row: React.CSSProperties = { margin: "6px 0", color: "#374151" };
  const btn: React.CSSProperties = {
    background: "#6d28d9",
    color: "#fff",
    borderRadius: 8,
    padding: "10px 14px",
    textDecoration: "none",
    display: "inline-block",
    fontWeight: 600,
  };

  return (
    <BrandLayout preview={`New contact from ${name}`}>
      <h2 style={{ margin: "0 0 12px", color: "#111827" }}>
        New Contact Form Submission
      </h2>
      <p style={row}>
        <strong>Name:</strong> {name}
      </p>
      <p style={row}>
        <strong>Email:</strong> {email}
      </p>
      {phone && (
        <p style={row}>
          <strong>Phone:</strong> {phone}
        </p>
      )}
      {projectType && (
        <p style={row}>
          <strong>Project Type:</strong> {projectType}
        </p>
      )}
      {budget && (
        <p style={row}>
          <strong>Budget:</strong> {budget}
        </p>
      )}

      <hr
        style={{ border: 0, borderTop: "1px solid #eee", margin: "16px 0" }}
      />

      <p style={{ margin: 0, color: "#111827" }}>
        <strong>Message</strong>
      </p>
      <p style={{ whiteSpace: "pre-wrap", marginTop: 8, color: "#374151" }}>
        {message}
      </p>

      <div style={{ marginTop: 20 }}>
        <a href={`mailto:${email}`} style={btn}>
          Reply to {name}
        </a>
      </div>
    </BrandLayout>
  );
}
