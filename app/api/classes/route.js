import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/in-general/get-all-classes`,
      { cache: "no-store" }, // prevent caching issues
    );

    if (!response.ok) {
      throw new Error("Failed to fetch classes");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching classes:", error);

    return NextResponse.json(
      { error: "Failed to fetch classes" },
      { status: 500 },
    );
  }
}
