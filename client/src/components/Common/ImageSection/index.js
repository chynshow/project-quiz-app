import React from 'react';
import PropTypes from 'prop-types';

const ImageSection = ({ src }) => {
  return (
    <section className='c-img-section'>
      <img
        className='c-img-section__img'
        src={`/assets/${src}`}
        alt='hero img'
      />
    </section>
  );
};

export default ImageSection;

ImageSection.propTypes = {
  src: PropTypes.string.isRequired,
};

ImageSection.defaultPtops = {
  src: '/',
};
