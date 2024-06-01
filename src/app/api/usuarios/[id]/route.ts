import { NextRequest, NextResponse } from "next/server";
import { connection } from "@/database/db";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const [user] = await connection.query(`SELECT full_name, email, matricula, Preparatorias.preparatoria as Preparatoria
        from Usuario
        inner join Preparatorias
        on Usuario.preparatoria_id = Preparatorias.id
        where email = ?;`, [params.id])
        console.log(params.id);
        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { error: "Error recuperando el usuario" },
            { status: 500 }
        )
    }
  
}
