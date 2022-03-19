import styled from 'styled-components';

const ProfilePicture = () => {
  return <ProfilePictureStyled />;
};

const ProfilePictureStyled = styled.div`
  width: 3.3125rem;
  border: 0.0625rem solid black;
  border-radius: 50%;
  height: 3.3125rem;
  background-image: url(${require(`../../Assets/profileDogFace.jpg`)});
  background-size: cover;
`;

export default ProfilePicture;
