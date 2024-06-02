import { sql } from "@vercel/postgres";
import { Area, Facultad, Preparatoria, Usuario } from "./definitions";
import crypto from 'node:crypto'
import bcrypt from 'bcrypt'
import { resultadoArea } from "../../logic/resultado";

export async function fetchAreas() {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Area>`SELECT * FROM areas`

        return data.rows
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch areas data.');
    }
}

export async function fetchPreparatorias() {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Preparatoria>`SELECT * FROM preparatorias`

        return data.rows
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Preparatorias data.');
    }
}

export async function fetchUniversidades() {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Facultad>`SELECT Facultad.id, facultad as Facultad, web as SitioWeb, direccion as Direccion, Areas.area as Area, Ubicacion.ubicacion as Ubicacion, Programa_Educativo.programa as Programa 
            FROM Facultad 
            JOIN Areas ON area_id = Areas.id 
            JOIN Ubicacion ON ubicacion_id = Ubicacion.id 
            JOIN Facultad_Programa ON Facultad.id = Facultad_Programa.facultad_id 
            JOIN Programa_Educativo ON Facultad_Programa.programa_id = Programa_Educativo.id;
        `

        return data.rows
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Universidades data.');
    }
}

export async function fetchUsuario(email: string) {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        
        const data = await sql<Usuario>`SELECT full_name, email, matricula, Preparatorias.preparatoria as Preparatoria
        from Usuario
        inner join Preparatorias
        on Usuario.preparatoria_id = Preparatorias.id
        where email = ${email};`

        return data.rows
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Usuario data.');
    }
}

export async function fetchInsertUsuario({
    full_name,
    email,
    contraseña,
    matricula,
    preparatoria_id,
}: {
    full_name: string
    email: string
    contraseña: string
    matricula: string
    preparatoria_id: string
}) {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        const uuid = crypto.randomUUID()
        const hashedPassword = await bcrypt.hash(contraseña, 10)
        const createAt = new Date().toISOString()
        
        const data = await sql<Usuario>`INSERT INTO Usuario (id, full_name, email, contraseña, matricula, createAt, preparatoria_id) 
        VALUES(${uuid}, ${full_name}, ${email}, ${hashedPassword}, ${matricula}, ${createAt}, ${preparatoria_id});`

        return data.rows
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Usuario data.');
    }
}

export async function fetchInsertPrueba(prueba: number[]) {
    try {
        // await new Promise((resolve) => setTimeout(resolve, 3000));
        const result = resultadoArea(prueba)
        
        const data = await sql`INSERT INTO Cuestionario(respuestas, resultado)
        VALUES (${JSON.stringify(prueba)}, ${result});`

        return data.rows
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Usuario data.');
    }
}
