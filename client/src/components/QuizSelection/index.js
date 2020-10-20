import React from 'react';
import BackBtn from './../Common/BackBtn';
import QuizzesTableSection from './QuizzesTableSection';
import ImageSection from './ImageSection';
import { NavLink } from 'react-router-dom';

const QuizSelection = () => {
  return (
    <div className='l-select-quiz'>
      <BackBtn className='l-select-quiz__back-btn' />
      <ImageSection />
      <QuizzesTableSection />
      <InfoBtn />
    </div>
  );
};

export default QuizSelection;

// TEMP
const InfoBtn = () => (
  <NavLink
    to='/quiz-info'
    className='c-link c-btn--primary c-btn--circle
    l-select-quiz__info-btn
    '
  >
    ?
  </NavLink>
);
