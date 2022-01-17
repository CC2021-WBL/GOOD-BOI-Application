import propTypes from 'prop-types';
import CheckboxAgreeFieldStyled from './CheckboxAgreeFieldStyled';

const CheckboxAgreeField = ({ text }) => {
  return (
    <CheckboxAgreeFieldStyled>
      <input type="checkbox" required />
      <p>{text}</p>
    </CheckboxAgreeFieldStyled>
  );
};

CheckboxAgreeField.propTypes = {
  text: propTypes.string,
};

export default CheckboxAgreeField;
