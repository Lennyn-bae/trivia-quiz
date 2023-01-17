import React, { ChangeEvent } from 'react'
import StartButton from './start-button/StartButton'
import DifficultyLevel from './difficulty-level/DifficultyLevel'
import QuestionsAmount from './questions-amount/QuestionsAmount'
import { ReactComponent as TitleLogo } from '../../assets/title.svg'
import { ReactComponent as StripedCircle } from '../../assets/striped_circle_left.svg'
import { ReactComponent as StripedPinkCircle } from '../../assets/striped_pink_right.svg'
import { ReactComponent as StartSpot } from '../../assets/start_spot_left.svg'
import { ReactComponent as StartSpotRight } from '../../assets/start_spot_right.svg'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { IProps } from './IMain'
import './Main.css'


const Main: React.FC<IProps> = (props) => {
  const {
    begin
  } = props

  const startQuiz = () => begin(true)
  const questionDifficulty = useSelector((state: RootStateOrAny) => state.options.question_difficulty)
  const questionAmount = useSelector((state: RootStateOrAny) => state.options.amount_of_questions)

  const dispatch = useDispatch()

  const handleDifficultyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: 'CHANGE_DIFFICULTY',
      value: event.target.value,
    })
  }

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE_AMOUNT',
      value: event.target.value,
    })
  }

  const setQuestions = (value: Array<string>) => {
    dispatch({
      type: 'SET_QUESTIONS',
      questions: value
    })
  }

  const handleQuery = async () => {
    const apiUrl = `https://opentdb.com/api.php?amount=${questionAmount}&difficulty=${questionDifficulty}&type=boolean`

    await fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setQuestions(response.results)
      });

    startQuiz()
  }

  return (
    <div className='welcome-page'>
      <h1 className='welcome-page__title'>
        <span className='welcome-page__title-name'>Welcome to the</span>
        <TitleLogo className='welcome-page__logo' />
      </h1>
      <div className='welcome-page__settings'>
        <DifficultyLevel questionDifficulty={questionDifficulty} handleDifficultyChange={handleDifficultyChange} />
        <QuestionsAmount questionAmount={questionAmount} handleAmountChange={handleAmountChange} />
        <StartButton handleQuery={handleQuery}>True</StartButton>
      </div>

      <StripedPinkCircle className='striped-pink-right' />
      <StripedCircle className='striped-circle' />
      <StartSpot className='start-spot-left' />
      <StartSpotRight className='start-spot-right' />

    </div>

  )
}

export default Main

