import ContestDetailsMap from './ContestDetailsMap/ContestDetailsMap';
import ContestDetailsToggler from './ContestDetailsToggler/ContestDetailsToggler';
import MainButton from '../../Atoms/MainButton/MainButton';
import { useState } from 'react';
import ContestDetailsContent from './ContestDetailsContent/ContestDetailsContent';
import PropTypes from 'prop-types';
import RANDOM_CONTESTS from '../../Data/Dummy-data/test-data-random-contests';
import { Link } from 'react-router-dom';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';

const ContestDetails = ({ contestId }) => {
  const contestInfo = RANDOM_CONTESTS.find(
    (contest) => contest.id === contestId,
  );
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <ColumnWrapper>
      <ContestDetailsMap />
      <ContestDetailsToggler onClick={toggleHandler} toggle={toggle} />
      {toggle && <ContestDetailsContent contestInfo={contestInfo} />}
      <div
        style={{
          margin: '1rem',
        }}
      >
        <Link to="/confirmation" style={{ textDecoration: 'none' }}>
          <MainButton secondary text={'ZGŁOŚ SWÓJ UDZIAŁ'} />
        </Link>
      </div>
    </ColumnWrapper>
  );
};

ContestDetails.propTypes = {
  contestId: PropTypes.string,
};

export default ContestDetails;
