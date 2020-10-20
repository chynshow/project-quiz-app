import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, className, onClick, text, rest, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={className ? `c-btn ${className}` : 'c-btn'}
      {...rest}
    >
      {text}
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
