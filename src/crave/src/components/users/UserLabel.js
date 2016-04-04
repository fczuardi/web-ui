import React, {PropTypes} from 'react';

import classes from './UserLabel.scss';

const UserLabel = (props) => {
  return (
    <div>
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
