import React, {PropTypes} from 'react';
import classNames from 'classnames';

import classes from './DropdownItem.scss';

const DropdownItem = (props) => {
  const itemClassName = classes['dropdown-item'];
  const linkClassName = classNames(
    classes['dropdown-item-link'],
    { [classes['dropdown-item-link--light']]: props.light }
  );
  return (
    <li className={itemClassName}>
      <a className={linkClassName} {...props}>
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
