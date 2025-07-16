import type { ComponentChildren, JSX } from 'preact'
import type { Button, Size } from '../../../types/buttons'

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  children: ComponentChildren
  button?: Button
  size?: Size
  disabled?: boolean
}

export default function Button({
  children,
  button = 'primary',
  size = 'large',
  ...props
}: Props) {
  return (
    <button
      className={`flex items-center justify-center gap-2 text-sm font-semibold rounded-lg cursor-pointer transition-all group hover:shadow-lg dark:hover:shadow-black/90 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:[&_svg]:translate-x-0 select-none
      ${
        size === 'small'
          ? 'px-3 py-2 text-sm'
          : 'px-4 py-2.5 text-sm sm:text-base'
      }
      ${
        button === 'primary'
          ? 'text-primary-light dark:text-primary-dark bg-sail-700 dark:bg-sail-300 hover:bg-sail-800 dark:hover:bg-sail-400'
          : button === 'secondary'
          ? 'text-primary-dark dark:text-primary-light bg-woodsmoke-100 dark:bg-woodsmoke-800 hover:bg-woodsmoke-100/70 dark:hover:bg-woodsmoke-900'
          : button === 'outline' &&
            'outline-1 outline-woodsmoke-200 text-primary-dark hover:bg-woodsmoke-100/40 dark:outline-woodsmoke-600 dark:text-primary-light dark:hover:bg-woodsmoke-900/50 duration-300 ease-in-out'
      }`}
      {...props}
    >
      {children}
    </button>
  )
}
