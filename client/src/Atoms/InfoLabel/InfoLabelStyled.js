import styled from 'styled-components';

import COLORS from '../../Styles/varsStyledComponents';
import FONTS from '../../Styles/fontsStyledComponents';
import { COLORSMOTIVE as c } from '../../Consts/infoLabelConsts';

const InfoLabelStyled = styled.label`
  cursor: pointer;
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
      ? `background: ${props.theme.positive100}; color: ${props.theme.positive600};  border: solid 1px  ${props.theme.positive600};`
      : ``};
  ${(props) =>
    props.colorMotive === c.BLUE
      ? `background: ${props.theme.primary101}; color: ${props.theme.primary801};  border: solid 1px  ${props.theme.primary801};`
      : ``};
  ${(props) =>
    props.colorMotive === c.GREY
      ? `background: ${props.theme.grey100}; color: ${props.theme.grey800};  border: solid 1px  ${props.theme.grey800};`
      : ``};
  ${(props) =>
    props.colorMotive === c.WHITE
      ? `background: ${props.theme.white}; color: ${props.theme.grey800};  border: solid 1px  ${props.theme.grey800};`
      : ``};
  &:hover {
    filter: brightness(1.025);
    cursor: pointer;
  }
`;

export default InfoLabelStyled;
