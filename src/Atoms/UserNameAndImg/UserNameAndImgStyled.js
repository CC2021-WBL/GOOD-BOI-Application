import styled from 'styled-components';

const UserNameAndImgStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0;

  .bg-box {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.625rem;
    background-image: url(${require(`../../Assets/profileDogFace.jpg`)});
    background-size: cover;
    border-radius: 50%;
  }
`;

// other ways to add image, and image as a prop

// background-image: url(${image});
//      background-image: ${(props) =>
// url(${require(../../Assets/${props.backgroundImage}).default})};
export default UserNameAndImgStyled;
