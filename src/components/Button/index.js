import styled from 'styled-components';

export const  Button = styled.button`
  background: #24292e;
  border: 1px solid #24292e;
  border-radius: 3px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  min-width: 150px;
  padding: 0.75rem 1rem;
  width: 100%;

  &:hover {
    background: #24292eef;
    border: 1px solid #24292eef;
  }

  &:disabled {
    background-color: #6c757d;
    border-color: #6c757d;
    cursor: not-allowed;
  }

  @media (min-width: 576px) {
    padding: 0.5rem 1rem;
    width: 150px;
  }
`;