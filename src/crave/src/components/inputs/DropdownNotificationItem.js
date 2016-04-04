import React, {PropTypes} from 'react';
import classNames from 'classnames';
import baseClasses from './DropdownItem.scss';
import classes from './DropdownNotificationItem.scss';

const DropdownNotificationItem = (props) => {
  const itemClassName = classNames(
    baseClasses['dropdown-item'],
    classes['dropdown-notification-item']
  );
  const linkClassName = classNames(
    baseClasses['dropdown-item-link'],
    classes['dropdown-notification-item-link']
  );
  const iconClassName = classNames(
    'wg-help',
    classes['dropdown-notification-item-icon']
  );
  return (
    <li className={itemClassName}>
      <a className={linkClassName} {...props}>
        <i className={iconClassName} />
        {props.children}
      </a>
    </li>
  );
};

const dropdownNotificationItemType = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};
DropdownNotificationItem.propTypes = dropdownNotificationItemType;
DropdownNotificationItem.defaultProps = {
  href: '#',
  onClick: null
};

export default DropdownNotificationItem;
