import propTypes from 'prop-types';
import CheckboxAgreeFieldStyled from './CheckboxAgreeFieldStyled';

const CheckboxAgreeField = ({ text, className }) => {
  return (
    <CheckboxAgreeFieldStyled>
      <input
        id="register-checkbox"
        type="checkbox"
        required
        className={className}
      />
      <label htmlFor="register-checkbox" className="checkbox-text">
        {text}
      </label>
    </CheckboxAgreeFieldStyled>
  );
};

CheckboxAgreeField.propTypes = {
  text: propTypes.string.isRequired,
  className: propTypes.string,
};

export default CheckboxAgreeField;
