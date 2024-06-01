import { NextResponse } from "next/server";
import { connecCuestionarioPrueba } from "@/database/db";

export async function GET({ params }: { params: { id: string } }) {
  try {
    // const [row]: [RowDataPacket[], any] = await connecCuestionarioPrueba.query(`SELECT id FROM cuestionario 
    // ORDER BY id DESC 
    // LIMIT 1;`);

    const usuario = await connecCuestionarioPrueba.query(`SELECT *
    from usuario
    where email = ?;`, [params.id])

    // const cuestionarioId = row[0].id;

    // await connecCuestionarioPrueba.query(`UPDATE usuario
    // SET cuestionario_id = ? 
    // WHERE id = ?;`, [cuestionarioId, user?.email])

    return NextResponse.json({ data: usuario }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: err },
      { status: 500 }
    );
  }
}
