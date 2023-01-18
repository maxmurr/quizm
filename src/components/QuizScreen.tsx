import { useContext ,useState } from 'react'
import { Questions } from '../utils/Question'
import { QuizContext } from '../utils/Context'

const QuizScreen = () => {
  const { score, setScore, setQuizState } = useContext(QuizContext)

  const [question, setQuestion] = useState(0)
  const [option, setOption] = useState('')

  const nextQuestion = () => {
    if (option === Questions[question].answer) {
      setScore(score + 1)
      console.log(score)
    }
    setQuestion(question + 1)
  }

  const finishQuiz = () => {
    if (option === Questions[question].answer) {
      setScore(score + 1)
    }
    console.log(score)

    setQuizState("end")
  }

  return (
    <div className='Quiz'>
      <h1>{Questions[question].prompt}</h1>
      <div className='Options'>
        <button onClick={() => setOption("A")}>{Questions[question].optionA}</button>
        <button onClick={() => setOption("B")}>{Questions[question].optionB}</button>
        <button onClick={() => setOption("C")}>{Questions[question].optionC}</button>
        <button onClick={() => setOption("D")}>{Questions[question].optionD}</button>
      </div>

    {question === Questions.length - 1 ? <button onClick={finishQuiz}>Finish Quiz</button> : 
      <button onClick={nextQuestion}>Next Questiion</button>
    }
    </div>
  )
}

export default QuizScreen