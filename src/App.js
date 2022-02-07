import './App.css';

import { Route, Routes } from 'react-router-dom';
import { darkTheme, lightTheme } from './Styles/Themes';

import BurgerMenu from './Organisms/BurgerMenu/BurgerMenu';
import ClassCompetitorsPage from './PagesBody/ClassCompetitorsPage/ClassCompetitorsPage';
import ClassesPage from './PagesBody/ClassesPage/ClassesPage';
import ContactFormPage from './PagesBody/ContactFormPage/ContactFormPage';
import { ContestContextProvider } from './Context/ContestContext';
import ContestDetailsPage from './PagesBody/ContestDetailsPage/ContestDetailsPage';
import ContestsPage from './PagesBody/ContestsPage/ContestsPage';
import { DogContextProvider } from './Context/DogContext';
import DogDataPage from './PagesBody/DogDataPage/DogDataPage';
import DogSummaryPage from './PagesBody/DogSummaryPage/DogSummaryPage';
import ExercisesPage from './PagesBody/ExercisesPage/ExercisesPage';
import ForgotPassForm from './Organisms/ForgotPassForm/ForgotPassForm';
import { GlobalStyles } from './Styles/globalStyles';
import LandingPage from './PagesBody/LandingPage/LandingPage';
import Layout from './Templates/Layout/Layout';
import LeaderboardPage from './PagesBody/LeaderboardPage/LeaderboardPage';
import LoginForm from './Organisms/LoginForm/LoginForm';
import ModalsTest from './PagesBody/ModalsTest';
import NotFoundPage from './PagesBody/NotFoundPage/NotFoundPage';
import ParticipantDataPage from './PagesBody/ParticipantDataPage/ParticipantDataPage';
import ProfilePage from './PagesBody/ProfilePage/ProfilePage';
import RegistrationForm from './Organisms/RegistrationForm/RegistrationForm';
import RolePage from './PagesBody/RolePage/RolePage';
import SettingsPage from './PagesBody/SettingsPage/SettingsPage';
import { ThemeProvider } from 'styled-components';
import UnregisteredPage from './PagesBody/UnregisteredPage/UnregisteredPage';
import { UserDataProvider } from './Context/UserDataContext';
import UserDogPage from './PagesBody/UserDogsPage/UserDogPage';
import { useDarkMode } from './Hooks/useDarkMode';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <UserDataProvider>
      <DogContextProvider>
        <ContestContextProvider>
          <ThemeProvider theme={themeMode}>
            <>
              <GlobalStyles />
              <div className="App">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route element={<Layout withSettings />}>
                    <Route path="user/:userId" element={<ProfilePage />} />
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
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="forgot" element={<ForgotPassForm />} />
                    <Route path="contact-form" element={<ContactFormPage />} />
                    <Route path="register" element={<RegistrationForm />} />
                    <Route path="unregistered" element={<UnregisteredPage />} />
                    <Route path="login" element={<LoginForm />} />
                    <Route path="user-dogs" element={<UserDogPage />} />
                  </Route>
                  <Route element={<Layout withLabel />}>
                    <Route path="role" element={<RolePage />} />
                    <Route path="contests" element={<ContestsPage />} />
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
                    <Route path="dog-data" element={<DogDataPage />} />
                    <Route
                      path="participant-data"
                      element={<ParticipantDataPage />}
                    />
                    <Route
                      path="contest-details"
                      element={<ContestDetailsPage />}
                    />
                  </Route>

                  <Route path="modals-test" element={<ModalsTest />} />
                  <Route path="burger-menu" element={<BurgerMenu />} />
                </Routes>
              </div>
            </>
          </ThemeProvider>
        </ContestContextProvider>
      </DogContextProvider>
    </UserDataProvider>
  );
}

export default App;
