import React, {PropTypes} from 'react';
import classes from './Dropdown.scss';

const getComponentClassName = (props) => [
  classes.dropdown,
  props.className
].join(' ').trim();

const Dropdown = (props) => {
  let header = props.header
    ? <div className={classes['dropdown-header']}>{props.header}</div>
    : null;
  return (
    <div className={getComponentClassName(props)}>
      {header}
      <ol className={classes['dropdown-body']}>
        {props.children}
      </ol>
    </div>
  );
};

const dropdownType = {
  header: PropTypes.node,
  children: PropTypes.node
};
Dropdown.propTypes = dropdownType;

export default Dropdown;
