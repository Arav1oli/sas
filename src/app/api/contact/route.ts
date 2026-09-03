import { NextResponse } from "next/server";

// STUB — replace with real delivery before launch. Options, cheapest first:
//  1. Wire this to the firm's CRM inbox via its API (a lead becomes a
//     record, not just an email — optimisation #18 in the rebuild brief).
//  2. At minimum, send via a transactional email provider (Resend, Postmark)
//     to a real firm inbox — the current site's decoded contact email is a
//     placeholder ("office@example.com"), so get the real address first.
// This stub validates the payload and returns success without sending
// anything, so the frontend can be tested end-to-end before that's wired up.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string" ||
    !body.name.trim() ||
    !body.email.includes("@") ||
    !body.message.trim()
  ) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  console.log("[contact] enquiry received (not yet wired to email/CRM):", {
    name: body.name,
    phone: body.phone,
    email: body.email,
    matter: body.matter,
  });

  return NextResponse.json({ ok: true });
}
