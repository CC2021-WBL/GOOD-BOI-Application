import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ContestDetailsLine from '../../../../Atoms/ContestDetailsLine/ContestDetailsLine';
import toBeAnnounced from '../../../../Consts/toBeAnnounced';

const ContestDetailsJudges = ({ judges = [] }) => {
  const [judgesData, setJudgesData] = useState(null);

  useEffect(() => {
    judges.length === 0
      ? setJudgesData([toBeAnnounced])
      : setJudgesData(judges);
  }, []);

  return (
    <>
      {judgesData && (
        <>
          <ContestDetailsLine text={[`Skład sędziowski:`]} />
          {judgesData.map((judge, index) => (
            <ContestDetailsLine
              key={`judge-${index}`}
              text={judge}
              judge={true}
            />
          ))}
        </>
      )}
    </>
  );
};
ContestDetailsJudges.propTypes = {
  judges: PropTypes.array,
};

export default ContestDetailsJudges;
