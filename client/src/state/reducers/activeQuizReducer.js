import {
  START_SESSION,
  STOP_SESSION,
  ADD_CORRECT_ANSW,
  ADD_WRONG_ANSW,
  RESTART_QUIZ,
  INC_QUE_NUMBER,
  SET_DEFAULT_NUMBER,
  STOP_QUIZ,
} from "../types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case START_SESSION:
      return {
        ...state,
        isQuizSession: true,
        showActiveQuiz: true,
        correctAnsw: [],
        wrongAnsw: [],
        showResult: false,
      };
    case ADD_CORRECT_ANSW:
      return { ...state, correctAnsw: [...state.correctAnsw, payload] };

    case ADD_WRONG_ANSW:
      return { ...state, wrongAnsw: [...state.wrongAnsw, payload] };

    case INC_QUE_NUMBER:
      return { ...state, questionNumber: state.questionNumber + 1 };

    case SET_DEFAULT_NUMBER:
      return { ...state, questionNumber: 0 };

    case STOP_QUIZ:
      return { ...state, showResult: true };

    case STOP_SESSION:
      return {
        ...state,
        isQuizSession: false,
        showActiveQuiz: false,
        correctAnsw: [],
        wrongAnsw: [],
        showResult: false,
        questionNumber: 0,
      };
    case RESTART_QUIZ:
      return {
        ...state,
        correctAnsw: [],
        wrongAnsw: [],
        showResult: false,
        questionNumber: 0,
        showActiveQuiz: true,
      };
    default:
      return state;
  }
};
