import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const email = data.get("email")?.toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    // TODO: integrate with your email marketing platform (e.g., Mailchimp, Brevo, SendGrid)
    // Example: await addSubscriber(email);

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch {
    return NextResponse.json({ error: "Subscription failed. Please try again." }, { status: 500 });
  }
}
