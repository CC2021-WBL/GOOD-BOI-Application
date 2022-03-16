import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const UserProfileDataStyled = styled.div`
  display: flex;
  padding: 0.625rem 0;
  justify-content: space-between;
  margin-right: ${(props) => (props.withEdit ? '0' : '2.5rem')};
  text-align: left;
  line-height: 1.3;

  h3 {
    color: ${({ theme }) => theme.grey800};
  }

  p {
    color: ${({ theme }) => theme.grey400};
  }

  .user-data-edit-btn {
    align-self: flex-end;
    border: none;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.grey800};
    cursor: pointer;
  }

  @media only screen and (min-width: 800px) {
    text-align: center;
    margin-right: 0;
    width: 100%;
    padding: 3.5rem 0 0 0;
    justify-content: center;

    h3 {
      ${FONTS.h2};
      padding: 0.3125rem;
      font-weight: 100;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 5rem;
      top: 0;
      right: 0;
      border-bottom: 1px solid ${({ theme }) => theme.grey200};
    }
    p {
      padding: 0 3px;
    }
  }

  &.user-data-profile-card {
    justify-content: space-between;
    padding: 0 0 15px;
    text-align: left;
    line-height: 1.4;

    h3 {
      position: static;
      width: 100%;
      border-bottom: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding: 2.5rem 0 0 0;

    &.user-data-profile-card {
      h3 {
        padding: 0.3125rem;
        font-weight: 100;
        position: static;
        width: 100%;
        border-bottom: none;
      }
    }
  }

  @media only screen and (min-width: 1600px) {
    padding: 0;

    h3 {
      ${FONTS.h2};
      height: 4rem;
    }
  }
`;

export default UserProfileDataStyled;
