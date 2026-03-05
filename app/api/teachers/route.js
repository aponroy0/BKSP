import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/in-general/get-all-teachers`,
      { cache: "no-store" }, // prevent caching issues
    );

    if (!response.ok) {
      throw new Error("Failed to fetch teachers");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching teachers:", error);

    return NextResponse.json(
      { error: "Failed to fetch teachers" },
      { status: 500 },
    );
  }
}
