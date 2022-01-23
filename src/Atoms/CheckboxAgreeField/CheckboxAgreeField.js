import propTypes from 'prop-types';
import CheckboxAgreeFieldStyled from './CheckboxAgreeFieldStyled';

const CheckboxAgreeField = ({ text }) => {
  return (
    <CheckboxAgreeFieldStyled>
      <input id="register-checkbox" type="checkbox" required />
      <label htmlFor="register-checkbox" className="checkbox-text">
        {text}
      </label>
    </CheckboxAgreeFieldStyled>
  );
};

CheckboxAgreeField.propTypes = {
  text: propTypes.string.isRequired,
};

export default CheckboxAgreeField;
