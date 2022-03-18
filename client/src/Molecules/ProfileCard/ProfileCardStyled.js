import styled from 'styled-components';

const ProfileCardStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 0.0313rem solid ${({ theme }) => theme.grey200};

  .bg-box {
    position: relative;
    right: 1.2rem;
    width: 5rem;
    height: 5rem;
    border: 0.0625rem solid ${({ theme }) => theme.grey200};
    margin: 0.9375rem 0;
    background-image: url(${require(`../../Assets/profileDogFace.jpg`)});
    background-size: cover;
    border-radius: 50%;
  }

  &.user-data-profile-card {
    display: block;
    position: relative;

    .bg-box {
      position: absolute;
      top: 0;
      right: 0.1875rem;
      bottom: 3.75rem;
      margin-left: auto;
      width: 4rem;
      height: 4rem;
    }
  }

  &.user-profile {
    @media only screen and (min-width: 800px) {
      min-height: 21.25rem;
      flex-direction: column;
      font-size: 1.375rem;
      border-radius: 0.9375rem;
      margin: 0;
      position: relative;
      border: 0.0625rem solid ${({ theme }) => theme.grey200};

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
