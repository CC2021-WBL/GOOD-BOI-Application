import { useContext, useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestDetailsContent from './ContestDetailsContent/ContestDetailsContent';
import ContestDetailsMap from './ContestDetailsMap/ContestDetailsMap';
import ContestDetailsToggler from './ContestDetailsToggler/ContestDetailsToggler';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import PropTypes from 'prop-types';
import { ROLES } from '../../Consts/rolesConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import contests from '../../Data/MongoDBMock/contests';

const UserData = () => {
  const { state } = useContext(UserDataContext);
  const { role } = state;
};

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
            {
              <>
                <FakeButton
                  colors="secondary"
                  text="ZGŁOŚ SWÓJ UDZIAŁ"
                  to="/user-dogs"
                />
                <>
                  <FakeButton
                    colors="secondary"
                    text="Edytuj dane"
                    // to="/user-dogs"
                  />
                  <FakeButton
                    colors="secondary"
                    text="Odwołaj i usuń zawody"
                    // to="/user-dogs"
                  />
                  <FakeButton
                    colors="secondary"
                    text="Potwierdź i wróć do listy"
                    to="/contests"
                  />
                </>
              </>
            }
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
