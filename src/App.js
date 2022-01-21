import { Route, Routes } from 'react-router-dom';

import Layout from './Templates/Layout/Layout';
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

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="forgot" element={<ForgotPassForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="contactForm" element={<ContactFormPage />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="unRegistered" element={<UnregisteredPage />} />
          <Route path="role" element={<RolePage />}>
            <Route path="contests" element={<ContestsPage />}>
              <Route
                path=":contestId/classes"
                element={<ClassesPage />}
              ></Route>
              <Route path=":classId" element={<LeaderboardPage />}>
                <Route path="leaderboard" element={<ClassSummaryPage />} />
                <Route path=":dogId" element={<ExercisesPage />}>
                  <Route
                    path=":dogId/dogSummary"
                    element={<DogSummaryPage />}
                  />
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
// "eslint-config-prettier": "^8.3.0",
// "eslint-plugin-react-hooks": "^4.3.0",
// "prettier": "^2.5.1"
