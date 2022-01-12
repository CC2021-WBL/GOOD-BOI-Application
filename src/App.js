import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClassesPage from "./components/pages/ClassesPage";
import ClassSummaryPage from "./components/pages/ClassSummaryPage";
import CompetitorsPage from "./components/pages/CompetitorsPage";
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
        <Route path="/contests" element={<ContestsPage />} />
        <Route path="/contest/1/classes" element={<ClassesPage />} />
        <Route path="/contest/1/class/1" element={<CompetitorsPage />} />
        <Route path="/contest/1/class/1/Woof" element={<ExcersisesPage />} />
        <Route
          path="/contest/1/class/1/Woof/summary"
          element={<SingleSummaryPage />}
        />
        <Route
          path="//contest/1/class/1/leaderboard"
          element={<ClassSummaryPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
