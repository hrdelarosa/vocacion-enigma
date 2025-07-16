import type { TabItem } from '../../../types/tabs'
import { useState } from 'preact/hooks'
import Tab from './Tab'
import TabPanel from './TabPanel'

interface Props {
  tabs: TabItem[]
  columns?: number
  size?: 'small' | 'medium' | 'large'
  defaultActiveTab?: string
}

export default function Tabs({
  tabs,
  size = 'small',
  defaultActiveTab,
}: Props) {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || tabs[0]?.id || ''
  )
  const handleTabChange = ({ id }: { id: string }) => {
    setActiveTab(id)
  }

  return (
    <div class="bg-secondary-light dark:bg-secondary-dark rounded-lg pb-1">
      <div
        role="tablist"
        class={`items-center justify-center rounded-lg p-1 grid w-full ${
          size === 'small'
            ? 'grid-cols-3'
            : size === 'medium'
            ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            : 'grid-cols-5'
        } gap-1 bg-secondary-light dark:bg-secondary-dark text-woodsmoke-500 dark:text-woodsmoke-300 text-sm font-medium`}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            isActive={activeTab === tab.id}
            onClick={() => handleTabChange({ id: tab.id })}
            ariaControls={`panel-${tab.id}`}
          >
            {tab.label}
          </Tab>
        ))}
      </div>

      <div class="tab-content mx-1 bg-primary-light dark:bg-primary-dark rounded-md">
        {tabs.map((tab) => (
          <TabPanel
            key={tab.id}
            isActive={activeTab === tab.id}
            id={`panel-${tab.id}`}
            ariaLabelledBy={`tab-${tab.id}`}
          >
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </div>
  )
}
