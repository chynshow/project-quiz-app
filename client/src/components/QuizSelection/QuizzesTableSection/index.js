import React from 'react';
import usePagination from '../../../hooks/usePagination';
import useSorting from '../../../hooks/useSorting';
import AngleLeft from '../../Common/SVGs/AngleLeft';
import AngleRight from '../../Common/SVGs/AngleRight';
import Pagination from '../../Common/Table/Pagination';
import Table from '../../Common/Table';
import InfoBlock from '../../Common/Table/InfoBlock';
import Button from '../../Common/Button';

const quizzes = [
  { user: 'user-7', title: 'a-title-1', rating: '5', questions: '1' },
  { user: 'user-6', title: 'b-title-2', rating: '5', questions: '2' },
  { user: 'user-5', title: 'c-title-3', rating: '5', questions: '3' },
  { user: 'user-4', title: 'd-title-4', rating: '5', questions: '4' },
  { user: 'user-3', title: 'title-5', rating: '5', questions: '5' },
  { user: 'user-2', title: 'title-6', rating: '5', questions: '6' },
  { user: 'user-1', title: 'title-7', rating: '5', questions: '7' },
];

const QuizzesTableSection = () => {
  // Pagination
  const pageSize = 5;
  const {
    currentItems: currentQuizzes,
    handlePrevPage,
    handleNextPage,
  } = usePagination(pageSize, quizzes);

  // Sorting
  const defaultSortOptions = {
    path: 'title',
    order: 'asc',
  };
  const { sortOptions, handleOnSort, sortedItems: sortedQuizzes } = useSorting(
    defaultSortOptions,
    currentQuizzes
  );

  // Add new quiz
  const handleAddNewQuiz = () => {
    console.log('Add new quiz func');
  };

  // Table head labels
  const columns = [
    { label: 'User', path: 'user' },
    { label: 'Title', path: 'title' },
    { label: 'Rating', path: 'rating' },
    { label: 'Questions', path: 'questions' },
  ];

  if (!quizzes.length) return <InfoBlock />;

  return (
    <section className='l-quiz-select'>
      <div className='c-quizzes-table__container'>
        <Table
          data={sortedQuizzes}
          title='Chose your quiz?'
          columns={columns}
          handleOnSort={handleOnSort}
          sortOptions={sortOptions}
        />
        <div className='c-quizzes-table__actions-panel'>
          <Button
            text='New quiz'
            className='c-btn--primary'
            onClick={handleAddNewQuiz}
          />
          {quizzes.length > pageSize ? (
            <Pagination
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              iconPrev={<AngleLeft width='1rem' />}
              iconNext={<AngleRight width='1rem' />}
            />
          ) : null}
          <button className='c-btn c-btn--primary'>Toggler</button>
        </div>
      </div>
    </section>
  );
};

export default QuizzesTableSection;
