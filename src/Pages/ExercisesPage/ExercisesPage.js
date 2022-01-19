import { useState } from 'react';

import Modal from '../../Organisms/Modals/Modal';
import Backdrop from '../../Organisms/Modals/Backdrop';
import DOGS from '../../Data/Dummy-data/test-data-dogs';
import ExerciseCardsContainer from '../../Organisms/ExerciseCardsContainter/ExerciseCardsContainer';
import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainer';
const modalData = {
  penalty: {
    about: 'KAra',
    back: 'Anuluj',
    title: '?!?!?!',
    confirmation: 'Siur??',
    theme: 'yellow',
  },
  disqualify: {
    about: 'Dyskwalifikacja',
    back: 'Anuluj',
    title: '!!!!!',
    confirmation: 'Na pewno?',
    theme: 'red',
  },
};

const ExercisesPage = () => {
  // OUR ROUTE: http://localhost:3000/contests/1/classes/1/Woof
  // so when we click our page we must GET data from database about our dog performance
  // in the future we will use more IDs than other properties
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isDisqualifyModalOpen, setIsDisqualifyModalOpen] = useState(false);
  const [isPenaltyModalOpen, setIsPenaltyModalOpen] = useState(false);
  const handleDesqualification = () => {
    console.log(`Doggo o imieniu ${ourTestDogName} wylatuje z konkursu`);
    setIsDisqualifyModalOpen(false);
  };
  const handlePenalty = () => {
    console.log(`Doggo o imieniu ${ourTestDogName} ma mnie o 10pkt`);
    setIsPenaltyModalOpen(false);
  };
  const openDisqualifyModalHandler = () => {
    console.log('disqualification comin');
    setIsDisqualifyModalOpen(true);
  };
  const openPenaltyModalHandler = () => {
    console.log('penalty coming');
    setIsPenaltyModalOpen(true);
  };

  function closeModalHandler() {
    setIsPenaltyModalOpen(false);
    setIsDisqualifyModalOpen(false);
  }

  const ourTestDogName = 'Woof';
  const ourTestDog = DOGS.find((dog) => dog.dogName === ourTestDogName);
  const ourTestContestName = 'XII Zawody im. Pana Starosty';
  const ourTestPerformanceObject = ourTestDog.performances.find(
    (performance) => performance.contestName == ourTestContestName,
  );

  return (
    <>
      {(isDisqualifyModalOpen || isPenaltyModalOpen) && (
        <Modal
          modalData={
            isDisqualifyModalOpen ? modalData.disqualify : modalData.penalty
          }
          onCloseHandler={closeModalHandler}
          onConfirmHandler={
            isDisqualifyModalOpen ? handleDesqualification : handlePenalty
          }
        />
      )}
      {(isDisqualifyModalOpen || isPenaltyModalOpen) && (
        <Backdrop onClick={closeModalHandler} />
      )}

      <SpecialButtonsContainer
        openDisqualifyModalHandler={openDisqualifyModalHandler}
        openPenaltyModalHandler={openPenaltyModalHandler}
      />

      <ExerciseCardsContainer
        performanceObject={ourTestPerformanceObject}
      ></ExerciseCardsContainer>
    </>
  );
};

export default ExercisesPage;

// import CardWrapper from '../../Atoms/CardWrapper/CardWrapper';
// import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer';
// import Modals from '../../Organisms/Modals/Modals';
// import { useState } from 'react';
// import Backdrop from '../../Organisms/Modals/Backdrop';
// const ExercisesPage = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   function openModalHandler() {
//     setModalIsOpen(true);
//   }

//   function closeModalHandler() {
//     setModalIsOpen(false);
//   }
//   return (
//     <CardWrapper>
//       <div>
//         <h1 aria-hidden="true" onClick={openModalHandler}>
//           I am a Excersises Page Component
//         </h1>
//         <SpecialButtonsContainer></SpecialButtonsContainer>
//       </div>
//       {modalIsOpen && (
//         <Modals
//           modalTitle="Are you sure?"
//           modalAbout="bbbb"
//           modalConfirmation="na pewno?"
//           modalBack="wróć"
//           yellow
//           onClick={closeModalHandler}
//         />
//       )}
//       {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
//     </CardWrapper>
