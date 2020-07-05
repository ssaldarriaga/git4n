import React from 'react';

// Components
import { LoaderContainer } from './Loader.styles';

// Assets
import loader from '../../assets/img/loader.gif';

export function Loader() {
  return (
    <LoaderContainer>
      <img src={loader} alt="Loading..." />
    </LoaderContainer>
  );
}