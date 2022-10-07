import styled from 'styled-components';

import JournalProvider from './contexts/Journal';
import EvidencePage from './pages/Evidence';
import GhostPage from './pages/Ghost';

const Book = styled.div`
  margin: 0 auto;
  padding-block: var(--pj-spacing-7);
  padding-inline: var(--pj-spacing-8);
  height: 738px;
  width: 984px;
  background: url('/journal.jpg') no-repeat;
  background-size: cover;
  display: flex;
  gap: var(--pj-spacing-8);

  & > * {
    width: 50%;
  }

  h2 {
    padding-bottom: var(--pj-spacing-2);
    border-bottom: solid var(--pj-border-1) var(--pj-black);
  }
`;

function App() {
  return (
    <JournalProvider>
      <Book>
        <EvidencePage />
        <GhostPage />
      </Book>
    </JournalProvider>
  );
}

export default App;
