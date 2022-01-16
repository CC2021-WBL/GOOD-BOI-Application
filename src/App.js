import './App.css';
import ClassCompetitorsPage from './Pages/ClassCompetitorsPage/ClassCompetitorsPage';
import ClassesPage from './Pages/ClassesPage/ClassesPage';
import ClassSummaryPage from './Pages/ClassSummaryPage/ClassSummaryPage';
import ContestsPage from './Pages/ContestsPage/ContestsPage';
import ExercisesPage from './Pages/ExercisesPage/ExercisesPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SingleSummaryPage from './Pages/SingleSummaryPage/SingleSummaryPage';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Footer from './Molecules/Footer/Footer';
=======
import ForgotPassPage from './Pages/ForgotPassPage/ForgotPassPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
>>>>>>> development

const SingleContestPage = () => {
  return (
    <>
      <h1>I am a single Contest Page Component</h1>;
      <Footer />
    </>
  );
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot" element={<ForgotPassPage />} />
          <Route path="contests" element={<ContestsPage />} />
          <Route path="contests/:contestsId" element={<SingleContestPage />} />
          <Route
            path="contests/:contestsId/classes"
            element={<ClassesPage />}
          />
          <Route
            path="contests/:contestsId/classes/:classId"
            element={<ClassCompetitorsPage />}
          />
          <Route
            path="contests/:contestsId/classes/:classId/:dogId"
            element={<ExercisesPage />}
          />
          <Route
            path="contests/:contestsId/classes/:classId/:dogId/summary"
            element={<SingleSummaryPage />}
          />
          <Route
            path="contests/:contestsId/classes/:classId/leaderboard"
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
