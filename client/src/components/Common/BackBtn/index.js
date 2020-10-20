import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ChevronLeft from '../SVGs/ChevronLeft';
import PropTypes from 'prop-types';

const BackBtn = ({ className }) => {
  const { pathname } = useLocation();
  const { goBack } = useHistory();
  return (
    <>
      {pathname !== '/' && (
        <button
          onClick={() => goBack()}
          className={`c-btn c-btn--primary c-btn--circle ${className}`}
        >
          <ChevronLeft />
        </button>
      )}
    </>
  );
};

BackBtn.propTypes = {
  className: PropTypes.string,
};

BackBtn.defaultProps = {
  className: '',
};

export default React.memo(BackBtn);
