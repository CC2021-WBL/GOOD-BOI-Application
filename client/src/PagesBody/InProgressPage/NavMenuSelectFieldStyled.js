import styled from 'styled-components';

const NavMenuSelectFieldStyled = styled.div`
  height: 61px;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  .profilePicture {
    border-radius: 50%;
    border: 1px solid black;
    width: 53px;
    height: 53px;
    background-image: url(${require(`../../Assets/profileDogFace.jpg`)});
    background-size: cover;
  }
`;
export default NavMenuSelectFieldStyled;
