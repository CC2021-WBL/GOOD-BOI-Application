import Logo from '../../Atoms/Logo/Logo';
import Card from '../../Atoms/Card/Card';
import PriSecBtn from '../../Atoms/PriSecBtn/PriSecBtn';

const HomePage = () => {
  return (
    <>
      <Card>
        <Logo />
      </Card>
      <PriSecBtn text="ZALOGUJ SIĘ" />
      <PriSecBtn text="ZAREJESTRUJ SIĘ" />
      <PriSecBtn text="PORTAL GOOD BOI" />
    </>
  );
};

export default HomePage;
