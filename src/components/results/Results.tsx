import React from 'react'
import StartButton from '../main/start-button/StartButton'
import StarGrades from './star-grades/StarGrades'
import { ReactComponent as ResultsSpot } from '../../assets/results_spot_left.svg'
import { ReactComponent as StripedSpot } from '../../assets/results_striped_spot.svg'
import { ReactComponent as CloseButton } from '../../assets/close_icon.svg'
import { ReactComponent as StripedPinkSpot } from '../../assets/results_pink.svg'
import { ReactComponent as ResultsRight } from '../../assets/results_right.svg'
import { useSelector, RootStateOrAny } from 'react-redux'
import './Results.css'

const Results: React.FC = () => {

  const score = useSelector((state: RootStateOrAny) => state.score)
  const questions = useSelector((state: RootStateOrAny) => state.questions)
  const correct = useSelector((state: RootStateOrAny) => state.correct)
  const numberOfQuestions = Array.from(Array(questions.length))

  const reloadPage = () => document.location.reload()

  return (
    <div className='results'>
      <ResultsSpot className='results-spot-left' />
      <StripedSpot className='results-striped-spot' />
      <StripedPinkSpot className='results-striped-pink' />
      <ResultsRight className='results-right' />
      <div className='results__details'>

        <div className='results__grade'>
          <div className='profile-icon' ></div>
          <p className='results__title'>You scored <span className='results__score'>{score}</span> / <span>{questions.length}</span></p>
        </div>
        <div className='results__stars'>
          {
            numberOfQuestions.map((index: number, i: number) => (
              <StarGrades
                index={index}
                key={i}
                className={correct[i] ? 'right-answer' : ''}
              />
            ))
          }
        </div>


        <ul className='questions-list'>
          {questions.map((option: any, i: number) => (
            <li
              key={i}
              className={correct.includes(i) ? 'correct-answer' : 'wrong-answer'}
            >
              <span className='answered-question'>{decodeHTML(option.question)}</span>
            </li>
          ))}
        </ul>
        <CloseButton className='close-button' onClick={reloadPage} />
        <StartButton handleQuery={reloadPage}>Play Again</StartButton>
      </div>
    </div>
  )
}

export const decodeHTML = (html: string) => {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

export default Results