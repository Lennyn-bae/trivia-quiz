import React, { ChangeEvent } from 'react'
import StartButton from './start-button/StartButton'
import { ReactComponent as TitleLogo } from '../../assets/title.svg'
import { ReactComponent as DifficultyIcon } from '../../assets/difficulty.svg'
import { ReactComponent as StripedCircle } from '../../assets/striped_circle_left.svg'
import { ReactComponent as StripedPinkCircle } from '../../assets/striped_pink_right.svg'
import { ReactComponent as StartSpot } from '../../assets/start_spot_left.svg'
import { ReactComponent as StartSpotRight } from '../../assets/start_spot_right.svg'
import { ReactComponent as AmountIcon } from '../../assets/amount.svg'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { IProps } from './IMain'
import './Main.css'

const Main: React.FC<IProps> = (props) => {
  const {
    begin
  } = props

  const startQuiz = () => begin(true)
  const options = ['easy', 'hard']
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
      <div className='welcome-page__settings'>
        <h1 className='welcome-page__title'>Welcome to the</h1>
        <TitleLogo className='welcome-page__logo' />
        <div>

          <div className='level'>
            <DifficultyIcon />
            <p className='level__title'>Difficulty:</p>
          </div>

          <select value={questionDifficulty} onChange={handleDifficultyChange} className='level__field'>
            {
              options.map((option: any, index: number) => (
                <option key={index} value={option}>
                  {option}
                </option>
              )
              )}
          </select>
        </div>

        <div className='amount__wrapper'>
          <div className='amount__header'>
            <AmountIcon />
            <p className='amount__title'>Amount</p>
          </div>

          <input value={questionAmount} onChange={handleAmountChange} className='amount__field' />
        </div>
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

