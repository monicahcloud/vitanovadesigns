import * as React from "react";
import BrandLayout from "./BrandLayout";
import { Heading, Text, Button, Hr } from "@react-email/components";

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
  const button: React.CSSProperties = {
    backgroundColor: "#6d28d9",
    color: "#ffffff",
    borderRadius: 8,
    padding: "10px 14px",
    textDecoration: "none",
    display: "inline-block",
    fontWeight: 600,
  };

  return (
    <BrandLayout preview={`New contact from ${name}`}>
      <Heading as="h2" style={{ margin: "0 0 12px", color: "#111827" }}>
        New Contact Form Submission
      </Heading>

      <Text style={row}>
        <strong>Name:</strong> {name}
      </Text>
      <Text style={row}>
        <strong>Email:</strong> {email}
      </Text>
      {phone && (
        <Text style={row}>
          <strong>Phone:</strong> {phone}
        </Text>
      )}
      {projectType && (
        <Text style={row}>
          <strong>Project Type:</strong> {projectType}
        </Text>
      )}
      {budget && (
        <Text style={row}>
          <strong>Budget:</strong> {budget}
        </Text>
      )}

      <Hr style={{ borderColor: "#eee", margin: "16px 0" }} />

      <Text style={{ margin: 0, color: "#111827" }}>
        <strong>Message</strong>
      </Text>
      <Text style={{ whiteSpace: "pre-wrap", marginTop: 8, color: "#374151" }}>
        {message}
      </Text>

      <div style={{ marginTop: 20 }}>
        <Button href={`mailto:${email}`} style={button}>
          Reply to {name}
        </Button>
      </div>
    </BrandLayout>
  );
}
