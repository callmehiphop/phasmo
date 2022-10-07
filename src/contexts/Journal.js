import { createContext, useContext, useState } from 'react';
import useEvidence from '../hooks/useEvidence';

const JournalContext = createContext();
const useJournalContext = () => useContext(JournalContext);

const JournalProvider = ({ children }) => {
  const [ghost, setGhost] = useState(null);
  const evidence = useEvidence();

  const value = [evidence, { ghost, setGhost }];

  return (
    <JournalContext.Provider value={value}>
      {children}
    </JournalContext.Provider>
  );
};

export default JournalProvider;
export { JournalContext, useJournalContext };
