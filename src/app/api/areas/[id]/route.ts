import { NextRequest, NextResponse } from "next/server";
import { connection } from "@/database/db";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 2000))
        const [unis] = await connection.query(`SELECT area, descripcion FROM Areas
        WHERE area = ?;`, [params.id])

        return NextResponse.json({ data: unis }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Error recuperando universidades" },
            { status: 500 }
        )
    }
}