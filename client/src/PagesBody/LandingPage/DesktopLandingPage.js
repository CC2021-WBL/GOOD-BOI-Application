import { useEffect, useRef, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import ContestsWrapperStyled from '../ContestsPage/ContestsWrapperStyled';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import TitleWrapperStyled from '../../Molecules/LandingDesktopTitle/TitleWrapperStyled';
import mockmap from '../../Assets/mockMAP.JPG';
import resForContestPage from '../../Data/MongoDBMock/responseFromContestsToContestsPage';
import { TIME } from '../../Consts/infoLabelConsts';
import { getSelectedContestsByTime } from '../../Tools/TimeFunctions';
import { requestOptionsGET } from '../../FetchData/requestOptions';

const DesktopLandingPage = () => {
  const [isPending, setIsPending] = useState(true);
  const [contestData, setContestData] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const rawDataFromDB = useRef(null);

  useEffect(() => {
    fetch('/api/contests/?taker=card', requestOptionsGET)
      .then((response) => response.json())
      .then((result) => {
        rawDataFromDB.current = result;
        console.log(rawDataFromDB.current);
      })
      .catch((error) => console.log('error', error));

    setContestData(resForContestPage);
    setSelectedMode(TIME.FUTURE);
    setIsPending(false);
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
          {contestData &&
            getSelectedContestsByTime(selectedMode, contestData).map(
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
