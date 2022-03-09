import styled from 'styled-components';

import FONTS from '../../Styles/fontsStyledComponents';

const UserProfileDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.625rem 0;
  border-bottom: ${(props) =>
    props.withEdit ? `1px solid ${props.theme.grey300}` : 'none'};
  margin-right: ${(props) => (props.withEdit ? '0' : '2.5rem')};
  text-align: left;

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

    p {
      color: ${({ theme }) => theme.grey400};
    }
  }
  @media only screen and (min-width: 800px) {
    text-align: center;
    margin-right: 0;
    width: 100%;
    padding: 2.5rem 0 0 0;

    h3 {
      ${FONTS.h1};
      font-weight: 100;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      width: 100%;
      height: 5rem;
      top: 0;
      border-bottom: 1px solid ${({ theme }) => theme.grey200};
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
