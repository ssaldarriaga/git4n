import styled from 'styled-components';

export const Img = styled.img`
  border-radius: 50%;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;