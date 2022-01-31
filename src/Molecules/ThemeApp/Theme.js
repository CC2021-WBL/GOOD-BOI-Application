import { FaDog } from 'react-icons/fa';
import ThemeWrapperStyled from './ThemeWrapperStyled';
import propTypes from 'prop-types';

const Theme = ({ themeToggler }) => {
  return (
    <ThemeWrapperStyled>
      <p>Zmień motyw</p>
      <div>
        <FaDog className=" dog dog--yellow" />
        <label className="switch">
          <input type="checkbox" onClick={themeToggler} />
          <span className="slider" />
        </label>
        <FaDog className="dog dog--black" />
      </div>
    </ThemeWrapperStyled>
  );
};
Theme.propTypes = { themeToggler: propTypes.func };
export default Theme;
