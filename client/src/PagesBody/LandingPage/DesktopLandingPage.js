import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import ContestsWrapperStyled from '../ContestsPage/ContestsWrapperStyled';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import TitleWrapperStyled from '../../Molecules/LandingDesktopTitle/TitleWrapperStyled';
import mockmap from '../../Assets/mockMAP.JPG';
import { TIME } from '../../Consts/infoLabelConsts';
import { UserDataContext } from '../../Context/UserDataContext';
import { getContestsCards } from '../../Tools/FetchData/fetchContestsfunctions';
import { getSelectedContestsByTime } from '../../Tools/TimeFunctions';
import { removeNullsFromArray } from '../../Tools/FetchData/additionalToolsForResults';

const DesktopLandingPage = () => {
  const rawDataFromDB = useRef(null);
  const [isPending, setIsPending] = useState(true);
  const locationPath = useLocation();
  const [selectedMode, setSelectedMode] = useState(null);
  const { state } = useContext(UserDataContext);
  useEffect(() => {
    async function fetchContestsData() {
      let result = await getContestsCards(state, locationPath);

      if (Array.isArray(result)) {
        result = removeNullsFromArray(result);
      }
      rawDataFromDB.current = result;

      setIsPending(false);
      setSelectedMode(TIME.FUTURE);
    }
    fetchContestsData();
  }, []);

  return (
    <>
      <ContestsWrapperStyled className="contests">
        <ColumnWrapper
          paddingLeftRight={1}
          paddingTop={0.5}
          className="contests-column-wrapper"
        >
          <TitleWrapperStyled>
            <h1>GOOD BOI</h1>
            <h3>
              portal zrzeszający fanów <br /> dobrych pieskow
            </h3>
            <FakeButton
              colors="primary"
              to="/login"
              text="Zaloguj się"
              className="landing-desktop-login"
            />
          </TitleWrapperStyled>
          <h3 className="incoming-contests">NADCHODZĄCE KONKURSY</h3>
          {isPending && <h3>Loading...</h3>}

          {rawDataFromDB.current &&
            getSelectedContestsByTime(selectedMode, rawDataFromDB.current).map(
              (contest) => (
                <ContestCard
                  key={contest.contestId}
                  contestData={contest}
                  className="last-card"
                />
              ),
            )}
          <FakeButton
            colors="primary"
            to="/contests"
            state={{
              contestContent: 'future',
            }}
            text="Zobacz więcej konkursów"
            className="more-contests"
          />
        </ColumnWrapper>
        <div className="mockmap">
          <img src={mockmap} alt="mockmap" />
        </div>
      </ContestsWrapperStyled>
    </>
  );
};

export default DesktopLandingPage;
