import { useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { useJournalContext } from '../contexts/Journal';
import { EvidenceState } from '../hooks/useEvidence';

import {
  borders,
  colors,
  gradients,
  opacities,
  spacings,
  sizes,
} from '../styles/vars';

const Checkbox = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-items: center;
  gap: ${spacings.space3};
  opacity: ${(props) =>
    props.disabled ? opacities.disabled : opacities.normal};

  &:after {
    display: ${(props) =>
      props.state === EvidenceState.IGNORED ? 'block' : 'none'};
    content: ' ';
    height: ${sizes.border1};
    background: ${colors.darkgrey};
    background: ${gradients.strikethrough};
    width: 100%;
    position: absolute;
    top: calc(50% - ${sizes.border1} / 2);
    left: -${spacings.space1};
  }

  &:before {
    content: '${(props) =>
      props.state === EvidenceState.SELECTED ? 'X' : ' '}';
    font-size: 2.5rem;
    line-height: 1.5rem;
    display: flex;
    justify-content: center;
    width: ${spacings.space4};
    height: ${spacings.space4};
    border: ${borders.border0};
  }
`;

const EvidenceCheckbox = ({ name, state, disabled }) => {
  const [{ toggleEvidence }] = useJournalContext();
  const onClick = () => !disabled && toggleEvidence(name);

  return (
    <Checkbox state={state} disabled={disabled} onClick={onClick}>
      {name}
    </Checkbox>
  );
};

export default EvidenceCheckbox;
