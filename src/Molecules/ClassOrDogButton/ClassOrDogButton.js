import PropTypes from 'prop-types';
import ClassOrDogButtonStyled from './ClassOrDogButtonStyled';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';
import { useNavigate } from 'react-router-dom';

const ClassOrDogButton = ({ classInfo, dogInfo }) => {
  const navigate = useNavigate();

  const { name } = classInfo || [];
  const { index, dogName } = dogInfo || [];

  const clickHandler = (event) => {
    event.preventDefault();
    console.log(name);
    navigate(`./${name}`);
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
