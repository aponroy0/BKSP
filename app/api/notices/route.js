import { NextResponse } from "next/server";

export async function GET() {
  try {
    const notices = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/in-general/get-all-notices`,
      { cache: "no-store" }, // prevent caching issues
    );

    if (!notices.ok) {
      throw new Error("Failed to fetch notices");
    }

    const data = await notices.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching notices:", error);
    return new NextResponse.json(
      { error: "Failed to fetch notices" },
      { status: 500 },
    );
  }
}
