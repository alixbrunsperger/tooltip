import React from 'react';
import PropTypes from 'prop-types';
import { getCssToolTipVariant } from '../utils/utils';

const ToolTip = ({ type, variant, children }) => {
  const baseClassName = 'tooltip shadow';
  const className = `${baseClassName} ${getCssToolTipVariant(variant)} ${type}`;

  return <div className={className}>{children}</div>;
};

ToolTip.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.string
};

export default ToolTip;
