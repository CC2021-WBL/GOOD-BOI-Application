import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClassCompetitorsPage from "./Pages/ClassCompetitorsPage/ClassCompetitorsPage";
import ClassesPage from "./Pages/ClassesPage/ClassesPage";
import ClassSummaryPage from "./Pages/ClassSummaryPage/ClassSummaryPage";
import ContestsPage from "./Pages/ContestsPage/ContestsPage";
import ExercisesPage from "./Pages/ExercisesPage/ExcersisesPage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SingleSummaryPage from "./Pages/SingleSummaryPage/SingleSummaryPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contests" element={<ContestsPage />}>
          <Route path=":contestId/classes" element={<ClassesPage />}>
            <Route path=":classId" element={<ClassCompetitorsPage />}>
              <Route path=":dogId" element={<ExercisesPage />}>
                <Route path="summary" element={<SingleSummaryPage />} />
              </Route>
              <Route path="leaderboard" element={<ClassSummaryPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
