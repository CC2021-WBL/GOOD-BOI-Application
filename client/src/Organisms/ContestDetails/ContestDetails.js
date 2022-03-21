import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestDetailsContent from './ContestDetailsContent/ContestDetailsContent';
import ContestDetailsEmptyBarStyled from '../../Atoms/ContestDetailsEmptyBar/ContestDetailsEmptyBarStyled';
import ContestDetailsMap from './ContestDetailsMap/ContestDetailsMap';
import ContestDetailsToggler from './ContestDetailsToggler/ContestDetailsToggler';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Spinner from '../../Atoms/Spinner/Spinner';
import useWindowSize from '../../Hooks/useWindowSize';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';

const ContestDetails = ({ contestId }) => {
  const [isPending, setIsPending] = useState(true);
  const [contestData, setContestData] = useState(null);
  const [toggle, setToggle] = useState(true);
  const { width } = useWindowSize();

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

  useEffect(() => {
    width > 1024 && setToggle(true);
  }, [width]);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ColumnWrapper className="contest-data">
      {isPending && <Spinner />}
      {contestData && <ContestDetailsMap />}
      {contestData && (
        <ColumnWrapper className="contest-data-details">
          <div className="contest-data">
            <ContestDetailsToggler onClick={toggleHandler} toggle={toggle} />
            {toggle && <ContestDetailsContent contestData={contestData} />}
            <ContestDetailsEmptyBarStyled />
          </div>
          <ColumnWrapper className="contest-data-buttons">
            <FakeButton
              colors="ternary"
              text="WRÓĆ DO LISTY ZAWODÓW"
              to="/contests"
              className="contest-data-button-back"
            />
            <FakeButton
              colors="secondary"
              text="ZGŁOŚ SWÓJ UDZIAŁ"
              to="/user-dogs"
              className="contest-data-button-enter"
            />
          </ColumnWrapper>
        </ColumnWrapper>
      )}
    </ColumnWrapper>
  );
};

ContestDetails.propTypes = {
  contestId: PropTypes.string,
};

export default ContestDetails;
