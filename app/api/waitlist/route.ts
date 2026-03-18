import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const { email, name, business_type } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase.from("waitlist").insert([
      {
        email,
        name: name || null,
        business_type: business_type || null,
        source: "marketing_website",
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      // Duplicate email — not a failure from user's perspective
      if (error.code === "23505") {
        return NextResponse.json(
          { success: true, message: "You're already on the list!" },
          { status: 200 }
        );
      }
      console.error("Supabase error:", error);
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "You're on the list!" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
