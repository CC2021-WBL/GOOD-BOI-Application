import styled from 'styled-components';

const ProfilePicture = () => {
  return <ProfilePictureStyled />;
};

const ProfilePictureStyled = styled.div`
  border-radius: 50%;
  border: 0.0625rem solid black;
  width: 3.3125rem;
  height: 3.3125rem;
  background-image: url(${require(`../../Assets/profileDogFace.jpg`)});
  background-size: cover;
`;

export default ProfilePicture;
