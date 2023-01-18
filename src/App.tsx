import { useState } from 'react'
import { MenuScreen, QuizScreen, EndScreen } from './components'

import { QuizContext } from './utils/Context'
function App() {
  const [quizState, setQuizState] = useState("menu")
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <h1>Quizm</h1>
      <QuizContext.Provider value={{ quizState, setQuizState, score, setScore }}>
        {quizState === "menu" && <MenuScreen/>}
        {quizState === "quiz" && <QuizScreen/>}
        {quizState === "end" && <EndScreen/> }
      </QuizContext.Provider>
    </div>
  )
}

export default App
