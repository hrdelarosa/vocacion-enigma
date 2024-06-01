import { NextResponse } from "next/server";
import { connection } from "@/database/db";

export async function GET() {
  try {
    const [areas] = await connection.query("SELECT * FROM areas;");
    return NextResponse.json({ data: areas }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error recuperando Areas" },
      { status: 500 }
    );
  }
}
