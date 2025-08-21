// /emails/ContactNotification.tsx
import * as React from "react";

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
  return (
    <div
      style={{
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial",
      }}>
      <h2 style={{ margin: "0 0 8px" }}>New Contact Form Submission</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      {phone ? (
        <p>
          <strong>Phone:</strong> {phone}
        </p>
      ) : null}
      {projectType ? (
        <p>
          <strong>Project Type:</strong> {projectType}
        </p>
      ) : null}
      {budget ? (
        <p>
          <strong>Budget:</strong> {budget}
        </p>
      ) : null}
      <p style={{ marginTop: 16 }}>
        <strong>Message:</strong>
      </p>
      <pre style={{ whiteSpace: "pre-wrap", marginTop: 8 }}>{message}</pre>
      <hr
        style={{ margin: "16px 0", border: 0, borderTop: "1px solid #eee" }}
      />
      <small>Sent automatically from vitanovadesigns.cloud</small>
    </div>
  );
}
