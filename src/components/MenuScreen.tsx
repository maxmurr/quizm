import { useContext } from 'react'
import { QuizContext } from '../utils/Context'

const MenuScreen = () => {
  const { quizState, setQuizState } = useContext(QuizContext)

  return (
    <div className='Menu'>
      <button
        onClick={() => {(setQuizState("quiz"))}}
      >Start Quiz</button>
      <button>Create Quiz</button>
    </div>
  )
}

export default MenuScreen