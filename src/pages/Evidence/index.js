import styled from 'styled-components';

import { useJournalContext } from '../../contexts/Journal';
import ghosts from '../../ghosts';
import Button from './Button';
import Checkbox from './Checkbox';

const EvidenceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: var(--pj-spacing-3);
  padding-block: var(--pj-spacing-4);
  border-bottom: solid var(--pj-border-1) var(--pj-black);

  & > * {
    min-width: 50%;
  }
`;

const GhostHeadline = styled.div`
  text-align: center;
  margin-block: var(--pj-spacing-4);
  margin-inline: auto;
  width: 80%;
`;

const GhostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: var(--pj-spacing-0);
  text-align: center;
`;

const EvidencePage = () => {
  const [{ evidence, suspects }, { setGhost }] = useJournalContext();

  return (
    <div>
      <h2>Evidence</h2>
      <EvidenceList className="evidence-list">
        {evidence.map(ev => (
          <Checkbox key={ev.id} {...ev} />
        ))}
      </EvidenceList>
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
