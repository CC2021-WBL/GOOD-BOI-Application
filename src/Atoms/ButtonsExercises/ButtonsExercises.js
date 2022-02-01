import propTypes from 'prop-types';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import ButtonExercisesStyled from './ButtonExercisesStyled';

const ButtonExercises = (props) => {
  const { endingButton, goBack, text } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    if (goBack) {
      navigate(-1);
    } else {
      navigate('./dogSummary', {
        state: { text: 'Tabela Wyników', label: 'Ocena Zawodnika' },
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
