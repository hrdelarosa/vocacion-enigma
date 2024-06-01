import { NextResponse, NextRequest } from "next/server";
import { connection } from "@/database/db";
import { RowDataPacket } from "mysql2";

export async function POST(request: NextRequest) {
    try {
        const { area } = await request.json();

        const [row]: [RowDataPacket[], any] = await connection.query(`SELECT id FROM uestionario 
        ORDER BY id DESC LIMIT 1;`);

        const cuestionarioId = row[0].id

        await connection.query(`UPDATE Cuestionario 
        SET resultado = ?
        WHERE id = ?;`, [area, cuestionarioId])

        // return NextResponse.json({ data: cuestionarioId }, { status: 200 });
        return NextResponse.json({ data: "Resultado guardado correctamente." }, { status: 200 });

    } catch (err) {
        console.error("Error al guardar las respuestas:", err);
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

