import Button from './Button'
import { useQuestions } from '../../../hooks/useQuestions'

export default function ContainerQuestions() {
  const {
    step,
    totalSteps,
    questions,
    allAnswers,
    nextStep,
    prevStep,
    handleAnswerChange,
    responses,
    questionsPerPage,
    loading,
  } = useQuestions()

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-[calc(100vh-440px)]">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="space-y-8 animate-fade-in">
          <div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Progreso</p>
              <p className="font-medium">
                {step} de {totalSteps - 1}
              </p>
            </div>

            <div className="w-full h-2 bg-woodsmoke-200 dark:bg-woodsmoke-600 rounded-full mt-2">
              <div
                className="h-full bg-sail-800 dark:bg-sail-400 rounded-full"
                style={{ width: `${(step / (totalSteps - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="rounded-lg p-6 border border-woodsmoke-300/55 dark:border-woodsmoke-600/55 shadow-sm space-y-5">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold leading-none tracking-tight">
                Preguntas {step * questionsPerPage + 1} -{' '}
                {step * questionsPerPage + questions.length}
              </h2>
              <p className="text-sm text-woodsmoke-800 dark:text-woodsmoke-200">
                Indica <strong>si</strong> estás de acuerdo o{' '}
                <strong>no</strong> con cada afirmación
              </p>
            </div>

            <div className="space-y-6">
              {questions.map((question) => (
                <div className="space-y-2" key={question.id}>
                  <p className="text-lg font-medium">
                    {question.id}. {question.questions}
                  </p>

                  <div
                    role="radiogroup"
                    className="flex items-center gap-2 space-x-4"
                  >
                    <label
                      htmlFor={`question-${question.id}-yes`}
                      className="flex flex-row items-center gap-2.5 dark:text-white light:text-black"
                    >
                      <input
                        id={`question-${question.id}-yes`}
                        type="radio"
                        name={`question-${question.id}`}
                        value="Si"
                        checked={responses[question.id] === 'Si'}
                        onChange={() => handleAnswerChange(question.id, 'Si')}
                        className="peer hidden"
                      />
                      <div className="h-5 w-5 flex rounded-md border border-check-border bg-check-light dark:bg-check-dark peer-checked:bg-sail-800 dark:peer-checked:bg-sail-400 transition-colors cursor-pointer">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 stroke-check-light dark:stroke-check-dark"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 12.6111L8.92308 17.5L20 6.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      {question.responses[0]}
                    </label>

                    <label
                      htmlFor={`question-${question.id}-no`}
                      className="flex flex-row items-center gap-2.5 dark:text-white light:text-black"
                    >
                      <input
                        id={`question-${question.id}-no`}
                        type="radio"
                        name={`question-${question.id}`}
                        value="No"
                        checked={responses[question.id] === 'No'}
                        onChange={() => handleAnswerChange(question.id, 'No')}
                        className="peer hidden"
                      />
                      <div className="h-5 w-5 flex rounded-md border border-check-border bg-check-light dark:bg-check-dark peer-checked:bg-sail-800 dark:peer-checked:bg-sail-400 transition-colors cursor-pointer">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-5 h-5 stroke-check-light dark:stroke-check-dark"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 12.6111L8.92308 17.5L20 6.5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      {question.responses[1]}
                    </label>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5">
              <Button button="outline" onClick={prevStep} disabled={step < 1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="lucide lucide-arrow-left-icon lucide-arrow-left group-hover:-translate-x-1 transition-transform"
                >
                  <path d="m12 19-7-7 7-7M19 12H5" />
                </svg>
                Anterior
              </Button>

              {/* <Button onClick={asd}>asd</Button> */}

              <Button onClick={nextStep} disabled={!allAnswers}>
                {step === totalSteps - 1 ? 'Ver Resultados' : 'Siguiente'}
                {step !== totalSteps - 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="lucide lucide-arrow-right-icon lucide-arrow-right group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
