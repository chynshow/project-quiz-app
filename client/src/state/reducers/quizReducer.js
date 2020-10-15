import {
  SET_QUIZ,
  SET_QUIZZES,
  CLEAN_QUIZ,
  ADD_QUESTION,
  ADD_QUIZ,
  SORT_QUIZZES,
  DELETE_QUIZ,
  DELETE_QUESTION,
  UPDATE_RATING,
  SEARCH_QUIZZES,
  CLEAN_TEMP_QUIZZES,
} from "../types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_QUIZZES:
      return { ...state, quizzes: payload.quizzes, quiz: null, loading: false };
    case SET_QUIZ:
      return {
        ...state,
        quiz: payload.quiz,
        loading: false,
        quizId: payload.quiz._id,
        temporaryQuizzes: null,
      };
    case SORT_QUIZZES:
      return { ...state, quizzes: payload, loading: false };

    case SEARCH_QUIZZES:
      return { ...state, temporaryQuizzes: payload };
    case ADD_QUIZ:
      return { ...state, quizzes: [payload.quiz, ...state.quizzes] };
    case DELETE_QUIZ:
      return {
        ...state,
        quizzes: state.quizzes.filter((q) => q._id !== payload.quiz._id),
      };
    case ADD_QUESTION:
    case DELETE_QUESTION:
      return {
        ...state,
        quiz: { ...state.quiz, questions: payload.questions },
      };
    case UPDATE_RATING:
      return { ...state, quiz: { ...state.quiz, rating: payload.rating } };
    case CLEAN_QUIZ:
      return { ...state, quiz: null, quizId: null };

    case CLEAN_TEMP_QUIZZES:
      return { ...state, temporaryQuizzes: null };
    default:
      return state;
  }
};
