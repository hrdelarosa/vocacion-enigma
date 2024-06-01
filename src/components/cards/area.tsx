export default function CardArea({ area, text }: { area: string, text: string }) {
    return (
        <div className="border-2 border-blue-950 max-w-sm rounded-[27px]">
            <div className="bg-blue-950 rounded-t-3xl px-4 py-3">
                <h1 className="text-base sm:text-lg text-white font-semibold">{area}</h1>
            </div>
            <p className="text-xs sm:text-base px-4 py-3">{text}</p>
        </div>
    )
}
