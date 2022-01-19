import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';
import RolePage from './Pages/RolePage/RolePage';
import LoginForm from './Organisms/LoginForm/LoginForm';
import ClassesPage from './Pages/ClassesPage/ClassesPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import LandingPage from './Pages/LandingPage/LandingPage';
import ContestsPage from './Pages/ContestsPage/ContestsPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ContactFormPage from './Pages/ContactForm/ContactForm';
import ExercisesPage from './Pages/ExercisesPage/ExercisesPage';
import DogSummaryPage from './Pages/DogSummaryPage/DogSummaryPage';
import LeaderboardPage from './Pages/LeaderboardPage/LeaderboardPage';
import ForgotPassForm from './Organisms/ForgotPassForm/ForgotPassForm';
import ClassSummaryPage from './Pages/ClassSummaryPage/ClassSummaryPage';
import UnregisteredPage from './Pages/UnregisteredPage/UnregisteredPage';
import RegistrationForm from './Organisms/RegistrationForm/RegistrationForm';
import ClassCompetitorsPage from './Pages/ClassCompetitorsPage/ClassCompetitorsPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/" element={<HomePage />}>
          <Route path="contactForm" element={<ContactFormPage />}></Route>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="unRegistered" element={<UnregisteredPage />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="forgot" element={<ForgotPassForm />} />
          <Route path="landing" element={<LandingPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="forgot" element={<ForgotPassForm />} />
          <Route path="role" element={<RolePage />} />
          <Route path="role/contests" element={<ContestsPage />} />
          <Route
            path="role/contests/:contestsId"
            element={<DogSummaryPage />}
          />
          <Route
            path="role/contests/:contestsId/classes"
            element={<ClassesPage />}
          />
          <Route
            path="role/contests/:contestsId/classes/:classId"
            element={<ClassCompetitorsPage />}
          />
          <Route
            path="role/contests/:contestsId/classes/:classId/leaderboard"
            element={<LeaderboardPage />}
          />
          <Route
            path="role/contests/:contestsId/classes/:classId/classSummary"
            element={<ClassSummaryPage />}
          />
          <Route
            path="role/contests/:contestsId/classes/:classId/:dogId"
            element={<ExercisesPage />}
          />
          <Route
            path="role/contests/:contestsId/classes/:classId/:dogId/dogSummary"
            element={<DogSummaryPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
// "eslint-config-prettier": "^8.3.0",
// "eslint-plugin-react-hooks": "^4.3.0",
// "prettier": "^2.5.1"
