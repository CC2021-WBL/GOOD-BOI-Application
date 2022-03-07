import { useContext, useEffect, useState } from 'react';

import Backdrop from '../../Atoms/Modal/Backdrop';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestDetailsContent from './ContestDetailsContent/ContestDetailsContent';
import ContestDetailsMap from './ContestDetailsMap/ContestDetailsMap';
import ContestDetailsToggler from './ContestDetailsToggler/ContestDetailsToggler';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import contests from '../../Data/MongoDBMock/contests';
import modalData from '../../Consts/modalData';
import { useNavigate } from 'react-router-dom';

// import { UserDataContext } from '../../Context/UserDataContext';

const ContestDetails = ({ contestId }) => {
  const [isPending, setIsPending] = useState(true);
  const [contestData, setContestData] = useState(null);
  const [isCloseContestModalOpen, setIsCloseContestModalOpen] = useState(false);
  const navigate = useNavigate();

  // const { state } = useContext(UserDataContext);
  // console.log(state);
  // const { selectedRole } = state;
  // console.log(selectedRole);
  const selectedRole = 'manager';

  useEffect(() => {
    setContestData(contests.find((contest) => contest.contestId === contestId));
    setIsPending(false);
  }, []);

  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  const openCloseContestModal = () => {
    setIsCloseContestModalOpen(true);
  };

  function closeModalHandler() {
    setIsCloseContestModalOpen(false);
  }

  const handleReminder = (event) => {
    event.preventDefault();
    setIsCloseContestModalOpen(false);
    handleSubmit(event);
    navigate('/contests');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ColumnWrapper>
      {isCloseContestModalOpen && (
        <Modal
          modalData={modalData.cancelContest}
          onCloseHandler={handleReminder}
          onConfirmHandler={handleReminder}
        />
      )}
      {isCloseContestModalOpen && <Backdrop onClick={closeModalHandler} />}

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
            <>
              {selectedRole === 'participant' && (
                <FakeButton colors="secondary" text="ZGŁOŚ SWÓJ UDZIAŁ" />
              )}{' '}
              {selectedRole === 'manager' && (
                <>
                  <FakeButton
                    colors="secondary"
                    text="Edytuj dane"
                    to="/user-dogs"
                  />
                  <MainButton
                    secondary
                    text="Odwołaj i usuń zawody"
                    onClick={openCloseContestModal}
                  />
                  <FakeButton
                    colors="secondary"
                    text="Potwierdź i wróć do listy"
                    to="/contests"
                  />
                </>
              )}
            </>
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
