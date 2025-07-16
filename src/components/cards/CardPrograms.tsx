import type { EducationalProgram } from '../../types/educationalPrograms'

export default function CardPrograms({
  program,
}: {
  program: EducationalProgram
}) {
  return (
    <div class="bg-woodsmoke-100/55 dark:bg-woodsmoke-900/25 hover:bg-woodsmoke-100/65 dark:hover:bg-woodsmoke-900/35 flex flex-col gap-6 rounded-lg shadow-sm hover:shadow-md p-6 hover:-translate-y-1 transition-all animate-fade-in">
      <div>
        <h3 class="font-semibold tracking-tight text-xl mb-2">
          {program.program}
        </h3>
        <div class="flex items-center space-x-2 text-sm text-woodsmoke-800 dark:text-woodsmoke-100 mb-0.5 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="lucide lucide-building-icon lucide-building size-4 shrink-0"
          >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
          </svg>
          <span>{program.school_name}</span>
        </div>
        <div class="flex items-center space-x-2 text-sm text-woodsmoke-700 dark:text-woodsmoke-100 mb-0.5 shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="lucide size-4 shrink-0"
          >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6" />
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
          </svg>
          <span>{program.duration}</span>
        </div>
      </div>

      <div>
        <p class="text-base text-woodsmoke-700 dark:text-woodsmoke-100 mb-4">
          {program.description}
        </p>

        <div>
          <h4 class="font-semibold mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="lucide lucide-trending-up-icon lucide-trending-up size-4 shrink-0"
            >
              <path d="M16 7h6v6" />
              <path d="m22 7-8.5 8.5-5-5L2 17" />
            </svg>
            Oportunidades Laborales
          </h4>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {program.opportunities.split(',').map((opportunity) => (
              <div class="text-sm text-woodsmoke-700 dark:text-woodsmoke-100 flex items-center">
                <div class="size-2 bg-sail-700 dark:bg-sail-400 rounded-full mr-2" />
                {opportunity.trim()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
