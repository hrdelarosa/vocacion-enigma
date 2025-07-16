import type { APIRoute } from 'astro'
import { supabase } from '../../lib/supabase'

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json()

    if (!body.responses || !body.scores || !body.tops) {
      return new Response(
        JSON.stringify({
          error: 'No se proporcionaron datos',
        }),
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('results')
      .insert([
        {
          responses: body.responses,
          scores: body.scores,
          tops: body.tops,
        },
      ])
      .select()

    if (error) {
      return new Response(
        JSON.stringify({
          error: 'Error al guardar los datos',
          details: error.message,
        }),
        { status: 500 }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Datos guardados correctamente',
        test_id: data[0].test_id,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=600, stale-while-revalidate=86400',
        },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500 }
    )
  }
}
