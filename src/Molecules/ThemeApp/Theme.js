import { FaDog } from 'react-icons/fa';
import ThemeWrapperStyled from './ThemeWrapperStyled';

const Theme = () => {
  return (
    <ThemeWrapperStyled>
      <p>Zmień motyw</p>
      <div>
        <FaDog className=" dog dog--yellow" />
        <label className="switch">
          <input type="checkbox" />
          <span className="slider" />
        </label>
        <FaDog className="dog dog--black" />
      </div>
    </ThemeWrapperStyled>
  );
};

export default Theme;
