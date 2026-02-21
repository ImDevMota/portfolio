import { NextRequest, NextResponse } from "next/server";
import { sql } from "../../../libs/neon";

export async function GET() {
  try {
    const comments = await sql`
      SELECT * FROM comments ORDER BY created_at DESC
    `;
    return NextResponse.json(comments);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch comments." },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, message, profile_url } = await req.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 },
      );
    }

    const rows = await sql`
      INSERT INTO comments (name, message, profile_url)
      VALUES (${name}, ${message}, ${profile_url || null})
      RETURNING *
    `;

    return NextResponse.json(rows[0], { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create comment." },
      { status: 500 },
    );
  }
}
