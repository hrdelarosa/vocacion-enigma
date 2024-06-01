import { NextRequest, NextResponse } from "next/server";
import { connecCuestionarioPrueba } from "@/database/db";
import { RowDataPacket } from "mysql2";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    const [row]: [RowDataPacket[], any] = await connecCuestionarioPrueba.query(`SELECT id FROM cuestionario 
    ORDER BY id DESC 
    LIMIT 1;`);

    const [usuario]: [RowDataPacket[], any] = await connecCuestionarioPrueba.query(`SELECT id
    from usuario
    where email = ?;`, [email])

    const cuestionarioId = row[0].id;
    const userId = usuario[0].id

    await connecCuestionarioPrueba.query(`UPDATE usuario
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
