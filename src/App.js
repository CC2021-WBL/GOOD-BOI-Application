import { Route, Routes } from 'react-router-dom';

import Layout from './Templates/Layout/Layout';
import LoginForm from './Organisms/LoginForm/LoginForm';
import ClassesPage from './Pages/ClassesPage/ClassesPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import ContestsPage from './Pages/ContestsPage/ContestsPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ExercisesPage from './Pages/ExercisesPage/ExercisesPage';
import ForgotPassForm from './Organisms/ForgotPassForm/ForgotPassForm';
import ClassSummaryPage from './Pages/ClassSummaryPage/ClassSummaryPage';
import SingleSummaryPage from './Pages/SingleSummaryPage/SingleSummaryPage';
import RegistrationForm from './Organisms/RegistrationForm/RegistrationForm';
import ClassCompetitorsPage from './Pages/ClassCompetitorsPage/ClassCompetitorsPage';
import HomePage from './Pages/HomePage/HomePage';

import './App.css';

const SingleContestPage = () => {
  return <h1>I am a single Contest Page Component</h1>;
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route element={<HomePage />}>
            <Route path="forgot" element={<ForgotPassForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegistrationForm />} />
            <Route path="contests" element={<ContestsPage />} />
            <Route
              path="contests/:contestsId"
              element={<SingleContestPage />}
            />
            <Route
              path="contests/:contestsId/classes"
              element={<ClassesPage />}
            />
            <Route
              path="contests/:contestsId/classes/:classId"
              element={<ClassCompetitorsPage />}
            />
            <Route
              path="contests/:contestsId/classes/:classId/leaderboard"
              element={<ClassSummaryPage />}
            />
            <Route
              path="contests/:contestsId/classes/:classId/:dogId"
              element={<ExercisesPage />}
            />
            <Route
              path="contests/:contestsId/classes/:classId/:dogId/summary"
              element={<SingleSummaryPage />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
// "eslint-config-prettier": "^8.3.0",
// "eslint-plugin-react-hooks": "^4.3.0",
// "prettier": "^2.5.1"
