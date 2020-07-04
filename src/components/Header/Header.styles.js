import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background: #24292e;
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 1rem;

  .header__logo {
    color: #f2f2f2;
  }

  .header__profile {
    color: #f2f2f2;
    display: flex;
  }

  .header__profile--username {
    align-items: center;
    display: flex;
    margin-left: 1rem;
  }
`;