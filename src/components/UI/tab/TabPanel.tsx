import type { ComponentChildren } from 'preact'

interface Props {
  isActive: boolean
  id: string
  ariaLabelledBy: string
  children: ComponentChildren
}

export default function TabPanel({
  isActive,
  id,
  ariaLabelledBy,
  children,
}: Props) {
  return (
    <div
      role="tabpanel"
      class={`p-3 space-y-5 ${!isActive ? 'hidden' : ''}`}
      aria-labelledby={ariaLabelledBy}
      id={id}
      hidden={!isActive}
    >
      {children}
    </div>
  )
}
