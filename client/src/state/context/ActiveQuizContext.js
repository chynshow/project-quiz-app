import React, { createContext, useContext, useMemo, useReducer } from "react";
import activeQuizReducer from "../reducers/activeQuizReducer";
import { QuizContext } from "./QuizContext";

const initState = {
  isQuizSession: false,
  correctAnsw: [],
  wrongAnsw: [],
  questionNumber: 0,
  showActiveQuiz: false,
  showResult: false,
};

export const ActiveQuizContext = createContext();

export const ActiveQuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(activeQuizReducer, initState);
  const activeQuizState = useMemo(() => {
    return state;
  }, [state]);
  const {
    quizState: { quiz },
  } = useContext(QuizContext);

  const startSession = () => {
    dispatch({ type: "START_SESSION" });
  };

  const stopSession = () => {
    dispatch({ type: "STOP_SESSION" });
  };

  const addCorrectAns = (answer) => {
    dispatch({ type: "ADD_CORRECT_ANSW", payload: answer });
  };

  const addWrongAns = (answer) => {
    dispatch({ type: "ADD_WRONG_ANSW", payload: answer });
  };

  const handleOnAnswer = (correct, questionText, answerText) => {
    if (correct) {
      addCorrectAns({
        question: questionText,
        answer: answerText,
        correct,
      });
    } else if (!correct) {
      addWrongAns({
        question: questionText,
        answer: answerText,
        correct,
      });
    }
    nextQuestion(activeQuizState.questionNumber);
  };

  const nextQuestion = (questionNumber) => {
    if (questionNumber !== quiz.questions.length - 1) {
      dispatch({ type: "INC_QUE_NUMBER" });
    } else {
      dispatch({ type: "SET_DEFAULT_NUMBER" });
      dispatch({ type: "STOP_QUIZ" });
    }
  };

  const restartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  const stopQuiz = () => {
    dispatch({ type: "STOP_QUIZ" });
  };

  const backToQuizDashboard = () => {
    dispatch({ type: "STOP_SESSION" });
  };

  const playAgain = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <ActiveQuizContext.Provider
      value={{
        activeQuizState,
        startSession,
        stopSession,
        addCorrectAns,
        addWrongAns,
        restartQuiz,
        handleOnAnswer,
        stopQuiz,
        backToQuizDashboard,
        playAgain,
      }}
    >
      {children}
    </ActiveQuizContext.Provider>
  );
};
