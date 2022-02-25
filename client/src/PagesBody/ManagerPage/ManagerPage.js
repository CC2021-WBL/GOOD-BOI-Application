import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';

// import { UserDataContext } from '../../Context/UserDataContext';
// import { useContext } from 'react';

//context isAuthentic userData
const ManagerPage = () => {
  // const { state } = useContext(UserDataContext);
  // const { isAuthenticated } = state;
    return (
    <ColumnWrapper paddingLeftRight={1}>
      {/* {isAuthenticated ? (
        <> */}
      <FakeButton
        colors="ternary"
        text="Dodaj nowe zawody"
        to="/manager/:managerId/add-contest"
        state={{ text: 'Formularz', label: 'Dodaj zawody' }}
      />
      <FakeButton
        colors="ternary"
        text="Zaplanowane zawody"
        to="/contests"
        state={{
          contestContent: 'future',
        }}
      />
      <FakeButton
        colors="ternary"
        text="Twoje archiwalne zawody"
        to="/contests"
        state={{
          contestContent: 'present_and_past',
        }}
      />
      {/* </>
      ) : (
        <FakeButton colors="primary" text="Zaloguj się" to="/login" />
      )} */}
    </ColumnWrapper>
  );
};

export default ManagerPage;
