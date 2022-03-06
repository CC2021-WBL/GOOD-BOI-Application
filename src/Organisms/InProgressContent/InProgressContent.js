import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import InProgressContentWrapperStyled from './InProgressContentWrapperStyled';
import MainButton from '../../Atoms/MainButton/MainButton';
import inprogress from '../../Assets/inprogress.png';
import { useNavigate } from 'react-router-dom';

const InProgressContent = () => {
  const navigate = useNavigate();
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <InProgressContentWrapperStyled>
        <img src={inprogress} alt="in progress" />
        <div>
          <h3>Strona w trakcie przygotowania!</h3>
        </div>

        <MainButton
          secondary
          text="Wróć do poprzedniej strony"
          onClick={() => navigate(-1)}
        />
      </InProgressContentWrapperStyled>
    </ColumnWrapper>
  );
};

export default InProgressContent;
