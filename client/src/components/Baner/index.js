import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageSection from './../Common/ImageSection';

const Baner = () => {
  return (
    <div className='c-baner'>
      <section className='l-title-section'>
        <h1 className='c-title-primary c-baner__title'>Welcome to Quiz app</h1>
        <p className='c-baner__sub-title'>
          Test your professional skills Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Odio, praesentium?
        </p>
        <div className='l-btns-container'>
          <NavLink
            to='/select-quiz'
            activeClassName='c-link--active'
            className='c-btn c-btn--primary'
          >
            Get started
          </NavLink>
          <NavLink
            activeClassName='c-link--active'
            to='/quiz-info'
            className='c-link c-btn c-btn--primary'
          >
            Learn More
          </NavLink>
        </div>
      </section>
      <ImageSection src='bermuda-coming-soon.png' />
    </div>
  );
};

export default Baner;
