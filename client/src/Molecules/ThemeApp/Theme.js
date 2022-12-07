import { FaDog } from 'react-icons/fa';
import ThemeWrapperStyled from './ThemeWrapperStyled';
import propTypes from 'prop-types';

const Theme = ({ theme, themeToggler }) => {
  return (
    <ThemeWrapperStyled>
      <p>Zmień motyw</p>
      <div>
        <FaDog className=" dog dog--yellow" />
        <label className="switch">
          <input
            checked={theme === 'dark'}
            onChange={(e) => themeToggler(e.target.checked ? 'dark' : 'light')}
            type="checkbox"
            onClick={themeToggler}
          />
          <span className="slider" />
        </label>
        <FaDog className="dog dog--black" />
      </div>
    </ThemeWrapperStyled>
  );
};
Theme.propTypes = { themeToggler: propTypes.func, theme: propTypes.string };
export default Theme;
