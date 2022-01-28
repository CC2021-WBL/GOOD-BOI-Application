import './App.css';

import { Route, Routes } from 'react-router-dom';

import ClassCompetitorsPage from './PagesBody/ClassCompetitorsPage/ClassCompetitorsPage';
import ClassesPage from './PagesBody/ClassesPage/ClassesPage';
import ContactFormPage from './PagesBody/ContactFormPage/ContactFormPage';
import ContestDetailsPage from './PagesBody/ContestDetailsPage/ContestDetailsPage';
import ContestsPage from './PagesBody/ContestsPage/ContestsPage';
import DogDataPage from './PagesBody/DogDataPage/DogDataPage';
import DogSummaryPage from './PagesBody/DogSummaryPage/DogSummaryPage';
import ErrorPage from './PagesBody/ErrorPage/ErrorPage';
import ErrorTestPage from './PagesBody/ErrorTestPage/ErrorTestPage';
import ExercisesPage from './PagesBody/ExercisesPage/ExercisesPage';
import ForgotPassForm from './Organisms/ForgotPassForm/ForgotPassForm';
import LandingPage from './PagesBody/LandingPage/LandingPage';
import Layout from './Templates/Layout/Layout';
import LayoutWithLabel from './Templates/LayoutWithLabel/LayoutWithLabel';
import LeaderboardPage from './PagesBody/LeaderboardPage/LeaderboardPage';
import LoginForm from './Organisms/LoginForm/LoginForm';
import ModalsTest from './PagesBody/ModalsTest';
import NotFoundPage from './PagesBody/NotFoundPage/NotFoundPage';
import ProfilePage from './PagesBody/ProfilePage/ProfilePage';
import RegistrationForm from './Organisms/RegistrationForm/RegistrationForm';
import RolePage from './PagesBody/RolePage/RolePage';
import UnregisteredPage from './PagesBody/UnregisteredPage/UnregisteredPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="testErrors" element={<ErrorTestPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />}></Route>
          {/* //user views */}
          <Route path="user" element={<ProfilePage />} />
          <Route path="forgot" element={<ForgotPassForm />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="contactForm" element={<ContactFormPage />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="unRegistered" element={<UnregisteredPage />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
        <Route element={<LayoutWithLabel />}>
          <Route path="role" element={<RolePage />} />
          <Route path="contests" element={<ContestsPage />} />
          <Route path="contests/:contestId/classes" element={<ClassesPage />} />
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
            path="contests/:contestId/classes/:classId/:dogId/dogSummary"
            element={<DogSummaryPage />}
          />
          <Route path="dogData" element={<DogDataPage />} />
          <Route path="contestDetails" element={<ContestDetailsPage />} />
        </Route>

        <Route path="ModalsTest" element={<ModalsTest />} />
      </Routes>
    </div>
  );
}

export default App;
// "eslint-config-prettier": "^8.3.0",
// "eslint-plugin-react-hooks": "^4.3.0",
// "prettier": "^2.5.1"
