import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classNameAddon, children }) => (
  <button className={`button ${classNameAddon}`}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node,
  classNameAddon: PropTypes.string
};

export default Button;
