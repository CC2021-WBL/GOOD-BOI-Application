import ForbiddenWrapperStyled from './ForbiddenEntryStyled';
import MainButton from '../../Atoms/MainButton/MainButton';
import { UserDataContext } from '../../Context/UserDataContext';
import notFound from '../../Assets/notFound.png';
import { useContext } from 'react';

const ForbiddenEntryPage = () => {
  const { dispatch } = useContext(UserDataContext);
  return (
    <ForbiddenWrapperStyled>
      <img src={notFound} alt="Dog with question mark" />
      <h1>Nie masz uprawnień żeby wejść na tę stronę</h1>
      <MainButton
        text="wejdź przez testowe dane"
        ternary
        onClick={() => {
          dispatch({ type: 'CHANGE_USER', index: 1 });
        }}
      />
    </ForbiddenWrapperStyled>
  );
};

export default ForbiddenEntryPage;
