import { useLocation } from 'react-router-dom';
import pathData from '../../Consts/pathData';
import GreyLabel from '../../Atoms/GreyLabel/GreyLabel';

const NavLabel = () => {
  const locationPath = useLocation();

  const foundPath = pathData.find((e) => e.path === locationPath.pathname);

  return (
    <>
      {foundPath.path === locationPath.pathname && foundPath.label ? (
        <>
          <h1>{foundPath.text}</h1> <GreyLabel text={foundPath.label} />
        </>
      ) : (
        <h1>{foundPath.text}</h1>
      )}
    </>
  );
};
export default NavLabel;
