/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  // Logging first
  console.log("📥 Contact API Hit");
  const { name, email, phone, budget, message } = await req.json();

  console.log("📥 Incoming Contact Form Data:", {
    name,
    email,
    phone,
    budget,
    message,
  });

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log("📦 SMTP Config:", {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS ? "***" : "undefined",
    from: process.env.SMTP_FROM,
    to: process.env.SMTP_TO,
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `${name} sent you a message from VitaNova Designs Website.`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Budget: ${budget}

Message:
${message}
      `,
    });

    console.log("✅ Email sent:", info);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("❌ Email sending failed:", error);
    return NextResponse.json(
      { error: "Email failed", details: error.message },
      { status: 500 }
    );
  }
}
