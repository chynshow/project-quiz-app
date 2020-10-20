import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ data }) => (
  <tbody className='c-table__body'>
    {data.map((item, idx) => (
      <tr className='c-table__item' key={idx}>
        {Object.values(item).map((val, idx) => (
          <td key={idx}>{val}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

TableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableBody;
