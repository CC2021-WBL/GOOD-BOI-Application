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
  border-width: ${(props) =>
    props.colorMotive === c.GREEN ? '0.1875rem' : '0.0625rem'};
  margin: 0.5rem auto 0.5rem;
  background-color: ${(props) =>
    props.colorMotive === c.GREEN
      ? props.theme.positive100
      : props.theme.white};
  border-radius: 0.75rem;

  .contest-action,
  .doggo-image {
    display: none;
  }

  @media (min-width: 800px) {
    display: flex;
    max-height: 11.25rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    cursor: pointer;
    text-align: left;

    .contest-card-wrapper {
      width: 70%;
      padding: 1.25rem 0 1.25rem 1.25rem;
    }

    .contest-action {
      display: block;
      color: ${(props) => props.theme.primary501};
      ${FONTS.body_bold};
      text-transform: uppercase;
    }

    .doggo-image {
      display: block;
      width: auto;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        border-radius: ${(props) =>
          props.colorMotive === c.GREEN ? '0 9.5px 9.5px 0' : '0 12px 12px 0'};
      }
    }
    &.last-card:last-of-type {
      border-radius: 0.75rem 0.75rem 0 0;
    }
    &.last-card:last-of-type img {
      border-radius: ${(props) =>
        props.colorMotive === c.GREEN ? '0 0.5938rem 0 0' : '0 0.75rem 0 0'};
    }
  }
  &:hover {
    filter: brightness(1.05);
    box-shadow: 2px 4px ${({ theme }) => theme.primary201};
    cursor: pointer;
  }
`;

const ContestInsideElementStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid ${COLORS.grey200};
  color: ${(props) =>
    props.colorMotive === c.GREEN
      ? props.theme.positive600
      : props.theme.grey400};
  ${FONTS.label_extrabold};

  @media (min-width: 800px) {
    width: 80%;
    padding: 0.625rem 0;
  }
`;

const ContestNameStyled = styled.h3`
  color: ${({ theme }) => theme.grey800};
  ${FONTS.h3};
`;

export { ContestCardStyled, ContestInsideElementStyled, ContestNameStyled };
