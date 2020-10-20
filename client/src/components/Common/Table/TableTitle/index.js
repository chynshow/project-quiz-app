import React from 'react';
import PropTypes from 'prop-types';

const TableTitle = ({ title }) => (
  <caption className='c-table__title'>{title}</caption>
);

TableTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TableTitle;
