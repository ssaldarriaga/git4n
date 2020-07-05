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