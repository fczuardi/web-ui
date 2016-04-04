import React, {PropTypes} from 'react';

import classes from './UserLabel.scss';

const getUserLabelClassName = (props) => [
  'user-label',
  props.className
].join(' ').trim();

const UserLabel = (props) => {
  return (
    <div className={getUserLabelClassName(props)}>
      <p className={classes['user-label-title']}>{props.title}</p>
      <p className={classes['user-label-subtitle']}>{props.subtitle}</p>
    </div>
  );
};

const userLabelType = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
UserLabel.propTypes = userLabelType;

const defaultProps = {
  title: '',
  subtitle: ''
};
UserLabel.defaultProps = defaultProps;

export {userLabelType, defaultProps};
export default UserLabel;
