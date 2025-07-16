import type { APIRoute } from 'astro'
import { supabase } from '../../../lib/supabase'
import { studyAreasOptions } from '../../../constants/study-areas-opcions'

export const GET: APIRoute = async ({ params, url }) => {
  const id = params.id
  const includePrograms = url.searchParams.get('programs') === 'true'
  const includeQuestions = url.searchParams.get('questions') === 'true'
  let programs = null

  try {
    const { data, error } = await supabase
      .from('results')
      .select('*')
      .eq('test_id', id)
      .single()

    if (error) {
      return new Response(
        JSON.stringify({
          error: 'Error al obtener los resultados',
          details: error.message,
        }),
        { status: 500 }
      )
    }

    if (includePrograms) {
      const { data: programsData, error: programsError } = await supabase.rpc(
        'get_random_programs',
        {
          area: studyAreasOptions.find(
            (area: any) => area.id === data.tops[0].id
          )?.id_num,
          limit_count: 6,
        }
      )

      if (programsError) {
        return new Response(
          JSON.stringify({
            error: 'Error al obtener los programas',
            details: programsError.message,
          }),
          { status: 500 }
        )
      }

      programs = programsData
    }

    return new Response(
      JSON.stringify({
        success: true,
        results: data,
        ...(programs && { programs }),
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
