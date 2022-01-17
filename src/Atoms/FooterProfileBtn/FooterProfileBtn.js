import propTypes from 'prop-types';
import { FaUserCircle } from 'react-icons/fa';
import { ProfileBtnWrapper } from './FooterProfileBtnStyled';
import { Div } from './FooterProfileBtnStyled';

function clickHandler() {
  console.log('clicked profie button');
}
const ProfileBtn = () => {
  return (
    <>
      <ProfileBtnWrapper onClick={clickHandler}>
        <FaUserCircle />
        <Div> Twój profil </Div>
      </ProfileBtnWrapper>
    </>
  );
};

ProfileBtn.propTypes = {
  text: propTypes.string,
  active: propTypes.string,
};

export default ProfileBtn;
