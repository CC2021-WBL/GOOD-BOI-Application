import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestDetailsContent from './ContestDetailsContent/ContestDetailsContent';
import ContestDetailsMap from './ContestDetailsMap/ContestDetailsMap';
import ContestDetailsToggler from './ContestDetailsToggler/ContestDetailsToggler';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const ContestDetails = ({ contestId }) => {
  const [isPending, setIsPending] = useState(true);
  const [contestData, setContestData] = useState(null);

  useEffect(() => {
    async function fetchContestData() {
      const response = await fetch(
        `/api/contests/${contestId}`,
        requestOptionsGET,
      );
      if (response.ok) {
        const result = await response.json();
        setContestData(result);
        setIsPending(false);
      } else {
      }
    }
    fetchContestData();
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
              colors="secondary"
              text="ZGŁOŚ SWÓJ UDZIAŁ"
              to="/user-dogs"
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
