import './App.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import ClassCompetitorsPage from './Pages/ClassCompetitorsPage/ClassCompetitorsPage';
import ClassesPage from './Pages/ClassesPage/ClassesPage';
import ContestDetailsPage from './Pages/ContestDetailsPage/ContestDetailsPage';
import ContactFormPage from './Pages/ContactForm/ContactForm';
import ContestsPage from './Pages/ContestsPage/ContestsPage';
import DogSummaryPage from './Pages/DogSummaryPage/DogSummaryPage';
import ExercisesPage from './Pages/ExercisesPage/ExercisesPage';
import ForgotPassForm from './Organisms/ForgotPassForm/ForgotPassForm';
import LandingPage from './Pages/LandingPage/LandingPage';
import Layout from './Templates/Layout/Layout';
import LayoutWithLabel from './Templates/LayoutWithLabel/LayoutWithLabel';
import LeaderboardPage from './Pages/LeaderboardPage/LeaderboardPage';
import LoginForm from './Organisms/LoginForm/LoginForm';
import ModalsTest from './Pages/ModalsTest';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import RegistrationForm from './Organisms/RegistrationForm/RegistrationForm';
import './App.css';

import RolePage from './Pages/RolePage/RolePage';
// import ClassSummaryPage from './Pages/ClassSummaryPage/ClassSummaryPage';
import UnregisteredPage from './Pages/UnregisteredPage/UnregisteredPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
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
          <Route path="/contestDetails" element={<ContestDetailsPage />} />
        </Route>

        <Route path="ModalsTest" element={<ModalsTest />} />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
// "eslint-config-prettier": "^8.3.0",
// "eslint-plugin-react-hooks": "^4.3.0",
// "prettier": "^2.5.1"
