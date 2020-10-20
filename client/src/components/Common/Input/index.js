import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type,
  onChange,
  name,
  autoFocus,
  value,
  errors,
  placeholder,
  label,
}) => {
  return (
    <label>
      {label}
      <input
        className='c-input'
        type={type}
        onChange={onChange}
        name={name}
        autoFocus={autoFocus}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default React.memo(Input);
