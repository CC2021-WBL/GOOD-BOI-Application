import styled from 'styled-components';

const ProfileCardStyled = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* ${(props) => props.withEdit} */
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #9aa5b1;
  margin: 0 0 0.625rem;

  .bg-box {
    position: relative;
    right: 1.2rem;
    width: 5rem;
    height: 5rem;
    border: 1px solid #c4c4c4;
    margin: 0.9375rem 0;
    background-image: url(${require(`../../Assets/profileDogFace.jpg`)});
    background-size: cover;
    border-radius: 50%;
  }

  &.user-profile {
    @media only screen and (min-width: 800px) {
      min-height: 21.25rem;
      flex-direction: column;
      font-size: 1.375rem;
      border-radius: 0.9375rem;
      margin: 0;
      position: relative;
      border: 1px solid ${({ theme }) => theme.grey200};

      .bg-box {
        margin: 1.25rem 0;
        right: 0;
        top: 18%;
        width: 9rem;
        height: 9rem;
      }
    }

    @media only screen and (min-width: 1024px) {
      grid-area: 1 / 7 / span 2 / span 2;
      height: 100%;
      justify-content: space-around;
    }
    @media only screen and (min-width: 1600px) {
      .bg-box {
        top: 15%;
        width: 10rem;
        height: 10rem;
      }
    }
  }
`;

export default ProfileCardStyled;
