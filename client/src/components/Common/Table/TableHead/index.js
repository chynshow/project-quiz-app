import React from 'react';
import SortDown from './../../../Common/SVGs/SortDown';
import SortUp from './../../../Common/SVGs/SortUp';
import PropTypes from 'prop-types';

const TableHead = ({ columns, handleOnSort, sortOptions }) => {
  // Sort table items based on sort options obj
  const raiseSort = (path) => {
    const newSortOptions = { ...sortOptions };
    if (newSortOptions.path === path) {
      newSortOptions.order = newSortOptions.order === 'asc' ? 'desc' : 'asc';
    } else {
      newSortOptions.path = path;
      newSortOptions.order = 'asc';
    }
    handleOnSort(newSortOptions);
  };

  // Render icon based on sort order parameter
  const renderSortIcon = (column) => {
    if (column.path !== sortOptions.path) return null;
    if (sortOptions.order === 'asc') return <SortDown width='.8rem' />;
    return <SortUp width='.8rem' />;
  };

  return (
    <thead className='c-table__head'>
      <tr>
        {columns.map((column) => (
          <th
            onClick={() => raiseSort(column.path)}
            key={column.path}
            className='c-table__col-label'
          >
            {column.label}

            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHead.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnSort: PropTypes.func.isRequired,

  sortOptions: PropTypes.object.isRequired,
};

export default TableHead;
