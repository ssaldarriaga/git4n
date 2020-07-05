import React from 'react';
import PropTypes from 'prop-types';

// Styled components
import { Img } from './Avatar.styles';

export function Avatar({ src, alt, height = 50, width = 50, className }) {
  return <Img src={src} alt={alt} height={height} width={width} className={className} />
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};