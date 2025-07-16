import type { APIRoute } from 'astro'
import { supabase } from '../../../lib/supabase'

export const GET: APIRoute = async ({ params }) => {
  const id = Number(params.id)

  try {
    const { data, error } = await supabase
      .from('full_educational_programs')
      .select('*')
      .eq('area_id', id)

    if (error) {
      return new Response(
        JSON.stringify({
          error: 'Error al obtener los datos',
          details: error.message,
        }),
        { status: 500 }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        programs: data,
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
