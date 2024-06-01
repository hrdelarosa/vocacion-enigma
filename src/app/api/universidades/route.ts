import { NextResponse } from "next/server";
import { connection } from "@/database/db";

export async function GET() {
    try {
        const [unis] = await connection.query(`SELECT Facultad.id as Id, facultad as Facultad, web as SitioWeb, direccion as Direccion, Areas.area as Area, Ubicacion.ubicacion as Ubicacion
        FROM Facultad
        JOIN Areas ON area_id = Areas.id
        JOIN Ubicacion ON ubicacion_id = Ubicacion.id;`)

        return NextResponse.json({ data: unis }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Error recuperando universidades" },
            { status: 500 }
        )
    }
}