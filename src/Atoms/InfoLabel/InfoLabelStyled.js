import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

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
    props.dateTextInfo === 'in-progress' || props.isClassCompleted
      ? `background: ${COLORS.positive100}; color: ${COLORS.positive600};  border: solid 1px  ${COLORS.positive600};`
      : ``};
  ${(props) =>
    props.dateTextInfo === 'in-future'
      ? `background: ${COLORS.primary101}; color: ${COLORS.primary801};  border: solid 1px  ${COLORS.primary801};`
      : ``};
  ${(props) =>
    props.dateTextInfo === 'in-past'
      ? `background: ${COLORS.grey100}; color: ${COLORS.grey800};  border: solid 1px  ${COLORS.grey800};`
      : ``};
  ${(props) =>
    props.areExercisesCompleted
      ? `background: ${COLORS.positive200}; color: ${COLORS.positive600};  border: solid 1px  ${COLORS.positive600};`
      : ``};
`;

export default InfoLabelStyled;
