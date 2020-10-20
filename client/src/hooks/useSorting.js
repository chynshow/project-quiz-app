import { useState } from 'react';
import _ from 'lodash';

export default (defaultSortOptions, itemsToSort) => {
  const [sortOptions, setSortOptions] = useState(defaultSortOptions);

  const handleOnSort = (newSortOptions) => setSortOptions(newSortOptions);

  const sortedItems = _.orderBy(
    itemsToSort,
    [sortOptions.path],
    [sortOptions.order]
  );

  return { sortOptions, setSortOptions, handleOnSort, sortedItems };
};
