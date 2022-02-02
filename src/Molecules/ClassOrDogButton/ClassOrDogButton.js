import ClassOrDogButtonStyled from './ClassOrDogButtonStyled';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ClassOrDogButton = ({ classInfo, dogInfo, noInfoLabel }) => {
  const navigate = useNavigate();

  const { name } = classInfo || [];
  const { index, dogName } = dogInfo || [];

  const word = () => {
    if (name) {
      return name;
    } else if (dogName) {
      return dogName;
    }
  };
  const label = () => {
    if (word() === name) {
      return name;
    } else if (word() === dogName) {
      return `Ocena Zawodnika ${dogName}`;
    }
  };
  const clickHandler = (event) => {
    event.preventDefault();
    navigate(`./${word()}`, {
      state: { text: 'Lista uczestników', label: `${label()}` },
    });
  };

  return (
    <ClassOrDogButtonStyled onClick={clickHandler}>
      {classInfo && <>{name}</>}
      {dogInfo && (
        <>
          {index + 1}. {dogName}
        </>
      )}
      {noInfoLabel && <InfoLabel classInfo={classInfo} dogInfo={dogInfo} />}
    </ClassOrDogButtonStyled>
  );
};

ClassOrDogButton.propTypes = {
  classInfo: PropTypes.object,
  dogInfo: PropTypes.object,
  noInfoLabel: PropTypes.bool,
};

export default ClassOrDogButton;
