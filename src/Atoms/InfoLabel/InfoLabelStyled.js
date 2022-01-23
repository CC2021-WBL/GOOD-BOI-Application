import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';
import { TIME } from '../../Consts/infoLabelConsts';

const InfoLabelStyled = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem;
  height: 1.25rem;
  ${FONTS.caption}
  border: solid 1px ${COLORS.grey800};
  border-radius: 0.25rem;
  line-height: 1em;
  ${(props) =>
    props.dateTextInfo === TIME.PRESENT || props.isClassCompleted
      ? `background: ${COLORS.positive100}; color: ${COLORS.positive600};  border: solid 1px  ${COLORS.positive600};`
      : ``};
  ${(props) =>
    props.dateTextInfo === TIME.FUTURE
      ? `background: ${COLORS.primary101}; color: ${COLORS.primary801};  border: solid 1px  ${COLORS.primary801};`
      : ``};
  ${(props) =>
    props.dateTextInfo === TIME.PAST
      ? `background: ${COLORS.grey100}; color: ${COLORS.grey800};  border: solid 1px  ${COLORS.grey800};`
      : ``};
  ${(props) =>
    props.areExercisesCompleted
      ? `background: ${COLORS.positive200}; color: ${COLORS.positive600};  border: solid 1px  ${COLORS.positive600};`
      : ``};
  ${(props) =>
    props.dogsAmount
      ? `background: ${COLORS.white}; color: ${COLORS.grey800};  border: solid 1px  ${COLORS.grey800};`
      : ``};
  ${(props) =>
    props.dogsAmount && props.dateTextInfo === TIME.PAST
      ? `background: ${COLORS.grey100}; color: ${COLORS.grey800};  border: solid 1px  ${COLORS.grey800};`
      : ``};
`;

export default InfoLabelStyled;
