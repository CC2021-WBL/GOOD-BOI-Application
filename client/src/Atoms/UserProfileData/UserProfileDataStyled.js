import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const UserProfileDataStyled = styled.div`
  display: flex;
  padding: 0.625rem 0;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.withEdit ? `1px solid ${props.theme.grey300}` : 'none'};
  margin-right: ${(props) => (props.withEdit ? '0' : '2.5rem')};
  text-align: left;
  line-height: 1.3;

  h3 {
    color: ${({ theme }) => theme.grey800};
  }

  p {
    color: ${({ theme }) => theme.grey400};
  }

  .edit-btn {
    align-self: flex-end;
    border: none;
    margin: 0 0 0.625rem;
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.grey800};
    cursor: pointer;
  }

  @media only screen and (min-width: 800px) {
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

  &.user-data {
    justify-content: space-between;
    padding: 0 0 15px;
    h3 {
      ${FONTS.h2};
      position: static;
      width: 100%;
      border-bottom: none;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding: 2.5rem 0 0 0;
    &.user-data {
      h3 {
        padding: 0.3125rem;
        font-weight: 100;
        position: static;
        width: 100%;
        border-bottom: none;
      }

      p {
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
