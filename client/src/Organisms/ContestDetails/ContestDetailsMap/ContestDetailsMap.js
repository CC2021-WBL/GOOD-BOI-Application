import ContestDetailsMapStyled from './ContestDetailsMapStyled';
import mockMAP from '../../../Assets/mockMAP.JPG';

const ContestDetailsMap = () => {
  return (
    <ContestDetailsMapStyled className="contest-data-map">
      <img src={mockMAP} alt="mockmap" />
    </ContestDetailsMapStyled>
  );
};

export default ContestDetailsMap;
