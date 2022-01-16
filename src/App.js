import './App.css';
import ClassCompetitorsPage from './Pages/ClassCompetitorsPage/ClassCompetitorsPage';
import ClassesPage from './Pages/ClassesPage/ClassesPage';
import ClassSummaryPage from './Pages/ClassSummaryPage/ClassSummaryPage';
import ContestsPage from './Pages/ContestsPage/ContestsPage';
import ExercisesPage from './Pages/ExercisesPage/ExercisesPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPageStyled';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import DogSummaryPage from './Pages/DogSummaryPage/DogSummaryPage';
import LeaderboardPage from './Pages/LeaderboardPage/LeaderboardPage';
import RolePage from './Pages/RolePage/RolePage';
import UnregisteredPage from './Pages/UnregisteredPage/UnregisteredPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="unRegistered" element={<UnregisteredPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
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
            path="role/contests/:contestsId/classes/:classId/:dogId"
            element={<ExercisesPage />}
          />
          <Route
            path="role/contests/:contestsId/classes/:classId/:dogId/dogSummary"
            element={<DogSummaryPage />}
          />
          <Route
            path="role/contests/:contestsId/classes/:classId/classSummary"
            element={<ClassSummaryPage />}
          />
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
