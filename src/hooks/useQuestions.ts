import { useState, useEffect } from 'preact/hooks'
import { questionsChaside } from '../constants/questions-chaside'
import { studyAreasOptions } from '../constants/study-areas-opcions'

export function useQuestions() {
  const [step, setStep] = useState(() => {
    const savedStep = window.localStorage.getItem('currentStep')
    return savedStep ? parseInt(savedStep, 10) : 0
  })
  const [responses, setResponses] = useState<{ [key: number]: string }>({})
  const [loading, setLoading] = useState(false)

  const questionsPerPage: number = 7
  const totalSteps = Math.ceil(questionsChaside.length / questionsPerPage)
  const questions = questionsChaside.slice(
    step * questionsPerPage,
    (step + 1) * questionsPerPage
  )
  const allAnswers = questions.every(
    (question) => responses[question.id] !== undefined
  )

  const nextStep = async () => {
    if (step === totalSteps - 1) {
      setLoading(true)
      const newResults = { C: 0, H: 0, A: 0, S: 0, I: 0, D: 0, E: 0 }

      questionsChaside.forEach((question) => {
        if (responses[question.id] === 'Si')
          newResults[question.area as keyof typeof newResults] += 1
      })

      const mostAreas = Object.entries(newResults)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([area, score]) => {
          const areaInfo = studyAreasOptions.find((opt) => opt.id === area)
          return {
            id: area,
            score,
            name: areaInfo?.title,
          }
        })

      const res = await fetch('http://localhost:4321/api/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responses,
          scores: newResults,
          tops: mostAreas,
        }),
      })

      const data = await res.json()
      window.localStorage.setItem('test_id', data.test_id)
      document.cookie = `test_id=${data.test_id}; path=/; max-age=${
        60 * 60 * 24 * 7
      }`
      window.location.href = '/prueba/resultados'
      setLoading(false)
    }

    setTimeout(() => {
      window.scrollTo({
        top: 195,
        behavior: 'smooth',
      })
    }, 100)

    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleAnswerChange = (questionId: number, value: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: value }))
  }

  useEffect(() => {
    const savedResponses = window.localStorage.getItem('responses')
    if (savedResponses) {
      setResponses(JSON.parse(savedResponses))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('responses', JSON.stringify(responses))
    window.localStorage.setItem('currentStep', String(step))
  }, [responses, step])

  useEffect(() => {
    const testId = document.cookie
      .split(';')
      .find((cookie) => cookie.startsWith('test_id='))

    if (testId) window.location.href = `/prueba/resultados`
  }, [])

  return {
    step,
    questionsPerPage,
    totalSteps,
    questions,
    allAnswers,
    nextStep,
    prevStep,
    handleAnswerChange,
    responses,
    loading,
  }
}
