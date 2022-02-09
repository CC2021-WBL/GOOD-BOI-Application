import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import contests from '../../Data/MongoDBMock/contests';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestDetailsContent from './ContestDetailsContent/ContestDetailsContent';
import ContestDetailsMap from './ContestDetailsMap/ContestDetailsMap';
import ContestDetailsToggler from './ContestDetailsToggler/ContestDetailsToggler';
import FakeButton from '../../Atoms/FakeButton/FakeButton';

const ContestDetails = ({ contestId }) => {
  const [isPending, setIsPending] = useState(true);
  const [contestData, setContestData] = useState(null);

  useEffect(() => {
    setContestData(contests.find((contest) => contest.contestId === contestId));
    setIsPending(false);
  }, []);

  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ColumnWrapper>
      {isPending && <p>Loading...</p>}
      {contestData && (
        <>
          <ContestDetailsMap />
          <ContestDetailsToggler onClick={toggleHandler} toggle={toggle} />
          {toggle && <ContestDetailsContent contestData={contestData} />}
          <div
            style={{
              margin: '1rem',
            }}
          >
            <FakeButton
              secondary=" secondary"
              text="ZGŁOŚ SWÓJ UDZIAŁ"
              to="/dog-submit"
            />
          </div>
        </>
      )}
    </ColumnWrapper>
  );
};

ContestDetails.propTypes = {
  contestId: PropTypes.string,
};

export default ContestDetails;
