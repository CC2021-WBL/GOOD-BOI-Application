import { useEffect, useState } from 'react';

import Backdrop from '../../Atoms/Modal/Backdrop';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestDetailsContent from './ContestDetailsContent/ContestDetailsContent';
import ContestDetailsEmptyBarStyled from '../../Atoms/ContestDetailsEmptyBar/ContestDetailsEmptyBarStyled';
import ContestDetailsMap from './ContestDetailsMap/ContestDetailsMap';
import ContestDetailsToggler from './ContestDetailsToggler/ContestDetailsToggler';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import MainButton from '../../Atoms/MainButton/MainButton';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import Spinner from '../../Atoms/Spinner/Spinner';
import modalData from '../../Consts/modalData';
import { requestOptionsGET } from '../../Tools/FetchData/requestOptions';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '../../Hooks/useWindowSize';

const ContestDetails = ({ contestId }) => {
  const [isPending, setIsPending] = useState(true);
  const [contestData, setContestData] = useState(null);
  const [isCloseContestModalOpen, setIsCloseContestModalOpen] = useState(false);
  const navigate = useNavigate();

  const selectedRole = 'manager';
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
    <ColumnWrapper className="contest-data">
      {isCloseContestModalOpen && (
        <Modal
          modalData={modalData.cancelContest}
          onCloseHandler={handleReminder}
          onConfirmHandler={handleReminder}
        />
      )}
      {isCloseContestModalOpen && <Backdrop onClick={closeModalHandler} />}

      {isPending && <p>Loading...</p>}
      {isPending && <Spinner />}
      {contestData && <ContestDetailsMap />}
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
                    to="/add-contest"
                  />
                  <MainButton
                    secondary
                    text="Odwołaj i usuń zawody"
                    onClick={openCloseContestModal}
                  />
                  <FakeButton
                    colors="secondary"
                    text="Wróć do listy"
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
