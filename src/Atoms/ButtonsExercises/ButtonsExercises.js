import ButtonExercisesStyled from './ButtonExercisesStyled';
import { FaChevronLeft } from 'react-icons/fa';
import propTypes from 'prop-types';

// import { useNavigate } from 'react-router-dom';

//Related to https://github.com/CC2021-WBL/GOOD-BOI-Application/pull/202/files#r798045688, this shuold receive only information about what theme color you want to apply. color={endingButton? "primary":"secondary"}

const ButtonExercises = (props) => {
  // eslint-disable-next-line react/prop-types
  const { primary, secondary, text, handler } = props;
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   if (secondary) {
  //     navigate(-1);
  //   } else {
  //     navigate('./dog-summary', {
  //       state: { text: 'Tabela Wyników', label: 'Ocena Zawodnika' },
  //     });
  //   }
  // };
  return (
    <ButtonExercisesStyled
      onClick={handler}
      primary={primary}
      secondary={secondary}
    >
      {secondary && <FaChevronLeft />}
      {text.toUpperCase()}
    </ButtonExercisesStyled>
  );
};

ButtonExercises.propTypes = {
  primary: propTypes.bool,
  secondary: propTypes.bool,
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default ButtonExercises;
