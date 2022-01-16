import styled from 'styled-components';
import FONTS from '../../Styles/fontsStyledComponents';
import COLORS from '../../Styles/varsStyledComponents';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    ${FONTS.body_semibold};
    align-self: flex-start;
    padding: 0 0 3px 20px;
  }

  .forgot-pass {
    padding: 1em 0;
    text-decoration: none;
    ${FONTS.label_extrabold}
    color: ${COLORS.primary801};
  }
`;

export default StyledForm;
