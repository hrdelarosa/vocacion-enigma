import { NextResponse } from "next/server";
import { connection } from "@/database/db";

export async function GET() {
  try {
    const [prep] = await connection.query("SELECT * FROM Preparatorias;");
    return NextResponse.json({ data: prep }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Error recuperando preparatorias" },
      { status: 500 }
    );
  }
}
