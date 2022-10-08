import styled from 'styled-components';

import { useJournalContext } from '../../contexts/Journal';
import ghosts from '../../ghosts';

import Divider from '../../common/Divider';
import Button from './Button';
import Checkbox from './Checkbox';
import { spacings } from '../../styles/vars';

const EvidenceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: ${spacings.space3};

  & > * {
    min-width: 50%;
  }
`;

const GhostHeadline = styled.div`
  text-align: center;
  margin-inline: auto;
  width: 85%;
`;

const GhostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: ${spacings.space0};
  text-align: center;
`;

const EvidencePage = () => {
  const [{ evidence, suspects }, { setGhost }] = useJournalContext();

  return (
    <div>
      <h2>Evidence</h2>
      <Divider />
      <EvidenceList className="evidence-list">
        {evidence.map(ev => (
          <Checkbox key={ev.id} {...ev} />
        ))}
      </EvidenceList>
      <Divider />
      <GhostHeadline>
        Using the evidence we've found, we believe the ghost is a
      </GhostHeadline>
      <GhostGrid>
        {ghosts.map(ghost => (
          <Button
            suspect={suspects.includes(ghost)}
            onClick={() => setGhost(ghost)}
          >
            {ghost.name}
          </Button>
        ))}
      </GhostGrid>
    </div>
  );
};

export default EvidencePage;
