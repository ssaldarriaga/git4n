import styled, { css } from 'styled-components';

const containers = css`
  background: #ffffff;
  border: 1px solid #d1d5da;
  padding: 1rem 3rem;
`;

export const InformationContainer = styled.section`
  ${containers}

  .container__list li {
    list-style: none;
  }
`;

export const RepositoriesContainer = styled.section`
  ${containers}
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 3px;
  padding: 0.25rem 0.75rem;

  &:hover {
    background: #24292e1a;
  }
`;