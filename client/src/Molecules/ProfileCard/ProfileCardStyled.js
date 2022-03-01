import styled from 'styled-components';

const ProfileCardStyled = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* ${(props) => props.withEdit} */
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #9aa5b1;
  margin: 0 0 10px;

  .bg-box {
    position: relative;
    right: 1.2rem;
    width: 5rem;
    height: 5rem;
    border: 1px solid #c4c4c4;
    margin: 15px 0;
    background-image: url(${require(`../../Assets/profileDogFace.jpg`)});
    background-size: cover;
    border-radius: 50%;
  }

  ${(props) =>
    props.className === 'user_profile' &&
    `
    @media only screen and (min-width: 740px) {
    flex-direction: column;
    font-size: 22px;
    grid-area: 2 / 3 / 6 / 4;
    border: 1.5px solid grey;
    border-radius: 15px;
    margin: auto 0;
    justify-content: space-between;

    .bg-box {
      right: 0;
    }
      
  }
  `}
`;

export default ProfileCardStyled;
