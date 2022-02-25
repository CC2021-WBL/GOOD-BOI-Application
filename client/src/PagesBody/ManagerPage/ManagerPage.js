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
      <FakeButton colors="ternary" text="Dodaj nowe zawody" to="/" />
      <FakeButton colors="ternary" text="Zaplanowane zawody" to="/" />
      <FakeButton colors="ternary" text="Twoje archiwalne zawody" to="/" />
      {/* </>
      ) : (
        <FakeButton colors="primary" text="Zaloguj się" to="/login" />
      )} */}
    </ColumnWrapper>
  );
};

export default ManagerPage;
