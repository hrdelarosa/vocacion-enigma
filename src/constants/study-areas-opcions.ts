import type { StudyArea } from '../types/constants-types'
import Administrative from '../assets/icons/study-areas/administrative.svg'
import Humanistic from '../assets/icons/study-areas/humanistic.svg'
import Arts from '../assets/icons/study-areas/arts.svg'
import Health from '../assets/icons/study-areas/health.svg'
import Engineering from '../assets/icons/study-areas/engineering.svg'
import Microscope from '../assets/icons/study-areas/microscope.svg'
import Security from '../assets/icons/study-areas/security.svg'

export const studyAreasOptions: StudyArea[] = [
  {
    title: 'Administrativa y Contable',
    id: 'C',
    id_num: 1,
    description:
      'Ideal para quienes disfrutan planificar, organizar y tomar decisiones en entornos empresariales.',
    suDescription:
      'Área orientada a la gestión, supervisión y toma de decisiones organizacionales.',
    icon: Administrative,
    color: ['#0077b6', '#f0f9ff'],
    longDescription:
      'El área Administrativa y Contable está dirigida a quienes disfrutan planificar, organizar, analizar y tomar decisiones en entornos empresariales. Incluye carreras como administración, contaduría, finanzas, recursos humanos y gestión de empresas. Es ideal para personas con habilidades para el liderazgo, la organización y la resolución de problemas en contextos corporativos o de negocios.',
  },
  {
    title: 'Humanística y Social',
    id: 'H',
    id_num: 2,
    description:
      'Para personas interesadas en la sociedad, la cultura, la comunicación y el bienestar social.',
    suDescription:
      'Área enfocada en la comunicación, la justicia y el compromiso social.',
    icon: Humanistic,
    color: ['#9d4edd', '#faf6fe'],
    longDescription:
      'El área Humanística y Social está orientada a quienes sienten interés por la sociedad, la cultura, la comunicación, la educación y el bienestar social. Incluye disciplinas como derecho, psicología, sociología, trabajo social, educación, comunicación y ciencias políticas. Es ideal para personas empáticas, con vocación de servicio, pensamiento crítico y habilidades de comunicación.',
  },
  {
    title: 'Artística',
    id: 'A',
    id_num: 3,
    description:
      'Dirigida a quienes desean expresarse creativamente y aprecian la belleza y la originalidad.',
    suDescription:
      'Área dedicada a la creatividad, la expresión personal y el arte.',
    icon: Arts,
    color: ['#FF6F61', '#fff2f1'],
    longDescription:
      'El área Artística está pensada para quienes desean expresarse creativamente y aprecian la belleza y la originalidad. Incluye carreras como bellas artes, diseño gráfico, música, teatro, danza, cine y literatura. Es ideal para personas creativas, sensibles, innovadoras y con interés en la expresión personal y la producción artística.',
  },
  {
    title: 'Ciencias de la Salud',
    id: 'S',
    id_num: 4,
    description:
      'Enfocada en quienes se interesan por el cuidado de la salud, la ciencia y el servicio a los demás.',
    suDescription:
      'Área orientada al cuidado, la salud y el bienestar de las personas.',
    icon: Health,
    color: ['#2CA58D', '#f2fbf8'],
    longDescription:
      'El área de Ciencias de la Salud está dirigida a quienes se interesan por el cuidado de la salud, la ciencia y el servicio a los demás. Incluye carreras como medicina, enfermería, odontología, nutrición, fisioterapia, farmacia, psicología clínica y otras relacionadas con la atención y el bienestar de las personas. Es ideal para personas con vocación de servicio, empatía y responsabilidad.',
  },
  {
    title: 'Ingeniería y Ciencias Exactas',
    id: 'I',
    id_num: 5,
    description:
      'Para quienes disfrutan resolver problemas prácticos con precisión, lógica y análisis, en campos técnicos, tecnológicos o de ingeniería.',
    suDescription:
      'Área enfocada en la lógica, la tecnología y la resolución de problemas complejos.',
    icon: Engineering,
    color: ['#3366CC', '#f1f7fd'],
    longDescription:
      'El área de Ingeniería y Ciencias Exactas está orientada a quienes disfrutan resolver problemas prácticos con precisión, lógica y análisis. Incluye ingenierías, matemáticas, física, informática y disciplinas tecnológicas. Es ideal para personas analíticas, con pensamiento lógico, capacidad de abstracción y gusto por la innovación y la tecnología.',
  },
  {
    title: 'Ciencias Experimentales',
    id: 'E',
    id_num: 6,
    description:
      'Pensada para quienes tienen interés en la investigación, el análisis y el descubrimiento mediante la observación y el método científico.',
    suDescription:
      'Área orientada a la investigación, el análisis y la exploración científica.',
    icon: Microscope,
    color: ['#F4A261', '#fef6ee'],
    longDescription:
      'El área de Ciencias Experimentales está pensada para quienes tienen interés en la investigación, el análisis y el descubrimiento mediante la observación y el método científico. Incluye carreras como biología, química, física, geología y ciencias ambientales. Es ideal para personas curiosas, observadoras, metódicas y con interés en el estudio de la naturaleza y los fenómenos científicos.',
  },
  {
    title: 'Defensa y Seguridad',
    id: 'D',
    id_num: 7,
    description:
      'Ideal para quienes buscan proteger, mantener el orden y servir a la sociedad.',
    suDescription:
      'Área dedicada a la protección, el liderazgo y el orden social.',
    icon: Security,
    color: ['#D7263D', '#fef2f2'],
    longDescription:
      'El área de Defensa y Seguridad está dirigida a quienes buscan proteger, mantener el orden y servir a la sociedad. Incluye carreras como fuerzas armadas, policía, criminología, seguridad pública, protección civil y gestión de riesgos. Es ideal para personas con sentido del deber, liderazgo, disciplina y vocación de servicio a la comunidad.',
  },
]
