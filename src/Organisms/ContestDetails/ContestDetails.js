import ContestDetailsStyled from './ContestDetailsStyled';
import Map from './Map';
import ContestDetailsToggler from './ContestDetailsToggler';
import MainButton from '../../Atoms/MainButton/MainButton';
import { useState } from 'react';
import ContestDetailsContent from './ContestDetailsContent';
import PropTypes from 'prop-types';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';

const ContestDetails = ({ contestId }) => {
  const contestInfo = RANDOM_CONTESTS.find(
    (contest) => contest.id == contestId,
  );
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ContestDetailsStyled>
      <Map />
      <ContestDetailsToggler
        onClick={toggleHandler}
        toggle={toggle}
      ></ContestDetailsToggler>
      {toggle && <ContestDetailsContent contestInfo={contestInfo} />}
      <div
        style={{
          margin: '1rem',
        }}
      >
        <MainButton secondary text={'ZGŁOŚ SWÓJ UDZIAŁ'} />
      </div>
    </ContestDetailsStyled>
  );
};

ContestDetails.propTypes = {
  contestId: PropTypes.string,
};

export default ContestDetails;
