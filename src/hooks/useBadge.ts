import { useEffect, useState } from 'preact/hooks'

export function useBadge({ id }: { id: number }) {
  const [total, setTotal] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)

  const getTotalPrograms = async () => {
    setLoading(true)
    const res = await fetch(`/api/programs/total/${id}`)
    const data = await res.json()

    setTotal(data)
    setLoading(false)
  }

  useEffect(() => {
    getTotalPrograms()
  }, [])

  return { total, loading }
}
