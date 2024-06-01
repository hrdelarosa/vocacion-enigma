const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_4s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export default function AreaSkeleton() {
    return (
        <div className={`${shimmer} relative overflow-hidden`}>
            <div className="h-[120px]">
                <div className="h-[30px] w-56 bg-gray-200 rounded-md"></div>
                <div className="h-[82px] w-[1205px] bg-gray-200 rounded-md mt-1"></div>
            </div>
        </div>
    )
}