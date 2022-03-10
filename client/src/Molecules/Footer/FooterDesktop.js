import FooterDesktopInnerStyled from './FooterDesktopInnerStyled';
import FooterDesktopStyled from './FooterDesktopStyled';
import logoDevsOnTheWaves from '../../Assets/logoDevsOnTheWaves.svg';
import { Copy, DevsLogo } from './FooterStyled';
import { LogoStyled } from './FooterStyled';

const FooterDesktop = () => {
  return (
    <>
      <FooterDesktopStyled>
        <FooterDesktopInnerStyled>
          <a
            href="https://github.com/CC2021-WBL"
            target="_blank"
            rel="noreferrer"
          >
            <LogoStyled>
              <DevsLogo>
                <img
                  className="logo"
                  src={logoDevsOnTheWaves}
                  alt="logo"
                  width="35px"
                />
              </DevsLogo>
              <Copy>
                Copyright <br />
                #Devs on the Waves
              </Copy>
            </LogoStyled>
          </a>
          <div>
            <a
              href="https://github.com/CC2021-WBL"
              target="_blank"
              rel="noreferrer"
            >
              <h3>O aplikacji</h3>
            </a>
            <br></br>
            <a
              href="https://github.com/CC2021-WBL"
              target="_blank"
              rel="noreferrer"
            >
              <p>Czym jest GOOD GOI APP</p>
            </a>
            <a
              href="https://github.com/CC2021-WBL"
              target="_blank"
              rel="noreferrer"
            >
              <p>O nas</p>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/CC2021-WBL"
              target="_blank"
              rel="noreferrer"
            >
              <h3>Warunki korzystania</h3>
            </a>
            <br></br>
            <a
              href="https://github.com/CC2021-WBL"
              target="_blank"
              rel="noreferrer"
            >
              <p>Warunki korzystania z serwisu</p>
            </a>
            <a
              href="https://github.com/CC2021-WBL"
              target="_blank"
              rel="noreferrer"
            >
              <p>Polityka prywatności</p>
            </a>
          </div>
        </FooterDesktopInnerStyled>
      </FooterDesktopStyled>
    </>
  );
};

export default FooterDesktop;
