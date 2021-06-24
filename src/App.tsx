import React, { useState } from 'react'
import './App.css'
import Main from './components/main/Main'
import Question from './components/game/question/Question'

const App: React.FC = () => {
  
  const [start, setStart] = useState(false)

  return (
    <section className='main-page'>
      { start ? <Question /> : <Main begin={setStart}/>}
    </section>
    
  )
}

export default App
