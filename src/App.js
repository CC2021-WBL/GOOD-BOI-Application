import './App.css';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ClassCompetitorsPage from './PagesBody/ClassCompetitorsPage/ClassCompetitorsPage';
import ClassesPage from './PagesBody/ClassesPage/ClassesPage';
import ContactFormPage from './PagesBody/ContactFormPage/ContactFormPage';
import ContestDetailsPage from './PagesBody/ContestDetailsPage/ContestDetailsPage';
import ContestsPage from './PagesBody/ContestsPage/ContestsPage';
import DogDataPage from './PagesBody/DogDataPage/DogDataPage';
import DogSummaryPage from './PagesBody/DogSummaryPage/DogSummaryPage';
import ErrorBoundary from './Tools/ErrorBoundary';
import ExercisesPage from './PagesBody/ExercisesPage/ExercisesPage';
import ForgotPassForm from './Organisms/ForgotPassForm/ForgotPassForm';
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
import UnregisteredPage from './PagesBody/UnregisteredPage/UnregisteredPage';
import { GlobalStyles } from './Styles/globalStyles';
import { ParticipantContextProvider } from './Context/ParticipantContext';
import { UserDataProvider } from './Context/UserDataContext';
import { darkTheme, lightTheme } from './Styles/Themes';
import { useDarkMode } from './Hooks/useDarkMode';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<Layout withSettings />}>
              <Route
                path="user/:userId"
                element={
                  <UserDataProvider>
                    <ParticipantContextProvider>
                      <ErrorBoundary>
                        <ProfilePage />
                      </ErrorBoundary>
                    </ParticipantContextProvider>
                  </UserDataProvider>
                }
              />
            </Route>
            <Route element={<Layout />}>
              <Route
                path="settings"
                element={
                  <SettingsPage theme={theme} themeToggler={themeToggler} />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="forgot" element={<ForgotPassForm />} />
              <Route path="contact-form" element={<ContactFormPage />} />
              <Route path="register" element={<RegistrationForm />} />
              <Route path="unregistered" element={<UnregisteredPage />} />
              <Route
                path="login"
                element={
                  <UserDataProvider>
                    <LoginForm />
                  </UserDataProvider>
                }
              />
            </Route>
            <Route element={<Layout withLabel />}>
              <Route
                path="role"
                element={
                  <UserDataProvider>
                    <RolePage />
                  </UserDataProvider>
                }
              />
              <Route
                path="contests"
                element={
                  <UserDataProvider>
                    <ContestsPage />
                  </UserDataProvider>
                }
              />
              <Route
                path="contests/:contestId/classes"
                element={
                  <UserDataProvider>
                    <ClassesPage />
                  </UserDataProvider>
                }
              />
              <Route
                path="contests/:contestId/classes/:classId"
                element={
                  <UserDataProvider>
                    <ClassCompetitorsPage />
                  </UserDataProvider>
                }
              />
              <Route
                path="contests/:contestId/classes/:classId/leaderboard"
                element={
                  <UserDataProvider>
                    <LeaderboardPage />
                  </UserDataProvider>
                }
              />
              <Route
                path="contests/:contestId/classes/:classId/:dogId"
                element={
                  <UserDataProvider>
                    <ExercisesPage />
                  </UserDataProvider>
                }
              />
              <Route
                path="contests/:contestId/classes/:classId/:dogId/dog-summary"
                element={
                  <UserDataProvider>
                    <DogSummaryPage />
                  </UserDataProvider>
                }
              />
              <Route
                path="dog-data"
                element={
                  <UserDataProvider>
                    <ParticipantContextProvider>
                      <DogDataPage />
                    </ParticipantContextProvider>
                  </UserDataProvider>
                }
              />
              <Route
                path="participant-data"
                element={
                  <UserDataProvider>
                    <ParticipantContextProvider>
                      <ParticipantDataPage />
                    </ParticipantContextProvider>
                  </UserDataProvider>
                }
              />
              <Route
                path="contest-details"
                element={
                  <UserDataProvider>
                    <ParticipantContextProvider>
                      <ContestDetailsPage />
                    </ParticipantContextProvider>
                  </UserDataProvider>
                }
              />
            </Route>

            <Route path="modals-test" element={<ModalsTest />} />
          </Routes>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
