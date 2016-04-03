import React, {PropTypes} from 'react';
import {dropdownItemType, defaultProps} from 'components/inputs/DropdownItem';
import baseClasses from './DropdownItem.scss';
import classes from './DropdownNotificationItem.scss';

const itemClassName = [
  baseClasses['dropdown-item'],
  classes['dropdown-notification-item']
].join(' ').trim();

const linkClassName = [
  baseClasses['dropdown-item-link'],
  classes['dropdown-notification-item-link']
].join(' ').trim();

const iconClassName = [
  'wg-help',
  classes['dropdown-notification-item-icon']
].join(' ').trim();

const DropdownNotificationItem = (props) => {
  return (
    <li className={itemClassName}>
      <a className={linkClassName} {...props}>
        <i className={iconClassName} />
        {props.children}
      </a>
    </li>
  );
};

const {href, target, onClick} = dropdownItemType;
const dropdownNotificationItemType = {
  ...{href, target, onClick},
  children: PropTypes.node
};
DropdownNotificationItem.propTypes = dropdownNotificationItemType;
DropdownNotificationItem.defaultProps = defaultProps;

export default DropdownNotificationItem;
