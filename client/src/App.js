import './App.css';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppStyles from './Styles/AppStyles';
import BurgerMenu from './Organisms/BurgerMenu/BurgerMenu';
import ClassChoicePage from './PagesBody/ClassChoicePage/ClassChoicePage';
import ClassCompetitorsPage from './PagesBody/ClassCompetitorsPage/ClassCompetitorsPage';
import ClassesPage from './PagesBody/ClassesPage/ClassesPage';
import ConfirmationPage from './PagesBody/ConfirmationPage/ConfirmationPage';
import ContactFormPage from './PagesBody/ContactFormPage/ContactFormPage';
import ContestDetailsPage from './PagesBody/ContestDetailsPage/ContestDetailsPage';
import ContestsPage from './PagesBody/ContestsPage/ContestsPage';
import DogDataPage from './PagesBody/DogDataPage/DogDataPage';
import DogFormPage from './PagesBody/DogFormPage/DogFormPage';
import DogSummaryPage from './PagesBody/DogSummaryPage/DogSummaryPage';
import ErrorBoundary from './Tools/ErrorBoundary';
import ExercisesPage from './PagesBody/ExercisesPage/ExercisesPage';
import ForgotPassForm from './Organisms/ForgotPassForm/ForgotPassForm';
import GridShit from './Styles/GridShit';
import InProgressPage from './PagesBody/InProgressPage/InProgressPage';
import LandingPage from './PagesBody/LandingPage/LandingPage';
import Layout from './Templates/Layout/Layout';
import LeaderboardPage from './PagesBody/LeaderboardPage/LeaderboardPage';
import LoginForm from './Organisms/LoginForm/LoginForm';
import NotFoundPage from './PagesBody/NotFoundPage/NotFoundPage';
import ParticipantDataPage from './PagesBody/ParticipantDataPage/ParticipantDataPage';
import ProfilePage from './PagesBody/ProfilePage/ProfilePage';
import RegistrationForm from './Organisms/RegistrationForm/RegistrationForm';
import RolePage from './PagesBody/RolePage/RolePage';
import SettingsPage from './PagesBody/SettingsPage/SettingsPage';
import UnregisteredPage from './PagesBody/UnregisteredPage/UnregisteredPage';
import UserDataPage from './PagesBody/UserDataPage/UserDataPage';
import UserDogPage from './PagesBody/UserDogsPage/UserDogPage';
import { ContestContextProvider } from './Context/ContestContext';
import { DogContextProvider } from './Context/DogContext';
import { GlobalStyles } from './Styles/globalStyles';
import { UserDataProvider } from './Context/UserDataContext';
import { darkTheme, lightTheme } from './Styles/Themes';
import { useDarkMode } from './Hooks/useDarkMode';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ErrorBoundary>
      <UserDataProvider>
        <DogContextProvider>
          <ContestContextProvider>
            <ThemeProvider theme={themeMode}>
              <>
                <GlobalStyles />
                <div className="App">
                  <AppStyles>
                    <GridShit>
                      <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route element={<Layout withSettings />}>
                          <Route
                            path="user/:userId"
                            element={<ProfilePage />}
                          />
                        </Route>
                        <Route element={<Layout />}>
                          <Route
                            path="settings"
                            element={
                              <SettingsPage
                                theme={theme}
                                themeToggler={themeToggler}
                              />
                            }
                          />
                          <Route
                            path="user/:userId/user-data"
                            element={<UserDataPage />}
                          />
                          <Route path="*" element={<NotFoundPage />} />
                          <Route path="forgot" element={<ForgotPassForm />} />
                          <Route
                            path="contact-form"
                            element={<ContactFormPage />}
                          />
                          <Route
                            path="register"
                            element={<RegistrationForm />}
                          />
                          <Route
                            path="unregistered"
                            element={<UnregisteredPage />}
                          />
                          <Route path="login" element={<LoginForm />} />
                          <Route
                            path="in-progress"
                            element={<InProgressPage />}
                          />
                        </Route>
                        <Route element={<Layout withLabel />}>
                          <Route path="user-dogs" element={<UserDogPage />} />
                          <Route
                            path="confirmation"
                            element={<ConfirmationPage />}
                          />
                          <Route
                            path="add-dog-form"
                            element={<DogFormPage />}
                          />
                          <Route path="role" element={<RolePage />} />
                          <Route path="contests" element={<ContestsPage />} />
                          <Route
                            path="class-choice"
                            element={<ClassChoicePage />}
                          />
                          <Route
                            path="contests/:contestId/classes"
                            element={<ClassesPage />}
                          />
                          <Route
                            path="contests/:contestId/classes/:classId"
                            element={<ClassCompetitorsPage />}
                          />
                          <Route
                            path="contests/:contestId/classes/:classId/leaderboard"
                            element={<LeaderboardPage />}
                          />
                          <Route
                            path="contests/:contestId/classes/:classId/:dogId"
                            element={<ExercisesPage />}
                          />
                          <Route
                            path="contests/:contestId/classes/:classId/:dogId/dog-summary"
                            element={<DogSummaryPage />}
                          />
                          <Route
                            path="dog-data/:dogId"
                            element={<DogDataPage />}
                          />
                          <Route
                            path="participant-data/:participantId"
                            element={<ParticipantDataPage />}
                          />
                          <Route
                            path="contests/:contestId"
                            element={<ContestDetailsPage />}
                          />
                        </Route>
                        <Route path="burger-menu" element={<BurgerMenu />} />
                      </Routes>
                    </GridShit>
                  </AppStyles>
                </div>
              </>
            </ThemeProvider>
          </ContestContextProvider>
        </DogContextProvider>
      </UserDataProvider>
    </ErrorBoundary>
  );
}

export default App;
