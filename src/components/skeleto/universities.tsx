const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_4s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
const universidades = 15;

export default function SkeletonUniversities() {
  return (
    <>
      {[...Array(universidades)].map((i) => (
        <CardSkeleton key={i} />
      ))}
    </>
  );
}

function CardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden`}>
      <div className="max-w-96 p-5 border-[12px] border-gray-200 rounded-3xl">
        <div className="mb-4 h-7 w-72 bg-gray-200 rounded-md"></div>
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-1 h-6 w-60 bg-gray-200 rounded-md"></div>
          <div className="flex items-center gap-1 h-6 w-16 bg-gray-200 rounded-md"></div>
          <div className="flex items-center gap-1 h-6 w-24 bg-gray-200 rounded-md"></div>
          <div className="flex items-center gap-1 h-6 w-56 bg-gray-200 rounded-md"></div>
        </section>
      </div>
    </div>
  );
}
