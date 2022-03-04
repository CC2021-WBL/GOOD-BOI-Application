import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';
import GoodBoiLogoStyled from './GoodBoiLogoStyled';
import { NavLink } from 'react-router-dom';

const GoodBoiLogo = () => {
  return (
    <GoodBoiLogoStyled>
      <NavLink to="/login">
        <AppLogoSVG />
      </NavLink>
      <div style={{ userSelect: 'none' }}>GOOD BOI APP</div>
    </GoodBoiLogoStyled>
  );
};
export default GoodBoiLogo;
