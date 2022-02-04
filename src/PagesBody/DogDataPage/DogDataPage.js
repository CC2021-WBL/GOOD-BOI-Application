import DogData from '../../Organisms/DogData/DogData';
// import { useLocation } from 'react-router-dom';

const DogDataPage = () => {
  // From the previous page 'dog-submit' after choosing dog we passed to this dog-data page
  // dogid by state passed by navigate
  //      navigate(`./dog-data`, {
  //         state: { dogId: '' },
  //       });
  // const locationPath = useLocation();
  // const dogId = locationPath.state.dogId;
  const dogId = 'VIII-40407';
  return <DogData id={dogId} />;
};

export default DogDataPage;
