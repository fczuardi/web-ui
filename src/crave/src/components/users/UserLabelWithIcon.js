import React, {PropTypes} from 'react';
import classNames from 'classnames';
import UserLabel from 'components/users/UserLabel';
import AnonymousUserIcon from 'components/icons/AnonymousUserIcon';

import classes from './UserLabelWithIcon.scss';

const UserLabelWithIcon = (props) => {
  const notificationIconClassName = classNames(
    'wg-help',
    classes['notification-icon']
  );
  let notificationIcon = props.notifications
    ? (<i className={notificationIconClassName} />)
    : null;
  let {notifications, ...other} = props;
  return (
    <div className={classes['user-label-with-icon']}>
      <div className={classes['icon']}>
        <AnonymousUserIcon />
        {notificationIcon}
      </div>
      <div className={classes['label']}>
        <UserLabel {...other} />
      </div>
    </div>
  );
};

UserLabelWithIcon.propTypes = {
  notifications: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

UserLabelWithIcon.defaultProps = {
  title: '',
  subtitle: ''
};

export default UserLabelWithIcon;
