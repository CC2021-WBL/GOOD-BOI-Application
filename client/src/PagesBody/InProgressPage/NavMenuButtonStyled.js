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
  .button {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-around;
    padding: 0 0.5rem 0 0;
  }
  .button:hover {
    background: #eee;
    border-radius: 25px;
    cursor: pointer;
  }
`;
export default NavMenuSelectFieldStyled;
