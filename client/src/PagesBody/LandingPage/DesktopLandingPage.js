import { useContext, useEffect, useState } from 'react';

import ColumnWrapper from '../../Templates/ColumnWrapper/ColumnWrapper';
import ContestCard from '../../Molecules/ContestCard/ContestCard';
import ContestsWrapperStyled from '../ContestsPage/ContestsWrapperStyled';
import ErrorComponent from '../ErrorPage/ErrorComponent';
import FakeButton from '../../Atoms/FakeButton/FakeButton';
import Spinner from '../../Atoms/Spinner/Spinner';
import TitleWrapperStyled from '../../Molecules/LandingDesktopTitle/TitleWrapperStyled';
import mockmap from '../../Assets/mockMAP.JPG';
import {
  APP_DESCRIPTION_PART_1,
  APP_DESCRIPTION_PART_2,
  GOOD_BOI,
  UPCOMING_COMPETITIONS,
} from '../../Consts/landingPage.texts';
import { UserDataContext } from '../../Context/UserDataContext';
import { fetchContestsForLandingPage } from '../../Tools/FetchData/fetchContestsfunctions';

const DesktopLandingPage = () => {
  const { state } = useContext(UserDataContext);
  const { isAuthenticated } = state;

  const [isPending, setIsPending] = useState(true);
  const [contestData, setContestData] = useState(null);
  const [fetchErrors, setFetchErrors] = useState(null);
  useEffect(() => {
    async function fetchContestData() {
      try {
        let contests = await fetchContestsForLandingPage();
        setContestData(contests);
        setIsPending(false);
      } catch (error) {
        setFetchErrors(error.message);
      }
    }
    fetchContestData();
  }, []);

  return (
    <>
      {fetchErrors ? (
        <ErrorComponent message={fetchErrors} />
      ) : (
        <>
          <ContestsWrapperStyled
            className="contests"
            contentPosition={isAuthenticated}
          >
            <ColumnWrapper
              paddingLeftRight={1}
              paddingTop={0.5}
              className="contests-column-wrapper"
            >
              <TitleWrapperStyled>
                <h1>{GOOD_BOI}</h1>
                <h3>
                  {APP_DESCRIPTION_PART_1} <br /> {APP_DESCRIPTION_PART_2}
                </h3>
                <FakeButton
                  colors="primary"
                  to="/login"
                  text="Zaloguj się"
                  className="landing-desktop-login"
                />
              </TitleWrapperStyled>
              {contestData && (
                <h3 className="incoming-contests">{UPCOMING_COMPETITIONS}</h3>
              )}
              {isPending && <Spinner />}
              {contestData &&
                contestData.map((contest, index) => (
                  <ContestCard
                    key={index}
                    contestData={contest}
                    className="last-card"
                  />
                ))}
              {!isPending && contestData && (
                <FakeButton
                  colors="primary"
                  to="/contests"
                  state={{
                    contestContent: 'future',
                  }}
                  text="Zobacz więcej konkursów"
                  className="more-contests"
                />
              )}

              {!contestData && <h1>Brak zawodów w najbliższym czasie</h1>}
            </ColumnWrapper>
            <div className="mockmap">
              <img src={mockmap} alt="mockmap" />
            </div>
          </ContestsWrapperStyled>
        </>
      )}
    </>
  );
};

export default DesktopLandingPage;
