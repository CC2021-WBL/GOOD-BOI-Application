import MainButton from '../../Atoms/MainButton/MainButton';
import { UserDataContext } from '../../Context/UserDataContext';
import { useContext } from 'react';

const ForbiddenEntryPage = () => {
  const { dispatch } = useContext(UserDataContext);
  return (
    <>
      <h1>Oooops nie masz uprawnień żeby wejść na tą stronę</h1>
      <MainButton
        text="wejdź przez testowe dane"
        onClick={() => {
          dispatch({ type: 'CHANGE_USER', index: 1 });
        }}
      />
    </>
  );
};

export default ForbiddenEntryPage;
