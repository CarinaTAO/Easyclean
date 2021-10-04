import styled, { css } from 'styled-components';

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  border: 1px solid rgb(187, 194, 220);
  border-radius: 2px;
  padding: 6px;
  margin:0px;
  width: 100%;

  ${(props) => props.error && css`
    border-color: rgb(231, 82, 69);
  `}
`;

export default Input;
