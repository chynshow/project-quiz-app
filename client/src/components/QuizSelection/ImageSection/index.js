import React from 'react';

const ImageSection = () => {
  return (
    <section className='l-quiz-image'>
      <div className='c-image'>
        <img
          className='c-image__fragment-1'
          src='/assets/quiz-selection-imgs/img-1.png'
          alt='fragment'
        />
        <img
          className='c-image__fragment-2'
          src='/assets/quiz-selection-imgs/img-2.png'
          alt='fragment'
        />
      </div>
    </section>
  );
};

export default ImageSection;
