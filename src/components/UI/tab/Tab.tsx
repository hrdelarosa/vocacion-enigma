import type { ComponentChildren } from 'preact'

interface Props {
  isActive: boolean
  onClick: () => void
  children: ComponentChildren
  ariaControls: string
}

export default function Tab({
  isActive,
  onClick,
  children,
  ariaControls,
}: Props) {
  return (
    <button
      role="tab"
      className="data-[state=active]:bg-primary-light data-[state=active]:dark:bg-primary-dark text-primary-dark dark:text-primary-light inline-flex items-center justify-center whitespace-nowrap rounded-sm disabled:opacity-50 px-3 py-1.5 cursor-pointer transition-colors duration-300 ease-in-out"
      data-state={isActive ? 'active' : 'inactive'}
      aria-selected={isActive}
      aria-controls={ariaControls}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
