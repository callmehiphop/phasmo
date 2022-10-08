import { find } from 'lodash';
import { useMemo } from 'react';
import styled from 'styled-components';

import { useJournalContext } from '../../contexts/Journal';
import Divider from '../../common/Divider';
import EvidenceCheckbox from '../../common/EvidenceCheckbox';
import { spacings } from '../../styles/vars';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hints = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacings.space6};
`;

const EvidenceList = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: ${spacings.space2};
`;

const Ghost = () => {
  const [{ evidence }, { ghost }] = useJournalContext();
  const ghostEvidence = useMemo(
    () => ghost && ghost.evidence.map(name => (
      <EvidenceCheckbox
        key={name}
        {...find(evidence, { name })}
      />
    )),
    [ghost, evidence]
  );

  if (!ghost) {
    return <div />;
  }

  return (
    <Container>
      <h2>{ghost.name}</h2>
      <Divider />
      <Hints>
        {ghost.description.split('\n').map(text => (<p>{text}</p>))}
        {ghost.strength && (<p>Strength: {ghost.strength}</p>)}
        {ghost.weakness && (<p>Weakness: {ghost.weakness}</p>)}
      </Hints>
      <EvidenceList>
        <h3>Evidence</h3>
        {ghostEvidence}
      </EvidenceList>
    </Container>
  );
};

export default Ghost;
