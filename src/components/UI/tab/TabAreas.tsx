import type { ComponentChildren } from 'preact'
import { studyAreasOptions } from '../../../constants/study-areas-opcions'
import BadgeProgram from '../badges/BadgeProgram'
import ContainerProgram from '../../features/areas/ContainerProgram'
import Tabs from './Tabs'

interface TabItem {
  id: string
  label: string
  content: ComponentChildren
}

export default function TabTest() {
  const tabs: TabItem[] = studyAreasOptions.map((area, index) => ({
    id: area.title.replace(/ /g, '').toLowerCase(),
    label: area.title,
    content: (
      <div class="space-y-3 md:space-y-5">
        <div class="flex flex-col lg:flex-row items-center gap-4">
          <div
            class="text-black dark:text-white text-3xl font-bold size-16 md:size-20 rounded-lg grid place-items-center shadow-lg group"
            style={{ backgroundColor: area.color[0] }}
          >
            <span className="text-white text-5xl font-black">{area.id}</span>
          </div>

          <div class="flex-1 space-y-1">
            <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-5">
              <h2 class="text-xl md:text-3xl font-bold">{area.title}</h2>

              <BadgeProgram
                id={index + 1}
                badge={`badge-program-${index + 1}`}
              />
            </div>

            <p class="text-base md:text-lg text-woodsmoke-800 dark:text-woodsmoke-200 text-balance text-center lg:text-left pt-2 lg:pt-0">
              {area.description}
            </p>
          </div>
        </div>

        <ContainerProgram id={index + 1} />
      </div>
    ),
  }))

  return (
    <Tabs
      tabs={tabs}
      size="medium"
      defaultActiveTab="administrativaycontable"
    />
  )
}
