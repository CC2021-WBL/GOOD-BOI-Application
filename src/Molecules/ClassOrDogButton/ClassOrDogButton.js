import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import ClassOrDogButtonStyled from './ClassOrDogButtonStyled';
import InfoLabel from '../../Atoms/InfoLabel/InfoLabel';

const ClassOrDogButton = ({ classInfo, dogInfo }) => {
  const navigate = useNavigate();
  const { obedienceClass } = classInfo || [];
  const { index, dogName } = dogInfo || [];

  const urlSection = () => {
    if (obedienceClass) {
      return obedienceClass;
    } else if (dogName) {
      return dogName;
    }
  };
  const label = () => {
    if (urlSection() === obedienceClass) {
      return obedienceClass;
    } else if (urlSection() === dogName) {
      return `Ocena Zawodnika ${dogName}`;
    }
  };
  const clickHandler = (event) => {
    event.preventDefault();
    navigate(`./${urlSection()}`, {
      state: { text: 'Lista uczestników', label: `${label()}` },
    });
  };

  return (
    <ClassOrDogButtonStyled onClick={clickHandler}>
      {classInfo && <p>Klasa {obedienceClass}</p>}
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
