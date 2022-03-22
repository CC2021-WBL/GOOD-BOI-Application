import { useContext } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import { UserDataContext } from '../../Context/UserDataContext';

const ManagerPage = () => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated, userId } = state;
  return (
    <ColumnWrapper paddingLeftRight={1} className="manager-page" maxWidthBigScreen={45}>
      {isAuthenticated ? (
        <>
          <FakeButton
            colors="ternary"
            text="Dodaj nowe zawody"
            to={`/manager/${userId}/add-contest`}
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
              contestContent: 'results',
            }}
          />
        </>
      ) : (
        <FakeButton colors="primary" text="Zaloguj się" to="/login" />
      )}
    </ColumnWrapper>
  );
};

export default ManagerPage;
