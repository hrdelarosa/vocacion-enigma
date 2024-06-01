import { NextResponse, NextRequest } from "next/server";
import { connection } from "@/database/db";
import { RowDataPacket } from "mysql2";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
    try {
        const [area]: [RowDataPacket[], any] = await connection.query(`SELECT Cuestionario.resultado 
        FROM Usuario
        INNER join Cuestionario on Usuario.cuestionario_id = Cuestionario.id
        WHERE email = ?;`, [params.id])

        return NextResponse.json({ resultado: area[0].resultado }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 })
    }
}