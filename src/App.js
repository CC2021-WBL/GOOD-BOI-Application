import "./App.css";
import PriSecBtn from "./components/PriSecBtn";
import HomePage from "./components/pages/HomePage";
import ClassCompetitorButton from "./components/ClassCompetitorButton";

function App() {
  return (
    <div className="App">
      {/* #24/UI/Primary-secondary-btns - put here for test purposes only */}
      <PriSecBtn primary text="PRIMARY" />
      <PriSecBtn secondary text="SECONDARY" />
      {/* ==== */}
      <HomePage />
      <ClassCompetitorButton classNumber='5' contestantsAmount='5'/>
    </div>
  );
}

export default App;
