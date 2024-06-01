import { NextResponse, NextRequest } from "next/server";
import { connection } from "../../../database/db"
import { resultadoArea } from "../../../../logic/resultado";

export async function POST(request: NextRequest) {
    try {
        const { prueba } = await request.json();
        
        if (!Array.isArray(prueba)) {
            throw new Error("El campo 'prueba' debe ser un array.");
        }

        const result = {
            prueba: JSON.stringify(prueba)
        };
        const resultado = resultadoArea(prueba)

        await connection.query(`INSERT INTO Cuestionario(respuestas, resultado)
        VALUES (?, ?);`, [result.prueba, resultado]);

        return NextResponse.json({ data: "Respuestas y Resultado guardado Correctamente." }, { status: 200 });

    } catch (err) {
        console.error("Error al guardar las respuestas:", err);
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

