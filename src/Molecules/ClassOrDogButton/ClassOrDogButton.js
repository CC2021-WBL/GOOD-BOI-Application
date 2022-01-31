import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import ClassOrDogButtonStyled from './ClassOrDogButtonStyled';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';

const ClassOrDogButton = ({ classInfo, dogInfo }) => {
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

  const clickHandler = (event) => {
    event.preventDefault();
    navigate(`./${word()}`);
  };

  return (
    <ClassOrDogButtonStyled onClick={clickHandler}>
      {classInfo && <>{name}</>}
      {dogInfo && (
        <>
          {index + 1}. {dogName}
        </>
      )}
      <InfoLabel classInfo={classInfo} dogInfo={dogInfo} />
    </ClassOrDogButtonStyled>
  );
};

ClassOrDogButton.propTypes = {
  classInfo: PropTypes.object,
  dogInfo: PropTypes.object,
};

export default ClassOrDogButton;
