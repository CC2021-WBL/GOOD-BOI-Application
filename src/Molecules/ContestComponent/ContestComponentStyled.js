import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const ContestComponentStyled = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.25rem 1.25rem 1.375rem 1.25rem;
  border: solid 1px ${COLORS.grey200};
  margin: auto;
  background-color: ${(props) =>
    props.isClicked ? COLORS.positive100 : COLORS.white};
  border-radius: 0.75rem;
`;

const ContestInsideElementStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid lightgrey;
  color: ${(props) => (props.isClicked ? COLORS.positive600 : COLORS.grey400)};
  ${FONTS.label_extrabold};
`;

const ContestNameStyled = styled.h3`
  color: ${COLORS.grey800};
  ${FONTS.h3};
`;

export {
  ContestComponentStyled,
  ContestInsideElementStyled,
  ContestNameStyled,
};
