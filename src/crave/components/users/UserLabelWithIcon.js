import React, {PropTypes} from 'react';
import UserLabel, {defaultProps} from 'components/users/UserLabel';
import AnonymousUserIcon from 'components/icons/AnonymousUserIcon';

import classes from './UserLabelWithIcon.scss';

const getUserLabelWithIconClassName = (props) => [
  classes['user-label-with-icon'],
  props.className
].join(' ').trim();

const iconClassName = classes['icon'];

const getLabelClassName = (props) => [
  classes['label'],
  props.labelClassName
].join(' ').trim();

const UserLabelWithIcon = (props) => {
  let notificationIcon = props.notifications
    ? (<i className={'wg-help ' + classes['notification-icon']} />)
    : null;
  let {className, labelClassName, notifications, ...other} = props;
  return (
    <div className={getUserLabelWithIconClassName(props)}>
      {notificationIcon}
      <AnonymousUserIcon className={iconClassName} />
      <UserLabel className={getLabelClassName(props)}
        {...other}
      />
    </div>
  );
};

UserLabelWithIcon.propTypes = {
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  notifications: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

UserLabelWithIcon.defaultProps = defaultProps;

export default UserLabelWithIcon;
