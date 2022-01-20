import PropTypes from 'prop-types';
import ClassOrDogButtonStyled from './ClassOrDogButtonStyled';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';

const ClassOrDogButton = ({ classInfo, dogInfo }) => {
  const { name } = classInfo || [];
  const { index, dogName } = dogInfo || [];

  return (
    <ClassOrDogButtonStyled>
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
