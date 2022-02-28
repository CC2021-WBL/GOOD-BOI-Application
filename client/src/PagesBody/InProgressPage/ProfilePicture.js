import styled from 'styled-components';
const ProfilePicture = () => {
  return <ProfilePictureStyled />;
};

const ProfilePictureStyled = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  width: 53px;
  height: 53px;
  background-image: url(${require(`../../Assets/profileDogFace.jpg`)});
  background-size: cover;
`;

export default ProfilePicture;
