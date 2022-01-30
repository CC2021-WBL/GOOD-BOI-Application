import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import { COLORSMOTIVE as c } from '../../Consts/infoLabelConsts';
import styled from 'styled-components';

const InfoLabelStyled = styled.label`
  display: flex;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  border: solid 1px ${COLORS.grey800};
  border-radius: 0.25rem;
  line-height: 1em;
  ${FONTS.caption}
  ${(props) =>
    props.colorMotive === c.GREEN
      ? `background: ${COLORS.positive100}; color: ${COLORS.positive600};  border: solid 1px  ${COLORS.positive600};`
      : ``};
  ${(props) =>
    props.colorMotive === c.BLUE
      ? `background: ${COLORS.primary101}; color: ${COLORS.primary801};  border: solid 1px  ${COLORS.primary801};`
      : ``};
  ${(props) =>
    props.colorMotive === c.GREY
      ? `background: ${COLORS.grey100}; color: ${COLORS.grey800};  border: solid 1px  ${COLORS.grey800};`
      : ``};
  ${(props) =>
    props.colorMotive === c.WHITE
      ? `background: ${COLORS.white}; color: ${COLORS.grey800};  border: solid 1px  ${COLORS.grey800};`
      : ``};
`;

export default InfoLabelStyled;
