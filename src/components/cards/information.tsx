export default function CardInformation({ 
    title, 
    text
} : {
    title: string,
    text: string
}) {
    return (
        <div className="flex flex-col justify-center text-center px-3 sm:pl-4 ms:py-1 sm:text-left sm:border-l-4 sm:border-0 border-blue-950">
            <h2 className="text-lg pb-1 sm:text-xl sm:pb-2 font-medium">{title}</h2>
            <p className="text-sm">{text}</p>
        </div>
    )
}