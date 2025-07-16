import type { EducationalProgram } from '../types/educationalPrograms'

export function GroupByArea({ data }: { data: EducationalProgram[] }) {
  return data.reduce((acc: { [key: number]: EducationalProgram[] }, item) => {
    const key = item.area_id

    if (!acc[key]) acc[key] = []

    acc[key].push(item)

    return acc
  }, {} as { [key: number]: EducationalProgram[] })
}
