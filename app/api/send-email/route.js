// app/api/send-email/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, companyName, email, phoneNo, messgae } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_HOST,
      port: Number(process.env.EMAIL_SMTP_PORT),
      secure: process.env.EMAIL_SMTP_SECURE === "true",
      auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASS,
      },
    });
    const fromEmail = process.env.EMAIL_FROM || "no-reply@ensureprotect.com";

    await transporter.sendMail({
      from: `"${fullName}" <${fromEmail}>`,
      to: "info@ensureprotect.com",
      subject: `New Contact Form Submission from ${fullName}`,
      replyTo: email,
      text: `
Full Name: ${fullName}
Company: ${companyName}
Email: ${email}
Phone: ${phoneNo}
Message: ${messgae}
      `,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNo}</p>
        <p><strong>Message:</strong></p>
        <p>${messgae}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
