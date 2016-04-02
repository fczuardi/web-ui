import React, {PropTypes} from 'react';

import classes from './PaginationButton.scss';

const PaginationButton = (props) => {
  let itemClassName = [
    classes['pagination-nav-item'],
    props.more ? classes['pagination-nav-item--more'] : '',
    props.previous ? classes['pagination-nav-item--previous'] : '',
    props.next ? classes['pagination-nav-item--next'] : ''
  ].join(' ');
  let linkClassName = [
    classes['pagination-nav-link'],
    props.disabled ? classes['pagination-nav-link--disabled'] : '',
    props.selected ? classes['pagination-nav-link--selected'] : ''
  ].join(' ');

  return (
    <li className={itemClassName}>
      <a className={linkClassName}
        href={props.href || '#'}
      >
        {props.label}
      </a>
    </li>
  );
};

const paginationButtonType = {
  label: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  previous: PropTypes.bool,
  next: PropTypes.bool,
  more: PropTypes.bool
};

PaginationButton.propTypes = paginationButtonType;

PaginationButton.defaultProps = {
  href: '#',
  onClick: null
};

export {paginationButtonType};
export default PaginationButton;
