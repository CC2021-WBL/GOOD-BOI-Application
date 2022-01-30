import propTypes from 'prop-types';

import PARTICIPANTS from '../../Data/Dummy-data/test-data-participants';
import UserNameAndImgStyled from './UserNameAndImgStyled';

const UserNameAndImg = () => {
  // userId otrzymamy w propsie lub kontekście
  const userId = '1a0b079c-3d93-4fc0-a391-114e0f1d2004';
  let userObject = PARTICIPANTS.find(
    (participant) => participant.id === userId,
  );
  return (
    <UserNameAndImgStyled>
      <h3>{`${userObject.name} ${userObject.surname}`}</h3>
      <div className="bg-box"></div>
    </UserNameAndImgStyled>
  );
};

UserNameAndImg.propTypes = {
  userId: propTypes.string,
};

export default UserNameAndImg;
