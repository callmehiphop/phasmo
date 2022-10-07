import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  background: none;
  border: none;
  border-radius: 50%;
  height: var(--pj-size-4);
  opacity: ${props => props.suspect ? '1' : 'var(--pj-opacity-0)'};

  &:focus {
    outline: solid var(--pj-border-0) var(--pj-black);
  }
`;

export default Button;
