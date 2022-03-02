import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import { COLORSMOTIVE as c } from '../../Consts/infoLabelConsts';
import styled from 'styled-components';

const ContestCardStyled = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.25rem 1.25rem 1.375rem 1.25rem;
  border: solid
    ${(props) =>
      props.colorMotive === c.GREEN
        ? props.theme.positive400
        : props.theme.grey200};
  border-width: ${(props) => (props.colorMotive === c.GREEN ? '3px' : '1px')};
  margin: 0.5rem auto 0.5rem;
  background-color: ${(props) =>
    props.colorMotive === c.GREEN
      ? props.theme.positive100
      : props.theme.white};
  border-radius: 0.75rem;

  .p {
    display: none;
  }
  .doggo {
    display: none;
  }

  @media (min-width: 1200px) {
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;

    .contest-card-wrapper {
      width: 70%;
      padding: 1.25rem 0 1.25rem 1.25rem;
    }

    .p {
      display: block;
      ${FONTS.body_bold};
      text-transform: uppercase;
      color: ${(props) => props.theme.primary501};
    }

    .doggo {
      display: block;
      height: 100%;
      width: 25%;

      img {
        width: 100%;
        height: 100%;
        border-radius: ${(props) =>
          props.colorMotive === c.GREEN ? '0 9.5px 9.5px 0' : '0 12px 12px 0'};
      }
    }
  }
`;

const ContestInsideElementStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid ${COLORS.grey200};
  color: ${(props) =>
    props.colorMotive === c.GREEN ? COLORS.positive600 : props.theme.grey400};
  ${FONTS.label_extrabold};

  @media (min-width: 1200px) {
    padding: 10px 0;
    width: 80%;
  }
`;

const ContestNameStyled = styled.h3`
  color: ${({ theme }) => theme.grey800};
  ${FONTS.h3};
`;

export { ContestCardStyled, ContestInsideElementStyled, ContestNameStyled };
