import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    ${FONTS.label_regular};
    color: ${COLORS.grey800};
    align-self: flex-start;
    padding: 10px 0 10px 10px;
  }

  .forgot-pass {
    padding: 1em 0;
    text-decoration: none;
    ${FONTS.label_extrabold}
    color: ${COLORS.primary801};
  }
`;

export default StyledForm;
