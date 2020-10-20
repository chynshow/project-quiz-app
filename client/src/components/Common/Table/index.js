import React from 'react';
import TableTitle from './TableTitle';
import TableHead from './TableHead';
import TableBody from './TableBody';
import PropTypes from 'prop-types';

const Table = ({ title, columns, data, handleOnSort, sortOptions }) => {
  return (
    <table className='c-table'>
      <TableTitle title={title} />
      <TableHead
        columns={columns}
        handleOnSort={handleOnSort}
        sortOptions={sortOptions}
      />
      <TableBody data={data} />
    </table>
  );
};

Table.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnSort: PropTypes.func.isRequired,
  sortOptions: PropTypes.object.isRequired,
};

export default Table;
