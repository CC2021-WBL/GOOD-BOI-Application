// import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';

import pathData from '../../Consts/pathData';
import { useLocation } from 'react-router-dom';

const GreyLabelPath = () => {
  const locationPath = useLocation();

  const foundPath = pathData.find((e) => e.path === locationPath.pathname);

  return (
    <>
      {foundPath.path === locationPath.pathname && foundPath.label ? (
        <>
          {/* <h1>{foundPath.text}</h1> */}
          <p className="greyLabelText">{foundPath.label}</p>
        </>
      ) : (
        <h1>{foundPath.text}</h1>
      )}
    </>
  );
};
export default GreyLabelPath;
