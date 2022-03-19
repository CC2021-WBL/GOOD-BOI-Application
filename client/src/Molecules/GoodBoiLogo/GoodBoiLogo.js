import { NavLink } from 'react-router-dom';

import GoodBoiLogoStyled from './GoodBoiLogoStyled';
import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';

const GoodBoiLogo = () => {
  return (
    <GoodBoiLogoStyled>
      <NavLink to="/">
        <AppLogoSVG />
      </NavLink>
      <div style={{ userSelect: 'none', whiteSpace: 'nowrap' }}>
        GOOD BOI APP
      </div>
    </GoodBoiLogoStyled>
  );
};
export default GoodBoiLogo;
