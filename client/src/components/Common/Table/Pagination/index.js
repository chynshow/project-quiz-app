import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ handleNextPage, handlePrevPage, iconPrev, iconNext }) => {
  return (
    <nav className='c-table__pagination'>
      <button
        onClick={handlePrevPage}
        className='c-btn c-table__pagination-nav-btn'
      >
        {iconPrev}
      </button>

      <button
        onClick={handleNextPage}
        className='c-btn c-table__pagination-nav-btn'
      >
        {iconNext}
      </button>
    </nav>
  );
};

Pagination.propTypes = {
  handleNextPage: PropTypes.func.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  iconPrev: PropTypes.element.isRequired,
  iconNext: PropTypes.element.isRequired,
};

export default Pagination;
