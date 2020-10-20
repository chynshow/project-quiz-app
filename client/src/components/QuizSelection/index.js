import React from 'react';
import BackBtn from './../Common/BackBtn';
import QuizzesTableSection from './QuizzesTableSection';
import ImageSection from './ImageSection';

const QuizSelection = () => {
  return (
    <div className='l-select-quiz'>
      <BackBtn className='l-select-quiz__back-btn' />
      <ImageSection />
      <QuizzesTableSection />
    </div>
  );
};

export default QuizSelection;
