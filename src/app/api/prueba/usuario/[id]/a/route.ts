import { NextResponse, NextRequest } from "next/server";
import { connecCuestionario } from "@/database/db";

export async function GET(request: NextRequest, { params }: { params: { id: string }}) {
    try {
        const [rows] = await connecCuestionario.query('SELECT * FROM cuestionario where id = ?', [params.id]);
        
        return NextResponse.json({ data: rows }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 })
    }
}