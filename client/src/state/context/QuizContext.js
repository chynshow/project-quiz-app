import React, { createContext, useReducer, useMemo, useCallback } from "react";
import quizReducer from "../reducers/quizReducer";
import axios from "axios";
import setToken from "../../utilis/setToken";
import sortQuizzes from "../../utilis/sortQuizzes";

const initState = {
  quizzes: null,
  quiz: null,
  loading: true,
  quizId: null,
  temporaryQuizzes: null,
};
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  if (localStorage.token) setToken(localStorage.token);

  const [state, dispatch] = useReducer(quizReducer, initState);

  const quizState = useMemo(() => {
    return state;
  }, [state]);

  const getQuizzes = useCallback(async () => {
    try {
      const res = await axios.get("/api/v1/quizzes/all");
      dispatch({ type: "SET_QUIZZES", payload: res.data });
    } catch (error) {
      throw error.response.data.error;
    }
  }, []);

  const getQuizById = useCallback(async (quizId) => {
    try {
      const res = await axios.get(`/api/v1/quizzes/quiz/${quizId}`);
      dispatch({ type: "SET_QUIZ", payload: res.data });
    } catch (error) {
      throw error.response.data.error;
    }
  }, []);

  const getQuizForCurrentUser = useCallback(async () => {
    try {
      const res = await axios.get(`/api/v1/quizzes`);
      dispatch({ type: "SET_QUIZZES", payload: res.data });
    } catch (error) {
      throw error.response.data.error;
    }
  }, []);

  const addQuiz = async ({ title, description }) => {
    try {
      const res = await axios.post(
        "/api/v1/quizzes/add",
        JSON.stringify({ title, description }),
        { headers: { "Content-Type": "application/json" } }
      );
      dispatch({ type: "ADD_QUIZ", payload: res.data });
    } catch (error) {
      throw error.response.data.error;
    }
  };

  const delQuiz = async () => {
    try {
      const res = await axios.delete(`/api/v1/quizzes/${quizState.quizId}`);

      dispatch({ type: "DELETE_QUIZ", payload: res.data });
    } catch (error) {
      throw error.response.data.error;
    }
  };

  const addQuestion = async (questionItem) => {
    try {
      const res = await axios.post(
        `/api/v1/questions/add/${quizState.quizId}`,
        JSON.stringify({ questionItem }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch({ type: "ADD_QUESTION", payload: res.data });
    } catch (error) {
      throw error.response.data.error;
    }
  };

  const delQuestion = async (questionId) => {
    try {
      const res = await axios.delete(
        `/api/v1/questions/${quizState.quizId}/${questionId}`
      );
      dispatch({ type: "DELETE_QUESTION", payload: res.data });
    } catch (error) {
      throw error.response.data.error;
    }
  };

  const cleanQuiz = useCallback(() => {
    dispatch({ type: "CLEAN_QUIZ" });
  }, []);

  const sortBy = (filter) => {
    const sortedQuizzes = sortQuizzes(
      filter,
      quizState[quizState.temporaryQuizzes ? "temporaryQuizzes" : "quizzes"]
    );
    dispatch({ type: "SORT_QUIZZES", payload: sortedQuizzes });
  };

  const updateRating = async (quizRating) => {
    try {
      const res = await axios.put(
        `/api/v1/quizzes/rating/${quizState.quizId}`,
        JSON.stringify({ quizRating }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      dispatch({ type: "SET_QUIZ", payload: res.data });
    } catch (error) {
      throw error.response.data.error;
    }
  };

  const searchFilter = (filter) => {
    const quizzes = quizState.quizzes.filter((q) => {
      return (
        q.title.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1
      );
    });
    dispatch({ type: "SEARCH_QUIZZES", payload: quizzes });
  };

  const clearTempQuizzes = () => {
    dispatch({ type: "CLEAN_TEMP_QUIZZES" });
  };

  return (
    <QuizContext.Provider
      value={{
        quizState,
        getQuizzes,
        getQuizById,
        getQuizForCurrentUser,
        addQuiz,
        addQuestion,
        cleanQuiz,
        delQuiz,
        delQuestion,
        sortBy,
        updateRating,
        searchFilter,
        clearTempQuizzes,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
