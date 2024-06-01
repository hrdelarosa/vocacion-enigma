import { NextResponse, NextRequest } from "next/server";
import { connection } from "@/database/db";
import crypto from 'node:crypto'
import bcrypt from 'bcrypt'

export async function POST(request: NextRequest) {
    const { full_name, email, contraseña, matricula, preparatoria_id} = await request.json()

    const uuid = crypto.randomUUID()
    const hashedPassword = await bcrypt.hash(contraseña, 10)

    const user = {
        id: uuid,
        full_name,
        email,
        contraseña: hashedPassword,
        matricula,
        createAt: new Date(),
        preparatoria_id
    }

    await connection.query(`INSERT INTO Usuario (id, full_name, email, contraseña, matricula, createAt, preparatoria_id) 
    VALUES(?, ?, ?, ?, ?, ?, ?);`, [user.id, user.full_name, user.email, user.contraseña, user.matricula, user.createAt, user.preparatoria_id])

    return NextResponse.json({ data: user }, { status: 200 })
}