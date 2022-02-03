import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import MainButton from '../../Atoms/MainButton/MainButton';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';

const ProfilePage = ({ userId }) => {
  const navigate = useNavigate();

  return (
    <ColumnWrapper paddingLeftRight={1}>
      <ProfileCard />
      <MainButton
        text="Twoje Psy"
        onClick={() => navigate('/userDogs')}
        ternary
      />
      <MainButton
        text="Twoje Konkursy"
        onClick={() => navigate(`./${userId}/contests`)}
        ternary
      />
      <MainButton
        text="Twoje Dane"
        onClick={() => navigate('/userData')}
        ternary
      />
      <MainButton
        text="Nadchodzące Konkursy"
        onClick={() => navigate('/upcoming')}
        secondary
      />
    </ColumnWrapper>
  );
};

ProfilePage.propTypes = {
  userId: propTypes.string,
};

export default ProfilePage;
