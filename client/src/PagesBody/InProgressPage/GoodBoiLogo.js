import GoodBoiLogoStyled from './GoodBoiLogoStyled';
import { ReactComponent as AppLogoSVG } from '../../Assets/AppLogoSVG.svg';

const GoodBoiLogo = () => {
  return (
    <GoodBoiLogoStyled>
      <AppLogoSVG />
      <div style={{ userSelect: 'none' }}>GOOD BOI APP</div>
    </GoodBoiLogoStyled>
  );
};
export default GoodBoiLogo;
