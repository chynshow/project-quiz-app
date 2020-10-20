import React from 'react';
import ImageSection from '../Common/ImageSection';
import BackBtn from './../Common/BackBtn';
import useInterselect from '../../hooks/useInterselect';

const QuizInfo = () => {
  return (
    <div className='c-quiz-info'>
      <BackBtn className='c-quiz-info__back-btn' />
      <div className='l-sections-container'>
        <QuizInfoSection />
      </div>
    </div>
  );
};

export default QuizInfo;

const QuizInfoSection = () => {
  const [ref, entry] = useInterselect({
    threshold: 0.5,
  });
  if (entry.isIntersecting) {
    console.log(entry);
  }
  return (
    <>
      <section ref={ref} className='c-quiz-info__section'>
        <h2 className='c-title-secondary c-quiz-info__title'>
          What is quiz app?
        </h2>
        <p className='c-paragraph c-quiz-info__description'>
          sunt officiis ut quae quam asperiores inventore vitae suscipit commodi
          sint, possimus, quo repellendus ducimus voluptate non. Quidem
          obcaecati reprehenderit quis veniam asperiores, molestiae atque odio
          quas nam inventore quod explicabo corrupti, fugiat dolore rem,
          molestias quae neque culpa sequi ad facilis aspernatur ipsum vel.
          Eligendi suscipit velit veniam itaque dicta ratione iste? Doloribus
          est sapiente incidunt dolorum fugit odio, ad impedit harum vero
          officia veritatis dignissimos corrupti non aliquam illum illo laborum
          nobis totam alias.
        </p>
      </section>
      <ImageSection src='bermuda-778.png' />
    </>
  );
};
