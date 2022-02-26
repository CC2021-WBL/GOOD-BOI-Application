import LogoGoodBoiSvg from './../../Atoms/LogoGoodBoi/LogoGoodBoi';
import MainButton from './../../Atoms/MainButton/MainButton';

const NavDesktop = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: '109px',
          alignContent: 'center',
          alignItems: 'center',
          background: '#F5F7FA',
        }}
      >
        <div
          style={{
            height: '75%',
            // width: '100%',
          }}
        >
          <LogoGoodBoiSvg width="100%" height="100%" />
        </div>
        <div>STRONA GŁÓWNA</div>
        <div>AKTUALNE KONKURSY</div>
        <div>WEŹ UDZIAŁ W ZAWODACH</div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <MainButton ternary text="text" />
          <MainButton primary text="text" />
        </div>
      </div>
    </>
  );
};

export default NavDesktop;
