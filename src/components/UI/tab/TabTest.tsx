import type { ComponentChildren } from 'preact'
import Tabs from './Tabs'
import List from '../List'

interface TabItem {
  id: string
  label: string
  content: ComponentChildren
}

export default function TabTest() {
  const tabs: TabItem[] = [
    {
      id: 'structure',
      label: 'Estructura',
      content: (
        <>
          <p>
            La prueba CHASIDE consta de 98 preguntas que evalúan tus intereses y
            aptitudes en las áreas de Intereses y Aptitudes, estas se dividen en
            dos partes:
          </p>

          <ul class="list-decimal list-inside space-y-1.5">
            <List>
              <strong>Intereses:</strong> Preguntas relacionadas con actividades
              que te gustaría realizar.
            </List>
            <List>
              <strong>Aptitudes:</strong> Preguntas sobre habilidades que
              consideras tener o actividades que realizas bien.
            </List>
          </ul>

          <p>
            Cada pregunta debe ser respondida con "Sí" o "No", según tus
            preferencias y habilidades.
          </p>
        </>
      ),
    },
    {
      id: 'application',
      label: 'Aplicación',
      content: (
        <>
          <p>
            La aplicación de la prueba es sencilla y toma aproximadamente 15-20
            minutos en completarse:
          </p>

          <ul class="list-decimal list-inside space-y-1.5">
            <li>Lee cada pregunta cuidadosamente.</li>
            <li>
              Responde "Sí" o "No" según tu primera impresión, sin pensar
              demasiado.
            </li>
            <li>Responde todas las preguntas con honestidad.</li>
            <li>
              No hay respuestas correctas o incorrectas, solo preferencias
              personales.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'results',
      label: 'Resultados',
      content: (
        <>
          <p>
            Al finalizar la prueba, se contabilizan las respuestas afirmativas
            para cada área:
          </p>

          <ul class="list-decimal list-inside space-y-1.5">
            <List>
              Las áreas con mayor puntuación indican tus principales intereses y
              aptitudes.
            </List>
            <List>
              Se generan recomendaciones de carreras profesionales relacionadas
              con estas áreas.
            </List>
            <List>
              Los resultados te proporcionan una orientación, no una decisión
              definitiva.
            </List>
          </ul>
        </>
      ),
    },
  ]

  return <Tabs tabs={tabs} defaultActiveTab="structure" />
}
