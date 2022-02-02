import styled from 'styled-components';

const UserNameAndImgStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0;

  .bg-box {
    border-radius: 50%;
    background-image: url(${require(`../../Assets/profileDogFace.jpg`)});
    background-size: cover;
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 0.625rem;
  }
`;

// other ways to add image, and image as a prop

// background-image: url(${image});
//      background-image: ${(props) =>
// url(${require(../../Assets/${props.backgroundImage}).default})};
export default UserNameAndImgStyled;
