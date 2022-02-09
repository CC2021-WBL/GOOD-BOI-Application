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
  border: solid 3px
    ${(props) =>
      props.colorMotive === c.GREEN ? COLORS.positive400 : props.theme.grey200};
  margin: 0.5rem auto 0.5rem;
  background-color: ${(props) =>
    props.colorMotive === c.GREEN
      ? props.theme.positive100
      : props.theme.white};
  border-radius: 0.75rem;
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
`;

const ContestNameStyled = styled.h3`
  color: ${({ theme }) => theme.grey800};
  ${FONTS.h3};
`;

export { ContestCardStyled, ContestInsideElementStyled, ContestNameStyled };
