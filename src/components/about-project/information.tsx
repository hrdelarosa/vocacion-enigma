import { ReactNode } from "react"

export default function AboutInformation({ 
    title, 
    text,
    children
} : {
    title: string,
    text: string,
    children: ReactNode

} ) {
    return (
        <article className="flex flex-col items-center bg-[#C9EBFF] text-[#171523] px-5 py-8 sm:gap-8 sm:py-9 sm:px-28 sm:flex-row">
            <div className="text-center mb-3 sm:text-left">
                <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
                <p className="text-lg mt-3 sm:text-xl sm:pt-4 sm:pr-10">
                    {text}
                </p>
            </div>
            {children}
      </article>
    )
}