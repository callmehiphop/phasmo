import styled from 'styled-components';

import { borders, opacities, sizes } from 'styles/vars';

const Button = styled.button`
  cursor: pointer;
  outline: none;
  font-family: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  color: inherit;
  background: none;
  border: none;
  border-radius: 50%;
  height: ${sizes.buttonHeight};
  opacity: ${(props) =>
    props.suspect ? opacities.normal : opacities.disabled};
  border: ${(props) => (props.active ? borders.border1 : 'none')};
`;

export default Button;
