import { useState } from 'react';

export default (pageSize, items) => {
  const [currentPage, setCurrentPage] = useState(1);
  const idxOfLastItem = currentPage * pageSize;
  const idxOfFirstItem = idxOfLastItem - pageSize;
  const currentItems = items.slice(idxOfFirstItem, idxOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < items.length / pageSize) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  return { currentItems, handlePrevPage, handleNextPage, pageSize };
};
