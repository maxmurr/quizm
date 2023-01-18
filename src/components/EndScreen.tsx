import { useContext } from "react"
import { QuizContext } from "../utils/Context"
import { Questions } from "../utils/Question"

const EndScreen = () => {
  const { score, setScore, setQuizState } = useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0)
    setQuizState("menu")
  }

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3> {score} / {Questions.length} </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen