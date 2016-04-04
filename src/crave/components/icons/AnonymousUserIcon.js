import React from 'react';
import EllipseIcon from 'components/icons/EllipseIcon';

import classes from './AnonymousUserIcon.scss';

const getUserIconClassName = (props) => [
  'wg-user',
  classes['anonymous-user-icon'],
  props.className
].join(' ').trim();

const AnonymousUserIcon = (props) => {
  return (
    <EllipseIcon className={getUserIconClassName(props)} />
  );
};

export default AnonymousUserIcon;
