const initState = {
  options: {
    question_difficulty: 'easy',
    amount_of_questions: 10
  },
  questions: [],
  index: 0,
  score: 0,
  selected: false,
  selectedAnswer: null,
  correct: []
}

const Reducer = (state = initState, action: any) => {
  switch (action.type) {

    case "CHANGE_DIFFICULTY":
      return {
        ...state,
        options: {
          ...state.options,
          question_difficulty: action.value
        }
      }


    case "CHANGE_AMOUNT":
      return {
        ...state,
        options: {
          ...state.options,
          amount_of_questions: action.value
        }
      }

    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.questions
      }

    case "SET_INDEX":
      return {
        ...state,
        index: action.index
      }

    case "SET_SCORE":
      return {
        ...state,
        score: action.score
      }


    case "SET_CORRECT":
      return {
        ...state,
        correct: state.correct.concat(action.correct)
      }

    default:
      return state
  }
}

export default Reducer