import RocketStyled from './RocketStyled';
import inprogress from '../../Assets/inprogress.png';

// import rocket from '../../Assets/rocket.png';

const Rocket = () => {
  return (
    <RocketStyled>
      <img src={inprogress} alt="rocket" />
    </RocketStyled>
  );
};

export default Rocket;
