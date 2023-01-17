import React, { useState, useEffect, SetStateAction } from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import Results from '../../results/Results'
import { ReactComponent as Elipse } from '../../../assets/question_elipse_left.svg'
import { ReactComponent as StripedSpot } from '../../../assets/question_striped_spot.svg'
import { ReactComponent as PinkSpot } from '../../../assets/question_pink_spot.svg'
import { ReactComponent as RightElipse } from '../../../assets/question_elipse_right.svg'
import ProgressBar from '../progress-bar/ProgressBar'
import { decodeHTML } from '../../results/Results'
import './Question.css'


const Question: React.FC = () => {

  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [completed, setCompleted] = useState(0)

  const questions = useSelector((state: RootStateOrAny) => state.questions)
  const questionIndex = useSelector((state: RootStateOrAny) => state.index)
  const questionDifficulty = useSelector((state: RootStateOrAny) => state.options.question_difficulty)
  const question = questions[questionIndex]
  const answer = question && question.correct_answer
  const category = question && question.category

  const score = useSelector((state: RootStateOrAny) => state.score)

  useEffect(() => {
    setCompleted(Math.floor(questionIndex * 10));
  }, [questionIndex]);

  const dispatch = useDispatch()

  useEffect(() => {
    if (!question) {
      return;
    }
    let answers: SetStateAction<any> = [...question.incorrect_answers]
    answers.splice(question.incorrect_answers.length, 0, question.correct_answer)

    setSelectedAnswers(answers)
  }, [question])

  const handleListItemClick = (event: any) => {

    if (event.target.textContent === answer) {
      dispatch({
        type: 'SET_SCORE',
        score: score + 1,
      })

      dispatch({
        type: 'SET_CORRECT',
        correct: questionIndex,
      })

    }

    if (questionIndex + 1 <= questions.length) {
      setTimeout(() => {

        dispatch({
          type: 'SET_INDEX',
          index: questionIndex + 1,
        })
      }, 500)
    }
  }

  return (
    <>
      {question
        ?
        <>
          <Elipse className='question-elipse-left' />
          <StripedSpot className='question-striped-spot' />
          <div className='question'>
            <h3 className='question__category-title'>{category}</h3>
            <p className='question__level-title'>level {questionDifficulty === 'easy' ? 1 : 2}</p>
            <div className='questions__progress'>
              <p><span className='question__index'>{questionIndex}</span> / <span className='questions__number'>{questions.length}</span></p>
              <ProgressBar completed={completed}></ProgressBar>
            </div>
            <p className='question__text'>{decodeHTML(question.question)}</p>
            <div className='answers-block'>
              {selectedAnswers.map((option, i: number) => (
                <button key={i} onClick={handleListItemClick} className={i === 0 ? 'choice-button' : 'choice-button choice-button--variant'}>
                  {option}
                </button>
              ))}
            </div>

          </div>
          <PinkSpot className='question-pink-spot' />
          <RightElipse className='question-elipse-right' />
        </>
        :
        <Results />
      }

    </>
  )
}
export default Question