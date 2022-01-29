import ThemeWrapperStyled from './ThemeWrapperStyled';

const Theme = () => {
  return (
    <ThemeWrapperStyled>
      <p>Zmień motyw</p>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider" />
      </label>
    </ThemeWrapperStyled>
  );
};

export default Theme;
