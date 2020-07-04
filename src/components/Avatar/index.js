import React from 'react';
import PropTypes from 'prop-types';

// Styled components
import { Img } from './Avatar.styles';

export function Avatar({ src, alt }) {
  return <Img src={src} alt={alt} />
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};