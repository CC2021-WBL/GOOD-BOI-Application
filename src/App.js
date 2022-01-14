import { Route, Routes } from "react-router-dom";
import "./App.css";

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
