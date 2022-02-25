import RocketStyled from './RocketStyled';
import rocket from '../../Assets/rocket.png';

// import inprogress from '../../Assets/inprogress.png';



const Rocket = () => {
  return (
    <RocketStyled>
      <img src={rocket} alt="rocket" />
    </RocketStyled>
  );
};

export default Rocket;
