import { useBadge } from '../../../hooks/useBadge'
import Skeleton from '../skeletons/Skeleton'

export default function BadgeProgram({
  id,
  badge,
}: {
  id: number
  badge: string
}) {
  const { total, loading } = useBadge({ id })

  return (
    <>
      {loading ? (
        <Skeleton className="w-40 h-5 rounded-full" />
      ) : (
        <span
          id={badge}
          class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shrink-0 badge-program animate-fade-in"
        >
          {total} Programas disponibles
        </span>
      )}
    </>
  )
}
