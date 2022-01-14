import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClassesPage from "./components/pages/ClassesPage";
import ClassSummaryPage from "./components/pages/ClassSummaryPage";
import ClassCompetitorsPage from "./components/pages/ClassCompetitorsPage";
import ContestsPage from "./components/pages/ContestsPage";
import ExcersisesPage from "./components/pages/ExcersisesPage";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import SingleSummaryPage from "./components/pages/SingleSummaryPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contests" element={<ContestsPage />}>
          <Route path=":contestId/classes" element={<ClassesPage />}>
            <Route path=":classId" element={<ClassCompetitorsPage />}>
              <Route path=":dogId" element={<ExcersisesPage />}>
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
