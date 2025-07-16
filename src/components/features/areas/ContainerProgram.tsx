import { usePrograms } from '../../../hooks/usePrograms'
import CardPrograms from '../../cards/CardPrograms'
import Skeleton from '../../UI/skeletons/Skeleton'

export default function ContainerProgram({ id }: { id: number }) {
  const { programs, loading } = usePrograms({ id })

  return (
    <div
      class={`grid ${
        programs?.programs.length === 0
          ? 'place-items-center'
          : 'grid-cols-1 md:grid-cols-2 gap-5 pt-2'
      }`}
    >
      {loading ? (
        <>
          <Skeleton className="w-full h-80 rounded-lg" />
          <Skeleton className="w-full h-80 rounded-lg" />
          <Skeleton className="w-full h-80 rounded-lg" />
          <Skeleton className="w-full h-80 rounded-lg" />
          <Skeleton className="w-full h-80 rounded-lg" />
          <Skeleton className="w-full h-80 rounded-lg" />
        </>
      ) : programs?.programs.length === 0 ? (
        <div class="grid place-items-center text-center">
          <p class="text-woodsmoke-800 dark:text-woodsmoke-200 text-3xl text-balance">
            No se encontraron programas para esta área
          </p>

          <p class="text-woodsmoke-800 dark:text-woodsmoke-200 text-3xl text-balance mb-7">
            La Universidad Autónoma de Guerrero no ofrece programas para esta
            área
          </p>

          <span class="text-woodsmoke-500 dark:text-woodsmoke-400 text-base">
            Intenta buscando en otra área
          </span>
        </div>
      ) : (
        programs?.programs.map((program) => <CardPrograms program={program} />)
      )}
    </div>
  )
}
