import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, email, address, service, message } = await request.json();

    if (!name || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "your-email@example.com",
      subject: `New quote request from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "(not provided)"}\nAddress: ${address || "(not provided)"}\nService: ${service || "(not specified)"}\nMessage: ${message || "(none)"}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}