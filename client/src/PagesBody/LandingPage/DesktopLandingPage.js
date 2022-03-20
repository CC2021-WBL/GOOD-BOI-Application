import { useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import ContestsWrapperStyled from '../ContestsPage/ContestsWrapperStyled';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Spinner from '../../Atoms/Spinner/Spinner';
import TitleWrapperStyled from '../../Molecules/LandingDesktopTitle/TitleWrapperStyled';
import { fetchContestsForLandingPage } from '../../Tools/FetchData/fetchContestsfunctions';
import mockmap from '../../Assets/mockMAP.JPG';

// import TitleWrapperStyled from '../../Molecules/LandingDesktopTitle/TitleWrapperStyled';

const DesktopLandingPage = () => {
  const [isPending, setIsPending] = useState(true);
  const [contestData, setContestData] = useState(null);

  useEffect(() => {
    async function fetchContestData() {
      let contests = await fetchContestsForLandingPage();
      setContestData(contests);
      setIsPending(false);
    }

    fetchContestData();
  }, []);

  return (
    <>
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

      <ContestsWrapperStyled className="contests">
        <ColumnWrapper
          paddingLeftRight={1}
          paddingTop={0.5}
          className="contests-column-wrapper"
        >
          <h3 className="incoming-contests">NADCHODZĄCE KONKURSY</h3>
          {isPending && <Spinner />}
          {contestData &&
            contestData.map((contest) => (
              <ContestCard
                key={contest.contestId}
                contestData={contest}
                className="last-card"
              />
            ))}
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
