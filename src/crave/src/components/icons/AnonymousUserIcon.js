import React from 'react';
import classNames from 'classnames';
import EllipseIcon from 'components/icons/EllipseIcon';

import classes from './AnonymousUserIcon.scss';

const AnonymousUserIcon = (props) => {
  // to override default's EllipseIcon style don't all
  const userIconClassName = classNames(
    'wg-user',
    classes['anonymous-user-icon']
  );
  return (
    <EllipseIcon className={userIconClassName} />
  );
};

export default AnonymousUserIcon;
