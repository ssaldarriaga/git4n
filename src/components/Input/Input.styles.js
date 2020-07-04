import styled from 'styled-components';

export const Input = styled.input`
  background-color: #ffffff;
  border: 1px solid ${({ hasError }) => (hasError ? '#bf0711' : '#ced4da')};
  border-radius: 3px;
  box-sizing: border-box;
  color: #495057;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  height: 45px;
  line-height: 1rem;
  outline: none;
  padding: .375rem 1rem;
  width: 100%;

  &:focus {
    border-color: #24292e90;
    box-shadow: 0 0 0 0.2rem rgba(31, 41, 46,.25);
    outline: 0;
  }

  &[type="date"] {
    text-transform: uppercase;
  }
`;

export const ErrorMessage = styled.span`
  color: #bf0711;
  font-size: 0.875rem;
`