import styled from 'styled-components';
import { useJournalContext } from '../../contexts/Journal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hints = styled.div`
  margin-top: var(--pj-spacing-4);
  display: flex;
  flex-direction: column;
  gap: var(--pj-spacing-6);
`;

const EvidenceList = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--pj-spacing-1);
`;

const Ghost = () => {
  const [{ evidence }, { ghost }] = useJournalContext();

  if (!ghost) {
    return <div />;
  }

  return (
    <Container>
      <h2>{ghost.name}</h2>
      <Hints>
        {ghost.description.split('\n').map(text => (<p>{text}</p>))}
        {ghost.strength && (<p>Strength: {ghost.strength}</p>)}
        {ghost.weakness && (<p>Weakness: {ghost.weakness}</p>)}
      </Hints>
      <EvidenceList>
        <h3>Evidence</h3>
        {ghost.evidence.map(ev => (
          <div>{ev}</div>
        ))}
      </EvidenceList>
    </Container>
  );
};

export default Ghost;
