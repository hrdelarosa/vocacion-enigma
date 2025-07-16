import type { JSX } from 'preact'

type Props = JSX.HTMLAttributes<HTMLDivElement>

export default function Skeleton({ ...props }: Props) {
  return (
    <div
      class={`bg-skeleton-light dark:bg-skeleton-dark animate-pulse ${props.className}`}
      {...props}
    ></div>
  )
}
