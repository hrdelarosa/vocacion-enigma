const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_4s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
const areas = 7;

export default function SkeletonAreas() {
  return (
    <>
      {[...Array(areas)].map((i) => (
        <CardSkeleton key={i} />
      ))}
    </>
  );
}

function CardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden`}>
      <div className="border-2 border-gray-300 bg-gray-100 max-w-sm rounded-[27px]">
        <div className="bg-gray-300 rounded-t-3xl h-[52px] px-4 py-3">
            <div className="w-[348px] h-7"></div>
        </div>
        <div className="h-[120px]"></div>
      </div>
    </div>
  );
}
