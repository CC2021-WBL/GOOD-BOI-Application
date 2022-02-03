import ButtonExercisesStyled from './ButtonExercisesStyled';
import { FaChevronLeft } from 'react-icons/fa';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ButtonExercises = (props) => {
  const { endingButton, goBack, text } = props;
  const navigate = useNavigate();
  let { dogId, classId } = useParams();

  const handleClick = () => {
    if (goBack) {
      navigate(-1);
    } else {
      navigate('./dog-summary', {
        state: {
          text: 'Tabela Wyników',
          label: `${classId} / Ocena Zawodnika ${dogId}`,
        },
      });
    }
  };
  return (
    <ButtonExercisesStyled
      onClick={handleClick}
      endingButton={endingButton}
      goBack={goBack}
    >
      {goBack && <FaChevronLeft />}
      {text.toUpperCase()}
    </ButtonExercisesStyled>
  );
};

ButtonExercises.propTypes = {
  endingButton: propTypes.bool,
  goBack: propTypes.bool,
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default ButtonExercises;
