import type { FooterOption } from '../types/constants-types'

export const footerOptions: FooterOption = {
  links: {
    option: 'Enlaces útiles',
    links: [
      {
        name: 'Acerca del proyecto',
        url: '/acerca-del-proyecto',
        target: '_self',
      },
      { name: 'Áreas de estudio', url: '/areas', target: '_self' },
      { name: 'Blog', url: '/blog', target: '_self' },
      {
        name: 'Github',
        url: 'https://github.com/hrdelarosa/vocacion-enigma',
      },
      { name: 'Sobre la prueba', url: '/prueba', target: '_self' },
    ],
  },
  university: {
    option: 'Universidad',
    links: [
      { name: 'Acerca de la UAGro', url: '/uagro', target: '_self' },
      { name: 'Sitio oficial UAGro', url: 'https://www.uagro.mx/' },
      { name: 'Admisión Escolar', url: 'https://admisionescolar.uagro.mx/' },
      { name: 'Oferta Educativa', url: 'https://ofertaeducativa.uagro.mx/' },
      {
        name: 'Licenciaturas',
        url: 'https://www.uagro.mx/index.php/oferta-educativa/licenciaturas',
      },
    ],
  },
  technologies: {
    option: 'Tecnologías',
    links: [
      { name: 'Astro', url: 'https://astro.build/' },
      { name: 'React', url: 'https://reactjs.org/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    ],
  },
}
