import React, {PropTypes} from 'react';
import PaginationButton, {paginationButtonType} from 'components/nav/PaginationButton';

import classes from './Pagination.scss';

const Pagination = (props) => {
  let moreButton = (
    <PaginationButton label={props.labels.more} more />
  );
  let {ellipsisLeft, ellipsisRight, visibleSlice, startIndex} = partialDisplayHelper(props, moreButton);
  let {previousDisabled, nextDisabled} = disabledButtonsHelper(props);
  return (
    <nav className={classes.pagination}>
      <ol>
        <PaginationButton
          label={props.labels.previous} disabled={previousDisabled} previous />
        {ellipsisLeft}
        {visibleSlice.map((page, i) =>
          <PaginationButton
            key={i}
            label={(page && page.label) ? page.label : `${startIndex + i}`}
            selected={startIndex + i === props.selectedIndex}
          />
        )}
        {ellipsisRight}
        <PaginationButton
          label={props.labels.next} disabled={nextDisabled} next />
      </ol>
    </nav>
  );
};

const paginationLabelsType = {
  previous: PropTypes.string,
  next: PropTypes.string,
  more: PropTypes.string
};

const paginationDefaultProps = {
  pages: [],
  selectedIndex: 0,
  displaySize: 6,
  labels: {
    previous: '←',
    next: '→',
    more: '…'
  }
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape(paginationButtonType)),
  labels: PropTypes.shape(paginationLabelsType),
  selectedIndex: PropTypes.number,
  displaySize: PropTypes.number
};

Pagination.defaultProps = paginationDefaultProps;

// Given the total number of pages, the number of pages to display and
// the current selected page, returns an array with the begin and end of
// the slice to show.
//
// Example: for 100 pages, with display size of 7 and page of index 5 selected
// the expected visual result in ascii art would be
//
// (<) (2) (3) (4) (5*) (6) (7) (8) (>)
//
// Which means:
//
// getVisibleRange(100, 7, 5) === [2, 9]; // true
//
// This result can then be spreaded and used as input of an Array.slice() operation:
//
// let newArray = pagesArray.slice(...getVisibleRange(100, 7, 5));
const getVisibleRange = (size, displaySize, selectedIndex) => {
  let begin = Math.round(selectedIndex - displaySize / 2);
  let beforeArrayStart = Math.abs(Math.min(0, begin));
  let end = begin + displaySize + beforeArrayStart;
  let afterArrayEnd = Math.max(0, end - size);
  let resultLeft = Math.max(0, begin - afterArrayEnd);
  let resultRight = Math.min(size, end);

  return [resultLeft, resultRight];
};

// Same idea of getVisibleRange(), but leave space for ellipsis slots.
//
// Example, if the display size is 7, and selected page index is 5
// the expected visual result in ascii art would be
//
// (<) (…) (3) (4) (5*) (6) (7) (…) (>)
//
// Which means:
//
// getVisibleRangeWithElipsis(100, 7, 5) === [3, 8]; // true
const getVisibleRangeWithElipsis = (size, displaySize, selectedIndex) => {
  let lastIndex = size - 1;
  let range = getVisibleRange(size, displaySize, selectedIndex);
  let newDisplaySize = displaySize - (range[0] > 0) - (range[1] < lastIndex);

  return getVisibleRange(size, newDisplaySize, selectedIndex);
};

// Helper for limiting the number of page items to display.
//
// Returns the sliced pages array, the first visible page index and components
// for the "more"/ellipsis indicators when needed
const partialDisplayHelper = (props, moreButton) => {
  let pages = props.pages || paginationDefaultProps.pages;
  let displaySize = props.displaySize || paginationDefaultProps.displaySize;
  let selectedIndex = props.selectedIndex || paginationDefaultProps.selectedIndex;
  let visibleSliceRange = getVisibleRangeWithElipsis(pages.length, displaySize, selectedIndex);
  let visibleSlice = pages.slice(...visibleSliceRange);
  let hasLeftEllipsis = visibleSliceRange[0] > 0;
  let hasRightEllipsis = pages.length > 0 && visibleSliceRange[1] < pages.length;

  return {
    ellipsisLeft: hasLeftEllipsis ? moreButton : null,
    ellipsisRight: hasRightEllipsis ? moreButton : null,
    visibleSlice: visibleSlice,
    startIndex: visibleSliceRange[0]
  };
};

// Helper that checks if the next and previous buttons should be disabled
// or not depending on the selected index.
const disabledButtonsHelper = (props) => {
  let pages = props.pages || paginationDefaultProps.pages;
  let selectedIndex = props.selectedIndex || paginationDefaultProps.selectedIndex;

  return {
    previousDisabled: selectedIndex === 0,
    nextDisabled: selectedIndex === pages.length
  };
};

export {getVisibleRange, getVisibleRangeWithElipsis, partialDisplayHelper};
export default Pagination;
