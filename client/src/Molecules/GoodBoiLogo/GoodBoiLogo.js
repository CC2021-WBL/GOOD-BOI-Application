import { NavLink } from 'react-router-dom';

import GoodBoiLogoStyled from './GoodBoiLogoStyled';
import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';
import { useContext } from 'react';
import { UserDataContext } from '../../Context/UserDataContext';

const GoodBoiLogo = () => {
  const { state } = useContext(UserDataContext);

  return (
    <NavLink to={`/user/${state.userId}`}>
      <GoodBoiLogoStyled>
        <AppLogoSVG />

        <div
          style={{
            textDecoration: 'none',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            color: ``,
          }}
        >
          GOOD BOI APP
        </div>
      </GoodBoiLogoStyled>
    </NavLink>
  );
};
export default GoodBoiLogo;
