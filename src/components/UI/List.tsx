import type { ComponentChildren } from 'preact'

export default function List({ children }: { children: ComponentChildren }) {
  return (
    <li class="flex">
      <div class="size-1.5 bg-sail-700 dark:bg-sail-400 rounded-full mt-2 mr-2.5 flex-shrink-0"></div>

      <p>{children}</p>
    </li>
  )
}
