import PropTypes from 'prop-types';
import ClassOrDogButtonStyled from './ClassOrDogButtonStyled';
import InfoLabel from '../../Atoms/InButtonLabel/InfoLabel';

const ClassOrDogButton = ({ classInfo, dogInfo }) => {
  const { name } = classInfo || [];
  const { index, dogName } = dogInfo || [];

  return (
    <ClassOrDogButtonStyled>
      {classInfo !== undefined && <>{name}</>}
      {dogInfo !== undefined && (
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
