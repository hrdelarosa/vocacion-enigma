import { NextRequest, NextResponse } from "next/server";
import { connection } from "@/database/db";
import { RowDataPacket } from "mysql2";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
  try {
    const [row]: [RowDataPacket[], any] = await connection.query(`SELECT id FROM Cuestionario 
    ORDER BY id DESC 
    LIMIT 1;`);

    const [usuario]: [RowDataPacket[], any] = await connection.query(`SELECT id
    from Usuario
    where email = ?;`, [params.id])

    const cuestionarioId = row[0].id;
    const userId = usuario[0].id

    await connection.query(`UPDATE Usuario
    SET cuestionario_id = ? 
    WHERE id = ?;`, [cuestionarioId, userId])

    return NextResponse.json({ data: 'Se actualizo correctamente el cuestionario del usuario' }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: err },
      { status: 500 }
    );
  }
}
