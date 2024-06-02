import { sql } from "@vercel/postgres";
import { Area, Facultad, Preparatoria } from "./definitions";

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
        throw new Error('Failed to fetch areas data.');
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
        throw new Error('Failed to fetch areas data.');
    }
}
