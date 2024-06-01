import { NextRequest, NextResponse } from "next/server";
import { connection } from "@/database/db";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 2000))
        const [unis] = await connection.query(`SELECT Facultad.id, facultad as Facultad, web as SitioWeb, direccion as Direccion, Areas.area as Area, Ubicacion.ubicacion as Ubicacion, Programa_Educativo.programa as Programa
        FROM Facultad
        JOIN Areas ON area_id = Areas.id
        JOIN Ubicacion ON ubicacion_id = Ubicacion.id
        JOIN Facultad_Programa ON Facultad.id = Facultad_Programa.facultad_id
        JOIN Programa_Educativo ON Facultad_Programa.programa_id = Programa_Educativo.id
        WHERE Areas.area = ?;`, [params.id])

        return NextResponse.json({ data: unis }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Error recuperando universidades" },
            { status: 500 }
        )
    }
}