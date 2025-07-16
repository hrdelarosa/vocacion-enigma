import { useEffect, useState } from 'preact/hooks'
import type { AreasResponse } from '../types/api-response'

export function usePrograms({ id }: { id: number }) {
  const [programs, setPrograms] = useState<AreasResponse>()
  const [loading, setLoading] = useState(true)

  const getPrograms = async () => {
    setLoading(true)
    const res = await fetch(`http://localhost:4321/api/programs/${id}`)
    const data: AreasResponse = await res.json()

    setPrograms(data)
    setLoading(false)
  }

  useEffect(() => {
    getPrograms()
  }, [])

  return { programs, loading }
}
