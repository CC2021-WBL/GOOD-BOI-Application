import propTypes from 'prop-types';
import CheckboxAgreeFieldStyled from './CheckboxAgreeFieldStyled';

const CheckboxAgreeField = ({ text }) => {
  return (
    <CheckboxAgreeFieldStyled>
      <input type="checkbox" required />
      <div className="checkbox-text">{text}</div>
    </CheckboxAgreeFieldStyled>
  );
};

CheckboxAgreeField.propTypes = {
  text: propTypes.string.isRequired,
};

export default CheckboxAgreeField;
