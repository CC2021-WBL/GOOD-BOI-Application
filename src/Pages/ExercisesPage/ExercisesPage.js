import { useState } from 'react';

import Modal from '../../Organisms/Modals/Modal';
import Backdrop from '../../Organisms/Modals/Backdrop';
import DOGS from '../../Data/Dummy-data/test-data-dogs';
import ExerciseCardsContainer from '../../Organisms/ExerciseCardsContainter/ExerciseCardsContainer';
import SpecialButtonsContainer from '../../Molecules/SpecialButtonsContainer/SpecialButtonsContainer';

const ExercisesPage = () => {
  // OUR ROUTE: http://localhost:3000/contests/1/classes/1/Woof
  // so when we click our page we must GET data from database about our dog performance
  // in the future we will use more IDs than other properties
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const ourTestDogName = 'Woof';
  const ourTestDog = DOGS.find((dog) => dog.dogName === ourTestDogName);
  const ourTestContestName = 'XII Zawody im. Pana Starosty';
  const ourTestPerformanceObject = ourTestDog.performances.find(
    (performance) => performance.contestName == ourTestContestName,
  );

  return (
    <>
      <h1 aria-hidden="true" onClick={openModalHandler}>
        aaa
      </h1>
      <SpecialButtonsContainer></SpecialButtonsContainer>
      <ExerciseCardsContainer
        performanceObject={ourTestPerformanceObject}
      ></ExerciseCardsContainer>

      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
      {modalIsOpen && (
        <Modal
          modalTitle="Are you sure?"
          modalAbout="bbbb"
          modalConfirmation="na pewno?"
          modalBack="wróć"
          yellow
          onClick={closeModalHandler}
        />
      )}
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
