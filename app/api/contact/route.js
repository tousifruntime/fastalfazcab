import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "");
const RATE_LIMIT_WINDOW_MS = 3 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitMap = new Map();

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(1000),
});

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return realIp || "127.0.0.1";
}

function checkSimpleRateLimit(request) {
  const now = Date.now();
  const ip = getClientIp(request);
  const current = rateLimitMap.get(ip);

  if (!current || now >= current.resetAt) {
    const resetAt = now + RATE_LIMIT_WINDOW_MS;
    rateLimitMap.set(ip, { count: 1, resetAt });
    return { success: true, resetAt };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { success: false, resetAt: current.resetAt };
  }

  current.count += 1;
  return { success: true, resetAt: current.resetAt };
}

function getCorsHeaders(request) {
  const origin = request.headers.get("origin");
  const allowedOrigins = [
    process.env.MY_FRONTEND_URL_DEV,
    process.env.MY_FRONTEND_URL_PROD,
    "http://localhost:3000",
    "http://172.21.160.1:3000",
  ].filter(Boolean);

  const isAllowed = !!origin && allowedOrigins.includes(origin);

  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : allowedOrigins[0] || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
    Vary: "Origin, Access-Control-Request-Headers",
  };
}

function buildAdminEmailHtml({ name, email, message, dateStr }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0;padding:0;background-color:#f4f5f7;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f5f7;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border:1px solid #e5e7eb;max-width:600px;">
            <tr>
              <td bgcolor="#111827" style="background-color:#111827;padding:24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="left" style="color:#ffffff;font-size:18px;font-weight:bold;font-family:Arial,Helvetica,sans-serif;">New Contact Message</td>
                    <td align="right" style="color:#9ca3af;font-size:12px;font-family:Arial,Helvetica,sans-serif;">${dateStr}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 0 32px;font-family:Arial,Helvetica,sans-serif;color:#374151;font-size:14px;line-height:20px;">You have received a new message from your website contact form.</td>
            </tr>
            <tr>
              <td style="padding:20px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #e5e7eb;">
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;font-family:Arial,Helvetica,sans-serif;">
                      <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#9ca3af;font-weight:bold;margin-bottom:4px;">Name</span>
                      <span style="font-size:14px;color:#111827;">${safeName}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;font-family:Arial,Helvetica,sans-serif;">
                      <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#9ca3af;font-weight:bold;margin-bottom:4px;">Email</span>
                      <a href="mailto:${safeEmail}" style="font-size:14px;color:#2563eb;text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 20px;font-family:Arial,Helvetica,sans-serif;">
                      <span style="display:block;font-size:11px;text-transform:uppercase;letter-spacing:0.5px;color:#9ca3af;font-weight:bold;margin-bottom:8px;">Message</span>
                      <span style="font-size:14px;color:#111827;line-height:22px;">${safeMessage}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 28px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td bgcolor="#111827" style="background-color:#111827;">
                      <a href="mailto:${safeEmail}" style="display:inline-block;padding:12px 24px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;">Reply to ${safeName}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td bgcolor="#f9fafb" style="background-color:#f9fafb;padding:16px 32px;border-top:1px solid #e5e7eb;">
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9ca3af;line-height:18px;">This message was sent automatically from your website's contact form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request) {
  const corsHeaders = getCorsHeaders(request);

  try {
    const rateLimit = checkSimpleRateLimit(request);
    if (!rateLimit.success) {
      const retryAfterSeconds = Math.max(
        1,
        Math.ceil((rateLimit.resetAt - Date.now()) / 1000)
      );

      return Response.json(
        {
          message: "Too many requests. Please wait a moment and try again.",
          retryAfterSeconds,
        },
        { status: 429, headers: corsHeaders }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { message: "Invalid JSON payload." },
        { status: 400, headers: corsHeaders }
      );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(
        {
          message: "Invalid input.",
          errors: parsed.error.issues,
        },
        { status: 400, headers: corsHeaders }
      );
    }

    const { name, email, message } = parsed.data;
    const adminEmailAddress = process.env.CONTACT_EMAIL;

    if (!process.env.RESEND_API_KEY || !adminEmailAddress) {
      console.error("Missing email configuration: RESEND_API_KEY or CONTACT_EMAIL");
      return Response.json(
        { message: "Email service is not configured yet." },
        { status: 500, headers: corsHeaders }
      );
    }

    const dateStr = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    // SEND ONLY TO ADMIN - NO CLIENT EMAIL
    const adminPayload = {
      from: `Alfaz Cab Service <${fromAddress}>`,
      to: adminEmailAddress,
      replyTo: email,
      subject: `New contact inquiry from ${name}`,
      html: buildAdminEmailHtml({ name, email, message, dateStr }),
    };

    const adminResult = await resend.emails.send(adminPayload);

    if (adminResult.error) {
      console.error("Resend delivery failed", adminResult);
      return Response.json(
        { message: "Your message could not be sent. Please try again later." },
        { status: 502, headers: corsHeaders }
      );
    }

    return Response.json(
      { message: "Contact form submitted successfully." },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}