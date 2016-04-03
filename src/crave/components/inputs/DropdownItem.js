import React, {PropTypes} from 'react';

import classes from './DropdownItem.scss';

const itemClassName = classes['dropdown-item'];
const getLinkClassName = (props) => [
  classes['dropdown-item-link'],
  props.light ? classes['dropdown-item-link--light'] : ''
].join(' ').trim();

const DropdownItem = (props) => {
  return (
    <li className={itemClassName}>
      <a className={getLinkClassName(props)} {...props}>
        {props.children}
      </a>
    </li>
  );
};

const dropdownItemType = {
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  light: PropTypes.bool,
  children: PropTypes.node
};
const defaultProps = {
  href: '#',
  onClick: null
};

DropdownItem.propTypes = dropdownItemType;
DropdownItem.defaultProps = defaultProps;

export {dropdownItemType, defaultProps};
export default DropdownItem;
