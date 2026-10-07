import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/data";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          success: false,
          message: "Email service is temporarily unconfigured. Please email directly.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    const errors: { field: string; message: string }[] = [];
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.push({ field: "name", message: "Name must be at least 2 characters" });
    }
    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      errors.push({ field: "email", message: "A valid email address is required" });
    }
    if (!message || typeof message !== "string" || message.trim().length < 5) {
      errors.push({ field: "message", message: "Message must be at least 5 characters" });
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject && typeof subject === "string" ? subject.trim() : "";
    const trimmedMessage = message.trim();

    const resend = new Resend(apiKey);

    const recipientEmail = process.env.CONTACT_EMAIL || siteConfig.email;
    const fromSender =
      process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
    const emailSubject = trimmedSubject
      ? `[Portfolio Contact] ${trimmedSubject}`
      : `[Portfolio Contact] New message from ${trimmedName}`;

    // Plain text version
    const textContent = `New Contact Form Submission\n\nFrom: ${trimmedName} (${trimmedEmail})\nSubject: ${trimmedSubject || "No subject provided"}\n\nMessage:\n${trimmedMessage}\n\n---\nSent via Portfolio Contact Form (${new Date().toLocaleString()})`;

    // Rich HTML version
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${emailSubject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0d1117; color: #e6edf3; padding: 32px 16px; margin: 0;">
  <div style="max-width: 580px; margin: 0 auto; background-color: #161b22; border: 1px solid #30363d; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.4);">
    <div style="background: linear-gradient(135deg, #06b6d4, #8b5cf6); padding: 24px; text-align: left;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">New Contact Message</h1>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.85);">Sent from your portfolio website</p>
    </div>
    
    <div style="padding: 24px;">
      <div style="display: grid; gap: 12px; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #21262d;">
        <div>
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #8b949e; display: block; margin-bottom: 2px;">Sender Name</span>
          <span style="font-size: 15px; font-weight: 600; color: #58a6ff;">${escapeHtml(trimmedName)}</span>
        </div>
        <div style="margin-top: 8px;">
          <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #8b949e; display: block; margin-bottom: 2px;">Email Address</span>
          <a href="mailto:${escapeHtml(trimmedEmail)}" style="font-size: 14px; color: #22d3ee; text-decoration: none;">${escapeHtml(trimmedEmail)}</a>
        </div>
        ${
          trimmedSubject
            ? `<div style="margin-top: 8px;">
                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #8b949e; display: block; margin-bottom: 2px;">Subject</span>
                <span style="font-size: 14px; color: #f0f6fc; font-weight: 500;">${escapeHtml(trimmedSubject)}</span>
              </div>`
            : ""
        }
      </div>

      <div style="margin-bottom: 24px;">
        <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #8b949e; display: block; margin-bottom: 8px;">Message Content</span>
        <div style="background-color: #0d1117; border: 1px solid #30363d; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #e6edf3; white-space: pre-wrap;">${escapeHtml(trimmedMessage)}</div>
      </div>

      <div style="text-align: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid #21262d;">
        <a href="mailto:${escapeHtml(trimmedEmail)}?subject=${encodeURIComponent(`Re: ${trimmedSubject || "Your message on my portfolio"}`)}" style="display: inline-block; background-color: #22d3ee; color: #0b1320; padding: 10px 20px; border-radius: 6px; font-size: 13px; font-weight: 600; text-decoration: none;">Reply to ${escapeHtml(trimmedName)}</a>
      </div>
    </div>

    <div style="background-color: #0d1117; padding: 12px 24px; text-align: center; border-top: 1px solid #21262d; font-size: 11px; color: #6e7681;">
      Received on ${new Date().toUTCString()} • ${siteConfig.name} Portfolio
    </div>
  </div>
</body>
</html>
`;

    const { data, error } = await resend.emails.send({
      from: fromSender,
      to: [recipientEmail],
      replyTo: trimmedEmail,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend API returned error:", error);
      return NextResponse.json(
        {
          success: false,
          message: error.message || "Failed to send email through Resend",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      id: data?.id,
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
