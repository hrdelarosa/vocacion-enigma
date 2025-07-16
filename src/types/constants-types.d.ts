export type Target = '_self' | '_blank'

export interface NavigationItem {
  label: string
  path: string
}

export interface StudyArea {
  title: string
  id: string
  id_num: number
  description: string
  suDescription: string
  longDescription: string
  icon: any
  color: string[]
}

export interface FooterOption {
  links: {
    option: string
    links: Array<{ name: string; url: string; target?: Target }>
  }
  university: {
    option: string
    links: Array<{ name: string; url: string; target?: Target }>
  }
  technologies: {
    option: string
    links: Array<{ name: string; url: string; target?: Target }>
  }
}
