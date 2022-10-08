import styled from 'styled-components';

import JournalProvider from 'contexts/Journal';
import EvidencePage from 'pages/Evidence';
import GhostPage from 'pages/Ghost';
import { spacings, sizes } from 'styles/vars';

const Book = styled.div`
  padding-block: ${spacings.space7};
  padding-inline: ${spacings.space8};
  height: ${sizes.bookHeight};
  width: ${sizes.bookWidth};
  background: url('./journal.jpg') no-repeat;
  background-size: cover;
  display: flex;
  gap: ${spacings.space8};

  & > * {
    display: flex;
    flex-direction: column;
    gap: ${spacings.space3};
    width: 50%;
  }
`;

function App() {
  return (
    <Book>
      <JournalProvider>
        <EvidencePage />
        <GhostPage />
      </JournalProvider>
    </Book>
  );
}

export default App;
