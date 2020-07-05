import styled, { css } from 'styled-components';

const button = css`
  background: transparent;
  border: none;
  border-radius: 50%;
  color: #212529;
  height: 45px;
  margin: 0 0.25rem;
  outline: none;
  width: 45px;

  &:hover {
    background-color: #efefef;
  }

  &:disabled {
    background-color: transparent;
    color: #c4c4c4;
    cursor: not-allowed;
  }
`;

export const PreviousButton = styled.button`
  ${button}

  &::before {
    content: '\u2B9C';
  }
`;

export const NextButton = styled.button`
  ${button}

  &::before {
    content: '\u2B9E';
  }
`;
