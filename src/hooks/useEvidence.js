import _ from 'lodash';
import { useCallback, useMemo, useState } from 'react';

import Evidence from '../evidence';
import ghosts from '../ghosts';

const EvidenceState = {
  NONE: 0,
  SELECTED: 1,
  IGNORED: 2,
};

const DEFAULT_EVIDENCE_MAP = _.values(Evidence).reduce(
  (map, name) => ({ ...map, [name]: EvidenceState.NONE }),
  {}
);

const pickByState = (map, state) => {
  return _.keys(_.pickBy(map, value => value === state));
};

const useEvidence = () => {
  const [evidenceMap, setEvidenceMap] = useState(DEFAULT_EVIDENCE_MAP);

  const found = useMemo(
    () => pickByState(evidenceMap, EvidenceState.SELECTED),
    [evidenceMap]
  );

  const ignored = useMemo(
    () => pickByState(evidenceMap, EvidenceState.IGNORED),
    [evidenceMap]
  );

  const suspects = useMemo(
    () => ghosts.filter(({ evidence }) => {
      return ignored.every(ev => !evidence.includes(ev))
        && found.every(ev => evidence.includes(ev));
    }),
    [found, ignored]
  );

  const remaining = useMemo(
    () => _.uniq(
      suspects
        .reduce((list, suspect) => list.concat(suspect.evidence), [])
        .filter(ev => !found.includes(ev))
    ),
    [suspects, found]
  );

  const evidence = useMemo(
    () => _.values(Evidence).map(name => ({
      name,
      state: evidenceMap[name],
      disabled: !remaining.includes(name)
        && !found.includes(name)
        && !ignored.includes(name)
    })),
    [remaining, found]
  );

  const toggleEvidence = useCallback(
    id => setEvidenceMap({
      ...evidenceMap,
      [id]: (evidenceMap[id] + 1) % 3
    }),
    [evidenceMap, setEvidenceMap]
  );

  return {
    evidence,
    suspects,
    toggleEvidence,
  };
};

export default useEvidence;
export { EvidenceState };
