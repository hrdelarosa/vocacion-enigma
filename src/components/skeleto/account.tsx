const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_4s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export default function AccountSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden`}>
      <div className="h-4 w-[70px] bg-gray-200 rounded-md mb-2"></div>
      <div className="h-9 w-full bg-gray-200 rounded-md mb-4"></div>

      <div className="h-4 w-[70px] bg-gray-200 rounded-md mb-2"></div>
      <div className="h-9 w-full bg-gray-200 rounded-md mb-4"></div>

      <div className="h-4 w-[70px] bg-gray-200 rounded-md mb-2"></div>
      <div className="h-9 w-full bg-gray-200 rounded-md mb-4"></div>

      <div className="h-4 w-[70px] bg-gray-200 rounded-md mb-2"></div>
      <div className="h-9 w-full bg-gray-200 rounded-md mb-4"></div>

      <div className="h-4 w-[70px] bg-gray-200 rounded-md mb-2"></div>
      <div className="h-9 w-full bg-gray-200 rounded-md mb-4"></div>

      <div className="w-28 h-11 mt-2 bg-gray-200 rounded-md"></div>
    </div>
  );
}
