import { NextResponse, NextRequest } from "next/server";
import { insertPrueba } from "@/lib/data";
import { resultadoArea } from "../../../../logic/resultado";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    const supabase = createServerComponentClient({ cookies });

    try {
        const { prueba } = await request.json();
        
        const resultado = resultadoArea(prueba);

        const newEntry = {
          respuestas: JSON.stringify(prueba),
          resultado: resultado,
        };
      
        const { data, error } = await supabase
          .from("cuestionario")
          .insert([newEntry]);
      
        if (error) {
          console.error("Error inserting data:", error);
          return { success: false, error };
        }
      
        console.log("Data inserted:", data);
        const result = { success: true, data };

        // const result = await insertPrueba(prueba)

        if (result.success) return NextResponse.json({ data: "Respuestas y Resultado guardado Correctamente." }, { status: 200 });
        else return NextResponse.json({ error: result.success }, { status: 500 })

    } catch (err) {
        console.error("Error al guardar las respuestas:", err);
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

// import { NextResponse, NextRequest } from "next/server";
// import { connection } from "../../../database/db"
// import { resultadoArea } from "../../../../logic/resultado";

// export async function POST(request: NextRequest) {
//     try {
//         const { prueba } = await request.json();
        
//         if (!Array.isArray(prueba)) {
//             throw new Error("El campo 'prueba' debe ser un array.");
//         }

//         const result = {
//             prueba: JSON.stringify(prueba)
//         };
//         const resultado = resultadoArea(prueba)

//         await connection.query(`INSERT INTO Cuestionario(respuestas, resultado)
//         VALUES (?, ?);`, [result.prueba, resultado]);

//         return NextResponse.json({ data: "Respuestas y Resultado guardado Correctamente." }, { status: 200 });

//     } catch (err) {
//         console.error("Error al guardar las respuestas:", err);
//         return NextResponse.json({ error: err }, { status: 500 });
//     }
// }

