import { useCallback, useMemo } from 'react';
import styled from 'styled-components';

import { useJournalContext } from '../../contexts/Journal';
import { EvidenceState } from '../../hooks/useEvidence';

const Container = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-items: center;
  gap: var(--pj-spacing-3);
  opacity: ${props => props.disabled ? 'var(--pj-opacity-0)' : '1'};

  &:after {
    display: ${props => props.state === EvidenceState.IGNORED ? 'block' : 'none'};
    content: ' ';
    height: var(--pj-border-1);
    background: var(--pj-black);
    background: linear-gradient(90deg, var(--pj-black) 0%, var(--pj-black) 80%, rgba(0,0,0,0) 100%);
    width: 100%;
    position: absolute;
    top: calc(50% - calc(var(--pj-border-1) / 2));
    left: calc(var(--pj-spacing-1) * -1);
  }

  &:before {
    content: '${props => props.state === EvidenceState.SELECTED ? 'X' : ' '}';
    font-size: 2.5rem;
    line-height: 1.5rem;
    display: flex;
    justify-content: center;
    width: var(--pj-spacing-4);
    height: var(--pj-spacing-4);
    border: solid var(--pj-border-0) var(--pj-black);
  }
`;

const Checkbox = ({ name, state, disabled }) => {
  const [{ toggleEvidence }] = useJournalContext();
  const onClick = () => !disabled && toggleEvidence(name);

  return (
    <Container
      state={state}
      disabled={disabled}
      onClick={onClick}
    >
     {name}
    </Container>
  );
};

export default Checkbox;
