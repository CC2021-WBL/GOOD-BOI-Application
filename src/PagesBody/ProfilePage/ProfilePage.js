import propTypes from 'prop-types';

import ButtonLikeLink from '../../Atoms/ButtonLikeLink/ButtonLikeLink';
import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ProfileCard from '../../Molecules/ProfileCard/ProfileCard';

const ProfilePage = ({ userId }) => {
  return (
    <ColumnWrapper paddingLeftRight={1}>
      <ProfileCard />
      <ButtonLikeLink to="/user-dogs" text="Twoje Psy" ternary="ternary" />
      <ButtonLikeLink
        to={`./${userId}/contests`}
        text="Twoje Konkursy"
        ternary="ternary"
      />
      <ButtonLikeLink to="/user-data" text="Twoje Dane" ternary="ternary" />
      <ButtonLikeLink
        to="/upcoming"
        text="Nadchodzące Konkursy"
        secondary="secondary"
      />
    </ColumnWrapper>
  );
};

ProfilePage.propTypes = {
  userId: propTypes.string,
};

export default ProfilePage;
