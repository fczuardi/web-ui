import React, {PropTypes} from 'react';
import {userLabelType} from 'components/users/UserLabel';
import UserLabelWithIcon from 'components/users/UserLabelWithIcon';
import DropdownItem, {dropdownItemType} from 'components/inputs/DropdownItem';
import Dropdown from 'components/inputs/Dropdown';
import DropdownNotificationItem from 'components/inputs/DropdownNotificationItem';
import classes from './UserMenu.scss';

const UserMenu = (props) => {
  let hasNotifications = props.notifications.length > 0;
  let {title, subtitle} = props;
  return (
    <Dropdown
      className={classes['user-menu']}
      header={(
        <UserLabelWithIcon
          className={classes['user-menu-header']}
          labelClassName={classes['user-menu-header-label']}
          notifications={hasNotifications}
          {...{title, subtitle}}
        />
      )}
    >
      {props.notifications.map(({label, ...other}, n) => (
        <DropdownNotificationItem key={`n_${n}`} {...other}>
          {label}
        </DropdownNotificationItem>
      ))}
      {props.items.map(({label, ...other}, i) => {
        return (
          <DropdownItem key={`i_${i}`} {...other}>
            {label}
          </DropdownItem>
        );
      })}
    </Dropdown>
  );
};

const {href, target, onClick} = dropdownItemType;
const userMenuNotificationType = {
  ...{href, target, onClick},
  label: PropTypes.string
};

const {title, subtitle} = userLabelType;
const userMenuType = {
  title: title,
  subtitle: subtitle,
  notifications: PropTypes.arrayOf(PropTypes.shape(userMenuNotificationType)),
  items: PropTypes.arrayOf(PropTypes.shape(userMenuNotificationType))
};
UserMenu.propTypes = userMenuType;

const defaultProps = {
  notifications: [],
  items: []
};
UserMenu.defaultProps = defaultProps;

export default UserMenu;
