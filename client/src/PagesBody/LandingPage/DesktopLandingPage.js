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
  const [contestData, setContestData] = useState([]);
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

                {!isPending && (
                  <FakeButton
                    colors="primary"
                    to={isAuthenticated ? '/role' : '/login'}
                    text={isAuthenticated ? 'Konto użytkownika' : 'Zaloguj się'}
                    className="landing-desktop-login"
                  />
                )}
              </TitleWrapperStyled>
              {isPending ? (
                <Spinner />
              ) : (
                <>
                  <h3 className="incoming-contests">
                    {contestData.length > 0
                      ? UPCOMING_COMPETITIONS
                      : 'Brak zawodów w najbliższym czasie'}
                  </h3>
                  {contestData.length > 0 &&
                    contestData.map((contest, index) => (
                      <>
                        <ContestCard
                          key={index}
                          contestData={contest}
                          className="last-card"
                        />
                        <FakeButton
                          colors="primary"
                          to="/contests"
                          state={{
                            contestContent: 'future',
                          }}
                          text="Zobacz więcej konkursów"
                          className="more-contests"
                        />
                      </>
                    ))}
                </>
              )}
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
